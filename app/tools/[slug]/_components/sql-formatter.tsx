"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SqlFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

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
    const upper = input.replace(/\b\w+\b/g, (word) => {
      return keywords.includes(word.toUpperCase()) ? word.toUpperCase() : word;
    });

    const clauseKeywords = [
      "SELECT", "FROM", "WHERE", "AND", "OR", "ORDER BY", "GROUP BY",
      "HAVING", "LIMIT", "OFFSET", "INSERT INTO", "VALUES", "UPDATE",
      "SET", "DELETE FROM", "CREATE TABLE", "ALTER TABLE", "DROP TABLE",
      "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "OUTER JOIN", "FULL JOIN",
      "JOIN", "ON", "UNION", "UNION ALL",
    ];

    let formatted = upper;
    for (const kw of clauseKeywords) {
      const regex = new RegExp(`\\b${kw}\\b`, "gi");
      formatted = formatted.replace(regex, `\n${kw}`);
    }

    formatted = formatted
      .replace(/\n\s*\n/g, "\n") // Remove empty lines
      .replace(/^\n/, "") // Remove leading newline
      .trim();

    setOutput(formatted);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">SQL Input</label>
        <textarea
          className="w-full h-40 p-3 border rounded font-mono text-sm"
          placeholder="select * from users where id = 1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button onClick={format}>Format SQL</Button>
      {output && (
        <div>
          <label className="block text-sm font-medium mb-1">Formatted Output</label>
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
