// English translations dictionary
export const en: Record<string, any> = {
  common: {
    copy: "Copy",
    copied: "Copied!",
    generate: "Generate",
    regenerate: "Regenerate",
    download: "Download",
    upload: "Upload",
    uploadFile: "Upload File",
    format: "Format",
    minify: "Minify",
    validate: "Validate",
    calculate: "Calculate",
    convert: "Convert",
    encode: "Encode",
    decode: "Decode",
    clear: "Clear",
    reset: "Reset",
    compress: "Compress",
    merge: "Merge",
    split: "Split",
    rotate: "Rotate",
    crop: "Crop",
    resize: "Resize",
    flip: "Flip",
    filter: "Filter",
    invert: "Invert",
    watermark: "Watermark",
    preview: "Preview",
    save: "Save",
    share: "Share",
    export: "Export",
    import: "Import",
    replace: "Replace",
    search: "Search",
    remove: "Remove",
    extract: "Extract",
    selectFile: "Select File",
    noFileSelected: "No file selected",
    result: "Result",
    error: "Error",
    success: "Success",
    loading: "Loading...",
    processing: "Processing...",
    done: "Done",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    input: "Input",
    output: "Output",
    length: "Length",
    strength: "Strength",
    quality: "Quality",
    width: "Width",
    height: "Height",
    size: "Size",
    file: "File",
    text: "Text",
    value: "Value",
    type: "Type",
    unit: "Unit",
    from: "From",
    to: "To",
    options: "Options",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    veryWeak: "Very Weak",
    veryStrong: "Very Strong",
    seconds: "seconds",
    minutes: "minutes",
    hours: "hours",
    days: "days",
    yes: "Yes",
    no: "No",
    on: "On",
    off: "Off",
    all: "All",
    none: "None",
    clickToCopy: "Click to copy",
    pasted: "Pasted",
    or: "or",
    and: "and",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    close: "Close",
    back: "Back",
    next: "Next",
    submit: "Submit",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    removeFile: "Remove File",
  },

  // Navigation & Categories
  nav: {
    blog: "Blog",
    about: "About",
    contact: "Contact",
    allTools: "All Tools",
  },

  categories: {
    developer: "Developer Tools",
    text: "Text Tools",
    image: "Image Tools",
    pdf: "PDF Tools",
    audio: "Audio Tools",
    network: "Network Tools",
    conversion: "Converters",
    utilities: "Utilities",
      "Security": "Security",
      "Conversion Tools": "Conversion Tools",
      "Conversion": "Conversion",
  },

  // Search / Filter
  search: {
    placeholder: "Search any tool...",
    noResults: "No tools found",
    noResultsInCategory: "No tools found in this category.",
    trending: "Trending",
    allCategories: "All",
  },

  // Tool Widget (privacy badge)
  toolWidget: {
    privacyNote: "Processing on your device — files never leave your browser",
  },

  // Footer
  footer: {
    tools: "Tools",
    moreTools: "More Tools",
    company: "Company",
    about: "About",
    contact: "Contact",
    blog: "Blog",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "All rights reserved.",
    tagline: "Free online tools. Privacy first.",
    taglineDetail: "No signup required. Files stay on your device.",
  },

  // Language Switcher
  locale: {
    switchTo: "中文",
    language: "Language",
    en: "English",
    zh: "中文",
  },

  // Cookie Banner
  cookie: {
    text: "This site uses cookies from Google to deliver its services and analyze traffic. Your data will not be used for personalized advertising without your consent.",
    learnMore: "Learn more",
    accept: "Accept",
    decline: "Decline",
  },

  // Home Page
  home: {
    heroTitle: "Free Online Tools.",
    heroTagline: "Privacy First.",
    heroDesc: "{count}+ tools for developers, designers, and everyday tasks. No signup. No upload. Files stay on your device.",
    whyTitle: "Why ToolboxPro?",
    whyItems: [
      { title: "No Signup", desc: "Just open and use" },
      { title: "Privacy First", desc: "Files stay on your device" },
      { title: "No Limits", desc: "Unlimited free usage" },
      { title: "AI Enhanced", desc: "Smarter tools" },
    ],
    latestBlog: "Latest from Blog",
    viewAll: "View all →",
    allTools: "All Tools",
    allToolsDesc: "{count} free online tools. No signup required.",
    toolCount: "{count} tool",
    toolCountPlural: "{count} tools",
  },

  // About Page
  about: {
    title: "About ToolboxPro",
    metaTitle: "About Us",
    metaDesc: "Learn about ToolboxPro — free online tools with privacy first",
    paragraph1: "ToolboxPro is a free online toolbox offering {count}+ utilities for developers, designers, writers, and everyday users. Our mission is simple: provide fast, reliable tools that respect your privacy.",
    paragraph2: "Unlike many online tools, we process everything directly in your browser using WebAssembly. Your files never leave your device. No servers, no cloud, no data leaks.",
    paragraph3: "Built by developers for developers and anyone who needs a quick tool without the hassle of signups, limits, or watermarks.",
    principlesTitle: "Our Principles",
    principles: [
      "<strong>Privacy by design</strong> — processing happens on your device",
      "<strong>Zero friction</strong> — no accounts, no payments, no limits",
      "<strong>Speed matters</strong> — every tool loads in under a second",
      "<strong>Always improving</strong> — new tools and features added regularly",
    ],
  },

  // Contact Page
  contact: {
    title: "Contact Us",
    metaTitle: "Contact Us",
    metaDesc: "Get in touch with the ToolboxPro team",
    intro: "Have a suggestion, found a bug, or want to partner with us? We'd love to hear from you.",
    generalInquiries: "General Inquiries",
    generalInquiriesDesc: "For questions, suggestions, or feedback about our tools",
    reportBug: "Report a Bug",
    reportBugDesc: "Found something not working? Let us know which tool and what happened",
    advertising: "Advertising & Partnerships",
    advertisingDesc: "Interested in advertising on ToolboxPro or partnership opportunities",
  },

  // Privacy Page
  privacy: {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy",
    lastUpdated: "Last updated:",
    section1Title: "1. Data Processing",
    section1Body: "ToolboxPro processes all data locally in your browser. When you use our tools (JSON formatter, image compressor, PDF merger, etc.), your files are processed using WebAssembly or JavaScript on your own device. No file data is transmitted to our servers.",
    section2Title: "2. Information We Collect",
    section2Body: "We use Google Analytics to collect anonymous usage data: page views, tool usage frequency, browser type, and approximate location (country level). This data helps us improve our tools and understand usage patterns.",
    section2NoCollect: "We do <strong>not</strong> collect, store, or transmit:",
    section2NoCollectItems: [
      "Your uploaded files or their contents",
      "Personal identification information",
      "Login credentials (we have no user accounts)",
    ],
    section3Title: "3. Cookies & Advertising",
    section3Body1: "We use cookies and similar technologies to enhance your experience and serve personalized advertisements. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website and other websites.",
    section3Adsense: "Google AdSense Cookies",
    section3Body2: 'Google uses the <strong>DoubleClick cookie</strong> to enable it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google\'s Ad Settings</a>.',
    section3Body3: "You can also opt out of third-party vendor cookies by visiting <a href=\"https://optout.networkadvertising.org\" className=\"text-primary hover:underline\" target=\"_blank\" rel=\"noopener noreferrer\">Network Advertising Initiative opt-out page</a>.",
    section4Title: "4. Third-Party Services",
    section4Body: "We use the following third-party services:",
    section4GoogleAnalytics: "<strong>Google Analytics</strong> — anonymized usage tracking (GDPR compliant, IP anonymized)",
    section4AdSense: "<strong>Google AdSense</strong> — advertising (uses cookies)",
    section4Vercel: "<strong>Vercel</strong> — hosting and CDN (standard server logs)",
    section5Title: "5. Your Rights",
    section5Body: "Depending on your location, you may have the following rights:",
    section5Items: [
      "Right to access your data",
      "Right to delete your data",
      "Right to restrict processing",
      "Right to data portability",
      "Right to object to processing",
    ],
    section5Contact: "To exercise these rights, contact us at hyehugh520@gmail.com.",
    section6Title: "6. Changes to This Policy",
    section6Body: "We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.",
    section7Title: "7. Contact",
    section7Body: 'If you have any questions about this policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.',
  },

  // Terms Page
  terms: {
    title: "Terms of Service",
    metaTitle: "Terms of Service",
    lastUpdated: "Last updated:",
    section1Title: "1. Acceptance",
    section1Body: "By using ToolboxPro, you agree to these terms. If you do not agree, do not use the service.",
    section2Title: "2. Service Description",
    section2Body: 'ToolboxPro provides free online tools for file conversion, image processing, text manipulation, and other utilities. All tools are provided "as is" without warranty.',
    section3Title: "3. Acceptable Use",
    section3Body: "You agree not to:",
    section3Items: [
      "Use the service for illegal purposes",
      "Attempt to reverse engineer or abuse the service",
      "Upload malicious files or content",
      "Generate automated traffic or abuse the platform",
    ],
    section4Title: "4. Disclaimer",
    section4Body: "ToolboxPro is provided free of charge. We make no warranties about the accuracy, reliability, or availability of the service. We are not liable for any damages arising from use of our tools.",
    section5Title: "5. Changes",
    section5Body: "We may update these terms at any time. Continued use after changes constitutes acceptance of the new terms.",
  },

  // Blog Page
  blog: {
    title: "Blog",
    metaTitle: "Blog",
    metaDesc: "Learn how to use online tools effectively. Tutorials, guides, and tips for developers, designers, and everyday users.",
    subtitle: "Tutorials, guides, and tips for getting the most out of online tools.",
    relatedTools: "Related Tools",
    relatedArticles: "Related Articles",
    categories: {
      "Developer Tools": "Developer Tools",
      "Image Tools": "Image Tools",
      "Comparison": "Comparison",
      "Security": "Security",
      "Conversion Tools": "Conversion Tools",
      "Conversion": "Conversion",
      "Network Tools": "Network Tools",
      "PDF Tools": "PDF Tools",
      "Text Tools": "Text Tools",
      "Utilities": "Utilities",
      "Productivity": "Productivity",
      "Design": "Design",
    },
    minRead: "{count} min read",
    tryIt: "Try it yourself with our free online tool:",
    tryTool: "Try",
  },

  // Tools Page
  tools: {
    title: "All Tools",
    metaTitle: "All Tools",
    metaDesc: "Browse all free online tools: developer tools, PDF tools, image tools, text tools, and conversion tools.",
    subtitle: "{count} free online tools. No signup required.",
  },

  // Not Found Page
  notFound: {
    title: "Page Not Found",
    message: "Sorry, the page you're looking for doesn't exist.",
    backHome: "Back to Home",
  },

  // Tool-specific common UI strings (used across multiple tools)
  toolCommon: {
    // Password Generator
    password: {
      title: "Password Generator",
      uppercase: "Uppercase (A-Z)",
      lowercase: "Lowercase (a-z)",
      numbers: "Numbers (0-9)",
      symbols: "Symbols (!@#)",
      strength: "Strength",
      generatePassword: "Generate Password",
    },
    // JSON tools
    json: {
      placeholder: "Paste your JSON here...",
      treeView: "Tree View",
      rawView: "Raw View",
      validJson: "✓ Valid JSON",
    },
    // Image tools
    image: {
      quality: "Quality",
      original: "Original",
      compressed: "Compressed",
      preview: "Preview",
      dropImage: "Drop an image here or click to upload",
      supportedFormats: "Supports JPG, PNG, WebP, AVIF, GIF",
      newImage: "New Image",
      compressing: "Compressing...",
      smaller: "smaller",
      loadFailed: "Failed to load image",
    },
    // Unit converters
    converter: {
      value: "Value",
      result: "Result",
    },
    // PDF tools
    pdf: {
      addFiles: "Add Files",
      mergedSuccess: "PDFs merged successfully!",
      splitSuccess: "PDF split successfully!",
    },
    // QR code
    qr: {
      content: "Content",
      foreground: "Foreground Color",
      background: "Background Color",
      generateQR: "Generate QR Code",
    },
    // Text counter
    wordCounter: {
      words: "Words",
      characters: "Characters",
      charactersNoSpaces: "Characters (no spaces)",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      readingTime: "Reading Time",
      speakingTime: "Speaking Time",
      topKeywords: "Top keywords",
      minute: "min",
      placeholder: "Type or paste your text here...",
    },
    // Case converter
    caseConverter: {
      uppercase: "UPPERCASE",
      lowercase: "lowercase",
      titleCase: "Title Case",
      camelCase: "camelCase",
      pascalCase: "PascalCase",
      snakeCase: "snake_case",
      kebabCase: "kebab-case",
      sentence: "Sentence case",
    },
    // Timestamp
    timestamp: {
      current: "Current Timestamp",
      unixSeconds: "Unix Seconds",
      unixMs: "Unix Milliseconds",
      isoDate: "ISO Date",
      utcDate: "UTC Date",
      localeDate: "Locale Date",
      toDate: "Convert to Date",
      toTimestamp: "Convert to Timestamp",
    },
    // Color
    color: {
      hex: "HEX",
      rgb: "RGB",
      hsl: "HSL",
      cmyk: "CMYK",
      preview: "Color Preview",
      palettes: "Color Palettes",
      similarColors: "Similar Colors",
      complementary: "Complementary",
      contrast: "Contrast",
      history: "History",
    },
    // BMI
    bmi: {
      height: "Height (cm)",
      weight: "Weight (kg)",
      bmi: "BMI",
      category: "Category",
      underweight: "Underweight",
      normal: "Normal",
      overweight: "Overweight",
      obese: "Obese",
      heightPlaceholder: "e.g. 175",
      weightPlaceholder: "e.g. 70",
    },
    // Base64
    base64: {
      encode: "Encode to Base64",
      decode: "Decode from Base64",
      dropFile: "Drop a file or click to upload",
      stringMode: "String",
      fileMode: "File",
    },
    // Regex
    regex: {
      pattern: "Pattern",
      flags: "Flags",
      testString: "Test String",
      matches: "Matches",
      noMatch: "No match found",
      matchCount: "{count} match(es) found",
    },
    // UUID
    uuid: {
      generate: "Generate UUID",
      v4: "UUID v4",
      v1: "UUID v1",
      count: "Count",
    },
    // Hash
    hash: {
      generate: "Generate Hash",
      text: "Text to Hash",
      algorithm: "Algorithm",
    },
    // Number base
    numberBase: {
      decimal: "Decimal",
      binary: "Binary",
      octal: "Octal",
      hexadecimal: "Hexadecimal",
    },
    // Lorem Ipsum
    loremIpsum: {
      generate: "Generate Lorem Ipsum",
      paragraphs: "Paragraphs",
      sentences: "Sentences",
      words: "Words",
      type: "Type",
    },
    // Text Diff
    textDiff: {
      original: "Original Text",
      modified: "Modified Text",
      additions: "Additions",
      deletions: "Deletions",
    },
    // URL Encode
    url: {
      encode: "Encode URL",
      decode: "Decode URL",
    },
    // Text Reverse
    textReverse: {
      reverseText: "Reverse Text",
      reverseWords: "Reverse Words",
    },
    // Text Sort
    textSort: {
      sortAsc: "Sort A-Z",
      sortDesc: "Sort Z-A",
      removeDuplicates: "Remove Duplicates",
    },
    // Word Counter
    wordCount: {
      countWords: "Count Words",
      wordCountDesc: "Count words, characters, sentences, and paragraphs",
    },
    // Timezone
    timezone: {
      currentTime: "Current Time",
      utcOffset: "UTC Offset",
      dst: "Daylight Saving Time",
      title: "Timezone Converter",
      description: "Convert from the current time to another.",
    },
    // HTML entities
    htmlEntities: {
      encode: "Encode HTML",
      decode: "Decode HTML",
      decodePlaceholder: "Paste HTML entities here...",
      encodePlaceholder: "Paste text to encode as HTML entities...",
    },
    // JWT
    jwt: {
      header: "Header",
      payload: "Payload",
      verify: "Verify Signature",
      token: "Token",
      generatedJwt: "Generated JWT",
      generatorInvalidJson: "Invalid JSON for header/payload",
      invalidBase64: "Invalid Base64 encoding",
      invalidFormat: "Invalid JWT format",
      invalidJson: "Invalid JSON",
      secretKey: "Secret Key",
      signatureNote: "Note: Signature is for demonstration only",
    },
    // Cron
    cron: {
      expression: "Cron Expression",
      nextRuns: "Next Runs",
      description: "Description",
      parse: "Parse",
    },
    // CSS
    css: {
      gradient: "CSS Gradient",
      shadow: "Box Shadow",
      minify: "Minify CSS",
      color1: "Color 1",
      color2: "Color 2",
      direction: "Direction",
      angle: "Angle",
      shadowBlur: "Blur",
      shadowOffsetX: "Offset X",
      shadowOffsetY: "Offset Y",
      shadowSpread: "Spread",
    },
    // Image filters
    imageFilter: {
      brightness: "Brightness",
      contrast: "Contrast",
      saturation: "Saturation",
      sepia: "Sepia",
      blur: "Blur",
      grayscale: "Grayscale",
      hueRotate: "Hue Rotate",
      applyFilter: "Apply Filter",
      filteredResult: "Filtered Result",
      selectFilter: "Select a filter",
    },
    // Image resize
    imageResize: {
      maintainAspect: "Maintain Aspect Ratio",
      percentage: "Percentage",
      pixels: "Pixels",
    },
    // QR Reader
    qrReader: {
      uploadQR: "Upload QR Code Image",
      scanResult: "Scan Result",
    },
    // Barcode
    barcode: {
      generateBarcode: "Generate Barcode",
      barcodeType: "Barcode Type",
      data: "Data",
      width: "Width",
      height: "Height",
      errorEan13: "EAN-13 needs 12 digits (the 13th check digit is auto-calculated). You entered {n}.",
      errorUpca: "UPC-A needs 11 digits (the 12th check digit is auto-calculated). You entered {n}.",
      errorCode39: "Code 39 only supports A-Z, 0-9, and the symbols - . $ / + % space.",
      errorCode128: "Code 128 only supports standard ASCII characters (codes 32-126).",
      errorQr: "Could not generate the QR code. Please try different content.",
    },
    // CSV
    csv: {
      separator: "Separator",
      hasHeader: "Has Header Row",
      rows: "Rows",
      columns: "Columns",
    },
    // Audio
    audio: {
      convertTo: "Convert to",
      cutFrom: "Cut from",
      cutTo: "Cut to",
      addFiles: "Add Audio Files",
      mergeOrder: "Merge Order",
      minFiles: "Minimum {count} files required",
      moveDown: "Move Down",
      sampleRate: "Sample Rate (Hz)",
      moveUp: "Move Up",
      tracks: "Tracks",
    },
    // Color Blindness
    colorBlind: {
      original: "Original View",
      protanopia: "Protanopia (Red-Blind)",
      deuteranopia: "Deuteranopia (Green-Blind)",
      tritanopia: "Tritanopia (Blue-Blind)",
      achromatopsia: "Achromatopsia (Full)",
      simulate: "Simulate",
      description: "Color Blindness Simulator",
    },
    // Age Calculator
    age: {
      birthDate: "Date of Birth",
      age: "Age",
      years: "Years",
      months: "Months",
      days: "Days",
      nextBirthday: "Next Birthday",
    },
    // Countdown
    countdown: {
      targetDate: "Target Date",
      daysLeft: "Days",
      hoursLeft: "Hours",
      minutesLeft: "Minutes",
      secondsLeft: "Seconds",
      expired: "Time's up!",
      reset: "Reset",
      start: "Start",
      stop: "Stop",
      time: "Time",
    },
    // Palindrome
    palindrome: {
      check: "Check Palindrome",
      isPalindrome: "Yes, it's a palindrome!",
      notPalindrome: "No, it's not a palindrome.",
    },
    // Morse Code
    morseCode: {
      encode: "Text to Morse",
      decode: "Morse to Text",
    },
    // Caesar Cipher
    caesar: {
      shift: "Shift",
      encrypt: "Encrypt",
      decrypt: "Decrypt",
      caesar: "Caesar Cipher",
    },
    // Random
    random: {
      generateNumbers: "Generate Numbers",
      generateString: "Generate String",
      min: "Min",
      max: "Max",
      count: "Count",
      stringLength: "String Length",
      includeNumbers: "Include Numbers",
      includeLetters: "Include Letters",
      includeSymbols: "Include Symbols",
    },
    // ASCII / Binary / Text
    binary: {
      textToBinary: "Text to Binary",
      binaryToText: "Binary to Text",
    },
    // Temperature
    temperature: {
      celsius: "Celsius",
      fahrenheit: "Fahrenheit",
      kelvin: "Kelvin",
    },
    // Data Size
    dataSize: {
      bits: "Bits",
      bytes: "Bytes",
      kb: "KB",
      mb: "MB",
      gb: "GB",
      tb: "TB",
    },
    // Days Between
    daysBetween: {
      from: "From Date",
      to: "To Date",
      days: "Days Between",
      hours: "Hours",
      minutes: "Minutes",
      months: "Months",
      today: "Today",
      weekdays: "Weekdays",
      weekends: "Weekends",
      weeks: "Weeks",
      years: "Years",
    },
    // Percentage
    percentage: {
      whatIs: "What is X% of Y?",
      whatPercent: "X is what % of Y?",
      percentChange: "Percent Change",
    },
    // Tip Calculator
    tip: {
      billAmount: "Bill Amount",
      tipPercent: "Tip %",
      split: "Split",
      tipAmount: "Tip Amount",
      total: "Total",
      perPerson: "Per Person",
    },
    // Decision Maker
    decision: {
      ask: "Ask the Universe",
      question: "Your Question",
      answer: "Answer",
      minOptions: "Please enter at least 2 options",
      options: "Options (one per line)",
      picking: "Picking...",
      placeholder: "Enter your options, one per line",
    },
    // Dice
    dice: {
      roll: "Roll Dice",
      sides: "Sides",
      count: "Dice Count",
    },
    // IP Calculator
    ipCalc: {
      ipAddress: "IP Address",
      subnetMask: "Subnet Mask",
      networkAddress: "Network Address",
      broadcast: "Broadcast",
      usableHosts: "Usable Hosts",
      firstHost: "First Host",
      lastHost: "Last Host",
      cidrHint: "Enter IP in CIDR notation (e.g. 192.168.1.0/24)",
      cidrRange: "CIDR Range",
      enterIp: "Enter an IP address with CIDR (e.g. 192.168.1.0/24)",
      hostRange: "Host Range",
      invalidFormat: "Invalid IP format",
      octetRange: "Each octet must be 0-255",
      totalHosts: "Total Hosts",
    },
    // WHOIS
    whois: {
      domain: "Domain Name",
      lookup: "Lookup",
      registrar: "Registrar",
      created: "Created",
      expires: "Expires",
    },
    // DNS
    dns: {
      domain: "Domain",
      lookup: "DNS Lookup",
      recordType: "Record Type",
      ipv4: "A (IPv4)",
      ipv6: "AAAA (IPv6)",
      mx: "MX (Mail)",
      cname: "CNAME",
      ns: "NS (Nameserver)",
      txt: "TXT",
      recordsFound: "{count} record(s) found",
      noRecords: "No records found",
      timeout: "Request timed out",
    },
    // HTTP Status
    httpStatus: {
      search: "Search Status Code",
      all: "All Codes",
      noResults: "No status codes match \"{search}\"",
      showing: "Showing {count} of {total}",
      code: "Code",
      description: "Description",
      name: "Name",
      title: "HTTP Status Codes",
    },
    // Text Statistics
    textStats: {
      analyze: "Analyze Text",
      stats: "Statistics",
      longestWord: "Longest Word",
      shortestWord: "Shortest Word",
      averageWordLength: "Avg Word Length",
      placeholder: "Paste or type your text here...",
      characters: "Characters",
      noSpaces: "No Spaces",
      cjkChars: "CJK Characters",
      letters: "Letters",
      digits: "Digits",
      specialChars: "Special Characters",
      spaces: "Spaces",
      vowels: "Vowels",
      consonants: "Consonants",
      vcRatio: "V/C Ratio",
      totalWords: "Total Words",
      uniqueWords: "Unique Words",
      avgLength: "Avg Length",
      topWordsCJK: "Top Words (CJK)",
      structure: "Structure",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      lines: "Lines",
      enterToAnalyze: "Enter text to start analysis",
    },
    // Slug
    slug: {
      generate: "Generate Slug",
      slug: "Slug",
    },
    // Duplicate Remover
    deduplicate: {
      removeDuplicates: "Remove Duplicates",
      caseSensitive: "Case Sensitive",
      linesFound: "Lines Found",
      uniqueLines: "Unique Lines",
      duplicatesRemoved: "Duplicates Removed",
    },
    // SQL Formatter
    sql: {
      format: "Format SQL",
      minify: "Minify SQL",
    },
    // Color Palette
    colorPalette: {
      generatePalette: "Generate Palette",
      baseColor: "Base Color",
      count: "Number of Colors",
      analogous: "Analogous",
      complementary: "Complementary",
      monochromatic: "Monochromatic",
      triadic: "Triadic",
    },
    // Meme Generator
    meme: {
      topText: "Top Text",
      bottomText: "Bottom Text",
      generate: "Generate Meme",
    },
    // Audio Cutter
    audioCutter: {
      upload: "Upload Audio",
      trim: "Trim Audio",
      startTime: "Start (s)",
      endTime: "End (s)",
    },
    // Image to Sketch
    imageToSketch: {
      convert: "Convert to Sketch",
      invertColors: "Invert Colors",
      description: "Convert your photo into a pencil sketch drawing",
      newImage: "New Image",
      sketchResult: "Sketch Result",
      supportedFormats: "Supports JPG, PNG, WebP, GIF",
      uploadPrompt: "Drop an image or click to upload",
    },
    // Image Border
    imageBorder: {
      borderWidth: "Border Width",
      borderRadius: "Border Radius",
      borderColor: "Border Color",
      applyBorder: "Apply Border",
      borderStyle: "Border Style",
      description: "Add borders and frames to your images",
      supportedFormats: "Supports JPG, PNG, WebP, GIF",
    },
    // Image Merge
    imageMerge: {
      direction: "Direction",
      horizontal: "Horizontal",
      vertical: "Vertical",
    },
    // Image Split
    imageSplit: {
      rows: "Rows",
      columns: "Columns",
    },
    // Image Collage
    imageCollage: {
      layout: "Layout",
      gap: "Gap",
    },
    // Image to PDF
    imageToPdf: {
      pageSize: "Page Size",
      margin: "Margin",
      orientation: "Orientation",
      portrait: "Portrait",
      landscape: "Landscape",
      a4: "A4",
      letter: "Letter",
    },
    // Markdown to HTML
    markdown: {
      convert: "Convert to HTML",
      preview: "Preview",
      description: "Convert Markdown to HTML in real-time",
      htmlSource: "HTML Source",
      input: "Markdown Input",
      title: "Markdown to HTML",
    },
    // HTML to JSX
    htmlToJsx: {
      convert: "Convert to JSX",
      placeholder: "Paste HTML code here...",
    },
    // JSON to TypeScript
    jsonToTs: {
      rootName: "Root Name",
      convert: "Convert to TypeScript",
      copyInterface: "Copy Interface",
      failed: "Failed to convert",
      invalidJson: "Invalid JSON input",
      pasteJson: "Paste your JSON here...",
      typeScriptInterface: "TypeScript Interface",
    },
    // JSON Diff
    jsonDiff: {
      left: "Left JSON",
      right: "Right JSON",
      compare: "Compare",
      added: "Added",
      changed: "Changed",
      compareFailed: "Failed to compare JSON",
      description: "Compare two JSON objects side by side",
      differences: "Differences",
      identical: "JSON objects are identical",
      invalidJson: "Invalid JSON",
      newValue: "New Value",
      noDifferences: "No differences found",
      oldValue: "Old Value",
      removed: "Removed",
      status: "Status",
      title: "JSON Diff",
      total: "Total",
    },
    // Text to Slug
    textToSlug: {
      input: "Text to Slugify",
    },
    // HTML Tag Stripper
    htmlStrip: {
      strip: "Strip HTML Tags",
      stripped: "Stripped Text",
      htmlInput: "Paste HTML here...",
    },
    // String Escaper
    stringEscape: {
      escape: "Escape String",
      unescape: "Unescape String",
    },
    // Gif Maker
    gifMaker: {
      addImages: "Add Images",
      delay: "Delay (ms)",
      create: "Create GIF",
      width: "Width (px)",
      generatedGif: "Generated GIF",
      minImages: "Please add at least 2 images",
      previewAnimation: "Preview Animation",
      stopPreview: "Stop Preview",
    },
    // Aspect Ratio
    aspectRatio: {
      original: "Original",
      target: "Target",
      calculate: "Calculate Aspect Ratio",
      width: "Width",
      height: "Height",
    },
    // Speed Converter
    speed: {
      kmh: "km/h",
      mph: "mph",
      knots: "Knots",
      ms: "m/s",
    },
    // Area Converter
    area: {
      sqm: "Square Meters",
      sqkm: "Square Kilometers",
      sqft: "Square Feet",
      sqyd: "Square Yards",
      acres: "Acres",
      hectares: "Hectares",
    },
    // Length Converter
    length: {
      mm: "Millimeters",
      cm: "Centimeters",
      m: "Meters",
      km: "Kilometers",
      inches: "Inches",
      feet: "Feet",
      yards: "Yards",
      miles: "Miles",
      enterValue: "Enter a value",
    },
    // Weight Converter
    weight: {
      mg: "Milligrams",
      g: "Grams",
      kg: "Kilograms",
      ton: "Metric Tons",
      oz: "Ounces",
      lb: "Pounds",
      stone: "Stones",
    },
    // Random Number
    randomNumber: {
      generate: "Generate Random Number",
    },
    // Roman Numeral
    romanNumeral: {
      toRoman: "Convert to Roman",
      toNumber: "Convert to Number",
    },
    // Emoji Remover
    emojiRemover: {
      remove: "Remove Emojis",
      result: "Text without Emojis",
      description: "Remove all emoji characters from your text",
      placeholder: "Paste text with emojis here...",
    },
    // Unicode Detector
    unicode: {
      detect: "Detect Unicode Characters",
      codepoint: "Code Point",
      character: "Character",
      category: "Category",
    },
    // Online Notepad
    notepad: {
      title: "Online Notepad",
      saved: "Saved!",
      wordCount: "Words",
      charCount: "Chars",
      autosave: "Auto-saves in browser",
    },
    // SVG to PNG
    svgToPng: {
      convert: "Convert SVG to PNG",
      scale: "Scale",
    },
    // Text Repeater
    textRepeater: {
      repeatCount: "Repeat Count",
      repeat: "Repeat Text",
      separator: "Separator",
      newLine: "New line",
      comma: "Comma (,)",
      commaSpace: "Comma + space",
      space: "Space",
      none: "None",
    },
    // Binary to Text
    binaryToText: {
      decode: "Binary to Text",
      encode: "Text to Binary",
    },
    // Color Picker
    colorPicker: {
      pickColor: "Pick a Color",
      hexInput: "HEX Input",
      clickInstruction: "Click on the image to pick a color",
      clickSwatch: "Click a swatch to copy",
    },
    // PDF Page Remover
    pdfPageRemover: {
      selectPages: "Select Pages to Remove",
      totalPages: "Total Pages",
      removeSelected: "Remove Selected",
    },
    // PDF Rotator
    pdfRotator: {
      rotate: "Rotate PDF",
      angle: "Angle",
      clockwise90: "90° Clockwise",
      counterclockwise90: "90° Counterclockwise",
      rotate180: "180°",
    },
    // PDF Splitter
    pdfSplitter: {
      split: "Split PDF",
      pagesPerFile: "Pages per File",
    },
    // Temperature Converter label
    temperatureConverter: {
      label: "Temperature Converter",
    },
    // Case Converter label
    caseConverterLabel: {
      label: "Case Converter",
    },
    // Binary to Text label
    binaryToTextLabel: {
      label: "Binary ⇄ Text",
    },
    // Emoji Remover label
    emojiRemoverLabel: {
      label: "Emoji Remover",
    },
    // HTML Preview
    htmlPreview: {
      code: "HTML Code",
      livePreview: "Live Preview",
      template: "Template",
    },
    // JSON to YAML
    jsonToYaml: {
      invalidJson: "Invalid JSON input",
      invalidYaml: "Invalid YAML input",
      jsonInput: "JSON Input",
      jsonOutput: "JSON Output",
      yamlInput: "YAML Input",
      yamlOutput: "YAML Output",
    },
    // Image Watermark
    imageWatermark: {
      description: "Add text watermarks to your images",
      newImage: "New Image",
      position: "Position",
      supportedFormats: "Supports JPG, PNG, WebP, GIF",
      uploadPrompt: "Drop an image or click to upload",
      watermarkPlaceholder: "Enter watermark text...",
    },
    // Watermark positions
    watermark: {
      bottomLeft: "Bottom Left",
      bottomRight: "Bottom Right",
      center: "Center",
      topLeft: "Top Left",
      topRight: "Top Right",
    },
  },

  // Tool names and descriptions for listing pages
  toolList: {
    "json-formatter": { name: "JSON Formatter & Validator", desc: "Format, validate, and beautify JSON in seconds" },
    "base64-encode-decode": { name: "Base64 Encoder/Decoder", desc: "Encode text or files to Base64 and decode back" },
    "regex-tester": { name: "Regex Tester", desc: "Test regular expressions with real-time highlighting" },
    "color-converter": { name: "Color Converter", desc: "Convert between HEX, RGB, HSL, and more" },
    "url-encoder-decoder": { name: "URL Encoder/Decoder", desc: "Encode and decode URL components instantly" },
    "uuid-generator": { name: "UUID Generator", desc: "Generate random UUIDs v4 for unique identifiers" },
    "password-generator": { name: "Password Generator", desc: "Create strong, secure passwords with custom options" },
    "hash-generator": { name: "Hash Generator", desc: "Generate SHA-256, SHA-384, SHA-512 hashes" },
    "timestamp-converter": { name: "Timestamp Converter", desc: "Convert between Unix timestamps and human-readable dates" },
    "number-base-converter": { name: "Number Base Converter", desc: "Convert between binary, octal, decimal, and hexadecimal" },
    "image-compressor": { name: "Image Compressor", desc: "Compress images without losing quality" },
    "image-converter": { name: "Image Format Converter", desc: "Convert images between JPG, PNG, WebP, and more" },
    "pdf-merger": { name: "PDF Merger", desc: "Merge multiple PDFs into one document" },
    "word-counter": { name: "Word & Character Counter", desc: "Count words, characters, sentences, and reading time" },
    "case-converter": { name: "Text Case Converter", desc: "Convert text between UPPER, lower, Title, camelCase and more" },
    "lorem-ipsum-generator": { name: "Lorem Ipsum Generator", desc: "Generate placeholder text for mockups and designs" },
    "text-diff-checker": { name: "Text Diff Checker", desc: "Compare two texts and highlight the differences" },
    "text-repeater": { name: "Text Repeater", desc: "Repeat text multiple times with custom separators" },
    "html-entity-converter": { name: "HTML Entity Converter", desc: "Encode and decode HTML entities like &amp; and &lt;" },
    "css-minifier": { name: "CSS Minifier", desc: "Minify and compress CSS code to reduce file size" },
    "sql-formatter": { name: "SQL Formatter", desc: "Format and beautify SQL queries for better readability" },
    "json-to-yaml": { name: "JSON to YAML Converter", desc: "Convert JSON data to YAML format and vice versa" },
    "string-escaper": { name: "String Escaper/Unescaper", desc: "Escape and unescape special characters in strings" },
    "html-tag-stripper": { name: "HTML Tag Stripper", desc: "Remove all HTML tags from text, keeping only content" },
    "jwt-decoder": { name: "JWT Decoder", desc: "Decode JWT tokens and inspect header, payload, and signature" },
    "cron-parser": { name: "Cron Expression Parser", desc: "Parse cron expressions and get human-readable schedules" },
    "text-to-binary": { name: "Text to Binary Converter", desc: "Convert text to binary code and binary back to text" },
    "html-preview": { name: "HTML Preview", desc: "Write and preview HTML code in real-time in a sandbox" },
    "csv-viewer": { name: "CSV Viewer & Formatter", desc: "View CSV data in a formatted table with auto-detection" },
    "csv-visualizer": { name: "CSV Data Visualizer", desc: "Visualize CSV and Excel data with charts" },
    "ip-calculator": { name: "IP Subnet Calculator", desc: "Calculate network subnet, CIDR, broadcast, and host range" },
    "jwt-generator": { name: "JWT Generator", desc: "Generate JWT tokens with custom header and payload" },
    "text-to-slug": { name: "Text to URL Slug", desc: "Convert text into clean, SEO-friendly URL slugs" },
    "text-sorter": { name: "Text Sorter", desc: "Sort lines alphabetically, reverse, or by length" },
    "text-deduplicator": { name: "Line Deduplicator", desc: "Remove duplicate lines from text while preserving order" },
    "text-reverser": { name: "Text Reverser", desc: "Reverse text, words, or lines instantly" },
    "random-string-generator": { name: "Random String Generator", desc: "Generate random strings with custom characters and length" },
    "palindrome-checker": { name: "Palindrome Checker", desc: "Check if text reads the same forwards and backwards" },
    "morse-code-converter": { name: "Morse Code Converter", desc: "Convert text to Morse code and Morse code to text" },
    "temperature-converter": { name: "Temperature Converter", desc: "Convert between Celsius, Fahrenheit, and Kelvin" },
    "weight-converter": { name: "Weight Converter", desc: "Convert between kilograms, pounds, ounces, and more" },
    "length-converter": { name: "Length Converter", desc: "Convert between meters, feet, inches, kilometers, and miles" },
    "data-size-converter": { name: "Data Size Converter", desc: "Convert between bytes, KB, MB, GB, TB, and more" },
    "speed-converter": { name: "Speed Converter", desc: "Convert between km/h, mph, knots, m/s and more" },
    "area-converter": { name: "Area Converter", desc: "Convert between square meters, acres, hectares, sq ft" },
    "image-to-base64": { name: "Image to Base64", desc: "Convert images to Base64 data URI for inline embedding" },
    "random-number-generator": { name: "Random Number Generator", desc: "Generate random numbers within a custom range" },
    "image-to-pdf": { name: "Image to PDF", desc: "Convert images (JPG, PNG) into a single PDF document" },
    "pdf-splitter": { name: "PDF Splitter", desc: "Split PDF by page ranges or extract specific pages" },
    "pdf-rotator": { name: "PDF Rotator", desc: "Rotate PDF pages by 90, 180, or 270 degrees" },
    "pdf-page-remover": { name: "PDF Page Remover", desc: "Remove unwanted pages from your PDF documents" },
    "image-cropper": { name: "Image Cropper", desc: "Crop images by dragging a selection area on canvas" },
    "image-resizer": { name: "Image Resizer", desc: "Resize images to exact dimensions with aspect ratio lock" },
    "image-filters": { name: "Image Filters", desc: "Apply grayscale, sepia, blur, brightness, and contrast filters" },
    "color-picker": { name: "Color Picker from Image", desc: "Pick colors from uploaded images or use the color selector" },
    "gif-maker": { name: "GIF Maker", desc: "Create animated GIFs from multiple images" },
    "image-watermark": { name: "Image Watermark", desc: "Add text watermark to images with position and opacity control" },
    "image-merge": { name: "Image Merger", desc: "Combine multiple images into one side by side or grid" },
    "image-splitter": { name: "Image Splitter", desc: "Split an image into tiles by rows and columns" },
    "image-flip": { name: "Image Flip & Rotate", desc: "Flip horizontally, vertically, or rotate images" },
    "image-border": { name: "Image Border", desc: "Add customizable borders and frames to images" },
    "meme-generator": { name: "Meme Generator", desc: "Create memes by adding top and bottom text to images" },
    "image-to-sketch": { name: "Image to Sketch", desc: "Convert photos into pencil sketch drawings" },
    "emoji-remover": { name: "Emoji Remover", desc: "Remove all emoji characters from text while keeping words" },
    "unicode-detector": { name: "Unicode Character Detector", desc: "Inspect Unicode characters with codepoint and category info" },
    "caesar-cipher": { name: "Caesar Cipher", desc: "Encode and decode text using Caesar shift cipher" },
    "json-diff": { name: "JSON Diff", desc: "Compare two JSON objects and highlight differences" },
    "http-status-codes": { name: "HTTP Status Codes", desc: "Browse and search all HTTP status codes with descriptions" },
    "markdown-to-html": { name: "Markdown to HTML", desc: "Convert Markdown text to formatted HTML in real-time" },
    "timezone-converter": { name: "Time Zone Converter", desc: "Convert time between different world time zones" },
    "binary-to-text": { name: "Binary to Text", desc: "Convert binary code to text and text back to binary" },
    "image-invert": { name: "Image Invert", desc: "Invert or negate colors in an image instantly" },
    "image-collage": { name: "Photo Collage Maker", desc: "Combine multiple photos into a beautiful collage" },
    "css-gradient": { name: "CSS Gradient Generator", desc: "Create beautiful linear and radial CSS gradients" },
    "css-shadow": { name: "CSS Box Shadow Generator", desc: "Design and preview custom CSS box shadows visually" },
    "json-to-typescript": { name: "JSON to TypeScript", desc: "Convert JSON objects into TypeScript interfaces" },
    "html-to-jsx": { name: "HTML to JSX Converter", desc: "Convert HTML code into React JSX syntax" },
    "color-palette": { name: "Color Palette Generator", desc: "Generate color schemes: monochromatic, complementary, and more" },
    "roman-numeral": { name: "Roman Numeral Converter", desc: "Convert between Roman numerals and Arabic numbers" },
    "percentage-calculator": { name: "Percentage Calculator", desc: "Calculate percentages, what if, increase/decrease easily" },
    "tip-calculator": { name: "Tip Calculator", desc: "Calculate tip amount, total bill, and per-person cost" },
    "age-calculator": { name: "Age Calculator", desc: "Calculate exact age in years, months, and days" },
    "bmi-calculator": { name: "BMI Calculator", desc: "Calculate Body Mass Index and check your health category" },
    "countdown-timer": { name: "Countdown Timer", desc: "Set a countdown to any date and time" },
    "dice-roller": { name: "Dice Roller", desc: "Roll virtual dice with various sides (d4 to d20)" },
    "decision-maker": { name: "Decision Maker", desc: "Let fate decide — pick a random option from your list" },
    "audio-cutter": { name: "Audio Cutter", desc: "Trim and cut audio files with waveform preview" },
    "audio-merger": { name: "Audio Merger", desc: "Combine multiple audio files into one track" },
    "audio-converter": { name: "Audio Converter", desc: "Convert audio between WAV formats and sample rates" },
    "dns-lookup": { name: "DNS Lookup", desc: "Look up DNS records: A, AAAA, MX, NS, TXT, CNAME" },
    "whois-lookup": { name: "WHOIS Lookup", desc: "Look up domain registration and ownership information" },
    "svg-to-png": { name: "SVG to PNG Converter", desc: "Convert SVG code or files to PNG images" },
    "days-between": { name: "Days Between Dates", desc: "Calculate the exact number of days between two dates" },
    "password-strength": { name: "Password Strength Checker", desc: "Test how strong your password is with real-time analysis" },
    "barcode-generator": { name: "Barcode & QR Code Generator", desc: "Generate barcodes (Code128, EAN-13, Code39, UPC-A) and QR codes" },
    "aspect-ratio-calculator": { name: "Aspect Ratio Calculator", desc: "Calculate aspect ratios from dimensions or presets" },
    "qr-reader": { name: "QR Code Reader", desc: "Decode QR codes from uploaded images" },
    "color-blindness-simulator": { name: "Color Blindness Simulator", desc: "Simulate how images look with various color blindness types" },
    "watermark-remover": { name: "Watermark Remover", desc: "Remove watermarks and logos from images" },
    "online-notepad": { name: "Online Notepad", desc: "A simple browser-based notepad with auto-save" },
    "text-statistics": { name: "Text Statistics", desc: "Detailed text analysis: letters, vowels, unique words, and more" },
    "ocr-text-recognition": { name: "OCR Text Recognition", desc: "Extract text from images and screenshots" },
    "markdown-to-pdf": { name: "Markdown to PDF Converter", desc: "Convert Markdown to formatted PDF" },
    "video-to-gif": { name: "Video to GIF Converter", desc: "Convert video clips to animated GIFs" },
  },
};
