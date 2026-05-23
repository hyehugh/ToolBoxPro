import Link from "next/link";
import { tools, categories } from "@/lib/tools/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Free Online Tools.
          <br />
          <span className="text-primary">Privacy First.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          100+ tools for developers, designers, and everyday tasks. 
          No signup. No upload. Files stay on your device.
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="search"
            placeholder="Search any tool..."
            className="w-full h-12 pl-4 pr-10 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            id="tool-search"
            autoComplete="off"
          />
        </div>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/tools?category=${cat.id}`}
            className="flex flex-col items-center gap-2 p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <span className="text-3xl">{cat.icon}</span>
            <span className="font-medium text-sm text-center">{cat.name}</span>
            <span className="text-xs text-muted-foreground">
              {tools.filter((t) => t.category === cat.id).length} tools
            </span>
          </Link>
        ))}
      </section>

      {/* All Tools Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">All Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <span className="text-xl mt-1 font-mono">{tool.icon}</span>
              <div>
                <h3 className="font-medium">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why ToolboxPro */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why ToolboxPro?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "No Signup", desc: "Just open and use" },
            { title: "Privacy First", desc: "Files stay on your device" },
            { title: "No Limits", desc: "Unlimited free usage" },
            { title: "AI Enhanced", desc: "Smarter tools" },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-lg border bg-card"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
