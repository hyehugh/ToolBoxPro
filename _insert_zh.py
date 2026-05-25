"""Read Chinese blog translations from zh/*.md files and insert contentZh into data.ts

CRITICAL: properly escapes backticks and backslashes for template literals.
"""
import re, os

BASE = "D:/01_Coding/60_工具网站/toolboxpro/lib/blog"
DATA_FILE = f"{BASE}/data.ts"
ZH_DIR = f"{BASE}/zh"

# Read data.ts
with open(DATA_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Read all zh/ files
zh_map = {}
for fname in os.listdir(ZH_DIR):
    if fname.endswith(".md"):
        slug = fname[:-3]  # remove .md
        with open(f"{ZH_DIR}/{fname}", "r", encoding="utf-8") as f:
            zh_map[slug] = f.read()

print(f"Found {len(zh_map)} Chinese translations")
print(f"Slugs: {sorted(zh_map.keys())}")

# For each slug, insert contentZh after the content field in data.ts
for slug, zh_content in sorted(zh_map.items()):
    # Escape backticks in the content for template literal
    # In a JS template literal, ` must be written as \`
    # Also $ followed by { must be escaped as \$
    zh_escaped = zh_content.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    
    # Build the contentZh field to insert
    zh_field = f"    contentZh: `{zh_escaped}`,\n"
    
    # Find the content field for this slug
    # Pattern: after "content: `...`," insert contentZh
    # Find the slug first
    slug_pattern = f'    slug: "{slug}",'
    idx = content.find(slug_pattern)
    if idx == -1:
        print(f"  [SKIP] slug '{slug}' not found in data.ts")
        continue
    
    # Check if contentZh already exists
    post_end = content.find("  },", idx)
    post_section = content[idx:post_end+4]
    if "contentZh:" in post_section:
        print(f"  [SKIP] {slug} already has contentZh")
        continue
    
    # Find the content: closing backtick + comma
    # content: `...`,\n
    # The content field ends with `,\n
    search_from = idx
    while True:
        # Find next "content:" 
        ci = content.find("content:", search_from)
        if ci == -1 or ci > post_end:
            print(f"  [ERR] {slug}: can't find content field")
            break
        
        # Find the closing backtick + comma for this content field
        # After content: there's a space and opening backtick
        content_start = content.index("`", ci)
        
        # Find the matching closing backtick + comma
        # The closing is \n`,\n or similar
        # We need to find `, after the content
        rest = content[content_start+1:]
        # Count backticks to find the unescaped closing one
        pos = 0
        in_template = True
        while pos < len(rest):
            c = rest[pos]
            if c == "\\":
                pos += 2  # skip escaped char
                continue
            if c == "`":
                # Check if followed by comma
                if pos + 1 < len(rest) and rest[pos+1] == ",":
                    # Found closing
                    close_pos = content_start + 1 + pos
                    # Insert contentZh AFTER the `,\n
                    insert_pos = close_pos + 2  # after `,
                    content = content[:insert_pos] + "\n" + zh_field + content[insert_pos:]
                    print(f"  [OK] {slug}: inserted contentZh")
                    break
                else:
                    # Another backtick - might be in code
                    pos += 1
                    continue
            pos += 1
        else:
            print(f"  [ERR] {slug}: can't find content closing")
        break

# Write updated data.ts
with open(DATA_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone! data.ts updated")
