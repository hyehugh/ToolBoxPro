---
slug: dns-lookup-explained
title: "DNS Lookup Explained: How Domain Name Resolution Works"
titleZh: "DNS 查询详解：域名解析的工作原理"
description: "Understand DNS resolution, record types, and how to troubleshoot domain issues."
descriptionZh: "了解 DNS 解析、记录类型以及如何排查域名问题。"
date: 2026-06-26
readTime: "8 min read"
category: "Network Tools"
toolSlug: "dns-lookup"
---

## What Is DNS?

DNS (Domain Name System) is the system that translates human-readable domain names like `example.com` into machine-readable IP addresses like `93.184.216.34`. Without DNS, you'd need to memorize IP addresses for every website you visit.

Think of DNS as the internet's phonebook. When you type a URL into your browser, DNS is the invisible service that finds the correct "phone number" (IP address) for the "name" (domain) you typed.

### The Scale of DNS

DNS handles an estimated **trillions** of queries per day worldwide. The system is distributed across thousands of servers globally, organized in a hierarchical structure. No single entity controls all of DNS — it's one of the most resilient and decentralized systems on the internet.

## How Domain Name Resolution Works

When you type `example.com` into your browser and press Enter, the following chain of events happens in milliseconds:

### Step 1: Browser Cache Check

Your browser first checks its own cache. If you recently visited `example.com`, the IP address might still be stored locally. If found, the browser skips all other steps and connects directly.

### Step 2: Operating System Cache

If the browser cache is empty, the operating system checks its DNS cache. Windows, macOS, and Linux all maintain local DNS caches that store recent lookups.

### Step 3: Hosts File

The OS checks the hosts file (`/etc/hosts` on Unix, `C:\Windows\System32\drivers\etc\hosts` on Windows). This file can contain manual domain-to-IP mappings that override DNS.

### Step 4: Recursive Resolver

If the local caches don't have the answer, the OS sends the query to a **recursive resolver** (also called a DNS resolver). This is typically your ISP's DNS server, or a public resolver like:

- Google Public DNS: `8.8.8.8` and `8.8.4.4`
- Cloudflare DNS: `1.1.1.1` and `1.0.0.1`
- Quad9 DNS: `9.9.9.9`

### Step 5: Root Name Servers

The recursive resolver starts at the top of the DNS hierarchy. It queries one of the 13 root name server clusters (identified by letters A through M). The root server doesn't know the IP for `example.com`, but it knows who handles `.com` domains — it returns the address of the `.com` TLD (Top-Level Domain) name servers.

### Step 6: TLD Name Servers

The resolver queries the `.com` TLD name server. This server doesn't know the specific IP either, but it knows which name servers are authoritative for `example.com`. It returns those name server addresses.

### Step 7: Authoritative Name Servers

The resolver queries the authoritative name server for `example.com`. This server has the actual DNS records and returns the IP address associated with the domain.

### Step 8: Response to Browser

The resolver caches the result (based on the TTL — Time To Live value) and returns the IP address to your operating system, which passes it to the browser. The browser then establishes a connection to that IP address.

### Complete Timeline

```
Browser → OS Cache → Recursive Resolver → Root Server → TLD Server → Authoritative Server
           ↓                                                      ↓
        Found? ←──────────────────────────────────── IP Address Returned
```

The entire process typically takes 20-120 milliseconds, with most of that time spent in network latency between servers.

## DNS Record Types

DNS records are entries in a DNS zone file that provide specific information about a domain. Each record type serves a different purpose.

### A Record (Address)

The most fundamental DNS record. Maps a domain name to an IPv4 address.

```
example.com.    IN    A    93.184.216.34
```

Every website needs at least one A record to be reachable over IPv4.

### AAAA Record (IPv6 Address)

Same as an A record, but for IPv6 addresses. The name "AAAA" (quad-A) comes from the fact that IPv6 addresses are four times longer than IPv4.

```
example.com.    IN    AAAA    2606:2800:220:1:248:1893:25c8:1946
```

### CNAME Record (Canonical Name)

Creates an alias from one domain name to another. When a DNS resolver encounters a CNAME, it must perform another lookup for the target domain.

```
www.example.com.    IN    CNAME    example.com.
```

**Important:** CNAME records cannot coexist with other record types for the same domain name. This is a common source of DNS configuration errors.

### MX Record (Mail Exchange)

Specifies which mail servers accept email for a domain. MX records include a priority number — lower numbers are preferred.

```
example.com.    IN    MX    10    mail1.example.com.
example.com.    IN    MX    20    mail2.example.com.
```

Multiple MX records provide redundancy — if the primary mail server is unreachable, the secondary server handles the email.

### NS Record (Name Server)

Delegates a DNS zone to use specific authoritative name servers. NS records are typically set at the domain registrar.

```
example.com.    IN    NS    ns1.example.com.
example.com.    IN    NS    ns2.example.com.
```

### TXT Record (Text)

Stores arbitrary text information. Originally designed for human-readable notes, TXT records are now critical for email authentication and domain verification.

Common uses:
- **SPF** — specifies which mail servers can send email for the domain
- **DKIM** — provides a cryptographic signature for email verification
- **DMARC** — tells receivers how to handle unauthenticated email
- **Domain verification** — proving ownership to services like Google, Microsoft, etc.

### SOA Record (Start of Authority)

Contains administrative information about a DNS zone, including the primary name server, the email of the domain administrator, the serial number, and various timers (refresh, retry, expire, minimum TTL).

### SRV Record (Service)

Specifies the location (hostname and port) of servers for specific services. Used by protocols like XMPP, SIP, and LDAP.

```
_sip._tcp.example.com.    IN    SRV    10 60 5060 sip.example.com.
```

### PTR Record (Pointer)

Used for reverse DNS lookups — mapping an IP address back to a domain name. PTR records are important for email servers, as many mail servers reject email from IP addresses without valid reverse DNS.

## Performing DNS Lookups

### Command-Line Tools

#### nslookup (Windows, macOS, Linux)

```bash
# Basic lookup
nslookup example.com

# Query specific record type
nslookup -type=MX example.com
nslookup -type=TXT example.com

# Use a specific DNS server
nslookup example.com 8.8.8.8
```

#### dig (macOS, Linux)

```bash
# Basic lookup
dig example.com

# Query specific record type
dig example.com MX
dig example.com TXT
dig example.com AAAA

# Short output
dig +short example.com

# Trace the full resolution path
dig +trace example.com
```

#### nslookup vs dig

`dig` provides more detailed output and is generally preferred by network administrators. `nslookup` is available on all platforms by default and is simpler for basic queries.

### Online DNS Lookup Tools

For quick lookups without command-line access, online DNS tools provide the same information through a web interface. They query DNS servers directly and display all record types in a readable format.

## Common DNS Issues and Troubleshooting

### DNS Propagation Delay

When you change DNS records (like pointing a domain to a new server), the changes don't take effect immediately. The update must propagate across the global DNS system, which can take:

- **Minimum:** A few minutes (if TTL is low)
- **Typical:** 1-4 hours
- **Maximum:** Up to 48 hours (with high TTL values)

**How to check propagation:** Use DNS lookup tools with different DNS servers. If some servers show the new IP and others show the old one, propagation is still in progress.

### Common DNS Problems

| Symptom | Likely Cause | Solution |
|---------|-------------|----------|
| Website not loading | Missing or incorrect A/AAAA record | Add or correct the record |
| Email not delivering | Missing or incorrect MX records | Configure MX records |
| Emails marked as spam | Missing SPF/DKIM/DMARC | Add email authentication TXT records |
| Subdomain not working | Missing CNAME or A record | Create the subdomain record |
| Intermittent failures | Inconsistent records across name servers | Sync all name servers |

### DNS Resolution Failure

If a DNS lookup returns no results:

1. **Verify the domain is registered** — expired domains lose their DNS records
2. **Check name server configuration** — the NS records must point to working name servers
3. **Confirm the specific record exists** — not all record types are required, but A/AAAA is essential for websites
4. **Check for DNSSEC issues** — misconfigured DNSSEC can cause validation failures

### DNS Cache Issues

Stale DNS cache is a common cause of problems after making DNS changes.

**Flush DNS cache:**
```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux (systemd-resolved)
sudo systemd-resolve --flush-caches
```

## DNS and Security

### DNSSEC (DNS Security Extensions)

DNSSEC adds cryptographic signatures to DNS records, preventing:
- **DNS spoofing** — attackers redirecting you to fake IP addresses
- **Cache poisoning** — injecting false records into DNS caches
- **Man-in-the-middle attacks** — intercepting DNS responses

DNSSEC works by signing each DNS record with a private key. Resolvers verify the signature using a public key, ensuring the response hasn't been tampered with.

### DNS over HTTPS (DoH)

DoH encrypts DNS queries by sending them over HTTPS instead of plain UDP. This prevents:
- ISPs from monitoring which websites you visit
- Network administrators from logging DNS queries
- Attackers from intercepting DNS traffic on public Wi-Fi

### DNS over TLS (DoT)

Similar to DoH but uses TLS encryption on port 853 instead of HTTPS on port 443. DoT is typically used by system-level DNS resolvers rather than individual browsers.

## DNS Record TTL Explained

TTL (Time To Live) tells DNS resolvers how long to cache a record before querying the authoritative server again. TTL is measured in seconds.

- **Low TTL (60-300 seconds):** Changes propagate quickly, but more DNS queries are made. Use during migrations or when expecting frequent changes.
- **Medium TTL (3600-86400 seconds):** Balanced approach for most production domains.
- **High TTL (86400-604800 seconds):** Maximum caching, fastest lookups. Use for stable records that rarely change.

## DNS for Email: SPF, DKIM, and DMARC

These three TXT records protect your domain from email spoofing and improve deliverability.

### SPF (Sender Policy Framework)

SPF lists which IP addresses and servers are authorized to send email on behalf of your domain.

```
example.com.    IN    TXT    "v=spf1 include:_spf.google.com include:_spf.outlook.com ~all"
```

### DKIM (DomainKeys Identified Mail)

DKIM adds a digital signature to outgoing emails. The receiving server looks up your public key in DNS and verifies the signature.

```
selector._domainkey.example.com.    IN    TXT    "v=DKIM1; k=rsa; p=MIGfMA0GCSq..."
```

### DMARC (Domain-based Message Authentication)

DMARC tells receiving servers what to do with emails that fail SPF or DKIM checks.

```
_dmarc.example.com.    IN    TXT    "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

## FAQ

**What's the difference between public DNS and authoritative DNS?** Public DNS resolvers (like Google 8.8.8.8) answer queries from users by recursively looking up records. Authoritative DNS servers hold the actual zone records and provide definitive answers for their domain.

**Can I look up DNS for any domain?** Yes — DNS records are public by design. Any domain's A, MX, TXT, NS, and other records can be queried by anyone. The only exceptions are records in private DNS zones not published to public resolvers.

**How often should I check my DNS records?** After making any DNS changes, verify immediately and again after propagation (check at 1 hour, 4 hours, and 24 hours). For routine monitoring, weekly checks are sufficient for most domains.

**Why are there multiple NS records for a domain?** Multiple NS records provide redundancy. If one name server goes offline, resolvers can query the others. Most registrars require at least two NS records for a domain.

**What's the difference between DNS and hosts file?** The hosts file is a local override that takes precedence over DNS. Entries in the hosts file bypass all DNS resolution. It's useful for development and testing, but should be kept minimal in production.

## Related Tools

- [DNS Lookup](/tools/dns-lookup) — Query A, AAAA, CNAME, MX, NS, TXT, SOA, and other DNS records for any domain
- [WHOIS Lookup](/tools/whois-lookup) — Look up domain registration information, ownership, and expiration dates
