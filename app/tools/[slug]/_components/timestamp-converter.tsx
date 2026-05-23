"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TimestampConverterTool() {
  const [unixInput, setUnixInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [unixResult, setUnixResult] = useState("");
  const [dateResult, setDateResult] = useState("");

  const toDate = () => {
    const ts = parseInt(unixInput);
    if (isNaN(ts)) { setUnixResult("Invalid timestamp"); return; }
    const d = new Date(ts * 1000);
    setUnixResult(d.toUTCString() + "  |  " + d.toLocaleString());
  };

  const toTimestamp = () => {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) { setDateResult("Invalid date"); return; }
    setDateResult(String(Math.floor(d.getTime() / 1000)));
  };

  const now = () => {
    setUnixInput(String(Math.floor(Date.now() / 1000)));
    toDate();
  };

  return (
    <div className="space-y-6">
      {/* Timestamp → Date */}
      <div className="space-y-3">
        <h3 className="font-semibold">Unix Timestamp → Human Date</h3>
        <div className="flex gap-2">
          <input
            placeholder="Enter Unix timestamp (e.g. 1716364800)"
            value={unixInput}
            onChange={(e) => setUnixInput(e.target.value)}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={toDate}>Convert</Button>
          <Button variant="outline" onClick={now}>Now</Button>
        </div>
        {unixResult && (
          <div className="p-3 rounded-md border bg-card text-sm font-mono">{unixResult}</div>
        )}
      </div>

      {/* Date → Timestamp */}
      <div className="space-y-3">
        <h3 className="font-semibold">Human Date → Unix Timestamp</h3>
        <div className="flex gap-2">
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="flex-1 h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button onClick={toTimestamp}>Convert</Button>
        </div>
        {dateResult && (
          <div className="p-3 rounded-md border bg-card text-sm font-mono">{dateResult}</div>
        )}
      </div>
    </div>
  );
}
