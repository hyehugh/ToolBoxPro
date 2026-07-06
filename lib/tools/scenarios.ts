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
    { title: "Retirement Planning", titleZh: "退休规划", icon: "🎂", description: "Calculate exact age to determine eligibility for pension benefits and retirement savings withdrawal dates.", descriptionZh: "精确计算年龄，确定养老金领取资格和退休储蓄提取日期。" },
    { title: "School Enrollment", titleZh: "入学年龄审核", icon: "📚", description: "Check if a child meets the minimum age requirement for kindergarten or first grade enrollment.", descriptionZh: "检查儿童是否达到幼儿园或小学一年级入学的最低年龄要求。" },
    { title: "Milestone Celebrations", titleZh: "里程碑庆祝", icon: "🎉", description: "Find out your exact age in years, months, and days on any future date for invitations or events.", descriptionZh: "算出未来某个日期时的精确年龄（年、月、日），用于活动邀请或纪念。" }
  ],
  "area-converter": [
    { title: "Real Estate Comparison", titleZh: "房产面积对比", icon: "🏘", description: "Convert sqft to sqm when comparing US and European property listings.", descriptionZh: "对比美国与欧洲市场房源时，将平方英尺转为平方米。" },
    { title: "Garden Landscaping", titleZh: "花园面积计算", icon: "🌳", description: "Calculate how many square meters of turf or paving stones are needed for a backyard renovation.", descriptionZh: "计算后院改造项目需要多少平方米的草坪或铺路石。" },
    { title: "Farmland Measurement", titleZh: "农地面积测量", icon: "🌾", description: "Convert hectares to acres for agricultural land valuation and crop yield estimation reports.", descriptionZh: "将公顷转为英亩，用于农地估值和作物产量估算报告。" },
    { title: "Blueprint Area Verification", titleZh: "建筑图纸面积核对", icon: "📐", description: "Verify plan areas in sqft and sqm match architect specifications during commercial construction.", descriptionZh: "在商业建筑过程中核對图纸面积单位换算是否符合设计规范。" }
  ],
  "aspect-ratio-calculator": [
    { title: "Video Export Dimensions", titleZh: "视频导出尺寸", icon: "🎬", description: "Calculate 1920x1080 output from a 16:9 ratio for YouTube or Vimeo editing projects.", descriptionZh: "从 16:9 宽高比计算 1920x1080 输出尺寸，用于 YouTube 或 Vimeo 剪辑项目。" },
    { title: "Responsive Image Fit", titleZh: "响应式图片适配", icon: "📱", description: "Find the correct width for a 4:3 image constrained to a max height of 800px in a mobile layout.", descriptionZh: "找到 4:3 图片在移动端布局中受限 800px 高度时的正确宽度。" },
    { title: "Photo Print Sizing", titleZh: "照片打印尺寸", icon: "🖼", description: "Convert a 3:2 camera aspect ratio to standard 10x15cm print sizes for photo lab ordering.", descriptionZh: "将相机 3:2 宽高比转换为标准 10x15cm 打印尺寸用于照片冲印。" }
  ],
  "audio-converter": [
    { title: "Podcast Distribution", titleZh: "播客分发格式转换", icon: "🎙", description: "Convert studio-recorded WAV files to 128kbps MP3 for podcast hosting platforms like Spotify and Apple Podcasts.", descriptionZh: "将录音室录制的 WAV 文件转为 128kbps MP3，用于 Spotify 和 Apple Podcasts 等播客平台。" },
    { title: "Mobile Ringtone Prep", titleZh: "手机铃声制作", icon: "📱", description: "Convert a song clip from FLAC to M4A format for use as an iPhone ringtone without quality loss.", descriptionZh: "将歌曲片段从 FLAC 转为 M4A 格式，用作 iPhone 铃声且不损音质。" },
    { title: "Video Editing Compat", titleZh: "视频编辑格式适配", icon: "🎬", description: "Convert OGG voice-over to 48kHz AAC WAV for compatibility with Premiere Pro and DaVinci Resolve timelines.", descriptionZh: "将 OGG 旁白转为 48kHz AAC WAV，确保与 Premiere Pro 和 DaVinci Resolve 时间线兼容。" }
  ],
  "audio-cutter": [
    { title: "Trim Podcast Intro", titleZh: "播客片头剪辑", icon: "🎧", description: "Cut the first 30 seconds of dead air and chit-chat from a recorded interview before the guest starts speaking.", descriptionZh: "从录制的访谈中剪掉前 30 秒空白和闲聊，直到嘉宾开始说话。" },
    { title: "Extract Ringtone Clip", titleZh: "提取铃声片段", icon: "🔔", description: "Isolate the 15-second chorus hook from a song to use as a custom phone ringtone.", descriptionZh: "从歌曲中截取 15 秒副歌部分，用作自定义手机铃声。" },
    { title: "Remove Dead Silence", titleZh: "去除静音段落", icon: "✂️", description: "Trim long pauses and silence gaps from a lecture recording to make the playback more engaging.", descriptionZh: "裁剪讲座录音中的长时间停顿和静音间隙，使播放更紧凑。" }
  ],
  "audio-merger": [
    { title: "Podcast Episode Assembly", titleZh: "播客单集合成", icon: "🎤", description: "Combine intro music, interview recording, and outro segment into one seamless MP3 for publishing.", descriptionZh: "将开场音乐、访谈录音和结尾片段合并为一个连续 MP3 用于发布。" },
    { title: "Audiobook Chapter Join", titleZh: "有声书章节合并", icon: "📗", description: "Concatenate multiple chapter audio files into a single track with smooth transitions for listening.", descriptionZh: "将多个章节音频文件合并为一个音轨，过渡平滑便于连续收听。" },
    { title: "Soundtrack Compilation", titleZh: "配乐合辑制作", icon: "🎵", description: "Merge several short music clips into a continuous background track for a video presentation or slideshow.", descriptionZh: "将多个短音乐片段合并为连续背景音轨，用于视频演示或幻灯片。" }
  ],
  "binary-to-text": [
    { title: "Decode Binary Messages", titleZh: "解码二进制消息", icon: "0️⃣1️⃣", description: "Decode a binary ASCII string from a CTF challenge or puzzle to reveal the hidden text message.", descriptionZh: "解码 CTF 挑战或谜题中的二进制 ASCII 字符串，揭示隐藏的文字信息。" },
    { title: "Learn Binary Encoding", titleZh: "学习二进制编码", icon: "🎓", description: "Type your name to see how each letter maps to its 8-bit binary representation for educational purposes.", descriptionZh: "输入姓名查看每个字母对应的 8 位二进制表示，用于学习目的。" },
    { title: "Debug Serial Protocol", titleZh: "调试串行协议", icon: "🔧", description: "Convert raw binary output from a microcontroller serial monitor into readable ASCII text for debugging.", descriptionZh: "将微控制器串口监视器的原始二进制输出转为可读的 ASCII 文本进行调试。" }
  ],
  "bmi-calculator": [
    { title: "Annual Health Check", titleZh: "年度体检评估", icon: "⚕", description: "Calculate your BMI during an annual physical to check if you fall within a healthy weight range.", descriptionZh: "在年度体检时计算 BMI，检查是否处于健康体重范围内。" },
    { title: "Fitness Progress Tracking", titleZh: "健身进度追踪", icon: "💪", description: "Track BMI changes over several months to objectively measure the impact of a new diet and exercise regimen.", descriptionZh: "追踪数月间的 BMI 变化，客观衡量新饮食和锻炼方案的效果。" },
    { title: "Weight Loss Goal Setting", titleZh: "减重目标设定", icon: "🎯", description: "Determine the target weight needed to move from overweight to normal BMI category for a health plan.", descriptionZh: "确定从超重降到正常 BMI 类别所需的目标体重，用于健康计划。" }
  ],
  "caesar-cipher": [
    { title: "Teach Cryptography Basics", titleZh: "密码学教学演示", icon: "🔐", description: "Demonstrate the Caesar cipher in a classroom to explain substitution ciphers and frequency analysis.", descriptionZh: "在课堂上演示凯撒密码，解释替换密码和频率分析的基本原理。" },
    { title: "Solve Simple Puzzles", titleZh: "解简单谜题", icon: "🧩", description: "Decode a Caesar-shifted message from a puzzle book or escape room clue to find the solution.", descriptionZh: "解码谜题书或密室逃脱线索中的凯撒偏移信息，找到解决方案。" },
    { title: "Create Secret Notes", titleZh: "创建加密笔记", icon: "✉", description: "Encode a shopping list or birthday surprise plan with a Caesar shift to keep it private from prying eyes.", descriptionZh: "用凯撒偏移编码购物清单或生日惊喜计划，防止被他人看到。" }
  ],
  "case-converter": [
    { title: "Fix Variable Naming", titleZh: "修正变量命名", icon: "💻", description: "Convert snake_case API response fields to camelCase for use in a JavaScript or TypeScript frontend project.", descriptionZh: "将 snake_case 的 API 响应字段转为 camelCase，用于 JavaScript/TypeScript 前端项目。" },
    { title: "Format Blog Titles", titleZh: "格式化博客标题", icon: "📝", description: "Convert all-caps article headlines to Title Case for consistent formatting across a blog publication.", descriptionZh: "将全大写的文章标题转为首字母大写格式，统一博客发布风格。" },
    { title: "Normalize User Input", titleZh: "用户输入标准化", icon: "📋", description: "Standardize messy user-submitted names to Proper Case before storing them in a database or CRM.", descriptionZh: "将杂乱的用户提交姓名统一为首字母大写格式，再存入数据库或 CRM。" }
  ],
  "color-blindness-simulator": [
    { title: "Dashboard Accessibility", titleZh: "仪表盘无障碍审核", icon: "📊", description: "Simulate deuteranopia on a financial dashboard with red/green indicators to verify all data is readable.", descriptionZh: "模拟红绿色盲查看金融仪表盘的红绿指标，验证所有数据均可读。" },
    { title: "Game UI Testing", titleZh: "游戏界面测试", icon: "🎮", description: "Check if color-coded puzzle elements are distinguishable under protanopia and tritanopia conditions.", descriptionZh: "检查颜色编码的谜题元素在红色盲和蓝色盲条件下是否可区分。" },
    { title: "Map Legend Design", titleZh: "地图图例设计验证", icon: "🗺", description: "Preview a hiking trail map's color coding under different color vision deficiencies to ensure accessibility.", descriptionZh: "预览徒步路线图的颜色编码在不同色盲类型下的可辨识度，确保无障碍设计。" }
  ],
  "watermark-remover": [
    { title: "Clean Up Stock Photos", titleZh: "清理素材图片", icon: "🧹", description: "Remove corner watermarks or logos from stock images before using them in designs and presentations.", descriptionZh: "在设计和演示中使用素材图片前，去除角落的水印或标志。" },
    { title: "Erase Unwanted Objects", titleZh: "擦除多余物体", icon: "✨", description: "Select and remove timestamps, date stamps, photobombers, or stray objects from your photos.", descriptionZh: "框选并去除照片上的时间戳、日期戳、乱入路人不想要的物体。" },
    { title: "Restore Old Scans", titleZh: "修复旧扫描件", icon: "📄", description: "Clean up scanned documents by erasing stains, fold marks, stamps, or annotation overlays.", descriptionZh: "去除扫描文件上的污渍、折痕、印章或批注覆盖，让文档更干净。" },
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
  "csv-visualizer": [
    { title: "Visualize Business Metrics", titleZh: "可视化业务指标", icon: "📈", description: "Turn monthly sales or revenue CSV exports into bar and line charts for quick trend analysis.", descriptionZh: "将月度销售或收入的 CSV 导出转为柱状图和折线图，快速分析趋势。" },
    { title: "Explore Scientific Data", titleZh: "探索科研数据", icon: "🔬", description: "Plot scatter graphs from experiment results to spot correlations between two numeric variables.", descriptionZh: "从实验结果绘制散点图，发现两个数值变量间的相关性。" },
    { title: "Build Reports and Slides", titleZh: "制作报告与幻灯片", icon: "📊", description: "Generate clean pie charts from category data and download as PNG for presentations.", descriptionZh: "从分类数据生成清晰的饼图，下载为 PNG 用于演示文稿。" },
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
  "markdown-to-pdf": [
    { title: "Export Documentation", titleZh: "导出文档", icon: "📘", description: "Convert project README files and technical docs into printable PDF documents.", descriptionZh: "将项目 README 和技术文档转换为可打印的 PDF 文档。" },
    { title: "Create Reports", titleZh: "创建报告", icon: "📊", description: "Turn Markdown notes and meeting summaries into professional PDF reports.", descriptionZh: "将 Markdown 笔记和会议纪要转换为专业 PDF 报告。" },
    { title: "Share Content", titleZh: "分享内容", icon: "📤", description: "Generate PDF versions of articles and blog posts for offline reading and distribution.", descriptionZh: "将文章和博文生成 PDF 版本，便于离线阅读和分发。" },
  ],
  "video-to-gif": [
    { title: "Create Social Media GIFs", titleZh: "制作社交媒体 GIF", icon: "📱", description: "Convert video highlights into looping GIFs for Twitter, Reddit, and messaging apps.", descriptionZh: "将视频精华转换为循环 GIF，用于 Twitter、Reddit 和聊天应用。" },
    { title: "Document Bugs and Demos", titleZh: "记录 Bug 和演示", icon: "🐛", description: "Capture screen recordings as GIF embeds for GitHub issues and README files.", descriptionZh: "将录屏捕获为 GIF，嵌入 GitHub issue 和 README 文件。" },
    { title: "Optimize for Web", titleZh: "网页优化", icon: "⚡", description: "Downscale and trim video clips into lightweight GIFs for email and chat embeds.", descriptionZh: "缩小并裁剪视频片段为轻量 GIF，用于邮件和聊天嵌入。" },
  ],
  "ocr-text-recognition": [
    { title: "Extract Text from Screenshots", titleZh: "从截图中提取文字", icon: "📸", description: "Pull editable text from screenshots of code, error messages, or UI labels without retyping.", descriptionZh: "从代码、错误信息或界面标签截图中提取可编辑文字，无需手动重打。" },
    { title: "Digitize Scanned Documents", titleZh: "数字化扫描文档", icon: "📄", description: "Convert scanned receipts, contracts, and printed pages into searchable, editable text.", descriptionZh: "将扫描的收据、合同和打印页面转换为可搜索、可编辑的文字。" },
    { title: "Read Foreign Language Signs", titleZh: "读取外语标识", icon: "🌍", description: "Snap a photo of a menu, sign, or label in another language and extract the text instantly.", descriptionZh: "拍摄外语菜单、标识或标签照片，即时提取其中的文字。" },
  ],
};

export function getToolScenarios(slug: string): ToolScenario[] {
  return toolScenarios[slug] || [
    { title: "Quick Processing", titleZh: "快速处理", icon: "⚡", description: "Process data instantly in your browser — no uploads needed.", descriptionZh: "在浏览器中即时处理数据，无需上传。" },
    { title: "Privacy-First", titleZh: "隐私优先", icon: "🔒", description: "All processing happens locally. Your data never leaves your device.", descriptionZh: "所有处理均在本地完成，数据不会离开您的设备。" },
    { title: "No Sign-up Required", titleZh: "无需注册", icon: "🚀", description: "Start using the tool immediately without creating an account.", descriptionZh: "无需创建账户，立即开始使用工具。" },
  ];
}
