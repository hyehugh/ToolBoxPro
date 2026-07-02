## Markdown 转 HTML：语法指南、转换方法和最佳实践

<img src="/blog/markdown-to-html.png" alt="Markdown 转 HTML 转换器工具 —— 实时将 Markdown 文本转换为格式化 HTML" width="800" height="450" className="rounded-lg border mb-6" />

Markdown 是现代 Web 写作的事实标准。

### 什么是 Markdown？

Markdown 是一种轻量级标记语言，由 John Gruber 于 2004 年创建。它被设计为在原始形式下易于阅读和编写，同时可以转换为有效的 HTML。与隐藏底层代码的所见即所得编辑器不同，Markdown 让你用纯文本来控制结构 —— 标题、列表、链接和强调 —— 而不需要记住复杂的 HTML 标签。

理念很简单：自然地书写，让转换器处理格式。标题加一个 `#` 前缀。列表项以破折号或星号开头。链接写作 [文本](URL)。结果是在转换前就已经看起来结构化的文本。

### Markdown 语法参考

以下是标准 Markdown 语法及其对应 HTML 输出的全面参考：

| Markdown 元素 | Markdown 语法 | HTML 输出 |
|-----------------|----------------|-------------|
| 一级标题 | `# 标题` | `<h1>标题</h1>` |
| 二级标题 | `## 标题` | `<h2>标题</h2>` |
| 三级标题 | `### 标题` | `<h3>标题</h3>` |
| 粗体 | `**文本**` | `<strong>文本</strong>` |
| 斜体 | `*文本*` | `<em>文本</em>` |
| 链接 | `[文本](URL)` | `<a href="URL">文本</a>` |
| 图片 | `![替代文本](源)` | `<img src="源" alt="替代文本" />` |
| 行内代码 | `` `代码` `` | `<code>代码</code>` |
| 代码块 | ` ```语言 ` | `<pre><code class="language-...">...</code></pre>` |
| 无序列表 | `- 项目` | `<ul><li>项目</li></ul>` |
| 有序列表 | `1. 项目` | `<ol><li>项目</li></ol>` |
| 引用 | `> 引用` | `<blockquote><p>引用</p></blockquote>` |
| 分隔线 | `---` | `<hr />` |
| 段落 | （空行分隔） | `<p>文本</p>` |

大多数 Markdown 处理器还支持表格、任务列表、删除线和自动 URL 链接等扩展语法。具体功能集取决于处理器（CommonMark、GitHub Flavored Markdown 等）。如果你需要检查某个转换结果，可以使用我们的 [免费 Markdown 转 HTML 转换器](/tools/markdown-to-html) 获取即时结果。

### Markdown 转换的工作原理

将 Markdown 转换为 HTML 遵循一个直观的处理流水线：

```
Markdown 输入
      ↓
    解析器（词法分析器 + 分词器）
      ↓
   抽象语法树（AST）
      ↓
    HTML 渲染器
      ↓
   HTML 输出
```

**第一阶段：词法分析。** Markdown 处理器读取原始文本并将其拆分为标记（token）—— 像"标题标记"、"文本段落"、"链接开始"、"代码围栏"等词法单元。每个标记携带关于其类型和位置的元数据。

**第二阶段：解析。** 标记被组装成抽象语法树（AST），这是一种表示文档结构的层级数据结构。包含粗体文本的标题会变成一个节点树：`HeadingNode → StrongNode → TextNode("粗体文本")`。这种中间表示是关键 —— 它使处理器能够支持扩展、自定义渲染器和 HTML 之外的输出格式。

**第三阶段：渲染。** 遍历 AST，每个节点被序列化为其 HTML 等价物。`HeadingNode(h1)` 生成 `<h1>` 标签。`LinkNode` 生成 `<a>` 标签。结果是有效的、正确嵌套的 HTML。

正是这种三阶段架构使 Markdown 具备可扩展性。[marked](https://marked.js.org/)、[markdown-it](https://github.com/markdown-it/markdown-it) 和 [remark](https://github.com/remarkjs/remark) 等工具都遵循这种模式，在插件支持和性能特性上有不同程度的差异。

### CommonMark vs. GitHub Flavored Markdown

并非所有 Markdown 都一样。有两种规范主导着这个生态系统：

**CommonMark** 是为 Markdown 创建的一个严格、无歧义的规范，旨在解决早期实现之间的不一致性。它标准化了基本语法 —— 标题、强调、列表、链接和代码块 —— 确保相同的 Markdown 在任何地方都能产生相同的 HTML。大多数现代 Markdown 解析器都兼容 CommonMark。

**GitHub Flavored Markdown（GFM）** 在 CommonMark 基础上扩展了 GitHub 平台特有的功能：

| 功能 | CommonMark | GFM |
|---------|-----------|-----|
| 表格 | 不支持 | 支持 |
| 任务列表 | 不支持 | 支持 |
| 删除线 | 不支持 | 支持 |
| 自动链接 URL | 不支持 | 支持 |
| 围栏代码块 | 支持 | 支持（带语法高亮） |
| Emoji 短代码 | 不支持 | 支持 |
| 脚注 | 不支持 | 不支持 |

GFM 还添加了一些解析规则：段落内的换行变成 `<br>` 标签，URL 会自动转换为可点击的链接。在两者之间做选择时，CommonMark 是到处都能运行的基础，而 GFM 添加了协作开发所需的功能。

### 编程方式转换 Markdown

如果你需要在自己的项目中转换 Markdown，以下是几种流行语言的实现方式：

**JavaScript / Node.js：**

```javascript
import { marked } from 'marked';

const markdown = '# Hello World\n\nThis is **bold** text.';
const html = marked.parse(markdown);
// <h1 id="hello-world">Hello World</h1>
// <p>This is <strong>bold</strong> text.</p>
```

**Python：**

```python
import markdown

md_text = '# Hello World\n\nThis is **bold** text.'
html = markdown.markdown(md_text)
print(html)
# <h1>Hello World</h1>
# <p>This is <strong>bold</strong> text.</p>
```

**Ruby：**

```ruby
require 'redcarpet'

markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
html = markdown.render('# Hello World')
puts html
# <h1>Hello World</h1>
```

这些库都支持表格、语法高亮和自定义渲染的扩展。如果你需要在编写代码之前快速测试转换，请使用我们的 [Markdown 转 HTML 转换器](/tools/markdown-to-html) —— 它完全在客户端处理，无需上传到服务器。

### Markdown 最佳实践

1. **块级元素周围始终使用空行。** 标题、列表和代码块应该用空行与周围文本分隔。这可以防止解析歧义，并使你的原始 Markdown 更具可读性。

2. **发布前预览。** 自动转换通常是可靠的，但确实存在边缘情况 —— 特别是嵌套列表、列表内的代码块，以及 Markdown 与原始 HTML 混用时。务必预览渲染输出，或使用 [/tools/markdown-to-html](/tools/markdown-to-html) 这样的实时转换器来验证。

3. **使用带语言标签的围栏代码块。** 在开头的三个反引号后指定语言，可以在大多数渲染器中启用语法高亮。写 ` ```python ` 而不是仅仅 ` ``` `。

4. **除非必要，避免使用原始 HTML。** Markdown 支持内联 HTML，但混用两者会降低可移植性。如果你需要复杂的表格或 div 结构，考虑是否有其他输出格式更合适，或者在确认你的 Markdown 处理器不会剥离 HTML 后直接编写 HTML。

5. **坚持使用 CommonMark 以获得最大兼容性。** 如果你的内容可能在不同平台上渲染（GitHub、GitLab、静态网站生成器、论坛），兼容 CommonMark 的 Markdown 能确保一致的结果。

6. **转义特殊字符。** 如果你需要显示字面上的星号、反引号或下划线，请在前面加反斜杠：`\*不是斜体\*`。

7. **使用引用式链接提高可读性。** 不要使用内联链接，而是在文档底部定义它们：

```markdown
我读了 [代码整洁之道][1] 和 [程序员修炼之道][2]。

[1]: https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
[2]: https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/
```

### 常见陷阱

即使是经验丰富的开发者也会犯这些 Markdown 错误。以下是需要注意的：

- **在嵌套列表中混用制表符和空格。** Markdown 对空格敏感。制表符在不同系统上可能渲染不同。始终使用空格（每级缩进 2 或 4 个）以获得一致的结果。
- **代码块前忘记空行。** 段落之后紧接的代码块如果没有空行，有时会被解析为代码段或被完全忽略。
- **单词中间未转义的下划线。** 写 `my_variable_name` 在某些处理器中可能渲染为 "my_variable_name"。代码术语请使用反引号：`` `my_variable_name` ``。
- **过度嵌套。** 大多数 Markdown 处理器将标题深度限制为 6 级（h1-h6）。更深的嵌套不会产生效果。如果你需要更精细的结构，请重新考虑你的文档层级。
- **假设 HTML 是安全的。** 如果你的网站渲染用户生成的 Markdown，请记住大多数处理器允许内联 HTML。在显示给其他用户之前，使用 DOMPurify 等库对输出进行净化。

## 常见问题

**问：Markdown 和 HTML 有什么区别？**
答：Markdown 是一种纯文本格式语法，专为可读性和易写性而设计。HTML 是一种描述网页结构的标记语言。Markdown 会被转换为 HTML 以在浏览器中显示。你用 Markdown 写作；浏览器渲染 HTML。

**问：我可以在 Markdown 中使用 HTML 吗？**
答：可以，大多数 Markdown 处理器允许内联 HTML。在 Markdown 中写的 `<div>` 或 `<table>` 会原样传递到 HTML 输出中。不过，混用两者可能会降低不同 Markdown 处理器之间的可移植性。

**问：我应该使用哪个 Markdown 处理器？**
答：对于 JavaScript 项目，[marked](https://marked.js.org/) 轻量且快速。对于需要 CommonMark 合规的 Node.js，[markdown-it](https://github.com/markdown-it/markdown-it) 提供了丰富的插件支持。对于 Python，标准的 [`markdown`](https://python-markdown.github.io/) 库表现良好。对于 Ruby，[Redcarpet](https://github.com/vmg/redcarpet) 是黄金标准。

**问：Markdown 支持表格吗？**
答：标准 CommonMark Markdown 不支持表格，但 GitHub Flavored Markdown（GFM）和大多数扩展处理器支持。表格使用竖线和破折号创建：第一行 `| 标题 | 标题 |`，第二行 `|-------|--------|`，行内容 `| 单元格 | 单元格 |`。

**问：如何为代码块添加语法高亮？**
答：在开头的三个反引号后指定语言：` ```javascript `。大多数现代 Markdown 渲染器（GitHub、VS Code、静态网站生成器）会根据这个语言标签自动应用语法高亮。试试我们的在线转换器 [/tools/markdown-to-html](/tools/markdown-to-html) 查看高亮输出。

**问：将 Markdown 转换为 HTML 的最佳方式是什么？**
答：对于单个转换，使用在线工具如 [/tools/markdown-to-html](/tools/markdown-to-html)。对于批量转换，使用 `pandoc` 这样的命令行工具（`pandoc input.md -o output.html`）。在应用中编程使用时，选择与你的编程语言匹配的库。

**问：Markdown 对用户生成内容安全吗？**
答：默认情况下不安全。Markdown 处理器允许内联 HTML，包括 `<script>` 标签和事件处理器。在渲染用户提交的 Markdown 之前，务必净化 HTML 输出。DOMPurify（JavaScript）或 Bleach（Python）等库可以剥离危险标签，同时保留安全的格式化。
