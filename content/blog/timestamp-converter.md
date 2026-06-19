---
slug: timestamp-converter
title: "Unix Timestamp Converter: How to Convert Between Epoch and Human Date"
titleZh: "Unix 时间戳转换：如何在纪元时间和人类日期之间转换"
description: "Master Unix timestamps: convert epoch seconds to readable dates, understand timezone handling, and use the right format for your programming language."
descriptionZh: "掌握 Unix 时间戳：将纪元秒转换为可读日期，了解时区处理，为你的编程语言使用正确的格式。"
date: 2026-05-23
readTime: "5 min read"
category: "Developer Tools"
toolSlug: "timestamp-converter"
---

## What is a Unix Timestamp?

A **Unix timestamp** (also called Epoch time) is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC — the Unix Epoch.

Right now, the timestamp is roughly **1.8 billion** and counting up by one every second.

### Why 1970?

Unix was developed at Bell Labs in the late 1960s and early 1970s. January 1, 1970 was chosen as the epoch for simplicity — it's a clean, round date. Ken Thompson and Dennis Ritchie picked it, and the world followed.

## When You Encounter Timestamps

Timestamps appear everywhere in development:

| Source | Format | Example |
|--------|--------|---------|
| REST APIs | Seconds | 1716451200 |
| JavaScript Date.now() | Milliseconds | 1716451200000 |
| Python datetime | Seconds with decimals | 1716451200.123456 |
| Database TIMESTAMP | Seconds or milliseconds | 1716451200 |
| Firebase Timestamps | Milliseconds | 1716451200000 |
| Excel dates | Days since 1900 | 45455 |

The most common mistake? Mixing seconds and milliseconds.

## How to Convert Timestamps

### Using ToolboxPro

Visit our [Timestamp Converter](/tools/timestamp-converter) and:

1. **Paste a timestamp** — it auto-detects seconds vs milliseconds
2. **See all formats instantly** — UTC, ISO 8601, local time, relative time
3. **Pick a date from the calendar** — get the timestamp for any date
4. **Copy any format** with one click

### Manual Conversion in Code

\`\`\`javascript
// JavaScript — Date.now() returns milliseconds
const ms = Date.now();                       // 1716451200000
const seconds = Math.floor(Date.now() / 1000); // 1716451200

// Convert back
const date = new Date(1716451200000);
\`\`\`

\`\`\`python
# Python
import time
import datetime

# Current timestamp
ts = time.time()  # 1716451200.123456

# To datetime
dt = datetime.datetime.fromtimestamp(ts)
print(dt.isoformat())  # "2026-05-23T00:00:00.123456"

# From datetime to timestamp
ts2 = dt.timestamp()
\`\`\`

\`\`\`sql
-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());           -- seconds
SELECT EXTRACT(EPOCH FROM NOW()) * 1000;    -- milliseconds
SELECT TO_TIMESTAMP(1716451200);            -- timestamp to datetime

-- MySQL
SELECT UNIX_TIMESTAMP();                    -- seconds
SELECT FROM_UNIXTIME(1716451200);           -- timestamp to datetime
\`\`\`

## The Year 2038 Problem

On January 19, 2038, 32-bit signed integers will overflow. The timestamp 2147483647 (max 32-bit signed) rolls over to -2147483648, which corresponds to December 1901.

**Who's affected:** Legacy systems, embedded devices, older databases, 32-bit operating systems.

**The fix:** Use 64-bit integers (safe for 292 billion years) or unsigned 32-bit (safe until 2106).

Most modern systems already use 64-bit timestamps, but check your embedded devices and legacy databases.

## Timezone Handling

Timestamps are always UTC. The conversion to local time is purely display logic:

\`\`\`javascript
// Always UTC internally
const utc = new Date("2026-05-23T12:00:00Z");

// Display in any timezone
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
\`\`\`

### Best Practice

Store timestamps as UTC integers in your database. Convert to local time only when displaying to users. This avoids every timezone-related bug.

## FAQ

**What's the difference between seconds and milliseconds?** A factor of 1000. Timestamp \`1716451200\` (seconds) = May 23, 2026. \`1716451200000\` (milliseconds) = the same moment. Divide by 1000 to convert milliseconds to seconds.

**Does a timestamp include timezone?** No — timestamps are always UTC. The number itself represents the same instant everywhere on Earth.

**How do I get the current timestamp in a shell script?**

\`\`\`bash
# Seconds
date +%s

# Milliseconds
echo $(($(date +%s%N)/1000000))
\`\`\`

**What is ISO 8601?** A date format like \`2026-05-23T14:30:00+08:00\`. It's human-readable and includes timezone offset. Our tool shows both formats.