# CSS 渐变指南：如何创建线性渐变和径向渐变

CSS 渐变是 Web 设计师工具箱中最强大、最灵活的工具之一。它们可以创建平滑的、可缩放的背景效果，无需加载任何图片文件，这意味着更快的页面加载速度和任何分辨率下都更清晰的视觉效果。无论你是在设计 Hero 区域、为卡片添加微妙的深度感，还是创建引人注目的按钮，CSS 渐变都能帮你仅用几行代码实现惊艳的视觉效果。

在本篇全面指南中，我们将涵盖你需要了解的关于 CSS 渐变的一切——从基础的线性渐变到高级的锥形渐变，包括色标、角度技巧和浏览器兼容性提示。

## 什么是 CSS 渐变？

CSS 渐变是两种或多种颜色之间的过渡，你可以将其作为背景应用到任何 HTML 元素上。与位图不同，CSS 渐变完全由代码定义，这意味着它们是分辨率无关的、可无限缩放的，并且不需要任何 HTTP 请求。

CSS 支持三种主要渐变类型：

1. **线性渐变**（`linear-gradient()`）—— 颜色沿直线过渡
2. **径向渐变**（`radial-gradient()`）—— 颜色从中心点向外辐射
3. **锥形渐变**（`conic-gradient()`）—— 颜色围绕中心点旋转，如同时钟

每种类型都有自己的语法和用途，掌握这三种渐变能给你带来巨大的创意灵活性。

## 线性渐变：基础

线性渐变是最常用的 CSS 渐变类型。它们沿任意方向的直线过渡颜色。

### 基本语法

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

最简单的线性渐变从一种颜色过渡到另一种：

```css
.box {
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

这会创建一个从左侧珊瑚红到右侧蓝绿色的渐变。

### 指定方向

你可以使用关键词或角度值来控制渐变方向：

**关键词方向：**
```css
background: linear-gradient(to right, #ff6b6b, #4ecdc4);    /* 从左到右 */
background: linear-gradient(to left, #ff6b6b, #4ecdc4);     /* 从右到左 */
background: linear-gradient(to bottom, #ff6b6b, #4ecdc4);   /* 从上到下 */
background: linear-gradient(to top, #ff6b6b, #4ecdc4);      /* 从下到上 */
background: linear-gradient(to bottom right, #ff6b6b, #4ecdc4); /* 对角线 */
```

**角度值（更精确的控制）：**
```css
background: linear-gradient(0deg, #ff6b6b, #4ecdc4);    /* 从下到上 */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);   /* 对角线（左下到右上） */
background: linear-gradient(90deg, #ff6b6b, #4ecdc4);   /* 从左到右 */
background: linear-gradient(135deg, #ff6b6b, #4ecdc4);  /* 从左上到右下 */
```

**专业提示：** 默认方向是 `to bottom`（180deg），这意味着如果不指定方向，渐变会从上到下流动。

### 多个色标

渐变不必局限于两种颜色。你可以添加任意数量的色标：

```css
.rainbow {
  background: linear-gradient(to right, 
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff
  );
}
```

### 控制色标位置

默认情况下，颜色沿渐变线均匀分布。你可以使用百分比值来控制它们的位置：

```css
.stripe {
  background: linear-gradient(to right, 
    #ff6b6b 0%, #ff6b6b 33%, 
    #4ecdc4 33%, #4ecdc4 66%, 
    #45b7d1 66%, #45b7d1 100%
  );
}
```

这会创建三条边缘硬朗的条纹，而非平滑过渡。

### 硬边缘色标

要创建颜色之间有锐利边缘的渐变（没有平滑过渡），将两个色标放在同一位置：

```css
.hard-edge {
  background: linear-gradient(to right, #ff6b6b 50%, #4ecdc4 50%);
}
```

## 径向渐变：圆形和椭圆

径向渐变从中心点向外发散，以圆形或椭圆模式扩展。它们非常适合创建聚光灯效果、发光元素或自然的径向背景。

### 基本语法

```css
background: radial-gradient(circle, color-stop1, color-stop2, ...);
```

```css
.glow {
  background: radial-gradient(circle, #fff, #4ecdc4);
}
```

### 形状选项

径向渐变可以是**圆形**或**椭圆**：

```css
.circle {
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

.ellipse {
  background: radial-gradient(ellipse, #ff6b6b, #4ecdc4);
}
```

**circle** 创建完美的圆形，而 **ellipse**（默认）创建适应元素尺寸的椭圆形。

### 定位中心

你可以控制渐变从哪里开始：

```css
/* 居中（默认） */
background: radial-gradient(circle at center, #ff6b6b, #4ecdc4);

/* 左上角 */
background: radial-gradient(circle at top left, #ff6b6b, #4ecdc4);

/* 特定位置 */
background: radial-gradient(circle at 30% 40%, #ff6b6b, #4ecdc4);
```

### 多重径向渐变

你可以通过逗号分隔来叠加多个径向渐变：

```css
.stars {
  background: 
    radial-gradient(circle at 20% 30%, white 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, white 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, white 1.5px, transparent 1.5px),
    #1a1a2e;
}
```

这在深蓝色背景上创建了星空效果，带有小白点。

## 锥形渐变：旋转的颜色

锥形渐变是 CSS 渐变家族的最新成员。它们围绕中心点旋转，就像时钟的指针，可以创建饼图、色环和其他圆形图案。

### 基本语法

```css
background: conic-gradient(color-stop1, color-stop2, ...);
```

```css
.color-wheel {
  background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
}
```

### 定位和大小

```css
.pie-chart {
  background: conic-gradient(
    #ff6b6b 0% 25%,
    #4ecdc4 25% 50%,
    #45b7d1 50% 75%,
    #f9ca24 75% 100%
  );
  border-radius: 50%;
}
```

### 重复锥形渐变

对于棋盘格或轮辐等图案，使用 `repeating-conic-gradient()`：

```css
.checkerboard {
  background: repeating-conic-gradient(
    #ccc 0% 25%, #fff 0% 50%
  ) 50% / 40px 40px;
}
```

## 色标和颜色插值

色标是所有 CSS 渐变的构建模块。理解它们的工作原理可以让你精确控制渐变效果。

### 使用不同的颜色格式

你可以在单个渐变中混合使用颜色格式：

```css
.mixed {
  background: linear-gradient(to right, 
    rgb(255, 107, 107), 
    hsl(168, 76%, 56%), 
    #45b7d1
  );
}
```

### 透明渐变

使用透明颜色可以创建平滑的淡入淡出效果：

```css
.fade-in {
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 1)
  );
}
```

### 颜色插值提示

你可以在两个色标之间添加提示来控制过渡中点出现在哪里：

```css
.controlled {
  background: linear-gradient(to right, 
    #ff6b6b, 
    #4ecdc4 30%  /* 过渡在30%处完成 */
  );
}
```

## 实用示例和技巧

### 渐变文字

使用 `background-clip` 让文字填充渐变：

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 渐变边框

使用 `border-image` 创建渐变边框：

```css
.gradient-border {
  border: 3px solid;
  border-image: linear-gradient(to right, #ff6b6b, #4ecdc4) 1;
}
```

### 动画渐变

用 CSS 动画让你的渐变动起来：

```css
.animated-gradient {
  background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 600% 600%;
  animation: gradient-shift 8s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 毛玻璃效果

将渐变与背景滤镜结合，实现现代毛玻璃效果：

```css
.glass {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1), 
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 完美渐变的角度技巧

角度选对了能让渐变设计大放异彩，选错了则功亏一篑：

- **90deg**（或 `to right`）：非常适合水平进度条和从左到右的过渡
- **135deg**（或 `to bottom right`）：Hero 区域和按钮最流行的角度
- **180deg**（或 `to bottom`）：适合垂直深度效果和页头背景
- **45deg**：创建微妙的对角运动，为设计增添活力
- **0deg**（或 `to top`）：适用于图片上的向上淡入遮罩

**设计经验法则：** 对角线渐变（45deg、135deg、225deg、315deg）通常比纯水平或垂直渐变感觉更动感和现代。

## 浏览器支持

CSS 渐变在2026年享有出色的浏览器支持：

| 渐变类型 | Chrome | Firefox | Safari | Edge |
|----------|--------|---------|--------|------|
| 线性 | 26+ | 16+ | 6.1+ | 12+ |
| 径向 | 26+ | 16+ | 6.1+ | 12+ |
| 锥形 | 69+ | 83+ | 12.1+ | 79+ |
| 重复 | 26+ | 16+ | 6.1+ | 12+ |

在极少数需要支持旧浏览器的情况下，考虑提供纯色回退：

```css
.box {
  background-color: #ff6b6b;  /* 回退 */
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

## 性能考量

CSS 渐变的性能非常出色：

- **无 HTTP 请求**：与背景图片不同，渐变在 CSS 中定义，由浏览器渲染，无需任何网络请求。
- **GPU 加速**：现代浏览器使用 GPU 渲染渐变，即使在移动设备上也能确保流畅的性能。
- **分辨率无关**：渐变在任何缩放级别或屏幕密度下都保持清晰。
- **CSS 占用小**：即使复杂的渐变对样式表大小的影响也微乎其微。

不过，过于复杂、色标过多的渐变在某些设备上可能引起渲染问题。尽量保持渐变简单，以获得最佳的跨设备一致性。

## 可视化创建渐变

虽然手写渐变代码可以给你完全的控制，但可视化渐变构建器可以大大加快你的工作流程。你可以实时试验颜色、角度和色标，然后复制生成的 CSS 代码。

试试我们的 [CSS 渐变工具](/tools/css-gradient)，交互式地构建和预览渐变。它支持所有渐变类型，允许你添加多个色标，并生成干净、可直接使用的 CSS 代码，可以直接粘贴到你的样式表中。

## 结语

CSS 渐变是现代 Web 设计的必备技能。它们提供了无限的创意可能性，同时保持出色的性能和浏览器支持。无论你是在创建微妙的背景效果、引人注目的文字处理，还是复杂的动画视觉效果，理解线性、径向和锥形渐变都能让你拥有将设计变为现实的工具。

今天就使用我们的 [CSS 渐变工具](/tools/css-gradient) 开始实验渐变，发现几行 CSS 如何改变你网站的外观和感觉。

---

## 相关工具

- [**CSS 渐变工具**](/tools/css-gradient) —— 使用实时编辑器可视化构建和预览 CSS 渐变
- [**取色器**](/tools/color-picker) —— 为你的渐变色标选取和转换颜色
- [**CSS 格式化工具**](/tools/css-formatter) —— 格式化和美化你的 CSS 代码以提高可读性
