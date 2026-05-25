## 什么是 JWT？

**JSON Web Token（JWT）** 是一种紧凑的、URL 安全的令牌格式，用于认证和信息交换。它看起来像这样：

```
eyJhbG...VCJ9.
eyJzdW...IyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

三个部分，用点分隔。每个部分都是 Base64URL 编码的 JSON。

## JWT 的三个部分

### 1. 头部（Header）

包含算法和令牌类型：

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2. 载荷（Payload）

包含**声明**——关于用户和其他元数据的陈述：

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "iss": "https://auth.example.com",
  "aud": "https://api.example.com"
}
```

### 3. 签名（Signature）

一个加密哈希，用于验证令牌未被篡改。通过将头部和载荷与密钥组合创建：

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

## 常见 JWT 声明

| 声明 | 全称 | 用途 | 示例 |
|-------|-----------|---------|---------|
| `sub` | 主题 | 用户标识符 | `"user_123"` |
| `iss` | 签发者 | 谁签发了令牌 | `"https://auth.example.com"` |
| `aud` | 受众 | 预期接收方 | `"https://api.example.com"` |
| `exp` | 过期时间 | 何时过期（Unix 时间戳） | `1716451200` |
| `nbf` | 不早于 | 何时生效 | `1716364800` |
| `iat` | 签发时间 | 何时签发 | `1716278400` |
| `jti` | JWT ID | 唯一标识符（防止重放） | `"abc123"` |

## 如何解码 JWT

### 使用 ToolboxPro

访问我们的 [JWT 解码器](/tools/jwt-decoder)：

1. **粘贴你的 JWT** 到输入字段
2. **立即查看**解码后的头部和载荷为格式化的 JSON
3. **检查过期时间**——工具会显示令牌是否仍然有效
4. **验证签名**——输入你的密钥以确认真实性

### 手动解码

JWT 没有被加密——它们只是被编码。任何人都可以读取它们：

```javascript
function decodeJWT(token) {
  const parts = token.split('.');
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}

const token = "eyJhbG...wIn0.";
const decoded = decodeJWT(token);
console.log(decoded);
```

## 常见 JWT 漏洞

### 1. "none" 算法攻击

某些 JWT 库接受带有 `"alg": "none"` 的令牌，意味着不需要签名。攻击者可以修改载荷并将算法设置为 "none"。

**修复：** 始终拒绝没有算法或算法为 "none" 的令牌。

### 2. 算法混淆（RS256 vs HS256）

如果你的服务器期望 RS256（非对称）但接受 HS256（对称），攻击者可以使用公钥作为 HMAC 密钥来伪造令牌。

**修复：** 明确对照白名单验证算法。

### 3. 弱密钥

弱 HMAC 密钥可以被离线暴力破解。如果密钥泄露，任何人都可以伪造有效令牌。

**修复：** 使用长且随机的密钥（HS256 至少 256 位）。

### 4. 令牌未过期

具有极长过期时间（数年）或根本没有 `exp` 声明的令牌存在风险。泄露的令牌永久有效。

**修复：** 短过期时间（访问令牌 15-30 分钟，刷新令牌数天）。

## JWT 最佳实践

```javascript
// 安全存储 JWT
// ❌ localStorage —— 易受 XSS 攻击
// ❌ sessionStorage —— 关闭标签页后丢失
// ✅ HttpOnly Secure SameSite cookie —— 最适合 SPA
// ✅ 内存变量 + cookie 中的刷新令牌

// 每次请求验证
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET, {
      algorithms: ['HS256'],
      issuer: 'https://auth.example.com',
      audience: 'https://api.example.com',
      maxAge: '15m'
    });
    return decoded;
  } catch (err) {
    // 令牌无效或已过期
    return null;
  }
}
```

## 常见问题

**JWT 安全吗？** 正确实现时 JWT 是安全的。令牌本身任何人都可以读取（它是 base64 编码的，不是加密的）。安全性来自签名——没有密钥，没有人能伪造有效令牌。

**应该在 JWT 中存储敏感数据吗？** 不应该。JWT 是编码的，不是加密的。拥有令牌的任何人可以解码载荷。只存储非敏感标识符（用户 ID、角色、权限）。

**JWT 和 JWS 有什么区别？** JWT 是标准。JWS（JSON Web Signature）是签名变体。大多数人用 "JWT" 来表示 "签名的 JWT"（JWS）。

**如何刷新 JWT？** 使用双令牌系统：一个短期访问令牌（15 分钟）和一个长期刷新令牌（7 天）安全存储。当访问令牌过期时，使用刷新令牌获取新的。

**我们的工具会存储 JWT 吗？** 不会。你的令牌完全在浏览器中解码。它永远不会到达我们的服务器。
