export interface ToolScenario {
  title: string;
  titleZh: string;
  icon: string;
  description: string;
  descriptionZh: string;
}

export const toolScenarios: Record<string, ToolScenario[]> = {
  "json-formatter": [
    { title: "Debug API Responses", titleZh: "调试 API 响应", icon: "🔍", description: "Paste raw JSON from APIs to instantly spot syntax errors and validate structure.", descriptionZh: "粘贴 API 原始 JSON，即时发现语法错误并验证结构。" },
    { title: "Beautify Config Files", titleZh: "美化配置文件", icon: "✨", description: "Format minified JSON configs to make them readable and editable.", descriptionZh: "格式化压缩的 JSON 配置文件，使其可读可编辑。" },
    { title: "Compare Data Structures", titleZh: "比较数据结构", icon: "📊", description: "Visualize nested JSON objects to understand complex data relationships.", descriptionZh: "可视化嵌套 JSON 对象，理解复杂的数据关系。" },
  ],
  "base64-encode-decode": [
    { title: "Embed Images in HTML", titleZh: "在 HTML 中嵌入图片", icon: "🖼", description: "Convert images to Base64 strings for inline embedding in emails or HTML.", descriptionZh: "将图片转为 Base64 字符串，内嵌到邮件或 HTML 中。" },
    { title: "Transfer Binary Data", titleZh: "传输二进制数据", icon: "📦", description: "Safely encode binary data as text for transmission over text-only channels.", descriptionZh: "将二进制数据安全编码为文本，用于纯文本通道传输。" },
    { title: "Decode JWT Payloads", titleZh: "解码 JWT 载荷", icon: "🔑", description: "Quickly decode Base64-encoded JWT token payloads for debugging.", descriptionZh: "快速解码 Base64 编码的 JWT Token 载荷，用于调试。" },
  ],
  "regex-tester": [
    { title: "Validate Email Formats", titleZh: "验证邮箱格式", icon: "📧", description: "Test regex patterns against email addresses to ensure correct matching.", descriptionZh: "测试正则表达式对邮箱地址的匹配，确保格式正确。" },
    { title: "Extract Data from Text", titleZh: "从文本中提取数据", icon: "🎯", description: "Build patterns to extract phone号码、URLs, or custom data from strings.", descriptionZh: "构建模式从字符串中提取电话号码、URL 或自定义数据。" },
    { title: "Refactor Search Patterns", titleZh: "优化搜索模式", icon: "🔄", description: "Iterate on regex patterns with real-time highlighting before deploying.", descriptionZh: "实时高亮显示迭代优化正则表达式模式。" },
  ],
  "password-generator": [
    { title: "Secure WiFi Passwords", titleZh: "安全 WiFi 密码", icon: "📶", description: "Generate strong, random passwords for your home or office WiFi network.", descriptionZh: "为家庭或办公 WiFi 网络生成高强度随机密码。" },
    { title: "Create API Keys", titleZh: "创建 API 密钥", icon: "🗝", description: "Generate cryptographically secure random strings for API authentication.", descriptionZh: "生成密码学安全的随机字符串，用于 API 认证。" },
    { title: "Test Password Strength", titleZh: "测试密码强度", icon: "💪", description: "Create passwords of varying complexity to test your security validation logic.", descriptionZh: "创建不同复杂度的密码，测试安全验证逻辑。" },
  ],
  "image-compressor": [
    { title: "Optimize Blog Images", titleZh: "优化博客图片", icon: "📝", description: "Compress screenshots and photos before uploading to reduce page load times.", descriptionZh: "压缩截图和照片后再上传，减少页面加载时间。" },
    { title: "Email Attachments", titleZh: "邮件附件", icon: "📎", description: "Shrink image file sizes to stay within email attachment limits.", descriptionZh: "缩小图片文件大小，满足邮件附件限制。" },
    { title: "Social Media Uploads", titleZh: "社交媒体上传", icon: "📱", description: "Reduce file sizes while maintaining quality for faster uploads.", descriptionZh: "在保持画质的同时缩小文件大小，加速上传。" },
  ],
  "barcode-generator": [
    { title: "WiFi Sharing", titleZh: "WiFi 分享", icon: "📶", description: "Create QR codes for WiFi credentials so guests can connect instantly.", descriptionZh: "生成包含 WiFi 凭据的二维码，让访客即刻连接。" },
    { title: "Business Cards", titleZh: "名片", icon: "💼", description: "Add QR codes linking to your portfolio or LinkedIn profile.", descriptionZh: "添加链接到作品集或 LinkedIn 主页的二维码。" },
    { title: "Event Check-in", titleZh: "活动签到", icon: "📋", description: "Generate QR codes for event registration or ticket validation.", descriptionZh: "生成用于活动报名或门票验证的二维码。" },
  ],
  "color-converter": [
    { title: "Design System Colors", titleZh: "设计系统配色", icon: "🎨", description: "Convert between HEX, RGB, and HSL to match design system specifications.", descriptionZh: "在 HEX、RGB 和 HSL 之间转换，匹配设计系统规范。" },
    { title: "CSS Color Values", titleZh: "CSS 颜色值", icon: "💻", description: "Quickly get the right color format for CSS, Tailwind, or inline styles.", descriptionZh: "快速获取适用于 CSS、Tailwind 或内联样式的颜色格式。" },
    { title: "Accessibility Checks", titleZh: "无障碍检查", icon: "♿", description: "Convert colors to check contrast ratios for WCAG compliance.", descriptionZh: "转换颜色以检查对比度是否符合 WCAG 标准。" },
  ],
  "url-encoder-decoder": [
    { title: "API Query Parameters", titleZh: "API 查询参数", icon: "🔗", description: "Encode special characters in URLs for correct API request formatting.", descriptionZh: "对 URL 中的特殊字符进行编码，确保 API 请求格式正确。" },
    { title: "Decode Tracking Links", titleZh: "解码追踪链接", icon: "🕵", description: "Decode shortened or encoded URLs to see the actual destination.", descriptionZh: "解码缩短或编码的 URL，查看真实目标地址。" },
    { title: "Form Data Preparation", titleZh: "表单数据准备", icon: "📋", description: "Encode form field values for proper HTTP POST request construction.", descriptionZh: "编码表单字段值，正确构建 HTTP POST 请求。" },
  ],
  "word-counter": [
    { title: "Essay Word Limits", titleZh: "论文字数限制", icon: "📚", description: "Check word and character counts to meet assignment or submission requirements.", descriptionZh: "检查字数和字符数，满足作业或投稿要求。" },
    { title: "SEO Content Length", titleZh: "SEO 内容长度", icon: "🔎", description: "Verify article length for optimal search engine ranking.", descriptionZh: "验证文章长度以获得最佳搜索引擎排名。" },
    { title: "Social Media Limits", titleZh: "社交媒体限制", icon: "💬", description: "Count characters to stay within platform limits (Twitter, LinkedIn, etc.).", descriptionZh: "统计字符数以满足平台限制（Twitter、LinkedIn 等）。" },
  ],
  "uuid-generator": [
    { title: "Database Primary Keys", titleZh: "数据库主键", icon: "🗄", description: "Generate unique identifiers for database records without sequential guessing.", descriptionZh: "为数据库记录生成唯一标识符，无需顺序猜测。" },
    { title: "Test Data Creation", titleZh: "创建测试数据", icon: "🧪", description: "Bulk generate UUIDs for load testing and data seeding.", descriptionZh: "批量生成 UUID，用于负载测试和数据填充。" },
    { title: "Session Tokens", titleZh: "会话令牌", icon: "🎫", description: "Create unique session identifiers for web application authentication.", descriptionZh: "为 Web 应用认证创建唯一会话标识符。" },
  ],

  // --- Additional scenarios ---
  "age-calculator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "area-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "aspect-ratio-calculator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "audio-converter": [
    { title: "Edit Podcasts", titleZh: "编辑播客", icon: "🎙️", description: "Trim silence, merge segments, and export audio for publishing.", descriptionZh: "裁剪静音、合并片段并导出音频以供发布。" },
    { title: "Create Ringtones", titleZh: "制作铃声", icon: "📱", description: "Cut audio to the perfect length and convert to the right format.", descriptionZh: "将音频裁剪到合适长度并转换为正确格式。" },
    { title: "Convert Formats", titleZh: "转换格式", icon: "🔄", description: "Switch between MP3, WAV, and other formats without quality loss.", descriptionZh: "在 MP3、WAV 等格式之间切换且不损失质量。" },
  ],
  "audio-cutter": [
    { title: "Edit Podcasts", titleZh: "编辑播客", icon: "🎙️", description: "Trim silence, merge segments, and export audio for publishing.", descriptionZh: "裁剪静音、合并片段并导出音频以供发布。" },
    { title: "Create Ringtones", titleZh: "制作铃声", icon: "📱", description: "Cut audio to the perfect length and convert to the right format.", descriptionZh: "将音频裁剪到合适长度并转换为正确格式。" },
    { title: "Convert Formats", titleZh: "转换格式", icon: "🔄", description: "Switch between MP3, WAV, and other formats without quality loss.", descriptionZh: "在 MP3、WAV 等格式之间切换且不损失质量。" },
  ],
  "audio-merger": [
    { title: "Edit Podcasts", titleZh: "编辑播客", icon: "🎙️", description: "Trim silence, merge segments, and export audio for publishing.", descriptionZh: "裁剪静音、合并片段并导出音频以供发布。" },
    { title: "Create Ringtones", titleZh: "制作铃声", icon: "📱", description: "Cut audio to the perfect length and convert to the right format.", descriptionZh: "将音频裁剪到合适长度并转换为正确格式。" },
    { title: "Convert Formats", titleZh: "转换格式", icon: "🔄", description: "Switch between MP3, WAV, and other formats without quality loss.", descriptionZh: "在 MP3、WAV 等格式之间切换且不损失质量。" },
  ],
  "binary-to-text": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "bmi-calculator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "caesar-cipher": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "case-converter": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "color-blindness-simulator": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "color-palette": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "color-picker": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "countdown-timer": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "cron-parser": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "css-gradient": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "css-minifier": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "css-shadow": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "csv-viewer": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "data-size-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "days-between": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "decision-maker": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "dice-roller": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "dns-lookup": [
    { title: "Troubleshoot DNS", titleZh: "排查 DNS", icon: "🌐", description: "Look up DNS records and diagnose domain resolution issues.", descriptionZh: "查询 DNS 记录并诊断域名解析问题。" },
    { title: "Plan Network Architecture", titleZh: "规划网络架构", icon: "🏗️", description: "Calculate subnets, CIDR blocks, and IP ranges for network design.", descriptionZh: "计算子网、CIDR 块和 IP 范围用于网络设计。" },
    { title: "Verify Domain Ownership", titleZh: "验证域名所有权", icon: "✅", description: "Check WHOIS records and RDAP data to confirm domain registration details.", descriptionZh: "检查 WHOIS 记录和 RDAP 数据以确认域名注册详情。" },
  ],
  "emoji-remover": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "gif-maker": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "hash-generator": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "html-entity-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "html-preview": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "html-tag-stripper": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "html-to-jsx": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "http-status-codes": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "image-border": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-collage": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-converter": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-cropper": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-filters": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-flip": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-invert": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-merge": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-resizer": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-splitter": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-to-base64": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-to-pdf": [
    { title: "Merge Documents", titleZh: "合并文档", icon: "📄", description: "Combine multiple PDFs into a single file for easy sharing.", descriptionZh: "将多个 PDF 合并为一个文件便于分享。" },
    { title: "Split and Extract", titleZh: "拆分提取", icon: "✂️", description: "Extract specific pages or split large PDFs into smaller sections.", descriptionZh: "提取特定页面或将大型 PDF 拆分为较小部分。" },
    { title: "Prepare for Printing", titleZh: "打印准备", icon: "🖨️", description: "Rotate pages, remove blank sheets, and organize documents for printing.", descriptionZh: "旋转页面、删除空白页并整理文档以供打印。" },
  ],
  "image-to-sketch": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "image-watermark": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "ip-calculator": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "json-diff": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "json-to-typescript": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "json-to-yaml": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "jwt-decoder": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "jwt-generator": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "length-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "lorem-ipsum-generator": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "markdown-to-html": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "meme-generator": [
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Compress, resize, and convert images to reduce page load times.", descriptionZh: "压缩、调整大小并转换图片以减少页面加载时间。" },
    { title: "Edit Photos Quickly", titleZh: "快速修图", icon: "🎨", description: "Crop, filter, and enhance images without installing photo editing software.", descriptionZh: "无需安装修图软件即可裁剪、滤镜和增强图片。" },
    { title: "Create Visual Content", titleZh: "创建视觉内容", icon: "🖼️", description: "Build collages, add watermarks, or generate graphics for social media.", descriptionZh: "制作拼贴图、添加水印或生成社交媒体图形。" },
  ],
  "morse-code-converter": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "number-base-converter": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "online-notepad": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "palindrome-checker": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "password-strength": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "pdf-merger": [
    { title: "Merge Documents", titleZh: "合并文档", icon: "📄", description: "Combine multiple PDFs into a single file for easy sharing.", descriptionZh: "将多个 PDF 合并为一个文件便于分享。" },
    { title: "Split and Extract", titleZh: "拆分提取", icon: "✂️", description: "Extract specific pages or split large PDFs into smaller sections.", descriptionZh: "提取特定页面或将大型 PDF 拆分为较小部分。" },
    { title: "Prepare for Printing", titleZh: "打印准备", icon: "🖨️", description: "Rotate pages, remove blank sheets, and organize documents for printing.", descriptionZh: "旋转页面、删除空白页并整理文档以供打印。" },
  ],
  "pdf-page-remover": [
    { title: "Merge Documents", titleZh: "合并文档", icon: "📄", description: "Combine multiple PDFs into a single file for easy sharing.", descriptionZh: "将多个 PDF 合并为一个文件便于分享。" },
    { title: "Split and Extract", titleZh: "拆分提取", icon: "✂️", description: "Extract specific pages or split large PDFs into smaller sections.", descriptionZh: "提取特定页面或将大型 PDF 拆分为较小部分。" },
    { title: "Prepare for Printing", titleZh: "打印准备", icon: "🖨️", description: "Rotate pages, remove blank sheets, and organize documents for printing.", descriptionZh: "旋转页面、删除空白页并整理文档以供打印。" },
  ],
  "pdf-rotator": [
    { title: "Merge Documents", titleZh: "合并文档", icon: "📄", description: "Combine multiple PDFs into a single file for easy sharing.", descriptionZh: "将多个 PDF 合并为一个文件便于分享。" },
    { title: "Split and Extract", titleZh: "拆分提取", icon: "✂️", description: "Extract specific pages or split large PDFs into smaller sections.", descriptionZh: "提取特定页面或将大型 PDF 拆分为较小部分。" },
    { title: "Prepare for Printing", titleZh: "打印准备", icon: "🖨️", description: "Rotate pages, remove blank sheets, and organize documents for printing.", descriptionZh: "旋转页面、删除空白页并整理文档以供打印。" },
  ],
  "pdf-splitter": [
    { title: "Merge Documents", titleZh: "合并文档", icon: "📄", description: "Combine multiple PDFs into a single file for easy sharing.", descriptionZh: "将多个 PDF 合并为一个文件便于分享。" },
    { title: "Split and Extract", titleZh: "拆分提取", icon: "✂️", description: "Extract specific pages or split large PDFs into smaller sections.", descriptionZh: "提取特定页面或将大型 PDF 拆分为较小部分。" },
    { title: "Prepare for Printing", titleZh: "打印准备", icon: "🖨️", description: "Rotate pages, remove blank sheets, and organize documents for printing.", descriptionZh: "旋转页面、删除空白页并整理文档以供打印。" },
  ],
  "percentage-calculator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "qr-reader": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "random-number-generator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "random-string-generator": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "roman-numeral": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "speed-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "sql-formatter": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "string-escaper": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "svg-to-png": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "temperature-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "text-deduplicator": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-diff-checker": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-repeater": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-reverser": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-sorter": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-statistics": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-to-binary": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "text-to-slug": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "timestamp-converter": [
    { title: "Debug During Development", titleZh: "开发调试", icon: "🔍", description: "Quickly format, validate, or transform data without leaving your browser.", descriptionZh: "无需离开浏览器即可快速格式化、验证或转换数据。" },
    { title: "Prepare Data for APIs", titleZh: "准备 API 数据", icon: "📡", description: "Convert between formats and validate structures before sending requests.", descriptionZh: "在发送请求前转换格式并验证结构。" },
    { title: "Learn and Experiment", titleZh: "学习实验", icon: "🎓", description: "Test patterns, explore outputs, and understand transformations interactively.", descriptionZh: "交互式测试模式、探索输出并理解转换过程。" },
  ],
  "timezone-converter": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "tip-calculator": [
    { title: "Daily Calculations", titleZh: "日常计算", icon: "📊", description: "Quickly compute percentages, tips, and ratios without opening a calculator app.", descriptionZh: "无需打开计算器应用即可快速计算百分比、小费和比率。" },
    { title: "Track Important Dates", titleZh: "追踪重要日期", icon: "📅", description: "Calculate time between events, count down to deadlines, and track milestones.", descriptionZh: "计算事件之间的时间、倒计时截止日期并追踪里程碑。" },
    { title: "Make Quick Decisions", titleZh: "快速决策", icon: "🎲", description: "Use random generators and decision tools to break ties and pick options.", descriptionZh: "使用随机生成器和决策工具来打破平局并选择选项。" },
  ],
  "unicode-detector": [
    { title: "Clean Up Content", titleZh: "清理内容", icon: "🧹", description: "Remove unwanted characters, sort lines, and format text for publishing.", descriptionZh: "移除多余字符、排序行并格式化文本以供发布。" },
    { title: "Process Data Files", titleZh: "处理数据文件", icon: "📋", description: "Deduplicate entries, reverse text, or extract specific patterns from large text.", descriptionZh: "去除重复项、反转文本或从大段文本中提取特定模式。" },
    { title: "Prepare Documentation", titleZh: "准备文档", icon: "📝", description: "Count words, check formatting, and transform text for technical writing.", descriptionZh: "统计字数、检查格式并转换文本用于技术写作。" },
  ],
  "weight-converter": [
    { title: "Convert for Recipes", titleZh: "烹饪换算", icon: "🍳", description: "Switch between metric and imperial units when following international recipes.", descriptionZh: "按国际食谱时在公制和英制单位之间切换。" },
    { title: "Engineering Calculations", titleZh: "工程计算", icon: "🔧", description: "Convert units for technical specifications and engineering documentation.", descriptionZh: "为技术规格和工程文档转换单位。" },
    { title: "Travel Planning", titleZh: "旅行规划", icon: "✈️", description: "Convert currencies, distances, and temperatures for international travel.", descriptionZh: "为国际旅行转换货币、距离和温度。" },
  ],
  "whois-lookup": [
    { title: "Troubleshoot DNS", titleZh: "排查 DNS", icon: "🌐", description: "Look up DNS records and diagnose domain resolution issues.", descriptionZh: "查询 DNS 记录并诊断域名解析问题。" },
    { title: "Plan Network Architecture", titleZh: "规划网络架构", icon: "🏗️", description: "Calculate subnets, CIDR blocks, and IP ranges for network design.", descriptionZh: "计算子网、CIDR 块和 IP 范围用于网络设计。" },
    { title: "Verify Domain Ownership", titleZh: "验证域名所有权", icon: "✅", description: "Check WHOIS records and RDAP data to confirm domain registration details.", descriptionZh: "检查 WHOIS 记录和 RDAP 数据以确认域名注册详情。" },
  ],
};

export function getToolScenarios(slug: string): ToolScenario[] {
  return toolScenarios[slug] || [
    { title: "Quick Processing", titleZh: "快速处理", icon: "⚡", description: "Process data instantly in your browser — no uploads needed.", descriptionZh: "在浏览器中即时处理数据，无需上传。" },
    { title: "Privacy-First", titleZh: "隐私优先", icon: "🔒", description: "All processing happens locally. Your data never leaves your device.", descriptionZh: "所有处理均在本地完成，数据不会离开您的设备。" },
    { title: "No Sign-up Required", titleZh: "无需注册", icon: "🚀", description: "Start using the tool immediately without creating an account.", descriptionZh: "无需创建账户，立即开始使用工具。" },
  ];
}
