## 什么是图片转 Base64？

Base64 编码将二进制图像数据转换为由 64 个可打印字符（A-Z、a-z、0-9、+、/）组成的文本字符串。当你将图像转换为 Base64 时，会得到一个代表完整图像文件的长文本字符串。

这个字符串可以作为**数据 URI** 直接嵌入到 HTML、CSS 或 JavaScript 中：

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="行内图片">
```

浏览器解码 Base64 字符串并渲染图像——无需单独的 HTTP 请求。

## 何时使用行内 Base64 图片

### ✅ 好的用例

- **小图标和 UI 元素**——小于 5KB，开销的权衡是值得的
- **电子邮件签名**——电子邮件无法加载外部资源；Base64 图像可靠渲染
- **SVG 占位符**——在加载较大图像时嵌入微小的预览图
- **单文件 HTML 页面**——离线文档、演示或原型
- **API 响应**——在 JSON 中直接返回图像数据，无需单独获取
- **网站图标**——将图标数据直接嵌入 HTML 的 `<head>` 中
- **小资源的 CSS 精灵图**——消除微小图像的 HTTP 请求

### ❌ 避免用于

- **大照片**——Base64 增加约 33% 的开销；100KB 的 JPG 变成 133KB 的文本
- **在多个页面使用的图像**——外部文件缓存效果更好
- **CDN 托管的资源**——CDN 交付 + 缓存每次都胜出行内嵌入
- **超过 10KB 的图像**——随着图像大小增长，HTTP 请求开销的论据变弱

## 数学分析：请求开销 vs 编码开销

Base64 的经典论据是减少 HTTP 请求。以下是权衡：

| 图像大小 | HTTP 开销（约） | Base64 开销（33%） | 结论 |
|------------|------------------------|----------------------|---------|
| 1 KB | ~0.5 KB（头部 + TLS） | ~0.3 KB | Base64 胜出 |
| 5 KB | ~0.5 KB | ~1.7 KB | 相当 |
| 10 KB | ~0.5 KB | ~3.3 KB | HTTP 请求可能胜出 |
| 50 KB | ~0.5 KB | ~16.5 KB | 外部文件胜出 |
| 100 KB | ~0.5 KB | ~33 KB | 外部文件大幅胜出 |

**经验法则：** 小于 5KB → 使用 Base64。超过 10KB → 使用外部文件。

## 如何将图片转换为 Base64

### 使用 ToolboxPro

1. 访问我们的[图片转 Base64 转换器](/tools/image-to-base64)
2. 通过点击或拖拽上传图片
3. 工具立即生成 Base64 字符串
4. 选择你的输出格式：
   - **数据 URI**——准备好粘贴到 `src` 属性中：`data:image/png;base64,...`
   - **原始 Base64**——仅编码字符串，无前缀
5. 一键复制结果

### 支持的格式

| 格式 | MIME 类型 | 最适合 |
|--------|-----------|----------|
| PNG | image/png | 图标、Logo、截图 |
| JPG | image/jpeg | 照片、复杂图像 |
| GIF | image/gif | 简单动画 |
| WebP | image/webp | 现代 Web 优化图像 |
| SVG | image/svg+xml | 矢量图形 |
| BMP | image/bmp | 旧版兼容 |
| ICO | image/x-icon | 网站图标 |

## 在不同环境中使用 Base64 图片

### 在 HTML 中

```html
<img src="data:image/webp;base64,UklGRlA..." alt="主图占位符">
```

### 在 CSS 中

```css
.background-image {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0...");
}
```

### 在 JavaScript 中

```javascript
const img = new Image();
img.src = "data:image/png;base64,iVBORw0KGgo...";
document.body.appendChild(img);
```

### 在邮件 HTML 中

邮件客户端默认阻止外部图片。Base64 图片始终可以渲染：

```html
<img src="data:image/png;base64,iVBORw0KGgo..." alt="Logo" />
```

## 性能考虑

1. **Gzip 能很好地压缩 Base64**——虽然 Base64 文本比二进制大 33%，但 gzip 显著缩小了这一差距（压缩后通常仅 3-5% 的开销）

2. **CSS 背景图片不会单独缓存**——CSS 中的行内 Base64 意味着每次访问都必须重新下载整个样式表，除非 CSS 文件本身被缓存

3. **HTML 大小影响首字节时间（TTFB）**——大型行内图片增加了初始 HTML 载荷，延迟了浏览器开始解析的时间

4. **移动设备考虑**——内存有限的设备可能难以解码大型 Base64 字符串

## 常见问题

**Base64 是压缩吗？** 不是。Base64 是编码，不是压缩。编码后的字符串始终比原始二进制数据大约大 33%。

**可以将 Base64 转换回图片吗？** 可以。我们的工具可以将 Base64 字符串解码回可下载的图片文件。粘贴 Base64 字符串并点击**下载为图片**。

**有文件大小限制吗？** 我们的工具处理约 50MB 以内的图片。然而，对于实际使用，我们建议仅对 10KB 以下的图片使用 Base64。

**Base64 在所有浏览器中都能用吗？** 是的。数据 URI 在所有现代浏览器中都受支持，包括 Chrome、Firefox、Safari 和 Edge。支持可追溯到 Internet Explorer 8。

**Base64 和 Base64URL 有什么区别？** Base64URL 使用 `-` 和 `_` 代替 `+` 和 `/`，以确保在 URL 查询参数中安全。对于 `data:` URI，使用标准 Base64。
