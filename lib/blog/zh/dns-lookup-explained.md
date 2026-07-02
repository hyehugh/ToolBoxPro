## 什么是 DNS？

DNS（域名系统，Domain Name System）是将人类可读的域名（如 `example.com`）翻译成机器可读的 IP 地址（如 `93.184.216.34`）的系统。没有 DNS，你就需要记住每个你要访问的网站的 IP 地址。

把 DNS 想象成互联网的电话簿。当你在浏览器中输入一个 URL 时，DNS 就是那个找到你输入的"名字"（域名）对应的正确"电话号码"（IP 地址）的隐形服务。

### DNS 的规模

DNS 每天在全球范围内处理估计数以**万亿**计的查询。该系统分布在遍布全球的数千台服务器上，以分层结构组织。没有任何单一实体控制整个 DNS——它是互联网上最具弹性和最去中心化的系统之一。

## 域名解析的工作原理

当你在浏览器中输入 `example.com` 并按回车时，以下事件链会在几毫秒内发生：

### 第1步：浏览器缓存检查

你的浏览器首先检查自己的缓存。如果你最近访问过 `example.com`，IP 地址可能仍然存储在本地。如果找到，浏览器将跳过所有其他步骤，直接连接。

### 第2步：操作系统缓存

如果浏览器缓存为空，操作系统会检查其 DNS 缓存。Windows、macOS 和 Linux 都维护存储最近查询的本地 DNS 缓存。

### 第3步：Hosts 文件

操作系统检查 hosts 文件（Unix 上为 `/etc/hosts`，Windows 上为 `C:\Windows\System32\drivers\etc\hosts`）。此文件可以包含手动设置的域名到 IP 的映射，优先级高于 DNS。

### 第4步：递归解析器

如果本地缓存中没有答案，操作系统将查询发送到**递归解析器**（也叫 DNS 解析器）。这通常是你 ISP 的 DNS 服务器，或公共解析器，如：

- Google Public DNS：`8.8.8.8` 和 `8.8.4.4`
- Cloudflare DNS：`1.1.1.1` 和 `1.0.0.1`
- Quad9 DNS：`9.9.9.9`

### 第5步：根域名服务器

递归解析器从 DNS 层次结构的顶部开始。它查询13个根域名服务器集群之一（以字母 A 到 M 标识）。根服务器不知道 `example.com` 的 IP，但它知道谁处理 `.com` 域名——它返回 `.com` TLD（顶级域名）域名服务器的地址。

### 第6步：TLD 域名服务器

解析器查询 `.com` TLD 域名服务器。这个服务器也不知道具体的 IP，但它知道哪些域名服务器对 `example.com` 具有权威性。它返回那些域名服务器的地址。

### 第7步：权威域名服务器

解析器查询 `example.com` 的权威域名服务器。该服务器拥有实际的 DNS 记录，并返回与该域名关联的 IP 地址。

### 第8步：响应返回浏览器

解析器缓存结果（根据 TTL——生存时间值），并将 IP 地址返回给你的操作系统，操作系统再将其传递给浏览器。浏览器随后建立与该 IP 地址的连接。

### 完整流程图

```
浏览器 → 操作系统缓存 → 递归解析器 → 根服务器 → TLD服务器 → 权威服务器
           ↓                                                    ↓
        找到了吗？←──────────────────────────────────── IP 地址返回
```

整个过程通常需要20-120毫秒，其中大部分时间花在服务器之间的网络延迟上。

## DNS 记录类型

DNS 记录是 DNS 区域文件中的条目，提供关于域名的特定信息。每种记录类型服务于不同的目的。

### A 记录（地址）

最基本的 DNS 记录。将域名映射到 IPv4 地址。

```
example.com.    IN    A    93.184.216.34
```

每个网站需要至少一条 A 记录才能通过 IPv4 访问。

### AAAA 记录（IPv6 地址）

与 A 记录相同，但用于 IPv6 地址。"AAAA"（四重A）的名称来源于 IPv6 地址比 IPv4 长四倍的事实。

```
example.com.    IN    AAAA    2606:2800:220:1:248:1893:25c8:1946
```

### CNAME 记录（规范名称）

创建从一个域名到另一个域名的别名。当 DNS 解析器遇到 CNAME 时，它必须对目标域名执行另一次查询。

```
www.example.com.    IN    CNAME    example.com.
```

**重要：** CNAME 记录不能与同一域名的其他记录类型共存。这是 DNS 配置错误的常见来源。

### MX 记录（邮件交换）

指定哪些邮件服务器接收发往该域名的电子邮件。MX 记录包含一个优先级数字——数字越小优先级越高。

```
example.com.    IN    MX    10    mail1.example.com.
example.com.    IN    MX    20    mail2.example.com.
```

多条 MX 记录提供冗余——如果主邮件服务器不可达，辅助服务器将处理邮件。

### NS 记录（域名服务器）

将 DNS 区域委托给特定的权威域名服务器。NS 记录通常在域名注册商处设置。

```
example.com.    IN    NS    ns1.example.com.
example.com.    IN    NS    ns2.example.com.
```

### TXT 记录（文本）

存储任意文本信息。最初设计用于人类可读的注释，现在 TXT 记录对于邮件认证和域名验证至关重要。

常见用途：
- **SPF** —— 指定哪些邮件服务器可以为该域名发送邮件
- **DKIM** —— 为邮件验证提供加密签名
- **DMARC** —— 告诉接收方如何处理未通过认证的邮件
- **域名验证** —— 向 Google、Microsoft 等服务证明域名所有权

### SOA 记录（起始授权）

包含 DNS 区域的管理信息，包括主域名服务器、域名管理员邮箱、序列号以及各种计时器（刷新、重试、过期、最小 TTL）。

### SRV 记录（服务）

指定特定服务的服务器位置（主机名和端口）。被 XMPP、SIP 和 LDAP 等协议使用。

```
_sip._tcp.example.com.    IN    SRV    10 60 5060 sip.example.com.
```

### PTR 记录（指针）

用于反向 DNS 查询——将 IP 地址映射回域名。PTR 记录对邮件服务器很重要，因为许多邮件服务器会拒绝来自没有有效反向 DNS 的 IP 地址的邮件。

## 执行 DNS 查询

### 命令行工具

#### nslookup（Windows、macOS、Linux）

```bash
# 基本查询
nslookup example.com

# 查询特定记录类型
nslookup -type=MX example.com
nslookup -type=TXT example.com

# 使用特定 DNS 服务器
nslookup example.com 8.8.8.8
```

#### dig（macOS、Linux）

```bash
# 基本查询
dig example.com

# 查询特定记录类型
dig example.com MX
dig example.com TXT
dig example.com AAAA

# 简短输出
dig +short example.com

# 跟踪完整解析路径
dig +trace example.com
```

#### nslookup vs dig

`dig` 提供更详细的输出，通常更受网络管理员的青睐。`nslookup` 在所有平台上默认可用，对于基本查询更简单。

### 在线 DNS 查询工具

对于无需命令行访问的快速查询，在线 DNS 工具通过 Web 界面提供相同的信息。它们直接查询 DNS 服务器，并以可读格式显示所有记录类型。

## 常见 DNS 问题和排障

### DNS 传播延迟

当你更改 DNS 记录（如将域名指向新服务器）时，更改不会立即生效。更新必须在全球 DNS 系统中传播，这可能需要：

- **最快：** 几分钟（如果 TTL 很低）
- **通常：** 1-4小时
- **最长：** 长达48小时（TTL 值较高时）

**如何检查传播：** 使用不同 DNS 服务器的 DNS 查询工具。如果一些服务器显示新 IP 而另一些显示旧 IP，说明传播仍在进行中。

### 常见 DNS 问题

| 症状 | 可能原因 | 解决方案 |
|------|----------|----------|
| 网站无法访问 | 缺少或错误的 A/AAAA 记录 | 添加或更正记录 |
| 邮件无法送达 | 缺少或错误的 MX 记录 | 配置 MX 记录 |
| 邮件被标记为垃圾 | 缺少 SPF/DKIM/DMARC | 添加邮件认证 TXT 记录 |
| 子域名不工作 | 缺少 CNAME 或 A 记录 | 创建子域名记录 |
| 间歇性故障 | 域名服务器间记录不一致 | 同步所有域名服务器 |

### DNS 解析失败

如果 DNS 查询未返回结果：

1. **验证域名已注册** —— 过期的域名会丢失其 DNS 记录
2. **检查域名服务器配置** —— NS 记录必须指向正常工作的域名服务器
3. **确认特定记录存在** —— 并非所有记录类型都是必需的，但网站必须有 A/AAAA 记录
4. **检查 DNSSEC 问题** —— 配置错误的 DNSSEC 可能导致验证失败

### DNS 缓存问题

过期的 DNS 缓存是在进行 DNS 更改后出现问题的常见原因。

**刷新 DNS 缓存：**
```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux (systemd-resolved)
sudo systemd-resolve --flush-caches
```

## DNS 与安全

### DNSSEC（DNS 安全扩展）

DNSSEC 为 DNS 记录添加加密签名，可防止：
- **DNS 欺骗** —— 攻击者将你重定向到虚假 IP 地址
- **缓存投毒** —— 向 DNS 缓存注入虚假记录
- **中间人攻击** —— 拦截 DNS 响应

DNSSEC 通过使用私钥签名每条 DNS 记录来工作。解析器使用公钥验证签名，确保响应未被篡改。

### DNS over HTTPS（DoH）

DoH 通过 HTTPS 而非普通 UDP 发送 DNS 查询来加密通信。这可以防止：
- ISP 监控你访问的网站
- 网络管理员记录 DNS 查询
- 攻击者在公共 Wi-Fi 上拦截 DNS 流量

### DNS over TLS（DoT）

与 DoH 类似，但使用端口853上的 TLS 加密而非端口443上的 HTTPS。DoT 通常由系统级 DNS 解析器使用，而非单个浏览器。

## DNS 记录 TTL 详解

TTL（生存时间）告诉 DNS 解析器在多久时间内可以缓存记录，之后需要再次查询权威服务器。TTL 以秒为单位。

- **低 TTL（60-300秒）：** 更改传播快，但 DNS 查询次数更多。适用于迁移期间或预期频繁更改时。
- **中 TTL（3600-86400秒）：** 对大多数生产域名来说是平衡的方案。
- **高 TTL（86400-604800秒）：** 最大缓存，最快的查询速度。适用于很少更改的稳定记录。

## DNS 与邮件：SPF、DKIM 和 DMARC

这三条 TXT 记录可以保护你的域名免受邮件欺诈，并提高送达率。

### SPF（发件人策略框架）

SPF 列出哪些 IP 地址和服务器有权代表你的域名发送邮件。

```
example.com.    IN    TXT    "v=spf1 include:_spf.google.com include:_spf.outlook.com ~all"
```

### DKIM（域名密钥识别邮件）

DKIM 为外发邮件添加数字签名。接收服务器在 DNS 中查找你的公钥并验证签名。

```
selector._domainkey.example.com.    IN    TXT    "v=DKIM1; k=rsa; p=MIGfMA0GCSq..."
```

### DMARC（基于域名的消息认证）

DMARC 告诉接收服务器如何处理未通过 SPF 或 DKIM 检查的邮件。

```
_dmarc.example.com.    IN    TXT    "v=DMARC1; p=reject; rua=mailto:dmarc@example.com"
```

## 常见问题

**公共 DNS 和权威 DNS 有什么区别？** 公共 DNS 解析器（如 Google 8.8.8.8）通过递归查找记录来回答用户的查询。权威 DNS 服务器持有实际的区域记录，并为其域名提供权威性答案。

**我可以查询任何域名的 DNS 吗？** 可以——DNS 记录在设计上就是公开的。任何域名的 A、MX、TXT、NS 和其他记录都可以被任何人查询。唯一的例外是未发布到公共解析器的私有 DNS 区域中的记录。

**我应该多久检查一次 DNS 记录？** 进行任何 DNS 更改后，立即验证，并在传播后再次检查（在1小时、4小时和24小时后检查）。对于日常监控，每周检查一次对大多数域名来说就足够了。

**为什么一个域名有多条 NS 记录？** 多条 NS 记录提供冗余。如果一台域名服务器离线，解析器可以查询其他服务器。大多数注册商要求一个域名至少有两条 NS 记录。

**DNS 和 hosts 文件有什么区别？** hosts 文件是本地覆盖，优先级高于 DNS。hosts 文件中的条目绕过所有 DNS 解析。它适用于开发和测试，但在生产环境中应尽量保持精简。

## 相关工具

- [DNS 查询](/tools/dns-lookup) —— 查询任何域名的 A、AAAA、CNAME、MX、NS、TXT、SOA 等 DNS 记录
- [WHOIS 查询](/tools/whois-lookup) —— 查询域名注册信息、所有者和到期日期
