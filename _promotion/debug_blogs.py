#!/usr/bin/env python3
import re

with open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Count blog posts by finding all "slug:" entries (not in interface definition)
slugs = re.findall(r'^\s+slug:\s+"([^"]+)"', text, re.MULTILINE)
print(f"Total blog posts (by slug): {len(slugs)}")

# Check each post for toolSlug
for i, slug in enumerate(slugs):
    # Find the position of this slug
    pos = text.find(f'slug: "{slug}"')
    # Look ahead for toolSlug before the next slug or closing ];
    end_pos = text.find(f'slug: "', pos + 10)
    if end_pos == -1:
        end_pos = text.rfind('];')
    section = text[pos:end_pos]
    if 'toolSlug:' not in section:
        print(f"  MISSING toolSlug: {slug}")

# Check for obvious JS issues in the new posts
# Look for unterminated template literals
backtick_count = text.count('`')
print(f"\nBacktick count: {backtick_count} (should be even: {backtick_count % 2 == 0})")

# Check array structure
bracket_count = text.count('[')
bracket_close = text.count(']')
print(f"Square brackets: [{bracket_count} open, {bracket_close} close] {'OK' if bracket_count == bracket_close else 'MISMATCH'}")

# Check the last 20 lines
lines = text.split('\n')
print(f"\nLast 10 lines:")
for i, line in enumerate(lines[-10:], len(lines)-9):
    print(f"  {i}: {line}")
