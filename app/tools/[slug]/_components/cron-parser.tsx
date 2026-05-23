"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CronParserTool() {
  const [expression, setExpression] = useState("");
  const [description, setDescription] = useState("");

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const parseField = (field: string, min: number, max: number, names?: string[]): string[] => {
    const result: number[] = [];

    if (field === "*") {
      for (let i = min; i <= max; i++) result.push(i);
      return result.map((v) => (names ? names[v] : String(v)));
    }

    const parts = field.split(",");
    for (const part of parts) {
      if (part.includes("/")) {
        const [range, stepStr] = part.split("/");
        const step = parseInt(stepStr, 10);
        let start = min;
        let end = max;
        if (range !== "*") {
          const [s, e] = range.split("-");
          start = parseInt(s, 10);
          end = e ? parseInt(e, 10) : max;
        }
        for (let i = start; i <= end; i += step) {
          result.push(i);
        }
      } else if (part.includes("-")) {
        const [s, e] = part.split("-");
        for (let i = parseInt(s, 10); i <= parseInt(e, 10); i++) {
          result.push(i);
        }
      } else {
        result.push(parseInt(part, 10));
      }
    }

    return result.map((v) => (names ? names[v] : String(v)));
  };

  const parse = () => {
    const parts = expression.trim().split(/\s+/);
    if (parts.length !== 5 && parts.length !== 6) {
      if (parts.length === 7) {
        // Handle standard cron with seconds or year
        setDescription("6-field or 7-field cron expressions are not supported. Use the standard 5-field format:\nminute hour day-of-month month day-of-week");
        return;
      }
      setDescription("Invalid cron expression. Expected 5 fields: minute hour day-of-month month day-of-week");
      return;
    }

    try {
      const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;

      const minutes = parseField(minute, 0, 59);
      const hours = parseField(hour, 0, 23);
      const days = parseField(dayOfMonth, 1, 31);
      const months = parseField(month, 1, 12, monthNames);
      const weekdays = parseField(dayOfWeek, 0, 6, dayNames);

      const lines: string[] = ["Cron Expression: " + expression, ""];
      lines.push("Schedule Description:");
      lines.push("");
      lines.push(`  Minute:       ${minute === "*" ? "Every minute" : minutes.join(", ")}`);
      lines.push(`  Hour:         ${hour === "*" ? "Every hour" : hours.join(", ")}`);
      lines.push(`  Day of Month: ${dayOfMonth === "*" ? "Every day" : days.join(", ")}`);
      lines.push(`  Month:        ${month === "*" ? "Every month" : months.join(", ")}`);
      lines.push(`  Day of Week:  ${dayOfWeek === "*" ? "Every day of week" : weekdays.join(", ")}`);
      lines.push("");

      // Human readable summary
      let summary = "Runs ";
      if (minute !== "*" && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
        summary += `at minute ${minute} of every hour`;
      } else if (minute !== "*" && hour !== "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
        summary += `at ${hours.join(", ")}:${minutes.join(", ")} every day`;
      } else if (minute !== "*" && hour !== "*" && dayOfMonth !== "*" && month === "*" && dayOfWeek === "*") {
        summary += `at ${hours.join(", ")}:${minutes.join(", ")} on day(s) ${days.join(", ")} of the month`;
      } else if (minute !== "*" && hour !== "*" && dayOfMonth === "*" && month !== "*" && dayOfWeek === "*") {
        summary += `at ${hours.join(", ")}:${minutes.join(", ")} in ${months.join(", ")}`;
      } else if (minute !== "*" && hour !== "*" && dayOfMonth === "*" && month === "*" && dayOfWeek !== "*") {
        summary += `at ${hours.join(", ")}:${minutes.join(", ")} on ${weekdays.join(", ")}`;
      } else if (minute === "*" && hour === "*" && dayOfMonth === "*" && month === "*" && dayOfWeek === "*") {
        summary = "Runs every minute";
      } else {
        summary += `according to the schedule above`;
      }

      lines.push(summary);

      setDescription(lines.join("\n"));
    } catch {
      setDescription("Failed to parse cron expression. Please check the format.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Cron Expression</label>
        <input
          type="text"
          className="w-full p-3 border rounded font-mono text-sm"
          placeholder="5 4 * * *"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Format: minute hour day-of-month month day-of-week (5 fields)
        </p>
      </div>
      <Button onClick={parse}>Parse Cron</Button>
      {description && (
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <pre className="w-full p-3 border rounded font-mono text-sm bg-muted whitespace-pre-wrap">
            {description}
          </pre>
        </div>
      )}
    </div>
  );
}
