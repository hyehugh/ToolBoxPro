---
slug: ssl-checker
title: "SSL Checker: How to Verify SSL Certificate Validity Online"
titleZh: "SSL 检查器：如何在线验证 SSL 证书有效性"
description: "Check SSL certificate details, expiration dates, and chain validity for any domain. Ensure your website is secure and trusted."
descriptionZh: "检查任何域名的 SSL 证书详情、过期日期和链有效性。确保您的网站安全可信。"
date: 2026-05-23
readTime: "7 min read"
category: "Developer Tools"
toolSlug: "ssl-checker"
---

## Why SSL Certificates Matter

Every time you visit a website with HTTPS, an SSL/TLS certificate is at work. It does three critical things:

1. **Encrypts data** between the browser and server
2. **Authenticates the server** — confirms you're talking to the real website
3. **Enables trust** — the padlock icon in the address bar

Without a valid SSL certificate, data travels in plain text. Anyone on the same network (coffee shop WiFi, hotel network) can read it.

## What Our SSL Checker Reveals

Enter any domain name and our tool fetches and analyzes the SSL certificate in real time. Here's what you get:

### Certificate Details

| Field | What It Means |
|-------|---------------|
| Subject | The domain or organization the certificate belongs to |
| Issuer | The Certificate Authority (CA) that issued it |
| Serial Number | Unique identifier for the certificate |
| Algorithm | Encryption algorithm used (e.g., SHA-256 with RSA) |
| Key Size | Bit length of the public key (2048-bit, 4096-bit) |

### Validity Period

- **Issued On** — when the certificate became valid
- **Expires On** — when the certificate expires
- **Days Remaining** — how long until expiration

### Certificate Chain

SSL certificates form a chain of trust:

\`\`\`
Root CA (trusted by browsers)
  └─ Intermediate CA
       └─ Your Domain Certificate
\`\`\`

Our checker validates that:

- The chain is complete (no missing intermediate certificates)
- Each certificate in the chain is valid
- The chain leads to a trusted root CA

### Additional Checks

- **Revocation status** — checks CRL (Certificate Revocation List) and OCSP
- **Domain match** — verifies the certificate covers the domain
- **Protocol support** — shows which TLS versions are enabled
- **HSTS status** — checks if HTTP Strict Transport Security is configured

## How to Check an SSL Certificate

### Step 1: Enter the Domain

Visit our [SSL Checker](/tools/ssl-checker) and type in any domain name:

\`\`\`
example.com
www.example.com
api.example.com
\`\`\`

Include or omit https:// — the tool handles both.

### Step 2: Click Check

The tool initiates a secure connection to the server and downloads the certificate. This takes 1-3 seconds typically.

### Step 3: Review Results

You'll see a complete report with:

- **Green** indicators for passed checks
- **Red** indicators for failed checks
- **Yellow** warnings for issues to investigate

### Step 4: Take Action

Based on the results:

| Issue | Action |
|-------|--------|
| Expiring soon | Renew with your CA |
| Chain incomplete | Install intermediate certificates on your server |
| Weak algorithm | Reissue with stronger encryption |
| Wrong domain | Get a certificate that covers this domain |

## Common SSL Issues

### Expired Certificate

The most common problem. Browsers show a full-page warning for expired certificates. **Renew at least 30 days before expiration.**

### Mixed Content

HTTPS page loading HTTP resources (images, scripts, stylesheets). The padlock icon disappears. Fix by loading all resources over HTTPS.

### Self-Signed Certificate

Useful for development, but browsers show "Not Secure" warnings. Use a trusted CA like Let's Encrypt for production.

### Certificate Name Mismatch

The certificate was issued for \`www.example.com\` but you're visiting \`example.com\`. Use a wildcard certificate (\`*.example.com\`) or get a certificate covering both.

### Incomplete Chain

Server doesn't send intermediate certificates. Some browsers and mobile devices can't validate the chain and show warnings. Install the full chain on your server.

## Best Practices

### Monitor Your Certificates

- Check certificates **monthly** for standard sites
- Check **weekly** for e-commerce or banking sites
- Set up **alerts** for 30-, 14-, and 7-day warnings before expiration

### Use Modern Protocols

| Protocol | Status |
|----------|--------|
| TLS 1.3 | ✅ Best — fastest and most secure |
| TLS 1.2 | ✅ Acceptable — widely supported |
| TLS 1.1 | ❌ Deprecated — disable if possible |
| TLS 1.0 | ❌ Deprecated — disable immediately |
| SSL 3.0 | ❌ Insecure — must disable |

### Choose Strong Keys

- **2048-bit RSA** — minimum for new certificates
- **4096-bit RSA** — stronger, recommended for high-security sites
- **ECC (Elliptic Curve)** — stronger than RSA at equivalent bit sizes, faster

## Certificate Types Compared

| Type | Coverage | Best For | Cost |
|------|----------|----------|------|
| DV (Domain Validated) | Single domain | Blogs, small sites | Free (Let's Encrypt) |
| OV (Organization Validated) | Single domain + org verified | Business websites | $50-200/yr |
| EV (Extended Validation) | Domain + org verified + green bar | E-commerce, banking | $100-500/yr |
| Wildcard | *.example.com | Multi-subdomain sites | $100-400/yr |
| Multi-Domain (SAN) | Multiple specific domains | Different domains on one server | $50-300/yr |

## FAQ

**How often should I check my SSL certificate?** At least once a month. Many certificates expire after 90 days (Let's Encrypt) or 1-2 years (commercial CAs). Set calendar reminders.

**What happens if my SSL expires?** Browsers display security warnings that scare visitors away. Search engines may rank your site lower. Some browsers block access entirely.

**Can I check SSL for internal/hostname domains?** Yes — as long as the domain resolves and has a valid certificate, our checker can inspect it.

**How does SSL affect SEO?** Google uses HTTPS as a ranking signal. Sites with valid SSL certificates rank higher than insecure HTTP sites.

**What's the difference between SSL and TLS?** SSL is the deprecated predecessor of TLS. "SSL certificate" is the common term, but modern certificates use the TLS protocol. There's no practical difference for end users.

## Advanced Tips

### Certificate Chain Validation

A complete TLS certificate is always a **chain** — your server's certificate (leaf), one or more intermediate certificates, and a root certificate trusted by the browser. The most common SSL error — `NET::ERR_CERT_AUTHORITY_INVALID` — happens when the server only sends the leaf certificate without the intermediates. Browsers can't build the trust chain from leaf to root, so they reject the connection.

To verify your chain is complete: run `openssl s_client -connect example.com:443 -showcerts`. You should see at least two `BEGIN CERTIFICATE` blocks — the leaf and at least one intermediate. If you only see one, your server is missing the intermediate bundle. Fix this by concatenating your leaf certificate and the intermediate(s) into a single fullchain file:

```bash
cat your_domain.crt intermediate.crt > fullchain.pem
```

Configure your web server (Nginx `ssl_certificate`, Apache `SSLCertificateFile`) to serve `fullchain.pem` instead of just the leaf. Test with `ssllabs.com/ssltest/` — it grades your chain completeness, protocol versions, cipher strength, and known vulnerabilities like Heartbleed or ROBOT.

### Fixing Mixed Content

After migrating from HTTP to HTTPS, browsers block insecure resources loaded over HTTP on an HTTPS page. This is called **mixed content**, and it breaks stylesheets, scripts, images, and iframes. Chrome shows a warning icon instead of a lock in the address bar.

To diagnose: open DevTools → Console and look for messages like `Mixed Content: The page at 'https://...' was loaded over HTTPS, but requested an insecure stylesheet`. Fix each violation by updating the resource URL to HTTPS. For third-party resources that don't support HTTPS, download and self-host them. For your own assets, use protocol-relative URLs (`//example.com/asset.js`) or, better, absolute HTTPS URLs.

Automate detection with the `upgrade-insecure-requests` Content Security Policy header:

```http
Content-Security-Policy: upgrade-insecure-requests
```

This tells the browser to rewrite all HTTP requests on the page to HTTPS automatically — a safety net for resources you might have missed.

### Let's Encrypt Auto-Renewal

Let's Encrypt certificates expire every 90 days by design — short lifetimes limit damage from key compromise. Manual renewal is unsustainable, so automate with `certbot`. The standard setup installs a systemd timer or cron job that checks renewal twice daily and only renews certificates within 30 days of expiry:

```bash
# Test the renewal process without actually renewing
certbot renew --dry-run

# Verify the timer is active
systemctl status certbot.timer
```

For Nginx, use the `--nginx` plugin so certbot handles the web server reload automatically. For load-balanced setups, store certificates in a shared location (S3, HashiCorp Vault) and sync them to all nodes. Monitor renewal success — set up an alert if the last successful renewal is older than 60 days. Let's Encrypt sends expiry warning emails, but only to the address registered with the account.

## Common Mistakes

- **Serving only the leaf certificate** — browsers can't verify the chain. Always serve the full chain file.
- **Forgetting to renew on time** — certbot automates this, but if the timer breaks (server restart, package update), certificates silently expire. Monitor proactively.
- **Using SHA-1 certificates** — deprecated and rejected by all modern browsers. Ensure your CA issues SHA-256 signed certificates.
- **Supporting TLS 1.0/1.1** — deprecated since 2020. Disable them in your server config; only TLS 1.2 and 1.3 are secure.
- **Not setting HSTS** — without the `Strict-Transport-Security` header, users who type `http://` are vulnerable to downgrade attacks on their first request.

## Real-World Use Cases

- **E-commerce checkout security:** A complete certificate chain with HSTS and no mixed content is table stakes — browsers show prominent warnings that destroy conversion rates.
- **API authentication:** TLS protects bearer tokens (OAuth, JWT) in transit. Without a valid chain, API clients reject the connection and integrations fail silently.
- **Multi-domain hosting:** Use a SAN (Subject Alternative Name) or wildcard certificate (`*.example.com`) to secure unlimited subdomains with one certificate — simplifies management and renewal.
- **Internal tool security:** Even internal dashboards (Grafana, Jenkins) should run on HTTPS with self-signed or internal CA certificates to prevent credential sniffing on corporate networks.
- **CDN and origin shield:** Ensure TLS between the CDN edge and your origin server, not just between the user and the CDN. A misconfigured origin allows man-in-the-middle attacks on the backend hop.