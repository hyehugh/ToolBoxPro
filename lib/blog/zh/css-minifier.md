## 什么是 CSS 压缩？

CSS 压缩会删除所有执行时不需要的字符——空白、注释、分号和不必要的字符——而不改变 CSS 的工作方式。

### 之前（508 字节）

```css
/* 主样式表 */
body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: #ffffff;
    color: #333333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

/* 卡片组件 */
.card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 之后（260 字节——减少 49%）

```css
body{margin:0;padding:0;font-family:Inter,sans-serif;background-color:#fff;color:#333}.container{max-width:1200px;margin:0 auto;padding:2rem 1rem}.card{border:1px solid #e0e0e0;border-radius:8px;padding:1.5rem;box-shadow:0 2px 4px rgba(0,0,0,.1)}
```

## 为什么要压缩 CSS？

### 1. 更快的页面加载

CSS 是一种**渲染阻塞资源**——浏览器必须先下载并解析所有 CSS 才能显示任何内容。CSS 越小，首次内容绘制（FCP）越快。

### 2. 更低的带宽成本

一个 100KB 的 CSS 文件压缩后约为 35KB。对于一个月访问量 10 万的网站，每月可减少 6.5GB 的带宽。

### 3. 更好的核心网页指标

压缩直接改善：
- **FCP**（首次内容绘制）——需要下载的 CSS 更少
- **LCP**（最大内容绘制）——样式更快到达
- **TBT**（总阻塞时间）——CSSOM 构建更快

## 压缩删除的内容

| 元素 | 是否删除 | 示例 |
|---------|----------|---------|
| 空白 | 是 | 空格、制表符、换行 |
| 注释 | 是 | `/* 注释 */` |
| 最后一个分号 | 是 | `color: red;` → `color: red` |
| 可省略的单位 | 是 | `0px` → `0` |
| 安全情况下的引号 | 是 | `font-family: "Inter"` → `font-family:Inter` |
| 不必要的小数 | 是 | `0.5rem` → `.5rem` |
| 十六进制简写 | 是 | `#ffffff` → `#fff` |

## 压缩 vs 压缩算法

这两者不是同一回事：

| | 压缩（Minification） | 压缩算法（Gzip/Brotli） |
|---|---|---|
| 作用 | 删除不必要的字符 | 用算法编码数据 |
| 有损？ | 否——输出完全相同 | 否——完全可逆 |
| 典型缩减 | 50-70% | 70-85% |
| 作用于 | 源代码 | 任何文件类型 |
| 是否可以组合？ | 可以！ | 可以！ |

**最佳实践：** 压缩你的 CSS 并使用 Brotli 压缩提供。两者都能节省带宽。

## 如何压缩 CSS

### 使用 ToolboxPro

访问我们的 [CSS 压缩器](/tools/css-minifier)：

1. **粘贴你的 CSS** 到输入区域
2. **点击压缩**——立即查看结果
3. **比较大小**——前后并列显示
4. **复制或下载**压缩后的输出

### 使用构建工具

```javascript
// 使用 css-minimizer-webpack-plugin 的 Webpack
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
```

```javascript
// Vite —— 生产环境下默认压缩 CSS
// 无需配置。只需运行：vite build
```

```bash
# 使用 csso CLI
npx csso styles.css styles.min.css

# 使用 clean-css CLI
npx cleancss -o styles.min.css styles.css
```

## 高级技巧

### 1. 合并重复选择器

```css
/* 之前 */
h1 { color: blue; }
h1 { font-size: 2rem; }

/* 之后 */
h1 { color: blue; font-size: 2rem; }
```

### 2. 移除未使用的 CSS

PurgeCSS 等工具会分析你的 HTML 并移除你从未使用的选择器。与压缩结合使用可获得最大缩减。

### 3. 优化颜色

```css
/* 之前 */
color: #ffaa00;    /* 7 个字符 */
background: black; /* 5 个字符 */

/* 之后 */
color: #fa0;       /* 4 个字符 */
background: #000;  /* 4 个字符 */
```

## 常见问题

**压缩会改变 CSS 的工作方式吗？** 绝对不会。压缩后的 CSS 产生完全相同的视觉效果。用于生产环境 100% 安全。

**开发期间应该压缩吗？** 不需要——保持源代码有良好注释和格式。仅对生产构建进行压缩。

**那 source maps 呢？** 在生产环境中使用 source maps，以便调试压缩后的 CSS。大多数构建工具会自动生成它们。

**可以取消压缩 CSS 吗？** 部分可以——可以重新添加空白，但注释和原始结构将永久丢失。始终保留源文件。

**CSS 压缩和 HTML/JS 压缩一样吗？** 概念相似，但 CSS 有特定的优化（颜色缩短、属性合并），HTML/JS 压缩器不会做这些。
