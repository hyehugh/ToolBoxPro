---
slug: uuid-generator
title: "How to Generate UUIDs Online — Complete Guide to UUID v4"
titleZh: "如何在线生成 UUID——UUID v4 完整指南"
description: "Learn everything about UUIDs: what they are, UUID v4 vs v7, how to generate them instantly online, and best practices for using UUIDs as primary keys and identifiers."
descriptionZh: "了解 UUID 的一切：什么是 UUID、UUID v4 vs v7、如何在线即时生成以及使用 UUID 作为主键的最佳实践。"
date: 2026-05-23
readTime: "5 min read"
category: "Developer Tools"
toolSlug: "uuid-generator"
---

## What is a UUID?

A **UUID** (Universally Unique Identifier) is a 128-bit identifier standardized by the Open Software Foundation (OSF). It's designed to be unique across space and time — no central authority needed.

UUIDs look like this:

\`\`\`
550e8400-e29b-41d4-a716-446655440000
\`\`\`

That's 32 hexadecimal characters arranged in 5 groups: 8-4-4-4-12.

## Why Use UUIDs?

### 1. Distributed Systems

Auto-increment IDs break when you have multiple databases generating IDs simultaneously. Two servers could both generate ID 42. UUIDs eliminate collisions entirely.

### 2. Security Through Obscurity

Sequential IDs (1, 2, 3...) let anyone guess how many users or orders you have. UUIDs are unpredictable — no one can guess a valid ID.

### 3. Offline Generation

UUIDs can be generated without a database or central server. Your mobile app can create UUIDs offline and sync later with zero conflicts.

### 4. Database Migration Friendly

Merging two databases with auto-increment IDs is a nightmare of re-mapping foreign keys. UUIDs never conflict, so merging is trivial.

## UUID Versions Explained

### UUID v4 (Random)

The most common version. All bits except 6 are randomly generated:

\`\`\`
xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
\`\`\`

- The \`4\` at position 13 marks it as v4
- \`y\` indicates the variant (8, 9, a, or b)
- 122 bits of randomness → 5.3 × 10^36 possible values

**Collision probability:** You'd need to generate 2.71 trillion UUIDs to have a 50% chance of a single collision. In practice: zero.

### UUID v7 (Time-Ordered)

Newer version (RFC 9562) that's time-sortable. The first 48 bits are a Unix timestamp in milliseconds:

\`\`\`
018f3a6e-1b3c-7d45-a123-456789abcdef
\`\`\`

**Why v7 matters:** Database indexes on UUIDs were slow because random ordering caused page splits. Time-ordered UUIDs solve this — new rows go to the end of the index, just like auto-increment.

## How to Generate UUIDs

### Using ToolboxPro

Visit our [UUID Generator](/tools/uuid-generator) and:

1. Choose the UUID version (v4 or v7)
2. Select how many to generate (1 to 1000)
3. Click **Generate**
4. Choose your output format — lowercase, uppercase, or without hyphens
5. Copy with one click

### The Bulk Generation Feature

Need 500 UUIDs for seeding a database? Set the count to 500, click Generate, and copy them all at once. Each UUID is cryptographically random — no patterns, no collisions.

## UUID Best Practices

### As Database Primary Keys

\`\`\`sql
-- PostgreSQL has a native UUID type
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL
);

-- MySQL use CHAR(36) or BINARY(16)
CREATE TABLE users (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
\`\`\`

### Storage Optimization

- **Text format (36 chars):** Readable, debuggable, but larger
- **Binary format (16 bytes):** Compact, faster, but harder to read
- **Base64 encoded (22 chars):** URL-safe, compact

### When NOT to Use UUIDs

- **Tiny databases** — auto-increment is simpler and faster
- **Human-readable IDs** — order numbers like "ORD-1001" are more user-friendly
- **Performance-critical OLTP** — binary UUIDs are still slower than integers for joins

## FAQ

**Can two UUIDs be the same?** Theoretically yes, but practically no. The odds are so astronomically low that you'd win the lottery 50 times in a row first.

**What's the difference between UUID and GUID?** Nothing — GUID is Microsoft's implementation of the UUID standard. They're interchangeable.

**Are UUIDs cryptographically secure?** UUID v4 uses random bytes. On most systems these are cryptographically strong (JavaScript's crypto.randomUUID() uses the OS CSPRNG).

**How many UUIDs can I generate per second?** Unlimited — our tool generates them client-side in milliseconds. Try generating 10,000 and see for yourself.

## UUID Collision Probability: The Real Numbers

The math behind UUID uniqueness is worth understanding because it directly affects your architecture decisions.

For UUID v4 with 122 random bits, the **birthday paradox** tells us when a collision becomes likely:

| UUIDs Generated | Collision Probability | Real-World Equivalent |
|-----------------|----------------------|----------------------|
| 2.71 × 10³ (2,710) | 1 in 10¹⁸ | Winning the lottery twice |
| 103 trillion | 1 in a billion | Being struck by lightning |
| 2.71 × 10¹⁸ | 50% chance | Heat death of the universe first |

To hit a 50% collision chance, you'd need to generate **1 billion UUIDs per second for 85 years**. For any practical application, collisions do not happen.

### When Collisions CAN Happen

- **Broken RNG:** If your system's random number generator is seeded poorly (e.g., a container with low entropy at boot), UUIDs can repeat. Always use \`crypto.getRandomValues()\` or \`/dev/urandom\`, never \`Math.random()\`.
- **Seeded test data:** Generating UUIDs from a fixed seed in test suites produces identical UUIDs across runs — fine for tests, catastrophic in production.

## UUID v4 vs v7: Which to Choose

| Aspect | UUID v4 | UUID v7 |
|--------|---------|---------|
| Ordering | Random | Time-sorted (ms precision) |
| Database index performance | Poor (random page splits) | Excellent (append-friendly) |
| Sortability | Impossible | Natural chronological order |
| Predictability | Fully random | Timestamp is extractable |
| Adoption | Universal | Growing (RFC 9562, 2024) |
| Best for | Tokens, opaque IDs | Primary keys, event logs |

**Practical recommendation:** Use v7 for database primary keys in new projects. The index performance difference is measurable — benchmarks show 2-3x faster inserts at scale compared to v4, because B-tree pages fill sequentially instead of fragmenting.

\`\`\`javascript
// Generate v7 (if your environment supports it)
import { v7 } from 'uuid';
const id = v7(); // 018f3a6e-1b3c-7d45-a123-456789abcdef
\`\`\`

## Database Primary Key Selection Guide

Choosing between auto-increment integers, UUID v4, and UUID v7 depends on your system:

| Use Case | Recommended Key | Why |
|----------|----------------|-----|
| Single-server CRUD app | Auto-increment \`BIGINT\` | Simplest, fastest, smallest |
| Distributed / microservices | UUID v7 | No coordination needed, sortable |
| Multi-tenant SaaS | UUID v7 | Tenant isolation, no ID leakage |
| Event sourcing / audit logs | UUID v7 | Natural time ordering |
| Public-facing API tokens | UUID v4 | Unpredictable, no timing info |
| Offline-first mobile app | UUID v4 or v7 | Generate locally, sync later |

### Storage Format Decision

\`\`\`sql
-- Option A: Native UUID type (PostgreSQL)
-- 16 bytes, indexed natively, readable in queries
id UUID DEFAULT gen_random_uuid() PRIMARY KEY

-- Option B: BINARY(16) (MySQL)
-- 16 bytes, compact, but queries show hex blobs
id BINARY(16) PRIMARY KEY

-- Option C: CHAR(36) — human readable but 2.25x larger
id CHAR(36) PRIMARY KEY
\`\`\`

For PostgreSQL, always use the native \`UUID\` type — it's stored as 16 bytes and the database handles formatting. For MySQL, \`BINARY(16)\` is the right choice; avoid \`VARCHAR(36)\` unless you need maximum debuggability.

## Common Mistakes to Avoid

- **Using \`Math.random()\` to generate UUIDs.** It's not cryptographically secure. Two tabs in the same browser can produce identical "random" UUIDs because they share the same PRNG state. Always use \`crypto.randomUUID()\`.
- **Storing UUIDs as VARCHAR(36).** This wastes 20 bytes per row compared to binary storage, slows down index scans, and bloats foreign key tables exponentially.
- **Passing UUIDs through URL query parameters without encoding.** While hyphens are URL-safe, some legacy systems strip or mangle them. Use the braced format or Base62 encoding if you control both ends.
- **Assuming UUIDs are secret.** A UUID is an identifier, not a security token. If someone guesses a valid UUID, they can access that resource unless you have proper authorization checks. Use separate tokens for access control.

## Real-World Examples

**Example 1 — Multi-region database sync.** A SaaS company runs PostgreSQL in us-east-1 and eu-west-1. Both regions insert rows simultaneously. With auto-increment IDs, merge replication fails on conflicting primary keys. Switching to UUID v7 eliminated all conflicts while maintaining chronological sort order for debugging.

**Example 2 — Offline mobile app.** A field service app lets technicians create work orders without internet access. Each order gets a UUID v4 generated locally. When connectivity returns, the app syncs — no conflict resolution logic needed, because every UUID is globally unique by construction.

**Example 3 — Event log deduplication.** A message queue delivers events "at least once," meaning consumers may receive duplicates. Using UUIDs as event IDs lets consumers store \`processed_ids\` and skip duplicates with a simple existence check.