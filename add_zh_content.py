#!/usr/bin/env python3
"""Add contentZh to blog posts that are missing it."""
import re
import sys

filepath = 'D:/01_Coding/60_工具网站/toolboxpro/lib/blog/data.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Define translations keyed by slug
# Each translation will be inserted after the closing backtick of `content:`
translations = {}

translations['ssl-checker'] = """## 为什么 SSL 证书很重要

每次你访问 HTTPS 网站时，SSL/TLS 证书都在发挥作用。它做三件关键的事情：

1. **加密**浏览器和服务器之间的数据
2. **验证服务器** — 确认你正在与真实网站通信
3. **建立信任** — 地址栏中的挂锁图标

没有有效的 SSL 证书，数据以明文传输。同一网络上的任何人都可以读取它（咖啡店 WiFi、酒店网络）。

## 我们的 SSL 检查器能显示什么

输入任何域名，我们的工具会实时获取和分析 SSL 证书。以下是你能看到的信息：

### 证书详情

| 字段 | 含义 |
|-------|---------------|
| 主题 | 证书所属的域或组织 |
| 颁发者 | 颁发证书的证书颁发机构（CA） |
| 序列号 | 证书的唯一标识符 |
| 算法 | 使用的加密算法（例如，SHA-256 with RSA） |
| 密钥大小 | 公钥的位长度（2048 位、4096 位） |

### 有效期

- **颁发日期** — 证书生效的时间
- **到期日期** — 证书过期的时间
- **剩余天数** — 距离到期还有多久

### 证书链

SSL 证书形成一个信任链：

```
根 CA（浏览器信任）
  └─ 中间 CA
       └─ 你的域名证书
```

我们的检查器验证：

- 链是否完整（没有缺少中间证书）
- 链中的每个证书是否有效
- 链是否指向受信任的根 CA

### 额外检查

- **吊销状态** — 检查 CRL（证书吊销列表）和 OCSP
- **域名匹配** — 验证证书覆盖该域名
- **协议支持** — 显示启用的 TLS 版本
- **HSTS 状态** — 检查是否配置了 HTTP 严格传输安全

## 如何检查 SSL 证书

### 步骤 1：输入域名

访问我们的 [SSL 检查器](/tools/ssl-checker) 并输入任何域名：

```
example.com
www.example.com
api.example.com
```

可以包含或省略 https:// — 工具都能处理。

### 步骤 2：点击检查

工具会向服务器发起安全连接并下载证书。通常需要 1-3 秒。

### 步骤 3：查看结果

你会看到一个完整的报告，包含：

- **绿色** 指示检查通过
- **红色** 指示检查失败
- **黄色** 警告需要调查的问题

### 步骤 4：采取行动

根据结果：

| 问题 | 操作 |
|-------|--------|
| 即将到期 | 向 CA 续期 |
| 链不完整 | 在服务器上安装中间证书 |
| 弱算法 | 使用更强的加密重新颁发 |
| 域名错误 | 获取覆盖此域名的证书 |

## 常见 SSL 问题

### 证书过期

最常见的问题。浏览器对过期证书显示整页警告。**至少在到期前 30 天续期。**

### 混合内容

HTTPS 页面加载 HTTP 资源（图片、脚本、样式表）。挂锁图标消失。解决方法：所有资源通过 HTTPS 加载。

### 自签名证书

对开发有用，但浏览器显示"不安全"警告。生产环境使用受信任的 CA，如 Let's Encrypt。

### 证书名称不匹配

证书为 `www.example.com` 颁发，但你访问的是 `example.com`。使用通配符证书（`*.example.com`）或获取同时覆盖两者的证书。

### 链不完整

服务器不发送中间证书。某些浏览器和移动设备无法验证链并显示警告。在服务器上安装完整链。

## 最佳实践

### 监控你的证书

- **每月**检查标准网站的证书
- **每周**检查电商或银行网站
- 设置到期前 **30 天、14 天和 7 天**的警报

### 使用现代协议

| 协议 | 状态 |
|----------|--------|
| TLS 1.3 | ✅ 最佳 — 最快且最安全 |
| TLS 1.2 | ✅ 可接受 — 广泛支持 |
| TLS 1.1 | ❌ 已弃用 — 尽可能禁用 |
| TLS 1.0 | ❌ 已弃用 — 立即禁用 |
| SSL 3.0 | ❌ 不安全 — 必须禁用 |

### 选择强密钥

- **2048 位 RSA** — 新证书的最低要求
- **4096 位 RSA** — 更强，建议用于高安全性网站
- **ECC（椭圆曲线）** — 同等位大小下比 RSA 更强、更快

## 证书类型对比

| 类型 | 覆盖范围 | 最适合 | 费用 |
|------|----------|----------|------|
| DV（域名验证） | 单域名 | 博客、小站点 | 免费（Let's Encrypt） |
| OV（组织验证） | 单域名 + 组织验证 | 商业网站 | 50-200 美元/年 |
| EV（扩展验证） | 域名 + 组织验证 + 绿色地址栏 | 电商、银行 | 100-500 美元/年 |
| 通配符 | *.example.com | 多子域名站点 | 100-400 美元/年 |
| 多域名（SAN） | 多个特定域名 | 一台服务器上的不同域名 | 50-300 美元/年 |

## 常见问题

**我应该多久检查一次 SSL 证书？** 至少每月一次。许多证书在 90 天（Let's Encrypt）或 1-2 年（商业 CA）后过期。设置日历提醒。

**如果 SSL 过期会怎样？** 浏览器显示安全警告，吓跑访问者。搜索引擎可能降低你的网站排名。某些浏览器完全阻止访问。

**我可以检查内部/主机名域名的 SSL 吗？** 可以——只要域名可解析且有有效证书，我们的检查器就可以检查。

**SSL 如何影响 SEO？** Google 将 HTTPS 作为排名信号。具有有效 SSL 证书的网站排名高于不安全的 HTTP 网站。

**SSL 和 TLS 有什么区别？** SSL 是 TLS 已弃用的前身。"SSL 证书"是常用术语，但现代证书使用 TLS 协议。对最终用户来说没有实际区别。"""

translations['dns-lookup'] = """## 什么是 DNS？

域名系统（DNS）是互联网的电话簿。当你在浏览器中输入 `example.com` 时，DNS 会将这个人类可读的名称转换为机器可读的 IP 地址，如 `93.184.216.34`。

没有 DNS，你需要记住每个网站的 IP 地址。DNS 在后台静默工作，通常只需几毫秒。

## 为什么要执行 DNS 查询？

DNS 查询可以帮助你：

- **验证域名配置** — 确认你的网站指向正确的服务器
- **诊断电子邮件问题** — 检查 MX 记录以解决邮件投递问题
- **排查连接问题** — 查看 DNS 是否是瓶颈
- **安全审计** — 检查 TXT 记录中的 SPF、DKIM 和 DMARC
- **域名迁移** — 在切换主机前确认 DNS 变更已传播

## DNS 记录类型

### A 记录（地址）

将域名映射到 IPv4 地址：

```
example.com → 93.184.216.34
```

这是最基本的记录类型。每个网站至少需要一个 A 记录。

### AAAA 记录（IPv6 地址）

与 A 记录相同，但用于 IPv6 地址：

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### CNAME 记录（规范名称）

将一个域名别名指向另一个域名：

```
www.example.com → example.com
```

别名域名继承目标的所有 DNS 设置。

### MX 记录（邮件交换）

指定域名的邮件服务器：

| 优先级 | 邮件服务器 |
|----------|------------|
| 10 | mail.example.com |
| 20 | backup-mail.example.com |

优先级数字越小越优先尝试。

### NS 记录（名称服务器）

标识权威 DNS 服务器：

```
example.com → ns1.example.com, ns2.example.com
```

### TXT 记录（文本）

存储任意文本数据，常用于：

- **SPF**（发件人策略框架）— 哪些服务器可以为你的域名发送邮件
- **DKIM**（域名密钥识别邮件）— 加密邮件签名
- **DMARC**（基于域名的消息认证）— 邮件认证策略
- **域名验证** — 证明你拥有某个域名（Google、Microsoft 等）

### SOA 记录（权威起始）

包含管理信息：

| 字段 | 含义 |
|-------|---------|
| MNAME | 主名称服务器 |
| RNAME | 管理员电子邮件地址 |
| Serial | 版本号（变更时递增） |
| Refresh | 检查更新的频率 |
| Retry | 刷新失败后的等待时间 |
| Expire | 无更新时停止使用该区域的时间 |
| Minimum TTL | 默认缓存持续时间 |

## 如何执行 DNS 查询

### 使用 ToolboxPro

访问我们的 [DNS 查询工具](/tools/dns-lookup)。

**步骤 1：输入域名**

```
example.com
google.com
github.com
```

**步骤 2：选择记录类型（可选）**

默认情况下，工具返回所有常见记录类型。你可以筛选只查看：

- A（IPv4）
- AAAA（IPv6）
- CNAME（别名）
- MX（邮件）
- NS（名称服务器）
- TXT（文本）
- SOA（权威）

**步骤 3：点击查询**

结果在 1-2 秒内以结构化表格形式显示。

**步骤 4：分析结果**

每条记录显示：

- **类型** — 记录类型（A、MX、TXT 等）
- **名称** — 域名/子域名
- **值** — 解析后的数据
- **TTL** — 生存时间（秒，结果的缓存时长）

## 理解 TTL（生存时间）

TTL 告诉 DNS 解析器在检查更新之前缓存记录的时间。

| TTL 值 | 缓存时长 | 使用场景 |
|-----------|---------------|----------|
| 300（5 分钟） | 短 | 迁移/测试，频繁变更 |
| 3600（1 小时） | 中 | 标准生产环境 |
| 86400（24 小时） | 长 | 稳定记录，很少变更 |
| 604800（7 天） | 很长 | SOA 记录、NS 记录 |

**在计划变更前降低 TTL。** 如果要迁移服务器，至少在变更前 24 小时将 TTL 降低到 300 秒。这确保旧记录在切换后快速过期。

## 常见 DNS 问题

### 传播延迟

更改 DNS 记录后，需要时间在世界范围内传播。影响因素：

- 你的 TTL 设置（主要因素）
- ISP 缓存策略
- 地区 DNS 解析器行为

**典型传播时间：** 1-48 小时。从不同位置使用我们的查询工具有助于确认传播情况。

### 缺少记录

常见错误：

| 症状 | 可能原因 |
|---------|-------------|
| 网站无法加载 | 缺少或错误的 A/AAAA 记录 |
| 邮件无法投递 | 缺少或错误的 MX 记录 |
| 邮件被标记为垃圾邮件 | 缺少 SPF/DKIM/DMARC TXT 记录 |
| 子域名无法访问 | 缺少 CNAME 记录 |

### DNS 解析失败

如果查询没有返回结果：

1. 检查域名是否已注册且有效
2. 验证名称服务器是否正确且有响应
3. 确认特定记录存在
4. 检查 DNSSEC 验证问题

## DNS 与安全

### DNSSEC

DNS 安全扩展为 DNS 记录添加加密签名，防止 DNS 欺骗和缓存投毒。我们的工具显示域名是否启用了 DNSSEC。

### SPF、DKIM 和 DMARC

这三个 TXT 记录保护你的域名免受邮件伪造：

| 记录 | 目的 |
|--------|---------|
| SPF | 列出授权邮件服务器 |
| DKIM | 提供加密验证 |
| DMARC | 告诉接收方如何处理未认证邮件 |

SPF 记录示例：

```
v=spf1 include:_spf.google.com ~all
```

这表示："只有 Google 的服务器可以为此域名发送邮件。其他的应标记为可疑。"

## 常见问题

**公共 DNS 和权威 DNS 有什么区别？** 公共 DNS 解析器（如 Google 8.8.8.8）回答用户的查询。权威 DNS 服务器保存实际区域记录。我们的工具查询权威服务器以获得最准确的结果。

**我可以查询内部/私有域名的 DNS 吗？** 不能——未发布到公共 DNS 服务器的私有 DNS 区域不可见。对内部 DNS，请使用本地命令行工具（`nslookup`、`dig`）。

**DNS 传播需要多长时间？** 通常为 1-48 小时，但现代 CDN 和全球 DNS 提供商通常可以在几分钟内完成传播。降低 TTL 值可加速未来的变更。

**为什么从不同位置看到不同的结果？** 各种 DNS 解析器缓存的记录不同。有些解析器可能仍缓存了旧 TTL。等待传播或使用直接查询权威服务器的工具。

**DNS 查询对国际化域名（IDN）有效吗？** 有效——工具会自动将 IDN 字符（如 中国）转换为 Punycode 格式后再查询。"""

# Process each slug
for slug, translation in translations.items():
    # Find the slug position
    slug_pattern = f'    slug: "{slug}"'
    slug_pos = content.find(slug_pattern)
    if slug_pos == -1:
        print(f"ERROR: slug '{slug}' not found!")
        continue
    
    # Find the content field
    content_field_start = content.find('    content: `', slug_pos)
    if content_field_start == -1:
        print(f"ERROR: content field not found for '{slug}'!")
        continue
    
    # Find the closing backtick of the content field
    # It ends with `, followed by newline and then optional blank line then `  },`
    search_start = content_field_start + len('    content: `')
    rest = content[search_start:]
    
    # Find the end-of-content backtick: `,\n
    # But there may be escaped backticks inside, so we need to find the right one
    # Strategy: find the position after all `content:` lines, look for `,\n  }
    # The closing backtick is followed by ,\n  } 
    
    idx = 0
    while idx < len(rest):
        if rest[idx] == '`' and idx + 1 < len(rest) and rest[idx+1] == ',':
            # Check if followed by \n  }
            rest_after = rest[idx+2:]
            if rest_after.startswith('\n  }') or rest_after.startswith('\n\n  }') or rest_after.startswith('\n\n\n  }'):
                closing_pos = search_start + idx
                break
        idx += 1
    else:
        # Try another pattern: `,\n    slug:
        idx = 0
        while idx < len(rest):
            if rest[idx] == '`' and idx + 1 < len(rest) and rest[idx+1] == ',':
                rest_after = rest[idx+2:]
                if rest_after.startswith('\n  }') or rest_after.startswith('\n{\n') or '\n  }' in rest_after[:20]:
                    closing_pos = search_start + idx
                    break
            idx += 1
        else:
            print(f"ERROR: Could not find closing backtick for '{slug}'!")
            continue
    
    # Check if contentZh already exists
    after_closing = closing_pos + 2  # after the `,
    check_section = content[after_closing:after_closing+500]
    if 'contentZh:' in check_section:
        # Check if it's part of the current post (before next slug)
        next_slug_check = check_section.find('    slug:')
        if next_slug_check == -1 or check_section.find('contentZh:') < next_slug_check:
            print(f"SKIP: '{slug}' already has contentZh")
            continue
    
    # Insert contentZh after the closing backtick
    insert_pos = closing_pos + 2  # after `,
    
    # Check what follows: we need to insert before the \n  },
    # The content ends with `,\n  },\n{ for next post
    
    # Find the `  },` after the closing backtick
    after_comma = content[closing_pos+2:]  # after `,
    
    # Normalize the contentZh to have proper escaping
    # In the contentZh template literal, backticks need to be escaped
    escaped_translation = translation.replace('\\', '\\\\').replace('`', '\\`')
    
    # Build insertion
    insertion = f'\n\n    contentZh: `{escaped_translation}`,\n  }}'
    
    # Find the `  },` and replace it
    # The pattern is: `,\n  },
    old_end = f'`,\n  }}'
    new_end = f'`,\n\n    contentZh: `{escaped_translation}`,\n  }}'
    
    # Find the exact position of the old end
    end_marker = content[closing_pos:closing_pos+len(old_end)]
    if end_marker == old_end:
        # Replace just this occurrence
        before = content[:closing_pos]
        after = content[closing_pos+len(old_end):]
        content = before + new_end + after
        print(f"ADDED: contentZh for '{slug}'")
    else:
        print(f"ERROR: Pattern mismatch at closing for '{slug}'!")
        print(f"Expected: {repr(old_end)}")
        print(f"Got: {repr(end_marker)}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone!")
