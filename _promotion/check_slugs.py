#!/usr/bin/env python3
lines = open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8').readlines()
current_slug = None
for i, line in enumerate(lines, 1):
    s = line.strip()
    if 'slug:' in s and 'toolSlug' not in s:
        current_slug = s.split('slug:')[1].strip().strip(',').strip("'").strip('"')
    elif 'toolSlug:' in s:
        current_slug = None
    elif s == '},' or s == ']' or s == '];':
        if current_slug:
            print(f'Line {i-1}: MISSING toolSlug for slug "{current_slug}"')
            current_slug = None
        current_slug = None
print('Done')
