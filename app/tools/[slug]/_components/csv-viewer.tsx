"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CsvViewerTool() {
  const [input, setInput] = useState("");
  const [parsedData, setParsedData] = useState<string[][]>([]);
  const [hasHeader, setHasHeader] = useState(true);
  const [error, setError] = useState("");

  const parseCSV = (text: string): string[][] => {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentField = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (inQuotes) {
        if (char === '"' && nextChar === '"') {
          currentField += '"';
          i++;
        } else if (char === '"') {
          inQuotes = false;
        } else {
          currentField += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ",") {
          currentRow.push(currentField.trim());
          currentField = "";
        } else if (char === "\n" || (char === "\r" && nextChar === "\n")) {
          currentRow.push(currentField.trim());
          if (currentRow.some((cell) => cell !== "")) {
            rows.push(currentRow);
          }
          currentRow = [];
          currentField = "";
          if (char === "\r") i++;
        } else if (char === "\r") {
          currentRow.push(currentField.trim());
          if (currentRow.some((cell) => cell !== "")) {
            rows.push(currentRow);
          }
          currentRow = [];
          currentField = "";
        } else {
          currentField += char;
        }
      }
    }

    // Push the last field/row
    currentRow.push(currentField.trim());
    if (currentRow.some((cell) => cell !== "")) {
      rows.push(currentRow);
    }

    return rows;
  };

  const handleParse = () => {
    setError("");
    if (!input.trim()) {
      setError("Please enter CSV data.");
      setParsedData([]);
      return;
    }

    try {
      const data = parseCSV(input);
      if (data.length === 0) {
        setError("No data found in CSV input.");
        setParsedData([]);
        return;
      }
      setParsedData(data);
    } catch {
      setError("Failed to parse CSV data. Please check the format.");
      setParsedData([]);
    }
  };

  const headers = hasHeader && parsedData.length > 0 ? parsedData[0] : [];
  const rows = hasHeader && parsedData.length > 0 ? parsedData.slice(1) : parsedData;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">CSV Input</label>
        <textarea
          className="w-full h-32 p-3 border rounded font-mono text-sm"
          placeholder="name,age,city\nJohn,30,New York\nJane,25,London"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleParse}>Parse CSV</Button>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={hasHeader}
            onChange={(e) => setHasHeader(e.target.checked)}
          />
          First row is header
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {parsedData.length > 0 && (
        <div className="overflow-x-auto border rounded">
          <table className="w-full text-sm border-collapse">
            {headers.length > 0 && (
              <thead>
                <tr className="bg-muted">
                  {headers.map((header, i) => (
                    <th key={i} className="p-2 border text-left font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-2 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
