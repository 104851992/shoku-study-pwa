"""Validate all PWA PNG icon chunks, not just the signature and dimensions."""
import pathlib
import struct
import zlib

ROOT = pathlib.Path(__file__).resolve().parent.parent


def verify_png(data: bytes) -> tuple[int, int]:
    if not data.startswith(b'\x89PNG\r\n\x1a\n'):
        raise ValueError('bad PNG signature')
    offset, seen_ihdr, seen_idat, seen_iend = 8, False, False, False
    dimensions = None
    while offset < len(data):
        if offset + 12 > len(data):
            raise ValueError('truncated chunk header')
        length = struct.unpack_from('>I', data, offset)[0]
        if length > len(data) - offset - 12:
            raise ValueError('truncated chunk data')
        kind = data[offset+4:offset+8]
        payload = data[offset+8:offset+8+length]
        stored = struct.unpack_from('>I', data, offset+8+length)[0]
        actual = zlib.crc32(kind + payload) & 0xffffffff
        if actual != stored:
            raise ValueError(f'CRC mismatch in {kind!r}')
        if not seen_ihdr:
            if kind != b'IHDR' or length != 13:
                raise ValueError('missing first IHDR')
            dimensions = struct.unpack_from('>II', payload)
            if min(dimensions) < 1:
                raise ValueError('invalid dimensions')
            seen_ihdr = True
        elif kind == b'IHDR':
            raise ValueError('duplicate IHDR')
        if kind == b'IDAT':
            seen_idat = True
        if kind == b'IEND':
            if length or not seen_idat:
                raise ValueError('invalid IEND')
            seen_iend = True
            offset += 12 + length
            break
        offset += 12 + length
    if not seen_iend or offset != len(data):
        raise ValueError('missing IEND or trailing bytes')
    return dimensions


def main():
    for size in (192, 512):
        path = ROOT / 'public' / f'icon-{size}.png'
        data = path.read_bytes()
        assert verify_png(data) == (size, size)
        print(f'PASS {path.name}: all PNG chunks verified')
        corrupted = bytearray(data)
        corrupted[20] ^= 1
        try:
            verify_png(corrupted)
        except ValueError as exc:
            assert 'CRC mismatch' in str(exc)
        else:
            raise AssertionError('CRC corruption was not detected')
        print(f'PASS {path.name}: corrupted chunk rejected')
    print('4/4 PNG integrity checks passed')


if __name__ == '__main__':
    main()
