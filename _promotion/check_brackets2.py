#!/usr/bin/env python3
with open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

depth = 0
for i, line in enumerate(lines, 1):
    # Skip lines inside template literals (backtick strings)
    opens = line.count('[')
    closes = line.count(']')
    depth += opens - closes
    if depth < 0:
        print(f"Line {i}: NEGATIVE depth={depth} | {line.rstrip()[:120]}")
        # Reset to try to continue
        depth = 0

print(f"Final depth: {depth}")
