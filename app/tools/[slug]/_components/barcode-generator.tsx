'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from "@/lib/i18n/context";

type BarcodeType = 'code128' | 'ean13' | 'code39' | 'upca' | 'qr';

// Code128 (Code Set B) encoding table (ISO/IEC 15417).
// Each entry is a 6-digit BSW string: widths of 3 bars + 3 spaces (alternating,
// each 1-4 modules), indexed by symbol value 0-106.
// Stop (106) has 7 digits: the final 2 is the extra termination bar.
const CODE128_PATTERNS: string[] = [
  '212222', '222122', '222221', '121223', '121322', '131222', '122213',
  '122312', '132212', '221213', '221312', '231212', '112232', '122132',
  '122231', '113222', '123122', '123221', '223211', '221132', '221231',
  '213212', '223112', '312131', '311222', '321122', '321221', '312212',
  '322112', '322211', '212123', '212321', '232121', '111323', '131123',
  '131321', '112313', '132113', '132311', '211313', '231113', '231311',
  '112133', '112331', '132131', '113123', '113321', '133121', '313121',
  '211331', '231131', '213113', '213311', '213131', '311123', '311321',
  '331121', '312113', '312311', '332111', '314111', '221411', '431111',
  '111224', '111422', '121124', '121421', '141122', '141221', '112214',
  '112412', '122114', '122411', '142112', '142211', '241211', '221114',
  '413111', '241112', '134111', '111242', '121142', '121241', '114212',
  '124112', '124211', '411212', '421112', '421211', '212141', '214121',
  '412121', '111143', '111341', '131141', '114113', '114311', '411113',
  '411311', '113141', '114131', '311141', '411131', '211412', '211214',
  '211232', '2331112',
];

// Start Code B (value 104) supports full printable ASCII (32-126): upper+lower case.
const CODE128_START = 104;
const CODE128_STOP = 106;

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
  // Build symbol-value sequence: Start B + data chars + checksum + Stop
  const codes = [CODE128_START];
  for (const ch of text) {
    const code = CODE128_MAP[ch];
    if (code === undefined) return [];
    codes.push(code);
  }
  // Checksum (Code 128): Start value counts at weight 1, first data char at weight 1,
  // incrementing. Verified against the canonical "PJJ123C" → check digit 54 example.
  let checksum = CODE128_START;
  for (let i = 1; i < codes.length; i++) {
    checksum += codes[i] * i;
  }
  codes.push(checksum % 103);
  codes.push(CODE128_STOP);

  // Expand each symbol value into its 6 alternating bar/space widths (1-4 modules),
  // producing a [bar,space,bar,space,...] array compatible with the drawing loop.
  const bars: number[] = [];
  for (const code of codes) {
    const pattern = CODE128_PATTERNS[code];
    for (const w of pattern) {
      bars.push(Number(w));
    }
  }
  return bars;
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

// EAN-13 / UPC-A encoding tables (GS1 standard). Each digit → 7 modules.
// L = odd parity, G = even parity (left half); R = L bitwise-inverted (right half).
const L_CODES: string[] = [
  '0001101', '0011001', '0010011', '0111101', '0100011',
  '0110001', '0101111', '0111011', '0110111', '0001011',
];
const G_CODES: string[] = [
  '0100111', '0110011', '0011011', '0100001', '0011101',
  '0111001', '0000101', '0010001', '0001001', '0010111',
];
const R_CODES: string[] = L_CODES.map((p) => p.split('').map((b) => (b === '0' ? '1' : '0')).join(''));

// Parity pattern for the left 6 digits, indexed by the first (implicit) digit.
// Index 0 → LLLLLL (this is exactly UPC-A).
const EAN13_PARITY: string[] = [
  'LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG',
  'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL',
];

/**
 * Convert a run-length 0/1 string into a [bar,space,bar,space,...] width array
 * compatible with the drawing loop. The string MUST start with '1' (black) so
 * that index 0 is a bar, matching the loop's i%2===0 → black convention.
 */
function bitsToBars(bits: string): number[] {
  const bars: number[] = [];
  let run = 1;
  for (let i = 1; i < bits.length; i++) {
    if (bits[i] === bits[i - 1]) {
      run++;
    } else {
      bars.push(run);
      run = 1;
    }
  }
  bars.push(run);
  return bars;
}

function ean13CheckDigit(twelve: number[]): number {
  // GS1 Modulo-10: odd positions (1st,3rd,...) ×1, even positions ×3.
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += twelve[i] * (i % 2 === 0 ? 1 : 3);
  }
  return (10 - (sum % 10)) % 10;
}

function generateEAN13(text: string): number[] {
  const digits = text.replace(/\D/g, '').slice(0, 12).split('').map(Number);
  if (digits.length < 12) return [];

  const check = ean13CheckDigit(digits);
  const full = [...digits, check]; // 13 digits: [first, left6..., right5..., check]
  const first = full[0];

  // Build the full 0/1 module string: start guard + left 6 + center + right 6 + stop guard.
  let bits = '101'; // start guard (bar-space-bar)
  const parity = EAN13_PARITY[first] ?? 'LLLLLL';
  for (let i = 0; i < 6; i++) {
    const d = full[i + 1];
    bits += parity[i] === 'G' ? G_CODES[d] : L_CODES[d];
  }
  bits += '01010'; // center guard
  for (let i = 0; i < 6; i++) {
    bits += R_CODES[full[i + 7]];
  }
  bits += '101'; // stop guard
  return bitsToBars(bits);
}

function generateUPCA(text: string): number[] {
  // UPC-A is EAN-13 with a leading 0 (first digit 0 → left half all L-codes).
  const digits = text.replace(/\D/g, '').slice(0, 11).split('').map(Number);
  if (digits.length < 11) return [];

  const check = upcaCheckDigit(digits);
  const full = [...digits, check]; // 12 digits

  let bits = '101'; // start guard
  for (let i = 0; i < 6; i++) bits += L_CODES[full[i]];
  bits += '01010'; // center guard
  for (let i = 6; i < 12; i++) bits += R_CODES[full[i]];
  bits += '101'; // stop guard
  return bitsToBars(bits);
}

function upcaCheckDigit(eleven: number[]): number {
  // UPC-A Modulo-10: odd positions (1st,3rd,...) ×3, even positions ×1.
  let sum = 0;
  for (let i = 0; i < 11; i++) {
    sum += eleven[i] * (i % 2 === 0 ? 3 : 1);
  }
  return (10 - (sum % 10)) % 10;
}

export function BarcodeGeneratorTool() {
  const [text, setText] = useState('');
  const [type, setType] = useState<BarcodeType>('code128');
  const [barcodeDataUrl, setBarcodeDataUrl] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLocale();

  const generate = useCallback(() => {
    if (!text.trim()) return;

    // QR Code generation via API
    if (type === 'qr') {
      const encoded = encodeURIComponent(text);
      setBarcodeDataUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`);
      return;
    }

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

    const totalWidth = bars.reduce((a, b) => a + b, 0) * BAR_WIDTH;
    const width = totalWidth + QUIET_ZONE * 2;

    canvas.width = width;
    canvas.height = HEIGHT + 30;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let x = QUIET_ZONE;
    for (let i = 0; i < bars.length; i++) {
      const barWidth = bars[i] * BAR_WIDTH;
      if (i % 2 === 0) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, 0, barWidth, HEIGHT);
      }
      x += barWidth;
    }

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
    a.download = type === 'qr' ? 'qrcode.png' : `barcode-${type}.png`;
    a.click();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs text-muted-foreground">{t('common.type')}</label>
        <div className="flex flex-wrap gap-2">
          {(['code128', 'ean13', 'code39', 'upca', 'qr'] as BarcodeType[]).map((t) => (
            <Button
              key={t}
              variant={type === t ? 'default' : 'outline'}
              size="sm"
              onClick={() => { setType(t); setBarcodeDataUrl(''); }}
            >
              {t === 'qr' ? 'QR Code' : t.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground">{t('toolCommon.barcode.data')}</label>
        <input
          type="text"
          value={text}
          onChange={(e) => { setText(e.target.value); setBarcodeDataUrl(''); }}
          placeholder={
            type === 'qr' ? 'Enter URL or text for QR code...' :
            type === 'code128' ? `${t('common.text')}...` :
            type === 'code39' ? 'Alphanumeric...' :
            type === 'ean13' ? '12-13 digit EAN code...' :
            '11-12 digit UPC code...'
          }
          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <Button onClick={generate} disabled={!text.trim()}>
        {t('toolCommon.barcode.generateBarcode')}
      </Button>

      <canvas ref={canvasRef} className="hidden" />

      {barcodeDataUrl && (
        <div className="space-y-3">
          <div className="flex justify-center p-4 rounded-lg border bg-white overflow-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={barcodeDataUrl} alt={t('toolCommon.barcode.generateBarcode')} className="max-w-full" />
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              {t('common.download')} PNG
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
