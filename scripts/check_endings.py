#!/usr/bin/env python3
"""Check file line endings"""
with open('D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts', 'rb') as f:
    data = f.read()
    crlf_count = data.count(b'\r\n')
    lf_count = data.count(b'\n')
    print(f'CRLF: {crlf_count}, LF: {lf_count} ({lf_count - crlf_count} bare LF)')
    
    idx = data.find(b'slug: "how-to-format-json-online"')
    search = data[idx:idx+15000]
    
    # Find \`,\n
    for pattern in [b'`,\n  },\n  {', b'`,\r\n  },\r\n  {']:
        pos = search.find(pattern)
        if pos >= 0:
            print(f'Found pattern {pattern!r} at offset {pos}')
            print(f'Context: {search[pos-20:pos+50]!r}')
