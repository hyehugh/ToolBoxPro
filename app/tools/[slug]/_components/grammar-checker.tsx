"use client";

import { useState, useMemo } from "react";

interface Rule {
  pattern: RegExp;
  fix: string;
  explanation: string;
}

const RULES: Rule[] = [
  { pattern: /\b(?:There|there) (?:pet|car|dog|cat)\b/gi, fix: "their / there / they're", explanation: "Common homophone error" },
  { pattern: /\byour (?:a|an|the|is|are|was|were|has|have|had|been|being|am)\b/i, fix: "you're", explanation: "\"Your\" shows possession; \"you're\" means \"you are\"" },
  { pattern: /\bits (?:a|an|the|is|are|was|were|has|have|had|been|being|am|not|just|also|very|really)\b/i, fix: "it's", explanation: "\"Its\" shows possession; \"it's\" means \"it is\" or \"it has\"" },
  { pattern: /\bwhos (?:a|an|the|is|are|was|were|has|have|had|been)\b/i, fix: "who's", explanation: "\"Whose\" shows possession; \"who's\" means \"who is\"" },
  { pattern: /\byoure (?:a|an|the|is|are|was|were)\b/i, fix: "you're", explanation: "\"Your\" shows possession; \"you're\" means \"you are\"" },
  { pattern: /\b(?:alot|allot)\b/i, fix: "a lot", explanation: "\"Alot\" is not a word; use \"a lot\"" },
  { pattern: /\bcould of\b|\bshould of\b|\bwould of\b|\bmight of\b|\bmust of\b/i, fix: "could have / should have / would have", explanation: "Use \"have\" instead of \"of\" after modal verbs" },
  { pattern: /\b(?:He|he) (?:go|come|run|eat|drink|write|read|speak|take|make|give|put|set)s\b/i, fix: "Subject-verb agreement", explanation: "Third-person singular needs verb ending in -s or -es" },
  { pattern: /\b(?:He|he) don't\b/i, fix: "He doesn't", explanation: "Third-person singular: use \"doesn't\" not \"don't\"" },
  { pattern: /\b(?:She|she) don't\b/i, fix: "She doesn't", explanation: "Third-person singular: use \"doesn't\" not \"don't\"" },
  { pattern: /\b(?:It|it) don't\b/i, fix: "It doesn't", explanation: "Third-person singular: use \"doesn't\" not \"don't\"" },
  { pattern: /\bmore better\b|\bmore bigger\b|\bmore worse\b/i, fix: "Remove \"more\"", explanation: "Double comparative: use \"better\" not \"more better\"" },
  { pattern: /\bmost best\b|\bmost worst\b/i, fix: "Remove \"most\"", explanation: "Double superlative: use \"best\" not \"most best\"" },
  { pattern: /\b(?:I|i) (?:has|does|doesn't)\b/i, fix: "I have / do / don't", explanation: "Use \"have\" with first-person singular" },
  { pattern: /\byou (?:has|does)\b/i, fix: "you have / do", explanation: "Use \"have\" with second person" },
  { pattern: /\b(?:they|They) (?:has|does)\b/i, fix: "they have / do", explanation: "Use \"have\" with third-person plural" },
  { pattern: /\b(?:we|We) (?:has|does)\b/i, fix: "we have / do", explanation: "Use \"have\" with first-person plural" },
  { pattern: /\b(?:an|An) (?:university|unicorn|uniform|unique|union|euro|European|one|once)\b/i, fix: "a", explanation: "Use \"a\" before words that sound like \"you\" (not \"an\")" },
  { pattern: /\b(?:a|A) (?:hour|honor|honest|heir|herb|MBA|MBA)\b/i, fix: "an", explanation: "Use \"an\" before words that sound like they start with a vowel" },
  { pattern: /\b(?:you|You) was\b/i, fix: "you were", explanation: "Use \"were\" with \"you\"" },
  { pattern: /\b(?:we|We) was\b/i, fix: "we were", explanation: "Use \"were\" with \"we\"" },
  { pattern: /\b(?:they|They) was\b/i, fix: "they were", explanation: "Use \"were\" with \"they\"" },
  { pattern: /\bi (?:were|wasn't)\b/i, fix: "I was / wasn't", explanation: "Use \"was\" with first-person singular" },
  { pattern: /\b(?:This|this|That|that) (?:are|were|have)\b/i, fix: "this is / was / has", explanation: "Use singular verb with \"this\" and \"that\"" },
  { pattern: /\b(?:These|these|Those|those) (?:is|was|has)\b/i, fix: "these are / were / have", explanation: "Use plural verb with \"these\" and \"those\"" },
  { pattern: /\b(?:affect|Affect) (?:of|in|for|to)\b/i, fix: "effect", explanation: "\"Affect\" is usually a verb; \"effect\" is usually a noun" },
  { pattern: /\b(?:to|To) (?:much|many|less|fewer) (?:affect)\b/i, fix: "effect", explanation: "\"Effect\" as a noun means \"result\"" },
  { pattern: /\bthen (?:he|she|it|they|we|I|you|the|a|an)\b/i, fix: "than", explanation: "\"Than\" is used for comparisons; \"then\" refers to time" },
  { pattern: /\b(?:more|less|better|worse|faster|slower|bigger|smaller|greater|higher|lower) then\b/i, fix: "than", explanation: "Use \"than\" after comparative adjectives" },
  { pattern: /\b(?:different|other|another) then\b/i, fix: "than", explanation: "Use \"than\" not \"then\" in comparisons" },
  { pattern: /\bloose\b(?!(?:ly|n|r))/i, fix: "lose", explanation: "\"Loose\" means not tight; \"lose\" means to misplace or fail to win" },
  { pattern: /\bdefinately\b|\bdefiantly\b/i, fix: "definitely", explanation: "Common misspelling of \"definitely\"" },
  { pattern: /\bseperate\b/i, fix: "separate", explanation: "Common misspelling of \"separate\"" },
  { pattern: /\becstasy\b/i, fix: "ecstasy", explanation: "Common misspelling of \"ecstasy\"" },
  { pattern: /\boccured\b|\bocurred\b/i, fix: "occurred", explanation: "Common misspelling of \"occurred\"" },
  { pattern: /\bcalender\b/i, fix: "calendar", explanation: "Common misspelling of \"calendar\"" },
  { pattern: /\bneccessary\b|\bnecesary\b/i, fix: "necessary", explanation: "Common misspelling of \"necessary\"" },
  { pattern: /\btommorow\b|\btomorrow\b/i, fix: "tomorrow", explanation: "Common misspelling of \"tomorrow\"" },
  { pattern: /\bacommodate\b|\baccomodate\b/i, fix: "accommodate", explanation: "Common misspelling of \"accommodate\"" },
  { pattern: /\bpriviledge\b|\bprivelege\b/i, fix: "privilege", explanation: "Common misspelling of \"privilege\"" },
  { pattern: /\b(?:recieve|reciept)\b/i, fix: "receive / receipt", explanation: "\"I before E except after C\"" },
  { pattern: /\bacheive\b|\bchiefly\b|\bdecieve\b|\bpercieve\b/i, fix: "achieve / chiefly / deceive / perceive", explanation: "\"I before E except after C\"" },
  { pattern: /\b(?:doesnt|dont|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|couldnt|wouldnt|shouldnt|neednt|mustnt)\b/i, fix: "Add apostrophe", explanation: "Contractions need an apostrophe (e.g., \"don't\" not \"dont\")" },
  { pattern: /\b\w+ n't\b/i, fix: "Attach \"n't\" to the verb", explanation: "Negative contractions should not have a space (e.g., \"don't\" not \"do n't\")" },
  { pattern: /[.!?]\s*[a-z]/g, fix: "Capitalize first word", explanation: "Start each sentence with a capital letter" },
  { pattern: /\bi\b(?!(?:'|d|m|ll|ve|s))/g, fix: "Capitalize \"I\"", explanation: "The pronoun \"I\" should always be capitalized" },
];

interface Match {
  index: number;
  length: number;
  original: string;
  suggestion: string;
  explanation: string;
}

export function GrammarCheckerTool() {
  const [text, setText] = useState("");

  const matches = useMemo((): Match[] => {
    if (!text.trim()) return [];

    const found: Match[] = [];
    const checked = new Set<number>();

    for (const rule of RULES) {
      let m: RegExpExecArray | null;
      const re = new RegExp(rule.pattern.source, rule.pattern.flags.includes("g") ? rule.pattern.flags : rule.pattern.flags + "g");
      while ((m = re.exec(text)) !== null) {
        // Avoid overlapping matches
        const key = m.index;
        if (checked.has(key)) continue;
        checked.add(key);

        found.push({
          index: m.index,
          length: m[0].length,
          original: m[0].trim(),
          suggestion: m[0].replace(m[0].match(rule.pattern)?.[0] || "", rule.fix),
          explanation: rule.explanation,
        });
      }
    }

    return found.sort((a, b) => a.index - b.index);
  }, [text]);

  const highlightText = useMemo(() => {
    if (!matches.length) return null;

    const parts: { text: string; highlight: boolean; match?: Match }[] = [];
    let lastIndex = 0;

    for (const m of matches) {
      if (m.index > lastIndex) {
        parts.push({ text: text.slice(lastIndex, m.index), highlight: false });
      }
      parts.push({ text: text.slice(m.index, m.index + m.length), highlight: true, match: m });
      lastIndex = m.index + m.length;
    }
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), highlight: false });
    }

    return parts;
  }, [text, matches]);

  return (
    <div className="space-y-4">
      {/* Badge */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
        <span className="text-sm">⚡</span>
        <span className="text-xs text-emerald-700 dark:text-emerald-300">
          Instant grammar checker — no download needed, runs entirely in your browser.
        </span>
      </div>

      {/* Input */}
      <div>
        <textarea
          placeholder="Type or paste your text here to check grammar..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          className="w-full p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-muted-foreground">{text.length} characters</span>
          <button
            onClick={() => setText("")}
            className="px-3 py-1.5 rounded-md text-xs border border-input hover:bg-accent transition-colors"
            disabled={!text}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Highlighted preview */}
      {highlightText && (
        <div className="p-3 rounded-md border bg-card">
          <p className="text-xs text-muted-foreground mb-2 font-medium">Review:</p>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {highlightText.map((part, i) =>
              part.highlight ? (
                <span key={i} className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-b-2 border-red-400 cursor-help" title={part.match?.explanation}>
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        </div>
      )}

      {/* Results */}
      {matches.length > 0 && (
        <div className="space-y-3">
          <div className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-medium inline-block">
            ✏️ {matches.length} issue{matches.length > 1 ? "s" : ""} found
          </div>

          <div className="space-y-2">
            {matches.map((m, i) => (
              <div key={i} className="p-3 rounded-md border bg-card text-sm">
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                  <div>
                    <span className="text-red-600 dark:text-red-400 line-through">{m.original}</span>
                    <span className="text-xs text-muted-foreground ml-2">→</span>
                    <span className="text-emerald-600 dark:text-emerald-400 ml-1">{m.suggestion}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground ml-6">{m.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No issues */}
      {text.trim() && matches.length === 0 && (
        <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 text-xs font-medium inline-block">
          ✅ No common grammar issues found
        </div>
      )}

      {/* Empty state */}
      {!text.trim() && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-3xl mb-2">✍️</p>
          <p className="text-sm">Type or paste text above to check grammar, spelling, and style</p>
          <p className="text-xs mt-1">Instant — no download required</p>
        </div>
      )}
    </div>
  );
}
