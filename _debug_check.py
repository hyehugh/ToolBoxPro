with open('lib/blog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
print(f'Total lines: {len(lines)}')

# Find template literal opens and closes for the new entries
for i, line in enumerate(lines, 1):
    stripped = line.strip()
    if i >= 8180 and i <= 9360:
        if stripped.startswith('content:') or stripped.startswith('contentZh:'):
            tick_pos = line.find('`')
            if tick_pos >= 0:
                before = repr(line[max(0,tick_pos-3):tick_pos+20])
                print(f'Line {i}: OPEN template literal - {before}')
        
        if stripped.endswith(','):
            btick_count = stripped.count('`')
            if btick_count > 0:
                last_btick = stripped.rfind('`')
                if last_btick > 0:
                    prev_char = stripped[last_btick-1]
                    if prev_char == '\\':
                        print(f'Line {i}: ESCAPED close (backslash+bktick+comma)')
                    else:
                        print(f'Line {i}: PROPER close (bktick+comma)')
                else:
                    print(f'Line {i}: PROPER close (bktick+comma, starts line)')
