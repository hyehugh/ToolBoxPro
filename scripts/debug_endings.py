#!/usr/bin/env python3
"""Debug: read raw bytes around content end"""
with open('D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts', 'rb') as f:
    data = f.read()

slug = b'    slug: "how-to-format-json-online",'
slug_pos = data.find(slug)
print(f"Slug position: {slug_pos}")

search_region = data[slug_pos:slug_pos+20000]
# Find the last content backtick - look for \n`,\n pattern
# The content ends with backtick + comma + newline + spaces + }, + newline
# Search for `,\n  },
backtick_comma = search_region.find(b'`,\n  },\n')
if backtick_comma >= 0:
    print(f"Found LF pattern at offset {backtick_comma}")
    ctx = search_region[backtick_comma-30:backtick_comma+30]
    print(f"Context bytes: {ctx}")
else:
    print("No LF pattern found")
    
backtick_comma2 = search_region.find(b'`,\r\n  },\r\n')
if backtick_comma2 >= 0:
    print(f"Found CRLF pattern at offset {backtick_comma2}")
    ctx = search_region[backtick_comma2-30:backtick_comma2+30]
    print(f"Context bytes: {ctx}")
else:
    print("No CRLF pattern found")
    # Print last 100 bytes to see what's there
    # Find the closing of export
    # Let's look at the area around content
    content_marker = b'    content: `'
    cm_pos = search_region.find(content_marker)
    print(f"Content marker at offset: {cm_pos}")
    # Go to end of content section
    # Look for `,\n
    scan_start = cm_pos + len(content_marker)
    bt_pos = search_region.find(b'`,\n', scan_start)
    count = 0
    while bt_pos >= 0 and count < 5:
        print(f"Backtick+comma+LF at offset {bt_pos}: {repr(search_region[bt_pos:bt_pos+30])}")
        bt_pos = search_region.find(b'`,\n', bt_pos + 1)
        count += 1
