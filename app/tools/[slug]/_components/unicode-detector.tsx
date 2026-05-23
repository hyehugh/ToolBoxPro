'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CharInfo {
  char: string;
  codepoint: string;
  category: string;
  name: string;
}

function getCategoryDisplay(cat: string): string {
  const map: Record<string, string> = {
    Lu: 'Uppercase Letter',
    Ll: 'Lowercase Letter',
    Lt: 'Titlecase Letter',
    Lm: 'Modifier Letter',
    Lo: 'Other Letter',
    Mn: 'Nonspacing Mark',
    Mc: 'Spacing Mark',
    Me: 'Enclosing Mark',
    Nd: 'Decimal Number',
    Nl: 'Letter Number',
    No: 'Other Number',
    Pc: 'Connector Punctuation',
    Pd: 'Dash Punctuation',
    Ps: 'Open Punctuation',
    Pe: 'Close Punctuation',
    Pi: 'Initial Punctuation',
    Pf: 'Final Punctuation',
    Po: 'Other Punctuation',
    Sm: 'Math Symbol',
    Sc: 'Currency Symbol',
    Sk: 'Modifier Symbol',
    So: 'Other Symbol',
    Zs: 'Space Separator',
    Zl: 'Line Separator',
    Zp: 'Paragraph Separator',
    Cc: 'Control',
    Cf: 'Format',
    Cs: 'Surrogate',
    Co: 'Private Use',
    Cn: 'Unassigned',
  };
  return map[cat] || cat;
}

export function UnicodeDetectorTool() {
  const [input, setInput] = useState('');
  const [chars, setChars] = useState<CharInfo[]>([]);

  const handleDetect = () => {
    const results: CharInfo[] = [];
    // Use Array.from to properly handle surrogate pairs
    for (const ch of Array.from(input)) {
      const code = ch.codePointAt(0)!;
      const cat = getCategory(
        ch.normalize ? ch : ch
      );
      results.push({
        char: ch,
        codepoint: `U+${code.toString(16).toUpperCase().padStart(4, '0')}`,
        category: getCategoryDisplay(getCharCategory(ch)),
        name: getCharName(code),
      });
    }
    setChars(results);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Unicode Detector</h2>
      <p className="text-sm text-muted-foreground">
        Enter text to see detailed Unicode information for each character.
      </p>
      <textarea
        className="w-full h-32 p-3 border rounded-md resize-y font-mono text-sm"
        placeholder="Paste or type text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleDetect}>Detect</Button>
      {chars.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Char</th>
                <th className="border p-2 text-left">Codepoint</th>
                <th className="border p-2 text-left">Category</th>
                <th className="border p-2 text-left">Name</th>
              </tr>
            </thead>
            <tbody>
              {chars.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="border p-2 text-center text-xl">{c.char === ' ' ? '\u00B7' : c.char === '\n' ? '\u21B5' : c.char}</td>
                  <td className="border p-2 font-mono">{c.codepoint}</td>
                  <td className="border p-2">{c.category}</td>
                  <td className="border p-2">{c.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Helper: get Unicode general category from the first code point
function getCharCategory(ch: string): string {
  const code = ch.codePointAt(0)!;
  if (code >= 0x0041 && code <= 0x005a) return 'Lu';
  if (code >= 0x0061 && code <= 0x007a) return 'Ll';
  if (code >= 0x0030 && code <= 0x0039) return 'Nd';
  if (code === 0x0020) return 'Zs';
  if (code === 0x000a || code === 0x000d) return 'Cc';
  if (code >= 0x1F600 && code <= 0x1F64F) return 'So';
  if (code >= 0x1F300 && code <= 0x1F5FF) return 'So';
  if (code >= 0x1F680 && code <= 0x1F6FF) return 'So';
  if (code >= 0x2600 && code <= 0x26FF) return 'So';
  if (code >= 0x2700 && code <= 0x27BF) return 'So';
  if (code >= 0x2000 && code <= 0x206F) return 'Cf';
  if (code >= 0x2100 && code <= 0x214F) return 'So';
  if (code >= 0x2C00 && code <= 0x2C5F) return 'Lu';
  if (code >= 0x2C60 && code <= 0x2C7F) return 'Ll';
  if (code >= 0x0400 && code <= 0x04FF) return 'Lo';
  if (code >= 0x4E00 && code <= 0x9FFF) return 'Lo';
  if (code >= 0x3040 && code <= 0x309F) return 'Lo';
  if (code >= 0x30A0 && code <= 0x30FF) return 'Lo';
  if (code >= 0xAC00 && code <= 0xD7AF) return 'Lo';
  if (code >= 0x0600 && code <= 0x06FF) return 'Lo';
  // Punctuation
  if (code === 0x0021 || code === 0x0022 || code === 0x0027 || code === 0x0028 || code === 0x0029 || code === 0x002C || code === 0x002E || code === 0x003A || code === 0x003B || code === 0x003F) return 'Po';
  if (code === 0x002D) return 'Pd';
  if (code === 0x005F) return 'Pc';
  // Default based on range
  if (code > 0x7F) return 'Lo';
  if (code >= 0x01 && code <= 0x1F) return 'Cc';
  if (code >= 0x30 && code <= 0x39) return 'Nd';
  if (code >= 0x41 && code <= 0x5A) return 'Lu';
  if (code >= 0x61 && code <= 0x7A) return 'Ll';
  return 'Lo';
}

// Helper: get Unicode character name from codepoint
function getCharName(code: number): string {
  const named: Record<number, string> = {
    0x0009: 'CHARACTER TABULATION',
    0x000a: 'LINE FEED (LF)',
    0x000d: 'CARRIAGE RETURN (CR)',
    0x0020: 'SPACE',
    0x0021: 'EXCLAMATION MARK',
    0x0022: 'QUOTATION MARK',
    0x0023: 'NUMBER SIGN',
    0x0024: 'DOLLAR SIGN',
    0x0025: 'PERCENT SIGN',
    0x0026: 'AMPERSAND',
    0x0027: 'APOSTROPHE',
    0x0028: 'LEFT PARENTHESIS',
    0x0029: 'RIGHT PARENTHESIS',
    0x002a: 'ASTERISK',
    0x002b: 'PLUS SIGN',
    0x002c: 'COMMA',
    0x002d: 'HYPHEN-MINUS',
    0x002e: 'FULL STOP',
    0x002f: 'SOLIDUS',
    0x0030: 'DIGIT ZERO',
    0x0031: 'DIGIT ONE',
    0x0032: 'DIGIT TWO',
    0x0033: 'DIGIT THREE',
    0x0034: 'DIGIT FOUR',
    0x0035: 'DIGIT FIVE',
    0x0036: 'DIGIT SIX',
    0x0037: 'DIGIT SEVEN',
    0x0038: 'DIGIT EIGHT',
    0x0039: 'DIGIT NINE',
    0x003a: 'COLON',
    0x003b: 'SEMICOLON',
    0x003c: 'LESS-THAN SIGN',
    0x003d: 'EQUALS SIGN',
    0x003e: 'GREATER-THAN SIGN',
    0x003f: 'QUESTION MARK',
    0x0040: 'COMMERCIAL AT',
    0x0041: 'LATIN CAPITAL LETTER A',
    0x0042: 'LATIN CAPITAL LETTER B',
    0x0043: 'LATIN CAPITAL LETTER C',
    0x0044: 'LATIN CAPITAL LETTER D',
    0x0045: 'LATIN CAPITAL LETTER E',
    0x0046: 'LATIN CAPITAL LETTER F',
    0x0047: 'LATIN CAPITAL LETTER G',
    0x0048: 'LATIN CAPITAL LETTER H',
    0x0049: 'LATIN CAPITAL LETTER I',
    0x004a: 'LATIN CAPITAL LETTER J',
    0x004b: 'LATIN CAPITAL LETTER K',
    0x004c: 'LATIN CAPITAL LETTER L',
    0x004d: 'LATIN CAPITAL LETTER M',
    0x004e: 'LATIN CAPITAL LETTER N',
    0x004f: 'LATIN CAPITAL LETTER O',
    0x0050: 'LATIN CAPITAL LETTER P',
    0x0051: 'LATIN CAPITAL LETTER Q',
    0x0052: 'LATIN CAPITAL LETTER R',
    0x0053: 'LATIN CAPITAL LETTER S',
    0x0054: 'LATIN CAPITAL LETTER T',
    0x0055: 'LATIN CAPITAL LETTER U',
    0x0056: 'LATIN CAPITAL LETTER V',
    0x0057: 'LATIN CAPITAL LETTER W',
    0x0058: 'LATIN CAPITAL LETTER X',
    0x0059: 'LATIN CAPITAL LETTER Y',
    0x005a: 'LATIN CAPITAL LETTER Z',
    0x005b: 'LEFT SQUARE BRACKET',
    0x005c: 'REVERSE SOLIDUS',
    0x005d: 'RIGHT SQUARE BRACKET',
    0x005e: 'CIRCUMFLEX ACCENT',
    0x005f: 'LOW LINE',
    0x0060: 'GRAVE ACCENT',
    0x0061: 'LATIN SMALL LETTER A',
    0x0062: 'LATIN SMALL LETTER B',
    0x0063: 'LATIN SMALL LETTER C',
    0x0064: 'LATIN SMALL LETTER D',
    0x0065: 'LATIN SMALL LETTER E',
    0x0066: 'LATIN SMALL LETTER F',
    0x0067: 'LATIN SMALL LETTER G',
    0x0068: 'LATIN SMALL LETTER H',
    0x0069: 'LATIN SMALL LETTER I',
    0x006a: 'LATIN SMALL LETTER J',
    0x006b: 'LATIN SMALL LETTER K',
    0x006c: 'LATIN SMALL LETTER L',
    0x006d: 'LATIN SMALL LETTER M',
    0x006e: 'LATIN SMALL LETTER N',
    0x006f: 'LATIN SMALL LETTER O',
    0x0070: 'LATIN SMALL LETTER P',
    0x0071: 'LATIN SMALL LETTER Q',
    0x0072: 'LATIN SMALL LETTER R',
    0x0073: 'LATIN SMALL LETTER S',
    0x0074: 'LATIN SMALL LETTER T',
    0x0075: 'LATIN SMALL LETTER U',
    0x0076: 'LATIN SMALL LETTER V',
    0x0077: 'LATIN SMALL LETTER W',
    0x0078: 'LATIN SMALL LETTER X',
    0x0079: 'LATIN SMALL LETTER Y',
    0x007a: 'LATIN SMALL LETTER Z',
    0x007b: 'LEFT CURLY BRACKET',
    0x007c: 'VERTICAL LINE',
    0x007d: 'RIGHT CURLY BRACKET',
    0x007e: 'TILDE',
    0x00a0: 'NO-BREAK SPACE',
    0x00a1: 'INVERTED EXCLAMATION MARK',
    0x00a9: 'COPYRIGHT SIGN',
    0x00ae: 'REGISTERED SIGN',
    0x00b0: 'DEGREE SIGN',
    0x00e9: 'LATIN SMALL LETTER E WITH ACUTE',
    0x2013: 'EN DASH',
    0x2014: 'EM DASH',
    0x2018: 'LEFT SINGLE QUOTATION MARK',
    0x2019: 'RIGHT SINGLE QUOTATION MARK',
    0x201c: 'LEFT DOUBLE QUOTATION MARK',
    0x201d: 'RIGHT DOUBLE QUOTATION MARK',
    0x2022: 'BULLET',
    0x2026: 'HORIZONTAL ELLIPSIS',
    0x20ac: 'EURO SIGN',
    0x2122: 'TRADE MARK SIGN',
    // Emoji ranges
    0x1f600: 'GRINNING FACE',
    0x1f601: 'GRINNING FACE WITH SMILING EYES',
    0x1f602: 'FACE WITH TEARS OF JOY',
    0x1f603: 'SMILING FACE WITH OPEN MOUTH',
    0x1f604: 'SMILING FACE WITH OPEN MOUTH AND SMILING EYES',
    0x1f605: 'SMILING FACE WITH OPEN MOUTH AND COLD SWEAT',
    0x1f606: 'SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES',
    0x1f607: 'SMILING FACE WITH HALO',
    0x1f608: 'SMILING FACE WITH HORNS',
    0x1f609: 'WINKING FACE',
    0x1f60a: 'SMILING FACE WITH SMILING EYES',
    0x1f60b: 'FACE SAVOURING DELICIOUS FOOD',
    0x1f60c: 'RELIEVED FACE',
    0x1f60d: 'SMILING FACE WITH HEART-SHAPED EYES',
    0x1f60e: 'SMILING FACE WITH SUNGLASSES',
    0x1f60f: 'SMIRKING FACE',
    0x1f610: 'NEUTRAL FACE',
    0x1f611: 'EXPRESSIONLESS FACE',
    0x1f612: 'UNAMUSED FACE',
    0x1f613: 'FACE WITH COLD SWEAT',
    0x1f614: 'PENSIVE FACE',
    0x1f615: 'CONFUSED FACE',
    0x1f616: 'CONFOUNDED FACE',
    0x1f617: 'KISSING FACE',
    0x1f618: 'FACE THROWING A KISS',
    0x1f619: 'KISSING FACE WITH SMILING EYES',
    0x1f61a: 'KISSING FACE WITH CLOSED EYES',
    0x1f61b: 'FACE WITH STUCK-OUT TONGUE',
    0x1f61c: 'FACE WITH STUCK-OUT TONGUE AND WINKING EYE',
    0x1f61d: 'FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES',
    0x1f61e: 'DISAPPOINTED FACE',
    0x1f61f: 'WORRIED FACE',
    0x1f620: 'ANGRY FACE',
    0x1f621: 'POUTING FACE',
    0x1f622: 'CRYING FACE',
    0x1f623: 'PERSEVERING FACE',
    0x1f624: 'FACE WITH LOOK OF TRIUMPH',
    0x1f625: 'DISAPPOINTED BUT RELIEVED FACE',
    0x1f626: 'FROWNING FACE WITH OPEN MOUTH',
    0x1f627: 'ANGUISHED FACE',
    0x1f628: 'FEARFUL FACE',
    0x1f629: 'WEARY FACE',
    0x1f62a: 'SLEEPY FACE',
    0x1f62b: 'TIRED FACE',
    0x1f62c: 'GRIMACING FACE',
    0x1f62d: 'LOUDLY CRYING FACE',
    0x1f62e: 'FACE WITH OPEN MOUTH',
    0x1f62f: 'HUSHED FACE',
    0x1f630: 'FACE WITH OPEN MOUTH AND COLD SWEAT',
    0x1f631: 'FACE SCREAMING IN FEAR',
    0x1f632: 'ASTONISHED FACE',
    0x1f633: 'FLUSHED FACE',
    0x1f634: 'SLEEPING FACE',
    0x1f635: 'DIZZY FACE',
    0x1f636: 'FACE WITHOUT MOUTH',
    0x1f637: 'FACE WITH MEDICAL MASK',
    0x1f638: 'GRINNING CAT FACE WITH SMILING EYES',
    0x1f639: 'CAT FACE WITH TEARS OF JOY',
    0x1f63a: 'SMILING CAT FACE WITH OPEN MOUTH',
    0x1f63b: 'SMILING CAT FACE WITH HEART-SHAPED EYES',
    0x1f63c: 'CAT FACE WITH WRY SMILE',
    0x1f63d: 'KISSING CAT FACE WITH CLOSED EYES',
    0x1f63e: 'POUTING CAT FACE',
    0x1f63f: 'CRYING CAT FACE',
    0x1f640: 'WEARY CAT FACE',
    0x1f641: 'SLIGHTLY FROWNING FACE',
    0x1f642: 'SLIGHTLY SMILING FACE',
    0x1f643: 'UPSIDE-DOWN FACE',
    0x1f644: 'FACE WITH ROLLING EYES',
    0x1f645: 'FACE WITH NO GOOD GESTURE',
    0x1f646: 'FACE WITH OK GESTURE',
    0x1f647: 'PERSON BOWING DEEPLY',
    0x1f648: 'SEE-NO-EVIL MONKEY',
    0x1f649: 'HEAR-NO-EVIL MONKEY',
    0x1f64a: 'SPEAK-NO-EVIL MONKEY',
    0x1f64b: 'HAPPY PERSON RAISING ONE HAND',
    0x1f64c: 'PERSON RAISING BOTH HANDS IN CELEBRATION',
    0x1f64d: 'PERSON FROWNING',
    0x1f64e: 'PERSON WITH POUTING FACE',
    0x1f64f: 'PERSON WITH FOLDED HANDS',
  };
  return named[code] || `UNKNOWN CHARACTER (U+${code.toString(16).toUpperCase().padStart(4, '0')})`;
}
