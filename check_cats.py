import re
with open('/d/01_Coding/60_工具网站/toolboxpro/lib/tools/data.ts') as f:
    content = f.read()

tools = re.findall(r"slug: '([^']+)',\s*\n.*?name: '([^']+)',\s*\n.*?category: '([^']+)'", content)

print(f"{'CATEGORY':<15} {'TOOL NAME'}")
print("="*60)
for slug, name, cat in tools:
    print(f'{cat:<15} {name}')

print()
cats = {}
for _, _, c in tools:
    cats[c] = cats.get(c, 0) + 1
print(f"{'CATEGORY':<15} COUNT")
print("="*25)
for c, n in sorted(cats.items(), key=lambda x: -x[1]):
    print(f'{c:<15} {n}')
