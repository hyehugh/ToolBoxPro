'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';

type BarcodeType = 'code128' | 'ean13' | 'code39' | 'upca';

// Code128 encoding table (simplified)
const CODE128_START = 104;
const CODE128_STOP = 106;
const CODE128_PATTERNS: number[][] = [
  [2,1,2,2,2,2], // 0
  [2,2,2,1,2,2], // 1
  [2,2,2,2,2,1], // 2
  [1,2,1,2,2,3], // 3
  [1,2,1,3,2,2], // 4
  [1,3,1,2,2,2], // 5
  [1,2,2,2,1,3], // 6
  [1,2,2,3,1,2], // 7
  [1,3,2,2,1,2], // 8
  [2,2,1,2,1,3], // 9
  [2,2,1,3,1,2], // 10
  [2,3,1,2,1,2], // 11
  [1,1,2,2,3,2], // 12
  [1,2,2,1,3,2], // 13
  [1,2,2,2,3,1], // 14
  [1,1,3,2,2,2], // 15
  [1,2,3,1,2,2], // 16
  [1,2,3,2,2,1], // 17
  [2,2,3,2,1,1], // 18
  [2,2,1,1,3,2], // 19
  [2,2,1,2,3,1], // 20
  [2,1,3,2,1,2], // 21
  [2,2,3,1,1,2], // 22
  [3,1,2,1,3,1], // 23
  [3,1,1,2,2,2], // 24
  [3,2,1,1,2,2], // 25
  [3,2,1,2,2,1], // 26
  [3,1,2,2,1,2], // 27
  [3,2,2,1,1,2], // 28
  [3,2,2,2,1,1], // 29
  [2,1,2,1,2,3], // 30
  [2,1,2,3,2,1], // 31
  [2,3,2,1,2,1], // 32
  [1,1,1,3,2,3], // 33
  [1,3,1,1,2,3], // 34
  [1,3,1,3,2,1], // 35
  [1,1,2,3,1,3], // 36
  [1,3,2,1,1,3], // 37
  [1,3,2,3,1,1], // 38
  [2,1,1,3,1,3], // 39
  [2,3,1,1,1,3], // 40
  [2,3,1,3,1,1], // 41
  [1,1,2,1,3,3], // 42
  [1,1,2,3,3,1], // 43
  [1,3,2,1,3,1], // 44
  [1,1,3,1,2,3], // 45
  [1,1,3,3,2,1], // 46
  [1,3,3,1,2,1], // 47
  [3,1,3,1,2,1], // 48
  [2,1,1,3,3,1], // 49
  [2,3,1,1,3,1], // 50
  [2,1,3,1,1,3], // 51
  [2,1,3,3,1,1], // 52
  [2,1,3,1,3,1], // 53
  [3,1,1,1,2,3], // 54
  [3,1,1,3,2,1], // 55
  [3,3,1,1,2,1], // 56
  [3,1,2,1,1,3], // 57
  [3,1,2,3,1,1], // 58
  [3,3,2,1,1,1], // 59
  [3,1,4,1,1,1], // 60
  [2,2,1,4,1,1], // 61
  [4,3,1,1,1,1], // 62
  [1,1,1,2,2,4], // 63
  [1,1,1,4,2,2], // 64
  [1,2,1,1,2,4], // 65
  [1,2,1,4,2,1], // 66
  [1,4,1,1,2,1], // 67
  [1,1,2,2,1,4], // 68
  [1,1,2,4,1,2], // 69
  [1,2,2,1,1,4], // 70
  [1,2,2,4,1,1], // 71
  [1,4,2,1,1,1], // 72
  [2,1,1,2,1,4], // 73
  [2,1,1,4,1,2], // 74
  [2,4,1,1,1,2], // 75
  [2,1,2,1,1,4], // 76  (space)
  [2,1,2,4,1,1], // 77
  [2,4,2,1,1,1], // 78
  [1,1,1,2,4,2], // 79
  [1,1,1,4,2,4], // 80
  [1,2,1,1,4,2], // 81
  [1,2,1,4,2,1], // 82
  [1,4,1,1,4,1], // 83
  [1,1,2,2,4,1], // 84
  [1,1,2,4,1,4], // 85
  [1,2,2,1,4,1], // 86
  [1,2,2,4,1,1], // 87
  [1,4,2,1,1,4], // 88
  [1,4,2,4,1,1], // 89
  [2,1,1,2,4,1], // 90
  [2,1,1,4,1,4], // 91
  [2,4,1,1,1,4], // 92
  [2,1,2,1,4,1], // 93
  [2,1,2,4,1,1], // 94
  [2,4,2,1,1,4], // 95
  [2,1,4,1,1,4], // 96
  [4,1,1,1,2,4], // 97
  [4,1,1,4,2,1], // 98
  [4,1,2,1,1,4], // 99
  [4,1,2,4,1,1], // 100
  [4,4,1,1,1,2], // 101
  [4,4,1,2,1,1], // 102
  [4,1,1,2,4,1], // 103 (start code B)
];

const CODE128_MAP: Record<string, number> = {
  ' ': 0, '!': 1, '"': 2, '#': 3, '$': 4, '%': 5, '&': 6, "'": 7,
  '(': 8, ')': 9, '*': 10, '+': 11, ',': 12, '-': 13, '.': 14, '/': 15,
  '0': 16, '1': 17, '2': 18, '3': 19, '4': 20, '5': 21, '6': 22, '7': 23,
  '8': 24, '9': 25, ':': 26, ';': 27, '<': 28, '=': 29, '>': 30, '?': 31,
  '@': 32, 'A': 33, 'B': 34, 'C': 35, 'D': 36, 'E': 37, 'F': 38, 'G': 39,
  'H': 40, 'I': 41, 'J': 42, 'K': 43, 'L': 44, 'M': 45, 'N': 46, 'O': 47,
  'P': 48, 'Q': 49, 'R': 50, 'S': 51, 'T': 52, 'U': 53, 'V': 54, 'W': 55,
  'X': 56, 'Y': 57, 'Z': 58, '[': 59, '\\': 60, ']': 61, '^': 62, '_': 63,
  '`': 64, 'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71,
  'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79,
  'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84, 'u': 85, 'v': 86, 'w': 87,
  'x': 88, 'y': 89, 'z': 90, '{': 91, '|': 92, '}': 93, '~': 94,
};

const CODE39_PATTERNS: Record<string, string> = {
  '0': '101001101101', '1': '110100101011', '2': '101100101011', '3': '110110010101',
  '4': '101001101011', '5': '110100110101', '6': '101100110101', '7': '101001011011',
  '8': '110100101101', '9': '101100101101', 'A': '110101001011', 'B': '101101001011',
  'C': '110110100101', 'D': '101011001011', 'E': '110101100101', 'F': '101101100101',
  'G': '101010011011', 'H': '110101001101', 'I': '101101001101', 'J': '101011001101',
  'K': '110101010011', 'L': '101101010011', 'M': '110110101001', 'N': '101011010011',
  'O': '110101101001', 'P': '101101101001', 'Q': '101010110011', 'R': '110101011001',
  'S': '101101011001', 'T': '101011011001', 'U': '110010101011', 'V': '100110101011',
  'W': '110011010101', 'X': '100101101011', 'Y': '110010110101', 'Z': '100110110101',
  '-': '100101011011', '.': '110010101101', ' ': '100110101101', '$': '100100100101',
  '/': '100100101001', '+': '100101001001', '%': '101001001001',
};

function generateCode128(text: string): number[] {
  const codes = [CODE128_START];
  for (const ch of text) {
    const code = CODE128_MAP[ch];
    if (code === undefined) return [];
    codes.push(code);
  }
  // Checksum
  let checksum = CODE128_START;
  for (let i = 1; i < codes.length; i++) {
    checksum += codes[i] * i;
  }
  codes.push(checksum % 103);
  codes.push(CODE128_STOP);
  return codes;
}

function generateCode39(text: string): string {
  let result = '100101101101'; // start *
  for (const ch of text.toUpperCase()) {
    const pattern = CODE39_PATTERNS[ch];
    if (!pattern) return '';
    result += pattern + '0';
  }
  result += '100101101101'; // end *
  return result;
}

function generateEAN13(text: string): number[] {
  // EAN-13 uses a simpler structure - just encode digits as bars
  // Simplified: just use the first 12 digits + check digit
  const digits = text.replace(/\D/g, '').slice(0, 13).split('').map(Number);
  if (digits.length < 12) return [];

  // Simple UPC-A style encoding (narrow/wide)
  const result: number[] = [];
  // Left guard
  result.push(1, 1, 1);
  for (let i = 0; i < 6; i++) {
    const d = digits[i];
    result.push(d % 2 === 0 ? 1 : 3, d % 3 === 0 ? 1 : 3, d < 5 ? 1 : 3, d % 2 === 0 ? 3 : 1);
  }
  // Center guard
  result.push(1, 1, 1, 1, 1);
  for (let i = 6; i < 12; i++) {
    const d = digits[i];
    result.push(d % 2 === 0 ? 3 : 1, d % 3 === 0 ? 3 : 1, d < 5 ? 3 : 1, d % 2 === 0 ? 1 : 3);
  }
  // Right guard
  result.push(1, 1, 1);
  return result;
}

function generateUPCA(text: string): number[] {
  const digits = text.replace(/\D/g, '').slice(0, 12).split('').map(Number);
  if (digits.length < 11) return [];

  // UPC-A encoding
  const L_PATTERNS: number[][] = [
    [3,2,1,1], [2,2,2,1], [2,1,2,2], [1,4,1,1], [1,1,3,2],
    [1,2,3,1], [1,1,1,4], [1,3,1,2], [1,2,1,3], [3,1,1,2],
  ];
  const R_PATTERNS: number[][] = [
    [1,1,2,3], [1,2,2,2], [2,2,1,2], [1,1,4,1], [2,3,1,1],
    [1,2,1,3], [4,1,1,1], [2,1,3,1], [3,1,2,1], [2,1,1,3],
  ];

  const result: number[] = [];
  // Left guard
  result.push(1, 1, 1);
  for (let i = 0; i < 6; i++) {
    result.push(...L_PATTERNS[digits[i]]);
  }
  // Center guard
  result.push(1, 1, 1, 1, 1);
  for (let i = 6; i < 11; i++) {
    result.push(...R_PATTERNS[digits[i]]);
  }
  // Check digit
  result.push(...R_PATTERNS[digits[11] || 0]);
  // Right guard
  result.push(1, 1, 1);
  return result;
}

export function BarcodeGeneratorTool() {
  const [text, setText] = useState('');
  const [type, setType] = useState<BarcodeType>('code128');
  const [barcodeDataUrl, setBarcodeDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(() => {
    if (!text.trim()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const BAR_WIDTH = 2;
    const HEIGHT = 80;
    const QUIET_ZONE = 10;

    let bars: number[] = [];
    if (type === 'code128') {
      bars = generateCode128(text);
      if (bars.length === 0) return;
    } else if (type === 'code39') {
      const pattern = generateCode39(text);
      if (!pattern) return;
      bars = pattern.split('').map(Number);
    } else if (type === 'ean13') {
      bars = generateEAN13(text);
      if (bars.length === 0) return;
    } else if (type === 'upca') {
      bars = generateUPCA(text);
      if (bars.length === 0) return;
    }

    // Calculate total width
    let totalWidth = bars.reduce((a, b) => a + b, 0) * BAR_WIDTH;
    const width = totalWidth + QUIET_ZONE * 2;

    canvas.width = width;
    canvas.height = HEIGHT + 30;

    // White background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let x = QUIET_ZONE;
    for (let i = 0; i < bars.length; i++) {
      const barWidth = bars[i] * BAR_WIDTH;
      if (i % 2 === 0) {
        // Bar (black)
        ctx.fillStyle = 'black';
        ctx.fillRect(x, 0, barWidth, HEIGHT);
      }
      x += barWidth;
    }

    // Draw text below
    ctx.fillStyle = 'black';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, HEIGHT + 20);

    setBarcodeDataUrl(canvas.toDataURL('image/png'));
  }, [text, type]);

  const handleDownload = () => {
    if (!barcodeDataUrl) return;
    const a = document.createElement('a');
    a.href = barcodeDataUrl;
    a.download = `barcode-${type}.png`;
    a.click();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs text-muted-foreground">Barcode Type</label>
        <div className="flex flex-wrap gap-2">
          {(['code128', 'ean13', 'code39', 'upca'] as BarcodeType[]).map((t) => (
            <Button
              key={t}
              variant={type === t ? 'default' : 'outline'}
              size="sm"
              onClick={() => { setType(t); setBarcodeDataUrl(''); }}
            >
              {t.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">Content</label>
        <input
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value); setBarcodeDataUrl(''); }}
          placeholder={
            type === 'code128' ? 'Any text...' :
            type === 'code39' ? 'Alphanumeric...' :
            type === 'ean13' ? '12-13 digit EAN code...' :
            '11-12 digit UPC code...'
          }
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <Button onClick={generate} disabled={!text.trim()}>
        Generate Barcode
      </Button>

      <canvas ref={canvasRef} className="hidden" />

      {barcodeDataUrl && (
        <div className="space-y-3">
          <div className="flex justify-center p-4 rounded-lg border bg-white overflow-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={barcodeDataUrl} alt="Barcode" className="max-w-full" />
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              Download PNG
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
