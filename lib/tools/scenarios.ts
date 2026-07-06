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
{ title: "UI Theme Design", titleZh: "UI 主题配色", icon: "🎨", description: "Generate a monochromatic palette from a brand primary color for buttons, backgrounds, and borders.", descriptionZh: "从品牌主色生成单色调色板，用于按钮、背景和边框。" },
    { title: "Data Viz Color Scheme", titleZh: "数据可视化配色", icon: "📈", description: "Create a complementary color scheme for a bar chart with 8 categories that remains distinguishable in print.", descriptionZh: "为 8 类柱状图创建互补配色方案，确保在打印时仍可区分。" },
    { title: "Social Media Graphics", titleZh: "社交媒体图形配色", icon: "🖼", description: "Pick an analogous palette that looks cohesive across Instagram story slides in a campaign series.", descriptionZh: "选择一组邻近色配色，在 Instagram 故事系列中保持视觉统一。" }
  ],
  "color-picker": [
{ title: "Extract Brand Colors", titleZh: "提取品牌色", icon: "🎯", description: "Upload a company logo image and pick the exact hex color values for the brand style guide.", descriptionZh: "上传公司 Logo 图片，提取精确的十六进制颜色值用于品牌风格指南。" },
    { title: "Match UI Mockups", titleZh: "匹配 UI 设计稿", icon: "💻", description: "Sample colors from a design screenshot to recreate the exact palette in CSS or Tailwind config.", descriptionZh: "从设计截图中取色，在 CSS 或 Tailwind 配置中复现精确色板。" },
    { title: "Identify Photo Tones", titleZh: "识别照片色调", icon: "📷", description: "Pick dominant and accent colors from a nature photo to inspire a room paint color scheme.", descriptionZh: "从自然照片中提取主色调和强调色，用于室内墙面配色灵感。" }
  ],
  "countdown-timer": [
{ title: "Project Deadline Tracker", titleZh: "项目截止倒计时", icon: "⏳", description: "Set a countdown to the product launch date to keep the team motivated and aware of remaining time.", descriptionZh: "设置产品上线日的倒计时，保持团队动力并了解剩余时间。" },
    { title: "Event Planning Countdown", titleZh: "活动筹备倒计时", icon: "🎪", description: "Track days remaining until a wedding or conference to stay on schedule with vendor bookings and preparations.", descriptionZh: "追踪婚礼或会议剩余天数，确保供应商预订和准备工作按计划进行。" },
    { title: "Exam Preparation Timer", titleZh: "考试倒计时", icon: "📖", description: "Count down the weeks until final exams to plan study sessions and revision milestones effectively.", descriptionZh: "倒计时距离期末考试还有几周，有效规划学习安排和复习节点。" }
  ],
  "cron-parser": [
{ title: "Understand Legacy Crontab", titleZh: "理解遗留 crontab", icon: "⏰", description: "Parse a complex cron expression from a legacy server to understand when a backup script actually runs.", descriptionZh: "解析遗留服务器上的复杂 cron 表达式，理解备份脚本的实际运行时间。" },
    { title: "Schedule Automation Jobs", titleZh: "自动化任务排期", icon: "🔄", description: "Verify that a cron expression runs every 2 hours on weekdays before deploying a monitoring script to production.", descriptionZh: "在部署监控脚本到生产环境前验证 cron 表达式是否在工作日每 2 小时运行一次。" },
    { title: "Debug Cron Syntax", titleZh: "调试 Cron 语法", icon: "🔍", description: "Check if 0 */6 * * 1-5 correctly schedules a task every 6 hours on weekdays or has a syntax error.", descriptionZh: "检查 0 */6 * * 1-5 是否正确排期为工作日每 6 小时运行一次任务，还是存在语法错误。" }
  ],
  "css-gradient": [
{ title: "Hero Background Design", titleZh: "首屏背景设计", icon: "🌈", description: "Create a sunset linear gradient for a landing page hero section using brand colors with CSS code output.", descriptionZh: "使用品牌色创建落地页首屏的日落线性渐变，输出 CSS 代码。" },
    { title: "Button Hover Effect", titleZh: "按钮悬停效果", icon: "🖱", description: "Design a radial gradient that shifts on hover for call-to-action buttons to increase visual appeal.", descriptionZh: "设计鼠标悬停时变化的径向渐变按钮效果，提升视觉吸引力。" },
    { title: "Card Background Accent", titleZh: "卡片背景装饰", icon: "🃏", description: "Generate a subtle diagonal gradient for feature cards on a SaaS pricing page to add depth without distraction.", descriptionZh: "为 SaaS 定价页面的功能卡片生成微妙的斜向渐变，增加层次感而不分散注意力。" }
  ],
  "css-minifier": [
{ title: "Production CSS Deploy", titleZh: "生产环境 CSS 部署", icon: "🚀", description: "Minify the main stylesheet before deploying to production to reduce page load time and bandwidth usage.", descriptionZh: "部署到生产环境前压缩主样式表，减少页面加载时间和带宽消耗。" },
    { title: "Bundle Size Reduction", titleZh: "包体积缩减", icon: "📦", description: "Strip comments and whitespace from third-party CSS libraries like Bootstrap to reduce bundle size.", descriptionZh: "从 Bootstrap 等第三方 CSS 库中去除注释和空白，减小打包体积。" },
    { title: "Performance Audit Fix", titleZh: "性能审计修复", icon: "⚡", description: "Run minification on a CSS file flagged by Lighthouse for render-blocking resource optimization.", descriptionZh: "对 Lighthouse 标记的 CSS 文件进行压缩优化，减少渲染阻塞资源体积。" }
  ],
  "css-shadow": [
{ title: "Card Elevation Design", titleZh: "卡片层级设计", icon: "🃏", description: "Create layered box shadows for a card component to achieve a Material Design elevation effect.", descriptionZh: "为卡片组件创建多层 box-shadow，实现 Material Design 层级效果。" },
    { title: "Button Depth Effect", titleZh: "按钮立体效果", icon: "🔘", description: "Design an inset shadow for pressed button state and a drop shadow for default state to simulate 3D depth.", descriptionZh: "为按钮按下状态设计内阴影，默认状态设计投影，模拟 3D 立体感。" },
    { title: "Hover Glow Animation", titleZh: "悬停发光动画", icon: "✨", description: "Build a neon glow shadow effect that intensifies on hover for interactive call-to-action elements.", descriptionZh: "构建鼠标悬停时增强的霓虹发光阴影效果，用于交互式行动号召元素。" }
  ],
  "csv-viewer": [
{ title: "Inspect Export Data", titleZh: "检查导出数据", icon: "📋", description: "Open a CRM customer export CSV to verify column headers, row counts, and spot missing values before importing.", descriptionZh: "打开 CRM 客户导出 CSV，检查列标题、行数及缺失值后再导入。" },
    { title: "Validate File Integrity", titleZh: "验证文件完整性", icon: "✅", description: "Check for misaligned columns, unescaped quotes, and delimiter issues in a CSV before loading into a database.", descriptionZh: "在加载到数据库前检查 CSV 中列对齐错误、未转义引号和分隔符问题。" },
    { title: "Quick Data Preview", titleZh: "快速数据预览", icon: "👁", description: "Preview a large CSV file's first rows and column types without opening a heavy spreadsheet application.", descriptionZh: "预览大型 CSV 文件的前几行和列类型，无需打开重型电子表格应用。" }
  ],
  "csv-visualizer": [
    { title: "Visualize Business Metrics", titleZh: "可视化业务指标", icon: "📈", description: "Turn monthly sales or revenue CSV exports into bar and line charts for quick trend analysis.", descriptionZh: "将月度销售或收入的 CSV 导出转为柱状图和折线图，快速分析趋势。" },
    { title: "Explore Scientific Data", titleZh: "探索科研数据", icon: "🔬", description: "Plot scatter graphs from experiment results to spot correlations between two numeric variables.", descriptionZh: "从实验结果绘制散点图，发现两个数值变量间的相关性。" },
    { title: "Build Reports and Slides", titleZh: "制作报告与幻灯片", icon: "📊", description: "Generate clean pie charts from category data and download as PNG for presentations.", descriptionZh: "从分类数据生成清晰的饼图，下载为 PNG 用于演示文稿。" },
  ],
  "data-size-converter": [
{ title: "Storage Upgrade Planning", titleZh: "存储升级规划", icon: "💾", description: "Convert 500 GB to TB when comparing cloud storage plans from Google Drive, Dropbox, and iCloud.", descriptionZh: "比较 Google Drive、Dropbox 和 iCloud 云存储方案时，将 500 GB 转为 TB。" },
    { title: "Bandwidth Calculation", titleZh: "带宽用量计算", icon: "🌐", description: "Calculate how many GB a 4K video streaming session consumes per hour to estimate monthly data cap usage.", descriptionZh: "计算每小时 4K 视频流消耗多少 GB，估算月度数据限额使用量。" },
    { title: "File Size Comparison", titleZh: "文件大小对比", icon: "📁", description: "Compare a 2.5 MB JPEG against a 15 MB RAW photo file to decide which format to use for a photo shoot.", descriptionZh: "对比 2.5 MB JPEG 和 15 MB RAW 照片文件，决定拍摄使用哪种格式。" }
  ],
  "days-between": [
{ title: "Project Milestone Planning", titleZh: "项目里程碑规划", icon: "📅", description: "Calculate workdays between kickoff and deadline to schedule milestone checkpoints for a 3-month project.", descriptionZh: "计算启动和截止日期之间的工作日，安排 3 个月项目的里程碑节点。" },
    { title: "Contract Duration Tracking", titleZh: "合同期限追踪", icon: "📋", description: "Compute the exact number of days between a freelance contract start and end date for accurate invoicing.", descriptionZh: "计算自由职业合同起止日期之间的精确天数，确保准确开票。" },
    { title: "Visa Stay Calculator", titleZh: "签证停留计算", icon: "🛂", description: "Count remaining days in a Schengen visa based on entry date and the 90/180-day rule for travel planning.", descriptionZh: "根据入境日期和 90/180 天规则计算申根签证剩余可停留天数。" }
  ],
  "decision-maker": [
{ title: "Team Lunch Picker", titleZh: "团队午餐选择", icon: "🍕", description: "Enter 5 nearby restaurant options and let the tool pick one randomly when the team can't agree.", descriptionZh: "输入 5 家附近餐厅选项，团队无法达成一致时让工具随机选择一家。" },
    { title: "Movie Night Randomizer", titleZh: "电影夜随机选择", icon: "🎬", description: "List the 8 movies in your streaming watchlist and randomly pick one to end the browsing indecision.", descriptionZh: "列出流媒体收藏列表中的 8 部电影，随机选一部结束浏览选择困难。" },
    { title: "A/B Test Assignment", titleZh: "A/B 测试分组", icon: "🧪", description: "Randomly assign 20 user IDs into control and treatment groups for a product feature A/B test experiment.", descriptionZh: "将 20 个用户 ID 随机分配到对照组和实验组，用于产品功能的 A/B 测试实验。" }
  ],
  "dice-roller": [
{ title: "D&D Session Substitute", titleZh: "龙与地下城投骰", icon: "🎲", description: "Roll 2d20 for advantage checks during a D&D session when physical dice aren't available at the table.", descriptionZh: "龙与地下城游戏中没有实体骰子时，投掷 2d20 进行优势检定。" },
    { title: "Board Game Backup", titleZh: "桌游备用骰子", icon: "🎯", description: "Roll a d6 when playing Monopoly after someone loses the original dice under the sofa.", descriptionZh: "玩大富翁时有人把骰子掉到沙发下面了，投掷 d6 继续游戏。" },
    { title: "Random Stat Generator", titleZh: "随机属性生成", icon: "⚡", description: "Roll 4d6 drop lowest six times to generate a character's strength, dexterity, and other ability scores.", descriptionZh: "投掷 4d6 去最低值六次，生成角色的力量、敏捷等属性值。" }
  ],
  "dns-lookup": [
    { title: "Troubleshoot DNS", titleZh: "排查 DNS", icon: "🌐", description: "Look up DNS records and diagnose domain resolution issues.", descriptionZh: "查询 DNS 记录并诊断域名解析问题。" },
    { title: "Plan Network Architecture", titleZh: "规划网络架构", icon: "🏗️", description: "Calculate subnets, CIDR blocks, and IP ranges for network design.", descriptionZh: "计算子网、CIDR 块和 IP 范围用于网络设计。" },
    { title: "Verify Domain Ownership", titleZh: "验证域名所有权", icon: "✅", description: "Check WHOIS records and RDAP data to confirm domain registration details.", descriptionZh: "检查 WHOIS 记录和 RDAP 数据以确认域名注册详情。" },
  ],
  "emoji-remover": [
{ title: "Sanitize Database Input", titleZh: "数据库输入净化", icon: "🗃", description: "Strip emoji characters from user-submitted comments before storing them in a MySQL database that lacks utf8mb4 support.", descriptionZh: "将用户提交的评论中的 emoji 去掉再存入不支持 utf8mb4 的 MySQL 数据库。" },
    { title: "Clean CSV Exports", titleZh: "CSV 导出清理", icon: "📊", description: "Remove emoji from a customer feedback CSV export to avoid encoding issues when importing into Excel or Tableau.", descriptionZh: "去除客户反馈 CSV 导出中的 emoji，避免导入 Excel 或 Tableau 时出现编码问题。" },
    { title: "Normalize Text Data", titleZh: "文本数据标准化", icon: "📝", description: "Strip emoji from social media post titles before feeding them into a sentiment analysis NLP pipeline.", descriptionZh: "将社交媒体帖子标题中的 emoji 去除后，再输入情感分析 NLP 流水线。" }
  ],
  "gif-maker": [
{ title: "Product Demo GIF", titleZh: "产品演示 GIF", icon: "🖼", description: "Create an animated GIF showing a 3-step checkout flow to embed in a help center knowledge base article.", descriptionZh: "创建显示 3 步结账流程的动画 GIF，嵌入帮助中心知识库文章。" },
    { title: "Bug Reproduction Clip", titleZh: "Bug 复现片段", icon: "🐛", description: "Record a short screen capture GIF demonstrating a UI bug to attach to a GitHub issue for developers.", descriptionZh: "录制屏幕截取 GIF 演示 UI 缺陷，附在 GitHub issue 中供开发人员参考。" },
    { title: "Social Media Reaction", titleZh: "社交媒体反应 GIF", icon: "😂", description: "Convert a video clip of a funny moment into a looping GIF to share on Twitter, Discord, or Slack.", descriptionZh: "将有趣瞬间的视频片段转为循环 GIF，分享到 Twitter、Discord 或 Slack。" }
  ],
  "hash-generator": [
{ title: "Verify File Download", titleZh: "验证文件下载完整性", icon: "✅", description: "Compute the SHA-256 hash of a downloaded ISO file and compare it against the official checksum to detect corruption.", descriptionZh: "计算下载的 ISO 文件的 SHA-256 哈希值，与官方校验和比对以检测损坏。" },
    { title: "Password Hash Preview", titleZh: "密码哈希预览", icon: "🔑", description: "Generate an MD5 hash of a test password to see how password hashing transforms input before database storage.", descriptionZh: "生成测试密码的 MD5 哈希，了解密码哈希在数据库存储前如何变换输入。" },
    { title: "API Request Signing", titleZh: "API 请求签名", icon: "🔐", description: "Create an HMAC-SHA256 signature of a request payload for authenticating API calls to a payment gateway.", descriptionZh: "为请求负载创建 HMAC-SHA256 签名，用于支付网关的 API 调用认证。" }
  ],
  "html-entity-converter": [
{ title: "Email Template Encoding", titleZh: "邮件模板编码", icon: "📧", description: "Encode special characters like ©, ®, and ™ as HTML entities in an email newsletter to ensure cross-client rendering.", descriptionZh: "将邮件简报中的 ©、®、™ 等特殊字符编码为 HTML 实体，确保跨客户端正确渲染。" },
    { title: "XML Special Character Fix", titleZh: "XML 特殊字符修复", icon: "💻", description: "Replace & and < in user-generated content with &amp; and &lt; before inserting into an XML sitemap file.", descriptionZh: "在插入 XML 站点地图文件前，将用户生成内容中的 & 和 < 替换为 &amp; 和 &lt。" },
    { title: "Web Page Content Safety", titleZh: "网页内容安全转义", icon: "🛡", description: "Convert angle brackets and quotes in code snippets to HTML entities before displaying them in a blog post to prevent XSS.", descriptionZh: "在博客文章中显示代码片段前将尖括号和引号转为 HTML 实体，防止 XSS。" }
  ],
  "html-preview": [
{ title: "Email Template Testing", titleZh: "邮件模板测试", icon: "📧", description: "Write and preview an HTML email with inline CSS to verify it renders correctly across email clients.", descriptionZh: "编写并预览带内联 CSS 的 HTML 邮件，验证在各邮件客户端中的渲染效果。" },
    { title: "Landing Page Prototyping", titleZh: "落地页原型设计", icon: "🖥", description: "Quickly mock up a hero section with heading, button, and image to preview the layout before coding the full page.", descriptionZh: "快速搭建含标题、按钮和图片的首屏模块，在编写完整页面代码前预览布局。" },
    { title: "Debug HTML Rendering", titleZh: "HTML 渲染调试", icon: "🔍", description: "Copy a webpage section's HTML source and preview it in isolation to debug layout or CSS issues without affecting live site.", descriptionZh: "复制网页某部分的 HTML 源码单独预览，排查布局或 CSS 问题而不影响线上站。" }
  ],
  "html-tag-stripper": [
{ title: "Extract Article Text", titleZh: "提取文章纯文本", icon: "📄", description: "Strip HTML tags from a web page body to get clean plain text for readability mode or text-to-speech processing.", descriptionZh: "去除网页正文的 HTML 标签，获取干净的纯文本用于阅读模式或语音合成。" },
    { title: "RSS Feed Cleanup", titleZh: "RSS 订阅源清理", icon: "📡", description: "Remove all markup from RSS feed item descriptions to create uniform plain-text summaries for a news aggregator.", descriptionZh: "去除 RSS 订阅源条目描述的标记，为新闻聚合器创建统一的纯文本摘要。" },
    { title: "Content Migration Prep", titleZh: "内容迁移准备", icon: "🔄", description: "Strip HTML before importing legacy blog content into a new CMS that only accepts plain text format.", descriptionZh: "将遗留博客内容导入仅接受纯文本格式的新 CMS 之前，去除 HTML 标记。" }
  ],
  "html-to-jsx": [
{ title: "Migrate to React", titleZh: "迁移到 React", icon: "⚛", description: "Convert a static HTML landing page into JSX components when porting a legacy site to a Next.js application.", descriptionZh: "将遗留网站迁移到 Next.js 应用时，把静态 HTML 落地页转为 JSX 组件。" },
    { title: "Email Template JSX", titleZh: "邮件模板转 JSX", icon: "📧", description: "Transform an HTML email template with inline styles into JSX for use with React Email or MJML components.", descriptionZh: "将带内联样式的 HTML 邮件模板转为 JSX，用于 React Email 或 MJML 组件。" },
    { title: "Convert HTML Snippets", titleZh: "HTML 片段转换", icon: "🔧", description: "Replace class attributes with className and for with htmlFor when copying HTML examples into a React component file.", descriptionZh: "将 HTML 示例复制到 React 组件文件时，把 class 替换为 className、for 替换为 htmlFor。" }
  ],
  "http-status-codes": [
{ title: "Debug API Error Response", titleZh: "调试 API 错误响应", icon: "🔍", description: "Look up the meaning of a 503 status code returned by a backend API endpoint during integration testing.", descriptionZh: "查询集成测试中后端 API 端点返回的 503 状态码的含义。" },
    { title: "REST API Documentation", titleZh: "REST API 文档编写", icon: "📖", description: "Reference the correct HTTP status codes for different API response scenarios when writing OpenAPI specification docs.", descriptionZh: "编写 OpenAPI 规范文档时，查阅不同 API 响应场景对应的 HTTP 状态码。" },
    { title: "Troubleshoot Web Server", titleZh: "Web 服务器排障", icon: "🌐", description: "Identify why a website returns 502 Bad Gateway by understanding the gateway timeout pattern from the status code list.", descriptionZh: "通过状态码列表理解网关超时模式，排查网站返回 502 Bad Gateway 的原因。" }
  ],
  "image-border": [
{ title: "Frame Profile Photos", titleZh: "头像加边框", icon: "🖼", description: "Add a clean white border around profile photos to create a consistent look for a team directory page.", descriptionZh: "在头像照片周围添加干净的白色边框，为团队目录页创建一致的外观。" },
    { title: "Polaroid-style Effect", titleZh: "宝丽来风格效果", icon: "📸", description: "Apply a thick white bottom border with shadow to photos for a retro polaroid picture aesthetic.", descriptionZh: "为照片添加底部厚白边加阴影，营造复古宝丽来照片美学效果。" },
    { title: "YouTube Thumbnail Border", titleZh: "YouTube 缩略图边框", icon: "▶", description: "Add a subtle colored border to video thumbnail thumbnails to make them stand out in the recommended feed.", descriptionZh: "为视频缩略图添加微妙的彩色边框，在推荐流中更突出。" }
  ],
  "image-collage": [
{ title: "Travel Photo Grid", titleZh: "旅行照片拼贴", icon: "🌍", description: "Combine 6 vacation photos into a 3x2 grid collage for a single Instagram post that tells a story.", descriptionZh: "将 6 张度假照片组合成 3x2 网格拼贴，用一张 Instagram 帖子讲述旅行故事。" },
    { title: "Product Showcase", titleZh: "产品展示拼贴", icon: "📦", description: "Merge 4 product shots from different angles into one image for an e-commerce listing gallery hero image.", descriptionZh: "将 4 张不同角度的产品照片合并为一张图，用于电商商品详情页的主图。" },
    { title: "Event Memory Board", titleZh: "活动回忆拼贴", icon: "🎪", description: "Arrange 8 conference photos into a clean grid layout to print as a thank-you card for event attendees.", descriptionZh: "将 8 张会议照片排列为整齐的网格版式，打印作为活动参会者的感谢卡。" }
  ],
  "image-converter": [
{ title: "Website Format Optimization", titleZh: "网站格式优化", icon: "🌐", description: "Convert PNG screenshots to JPEG for blog images to reduce file size while maintaining acceptable quality.", descriptionZh: "将博客图片从 PNG 转为 JPEG，在保持可接受质量的同时减小文件体积。" },
    { title: "Email-Friendly Images", titleZh: "邮件友好图片", icon: "📧", description: "Batch convert high-res photos to JPEG and resize them to stay under email attachment size limits.", descriptionZh: "将高分辨率照片批量转为 JPEG 并调整大小，满足邮件附件大小限制。" },
    { title: "Modern WebP Conversion", titleZh: "WebP 现代格式转换", icon: "⚡", description: "Convert legacy JPEG assets to WebP format for faster page loads on modern browsers that support WebP.", descriptionZh: "将旧 JPEG 资源转为 WebP 格式，在支持 WebP 的现代浏览器上获得更快加载速度。" }
  ],
  "image-cropper": [
{ title: "Profile Photo Resize", titleZh: "头像裁剪", icon: "👤", description: "Crop a full-body photo to a square 400x400 headshot for a LinkedIn or company directory profile picture.", descriptionZh: "将全身照裁剪为 400x400 正方形头像，用于 LinkedIn 或公司通讯录。" },
    { title: "E-commerce Product Crop", titleZh: "电商产品裁剪", icon: "📦", description: "Crop a product photo to remove excess background and focus on the item for an Amazon listing image.", descriptionZh: "裁剪产品照片去除多余背景，聚焦商品本身，用于亚马逊商品展示图。" },
    { title: "Social Media Banner", titleZh: "社交媒体横幅裁剪", icon: "📱", description: "Crop a landscape photo to the exact 1500x500 Twitter header dimensions without distorting the subject.", descriptionZh: "将横版照片裁剪为精确的 1500x500 Twitter 横幅尺寸，不变形主体。" }
  ],
  "image-filters": [
{ title: "Vintage Blog Photos", titleZh: "复古博客照片", icon: "📷", description: "Apply a warm sepia filter to a set of travel photos to create a consistent vintage aesthetic for a blog post.", descriptionZh: "对一组旅行照片应用暖色棕褐滤镜，为博客文章创建一致的复古美学。" },
    { title: "Grayscale Printing Prep", titleZh: "灰度打印准备", icon: "🖨", description: "Convert color screenshots to grayscale before inserting them into a black-and-white printed document or report.", descriptionZh: "在插入黑白打印文档或报告前，将彩色截图转为灰度。" },
    { title: "Brightness Correction", titleZh: "亮度校正", icon: "☀", description: "Increase brightness and contrast of underexposed product photos before uploading them to an online store.", descriptionZh: "对曝光不足的产品照片增加亮度和对比度，再上传到在线商店。" }
  ],
  "image-flip": [
{ title: "Fix Scanner Orientation", titleZh: "修正扫描方向", icon: "🔄", description: "Flip a scanned document image that came out upside down due to incorrect paper orientation in the feeder.", descriptionZh: "翻转因进纸器中纸张方向错误而上下颠倒的扫描文档图像。" },
    { title: "Mirror Selfie Effect", titleZh: "镜像自拍效果", icon: "🤳", description: "Horizontal flip a front-camera selfie to show the image the way you see yourself in a mirror, not the camera preview.", descriptionZh: "水平翻转前置摄像头自拍，显示你在镜子中看到的自己而非相机预览。" },
    { title: "Print Transfer Template", titleZh: "打印转印模板", icon: "👕", description: "Flip an image horizontally before printing on transfer paper so the design faces correctly on a T-shirt.", descriptionZh: "在打印到转印纸前水平翻转图像，确保 T 恤上的图案方向正确。" }
  ],
  "image-invert": [
{ title: "Negative Film Effect", titleZh: "胶片负片效果", icon: "🎞", description: "Invert a scanned film negative photo to convert it back to a positive, natural-looking color image.", descriptionZh: "反转扫描的胶片负片照片，将其转换回正片效果的自然彩色图像。" },
    { title: "High Contrast Mockup", titleZh: "高对比度原型", icon: "👁", description: "Invert colors of a UI mockup to test if design elements remain recognizable in dark mode or high-contrast mode.", descriptionZh: "反转 UI 设计稿的颜色，测试设计元素在深色模式或高对比度模式下是否仍可识别。" },
    { title: "X-ray Style Effect", titleZh: "X 光风格效果", icon: "🦴", description: "Create an artistic X-ray look by inverting a silhouette or nature photo for creative social media content.", descriptionZh: "反转剪影或自然照片，创造艺术化的 X 光效果用于创意社交媒体内容。" }
  ],
  "image-merge": [
{ title: "Before/After Comparison", titleZh: "改善前后对比", icon: "📊", description: "Merge a before and after renovation photo side by side into a single image for social media posting.", descriptionZh: "将装修前后的照片并排合并为一张图，用于社交媒体发帖对比展示。" },
    { title: "Panorama Stitching", titleZh: "全景照片拼接", icon: "🏔", description: "Combine 3 overlapping landscape photos into a wide panoramic image for a travel blog header.", descriptionZh: "将 3 张重叠的风景照片组合为宽幅全景图，用作旅行博客横幅。" },
    { title: "Product Comparison", titleZh: "产品对比图", icon: "📋", description: "Merge two product variant images side by side with labels for an e-commerce comparison table.", descriptionZh: "将两款产品图片并排合并并添加标签，用于电商对比表格。" }
  ],
  "image-resizer": [
{ title: "Social Media Sizing", titleZh: "社交媒体尺寸适配", icon: "📱", description: "Resize a photo to Instagram's 1080x1080 square format without cropping the subject awkwardly.", descriptionZh: "将照片调整为 Instagram 的 1080x1080 正方形尺寸，不尴尬地裁剪主体。" },
    { title: "Email Signature Image", titleZh: "邮件签名图片", icon: "✉", description: "Shrink a company logo to 300x60 pixels for use in email signatures across the organization.", descriptionZh: "将公司 Logo 缩小到 300x60 像素，用于全公司邮件签名。" },
    { title: "Thumbnail Generation", titleZh: "缩略图生成", icon: "🖼", description: "Batch resize a directory of high-res product photos to 150x150 thumbnails for a category listing page.", descriptionZh: "将一批高分辨率产品照片批量缩放到 150x150 缩略图，用于分类列表页。" }
  ],
  "image-splitter": [
{ title: "Instagram Grid Post", titleZh: "Instagram 九宫格", icon: "📱", description: "Split a panoramic photo into 3 equal slices for a swiping Instagram carousel post.", descriptionZh: "将全景照片均分为 3 片，用于 Instagram 滑动的轮播帖子。" },
    { title: "Print-and-Fold Layout", titleZh: "打印折叠版式", icon: "🖨", description: "Divide a large poster design into A4-sized tiles for home printing on a standard office printer.", descriptionZh: "将大海报设计分割为 A4 尺寸的图块，在标准办公打印机上打印。" },
    { title: "Sprite Sheet Creation", titleZh: "精灵表制作", icon: "🎮", description: "Split a sprite sheet into individual animation frames by dividing it into rows and columns of equal cells.", descriptionZh: "将精灵表按等分行列分割为单个动画帧。" }
  ],
  "image-to-base64": [
{ title: "Inline HTML Image", titleZh: "内联 HTML 图片", icon: "🖼", description: "Convert a small logo image to a base64 data URI for inline embedding in a single-file HTML page or email.", descriptionZh: "将小 Logo 图片转为 base64 数据 URI，内嵌到单文件 HTML 页面或邮件中。" },
    { title: "CSS Background Data URI", titleZh: "CSS 背景数据 URI", icon: "💻", description: "Encode a small icon as base64 and embed it directly in CSS as a background-image to reduce HTTP requests.", descriptionZh: "将小图标编码为 base64 嵌入 CSS 的 background-image，减少 HTTP 请求数。" },
    { title: "Favicon Embedding", titleZh: "Favicon 嵌入", icon: "🔖", description: "Convert an SVG favicon to base64 to embed directly in HTML link tags without hosting separate icon files.", descriptionZh: "将 SVG 网站图标转为 base64 直接嵌入 HTML link 标签，无需单独托管图标文件。" }
  ],
  "image-to-pdf": [
{ title: "Scan to PDF", titleZh: "扫描件转 PDF", icon: "📄", description: "Convert multiple scanned JPG pages into a single PDF document for easy email sharing and archiving.", descriptionZh: "将多张扫描的 JPG 页面合并为一个 PDF 文档，便于邮件分享和归档。" },
    { title: "Photo Album Export", titleZh: "相册导出", icon: "📸", description: "Combine 20 vacation photos into a single PDF album file to send to family members who prefer reading documents.", descriptionZh: "将 20 张度假照片合并为单个 PDF 相册文件，发送给喜欢看文档的家人。" },
    { title: "Receipt Digitization", titleZh: "收据数字化", icon: "🧾", description: "Group photos of expense receipts into a single PDF page per trip for easy submission to accounting software.", descriptionZh: "将差旅费用收据照片按行程分组为单个 PDF 页面，方便提交到财务软件。" }
  ],
  "image-to-sketch": [
{ title: "Portrait Art Effect", titleZh: "人像素描效果", icon: "✏", description: "Convert a portrait photo into a pencil sketch style for a unique profile picture or gift print.", descriptionZh: "将人像照片转为铅笔素描风格，用于独特的头像或礼品印刷。" },
    { title: "Coloring Page Creation", titleZh: "涂色页制作", icon: "🎨", description: "Transform a simple landscape photo into a line-art sketch for kids to color in as an activity sheet.", descriptionZh: "将简单风景照转为线稿素描，供孩子作为涂色活动页使用。" },
    { title: "Architectural Concept Art", titleZh: "建筑概念图", icon: "🏛", description: "Apply a sketch filter to a building photo to create a conceptual architectural rendering for a pitch deck.", descriptionZh: "对建筑照片应用素描滤镜，为提案演示文稿创建概念性的建筑效果图。" }
  ],
  "image-watermark": [
{ title: "Protect Portfolio Photos", titleZh: "作品集照片保护", icon: "🛡", description: "Add a semi-transparent copyright watermark to portfolio images before uploading to a public gallery.", descriptionZh: "在上传到公开图库前为作品集照片添加半透明版权水印。" },
    { title: "Brand Social Media", titleZh: "品牌社交媒体图片", icon: "📱", description: "Overlay the company logo watermark on product images shared across Instagram, Facebook, and Twitter.", descriptionZh: "在 Instagram、Facebook 和 Twitter 上分享的产品图片上叠加公司 Logo 水印。" },
    { title: "Client Preview Proofing", titleZh: "客户预览样稿", icon: "📋", description: "Apply a large DRAFT watermark across photos sent to clients for approval before final delivery.", descriptionZh: "在发送给客户审批的照片上覆盖大号 DRAFT 水印，防止未经授权的使用。" }
  ],
  "ip-calculator": [
{ title: "VPC Subnet Planning", titleZh: "VPC 子网规划", icon: "☁", description: "Calculate available host addresses in a /24 subnet when designing AWS VPC subnets for different availability zones.", descriptionZh: "设计 AWS VPC 不同可用区的子网时，计算 /24 子网中的可用主机地址数。" },
    { title: "Firewall Rule Design", titleZh: "防火墙规则设计", icon: "🛡", description: "Determine the CIDR range that covers all office VPN IPs for a firewall allowlist rule configuration.", descriptionZh: "为防火墙白名单规则配置确定覆盖所有办公室 VPN IP 的 CIDR 范围。" },
    { title: "Docker Network Setup", titleZh: "Docker 网络设置", icon: "🐳", description: "Calculate the subnet and gateway when creating a custom Docker bridge network for multi-container applications.", descriptionZh: "为多容器应用创建自定义 Docker 桥接网络时，计算子网和网关。" }
  ],
  "json-diff": [
{ title: "API Response Comparison", titleZh: "API 响应对比", icon: "📡", description: "Compare JSON responses from two API versions to identify new fields, removed properties, or changed values.", descriptionZh: "对比两个 API 版本的 JSON 响应，识别新增字段、删除属性或变更值。" },
    { title: "Config File Diff", titleZh: "配置文件差异", icon: "⚙", description: "Spot the differences between staging and production config JSON files before deploying a configuration change.", descriptionZh: "在部署配置变更前识别预发布和生产环境 JSON 配置文件的差异。" },
    { title: "Deployment Verification", titleZh: "部署验证", icon: "🚀", description: "Diff the expected build manifest against the deployed version to verify zero regressions in the release.", descriptionZh: "对比预期构建清单与已部署版本的 JSON，验证发布无回归。" }
  ],
  "json-to-typescript": [
{ title: "Generate API Types", titleZh: "生成 API 类型定义", icon: "📝", description: "Paste a JSON API response and instantly generate corresponding TypeScript interfaces for type-safe data handling.", descriptionZh: "粘贴 JSON API 响应，即时生成对应的 TypeScript 接口定义，实现类型安全的数据处理。" },
    { title: "SDK Development", titleZh: "SDK 开发工具", icon: "🔧", description: "Convert JSON schema samples into TypeScript types when building a client SDK for a third-party REST API.", descriptionZh: "为第三方 REST API 构建客户端 SDK 时，将 JSON Schema 示例转换为 TypeScript 类型。" },
    { title: "Database Model Types", titleZh: "数据库模型类型", icon: "🗄", description: "Transform JSON-based database records into TypeScript interfaces for use with an ORM like Prisma or TypeORM.", descriptionZh: "将 JSON 格式的数据库记录转换为 TypeScript 接口，用于 Prisma 或 TypeORM 等 ORM。" }
  ],
  "json-to-yaml": [
{ title: "Kubernetes Config Prep", titleZh: "Kubernetes 配置准备", icon: "☸", description: "Convert a JSON deployment specification to YAML format for use in a Kubernetes manifest file.", descriptionZh: "将 JSON 部署规范转换为 YAML 格式，用于 Kubernetes 清单文件。" },
    { title: "Docker Compose Setup", titleZh: "Docker Compose 配置", icon: "🐳", description: "Translate a JSON service definition to Docker Compose YAML syntax for local development environment setup.", descriptionZh: "将 JSON 服务定义转换为 Docker Compose YAML 语法，用于本地开发环境搭建。" },
    { title: "CI/CD Pipeline Config", titleZh: "CI/CD 流水线配置", icon: "🔄", description: "Convert a GitHub Actions workflow from JSON to YAML format for easier readability and maintenance.", descriptionZh: "将 GitHub Actions 工作流从 JSON 转为 YAML 格式，提高可读性和可维护性。" }
  ],
  "jwt-decoder": [
{ title: "Debug Auth Tokens", titleZh: "调试认证令牌", icon: "🔍", description: "Decode a JWT from the browser local storage to inspect the header algorithm and payload claims like exp and sub.", descriptionZh: "解码浏览器 localStorage 中的 JWT，检查头部算法和负载声明（如 exp、sub）。" },
    { title: "Verify Token Expiry", titleZh: "验证令牌过期时间", icon: "⏰", description: "Check the exp claim of a JWT to determine if an expired token is causing 401 errors in API requests.", descriptionZh: "检查 JWT 的 exp 声明，判断过期令牌是否导致 API 请求返回 401 错误。" },
    { title: "SSO Integration Debug", titleZh: "SSO 集成调试", icon: "🔐", description: "Decode the identity token returned by an OIDC provider to verify the user claims and issuer are correct.", descriptionZh: "解码 OIDC 提供者返回的身份令牌，验证用户声明和签发者是否正确。" }
  ],
  "jwt-generator": [
{ title: "API Auth Testing", titleZh: "API 认证测试", icon: "🧪", description: "Generate a test JWT with custom claims to verify backend middleware correctly validates token signatures.", descriptionZh: "生成带自定义声明的测试 JWT，验证后端中间件能正确校验令牌签名。" },
    { title: "Service-to-Service Token", titleZh: "服务间通信令牌", icon: "🔗", description: "Create a short-lived JWT with system-level permissions for microservice-to-microservice API authentication.", descriptionZh: "创建带系统级权限的短期 JWT，用于微服务间的 API 认证。" },
    { title: "User Impersonation Token", titleZh: "用户模拟令牌", icon: "🔄", description: "Generate a JWT with admin claims for testing role-based access control during feature development.", descriptionZh: "生成带管理员声明的 JWT，在功能开发期间测试基于角色的访问控制。" }
  ],
  "length-converter": [
{ title: "DIY Project Measurements", titleZh: "DIY 项目测量", icon: "📏", description: "Convert 2.4 meters to feet when following a US woodworking plan that uses imperial measurements.", descriptionZh: "遵循使用英制单位的美式木工计划时，将 2.4 米转为英尺。" },
    { title: "Travel Distance Planning", titleZh: "旅行距离规划", icon: "✈", description: "Convert 5 kilometers to miles to estimate walking time while traveling in a country that uses miles.", descriptionZh: "在使用英里的国家旅行时，将 5 公里转为英里估算步行时间。" },
    { title: "Sewing Pattern Conversion", titleZh: "缝纫尺寸转换", icon: "🧵", description: "Switch a sewing pattern measurement from centimeters to inches when using a US-pattern guide.", descriptionZh: "使用美版缝纫指南时，将纸样尺寸从厘米转为英寸。" }
  ],
  "lorem-ipsum-generator": [
{ title: "Website Wireframe Filler", titleZh: "网站线框图填充", icon: "🖥", description: "Generate 3 paragraphs of lorem ipsum to fill a landing page wireframe during client presentation mockups.", descriptionZh: "生成 3 段 lorem ipsum 填充落地页线框图，用于客户展示设计稿。" },
    { title: "Typography Test Content", titleZh: "排版测试内容", icon: "🔤", description: "Create a block of lorem ipsum text to test how a new font renders at different sizes and line heights.", descriptionZh: "创建 lorem ipsum 文本块，测试新字体在不同字号和行高下的渲染效果。" },
    { title: "Print Layout Mockup", titleZh: "印刷版式设计稿", icon: "📰", description: "Generate lorem ipsum with heading hierarchy to simulate a magazine article layout during brochure design.", descriptionZh: "生成带标题层级的 lorem ipsum，在宣传册设计期间模拟杂志文章版式。" }
  ],
  "markdown-to-html": [
{ title: "Documentation Site Build", titleZh: "文档站点构建", icon: "📘", description: "Convert a project README.md to HTML for publishing as a documentation page on a static site like GitHub Pages.", descriptionZh: "将项目 README.md 转为 HTML，发布到 GitHub Pages 等静态站点作为文档页面。" },
    { title: "Blog Post Export", titleZh: "博客文章导出", icon: "✍", description: "Transform a Markdown blog draft with code blocks and images into styled HTML for a CMS like WordPress.", descriptionZh: "将含代码块和图片的 Markdown 博客草稿转为带样式的 HTML，用于 WordPress 等 CMS。" },
    { title: "Email Newsletter Render", titleZh: "邮件简报渲染", icon: "📧", description: "Convert a Markdown newsletter with headings, lists, and links into HTML email-compatible markup.", descriptionZh: "将带标题、列表和链接的 Markdown 简报转为 HTML 邮件兼容标记。" }
  ],
  "meme-generator": [
{ title: "Viral Social Media", titleZh: "病毒式社交媒体", icon: "😂", description: "Create a two-panel Drake meme comparing two tools or options for a relatable Twitter post.", descriptionZh: "创建 Drake 双格表情包比较两个工具或选项，用于 Twitter 引发共鸣。" },
    { title: "Team Newsletter Humor", titleZh: "团队简报幽默", icon: "🎪", description: "Add top and bottom text to a funny stock photo for the weekly engineering team newsletter inside Slack.", descriptionZh: "在搞笑图库照片上添加上下文字，用于 Slack 中的每周工程团队简报。" },
    { title: "Tutorial Annotation", titleZh: "教程标注说明", icon: "📝", description: "Overlay instructional text on a screenshot to create a step-by-step visual guide for a software tutorial.", descriptionZh: "在截图上叠加说明文字，为软件教程创建分步视觉指南。" }
  ],
  "morse-code-converter": [
{ title: "Learn Morse Alphabet", titleZh: "学习摩斯密码", icon: "🎓", description: "Type your name and see it converted to Morse code to memorize the dot-dash patterns for each letter.", descriptionZh: "输入姓名查看摩斯密码转换结果，记忆每个字母的点划模式。" },
    { title: "Amateur Radio Practice", titleZh: "业余无线电练习", icon: "📡", description: "Decode a Morse-coded message received during a ham radio session to practice copy skills.", descriptionZh: "解码业余无线电通讯中接收到的摩斯密码消息，练习抄收技能。" },
    { title: "Escape Room Puzzle", titleZh: "密室逃脱谜题", icon: "🧩", description: "Decode a Morse-coded clue from an escape room to reveal the next combination or direction.", descriptionZh: "解码密室逃脱中的摩斯密码线索，揭示下一个密码组合或方向。" }
  ],
  "number-base-converter": [
{ title: "Low-Level Programming", titleZh: "底层编程调试", icon: "💻", description: "Convert decimal memory addresses to hex when debugging a buffer overflow in a C program with GDB.", descriptionZh: "用 GDB 调试 C 程序中的缓冲区溢出时，将十进制内存地址转为十六进制。" },
    { title: "Color Hex Conversion", titleZh: "颜色十六进制转换", icon: "🎨", description: "Convert RGB values (255, 99, 71) to hex #FF6347 and binary for understanding how colors are stored.", descriptionZh: "将 RGB 值 (255, 99, 71) 转为十六进制 #FF6347 和二进制，理解颜色的存储方式。" },
    { title: "Subnet Mask Binary", titleZh: "子网掩码二进制", icon: "🌐", description: "Convert a subnet mask 255.255.255.0 to binary to understand how many bits are allocated to the network portion.", descriptionZh: "将子网掩码 255.255.255.0 转为二进制，理解网络部分分配了多少位。" }
  ],
  "online-notepad": [
{ title: "Quick Meeting Notes", titleZh: "会议快速笔记", icon: "📝", description: "Jot down action items during a quick stand-up meeting without opening a full productivity app.", descriptionZh: "在站会期间快速记录行动项，无需打开完整的生产力应用。" },
    { title: "Temporary Code Snippet", titleZh: "临时代码片段", icon: "💻", description: "Paste an API response or error log temporarily to extract information before closing the browser tab.", descriptionZh: "临时粘贴 API 响应或错误日志，提取信息后关闭浏览器标签页。" },
    { title: "Clipboard Scratchpad", titleZh: "剪贴板草稿", icon: "📋", description: "Copy-paste text between applications using the notepad as a temporary buffer during multitasking.", descriptionZh: "多任务操作时将记事本作为临时缓冲区，在不同应用间复制粘贴文本。" }
  ],
  "palindrome-checker": [
{ title: "Interview Prep Practice", titleZh: "面试准备练习", icon: "💼", description: "Test strings like racecar and A man a plan a canal panama to practice palindrome detection logic.", descriptionZh: "测试 racecar、A man a plan a canal panama 等字符串，练习回文检测逻辑。" },
    { title: "Word Game Validation", titleZh: "文字游戏验证", icon: "🎮", description: "Check if a word suggested during a Scrabble or word puzzle game is actually a palindrome for fun.", descriptionZh: "验证拼字游戏或文字解谜中提出的词是否真的是回文，增加趣味性。" },
    { title: "Linguistic Curiosity", titleZh: "语言趣味探索", icon: "🔤", description: "Find out if longer phrases or names are palindromes ignoring spaces, punctuation, and case differences.", descriptionZh: "检查忽略空格、标点和大小写后，长短语或姓名是否构成回文。" }
  ],
  "password-strength": [
{ title: "Security Policy Compliance", titleZh: "安全策略合规检查", icon: "🛡", description: "Test if a candidate password meets corporate complexity requirements before setting it for a new employee account.", descriptionZh: "为新员工账号设置密码前，测试候选密码是否符合企业复杂度要求。" },
    { title: "Employee Training Demo", titleZh: "员工培训演示", icon: "🎓", description: "Show how password strength varies between Password123 and a 20-character random string during security awareness training.", descriptionZh: "在安全意识培训中演示 Password123 和 20 位随机字符串的密码强度差异。" },
    { title: "Service Account Audit", titleZh: "服务账户审计", icon: "🔑", description: "Evaluate the entropy of auto-generated 16-character service account passwords against NIST 800-63B guidelines.", descriptionZh: "根据 NIST 800-63B 指南，评估自动生成的 16 位服务账户密码的熵值水平。" }
  ],
  "pdf-merger": [
{ title: "Combine Contract Documents", titleZh: "合并合同文档", icon: "📄", description: "Merge a signed agreement PDF with its appendix and termsheet into a single file for client delivery.", descriptionZh: "将已签署的协议 PDF 与附录、条款表合并为一个文件交付客户。" },
    { title: "Consolidate Scanned Pages", titleZh: "汇总扫描页面", icon: "📋", description: "Combine multiple single-page scanned documents into one PDF for easier forwarding and archiving.", descriptionZh: "将多个单页扫描文档合并为一个 PDF，便于转发和归档。" },
    { title: "Quarterly Report Assembly", titleZh: "季度报告汇编", icon: "📊", description: "Join 4 separate departmental report PDFs into one unified quarterly business review document.", descriptionZh: "将 4 个独立的部门报告 PDF 合并为一个统一的季度业务回顾文档。" }
  ],
  "pdf-page-remover": [
{ title: "Remove Blank Pages", titleZh: "去除空白页", icon: "🗑", description: "Delete empty pages from a scanned PDF that were caused by double-sided scanning of single-sided originals.", descriptionZh: "删除因单面原稿双面扫描导致的空白页面。" },
    { title: "Delete Confidential Pages", titleZh: "删除机密页面", icon: "🔒", description: "Remove specific pages containing personal data from a PDF before sharing the document externally.", descriptionZh: "在对外共享文档前，删除 PDF 中包含个人数据的特定页面。" },
    { title: "Clean Up Scanned Docs", titleZh: "扫描文档清理", icon: "📄", description: "Delete cover and separator pages from a batch-scanned document bundle to keep only the content pages.", descriptionZh: "从批量扫描文档包中删除封面和分隔页，仅保留内容页面。" }
  ],
  "pdf-rotator": [
{ title: "Fix Upside-Down Scans", titleZh: "修正上下颠倒的扫描件", icon: "🔄", description: "Rotate a batch of scanned pages that came through the document feeder in mixed orientations.", descriptionZh: "批量修正因进纸器方向混乱导致的扫描页面方向问题。" },
    { title: "Correct Mixed Layouts", titleZh: "纠正混合版式", icon: "📐", description: "Rotate landscape pages in an otherwise portrait PDF to unify the reading orientation for printing.", descriptionZh: "将纵向 PDF 中的横版页面旋转，统一打印阅读方向。" },
    { title: "Prepare for Binding", titleZh: "装订前准备", icon: "📖", description: "Rotate specfic pages 180 degrees for booklet-style duplex printing where content needs to face correctly.", descriptionZh: "将特定页面旋转 180 度用于小册子双面打印，确保内容方向正确。" }
  ],
  "pdf-splitter": [
{ title: "Extract Book Chapters", titleZh: "提取书籍章节", icon: "📖", description: "Split a PDF ebook by page range to extract specific chapters for separate reading or sharing.", descriptionZh: "按页码范围拆分 PDF 电子书，提取特定章节单独阅读或分享。" },
    { title: "Separate Invoices", titleZh: "分离发票文件", icon: "🧾", description: "Split a single PDF containing 50 invoices into individual files, one per invoice, for accounting distribution.", descriptionZh: "将含 50 张发票的 PDF 拆分为独立文件，按张分发给财务部门。" },
    { title: "Split Large Report", titleZh: "拆分大型报告", icon: "📊", description: "Divide a 200-page annual report into section-sized PDFs for faster uploading and per-chapter review.", descriptionZh: "将 200 页年度报告按章节拆分为 PDF，加快上传速度和分章审阅。" }
  ],
  "percentage-calculator": [
{ title: "Discount Shopping", titleZh: "折扣购物计算", icon: "🏷", description: "Calculate the final price of a $79 item with a 25% discount during an online Black Friday sale.", descriptionZh: "计算黑色星期五促销期间 $79 商品打 25% 折扣后的最终价格。" },
    { title: "Grade Score Calculation", titleZh: "成绩分数计算", icon: "📊", description: "Compute what percentage score 38 out of 50 represents on a final exam to determine if it's a passing grade.", descriptionZh: "计算 50 分满分中得 38 分对应的百分比，判断是否及格。" },
    { title: "Tip Splitting", titleZh: "小费分摊", icon: "💵", description: "Calculate what 18% tip on a $120 dinner bill is, then split the total evenly among 4 people.", descriptionZh: "计算 $120 餐费 18% 小费金额，再将总费用均分到 4 人。" }
  ],
  "qr-reader": [
{ title: "Verify QR Campaign Links", titleZh: "验证推广链接二维码", icon: "📱", description: "Upload a QR code from a marketing flyer to verify it decodes to the correct landing page URL before printing.", descriptionZh: "上传营销传单上的二维码，验证其在印刷前解码到正确的落地页 URL。" },
    { title: "Extract Wi-Fi Credentials", titleZh: "提取 WiFi 凭据", icon: "📶", description: "Decode a QR code from a hotel welcome card to extract the Wi-Fi SSID and password for internet access.", descriptionZh: "解码酒店欢迎卡上的二维码，提取 WiFi 名称和密码以便上网。" },
    { title: "Decode Contact vCard", titleZh: "解码联系人 vCard", icon: "👤", description: "Scan a QR code containing a vCard from a conference badge to save the contact to your phone's address book.", descriptionZh: "扫描展会胸牌上包含 vCard 信息的二维码，将联系人保存到手机通讯录。" }
  ],
  "random-number-generator": [
{ title: "Lottery Number Picker", titleZh: "彩票号码生成", icon: "🎱", description: "Generate 6 random numbers between 1 and 49 for a lottery ticket when you can't decide on your own numbers.", descriptionZh: "无法决定号码时，生成 6 个 1-49 之间的随机数用于彩票选号。" },
    { title: "Giveaway Winner Selection", titleZh: "抽奖赢家选择", icon: "🏆", description: "Pick a random winner number from 1 to 300 for an Instagram giveaway by generating one random integer.", descriptionZh: "生成一个 1-300 之间的随机整数，从 Instagram 抽奖活动中抽取赢家。" },
    { title: "Statistical Sampling", titleZh: "统计抽样", icon: "📊", description: "Generate 50 random numbers within a range to select a random sample from a dataset for quality control testing.", descriptionZh: "在范围内生成 50 个随机数，从数据集中选取随机样本用于质控测试。" }
  ],
  "random-string-generator": [
{ title: "Temporary Password Creation", titleZh: "临时密码创建", icon: "🔑", description: "Generate a 12-character alphanumeric string with special chars for a one-time temporary account password.", descriptionZh: "生成包含特殊字符的 12 位字母数字混合随机字符串，作为一次性临时账户密码。" },
    { title: "API Token Generation", titleZh: "API 令牌生成", icon: "🔐", description: "Create a 32-character hex string to use as a developer API key for authenticating third-party integrations.", descriptionZh: "创建 32 位十六进制字符串，用作开发者 API 密钥认证第三方集成。" },
    { title: "Coupon Code Batch", titleZh: "优惠码批量生成", icon: "🏷", description: "Generate 10 unique 8-character uppercase alphanumeric codes for a limited-time promotional campaign.", descriptionZh: "生成 10 个不重复的 8 位大写字母数字混合码，用于限时促销活动。" }
  ],
  "roman-numeral": [
{ title: "Movie Copyright Year", titleZh: "电影版权年份", icon: "🎬", description: "Convert 2024 to MMXXIV for the copyright year in a film credits or video outro sequence.", descriptionZh: "将 2024 转为 MMXXIV，用于电影片尾或视频结尾的版权年份。" },
    { title: "Clock Face Design", titleZh: "钟表表盘设计", icon: "🕐", description: "Look up the Roman numeral for 4 (IV) to correctly design a clock face for a DIY project.", descriptionZh: "查询 4 的罗马数字表示 IV，为 DIY 项目正确设计钟表表盘。" },
    { title: "Academic Citation Format", titleZh: "学术引用格式", icon: "📖", description: "Convert page numbers to Roman numerals for front matter in a thesis or dissertation table of contents.", descriptionZh: "将论文前置部分的页码转为罗马数字，用于目录页的格式排版。" }
  ],
  "speed-converter": [
{ title: "Road Trip Speed Check", titleZh: "自驾速度换算", icon: "🚗", description: "Convert 100 km/h to mph when driving a rental car in the US with speed limit signs in miles per hour.", descriptionZh: "在美国租车驾驶时，将 100 km/h 转为 mph，路标限速使用英里。" },
    { title: "Aviation Wind Speed", titleZh: "航空风速换算", icon: "✈", description: "Convert wind speed from 25 knots to km/h for a pilot weather briefing before a cross-country flight.", descriptionZh: "在跨州飞行前为飞行员天气简报将风速从 25 节转为 km/h。" },
    { title: "Marine Navigation", titleZh: "航海导航", icon: "⛵", description: "Convert boat speed from knots to mph when planning a sailing route using charts marked in nautical miles.", descriptionZh: "使用海里制海图规划帆船路线时，将船速从节转为 mph。" }
  ],
  "sql-formatter": [
{ title: "Debug Complex Queries", titleZh: "调试复杂查询", icon: "🔍", description: "Format a 200-line SQL query with multiple JOINs and subqueries to spot syntax errors and logic issues.", descriptionZh: "格式化含多层 JOIN 和子查询的 200 行 SQL，定位语法错误和逻辑问题。" },
    { title: "Code Review Readability", titleZh: "代码审查可读性", icon: "👁", description: "Beautify a colleague's unformatted SQL query before reviewing it to understand the query structure clearly.", descriptionZh: "审查前格式化同事杂乱的 SQL 查询，清晰理解查询结构。" },
    { title: "Migration Script Format", titleZh: "迁移脚本格式化", icon: "🔄", description: "Format database migration SQL files consistently to maintain readable version-controlled schema changes.", descriptionZh: "统一格式化数据库迁移 SQL 文件，保持版本控制中 Schema 变更的可读性。" }
  ],
  "string-escaper": [
{ title: "JSON Encoding Fix", titleZh: "JSON 编码修复", icon: "💻", description: "Escape double quotes and backslashes in a user input string before embedding it in a JSON object.", descriptionZh: "在将用户输入字符串嵌入 JSON 对象前，转义双引号和反斜杠。" },
    { title: "SQL Injection Prevention", titleZh: "SQL 注入防护", icon: "🛡", description: "Escape single quotes in a search query before concatenating it into a raw SQL statement for safety.", descriptionZh: "在拼接到原始 SQL 语句前，转义搜索查询中的单引号以增强安全性。" },
    { title: "Regex Pattern Builder", titleZh: "正则表达式构建", icon: "🔤", description: "Escape special regex characters like . * + ? in a literal string before using it inside a regular expression.", descriptionZh: "将字面字符串中的 . * + ? 等正则特殊字符转义后再用于正则表达式。" }
  ],
  "svg-to-png": [
{ title: "Cross-Browser Compat", titleZh: "跨浏览器兼容", icon: "🌐", description: "Convert SVG icons to PNG at 2x resolution for use in email templates that strip SVG elements.", descriptionZh: "将 SVG 图标以 2 倍分辨率转为 PNG，用于会移除 SVG 元素的邮件模板。" },
    { title: "Social Media Preview", titleZh: "社交媒体预览图", icon: "📱", description: "Export an SVG infographic as a 1200x630 PNG image for use as an Open Graph share preview on social media.", descriptionZh: "将 SVG 信息图导出为 1200x630 PNG，用作社交媒体的 Open Graph 分享预览图。" },
    { title: "Presentation Asset", titleZh: "演示文稿素材", icon: "📊", description: "Convert SVG diagrams to high-DPI PNG images for insertion into PowerPoint or Google Slides presentations.", descriptionZh: "将 SVG 图表转为高分辨率 PNG，插入 PowerPoint 或 Google Slides 演示文稿。" }
  ],
  "temperature-converter": [
{ title: "Cooking Recipe Adjust", titleZh: "食谱温度转换", icon: "🍳", description: "Convert 180°C to Fahrenheit when following a European baking recipe in an American kitchen with Fahrenheit oven.", descriptionZh: "在美国华氏烤箱中按欧式烘焙食谱时，将 180°C 转为华氏度。" },
    { title: "Weather Forecast Check", titleZh: "天气预报对比", icon: "🌤", description: "Convert 25°C to Fahrenheit to understand the weather forecast while traveling from Europe to the US.", descriptionZh: "从欧洲前往美国旅行时，将 25°C 转为华氏度理解天气预报。" },
    { title: "Science Lab Conversion", titleZh: "科学实验转换", icon: "🔬", description: "Convert 100 Kelvin to Celsius for a chemistry experiment requiring precise temperature measurements in SI units.", descriptionZh: "为需要精确 SI 单位温度测量的化学实验，将 100 开尔文转为摄氏度。" }
  ],
  "text-deduplicator": [
{ title: "Email List Cleanup", titleZh: "邮件列表清理", icon: "📧", description: "Remove duplicate email addresses from a newsletter subscriber list before sending a campaign to avoid double-sends.", descriptionZh: "在发送活动邮件前，去除简报订阅者列表中的重复邮箱地址，避免重复发送。" },
    { title: "CSV Data Import Prep", titleZh: "CSV 数据导入准备", icon: "📊", description: "Strip duplicate rows from a customer import CSV to prevent database unique constraint violations during migration.", descriptionZh: "去除客户导入 CSV 中的重复行，防止迁移时违反数据库唯一约束。" },
    { title: "Log File Dedup", titleZh: "日志文件去重", icon: "📋", description: "Filter out repeated error log entries from a large log file to focus on unique exceptions for debugging.", descriptionZh: "过滤大型日志文件中的重复错误条目，专注于唯一的异常进行调试。" }
  ],
  "text-diff-checker": [
{ title: "Code Review Helper", titleZh: "代码审查辅助", icon: "👨‍💻", description: "Paste two versions of a function to highlight exactly which lines changed between revisions.", descriptionZh: "粘贴函数的两个版本，高亮显示修订之间具体哪些行发生了变更。" },
    { title: "Document Version Compare", titleZh: "文档版本对比", icon: "📄", description: "Compare draft and final versions of a contract clause to verify no unauthorized edits were made.", descriptionZh: "比较合同条款的草稿和最终版本，验证没有未经授权的修改。" },
    { title: "Plagiarism Quick Check", titleZh: "抄袭快速检查", icon: "🔍", description: "Paste two student essay paragraphs side by side to spot identical phrasing and flag potential plagiarism.", descriptionZh: "将两篇学生论文段落并排粘贴，发现相同措辞并标记潜在的抄袭行为。" }
  ],
  "text-repeater": [
{ title: "Test Data Generation", titleZh: "测试数据生成", icon: "🧪", description: "Generate 100 lines of sample CSV data by repeating a template row with a counter to populate a test database.", descriptionZh: "用带计数器的模板行重复生成 100 行样本 CSV 数据，填充测试数据库。" },
    { title: "Pattern Design Mockup", titleZh: "图案设计模拟", icon: "🎨", description: "Repeat a text-based ASCII art pattern 20 times to preview how it looks as a tiled background design.", descriptionZh: "将基于文本的 ASCII 艺术图案重复 20 次，预览平铺背景设计效果。" },
    { title: "Form Field Testing", titleZh: "表单字段测试", icon: "📋", description: "Repeat a string 500 times to test a text input's maximum character limit and overflow behavior.", descriptionZh: "将字符串重复 500 次，测试文本输入框的最大字符限制和溢出行为。" }
  ],
  "text-reverser": [
{ title: "Debug Reversed Strings", titleZh: "调试反转字符串", icon: "🔍", description: "Reverse a garbled API response to see if the original text was simply sent backwards due to encoding issues.", descriptionZh: "反转乱码的 API 响应，查看原始文本是否因编码问题被反向发送。" },
    { title: "Ambigram Inspiration", titleZh: "双面字灵感", icon: "🔤", description: "Reverse a word to see if it spells another word backwards, generating ideas for ambigram tattoo designs.", descriptionZh: "反转单词查看是否倒拼为另一个词，为双面字纹身设计提供灵感。" },
    { title: "Palindrome Verification", titleZh: "回文验证辅助", icon: "🔄", description: "Reverse a sentence and compare it side by side with the original to visually confirm if it's a palindrome.", descriptionZh: "反转句子并与原文并排对比，直观确认是否为回文。" }
  ],
  "text-sorter": [
{ title: "List Organization", titleZh: "列表排序整理", icon: "📋", description: "Sort a grocery list alphabetically before heading to the store to shop more efficiently by aisle.", descriptionZh: "去超市前将购物清单按字母排序，按货架区域更高效地购物。" },
    { title: "CSV Row Sorting", titleZh: "CSV 行排序", icon: "📊", description: "Sort customer records alphabetically by last name before printing a directory report for a company event.", descriptionZh: "为公司活动打印名录报告前，按姓氏字母顺序对客户记录排序。" },
    { title: "Inventory List Ordering", titleZh: "库存清单排序", icon: "📦", description: "Sort an equipment inventory by serial number ascending to quickly locate items during a physical audit.", descriptionZh: "在实物盘点时将设备库存按序列号升序排列，快速定位物品。" }
  ],
  "text-statistics": [
{ title: "Essay Writing Analysis", titleZh: "文章写作分析", icon: "✍", description: "Check word count, sentence count, and average sentence length for a 500-word college admissions essay.", descriptionZh: "检查 500 字大学入学申请作文的字数、句子数和平均句长。" },
    { title: "SEO Content Optimization", titleZh: "SEO 内容优化", icon: "🔎", description: "Analyze keyword density and content length of a blog post to meet minimum word count for search rankings.", descriptionZh: "分析博客文章的关键词密度和内容长度，满足搜索引擎排名的最低字数要求。" },
    { title: "Readability Score Check", titleZh: "可读性评分检查", icon: "📖", description: "Count syllables, words, and sentences in a copy draft to calculate the Flesch Reading Ease score.", descriptionZh: "统计文案草稿的音节数、单词数和句子数，计算 Flesch 阅读易读性评分。" }
  ],
  "text-to-binary": [
{ title: "Learn ASCII Encoding", titleZh: "学习 ASCII 编码", icon: "🎓", description: "Convert your name to binary to see how each character is stored as 8 bits in computer memory.", descriptionZh: "将你的姓名转为二进制，查看每个字符在计算机内存中如何以 8 位存储。" },
    { title: "Data Transmission Demo", titleZh: "数据传输演示", icon: "📡", description: "Encode a short message as binary to demonstrate how data is transmitted over network protocols in bits.", descriptionZh: "将短消息编码为二进制，演示数据如何以比特形式通过网络协议传输。" },
    { title: "CTF Puzzle Solving", titleZh: "CTF 解题", icon: "🏴", description: "Decode binary-coded text from a capture-the-flag challenge to reveal the flag hidden in bit sequences.", descriptionZh: "解码 CTF 挑战中的二进制编码文本，揭示隐藏在比特序列中的旗帜信息。" }
  ],
  "text-to-slug": [
{ title: "Blog Permalink Creation", titleZh: "博客永久链接生成", icon: "🔗", description: "Convert a blog post title How to Install Node on Windows into an SEO-friendly URL slug for the CMS.", descriptionZh: "将博客标题 How to Install Node on Windows 转为 SEO 友好的 URL slug，用于 CMS。" },
    { title: "Product URL Generation", titleZh: "产品 URL 生成", icon: "🛒", description: "Generate clean product page URLs from product names for an e-commerce site's category and detail pages.", descriptionZh: "从产品名称为电商网站的分类和详情页生成干净的页面 URL。" },
    { title: "Category Path Normalization", titleZh: "分类路径标准化", icon: "📂", description: "Normalize category names like Web Development Tools into lowercase-hyphenated slugs for navigation breadcrumbs.", descriptionZh: "将 Web Development Tools 等分类名称标准化为小写连字符格式，用于导航面包屑。" }
  ],
  "timestamp-converter": [
{ title: "Debug Server Logs", titleZh: "调试服务器日志", icon: "🔍", description: "Convert a Unix timestamp like 1719843200 from server logs into a human-readable date to correlate with an incident.", descriptionZh: "将服务器日志中的 Unix 时间戳 1719843200 转为可读日期，关联故障时间点。" },
    { title: "API Response Timestamp", titleZh: "API 响应时间戳", icon: "📡", description: "Decode the created_at timestamp from a REST API response to verify the correct creation time of a resource.", descriptionZh: "解码 REST API 响应中的 created_at 时间戳，验证资源的正确创建时间。" },
    { title: "Timezone-Sensitive Scheduling", titleZh: "时区敏感排期", icon: "🌐", description: "Convert UTC timestamps from a cron job log to your local timezone to confirm scheduled tasks ran on time.", descriptionZh: "将 cron 作业日志中的 UTC 时间戳转为本地时区，确认定时任务准时运行。" }
  ],
  "timezone-converter": [
{ title: "Remote Meeting Scheduling", titleZh: "远程会议排期", icon: "🌍", description: "Find a meeting time that overlaps 9AM-5PM EST and 2PM-10PM CET for a distributed team sync across time zones.", descriptionZh: "寻找 EST 上午 9 点至下午 5 点与 CET 下午 2 点至晚 10 点的重叠时段，安排跨时区团队会议。" },
    { title: "Travel Itinerary Planning", titleZh: "旅行行程规划", icon: "✈", description: "Convert all flight departure and arrival times to local time when planning a multi-city trip across 3 countries.", descriptionZh: "规划跨越 3 个国家的多城市行程时，将所有航班起降时间转换为当地时间。" },
    { title: "International Deadline", titleZh: "国际截止日期确认", icon: "⏰", description: "Check what time a 5PM UTC submission deadline corresponds to for team members in Tokyo, London, and New York.", descriptionZh: "查看 UTC 下午 5 点的提交截止时间对应东京、伦敦和纽约团队成员各自的本地时间。" }
  ],
  "tip-calculator": [
{ title: "Restaurant Bill Split", titleZh: "餐厅账单分摊", icon: "🍽", description: "Calculate 18% tip on a $85.50 dinner and split the total evenly among 3 friends for a group dining out.", descriptionZh: "计算 $85.50 晚餐的 18% 小费，三人聚餐均分总费用。" },
    { title: "Group Travel Expenses", titleZh: "团体旅行费用", icon: "🧳", description: "Add a 10% service charge to a $340 hotel shuttle cost and split among 4 people for a shared airport transfer.", descriptionZh: "在 $340 酒店班车费上增加 10% 服务费，4 人均摊机场接送费用。" },
    { title: "Event Catering Tips", titleZh: "活动餐饮小费", icon: "🎉", description: "Calculate a 20% gratuity on an $1,200 corporate catering order and split it across the hosting department budget.", descriptionZh: "计算 $1,200 公司餐饮订单的 20% 小费，按主办部门预算分摊。" }
  ],
  "unicode-detector": [
{ title: "Hidden Character Detection", titleZh: "隐藏字符检测", icon: "🔍", description: "Identify invisible Unicode characters like zero-width spaces in copied text that cause parsing errors.", descriptionZh: "识别复制文本中导致解析错误的零宽空格等不可见 Unicode 字符。" },
    { title: "Encoding Debugging", titleZh: "编码问题调试", icon: "💻", description: "Inspect the Unicode codepoints of a string showing garbled characters to determine if it's UTF-8 or Latin-1 encoded.", descriptionZh: "检查乱码字符串的 Unicode 码点，确定其是 UTF-8 还是 Latin-1 编码。" },
    { title: "Text Validation Check", titleZh: "文本验证检查", icon: "✅", description: "Scan user submitted text for non-standard Unicode that could be used for homograph attacks or spam.", descriptionZh: "扫描用户提交的文本中的非标准 Unicode 字符，检测同形字攻击或垃圾信息风险。" }
  ],
  "weight-converter": [
{ title: "Fitness Weight Tracking", titleZh: "健身体重记录", icon: "💪", description: "Convert 75 kg to pounds when logging gym progress in a US fitness app that uses imperial units.", descriptionZh: "在使用英制单位的美国健身应用中记录进度时，将 75 kg 转为磅。" },
    { title: "Shipping Cost Calculation", titleZh: "运费计算", icon: "📦", description: "Convert a 2.5 kg package weight to pounds for a USPS international shipping quote calculator.", descriptionZh: "在 USPS 国际运费计算器中将 2.5 kg 包裹重量转为磅。" },
    { title: "Recipe Ingredient Scaling", titleZh: "食谱配料换算", icon: "🍳", description: "Convert 500 g of flour to ounces when following a European baking recipe using an American kitchen scale.", descriptionZh: "在美国厨房秤上按欧式烘焙食谱时，将 500 g 面粉转为盎司。" }
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
    { title: "Document Bugs and Demos", titleZh: "记录 Bug 和演示", icon: "🐛", description: "Capture screen recordings as GIF embeds for GitHub issues and README files.", descriptionZh: "将录屏捕获为 GIF，嵌入 GitHub issue 和 README 文件。" },
    { title: "Create Social Media GIFs", titleZh: "制作社交媒体 GIF", icon: "📱", description: "Convert video highlights into looping GIFs for Twitter, Reddit, and messaging apps.", descriptionZh: "将视频精华转换为循环 GIF，用于 Twitter、Reddit 和聊天应用。" },
    { title: "Support Ticket Visuals", titleZh: "支持工单可视化", icon: "🎞", description: "Shorten product demo clips into clear looping GIFs for help center articles and support tickets.", descriptionZh: "将产品演示短片转为清晰循环 GIF，用于帮助中心文章和支持工单。" },
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
