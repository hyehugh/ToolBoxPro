---
title: "CSS Gradient Guide: How to Create Linear and Radial Gradients"
description: "Master CSS gradients with this complete guide. Learn linear, radial, and conic gradients with live examples."
date: "2026-06-26"
category: "CSS & Design"
readTime: "9 min read"
toolSlug: "css-gradient"
---

# CSS Gradient Guide: How to Create Linear and Radial Gradients

CSS gradients are one of the most powerful and versatile tools in a web designer's toolkit. They allow you to create smooth, scalable background effects without loading any image files, which means faster page loads and crisper visuals at any resolution. Whether you're designing a hero section, adding subtle depth to a card, or creating eye-catching buttons, CSS gradients can help you achieve stunning visual effects with just a few lines of code.

In this comprehensive guide, we'll cover everything you need to know about CSS gradients — from basic linear gradients to advanced conic gradients, including color stops, angle techniques, and browser compatibility tips.

## What Are CSS Gradients?

A CSS gradient is a transition between two or more colors that you can apply as a background to any HTML element. Unlike raster images, CSS gradients are defined entirely in code, which means they're resolution-independent, infinitely scalable, and require zero HTTP requests.

CSS supports three main types of gradients:

1. **Linear Gradients** (`linear-gradient()`) — Colors transition along a straight line
2. **Radial Gradients** (`radial-gradient()`) — Colors radiate outward from a center point
3. **Conic Gradients** (`conic-gradient()`) — Colors rotate around a center point like a clock

Each type has its own syntax and use cases, and mastering all three gives you enormous creative flexibility.

## Linear Gradients: The Foundation

Linear gradients are the most commonly used CSS gradient type. They transition colors along a straight line in any direction.

### Basic Syntax

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

The simplest linear gradient transitions from one color to another:

```css
.box {
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

This creates a gradient that goes from coral red on the left to teal on the right.

### Specifying Direction

You can control the gradient direction using keywords or degree values:

**Keyword directions:**
```css
background: linear-gradient(to right, #ff6b6b, #4ecdc4);    /* Left to right */
background: linear-gradient(to left, #ff6b6b, #4ecdc4);     /* Right to left */
background: linear-gradient(to bottom, #ff6b6b, #4ecdc4);   /* Top to bottom */
background: linear-gradient(to top, #ff6b6b, #4ecdc4);      /* Bottom to top */
background: linear-gradient(to bottom right, #ff6b6b, #4ecdc4); /* Diagonal */
```

**Degree values (more precise control):**
```css
background: linear-gradient(0deg, #ff6b6b, #4ecdc4);    /* Bottom to top */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);   /* Diagonal (bottom-left to top-right) */
background: linear-gradient(90deg, #ff6b6b, #4ecdc4);   /* Left to right */
background: linear-gradient(135deg, #ff6b6b, #4ecdc4);  /* Top-left to bottom-right */
```

**Pro tip:** The default direction is `to bottom` (180deg), which means the gradient flows from top to bottom if you don't specify a direction.

### Multiple Color Stops

Gradients don't have to be limited to two colors. You can add as many color stops as you want:

```css
.rainbow {
  background: linear-gradient(to right, 
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff
  );
}
```

### Controlling Color Stop Positions

By default, colors are evenly distributed along the gradient line. You can control their positions using percentage values:

```css
.stripe {
  background: linear-gradient(to right, 
    #ff6b6b 0%, #ff6b6b 33%, 
    #4ecdc4 33%, #4ecdc4 66%, 
    #45b7d1 66%, #45b7d1 100%
  );
}
```

This creates three distinct stripes with hard edges rather than smooth transitions.

### Hard Color Stops

To create a gradient with a sharp edge between colors (no smooth transition), place two color stops at the same position:

```css
.hard-edge {
  background: linear-gradient(to right, #ff6b6b 50%, #4ecdc4 50%);
}
```

## Radial Gradients: Circles and Ellipses

Radial gradients emanate from a central point and expand outward in a circular or elliptical pattern. They're perfect for creating spotlight effects, glowing elements, or natural-looking radial backgrounds.

### Basic Syntax

```css
background: radial-gradient(circle, color-stop1, color-stop2, ...);
```

```css
.glow {
  background: radial-gradient(circle, #fff, #4ecdc4);
}
```

### Shape Options

Radial gradients can be either **circles** or **ellipses**:

```css
.circle {
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}

.ellipse {
  background: radial-gradient(ellipse, #ff6b6b, #4ecdc4);
}
```

**Circle** creates a perfect circle, while **ellipse** (the default) creates an oval that adapts to the element's dimensions.

### Positioning the Center

You can control where the gradient starts from:

```css
/* Centered (default) */
background: radial-gradient(circle at center, #ff6b6b, #4ecdc4);

/* Top-left corner */
background: radial-gradient(circle at top left, #ff6b6b, #4ecdc4);

/* Specific position */
background: radial-gradient(circle at 30% 40%, #ff6b6b, #4ecdc4);
```

### Multiple Radial Gradients

You can layer multiple radial gradients by separating them with commas:

```css
.stars {
  background: 
    radial-gradient(circle at 20% 30%, white 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, white 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, white 1.5px, transparent 1.5px),
    #1a1a2e;
}
```

This creates a starry night sky effect with small white dots on a dark blue background.

## Conic Gradients: Rotating Colors

Conic gradients are the newest addition to the CSS gradient family. They rotate around a center point like the hands of a clock, creating pie charts, color wheels, and other circular patterns.

### Basic Syntax

```css
background: conic-gradient(color-stop1, color-stop2, ...);
```

```css
.color-wheel {
  background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
}
```

### Positioning and Size

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

### Repeating Conic Gradients

For patterns like checkerboards or spokes, use `repeating-conic-gradient()`:

```css
.checkerboard {
  background: repeating-conic-gradient(
    #ccc 0% 25%, #fff 0% 50%
  ) 50% / 40px 40px;
}
```

## Color Stops and Color Interpolation

Color stops are the building blocks of all CSS gradients. Understanding how they work gives you precise control over your gradient effects.

### Using Different Color Formats

You can mix color formats within a single gradient:

```css
.mixed {
  background: linear-gradient(to right, 
    rgb(255, 107, 107), 
    hsl(168, 76%, 56%), 
    #45b7d1
  );
}
```

### Transparent Gradients

Using transparent colors creates smooth fade effects:

```css
.fade-in {
  background: linear-gradient(to bottom, 
    rgba(255, 255, 255, 0), 
    rgba(255, 255, 255, 1)
  );
}
```

### Color Interpolation Hints

You can add a hint between two color stops to control where the midpoint of the transition occurs:

```css
.controlled {
  background: linear-gradient(to right, 
    #ff6b6b, 
    #4ecdc4 30%  /* Transition completes 30% of the way */
  );
}
```

## Practical Examples and Techniques

### Gradient Text

Make text fill with a gradient using `background-clip`:

```css
.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Gradient Borders

Create gradient borders using `border-image`:

```css
.gradient-border {
  border: 3px solid;
  border-image: linear-gradient(to right, #ff6b6b, #4ecdc4) 1;
}
```

### Animated Gradients

Bring your gradients to life with CSS animations:

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

### Glass Morphism Effect

Combine gradients with backdrop filters for a modern glass effect:

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

## Angle Tips for Perfect Gradients

Getting the angle right can make or break your gradient design:

- **90deg** (or `to right`): Perfect for horizontal progress bars and left-to-right transitions
- **135deg** (or `to bottom right`): The most popular angle for hero sections and buttons
- **180deg** (or `to bottom`): Great for vertical depth effects and header backgrounds
- **45deg**: Creates a subtle diagonal movement that adds energy to designs
- **0deg** (or `to top`): Useful for upward-fading overlays on images

**Design rule of thumb:** Diagonal gradients (45deg, 135deg, 225deg, 315deg) often feel more dynamic and modern than purely horizontal or vertical ones.

## Browser Support

CSS gradients enjoy excellent browser support in 2026:

| Gradient Type | Chrome | Firefox | Safari | Edge |
|---------------|--------|---------|--------|------|
| Linear | 26+ | 16+ | 6.1+ | 12+ |
| Radial | 26+ | 16+ | 6.1+ | 12+ |
| Conic | 69+ | 83+ | 12.1+ | 79+ |
| Repeating | 26+ | 16+ | 6.1+ | 12+ |

For the rare cases where you need to support older browsers, consider providing a solid color fallback:

```css
.box {
  background-color: #ff6b6b;  /* Fallback */
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
```

## Performance Considerations

CSS gradients are remarkably performant:

- **No HTTP requests**: Unlike background images, gradients are defined in CSS and rendered by the browser without any network requests.
- **GPU-accelerated**: Modern browsers render gradients using the GPU, ensuring smooth performance even on mobile devices.
- **Resolution-independent**: Gradients look crisp at any zoom level or screen density.
- **Small CSS footprint**: Even complex gradients add very little to your stylesheet size.

However, overly complex gradients with many color stops can cause rendering issues on some devices. Keep your gradients as simple as possible for the best cross-device consistency.

## Creating Gradients Visually

While writing gradient code by hand gives you full control, visual gradient builders can significantly speed up your workflow. You can experiment with colors, angles, and stops in real-time, then copy the generated CSS code.

Try our [CSS Gradient Tool](/tools/css-gradient) to build and preview gradients interactively. It supports all gradient types, lets you add multiple color stops, and generates clean, ready-to-use CSS code that you can paste directly into your stylesheets.

## Conclusion

CSS gradients are an essential skill for modern web design. They offer unlimited creative possibilities while maintaining excellent performance and browser support. Whether you're creating subtle background effects, eye-catching text treatments, or complex animated visuals, understanding linear, radial, and conic gradients gives you the tools to bring your designs to life.

Start experimenting with gradients today using our [CSS Gradient Tool](/tools/css-gradient), and discover how a few lines of CSS can transform the look and feel of your website.

---

## Related Tools

- [**CSS Gradient Tool**](/tools/css-gradient) — Build and preview CSS gradients visually with a live editor
- [**Color Picker**](/tools/color-picker) — Pick and convert colors for your gradient stops
- [**CSS Formatter**](/tools/css-formatter) — Format and beautify your CSS code for better readability
