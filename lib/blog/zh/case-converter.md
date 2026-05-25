## 为什么文本大小写很重要

每种编程语言和框架都有命名变量、文件和函数的惯例。使用错误的大小写可能会破坏你的代码或混淆协作者。

### 最常见的大小写格式

| 大小写 | 示例 | 使用场景 |
|------|---------|-----------------|
| **camelCase**（驼峰式） | `myVariableName` | JavaScript、Java、TypeScript 变量 |
| **PascalCase**（大驼峰式） | `MyComponentName` | React 组件、C# 类、TypeScript 类型 |
| **snake_case**（蛇形式） | `my_variable_name` | Python、Ruby、Rust 变量 |
| **SCREAMING_SNAKE_CASE**（大写蛇形式） | `MAX_RETRY_COUNT` | 常量、环境变量 |
| **kebab-case**（串式） | `my-component-name` | HTML 文件、CSS 类、npm 包 |
| **Train-Case**（火车式） | `My-Component-Name` | HTTP 头部（如 `Content-Type`） |
| **dot.case**（点式） | `my.component.name` | Java 包名、文件扩展名 |

## 如何在不同大小写之间转换

### 使用 ToolboxPro

访问我们的[大小写转换器](/tools/case-converter)：

1. **在输入框中输入或粘贴文本**
2. **同时查看所有大小写格式**——输入时实时预览
3. **点击任何结果**复制到剪贴板
4. **支持多词短语**——只需用空格自然输入

### JavaScript 手动转换

```javascript
// camelCase
"hello world".replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  .replace(/\s+/g, '')
  .replace(/^(.)/, c => c.toLowerCase());
// 结果："helloWorld"

// PascalCase（与 camelCase 相同但首字母大写）
"hello world".replace(/(?:^|\\s+)(\w)/g, (_, c) => c.toUpperCase())
  .replace(/\s+/g, '');
// 结果："HelloWorld"

// snake_case
"hello world".toLowerCase().replace(/\s+/g, '_');
// 结果："hello_world"

// kebab-case
"hello world".toLowerCase().replace(/\s+/g, '-');
// 结果："hello-world"

// SCREAMING_SNAKE_CASE
"hello world".toUpperCase().replace(/\s+/g, '_');
// 结果："HELLO_WORLD"

// Title Case（首字母大写）
"hello world".replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
// 结果："Hello World"
```

## 各语言的大小写惯例

### JavaScript / TypeScript

```typescript
// camelCase —— 变量和函数
const userName = "Alice";
function fetchUserData() {}

// PascalCase —— 类和组件
class UserService {}
function UserCard() {}

// SCREAMING_SNAKE_CASE —— 常量
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// kebab-case —— 文件名
// user-profile.tsx, api-utils.ts
```

### Python

```python
# snake_case —— 除类之外的所有
user_name = "Alice"
def fetch_user_data():

# PascalCase —— 仅类
class UserService:

# SCREAMING_SNAKE_CASE —— 常量
MAX_FILE_SIZE = 10 * 1024 * 1024
```

### CSS / HTML

```css
/* kebab-case —— CSS 类和 ID */
.user-profile-card {
  background-color: #fff;
  font-family: "Inter", sans-serif;
}

/* camelCase —— 自定义属性（现代 CSS） */
:root {
  --primaryColor: #3498db;
  --borderRadius: 8px;
}
```

## 特殊情况

### 首字母缩略词

关于如何在 camelCase 中处理缩略词存在争议：

```
// 选项 A：全部大写
parseJSON, HTMLParser, fetchURL

// 选项 B：驼峰式
parseJson, HtmlParser, fetchUrl

// 两种都有人用。选择一种并保持一致。
// 最常见的惯例：
// JavaScript：缩略词驼峰式（parseJson）
// C#：缩略词大驼峰式（ParseJSON）
```

### 标识符中的数字

```
// 变量可以包含数字，但不能以数字开头
user2, item3_name   // ✅ 有效
2user, 3rd_item     // ❌ 在大多数语言中无效
```

### 保留字

```javascript
// 不能使用保留字作为变量名
// ❌ let class = "math";
// ✅ let className = "math";
// ❌ let default = "value";
// ✅ let defaultValue = "value";
```

## 常见转换错误

### 1. 信息丢失

```
// 转换为小写会丢失首字母大写信息
"McDonald" → 小写："mcdonald" → 首字母大写："Mcdonald" ❌

// 我们的工具通过特殊规则处理此类边界情况
```

### 2. 重复转换

```
// 已经是 camelCase，转 snake_case 再转回来
"myVariable" → snake_case："my_variable" → camelCase："myVariable" ✅

// 但要注意：
"myVariable" → 小写："myvariable" → camelCase："myvariable" ❌
```

### 3. 区域设置问题

```
// 土耳其语的 'i' 和 'I' 行为不同
// 在土耳其语区域设置中 'i'.toUpperCase() → 'İ'
// 我们的工具使用与区域设置无关的转换
```

## 常见问题

**camelCase 和 PascalCase 有什么区别？** PascalCase 的首字母也大写：`CamelCase` vs `camelCase`。类名和 React 组件使用 PascalCase，变量和函数使用 camelCase。

**数据库列名应该使用哪种大小写？** 大多数数据库使用 snake_case（`user_name`、`created_at`）。PostgreSQL 惯例是 snake_case。有些团队使用 camelCase——保持一致即可。

**可以转换整个文件吗？** 我们的工具支持批量文本。复制文件内容，粘贴，所有大小写格式立即显示。对于编程文件，建议使用特定语言格式化工具。

**CONSTANT_CASE 和 UPPER_CASE 有什么区别？** 它们是同一回事——大写蛇形式。都是指单词之间用下划线分隔的全大写形式。

**URL 中大小写重要吗？** 大多数 Web 服务器将 URL 视为区分大小写。URL 路径使用 kebab-case（全部小写，连字符）——这是 SEO 和可读性的推荐惯例。

**JSON 键使用哪种大小写？** JSON 没有官方惯例，但 JavaScript 生态中最常用 camelCase，Python 生态中最常用 snake_case。我们的 [JSON 格式化工具](/tools/json-formatter) 可以帮助标准化你的 JSON 键。
