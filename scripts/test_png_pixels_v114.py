"""Dependency-free PNG pixel decoding regression for the shipped RGB PWA icons."""
import struct
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def decode_rgb(data):
    if data[:8] != b'\x89PNG\r\n\x1a\n':
        raise ValueError('PNG signature')
    offset, compressed, dimensions = 8, bytearray(), None
    while offset + 12 <= len(data):
        length = struct.unpack_from('>I', data, offset)[0]
        if offset + length + 12 > len(data):
            raise ValueError('truncated PNG chunk')
        kind = data[offset + 4:offset + 8]
        payload = data[offset + 8:offset + 8 + length]
        crc = struct.unpack_from('>I', data, offset + 8 + length)[0]
        if zlib.crc32(kind + payload) != crc:
            raise ValueError('PNG chunk CRC')
        offset += length + 12
        if kind == b'IHDR':
            width, height, depth, color, compression, filtering, interlace = struct.unpack('>IIBBBBB', payload)
            if (depth, color, compression, filtering, interlace) != (8, 2, 0, 0, 0):
                raise ValueError('unsupported PNG format')
            dimensions = width, height
        elif kind == b'IDAT':
            compressed.extend(payload)
        elif kind == b'IEND':
            break
    if not dimensions:
        raise ValueError('missing dimensions')
    width, height = dimensions
    stride = width * 3
    raw = zlib.decompress(compressed)
    if len(raw) != height * (stride + 1):
        raise ValueError('invalid scanline length')
    pixels, previous, pos = bytearray(), bytearray(stride), 0
    for _ in range(height):
        mode = raw[pos]
        pos += 1
        scanline = bytearray(raw[pos:pos + stride])
        pos += stride
        if mode not in range(5):
            raise ValueError('invalid PNG filter')
        for i in range(stride):
            left = scanline[i - 3] if i >= 3 else 0
            above = previous[i]
            upper_left = previous[i - 3] if i >= 3 else 0
            if mode == 1:
                predictor = left
            elif mode == 2:
                predictor = above
            elif mode == 3:
                predictor = (left + above) // 2
            elif mode == 4:
                p = left + above - upper_left
                d = [abs(p - left), abs(p - above), abs(p - upper_left)]
                predictor = (left, above, upper_left)[d.index(min(d))]
            else:
                predictor = 0
            scanline[i] = (scanline[i] + predictor) & 255
        pixels.extend(scanline)
        previous = scanline
    return width, height, bytes(pixels)


def test():
    count = 0
    for size in (192, 512):
        width, height, pixels = decode_rgb((ROOT / f'public/icon-{size}.png').read_bytes())
        assert (width, height) == (size, size)
        assert len(set(zip(pixels[::3], pixels[1::3], pixels[2::3]))) >= 2, 'blank solid-color icon'
        print(f'PASS {size}px icon decoded and nonblank')
        count += 1
    source = (ROOT / 'public/icon-192.png').read_bytes()
    try:
        decode_rgb(source[:-20])
    except (ValueError, zlib.error):
        print('PASS truncated compressed icon rejected')
        count += 1
    else:
        raise AssertionError('truncated PNG accepted')
    print(f'{count}/{count} pixel decoding tests passed')


if __name__ == '__main__':
    test()
