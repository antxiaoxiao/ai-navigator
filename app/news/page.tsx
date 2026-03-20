"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const SERIF = "var(--font-eb-garamond), Georgia, serif";
const GOLD  = "#C4A882";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Insight {
  ux:      string;
  builder: string;
  career:  string;
  today:   string;
}

interface Article {
  id:         string;
  category:   string;
  layer:      string;   // "L2", "L3", etc.
  headline:   string;
  summary:    string;
  source:     string;
  timeAgo:    string;
  readTime:   string;
  imageSeed:  string;
  imageAccent: string;
  insight:    Insight;
}

// ─── Content ──────────────────────────────────────────────────────────────────
const ARTICLES: Article[] = [
  {
    id: "claude-context",
    category: "TECHNOLOGY",
    layer: "L2",
    headline: "Anthropic Research Shows Claude Maintains Consistent Accuracy Across 200K-Token Contexts",
    summary: "Earlier degradation in long-context recall has been largely resolved. Entire codebases and document archives can now be analyzed reliably in a single session.",
    source: "Anthropic Blog",
    timeAgo: "2 hours ago",
    readTime: "3 min read",
    imageSeed: "1081",
    imageAccent: "rgba(55,35,110,0.55)",
    insight: {
      ux:      "You can now paste entire user research repositories into Claude and trust it won't miss early documents. Use it to cross-reference months of interview notes in a single session — no more chunking.",
      builder: "For engineers building RAG systems or multi-doc analysis tools, this raises the quality floor. Ask yourself whether a simpler 'send it all' approach now beats complex retrieval pipelines for many use cases.",
      career:  "Prompt architecture is becoming a design skill. As context windows stop being the bottleneck, the value shifts to knowing how to structure what you feed the model — this competency gap is opening right now.",
      today:   "Pick your most complex research synthesis task and run it through Claude with the full document set, no chunking. Compare output quality to your previous approach.",
    },
  },
  {
    id: "figma-ai",
    category: "PRODUCTS",
    layer: "L3",
    headline: "Figma Releases AI Layout Suggestions in Dev Mode — Now in Public Beta",
    summary: "Designers can describe intended layout behavior in plain language; Figma translates it into auto layout constraints and component properties automatically.",
    source: "Figma Blog",
    timeAgo: "5 hours ago",
    readTime: "2 min read",
    imageSeed: "180",
    imageAccent: "rgba(15,60,105,0.55)",
    insight: {
      ux:      "Describe layout intent in plain language and Figma generates the auto layout constraints. Worth 30 minutes in the beta to understand where it breaks down — that boundary is exactly where your expertise still matters.",
      builder: "AI-generated layout constraints will need developer review. Establish a review process now so they don't create unexpected behavior in code — especially for responsive breakpoints.",
      career:  "As AI handles layout mechanics, UX work in Figma shifts toward defining intent and reviewing output — more art direction, less constraint-tuning. Designers who understand this shift will adapt faster.",
      today:   "Join the Figma AI Dev Mode beta. Try describing one existing component in natural language and see how it interprets your intent.",
    },
  },
  {
    id: "goldman-sachs",
    category: "INDUSTRY",
    layer: "L5",
    headline: "Goldman Sachs: 40% of UX Tasks Will Shift to AI Oversight Roles by 2027",
    summary: "A new Goldman Sachs report projects that nearly half of UX design tasks will transition from hands-on execution to AI direction and quality review within three years.",
    source: "Goldman Sachs",
    timeAgo: "1 day ago",
    readTime: "4 min read",
    imageSeed: "430",
    imageAccent: "rgba(85,55,10,0.55)",
    insight: {
      ux:      "The 40% isn't about replacement — it's about role evolution. The tasks shifting are pattern recognition in research, generating copy variants, and accessibility checking. What remains is judgment, framing, and stakeholder influence.",
      builder: "Product teams will increasingly need designers who can evaluate AI-generated UI and direct AI systems, not just craft pixels. Build fluency now in reviewing and prompting generative design systems.",
      career:  "'AI oversight' is a real job title forming right now. It rewards systems thinking, quality judgment, and communication — things experienced UX people already have. The window to position yourself early is open for maybe another 18 months.",
      today:   "List the 5 most repetitive tasks in your current week. For each, ask: could AI do a first draft of this? That list is your personal AI adoption roadmap.",
    },
  },
];

const LAYER_FILTERS = ["All", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8"];

const INSIGHT_TABS = [
  { key: "ux",      label: "🎨 As UX"     },
  { key: "builder", label: "🚀 As Builder" },
  { key: "career",  label: "📈 Career"    },
  { key: "today",   label: "⚡ Do Today"  },
] as const;

type InsightKey = "ux" | "builder" | "career" | "today";

// ─── L-tag popover ────────────────────────────────────────────────────────────
function LTagButton({ layer, onFilter }: { layer: string; onFilter: (l: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        style={{
          fontFamily: SERIF, fontSize: "11px", letterSpacing: "0.14em",
          color: GOLD, border: `1px solid rgba(196,168,130,0.35)`,
          borderRadius: "3px", padding: "2px 8px",
          background: "transparent", cursor: "pointer",
          transition: "background 0.15s",
          backgroundColor: open ? "rgba(196,168,130,0.10)" : "transparent",
        }}
      >
        {layer}
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 60,
          backgroundColor: "#151517", border: "1px solid rgba(196,168,130,0.30)",
          borderRadius: "6px", overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.55)",
          minWidth: "190px",
        }}>
          <Link
            href="/map"
            onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: "9px", padding: "11px 14px", fontFamily: SERIF, fontSize: "13px", color: "rgba(240,235,225,0.80)", textDecoration: "none", borderBottom: "1px solid rgba(196,168,130,0.10)" }}
          >
            <span>📖</span>
            <span>Knowledge Map</span>
          </Link>
          <button
            onClick={() => { onFilter(layer); setOpen(false); }}
            style={{ display: "flex", alignItems: "center", gap: "9px", padding: "11px 14px", width: "100%", fontFamily: SERIF, fontSize: "13px", color: "rgba(240,235,225,0.80)", background: "transparent", cursor: "pointer", border: "none", textAlign: "left" }}
          >
            <span>📰</span>
            <span>Filter by {layer}</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────
function ArticleCard({ article, onFilter }: { article: Article; onFilter: (l: string) => void }) {
  const [open, setOpen]             = useState(false);
  const [activeTab, setActiveTab]   = useState<InsightKey>("ux");

  return (
    <div style={{
      borderRadius: "8px", overflow: "hidden",
      border: open ? "1px solid rgba(196,168,130,0.30)" : "1px solid rgba(196,168,130,0.14)",
      background: open ? "rgba(196,168,130,0.025)" : "transparent",
      transition: "border-color 0.2s, background 0.2s",
    }}>
      {/* Hero image */}
      <div
        onClick={() => setOpen((o) => !o)}
        style={{
          height: "160px", cursor: "pointer", position: "relative",
          backgroundImage: `url(https://picsum.photos/seed/${article.imageSeed}/700/320)`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${article.imageAccent} 0%, rgba(13,13,15,0.65) 100%)` }} />
        {/* Category + L-tag overlay */}
        <div style={{ position: "absolute", bottom: "12px", left: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: SERIF, fontSize: "11px", letterSpacing: "0.20em", color: "rgba(255,245,230,0.88)", textTransform: "uppercase" }}>
            {article.category}
          </span>
          <span style={{ color: "rgba(196,168,130,0.50)", fontSize: "10px" }}>·</span>
          <div onClick={(e) => e.stopPropagation()}>
            <LTagButton layer={article.layer} onFilter={onFilter} />
          </div>
        </div>
        {/* Source / time / read time */}
        <div style={{ position: "absolute", bottom: "12px", right: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontFamily: SERIF, fontSize: "11px", color: "rgba(240,235,225,0.45)", letterSpacing: "0.04em" }}>{article.source}</span>
          <span style={{ color: "rgba(196,168,130,0.30)", fontSize: "10px" }}>·</span>
          <span style={{ fontFamily: SERIF, fontSize: "11px", color: "rgba(240,235,225,0.35)" }}>{article.timeAgo}</span>
          <span style={{ color: "rgba(196,168,130,0.30)", fontSize: "10px" }}>·</span>
          <span style={{ fontFamily: SERIF, fontSize: "11px", color: "rgba(240,235,225,0.35)" }}>{article.readTime}</span>
        </div>
      </div>

      {/* Headline + summary row */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: "100%", textAlign: "left", padding: "16px 20px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", background: "transparent", border: "none", cursor: "pointer" }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: SERIF, fontSize: "18px", color: "rgba(240,235,225,0.93)", lineHeight: 1.35, marginBottom: "8px" }}>
            {article.headline}
          </p>
          <p style={{ fontFamily: SERIF, fontSize: "14px", color: "rgba(200,190,175,0.62)", lineHeight: 1.65, margin: 0 }}>
            {article.summary}
          </p>
        </div>
        <span style={{ color: "rgba(196,168,130,0.50)", marginTop: "4px", flexShrink: 0, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <polyline points="3 6 8 11 13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* Expanded insight panel */}
      <div style={{ maxHeight: open ? "600px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
        <div style={{ padding: "0 20px 22px" }}>
          <div style={{ height: "1px", backgroundColor: "rgba(196,168,130,0.14)", marginBottom: "16px" }} />

          {/* Insight tabs */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "16px", flexWrap: "wrap" }}>
            {INSIGHT_TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    fontFamily: SERIF, fontSize: "12px",
                    color: isActive ? "rgba(240,235,225,0.90)" : "rgba(200,190,175,0.45)",
                    border: `1px solid ${isActive ? "rgba(196,168,130,0.45)" : "rgba(196,168,130,0.16)"}`,
                    borderRadius: "20px", padding: "4px 12px",
                    backgroundColor: isActive ? "rgba(196,168,130,0.10)" : "transparent",
                    cursor: "pointer", transition: "all 0.15s",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Insight text */}
          <p style={{ fontFamily: SERIF, fontSize: "15px", color: "rgba(240,235,225,0.80)", lineHeight: 1.72, margin: 0, minHeight: "60px", transition: "opacity 0.15s" }}>
            {article.insight[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NewsPage() {
  const [activeLayer, setActiveLayer] = useState("All");

  const filtered = activeLayer === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.layer === activeLayer);

  function handleFilter(layer: string) {
    setActiveLayer(layer);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0d0d0f", paddingBottom: "96px" }}>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={{ padding: "48px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px" }}>
          <h1 style={{ fontFamily: SERIF, fontSize: "32px", color: "rgba(240,235,225,0.92)", fontWeight: 400 }}>News</h1>
          <span style={{ fontFamily: SERIF, fontSize: "13px", letterSpacing: "0.12em", color: "rgba(196,168,130,0.55)", textTransform: "uppercase" }}>
            March 20
          </span>
        </div>
        <p style={{ fontFamily: SERIF, fontSize: "15px", color: "rgba(200,190,175,0.50)", marginBottom: "24px" }}>
          3 things in AI today — and what they mean for you
        </p>

        {/* ── Layer filter row ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "20px", WebkitOverflowScrolling: "touch" as "touch" }}>
          {LAYER_FILTERS.map((layer) => {
            const active = activeLayer === layer;
            return (
              <button
                key={layer}
                onClick={() => setActiveLayer(layer)}
                style={{
                  fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.10em",
                  color: active ? GOLD : "rgba(196,168,130,0.40)",
                  border: `1px solid ${active ? "rgba(196,168,130,0.50)" : "rgba(196,168,130,0.16)"}`,
                  borderRadius: "20px", padding: "5px 14px",
                  backgroundColor: active ? "rgba(196,168,130,0.08)" : "transparent",
                  cursor: "pointer", transition: "all 0.15s",
                  whiteSpace: "nowrap" as const, flexShrink: 0,
                }}
              >
                {layer}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Articles ────────────────────────────────────────────────────────── */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "14px", maxWidth: "720px" }}>
        {filtered.length === 0 ? (
          <p style={{ fontFamily: SERIF, fontSize: "15px", color: "rgba(200,190,175,0.30)", padding: "32px 0", textAlign: "center" }}>
            No articles for {activeLayer} today.
          </p>
        ) : (
          filtered.map((article) => (
            <ArticleCard key={article.id} article={article} onFilter={handleFilter} />
          ))
        )}
      </div>
    </main>
  );
}
