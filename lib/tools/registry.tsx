/**
 * Tool Component Registry
 *
 * Maps tool slugs to their dynamically imported React components.
 * Adding a new tool: just add one entry here + the component file in _components/.
 */
import dynamic from "next/dynamic";

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tool(slug: string, importFn: () => Promise<any>) {
  return dynamic(importFn, { ssr: false, loading: LoadingFallback });
}

// prettier-ignore
export const toolComponents: Record<string, React.ComponentType> = {
  // === Developer Tools ===
  "json-formatter":            tool("json-formatter",            () => import("@/app/tools/[slug]/_components/json-formatter").then(m => m.JsonFormatterTool)),
  "base64-encode-decode":     tool("base64-encode-decode",     () => import("@/app/tools/[slug]/_components/base64").then(m => m.Base64Tool)),
  "regex-tester":             tool("regex-tester",             () => import("@/app/tools/[slug]/_components/regex-tester").then(m => m.RegexTesterTool)),
  "color-converter":          tool("color-converter",          () => import("@/app/tools/[slug]/_components/color-converter").then(m => m.ColorConverterTool)),
  "url-encoder-decoder":      tool("url-encoder-decoder",      () => import("@/app/tools/[slug]/_components/url-encoder").then(m => m.UrlEncoderTool)),
  "hash-generator":           tool("hash-generator",           () => import("@/app/tools/[slug]/_components/hash-generator").then(m => m.HashGeneratorTool)),
  "uuid-generator":           tool("uuid-generator",           () => import("@/app/tools/[slug]/_components/uuid-generator").then(m => m.UuidGeneratorTool)),
  "password-generator":       tool("password-generator",       () => import("@/app/tools/[slug]/_components/password-generator").then(m => m.PasswordGeneratorTool)),
  "timestamp-converter":      tool("timestamp-converter",      () => import("@/app/tools/[slug]/_components/timestamp-converter").then(m => m.TimestampConverterTool)),
  "number-base-converter":    tool("number-base-converter",    () => import("@/app/tools/[slug]/_components/number-base-converter").then(m => m.NumberBaseConverterTool)),
  "jwt-decoder":              tool("jwt-decoder",              () => import("@/app/tools/[slug]/_components/jwt-decoder").then(m => m.JwtDecoderTool)),
  "jwt-generator":            tool("jwt-generator",            () => import("@/app/tools/[slug]/_components/jwt-generator").then(m => m.JwtGeneratorTool)),
  "cron-parser":              tool("cron-parser",              () => import("@/app/tools/[slug]/_components/cron-parser").then(m => m.CronParserTool)),
  "ip-calculator":            tool("ip-calculator",            () => import("@/app/tools/[slug]/_components/ip-calculator").then(m => m.IpCalculatorTool)),
  "http-status-codes":        tool("http-status-codes",        () => import("@/app/tools/[slug]/_components/http-status-codes").then(m => m.HttpStatusCodesTool)),
  "css-minifier":             tool("css-minifier",             () => import("@/app/tools/[slug]/_components/css-minifier").then(m => m.CssMinifierTool)),
  "css-gradient":             tool("css-gradient",             () => import("@/app/tools/[slug]/_components/css-gradient").then(m => m.CssGradientTool)),
  "css-shadow":               tool("css-shadow",               () => import("@/app/tools/[slug]/_components/css-shadow").then(m => m.CssShadowTool)),
  "sql-formatter":            tool("sql-formatter",            () => import("@/app/tools/[slug]/_components/sql-formatter").then(m => m.SqlFormatterTool)),
  "json-to-yaml":             tool("json-to-yaml",             () => import("@/app/tools/[slug]/_components/json-to-yaml").then(m => m.JsonToYamlTool)),
  "json-to-typescript":       tool("json-to-typescript",       () => import("@/app/tools/[slug]/_components/json-to-typescript").then(m => m.JsonToTypescriptTool)),
  "json-diff":                tool("json-diff",                () => import("@/app/tools/[slug]/_components/json-diff").then(m => m.JsonDiffTool)),
  "html-entity-converter":    tool("html-entity-converter",    () => import("@/app/tools/[slug]/_components/html-entity-converter").then(m => m.HtmlEntityConverterTool)),
  "html-tag-stripper":        tool("html-tag-stripper",        () => import("@/app/tools/[slug]/_components/html-tag-stripper").then(m => m.HtmlTagStripperTool)),
  "html-preview":             tool("html-preview",             () => import("@/app/tools/[slug]/_components/html-preview").then(m => m.HtmlPreviewTool)),
  "html-to-jsx":              tool("html-to-jsx",              () => import("@/app/tools/[slug]/_components/html-to-jsx").then(m => m.HtmlToJsxTool)),
  "markdown-to-html":         tool("markdown-to-html",         () => import("@/app/tools/[slug]/_components/markdown-to-html").then(m => m.MarkdownToHtmlTool)),
  "string-escaper":           tool("string-escaper",           () => import("@/app/tools/[slug]/_components/string-escaper").then(m => m.StringEscaperTool)),
  "csv-viewer":               tool("csv-viewer",               () => import("@/app/tools/[slug]/_components/csv-viewer").then(m => m.CsvViewerTool)),
  "csv-visualizer":           tool("csv-visualizer",           () => import("@/app/tools/[slug]/_components/csv-visualizer").then(m => m.CsvVisualizerTool)),
  "svg-to-png":               tool("svg-to-png",               () => import("@/app/tools/[slug]/_components/svg-to-png").then(m => m.SvgToPngTool)),

  // === Text Tools ===
  "word-counter":             tool("word-counter",             () => import("@/app/tools/[slug]/_components/word-counter").then(m => m.WordCounterTool)),
  "case-converter":           tool("case-converter",           () => import("@/app/tools/[slug]/_components/case-converter").then(m => m.CaseConverterTool)),
  "lorem-ipsum-generator":    tool("lorem-ipsum-generator",    () => import("@/app/tools/[slug]/_components/lorem-ipsum-generator").then(m => m.LoremIpsumGeneratorTool)),
  "text-diff-checker":        tool("text-diff-checker",        () => import("@/app/tools/[slug]/_components/text-diff-checker").then(m => m.TextDiffCheckerTool)),
  "text-repeater":            tool("text-repeater",            () => import("@/app/tools/[slug]/_components/text-repeater").then(m => m.TextRepeaterTool)),
  "text-to-binary":           tool("text-to-binary",           () => import("@/app/tools/[slug]/_components/text-to-binary").then(m => m.TextToBinaryTool)),
  "text-to-slug":             tool("text-to-slug",             () => import("@/app/tools/[slug]/_components/text-to-slug").then(m => m.TextToSlugTool)),
  "text-sorter":              tool("text-sorter",              () => import("@/app/tools/[slug]/_components/text-sorter").then(m => m.TextSorterTool)),
  "text-deduplicator":        tool("text-deduplicator",        () => import("@/app/tools/[slug]/_components/text-deduplicator").then(m => m.TextDeduplicatorTool)),
  "text-reverser":            tool("text-reverser",            () => import("@/app/tools/[slug]/_components/text-reverser").then(m => m.TextReverserTool)),
  "text-statistics":          tool("text-statistics",          () => import("@/app/tools/[slug]/_components/text-statistics").then(m => m.TextStatisticsTool)),
  "random-string-generator":  tool("random-string-generator",  () => import("@/app/tools/[slug]/_components/random-string-generator").then(m => m.RandomStringGeneratorTool)),
  "random-number-generator":  tool("random-number-generator",  () => import("@/app/tools/[slug]/_components/random-number-generator").then(m => m.RandomNumberGeneratorTool)),
  "palindrome-checker":       tool("palindrome-checker",       () => import("@/app/tools/[slug]/_components/palindrome-checker").then(m => m.PalindromeCheckerTool)),
  "morse-code-converter":     tool("morse-code-converter",     () => import("@/app/tools/[slug]/_components/morse-code-converter").then(m => m.MorseCodeConverterTool)),
  "caesar-cipher":            tool("caesar-cipher",            () => import("@/app/tools/[slug]/_components/caesar-cipher").then(m => m.CaesarCipherTool)),
  "emoji-remover":            tool("emoji-remover",            () => import("@/app/tools/[slug]/_components/emoji-remover").then(m => m.EmojiRemoverTool)),
  "unicode-detector":         tool("unicode-detector",         () => import("@/app/tools/[slug]/_components/unicode-detector").then(m => m.UnicodeDetectorTool)),
  "binary-to-text":           tool("binary-to-text",           () => import("@/app/tools/[slug]/_components/binary-to-text").then(m => m.BinaryToTextTool)),
  "roman-numeral":            tool("roman-numeral",            () => import("@/app/tools/[slug]/_components/roman-numeral").then(m => m.RomanNumeralTool)),
  "online-notepad":           tool("online-notepad",           () => import("@/app/tools/[slug]/_components/online-notepad").then(m => m.OnlineNotepadTool)),
  "days-between":             tool("days-between",             () => import("@/app/tools/[slug]/_components/days-between").then(m => m.DaysBetweenTool)),
  "aspect-ratio-calculator":  tool("aspect-ratio-calculator",  () => import("@/app/tools/[slug]/_components/aspect-ratio-calculator").then(m => m.AspectRatioCalculatorTool)),
  "markdown-to-pdf":           tool("markdown-to-pdf",           () => import("@/app/tools/[slug]/_components/markdown-to-pdf").then(m => m.MarkdownToPdfTool)),

  // === Image Tools ===
  "image-compressor":         tool("image-compressor",         () => import("@/app/tools/[slug]/_components/image-compressor").then(m => m.ImageCompressorTool)),
  "image-converter":          tool("image-converter",          () => import("@/app/tools/[slug]/_components/image-converter").then(m => m.ImageConverterTool)),
  "image-to-base64":          tool("image-to-base64",          () => import("@/app/tools/[slug]/_components/image-to-base64").then(m => m.ImageToBase64Tool)),
  "image-cropper":            tool("image-cropper",            () => import("@/app/tools/[slug]/_components/image-cropper").then(m => m.ImageCropperTool)),
  "image-resizer":            tool("image-resizer",            () => import("@/app/tools/[slug]/_components/image-resizer").then(m => m.ImageResizerTool)),
  "image-filters":            tool("image-filters",            () => import("@/app/tools/[slug]/_components/image-filters").then(m => m.ImageFiltersTool)),
  "image-watermark":          tool("image-watermark",          () => import("@/app/tools/[slug]/_components/image-watermark").then(m => m.ImageWatermarkTool)),
  "image-merge":              tool("image-merge",              () => import("@/app/tools/[slug]/_components/image-merge").then(m => m.ImageMergeTool)),
  "image-splitter":           tool("image-splitter",           () => import("@/app/tools/[slug]/_components/image-splitter").then(m => m.ImageSplitterTool)),
  "image-flip":               tool("image-flip",               () => import("@/app/tools/[slug]/_components/image-flip").then(m => m.ImageFlipTool)),
  "image-border":             tool("image-border",             () => import("@/app/tools/[slug]/_components/image-border").then(m => m.ImageBorderTool)),
  "image-invert":             tool("image-invert",             () => import("@/app/tools/[slug]/_components/image-invert").then(m => m.ImageInvertTool)),
  "image-collage":            tool("image-collage",            () => import("@/app/tools/[slug]/_components/image-collage").then(m => m.ImageCollageTool)),
  "image-to-sketch":          tool("image-to-sketch",          () => import("@/app/tools/[slug]/_components/image-to-sketch").then(m => m.ImageToSketchTool)),
  "gif-maker":                tool("gif-maker",                () => import("@/app/tools/[slug]/_components/gif-maker").then(m => m.GifMakerTool)),
  "meme-generator":           tool("meme-generator",           () => import("@/app/tools/[slug]/_components/meme-generator").then(m => m.MemeGeneratorTool)),
  "color-picker":             tool("color-picker",             () => import("@/app/tools/[slug]/_components/color-picker").then(m => m.ColorPickerTool)),
  "color-palette":            tool("color-palette",            () => import("@/app/tools/[slug]/_components/color-palette").then(m => m.ColorPaletteTool)),
  "color-blindness-simulator":tool("color-blindness-simulator",() => import("@/app/tools/[slug]/_components/color-blindness-simulator").then(m => m.ColorBlindnessSimulatorTool)),
  "watermark-remover":        tool("watermark-remover",        () => import("@/app/tools/[slug]/_components/watermark-remover").then(m => m.WatermarkRemoverTool)),
  "barcode-generator":        tool("barcode-generator",        () => import("@/app/tools/[slug]/_components/barcode-generator").then(m => m.BarcodeGeneratorTool)),
  "qr-reader":                tool("qr-reader",                () => import("@/app/tools/[slug]/_components/qr-reader").then(m => m.QrReaderTool)),
  "ocr-text-recognition":    tool("ocr-text-recognition",    () => import("@/app/tools/[slug]/_components/ocr-text-recognition").then(m => m.OcrTextRecognitionTool)),

  // === PDF Tools ===
  "pdf-merger":               tool("pdf-merger",               () => import("@/app/tools/[slug]/_components/pdf-merger").then(m => m.PdfMergerTool)),
  "pdf-splitter":             tool("pdf-splitter",             () => import("@/app/tools/[slug]/_components/pdf-splitter").then(m => m.PdfSplitterTool)),
  "pdf-rotator":              tool("pdf-rotator",              () => import("@/app/tools/[slug]/_components/pdf-rotator").then(m => m.PdfRotatorTool)),
  "pdf-page-remover":         tool("pdf-page-remover",         () => import("@/app/tools/[slug]/_components/pdf-page-remover").then(m => m.PdfPageRemoverTool)),
  "image-to-pdf":             tool("image-to-pdf",             () => import("@/app/tools/[slug]/_components/image-to-pdf").then(m => m.ImageToPdfTool)),

  // === Conversion Tools ===
  "temperature-converter":    tool("temperature-converter",    () => import("@/app/tools/[slug]/_components/temperature-converter").then(m => m.TemperatureConverterTool)),
  "weight-converter":         tool("weight-converter",         () => import("@/app/tools/[slug]/_components/weight-converter").then(m => m.WeightConverterTool)),
  "length-converter":         tool("length-converter",         () => import("@/app/tools/[slug]/_components/length-converter").then(m => m.LengthConverterTool)),
  "data-size-converter":      tool("data-size-converter",      () => import("@/app/tools/[slug]/_components/data-size-converter").then(m => m.DataSizeConverterTool)),
  "speed-converter":          tool("speed-converter",          () => import("@/app/tools/[slug]/_components/speed-converter").then(m => m.SpeedConverterTool)),
  "area-converter":           tool("area-converter",           () => import("@/app/tools/[slug]/_components/area-converter").then(m => m.AreaConverterTool)),
  "percentage-calculator":    tool("percentage-calculator",    () => import("@/app/tools/[slug]/_components/percentage-calculator").then(m => m.PercentageCalculatorTool)),
  "tip-calculator":           tool("tip-calculator",           () => import("@/app/tools/[slug]/_components/tip-calculator").then(m => m.TipCalculatorTool)),
  "age-calculator":           tool("age-calculator",           () => import("@/app/tools/[slug]/_components/age-calculator").then(m => m.AgeCalculatorTool)),
  "bmi-calculator":           tool("bmi-calculator",           () => import("@/app/tools/[slug]/_components/bmi-calculator").then(m => m.BmiCalculatorTool)),
  "timezone-converter":       tool("timezone-converter",       () => import("@/app/tools/[slug]/_components/timezone-converter").then(m => m.TimezoneConverterTool)),
  "video-to-gif":             tool("video-to-gif",             () => import("@/app/tools/[slug]/_components/video-to-gif").then(m => m.VideoToGifTool)),

  // === Audio Tools ===
  "audio-cutter":             tool("audio-cutter",             () => import("@/app/tools/[slug]/_components/audio-cutter").then(m => m.AudioCutterTool)),
  "audio-merger":             tool("audio-merger",             () => import("@/app/tools/[slug]/_components/audio-merger").then(m => m.AudioMergerTool)),
  "audio-converter":          tool("audio-converter",          () => import("@/app/tools/[slug]/_components/audio-converter").then(m => m.AudioConverterTool)),

  // === Network Tools ===
  "dns-lookup":               tool("dns-lookup",               () => import("@/app/tools/[slug]/_components/dns-lookup").then(m => m.DnsLookupTool)),
  "whois-lookup":             tool("whois-lookup",             () => import("@/app/tools/[slug]/_components/whois-lookup").then(m => m.WhoisLookupTool)),

  // === Utilities ===
  "password-strength":        tool("password-strength",        () => import("@/app/tools/[slug]/_components/password-strength").then(m => m.PasswordStrengthTool)),
  "countdown-timer":          tool("countdown-timer",          () => import("@/app/tools/[slug]/_components/countdown-timer").then(m => m.CountdownTimerTool)),
  "dice-roller":              tool("dice-roller",              () => import("@/app/tools/[slug]/_components/dice-roller").then(m => m.DiceRollerTool)),
  "decision-maker":           tool("decision-maker",           () => import("@/app/tools/[slug]/_components/decision-maker").then(m => m.DecisionMakerTool)),
};
