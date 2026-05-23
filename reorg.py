import re

with open('/d/01_Coding/60_工具网站/toolboxpro/lib/tools/data.ts', 'r') as f:
    content = f.read()

# Slug -> new category mapping
moves = {
    # Developer tools that should move
    "text-to-binary": "text",
    "binary-to-text": "text",
    "password-generator": "utilities",
    "ip-calculator": "developer",
    "ssl-checker": "network",
    "dns-lookup": "network",
    "whois-lookup": "network",
    "password-strength": "developer",
    # Conversion -> Utilities
    "random-number-generator": "utilities",
    "timezone-converter": "utilities",
    "percentage-calculator": "utilities",
    "tip-calculator": "utilities",
    "age-calculator": "utilities",
    "bmi-calculator": "utilities",
    "days-between": "utilities",
    "aspect-ratio-calculator": "utilities",
    "roman-numeral": "utilities",
    "decision-maker": "utilities",
    "dice-roller": "utilities",
    "countdown-timer": "utilities",
    # Audio -> audio
    "audio-cutter": "audio",
    "audio-merger": "audio",
    "audio-converter": "audio",
    # timestamp converter -> conversion
    "timestamp-converter": "conversion",
}

# Find each slug's category line and update it
for slug, new_cat in moves.items():
    # Find the block for this slug
    pattern = f"slug: '{slug}',"
    idx = content.find(pattern)
    if idx == -1:
        print(f"  NOT FOUND: {slug}")
        continue
    
    # Find the category: line within the next 10 lines
    block = content[idx:idx+500]
    cat_match = re.search(r"(category: ')('[^']*')", block)
    if cat_match:
        old_line = cat_match.group(0)
        new_line = f"category: '{new_cat}'"
        content = content.replace(old_line, new_line, 1)
        old_cat = cat_match.group(2).strip("'")
        if old_cat != new_cat:
            print(f"  {slug:<30} '{old_cat}' → '{new_cat}'")
    else:
        print(f"  NO CATEGORY: {slug}")

# Update the categories array
categories_pattern = r"export const categories = \[([^\]]+)\]"
categories_match = re.search(categories_pattern, content, re.DOTALL)
if categories_match:
    new_categories = """export const categories = [
  { id: "developer" as const, name: "Developer Tools", icon: "⌨️" },
  { id: "text" as const, name: "Text Tools", icon: "✍️" },
  { id: "image" as const, name: "Image Tools", icon: "🖼️" },
  { id: "pdf" as const, name: "PDF Tools", icon: "📄" },
  { id: "audio" as const, name: "Audio Tools", icon: "🎵" },
  { id: "network" as const, name: "Network Tools", icon: "🌐" },
  { id: "conversion" as const, name: "Unit Converters", icon: "📐" },
  { id: "utilities" as const, name: "Utilities", icon: "🧰" },
];"""
    content = re.sub(categories_pattern, new_categories, content, flags=re.DOTALL)
    print("\nUpdated categories array")

with open('/d/01_Coding/60_工具网站/toolboxpro/lib/tools/data.ts', 'w') as f:
    f.write(content)

print("\nDone!")
