"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function SqlFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { t } = useLocale();

  const keywords = [
    "SELECT", "FROM", "WHERE", "AND", "OR", "NOT", "IN", "IS", "NULL",
    "INSERT", "INTO", "VALUES", "UPDATE", "SET", "DELETE", "CREATE",
    "TABLE", "ALTER", "DROP", "INDEX", "VIEW", "JOIN", "LEFT", "RIGHT",
    "INNER", "OUTER", "FULL", "ON", "AS", "ORDER", "BY", "GROUP",
    "HAVING", "LIMIT", "OFFSET", "UNION", "ALL", "DISTINCT", "CASE",
    "WHEN", "THEN", "ELSE", "END", "EXISTS", "BETWEEN", "LIKE",
    "COUNT", "SUM", "AVG", "MIN", "MAX", "ASC", "DESC",
  ];

  const format = () => {
    // Tokenize so that string literals ('...'), double-quoted identifiers
    // ("..."), line comments (-- ...), and block comments (/* ... */) are
    // preserved verbatim and NOT keyword-uppercased. Only bare identifiers
    // are candidates for keyword replacement.
    type Token = { type: "code" | "string" | "comment"; text: string };
    const tokens: Token[] = [];
    let i = 0;
    let codeBuf = "";
    const flushCode = () => {
      if (codeBuf) { tokens.push({ type: "code", text: codeBuf }); codeBuf = ""; }
    };
    while (i < input.length) {
      const ch = input[i];
      const two = input.slice(i, i + 2);
      if (ch === "'" || ch === '"') {
        flushCode();
        const quote = ch;
        let j = i + 1;
        while (j < input.length) {
          if (input[j] === quote) {
            // handle escaped quote (doubled) for single quotes
            if (quote === "'" && input[j + 1] === "'") { j += 2; continue; }
            if (quote === '"' && input[j + 1] === '"') { j += 2; continue; }
            j++; break;
          }
          j++;
        }
        tokens.push({ type: "string", text: input.slice(i, j) });
        i = j;
      } else if (two === "--") {
        flushCode();
        let j = input.indexOf("\n", i);
        if (j === -1) j = input.length;
        tokens.push({ type: "comment", text: input.slice(i, j) });
        i = j;
      } else if (two === "/*") {
        flushCode();
        let j = input.indexOf("*/", i);
        if (j === -1) j = input.length; else j += 2;
        tokens.push({ type: "comment", text: input.slice(i, j) });
        i = j;
      } else {
        codeBuf += ch;
        i++;
      }
    }
    flushCode();

    // Uppercase keywords only inside "code" tokens.
    const uppercased = tokens.map((tok) => {
      if (tok.type !== "code") return tok.text;
      return tok.text.replace(/\b\w+\b/g, (word) =>
        keywords.includes(word.toUpperCase()) ? word.toUpperCase() : word
      );
    });

    const clauseKeywords = [
      "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER BY", "GROUP BY",
      "HAVING", "LIMIT", "OFFSET", "INSERT INTO", "VALUES", "UPDATE",
      "SET", "DELETE FROM", "CREATE TABLE", "ALTER TABLE", "DROP TABLE",
      "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN", "FULL JOIN",
      "JOIN", "ON", "UNION", "UNION ALL",
    ];

    // Re-join, then apply newline-before-clause only on code regions.
    // To keep it simple and safe, we re-run clause replacement but skip
    // matches that fall inside string/comment tokens. Since tokens are now
    // uppercased and concatenated, we operate per-token again.
    const formattedParts: string[] = [];
    for (let idx = 0; idx < uppercased.length; idx++) {
      const part = uppercased[idx];
      const isCode = tokens[idx].type === "code";
      if (!isCode) { formattedParts.push(part); continue; }
      let p = part;
      for (const kw of clauseKeywords) {
        const regex = new RegExp(`\\b${kw}\\b`, "gi");
        p = p.replace(regex, `\n${kw}`);
      }
      formattedParts.push(p);
    }

    const formatted = formattedParts
      .join("")
      .replace(/\n\s*\n/g, "\n")
      .replace(/^\n/, "")
      .trim();

    setOutput(formatted);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">{t('common.input')}</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="select * from users where id = 1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={format}>{t('toolCommon.sql.format')}</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">{t('common.output')}</label>
          <textarea
            className="w-full h-40 p-3 border rounded font-mono text-sm"
            value={output}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
