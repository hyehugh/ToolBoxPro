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

**Does JSX support all HTML attributes?** Most, but with renamed versions: \`class\` → \`className\`, \`for\` → \`htmlFor\`, \`tabindex\` → \`tabIndex\`. Any \`data-*\` and \`aria-*\` attributes work as-is.

## Advanced JSX Migration Tips

### 1. Handling className Composition

The biggest trap when converting HTML to JSX isn't a single \`class\` → \`className\` rename — it's composing multiple conditional classes. HTML lets you concatenate class strings freely. In JSX, you're in JavaScript, so string concatenation gets messy fast:

\`\`\`jsx
// ❌ Error-prone: manual string concatenation
<div className={'card ' + (isActive ? 'active ' : '') + (isLarge ? 'large' : '')}>

// ✅ Better: template literals
<div className={\`card \${isActive ? 'active' : ''} \${isLarge ? 'large' : ''}\`}>

// ✅ Best: use the clsx/classnames library
import clsx from 'clsx';
<div className={clsx('card', { active: isActive, large: isLarge })}>
\`\`\`

The \`clsx\` library handles edge cases you'll forget about — falsy values, arrays, nested objects — and keeps your render logic readable.

### 2. Converting Conditional Rendering

HTML has no concept of "if" — you show or hide elements with CSS or by toggling \`hidden\`. JSX brings JavaScript into the template, which means conditional rendering patterns change entirely:

\`\`\`jsx
// HTML approach (don't do this in JSX):
<div style={{ display: showError ? 'block' : 'none' }}>Error message</div>

// ✅ JSX approach: short-circuit rendering
{showError && <div className="error">Error message</div>}

// ✅ Ternary for mutually exclusive options
{isLoading ? <Spinner /> : <Content data={data} />}

// ✅ IIFE for multi-statement conditions
{(() => {
  if (!user) return <LoginPrompt />;
  if (!user.verified) return <VerifyEmail />;
  return <Dashboard user={user} />;
})()}
\`\`\`

### 3. Event Handler Differences

JSX event handlers are not the same as HTML \`onclick\` attributes. Understanding the differences prevents common bugs:

| Aspect | HTML | JSX |
|--------|------|-----|
| Attribute name | \`onclick\` | \`onClick\` |
| Value | String (executed via eval) | Function reference |
| \`this\` binding | Global window | Component instance (with arrow functions) |
| Event object | \`window.event\` | Synthetic event passed as first argument |
| Default prevention | \`return false\` | \`e.preventDefault()\` |

\`\`\`jsx
// HTML: onclick="return false" prevents default AND stops propagation
// JSX: must be explicit
<a href="/external" onClick={(e) => {
  e.preventDefault();      // stop navigation
  e.stopPropagation();     // stop bubbling (optional)
  handleAnalytics();
}}>
\`\`\`

### 4. Lists and Keys

Converting a list of HTML elements to JSX requires adding \`key\` props — something HTML doesn't have:

\`\`\`jsx
// HTML
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

// JSX — keys are required when rendering from arrays
<ul>
  {fruits.map(fruit => (
    <li key={fruit.id}>{fruit.name}</li>
  ))}
</ul>
\`\`\`

Never use the array index as a key if the list can reorder. Use a stable unique ID from your data.

## Common Mistakes to Avoid

- **Forgetting to self-close void tags.** \`<img>\` and \`<input>\` without \`/>\` cause JSX compilation errors. Our converter handles this automatically, but when writing JSX by hand, it's the #1 error.
- **Using \`style\` as a string.** \`<div style="color: red">\` works in HTML but silently fails in JSX. It must be an object: \`<div style={{ color: 'red' }}>\`.
- **Passing \`false\` to disabled.** In HTML, \`disabled="false"\` still disables the element (any attribute presence means true). In JSX, \`disabled={false}\` correctly enables it. Always use boolean values.
- **Forgetting \`key\` on conditional siblings.** Even a single \`{condition && <Element />}\` inside a fragment can trigger React key warnings if siblings are added dynamically.

## Real-World Migration Example

Converting a Bootstrap navigation bar. The original HTML:

\`\`\`html
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">MyApp</a>
  <button class="navbar-toggler" onclick="toggleMenu()" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
\`\`\`

Becomes:

\`\`\`jsx
function Navbar({ onToggleMenu }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">MyApp</a>
      <button
        className="navbar-toggler"
        onClick={onToggleMenu}
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}
\`\`\`

Notice: \`onclick\` became \`onClick={onToggleMenu}\` (function reference, not string), \`class\` became \`className\`, and \`<span>\` self-closed.