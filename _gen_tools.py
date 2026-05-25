import re, os

os.chdir("D:\\01_Coding\\60_工具网站\\toolboxpro")
with open("lib/tools/data.ts", "r") as f:
    content = f.read()

# Extract each tool object
tools = []
pattern = r'{\s*\n\s*slug:\s*["\']([^"\']+)["\'],\s*\n\s*name:\s*["\']([^"\']+)["\'],\s*\n\s*description:\s*["\']([^"\']+)["\'],'
for m in re.finditer(pattern, content):
    slug, name, desc = m.groups()
    tools.append((slug, name, desc))

print(f"Total tools: {len(tools)}")
print()

for slug, name, desc in tools:
    print(f'    "{slug}": {{ name: "{name}", desc: "{desc}" }},')
