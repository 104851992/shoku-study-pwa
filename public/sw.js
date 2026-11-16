/* Web-only offline shell. Learning records remain in AsyncStorage, not Cache Storage. */
const CACHE = 'shoku-manabi-offline-v23';
const MAX_ENTRIES = 120;
const SHELL = ['/', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'];
const CACHE_PREFIX = 'shoku-manabi-offline-v';
// CacheStorage.keys() is insertion-ordered, not guaranteed to reflect release age.
function priorCacheNames(keys) {
  return keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE &&
    /^\d+$/.test(key.slice(CACHE_PREFIX.length)) &&
    Number(key.slice(CACHE_PREFIX.length)) < Number(CACHE.slice(CACHE_PREFIX.length)))
    .sort((a, b) => Number(b.slice(CACHE_PREFIX.length)) - Number(a.slice(CACHE_PREFIX.length)));
}
const ASSET_MIME = /^(?:application\/(?:javascript|x-javascript|wasm)|text\/(?:javascript|css)|image\/|font\/|application\/(?:font-|octet-stream)|application\/vnd\.ms-fontobject)/i;
const SENSITIVE_VARY = /(?:^|,)\s*(?:\*|cookie|authorization)\s*(?:,|$)/i;
// Private/no-cache directives may carry quoted field names.
// no-cache and must-revalidate require revalidation rather than stale offline reuse.
const SENSITIVE_CACHE_CONTROL = /(?:^|,)\s*(?:private|no-store|no-cache|must-revalidate)\s*(?:=|,|$)/i;
// Responses asking clients to clear origin storage must not be saved for offline replay.
const CLEAR_SITE_DATA = 'clear-site-data';
// Redirected responses can represent sign-in pages or alternate content.
// Do not cache them under the original app-shell or asset URL.
const SCRIPT_MIME = /^(?:application|text)\/(?:javascript|x-javascript)(?:\s*;|\s*$)/i;
const STYLE_MIME = /^text\/css(?:\s*;|\s*$)/i;
const STATIC_FILE = /\.(?:js|css|png|jpg|jpeg|webp|svg|ico|woff2?|ttf)$/i;

// Installation uses the same privacy and MIME guards as runtime caching.
// A failed or rejected shell resource must never be persisted blindly.
async function precacheShellEntry(cache, path) {
  const response = await fetch(new Request(path, { cache: 'no-store' }));
  const type = response.headers.get('content-type') || '';
  const validType = path === '/' ? type.includes('text/html') :
    path === '/manifest.webmanifest' ? type.includes('json') : /^image\//i.test(type);
  if (response.status !== 200 || response.redirected || response.type !== 'basic' || !validType ||
      (response.headers.has('set-cookie') || response.headers.has(CLEAR_SITE_DATA)) ||
      SENSITIVE_VARY.test(response.headers.get('vary') || '') ||
      SENSITIVE_CACHE_CONTROL.test(response.headers.get('cache-control') || '')) return false;
  await cache.put(path, response);
  return true;
}
// Expo's first page load can request JS/CSS before this worker controls the page.
// Discover same-origin build assets from the verified HTML shell during install.
async function precacheInitialAssets(cache) {
  const shell = await cache.match('/');
  if (!shell || typeof shell.text !== 'function') return;
  const html = await shell.text();
  const urls = new Set();
  const tags = /<(?:script|link)\b[^>]*\b(?:src|href)\s*=\s*["']([^"']+)["'][^>]*>/gi;
  for (const match of html.matchAll(tags)) {
    let url;
    try { url = new URL(match[1], self.location.origin); } catch { continue; }
    if (url.origin !== self.location.origin || url.search || url.hash ||
        !/^\/(?:_expo\/static\/|assets\/)/.test(url.pathname) ||
        !/\.(?:js|css)$/.test(url.pathname)) continue;
    urls.add(url.pathname);
    if (urls.size >= 40) break;
  }
  await Promise.allSettled([...urls].map(async path => {
    const response = await fetch(new Request(path, { cache: 'no-store' }));
    const type = response.headers.get('content-type') || '';
    if (response.status !== 200 || response.redirected || response.type !== 'basic' ||
        !(/\.js$/.test(path) ? SCRIPT_MIME.test(type) : STYLE_MIME.test(type)) ||
        response.headers.has('set-cookie') || response.headers.has(CLEAR_SITE_DATA) ||
        SENSITIVE_VARY.test(response.headers.get('vary') || '') ||
        SENSITIVE_CACHE_CONTROL.test(response.headers.get('cache-control') || '')) return;
    await cache.put(path, response);
  }));
}
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE);
      await Promise.allSettled(SHELL.map(path => precacheShellEntry(cache, path)));
      try { await precacheInitialAssets(cache); } catch (assetError) { /* Shell remains usable online. */ }
    } catch (storageError) {
      // Online operation must remain possible when Cache Storage is denied.
    }
    // Keep the lifecycle promise pending until skipWaiting has settled.
    // Otherwise activation can race the end of installation on slow devices.
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Cache Storage can be denied or unavailable during activation as well.
    // A failed cleanup must not prevent this worker from controlling online pages.
    try {
      const keys = await caches.keys();
      // Retain one previous deployment, including its hashed JS/CSS files.
      // A new HTML shell alone does not prove that its asset graph is cached.
      const older = priorCacheNames(keys);
      const stale = older.slice(1); // Keep the numerically newest previous release.
      // Remove future-version caches only if explicitly managed by a newer worker;
      // an older worker must never destroy a newer release's offline data.
      await Promise.allSettled(stale.map(key => caches.delete(key)));
    } catch (storageError) {
      // Old caches may remain until a later successful activation.
    }
    await self.clients.claim();
  })());
});
// Prefer the current verified shell, but recover from an older cache if a
// deployment was activated while its new HTML shell was unavailable.
async function offlineCachedResponse(request, navigation = false) {
  const current = await caches.open(CACHE);
  const cached = await current.match(navigation ? '/' : request);
  if (cached) return cached;
  const keys = await caches.keys();
  // Previous deployment assets may have hashed filenames no longer served online.
  for (const key of priorCacheNames(keys)) {
    const previous = await caches.open(key);
    const prior = await previous.match(navigation ? '/' : request);
    if (prior) return prior;
  }
  return undefined;
}
async function offlineShellFallback() {
  return offlineCachedResponse('/', true);
}
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/.netlify/') || url.pathname.endsWith('.json')) return;
  // Do not persist personalized requests, query-bearing endpoints, or API responses.
  if (url.search || request.headers.has('authorization') || request.headers.has('range') || request.cache === 'no-store') return;
  const navigation = request.mode === 'navigate';
  const staticAsset = STATIC_FILE.test(url.pathname) || SHELL.includes(url.pathname);
  // Never persist arbitrary navigation pages; only the known application shell.
  const cacheableNavigation = navigation && url.pathname === '/';
  if (!navigation && !staticAsset) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      // A 5xx response is not a network exception. Recover a previously
      // verified shell or static asset without caching the failed response.
      // Never substitute HTML for a failed JS/CSS asset request.
      if (response.status >= 500 && response.status <= 599) {
        try {
          const fallback = navigation ? await offlineShellFallback() :
            await offlineCachedResponse(request);
          if (fallback) return fallback;
        } catch (storageError) { /* Keep the server response. */ }
      }
      const contentType = response.headers.get('content-type') || '';
      const validType = navigation ? contentType.includes('text/html') :
        (url.pathname === '/manifest.webmanifest' ? contentType.includes('json') :
        (url.pathname === '/' ? contentType.includes('text/html') :
        /\.js$/i.test(url.pathname) ? SCRIPT_MIME.test(contentType) :
        /\.css$/i.test(url.pathname) ? STYLE_MIME.test(contentType) : ASSET_MIME.test(contentType)));
      if (response.status === 200 && !response.redirected && response.type === 'basic' && validType && !response.headers.has('set-cookie') && !response.headers.has(CLEAR_SITE_DATA) && !SENSITIVE_VARY.test(response.headers.get('vary') || '') && !SENSITIVE_CACHE_CONTROL.test(response.headers.get('cache-control') || '') && (!navigation || cacheableNavigation)) {
        // Use canonical shell for navigation fallback, but preserve route-specific cache keys.
        // Cache Storage can fail (quota, private browsing, eviction).
        // Never turn a successful network response into a failed page load.
        try {
          const cache = await caches.open(CACHE);
          await cache.put(request, response.clone());
          const keys = await cache.keys();
        // Preserve the offline shell even after many static assets are cached.
        // A FIFO eviction of keys[0] could remove '/', breaking offline launch.
        if (keys.length > MAX_ENTRIES) {
          const optional = keys.filter(key => !SHELL.includes(new URL(key.url).pathname));
          const excess = keys.length - MAX_ENTRIES;
          await Promise.all(optional.slice(0, excess).map(key => cache.delete(key)));
          }
        } catch (cacheError) {
          // Offline caching is best-effort; the fetched response is still usable.
        }
      }
      return response;
    } catch (error) {
      // Cache Storage itself may be unavailable (private mode or storage denial).
      // Preserve the original network error instead of replacing it with a storage error.
      try {
        const cached = await offlineCachedResponse(request);
        if (cached) return cached;
        if (navigation) {
          const fallback = await offlineShellFallback();
          if (fallback) return fallback;
        }
      } catch (storageError) {
        // No cached fallback is accessible.
      }
      throw error;
    }
  })());
});
