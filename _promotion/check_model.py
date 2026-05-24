#!/usr/bin/env python3
import json, subprocess, sys

with open(sys.argv[1] if len(sys.argv) > 1 else r'D:\01_Coding\60_工具网站\toolboxpro\_promotion\model_info.json', 'r') as f:
    data = json.load(f)

for sib in data['siblings']:
    fn = sib['rfilename']
    if fn.endswith('.onnx') and 'q4' not in fn and 'bnb' not in fn and 'fp16' not in fn and 'int8' not in fn and 'uint8' not in fn and 'quantized' not in fn:
        url = f"https://huggingface.co/Xenova/t5-base-grammar-correction/resolve/main/{fn}"
        result = subprocess.run(['curl', '-sI', url], capture_output=True, text=True, timeout=10)
        for line in result.stdout.split('\n'):
            if 'content-length' in line.lower() or 'HTTP' in line:
                print(f"{fn}: {line.strip()}")
