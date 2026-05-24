#!/usr/bin/env python3
with open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the new posts (toolboxpro-vs-tinywow is the first new post)
for i, line in enumerate(lines):
    if 'toolboxpro-vs-tinywow-vs-ilovepdf' in line:
        # Show 5 lines before and 10 lines after
        for j in range(max(0, i-5), min(len(lines), i+10)):
            print(f"{j+1}: |{lines[j].rstrip()}")
        break
