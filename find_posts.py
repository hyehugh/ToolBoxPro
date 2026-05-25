#!/usr/bin/env python3
"""Add contentZh to blog posts that are missing it, using line-based approach."""
import re
import sys

filepath = 'D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find all blog posts and their line ranges
# Each post starts with a line containing `slug:` and ends before the next `slug:` or end of array
slug_lines = []
for i, line in enumerate(lines):
    m = re.match(r'\s*slug:\s*"([^"]+)"', line)
    if m:
        slug_lines.append((m.group(1), i))

# For each post, find if it has contentZh
posts_to_fix = []
for idx, (slug, start_line) in enumerate(slug_lines):
    # Determine end of this post: next slug line or end of file
    if idx + 1 < len(slug_lines):
        end_line = slug_lines[idx + 1][1]
    else:
        end_line = len(lines)
    
    # Check if contentZh exists in this post
    has_zh = False
    for i in range(start_line, end_line):
        if 'contentZh:' in lines[i]:
            has_zh = True
            break
    
    if not has_zh:
        posts_to_fix.append((slug, start_line, end_line))

print(f"Found {len(posts_to_fix)} posts without contentZh:")
for slug, start, end in posts_to_fix:
    print(f"  {slug}: lines {start+1}-{end}")

# Now let's find the exact content for each
with open(filepath, 'r', encoding='utf-8') as f:
    full_content = f.read()

for slug, start, end in posts_to_fix:
    # Read the post content
    post_text = ''.join(lines[start:end])
    
    # Find the content field
    content_match = re.search(r'content: `((?:[^`]|\\`)*)`,\n', post_text, re.DOTALL)
    if content_match:
        eng_content = content_match.group(1)
        print(f"\n=== {slug} ===")
        print(f"English content length: {len(eng_content)} chars")
        print("First 100 chars:", eng_content[:100])
        print("Last 100 chars:", eng_content[-100:])
    else:
        print(f"\nCould not parse content for {slug}")
