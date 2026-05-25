## HTML vs JSX：有什么区别？

JSX（JavaScript XML）看起来像 HTML，但有一些重要区别。如果你正在将静态网站迁移到 React，你会立刻遇到这些问题：

### 1. 使用 className 而非 class

```html
<!-- HTML -->
<div class="container">Hello</div>
```

```jsx
{/* JSX */}
<div className="container">Hello</div>
```

`class` 是 JavaScript 中的保留字，因此 React 使用 `className`。

### 2. 自闭合标签需要斜杠

```html
<!-- HTML —— 无斜杠也有效 -->
<img src="photo.jpg" alt="Photo">
<input type="text">
<br>
```

```jsx
{/* JSX —— 必须自闭合 */}
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
```

### 3. 驼峰命名属性

```html
<!-- HTML -->
<button onclick="handleClick()">Click</button>
<input maxlength="10" tabindex="1">
<video autoplay controls>
```

```jsx
{/* JSX */}
<button onClick={handleClick}>Click</button>
<input maxLength={10} tabIndex={1} />
<video autoPlay controls />
```

### 4. 属性表达式使用花括号

```html
<!-- HTML —— 静态字符串 -->
<div style="color: red; font-size: 16px;">
<img src="logo.png" width="200">
```

```jsx
{/* JSX —— 花括号内的 JavaScript 表达式 */}
<div style={{ color: 'red', fontSize: 16 }}>
<img src={logoUrl} width={200} />
```

注意 `style` 上的双重花括号——外层花括号用于 JSX 表达式，内层花括号创建 JavaScript 对象。

## 如何将 HTML 转换为 JSX

### 使用 ToolboxPro

访问我们的 [HTML 转 JSX 转换器](/tools/html-to-jsx)：

1. **粘贴你的 HTML** 到输入区域
2. **点击转换**——立即查看 JSX 输出
3. **复制结果**用于你的 React 组件

### 逐步手动转换

让我们转换一个完整的卡片组件：

```html
<!-- 原始 HTML -->
<div class="card" id="card-1">
  <img src="https://example.com/img.jpg" class="card-image" alt="卡片图片">
  <div class="card-body">
    <h2>卡片标题</h2>
    <p>这是卡片内容的描述。</p>
    <a href="/details" class="btn" onclick="navigate()">了解更多</a>
  </div>
</div>
```

```jsx
// 转换后的 JSX 组件
function Card({ imageUrl, title, description }) {
  return (
    <div className="card" id="card-1">
      <img src={imageUrl} className="card-image" alt="卡片图片" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/details" className="btn" onClick={() => navigate()}>
          了解更多
        </a>
      </div>
    </div>
  );
}
```

## 常见迁移模式

### 行内样式

```jsx
// HTML: <div style="background-color: #f0f0f0; padding: 20px;">
// JSX:
<div style={{
  backgroundColor: '#f0f0f0',
  padding: 20,
}}>
```

属性使用驼峰命名。值可以是 CSS 文本字符串，或像素值的数字（除非你需要像 `'20px'` 这样的单位）。

### 条件类名

```jsx
// HTML: <div class="card active">
// 带条件的 JSX：
<div className={`card ${isActive ? 'active' : ''}`}>
// 或使用：classnames 库
<div className={cx('card', { active: isActive })}>
```

### 事件处理器

```jsx
// HTML: <button onclick="submitForm()">
// JSX：
<button onClick={submitForm}> {/* 传递函数引用 */}
<button onClick={() => submitForm()}> {/* 或行内箭头函数 */}

// HTML: <form onsubmit="return validate()">
// JSX：
<form onSubmit={(e) => {
  e.preventDefault();
  validate();
}}>
```

### For 和 Label

```html
<!-- HTML -->
<label for="email">邮箱：</label>
<input type="email" id="email" name="email">
```

```jsx
{/* JSX —— 使用 htmlFor 替代 for */}
<label htmlFor="email">邮箱：</label>
<input type="email" id="email" name="email" />
```

## 转换整个页面

将完整 HTML 页面迁移到 React 时：

1. **拆分为组件**——头部、底部、侧边栏、主内容
2. **使用我们的 [HTML 转 JSX 转换器](/tools/html-to-jsx) 转换每个 HTML 部分**
3. **添加 props**——用动态数据替换静态内容
4. **添加状态管理**——用适当的 React 状态替换行内 onclick 处理器

```jsx
function Page({ user, posts }) {
  return (
    <div className="page">
      <Header user={user} />
      <main className="main-content">
        <Sidebar categories={posts.categories} />
        <PostList posts={posts.items} />
      </main>
      <Footer />
    </div>
  );
}
```

## 常见问题

**可以直接在 .jsx 文件中使用 HTML 吗？** 不可以——JSX 文件必须遵循 JSX 语法规则。先用我们的转换器转换 HTML。

**行内事件处理器如 onclick="alert()" 怎么处理？** 在 JSX 中变成 `onClick={() => alert()}`。值必须是函数表达式，而不是字符串。

**JSX 支持所有 HTML 属性吗？** 大部分，但有些已重命名：`class` → `className`，`for` → `htmlFor`，`tabindex` → `tabIndex`，`autofocus` → `autoFocus`。

**可以在 JSX 中使用 SVG 吗？** 可以，但 SVG 属性也需要驼峰命名：`stroke-width` → `strokeWidth`，`clip-path` → `clipPath`。

**那 dangerouslySetInnerHTML 呢？** 谨慎使用，仅用于原始 HTML 字符串。它会绕过 React 的 XSS 保护。当我们的转换器遇到需要这种处理的行内 HTML 时，会给出警告。
