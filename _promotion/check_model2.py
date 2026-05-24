#!/usr/bin/env python3
import json, subprocess, sys

# Save model info first
url = "https://huggingface.co/api/models/Xenova/t5-base-grammar-correction"
result = subprocess.run(['curl', '-s', url], capture_output=True, text=True, timeout=15)
data = json.loads(result.stdout)

for sib in data['siblings']:
    fn = sib['rfilename']
    size_result = subprocess.run(['curl', '-sI', f"https://huggingface.co/Xenova/t5-base-grammar-correction/resolve/main/{fn}"], capture_output=True, text=True, timeout=10)
    size = ""
    for line in size_result.stdout.split('\n'):
        if 'content-length:' in line.lower():
            size = line.strip()
    print(f"{size:50s} {fn}" if size else f"{'---':50s} {fn}")
