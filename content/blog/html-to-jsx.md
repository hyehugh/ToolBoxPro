---
slug: html-to-jsx
title: "HTML to JSX Converter: Migrating from HTML to React Components"
titleZh: "HTML 转 JSX：从 HTML 迁移到 React 组件"
description: "Convert plain HTML to JSX instantly. Learn the key differences between HTML and JSX, common migration pitfalls, and how to convert entire pages to React components."
descriptionZh: "即时将纯 HTML 转换为 JSX。了解 HTML 和 JSX 的关键区别、常见迁移陷阱以及如何将整个页面转换为 React 组件。"
date: 2026-05-23
readTime: "6 min read"
category: "Developer Tools"
toolSlug: "html-to-jsx"
---

## HTML vs JSX: What's the Difference?

JSX (JavaScript XML) looks like HTML but has important differences. If you're migrating a static site to React, you'll encounter these immediately:

### 1. className Instead of class

\`\`\`html
<!-- HTML -->
<div class="container">Hello</div>
\`\`\`

\`\`\`jsx
{/* JSX */}
<div className="container">Hello</div>
\`\`\`

\`class\` is a reserved word in JavaScript, so React uses \`className\`.

### 2. Self-Closing Tags Require a Slash

\`\`\`html
<!-- HTML - valid without slash -->
<img src="photo.jpg" alt="Photo">
<input type="text">
<br>
\`\`\`

\`\`\`jsx
{/* JSX - must self-close */}
<img src="photo.jpg" alt="Photo" />
<input type="text" />
<br />
\`\`\`

### 3. CamelCase Attributes

\`\`\`html
<!-- HTML -->
<button onclick="handleClick()">Click</button>
<input maxlength="10" tabindex="1">
<video autoplay controls>
\`\`\`

\`\`\`jsx
{/* JSX */}
<button onClick={handleClick}>Click</button>
<input maxLength={10} tabIndex={1} />
<video autoPlay controls />
\`\`\`

### 4. Attribute Expressions Use Curly Braces

\`\`\`html
<!-- HTML - static strings -->
<div style="color: red; font-size: 16px;">
<img src="logo.png" width="200">
\`\`\`

\`\`\`jsx
{/* JSX - JavaScript expressions in braces */}
<div style={{ color: 'red', fontSize: 16 }}>
<img src={logoUrl} width={200} />
\`\`\`

Notice the double braces on \`style\` — the outer braces are for JSX expressions, the inner braces create a JavaScript object.

## How to Convert HTML to JSX

### Using ToolboxPro

Visit our [HTML to JSX Converter](/tools/html-to-jsx) and:

1. **Paste your HTML** in the input area
2. **Click Convert** — see JSX output instantly
3. **Copy the result** for use in your React component

### Step-by-Step Manual Conversion

Let's convert a full card component:

\`\`\`html
<!-- Original HTML -->
<div class="card" id="card-1">
  <img src="https://example.com/img.jpg" class="card-image" alt="Card image">
  <div class="card-body">
    <h2>Card Title</h2>
    <p>This is a description of the card content.</p>
    <a href="/details" class="btn" onclick="navigate()">Learn More</a>
  </div>
</div>
\`\`\`

\`\`\`jsx
// Converted JSX component
function Card({ imageUrl, title, description }) {
  return (
    <div className="card" id="card-1">
      <img src={imageUrl} className="card-image" alt="Card image" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="/details" className="btn" onClick={() => navigate()}>
          Learn More
        </a>
      </div>
    </div>
  );
}
\`\`\`

## Common Migration Patterns

### Inline Styles

\`\`\`jsx
// HTML: <div style="background-color: #f0f0f0; padding: 20px;">
// JSX:
<div style={{
  backgroundColor: '#f0f0f0',
  padding: 20,
}}>
\`\`\`

Properties are camelCase. Values are strings for CSS text, numbers for pixel values (unless you want a unit like \`'20px'\`).

### Conditional Classes

\`\`\`jsx
// HTML: <div class="card active">
// JSX with condition:
<div className={\`card \${isActive ? 'active' : ''}\`}>
// Or use: classnames library
<div className={cx('card', { active: isActive })}>
\`\`\`

### Event Handlers

\`\`\`jsx
// HTML: <button onclick="submitForm()">
// JSX:
<button onClick={submitForm}> {/* Pass function reference */}
<button onClick={() => submitForm()}> {/* Or inline arrow */}

// HTML: <form onsubmit="return validate()">
// JSX:
<form onSubmit={(e) => {
  e.preventDefault();
  validate();
}}>
\`\`\`

### For and Label

\`\`\`html
<!-- HTML -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">
\`\`\`

\`\`\`jsx
{/* JSX — htmlFor instead of for */}
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" />
\`\`\`

## Converting an Entire Page

When migrating a full HTML page to React:

1. **Split into components** — header, footer, sidebar, main content
2. **Convert each HTML section** using our [HTML to JSX Converter](/tools/html-to-jsx)
3. **Add props** — replace static content with dynamic data
4. **Add state management** — replace inline onclick handlers with proper React state

\`\`\`jsx
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
\`\`\`

## FAQ

**Can I use HTML directly in .jsx files?** No — JSX files must follow JSX syntax rules. Use our converter to transform HTML first.

**What about inline event handlers like onclick="alert()"?** These become \`onClick={() => alert()}\` in JSX. The value must be a function expression, not a string.

**Does JSX support all HTML attributes?** Most, but with renamed versions: \`class\` → \`className\