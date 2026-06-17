"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { tools, getTool, type Tool } from "@/lib/tools/data";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { ToolWidget } from "@/components/tools/tool-widget";
import { ErrorBoundary } from "@/components/error-boundary";
import { blogPosts, type BlogPost } from "@/lib/blog/data";
import { useRecentTools } from "@/lib/hooks/use-recent-tools";
import { useFavorites } from "@/lib/hooks/use-favorites";
import { getToolScenarios } from "@/lib/tools/scenarios";

const AdUnit = dynamic(
  () => import("@/components/ads/ad-unit").then((m) => m.AdUnit),
  { ssr: false }
);

// Loading fallback for dynamic components
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Dynamic imports for all tool components
const DynamicJsonFormatter = dynamic(
  () => import("./_components/json-formatter").then((m) => m.JsonFormatterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicBase64 = dynamic(
  () => import("./_components/base64").then((m) => m.Base64Tool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicRegexTester = dynamic(
  () => import("./_components/regex-tester").then((m) => m.RegexTesterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicColorConverter = dynamic(
  () => import("./_components/color-converter").then((m) => m.ColorConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicUrlEncoder = dynamic(
  () => import("./_components/url-encoder").then((m) => m.UrlEncoderTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageCompressor = dynamic(
  () => import("./_components/image-compressor").then((m) => m.ImageCompressorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageConverter = dynamic(
  () => import("./_components/image-converter").then((m) => m.ImageConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPdfMerger = dynamic(
  () => import("./_components/pdf-merger").then((m) => m.PdfMergerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicQrGenerator = dynamic(
  () => import("./_components/qr-generator").then((m) => m.QrGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicWordCounter = dynamic(
  () => import("./_components/word-counter").then((m) => m.WordCounterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicUuidGenerator = dynamic(
  () => import("./_components/uuid-generator").then((m) => m.UuidGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPasswordGenerator = dynamic(
  () => import("./_components/password-generator").then((m) => m.PasswordGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHashGenerator = dynamic(
  () => import("./_components/hash-generator").then((m) => m.HashGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTimestampConverter = dynamic(
  () => import("./_components/timestamp-converter").then((m) => m.TimestampConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicNumberBaseConverter = dynamic(
  () => import("./_components/number-base-converter").then((m) => m.NumberBaseConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCaseConverter = dynamic(
  () => import("./_components/case-converter").then((m) => m.CaseConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicLoremIpsumGenerator = dynamic(
  () => import("./_components/lorem-ipsum-generator").then((m) => m.LoremIpsumGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextDiffChecker = dynamic(
  () => import("./_components/text-diff-checker").then((m) => m.TextDiffCheckerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHtmlEntityConverter = dynamic(
  () => import("./_components/html-entity-converter").then((m) => m.HtmlEntityConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextRepeater = dynamic(
  () => import("./_components/text-repeater").then((m) => m.TextRepeaterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCssMinifier = dynamic(
  () => import("./_components/css-minifier").then((m) => m.CssMinifierTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicSqlFormatter = dynamic(
  () => import("./_components/sql-formatter").then((m) => m.SqlFormatterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicJsonToYaml = dynamic(
  () => import("./_components/json-to-yaml").then((m) => m.JsonToYamlTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicStringEscaper = dynamic(
  () => import("./_components/string-escaper").then((m) => m.StringEscaperTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHtmlTagStripper = dynamic(
  () => import("./_components/html-tag-stripper").then((m) => m.HtmlTagStripperTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicJwtDecoder = dynamic(
  () => import("./_components/jwt-decoder").then((m) => m.JwtDecoderTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCronParser = dynamic(
  () => import("./_components/cron-parser").then((m) => m.CronParserTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextToBinary = dynamic(
  () => import("./_components/text-to-binary").then((m) => m.TextToBinaryTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHtmlPreview = dynamic(
  () => import("./_components/html-preview").then((m) => m.HtmlPreviewTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCsvViewer = dynamic(
  () => import("./_components/csv-viewer").then((m) => m.CsvViewerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicIpCalculator = dynamic(
  () => import("./_components/ip-calculator").then((m) => m.IpCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicJwtGenerator = dynamic(
  () => import("./_components/jwt-generator").then((m) => m.JwtGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextToSlug = dynamic(
  () => import("./_components/text-to-slug").then((m) => m.TextToSlugTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextSorter = dynamic(
  () => import("./_components/text-sorter").then((m) => m.TextSorterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextDeduplicator = dynamic(
  () => import("./_components/text-deduplicator").then((m) => m.TextDeduplicatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextReverser = dynamic(
  () => import("./_components/text-reverser").then((m) => m.TextReverserTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicRandomStringGenerator = dynamic(
  () => import("./_components/random-string-generator").then((m) => m.RandomStringGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPalindromeChecker = dynamic(
  () => import("./_components/palindrome-checker").then((m) => m.PalindromeCheckerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicMorseCodeConverter = dynamic(
  () => import("./_components/morse-code-converter").then((m) => m.MorseCodeConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTemperatureConverter = dynamic(
  () => import("./_components/temperature-converter").then((m) => m.TemperatureConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicWeightConverter = dynamic(
  () => import("./_components/weight-converter").then((m) => m.WeightConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicLengthConverter = dynamic(
  () => import("./_components/length-converter").then((m) => m.LengthConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicDataSizeConverter = dynamic(
  () => import("./_components/data-size-converter").then((m) => m.DataSizeConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicSpeedConverter = dynamic(
  () => import("./_components/speed-converter").then((m) => m.SpeedConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAreaConverter = dynamic(
  () => import("./_components/area-converter").then((m) => m.AreaConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicRandomNumberGenerator = dynamic(
  () => import("./_components/random-number-generator").then((m) => m.RandomNumberGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageToBase64 = dynamic(
  () => import("./_components/image-to-base64").then((m) => m.ImageToBase64Tool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageToPdf = dynamic(
  () => import("./_components/image-to-pdf").then((m) => m.ImageToPdfTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPdfSplitter = dynamic(
  () => import("./_components/pdf-splitter").then((m) => m.PdfSplitterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPdfRotator = dynamic(
  () => import("./_components/pdf-rotator").then((m) => m.PdfRotatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPdfPageRemover = dynamic(
  () => import("./_components/pdf-page-remover").then((m) => m.PdfPageRemoverTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageCropper = dynamic(
  () => import("./_components/image-cropper").then((m) => m.ImageCropperTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageResizer = dynamic(
  () => import("./_components/image-resizer").then((m) => m.ImageResizerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageFilters = dynamic(
  () => import("./_components/image-filters").then((m) => m.ImageFiltersTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicColorPicker = dynamic(
  () => import("./_components/color-picker").then((m) => m.ColorPickerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicGifMaker = dynamic(
  () => import("./_components/gif-maker").then((m) => m.GifMakerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageWatermark = dynamic(
  () => import("./_components/image-watermark").then((m) => m.ImageWatermarkTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageMerge = dynamic(
  () => import("./_components/image-merge").then((m) => m.ImageMergeTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageSplitter = dynamic(
  () => import("./_components/image-splitter").then((m) => m.ImageSplitterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageFlip = dynamic(
  () => import("./_components/image-flip").then((m) => m.ImageFlipTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageBorder = dynamic(
  () => import("./_components/image-border").then((m) => m.ImageBorderTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicMemeGenerator = dynamic(
  () => import("./_components/meme-generator").then((m) => m.MemeGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageToSketch = dynamic(
  () => import("./_components/image-to-sketch").then((m) => m.ImageToSketchTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageInvert = dynamic(
  () => import("./_components/image-invert").then((m) => m.ImageInvertTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicImageCollage = dynamic(
  () => import("./_components/image-collage").then((m) => m.ImageCollageTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicEmojiRemover = dynamic(
  () => import("./_components/emoji-remover").then((m) => m.EmojiRemoverTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicUnicodeDetector = dynamic(
  () => import("./_components/unicode-detector").then((m) => m.UnicodeDetectorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCaesarCipher = dynamic(
  () => import("./_components/caesar-cipher").then((m) => m.CaesarCipherTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicJsonDiff = dynamic(
  () => import("./_components/json-diff").then((m) => m.JsonDiffTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHttpStatusCodes = dynamic(
  () => import("./_components/http-status-codes").then((m) => m.HttpStatusCodesTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicMarkdownToHtml = dynamic(
  () => import("./_components/markdown-to-html").then((m) => m.MarkdownToHtmlTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCssGradient = dynamic(
  () => import("./_components/css-gradient").then((m) => m.CssGradientTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCssShadow = dynamic(
  () => import("./_components/css-shadow").then((m) => m.CssShadowTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicJsonToTypescript = dynamic(
  () => import("./_components/json-to-typescript").then((m) => m.JsonToTypescriptTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicHtmlToJsx = dynamic(
  () => import("./_components/html-to-jsx").then((m) => m.HtmlToJsxTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicColorPalette = dynamic(
  () => import("./_components/color-palette").then((m) => m.ColorPaletteTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTimezoneConverter = dynamic(
  () => import("./_components/timezone-converter").then((m) => m.TimezoneConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicBinaryToText = dynamic(
  () => import("./_components/binary-to-text").then((m) => m.BinaryToTextTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAudioCutter = dynamic(
  () => import("./_components/audio-cutter").then((m) => m.AudioCutterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAudioMerger = dynamic(
  () => import("./_components/audio-merger").then((m) => m.AudioMergerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAudioConverter = dynamic(
  () => import("./_components/audio-converter").then((m) => m.AudioConverterTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicDnsLookup = dynamic(
  () => import("./_components/dns-lookup").then((m) => m.DnsLookupTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicWhoisLookup = dynamic(
  () => import("./_components/whois-lookup").then((m) => m.WhoisLookupTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicSvgToPng = dynamic(
  () => import("./_components/svg-to-png").then((m) => m.SvgToPngTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicDaysBetween = dynamic(
  () => import("./_components/days-between").then((m) => m.DaysBetweenTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPasswordStrength = dynamic(
  () => import("./_components/password-strength").then((m) => m.PasswordStrengthTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicBarcodeGenerator = dynamic(
  () => import("./_components/barcode-generator").then((m) => m.BarcodeGeneratorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAspectRatioCalculator = dynamic(
  () => import("./_components/aspect-ratio-calculator").then((m) => m.AspectRatioCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicQrReader = dynamic(
  () => import("./_components/qr-reader").then((m) => m.QrReaderTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicColorBlindnessSimulator = dynamic(
  () => import("./_components/color-blindness-simulator").then((m) => m.ColorBlindnessSimulatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicOnlineNotepad = dynamic(
  () => import("./_components/online-notepad").then((m) => m.OnlineNotepadTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTextStatistics = dynamic(
  () => import("./_components/text-statistics").then((m) => m.TextStatisticsTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicRomanNumeral = dynamic(
  () => import("./_components/roman-numeral").then((m) => m.RomanNumeralTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicPercentageCalculator = dynamic(
  () => import("./_components/percentage-calculator").then((m) => m.PercentageCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicTipCalculator = dynamic(
  () => import("./_components/tip-calculator").then((m) => m.TipCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicAgeCalculator = dynamic(
  () => import("./_components/age-calculator").then((m) => m.AgeCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicBmiCalculator = dynamic(
  () => import("./_components/bmi-calculator").then((m) => m.BmiCalculatorTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicCountdownTimer = dynamic(
  () => import("./_components/countdown-timer").then((m) => m.CountdownTimerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicDiceRoller = dynamic(
  () => import("./_components/dice-roller").then((m) => m.DiceRollerTool),
  { ssr: false, loading: LoadingFallback }
);
const DynamicDecisionMaker = dynamic(
  () => import("./_components/decision-maker").then((m) => m.DecisionMakerTool),
  { ssr: false, loading: LoadingFallback }
);

function getToolComponent(slug: string) {
  const components: Record<string, React.ComponentType> = {
    "json-formatter": DynamicJsonFormatter,
    "base64-encode-decode": DynamicBase64,
    "regex-tester": DynamicRegexTester,
    "color-converter": DynamicColorConverter,
    "url-encoder-decoder": DynamicUrlEncoder,
    "image-compressor": DynamicImageCompressor,
    "image-converter": DynamicImageConverter,
    "pdf-merger": DynamicPdfMerger,
    "qr-code-generator": DynamicQrGenerator,
    "word-counter": DynamicWordCounter,
    "uuid-generator": DynamicUuidGenerator,
    "password-generator": DynamicPasswordGenerator,
    "hash-generator": DynamicHashGenerator,
    "timestamp-converter": DynamicTimestampConverter,
    "number-base-converter": DynamicNumberBaseConverter,
    "case-converter": DynamicCaseConverter,
    "lorem-ipsum-generator": DynamicLoremIpsumGenerator,
    "text-diff-checker": DynamicTextDiffChecker,
    "html-entity-converter": DynamicHtmlEntityConverter,
    "text-repeater": DynamicTextRepeater,
    "css-minifier": DynamicCssMinifier,
    "sql-formatter": DynamicSqlFormatter,
    "json-to-yaml": DynamicJsonToYaml,
    "string-escaper": DynamicStringEscaper,
    "html-tag-stripper": DynamicHtmlTagStripper,
    "jwt-decoder": DynamicJwtDecoder,
    "cron-parser": DynamicCronParser,
    "text-to-binary": DynamicTextToBinary,
    "html-preview": DynamicHtmlPreview,
    "csv-viewer": DynamicCsvViewer,
    "ip-calculator": DynamicIpCalculator,
    "jwt-generator": DynamicJwtGenerator,
    "text-to-slug": DynamicTextToSlug,
    "text-sorter": DynamicTextSorter,
    "text-deduplicator": DynamicTextDeduplicator,
    "text-reverser": DynamicTextReverser,
    "random-string-generator": DynamicRandomStringGenerator,
    "palindrome-checker": DynamicPalindromeChecker,
    "morse-code-converter": DynamicMorseCodeConverter,
    "temperature-converter": DynamicTemperatureConverter,
    "weight-converter": DynamicWeightConverter,
    "length-converter": DynamicLengthConverter,
    "data-size-converter": DynamicDataSizeConverter,
    "speed-converter": DynamicSpeedConverter,
    "area-converter": DynamicAreaConverter,
    "random-number-generator": DynamicRandomNumberGenerator,
    "image-to-base64": DynamicImageToBase64,
    "image-to-pdf": DynamicImageToPdf,
    "pdf-splitter": DynamicPdfSplitter,
    "pdf-rotator": DynamicPdfRotator,
    "pdf-page-remover": DynamicPdfPageRemover,
    "image-cropper": DynamicImageCropper,
    "image-resizer": DynamicImageResizer,
    "image-filters": DynamicImageFilters,
    "color-picker": DynamicColorPicker,
    "gif-maker": DynamicGifMaker,
    "image-watermark": DynamicImageWatermark,
    "image-merge": DynamicImageMerge,
    "image-splitter": DynamicImageSplitter,
    "image-flip": DynamicImageFlip,
    "image-border": DynamicImageBorder,
    "meme-generator": DynamicMemeGenerator,
    "image-to-sketch": DynamicImageToSketch,
    "image-invert": DynamicImageInvert,
    "image-collage": DynamicImageCollage,
    "emoji-remover": DynamicEmojiRemover,
    "unicode-detector": DynamicUnicodeDetector,
    "caesar-cipher": DynamicCaesarCipher,
    "json-diff": DynamicJsonDiff,
    "http-status-codes": DynamicHttpStatusCodes,
    "markdown-to-html": DynamicMarkdownToHtml,
    "timezone-converter": DynamicTimezoneConverter,
    "binary-to-text": DynamicBinaryToText,
    "roman-numeral": DynamicRomanNumeral,
    "percentage-calculator": DynamicPercentageCalculator,
    "tip-calculator": DynamicTipCalculator,
    "age-calculator": DynamicAgeCalculator,
    "bmi-calculator": DynamicBmiCalculator,
    "countdown-timer": DynamicCountdownTimer,
    "dice-roller": DynamicDiceRoller,
    "decision-maker": DynamicDecisionMaker,
    "css-gradient": DynamicCssGradient,
    "css-shadow": DynamicCssShadow,
    "json-to-typescript": DynamicJsonToTypescript,
    "html-to-jsx": DynamicHtmlToJsx,
    "color-palette": DynamicColorPalette,
    "audio-cutter": DynamicAudioCutter,
    "audio-merger": DynamicAudioMerger,
    "audio-converter": DynamicAudioConverter,
    "dns-lookup": DynamicDnsLookup,
    "whois-lookup": DynamicWhoisLookup,
    "svg-to-png": DynamicSvgToPng,
    "days-between": DynamicDaysBetween,
    "password-strength": DynamicPasswordStrength,
    "barcode-generator": DynamicBarcodeGenerator,
    "aspect-ratio-calculator": DynamicAspectRatioCalculator,
    "qr-reader": DynamicQrReader,
    "color-blindness-simulator": DynamicColorBlindnessSimulator,
    "online-notepad": DynamicOnlineNotepad,
    "text-statistics": DynamicTextStatistics,
  };
  return components[slug];
}

export function ToolPageContent({ slug }: { slug: string }) {
  const { t, locale } = useLocale();
  const tool = getTool(slug);
  if (!tool) return null;

  const ToolComponent = getToolComponent(slug);
  const related = tools
    .filter((rt) => rt.category === tool.category && rt.slug !== tool.slug)
    .slice(0, 4);
  const relatedPosts = blogPosts.filter((p) => p.toolSlug === slug).slice(0, 3);

  return (
    <ToolPageInner slug={slug} tool={tool} ToolComponent={ToolComponent} related={related} relatedPosts={relatedPosts} />
  );
}

function ToolPageInner({ slug, tool, ToolComponent, related, relatedPosts }: {
  slug: string;
  tool: Tool;
  ToolComponent: React.ComponentType | undefined;
  related: Tool[];
  relatedPosts: BlogPost[];
}) {
  const { t, locale } = useLocale();
  const { addRecent } = useRecentTools();
  const { toggleFavorite, isFavorite } = useFavorites();
  const scenarios = getToolScenarios(slug);

  // Track as recently used
  useState(() => { addRecent(slug); });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">{t("notFound.backHome")}</Link>
        <span>/</span>
        <Link href={`/tools?category=${tool.category}`} className="hover:text-foreground capitalize">
          {t(`categories.${tool.category}`)}
        </Link>
        <span>/</span>
        <span className="text-foreground">{t(`toolList.${tool.slug}.name`)}</span>
      </nav>

      <div className="flex items-start justify-between mb-2">
        <h1 className="text-3xl font-bold">{t(`toolList.${tool.slug}.name`)}</h1>
        <button
          onClick={() => toggleFavorite(slug)}
          className={`favorite-btn text-2xl flex-shrink-0 ml-4 ${isFavorite(slug) ? "active" : "text-muted-foreground"}`}
          title={isFavorite(slug) ? (locale === "zh" ? "取消收藏" : "Unfavorite") : (locale === "zh" ? "收藏" : "Favorite")}
        >
          {isFavorite(slug) ? "❤️" : "🤍"}
        </button>
      </div>
      <p className="text-muted-foreground mb-8">{t(`toolList.${tool.slug}.desc`)}</p>

      <ErrorBoundary>
        <ToolWidget title={t(`toolList.${tool.slug}.name`)}>
          {ToolComponent ? <ToolWidgetWithTooltip Component={ToolComponent} slug={slug} /> : <p className="text-muted-foreground">{t("common.loading")}</p>}
        </ToolWidget>
      </ErrorBoundary>

      {/* Usage Scenarios */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4 text-muted-foreground">
          {locale === "zh" ? "💡 使用场景" : "💡 What can I use this for?"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {scenarios.map((s) => (
            <div key={s.title} className="scenario-card p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{s.icon}</span>
                <h3 className="font-medium text-sm">{s.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Page Ad */}
      <AdUnit slot="2800459707" format="horizontal" className="max-w-4xl mx-auto" />

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">{t("blog.relatedTools")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((rt) => (
              <Link
                key={rt.slug}
                href={`/tools/${rt.slug}`}
                className="p-3 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 text-sm"
              >
                <span className="font-medium">{t(`toolList.${rt.slug}.name`)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">{t("blog.relatedTools")}</h2>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <span>{t(`blog.categories.${post.category}`)}</span>
                  <span>·</span>
                  <span>{t("blog.minRead", { count: post.readTime.split(" ")[0] })}</span>
                </div>
                <h3 className="font-medium text-sm hover:text-primary transition-colors">
                  {post.titleZh ? (locale === 'zh' ? post.titleZh : post.title) : post.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {post.descriptionZh ? (locale === 'zh' ? post.descriptionZh : post.description) : post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ToolWidgetWithTooltip({ Component, slug }: { Component: React.ComponentType; slug: string }) {
  const { locale } = useLocale();
  return (
    <div className="tooltip-trigger relative">
      <Component />
      <div className="absolute top-2 right-2 z-10">
        <span className="tooltip-trigger inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs cursor-help">
          ?
          <span className="tooltip-content">
            {locale === "zh"
              ? "所有处理都在浏览器本地完成，数据不会上传到服务器"
              : "All processing happens locally in your browser — no data is uploaded"}
          </span>
        </span>
      </div>
    </div>
  );
}
