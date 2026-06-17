# Fix the sql-formatting-guide entry: replace \\` with \` within the content fields
# In the TSX file, \\` is: backslash, backslash, backtick (3 bytes)
# Should be: backslash, backtick (2 bytes)

with open('lib/blog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the entry boundaries
slug = 'slug: "sql-formatting-guide"'
entry_start = content.find(slug)
assert entry_start != -1, "Entry not found!"

# Find content and contentZh fields
content_field = content.find('content: `', entry_start)
content_zh_field = content.find('contentZh: `', entry_start)

# Find content closing
content_open = content_field + len('content: `')
content_close = content.find('`,\n    contentZh:', content_open)

# Find contentZh closing
zh_open = content_zh_field + len('contentZh: `')
zh_close = content.find('`,\n  },', zh_open)

print(f"EN content: bytes {content_open} to {content_close}")
print(f"ZH content: bytes {zh_open} to {zh_close}")

# Extract each section
en_content = content[content_open:content_close]
zh_content = content[zh_open:zh_close]

# Fix: replace \\` (two backslashes + backtick) with \` (one backslash + backtick)
# In the file: \\` = chr(92)+chr(92)+chr(96)
# Fix to: \` = chr(92)+chr(96)
old_seq = chr(92) + chr(92) + chr(96)
new_seq = chr(92) + chr(96)

en_fixed = en_content.replace(old_seq, new_seq)
zh_fixed = zh_content.replace(old_seq, new_seq)

en_count = en_content.count(old_seq)
zh_count = zh_content.count(old_seq)

print(f"EN content: {en_count} fixes")
print(f"ZH content: {zh_count} fixes")

if en_count + zh_count == 0:
    print("No changes needed, exiting")
    exit(0)

# Rebuild file
new_content = (
    content[:content_open] +
    en_fixed +
    content[content_close:zh_open] +
    zh_fixed +
    content[zh_close:]
)

with open('lib/blog/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✅ Fixed {en_count + zh_count} occurrences")

# Verify structure
for term in ['slug: "sql-formatting-guide"', 'content: `', 'contentZh: `']:
    old_c = content.count(term)
    new_c = new_content.count(term)
    print(f"  {term}: {old_c} → {new_c}")
