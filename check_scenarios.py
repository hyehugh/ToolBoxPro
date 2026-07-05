import re

with open('lib/tools/scenarios.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'"([^"]+)":\s*\[(.*?)\]\s*,?\s*(?=\n\s*"[^"]+"|\n\s*\})', re.DOTALL)
item_pattern = re.compile(r'\{\s*title:\s*"([^"]*)"\s*,\s*titleZh:\s*"([^"]*)"\s*,\s*icon:\s*"([^"]*)"\s*,\s*description:\s*"([^"]*)"\s*,\s*descriptionZh:\s*"([^"]*)"\s*\}')

current = {}
for m in pattern.finditer(content):
    slug = m.group(1)
    items = item_pattern.findall(m.group(2))
    if items:
        current[slug] = items

print(f"Current tools with scenarios: {len(current)}")
print("Checking for generic templates...")

bad = {'Debug During Development','Prepare Data for APIs','Learn and Experiment',
       'Daily Calculations','Track Important Dates','Make Quick Decisions',
       'Convert for Recipes','Engineering Calculations','Travel Planning',
       'Optimize for Web','Edit Photos Quickly','Create Visual Content',
       'Clean Up Content','Process Data Files','Prepare Documentation',
       'Merge Documents','Split and Extract','Prepare for Printing'}

for slug, items in current.items():
    for item in items:
        if item[0] in bad:
            print(f"BAD: {slug} -> {item[0]}")
            break

PYEOF
