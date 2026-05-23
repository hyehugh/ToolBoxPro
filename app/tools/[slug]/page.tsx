import { tools, getTool } from "@/lib/tools/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ToolWidget } from "@/components/tools/tool-widget";
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
// New developer tools
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
// New text tools
import { TextToSlugTool } from "./_components/text-to-slug";
import { TextSorterTool } from "./_components/text-sorter";
import { TextDeduplicatorTool } from "./_components/text-deduplicator";
import { TextReverserTool } from "./_components/text-reverser";
import { RandomStringGeneratorTool } from "./_components/random-string-generator";
import { PalindromeCheckerTool } from "./_components/palindrome-checker";
import { MorseCodeConverterTool } from "./_components/morse-code-converter";
// New conversion tools
import { TemperatureConverterTool } from "./_components/temperature-converter";
import { WeightConverterTool } from "./_components/weight-converter";
import { LengthConverterTool } from "./_components/length-converter";
import { DataSizeConverterTool } from "./_components/data-size-converter";
import { SpeedConverterTool } from "./_components/speed-converter";
import { AreaConverterTool } from "./_components/area-converter";
import { RandomNumberGeneratorTool } from "./_components/random-number-generator";
// New image tools
import { ImageToBase64Tool } from "./_components/image-to-base64";
// New PDF tools
import { ImageToPdfTool } from "./_components/image-to-pdf";
import { PdfSplitterTool } from "./_components/pdf-splitter";
import { PdfRotatorTool } from "./_components/pdf-rotator";
import { PdfPageRemoverTool } from "./_components/pdf-page-remover";
import { PdfProtectorTool } from "./_components/pdf-protector";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Online Tool`,
    description: `Free online ${tool.name}. ${tool.description}. No signup, no upload, privacy first.`,
    openGraph: {
      title: `${tool.name} | ToolboxPro`,
      description: tool.description,
    },
  };
}

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
    "pdf-protector": PdfProtectorTool,
  };
  return components[slug];
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const ToolComponent = getToolComponent(slug);
  const related = tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={`/tools?category=${tool.category}`} className="hover:text-foreground capitalize">
          {tool.category} Tools
        </Link>
        <span>/</span>
        <span className="text-foreground">{tool.name}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
      <p className="text-muted-foreground mb-8">{tool.description}</p>

      <ToolWidget title={tool.name}>
        {ToolComponent ? <ToolComponent /> : <p className="text-muted-foreground">Tool coming soon...</p>}
      </ToolWidget>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Related Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors text-sm"
              >
                <span className="font-medium">{t.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
