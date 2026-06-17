# Fix all `\\`` (two backslashes + backtick) to `\`` (one backslash + backtick) in the file
# This fixes inline code escaping in template literal content

with open('lib/blog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

bs = chr(92)  # backslash
bt = chr(96)  # backtick

old_seq = bs + bs + bt  # \\`
new_seq = bs + bt        # \`

count = content.count(old_seq)
print(f"Found {count} occurrences of {repr(old_seq)}")

if count > 0:
    content = content.replace(old_seq, new_seq)
    with open('lib/blog/data.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {count} occurrences")
