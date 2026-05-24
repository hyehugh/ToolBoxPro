#!/usr/bin/env python3
import re

with open(r'D:\01_Coding\60_工具网站\toolboxpro\lib\blog\data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')

# Find unmatched brackets
depth = 0
for i, line in enumerate(lines, 1):
    opens = line.count('[')
    closes = line.count(']')
    new_depth = depth + opens - closes
    if new_depth < 0:
        print(f"Line {i}: NEGATIVE depth! (was {depth}, {opens} open, {closes} close): {line[:100]}")
    depth = new_depth

# Specifically find lines with ] that might be extra
for i, line in enumerate(lines, 1):
    if ']' in line and '];' not in line and '[' not in line and ']' not in line.replace(']', '', 1):
        pass  # skip normal lines

print(f"Final depth: {depth} (should be 0)")
