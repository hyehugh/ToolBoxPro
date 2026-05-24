#!/usr/bin/env python3
with open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the transition point between the last original blog post and the first new one
# The last original blog is "percentage-calculator"
for i, line in enumerate(lines):
    if 'percentage-calculator' in line:
        # Check lines around this area
        for j in range(max(0, i-2), min(len(lines), i+15)):
            print(f"{j+1}: {lines[j].rstrip()[:150]}")
        print("---")
        break
