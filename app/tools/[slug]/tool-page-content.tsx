"use client";

import { tools, getTool, type Tool } from "@/lib/tools/data";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";
import { ToolWidget } from "@/components/tools/tool-widget";
import { ErrorBoundary } from "@/components/error-boundary";
import { blogPosts } from "@/lib/blog/data";
import { JsonFormatterTool } from "./_components/json-formatter";
import { Base64Tool } from "./_components/base64";
import { RegexTesterTool } from "./_components/regex-tester";
import { ColorConverterTool } from "./_components/color-converter";
import { UrlEncoderTool } from "./_components/url-encoder";
import { ImageCompressorTool } from "./_components/image-compressor";
import { ImageConverterTool } from "./_components/image-converter";
import { PdfMergerTool } from "./_components/pdf-merger";
import { QrGeneratorTool } from "./_components/qr-generator";
import { WordCounterTool } from "./_components/word-counter";
import { UuidGeneratorTool } from "./_components/uuid-generator";
import { PasswordGeneratorTool } from "./_components/password-generator";
import { HashGeneratorTool } from "./_components/hash-generator";
import { TimestampConverterTool } from "./_components/timestamp-converter";
import { NumberBaseConverterTool } from "./_components/number-base-converter";
import { CaseConverterTool } from "./_components/case-converter";
import { LoremIpsumGeneratorTool } from "./_components/lorem-ipsum-generator";
import { TextDiffCheckerTool } from "./_components/text-diff-checker";
import { HtmlEntityConverterTool } from "./_components/html-entity-converter";
import { TextRepeaterTool } from "./_components/text-repeater";
import { CssMinifierTool } from "./_components/css-minifier";
import { SqlFormatterTool } from "./_components/sql-formatter";
import { JsonToYamlTool } from "./_components/json-to-yaml";
import { StringEscaperTool } from "./_components/string-escaper";
import { HtmlTagStripperTool } from "./_components/html-tag-stripper";
import { JwtDecoderTool } from "./_components/jwt-decoder";
import { CronParserTool } from "./_components/cron-parser";
import { TextToBinaryTool } from "./_components/text-to-binary";
import { HtmlPreviewTool } from "./_components/html-preview";
import { CsvViewerTool } from "./_components/csv-viewer";
import { IpCalculatorTool } from "./_components/ip-calculator";
import { JwtGeneratorTool } from "./_components/jwt-generator";
import { TextToSlugTool } from "./_components/text-to-slug";
import { TextSorterTool } from "./_components/text-sorter";
import { TextDeduplicatorTool } from "./_components/text-deduplicator";
import { TextReverserTool } from "./_components/text-reverser";
import { RandomStringGeneratorTool } from "./_components/random-string-generator";
import { PalindromeCheckerTool } from "./_components/palindrome-checker";
import { MorseCodeConverterTool } from "./_components/morse-code-converter";
import { TemperatureConverterTool } from "./_components/temperature-converter";
import { WeightConverterTool } from "./_components/weight-converter";
import { LengthConverterTool } from "./_components/length-converter";
import { DataSizeConverterTool } from "./_components/data-size-converter";
import { SpeedConverterTool } from "./_components/speed-converter";
import { AreaConverterTool } from "./_components/area-converter";
import { RandomNumberGeneratorTool } from "./_components/random-number-generator";
import { ImageToBase64Tool } from "./_components/image-to-base64";
import { ImageToPdfTool } from "./_components/image-to-pdf";
import { PdfSplitterTool } from "./_components/pdf-splitter";
import { PdfRotatorTool } from "./_components/pdf-rotator";
import { PdfPageRemoverTool } from "./_components/pdf-page-remover";
import { ImageCropperTool } from "./_components/image-cropper";
import { ImageResizerTool } from "./_components/image-resizer";
import { ImageFiltersTool } from "./_components/image-filters";
import { ColorPickerTool } from "./_components/color-picker";
import { GifMakerTool } from "./_components/gif-maker";
import { ImageWatermarkTool } from "./_components/image-watermark";
import { ImageMergeTool } from "./_components/image-merge";
import { ImageSplitterTool } from "./_components/image-splitter";
import { ImageFlipTool } from "./_components/image-flip";
import { ImageBorderTool } from "./_components/image-border";
import { MemeGeneratorTool } from "./_components/meme-generator";
import { ImageToSketchTool } from "./_components/image-to-sketch";
import { ImageInvertTool } from "./_components/image-invert";
import { ImageCollageTool } from "./_components/image-collage";
import { EmojiRemoverTool } from "./_components/emoji-remover";
import { UnicodeDetectorTool } from "./_components/unicode-detector";
import { CaesarCipherTool } from "./_components/caesar-cipher";
import { JsonDiffTool } from "./_components/json-diff";
import { HttpStatusCodesTool } from "./_components/http-status-codes";
import { MarkdownToHtmlTool } from "./_components/markdown-to-html";
import { CssGradientTool } from "./_components/css-gradient";
import { CssShadowTool } from "./_components/css-shadow";
import { JsonToTypescriptTool } from "./_components/json-to-typescript";
import { HtmlToJsxTool } from "./_components/html-to-jsx";
import { ColorPaletteTool } from "./_components/color-palette";
import { TimezoneConverterTool } from "./_components/timezone-converter";
import { BinaryToTextTool } from "./_components/binary-to-text";
import { AudioCutterTool } from "./_components/audio-cutter";
import { AudioMergerTool } from "./_components/audio-merger";
import { AudioConverterTool } from "./_components/audio-converter";
import { DnsLookupTool } from "./_components/dns-lookup";
import { WhoisLookupTool } from "./_components/whois-lookup";
import { SvgToPngTool } from "./_components/svg-to-png";
import { DaysBetweenTool } from "./_components/days-between";
import { PasswordStrengthTool } from "./_components/password-strength";
import { BarcodeGeneratorTool } from "./_components/barcode-generator";
import { AspectRatioCalculatorTool } from "./_components/aspect-ratio-calculator";
import { QrReaderTool } from "./_components/qr-reader";
import { ColorBlindnessSimulatorTool } from "./_components/color-blindness-simulator";
import { OnlineNotepadTool } from "./_components/online-notepad";
import { TextStatisticsTool } from "./_components/text-statistics";
import { RomanNumeralTool } from "./_components/roman-numeral";
import { PercentageCalculatorTool } from "./_components/percentage-calculator";
import { TipCalculatorTool } from "./_components/tip-calculator";
import { AgeCalculatorTool } from "./_components/age-calculator";
import { BmiCalculatorTool } from "./_components/bmi-calculator";
import { CountdownTimerTool } from "./_components/countdown-timer";
import { DiceRollerTool } from "./_components/dice-roller";
import { DecisionMakerTool } from "./_components/decision-maker";

function getToolComponent(slug: string) {
  const components: Record<string, React.FC> = {
    "json-formatter": JsonFormatterTool,
    "base64-encode-decode": Base64Tool,
    "regex-tester": RegexTesterTool,
    "color-converter": ColorConverterTool,
    "url-encoder-decoder": UrlEncoderTool,
    "image-compressor": ImageCompressorTool,
    "image-converter": ImageConverterTool,
    "pdf-merger": PdfMergerTool,
    "qr-code-generator": QrGeneratorTool,
    "word-counter": WordCounterTool,
    "uuid-generator": UuidGeneratorTool,
    "password-generator": PasswordGeneratorTool,
    "hash-generator": HashGeneratorTool,
    "timestamp-converter": TimestampConverterTool,
    "number-base-converter": NumberBaseConverterTool,
    "case-converter": CaseConverterTool,
    "lorem-ipsum-generator": LoremIpsumGeneratorTool,
    "text-diff-checker": TextDiffCheckerTool,
    "html-entity-converter": HtmlEntityConverterTool,
    "text-repeater": TextRepeaterTool,
    "css-minifier": CssMinifierTool,
    "sql-formatter": SqlFormatterTool,
    "json-to-yaml": JsonToYamlTool,
    "string-escaper": StringEscaperTool,
    "html-tag-stripper": HtmlTagStripperTool,
    "jwt-decoder": JwtDecoderTool,
    "cron-parser": CronParserTool,
    "text-to-binary": TextToBinaryTool,
    "html-preview": HtmlPreviewTool,
    "csv-viewer": CsvViewerTool,
    "ip-calculator": IpCalculatorTool,
    "jwt-generator": JwtGeneratorTool,
    "text-to-slug": TextToSlugTool,
    "text-sorter": TextSorterTool,
    "text-deduplicator": TextDeduplicatorTool,
    "text-reverser": TextReverserTool,
    "random-string-generator": RandomStringGeneratorTool,
    "palindrome-checker": PalindromeCheckerTool,
    "morse-code-converter": MorseCodeConverterTool,
    "temperature-converter": TemperatureConverterTool,
    "weight-converter": WeightConverterTool,
    "length-converter": LengthConverterTool,
    "data-size-converter": DataSizeConverterTool,
    "speed-converter": SpeedConverterTool,
    "area-converter": AreaConverterTool,
    "random-number-generator": RandomNumberGeneratorTool,
    "image-to-base64": ImageToBase64Tool,
    "image-to-pdf": ImageToPdfTool,
    "pdf-splitter": PdfSplitterTool,
    "pdf-rotator": PdfRotatorTool,
    "pdf-page-remover": PdfPageRemoverTool,
    "image-cropper": ImageCropperTool,
    "image-resizer": ImageResizerTool,
    "image-filters": ImageFiltersTool,
    "color-picker": ColorPickerTool,
    "gif-maker": GifMakerTool,
    "image-watermark": ImageWatermarkTool,
    "image-merge": ImageMergeTool,
    "image-splitter": ImageSplitterTool,
    "image-flip": ImageFlipTool,
    "image-border": ImageBorderTool,
    "meme-generator": MemeGeneratorTool,
    "image-to-sketch": ImageToSketchTool,
    "image-invert": ImageInvertTool,
    "image-collage": ImageCollageTool,
    "emoji-remover": EmojiRemoverTool,
    "unicode-detector": UnicodeDetectorTool,
    "caesar-cipher": CaesarCipherTool,
    "json-diff": JsonDiffTool,
    "http-status-codes": HttpStatusCodesTool,
    "markdown-to-html": MarkdownToHtmlTool,
    "timezone-converter": TimezoneConverterTool,
    "binary-to-text": BinaryToTextTool,
    "roman-numeral": RomanNumeralTool,
    "percentage-calculator": PercentageCalculatorTool,
    "tip-calculator": TipCalculatorTool,
    "age-calculator": AgeCalculatorTool,
    "bmi-calculator": BmiCalculatorTool,
    "countdown-timer": CountdownTimerTool,
    "dice-roller": DiceRollerTool,
    "decision-maker": DecisionMakerTool,
    "css-gradient": CssGradientTool,
    "css-shadow": CssShadowTool,
    "json-to-typescript": JsonToTypescriptTool,
    "html-to-jsx": HtmlToJsxTool,
    "color-palette": ColorPaletteTool,
    "audio-cutter": AudioCutterTool,
    "audio-merger": AudioMergerTool,
    "audio-converter": AudioConverterTool,
    "dns-lookup": DnsLookupTool,
    "whois-lookup": WhoisLookupTool,
    "svg-to-png": SvgToPngTool,
    "days-between": DaysBetweenTool,
    "password-strength": PasswordStrengthTool,
    "barcode-generator": BarcodeGeneratorTool,
    "aspect-ratio-calculator": AspectRatioCalculatorTool,
    "qr-reader": QrReaderTool,
    "color-blindness-simulator": ColorBlindnessSimulatorTool,
    "online-notepad": OnlineNotepadTool,
    "text-statistics": TextStatisticsTool,
  };
  return components[slug];
}

export function ToolPageContent({ slug }: { slug: string }) {
  const { t } = useLocale();
  const tool = getTool(slug);
  if (!tool) return null;

  const ToolComponent = getToolComponent(slug);
  const related = tools
    .filter((rt) => rt.category === tool.category && rt.slug !== tool.slug)
    .slice(0, 4);
  const relatedPosts = blogPosts.filter((p) => p.toolSlug === slug).slice(0, 3);

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

      <h1 className="text-3xl font-bold mb-2">{t(`toolList.${tool.slug}.name`)}</h1>
      <p className="text-muted-foreground mb-8">{t(`toolList.${tool.slug}.desc`)}</p>

      <ErrorBoundary>
        <ToolWidget title={t(`toolList.${tool.slug}.name`)}>
          {ToolComponent ? <ToolComponent /> : <p className="text-muted-foreground">{t("common.loading")}</p>}
        </ToolWidget>
      </ErrorBoundary>

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
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-medium text-sm hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
