"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

// ─── Shared font constant ─────────────────────────────────────────────────────
const SERIF = "var(--font-eb-garamond), Georgia, serif";

// ─── Direction options ────────────────────────────────────────────────────────
const DIRECTIONS = [
  { id: "efficiency", label: "Daily Efficiency",  desc: "Use AI to get today's work done twice as fast" },
  { id: "workflow",   label: "Workflow Upgrade",   desc: "Redesign your entire workflow with AI — and bring the team along" },
  { id: "evolution",  label: "Role Evolution",     desc: "Use AI capabilities to expand or transition your role" },
];

// ─── This Week actions ────────────────────────────────────────────────────────
const ACTIONS = [
  {
    id: "figma-component",
    layer: "L4",
    time: "~15 min",
    title: "Generate a component draft with Figma AI",
    steps: [
      "Open your current project's Design System file",
      "Pick a component you need to add — e.g. Tag, Badge, or Toast",
      'In the Figma AI prompt field, describe: \u201cGenerate [component name] following our existing component conventions, with default, hover, and disabled states\u201d',
      "Review the output against your token system; adjust auto layout and spacing as needed",
    ],
    prompt: "Following our Design System conventions, generate a [component name] component with variants: default, hover, disabled. Auto layout based on 8px grid, colors referencing existing color tokens.",
    mapHref: "/map",
  },
  {
    id: "research-synthesis",
    layer: "L4",
    time: "~15 min",
    title: "Synthesize user interview notes with Claude",
    steps: [
      "Paste your raw interview notes — a single session or a batch — into Claude",
      'Ask: \u201cIdentify the top 3 recurring pain points and quote supporting evidence for each\u201d',
      "Check whether the synthesis matches your instincts from the session",
      "Use the output as a starting point for your affinity diagram",
    ],
    prompt: "You are a UX researcher. From these interview notes, identify the top 3 recurring pain points, quote 1–2 supporting phrases for each, and flag any surprising or contradictory signals.",
    mapHref: "/map",
  },
  {
    id: "competitive-ux",
    layer: "L3",
    time: "~20 min",
    title: "Run a competitive UX analysis with AI",
    steps: [
      "Choose a competitor product you want to understand better",
      "Screenshot 3–5 key flows: onboarding, core task, error state",
      'Upload to Claude and ask: \u201cWhat UX patterns does this product rely on, and what is it optimising for?\u201d',
      "Note what you'd do differently — this becomes a design brief",
    ],
    prompt: "Analyze these screenshots from [product]. Identify the core UX patterns, the primary user goal the interface is designed around, and 2–3 specific design decisions that reveal the product's priorities.",
    mapHref: "/map",
  },
  {
    id: "microcopy",
    layer: "L4",
    time: "~10 min",
    title: "Write micro-copy variants for a new feature",
    steps: [
      "Pick one UI moment with weak copy — an empty state, error message, or CTA",
      "Paste the current text into Claude with the screen context",
      'Ask: \u201cWrite 5 alternatives — range from utilitarian to warm and encouraging\u201d',
      "Pick one variant, test it with a teammate, note the reaction",
    ],
    prompt: "You are a UX writer. Here is the current copy for [screen/state]: \u201c[paste text]\u201d. Write 5 alternative versions that range in tone from direct/utilitarian to warm and encouraging. Each should be under 12 words.",
    mapHref: "/map",
  },
  {
    id: "spec-from-critique",
    layer: "L4",
    time: "~15 min",
    title: "Turn a design critique into a spec",
    steps: [
      "Paste your raw critique notes from a design review into Claude",
      'Ask: \u201cOrganise these into a prioritised list of changes with acceptance criteria\u201d',
      "Review and trim — remove anything misunderstood or out of scope",
      "Paste the result into your Jira ticket or Notion spec as a starting draft",
    ],
    prompt: "Here are notes from a design critique: [paste notes]. Organise them into a prioritised list of design changes. For each change, write one clear acceptance criterion a developer could use to verify it's done.",
    mapHref: "/map",
  },
  {
    id: "accessibility-audit",
    layer: "L3",
    time: "~20 min",
    title: "Audit a flow for accessibility with AI",
    steps: [
      "Screenshot 4–6 screens of the flow you want to audit",
      'Upload to Claude and ask: \u201cIdentify potential WCAG 2.1 AA issues in these screens\u201d',
      "For each issue, ask Claude to suggest the fix in plain language",
      "Create a Jira sub-task or Notion checklist from the output",
    ],
    prompt: "You are an accessibility expert. Review these UI screenshots for potential WCAG 2.1 AA issues. For each issue: name the guideline it violates, describe the problem clearly, and suggest the simplest fix.",
    mapHref: "/map",
  },
  {
    id: "user-journey",
    layer: "L3",
    time: "~20 min",
    title: "Map a user journey from raw research notes",
    steps: [
      "Gather notes from 2–3 user sessions covering the same task",
      'Paste into Claude and ask: \u201cDraft a user journey map — steps, emotions, and pain points\u201d',
      "Compare the AI draft to your own mental model; correct anything off",
      "Use the output as the skeleton for a Miro or FigJam journey map",
    ],
    prompt: "You are a UX designer. From these user research notes, draft a user journey map for [task/goal]. Structure it as: Stage → User Action → Emotion (frustrated / neutral / satisfied) → Pain point or opportunity. Keep each row concise.",
    mapHref: "/map",
  },
  {
    id: "stakeholder-update",
    layer: "L5",
    time: "~10 min",
    title: "Draft a stakeholder update with AI",
    steps: [
      "List bullet points of what shipped, what's in progress, and what's blocked",
      'Paste into Claude and ask: \u201cRewrite this as a concise stakeholder update — lead with impact, not tasks\u201d',
      "Edit for accuracy; remove any generic filler phrases",
      "Send or post in your team channel",
    ],
    prompt: "Here are my raw progress notes: [paste bullets]. Rewrite this as a concise stakeholder update (max 150 words). Lead with the most important outcome, then status, then blockers. Tone: confident, clear, not corporate.",
    mapHref: "/map",
  },
];

// ─── Direction path stages ────────────────────────────────────────────────────
const PATH_STAGES = [
  {
    id: "s1",
    range: "Now · Week 1",
    title: "Tool Fluency",
    desc: "Use AI for isolated, time-boxed tasks within your existing workflow",
    example: "Generate a component draft · Synthesise research notes",
    layer: "L4",
    current: true,
  },
  {
    id: "s2",
    range: "Weeks 2–4",
    title: "Workflow Integration",
    desc: "Weave AI into your regular process so it saves time at the task level",
    example: "Draft specs, write handoff notes, run competitive analysis",
    layer: "L4",
    current: false,
  },
  {
    id: "s3",
    range: "Month 1–2",
    title: "Cross-functional Fluency",
    desc: "Bring AI literacy across design and engineering — read code, lead sessions",
    example: "Generate React components from designs · Run a team AI workshop",
    layer: "L3",
    current: false,
  },
  {
    id: "s4",
    range: "Month 2–3",
    title: "Technical Authority",
    desc: "Own the design-to-code conversation with precision and confidence",
    example: "Review AI-generated components · Set team AI standards",
    layer: "L3",
    current: false,
  },
];

// ─── Shared styles ────────────────────────────────────────────────────────────
const SANS = "system-ui, -apple-system, sans-serif";

const SECTION_LABEL: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: "12px",
  letterSpacing: "0.20em",
  color: "rgba(221,184,98,1.0)",
  textTransform: "uppercase",
  marginBottom: "16px",
  display: "block",
};

const LAYER_BADGE: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: "11px",
  letterSpacing: "0.14em",
  color: "#DDB862",
  border: "1px solid rgba(221,184,98,0.30)",
  borderRadius: "3px",
  padding: "2px 8px",
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ActionsPage() {
  const [selected, setSelected]         = useState<string[]>(["efficiency", "evolution"]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedId, setExpandedId]     = useState<string | null>(null);
  const [feedback, setFeedback]         = useState<Record<string, "up" | "down">>({});
  const [copied, setCopied]             = useState(false);
  const [activeStage, setActiveStage]   = useState<string | null>(null);
  const [actionOrder, setActionOrder]   = useState<number[]>(() => ACTIONS.map((_, i) => i));

  function toggleDir(id: string) {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((d) => d !== id);
      if (prev.length >= 2) return prev;
      return [...prev, id];
    });
  }

  function toggleExpand(id: string) {
    setExpandedId((cur) => (cur === id ? null : id));
    setCopied(false);
  }

  function shuffleActions() {
    setActionOrder((prev) => {
      const arr = [...prev];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    });
    setExpandedId(null);
    setCopied(false);
  }

  function toggleFeedback(id: string, value: "up" | "down") {
    setFeedback((prev) => ({
      ...prev,
      [id]: prev[id] === value ? undefined as unknown as "up" | "down" : value,
    }));
  }

  const copyPrompt = useCallback((prompt: string) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const selectedLabels = DIRECTIONS.filter((d) => selected.includes(d.id)).map((d) => d.label);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0d0d0f", paddingBottom: "96px" }}>

      {/* ── Header + inline Direction dropdown ─────────────────────────────── */}
      <div style={{ padding: "48px 24px 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>

          {/* Left: title + subtitle */}
          <div>
            <h1 style={{ fontFamily: SERIF, fontSize: "32px", color: "rgba(240,235,225,0.92)", fontWeight: 400, marginBottom: "6px" }}>
              Actions
            </h1>
            <p style={{ fontFamily: SERIF, fontSize: "16px", color: "rgba(200,190,175,0.65)" }}>
              From insight to real change
            </p>
          </div>

          {/* Right: direction tags or picker */}
          <div style={{ position: "relative", flexShrink: 0, marginTop: "12px" }}>

            {/* ── Selected state: show tag pills + edit button ── */}
            {selected.length > 0 ? (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                {selectedLabels.map((label) => (
                  <span key={label} style={{
                    fontFamily: SERIF, fontSize: "11px",
                    color: "#DDB862",
                    letterSpacing: "0.03em",
                    padding: "3px 9px",
                    border: "1px solid rgba(221,184,98,0.40)",
                    borderRadius: "20px",
                    backgroundColor: "rgba(221,184,98,0.07)",
                    whiteSpace: "nowrap",
                  }}>
                    {label}
                  </span>
                ))}
                {/* Edit button */}
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  title="Edit directions"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "26px", height: "26px",
                    border: "1px solid rgba(221,184,98,0.22)",
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    color: "rgba(221,184,98,0.55)",
                    flexShrink: 0,
                  }}
                >
                  {/* pencil icon */}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 1.5l2 2L4 10H2v-2L8.5 1.5z"/>
                  </svg>
                </button>
              </div>
            ) : (
              /* ── Empty state: single "Direction ▾" pill ── */
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "6px 11px",
                  border: "1px solid rgba(221,184,98,0.22)",
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <span style={{ fontFamily: SERIF, fontSize: "12px", color: "rgba(221,184,98,0.55)", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>Direction</span>
                <span style={{ fontSize: "9px", color: "rgba(221,184,98,0.50)", transform: dropdownOpen ? "rotate(180deg)" : "none", display: "inline-block", transition: "transform 0.2s" }}>▾</span>
              </button>
            )}

            {/* Dropdown panel — absolutely positioned, right-aligned */}
            {dropdownOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 6px)", right: 0, zIndex: 50,
                minWidth: "220px",
                border: "1px solid rgba(221,184,98,0.40)",
                borderRadius: "8px",
                backgroundColor: "#131315",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.50)",
              }}>
                {DIRECTIONS.map((dir, i) => {
                  const active   = selected.includes(dir.id);
                  const disabled = !active && selected.length >= 2;
                  return (
                    <button
                      key={dir.id}
                      onClick={() => { if (!disabled) toggleDir(dir.id); }}
                      style={{
                        width: "100%", textAlign: "left",
                        padding: "12px 14px",
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        backgroundColor: active ? "rgba(221,184,98,0.07)" : "transparent",
                        borderTop: i === 0 ? "none" : "1px solid rgba(221,184,98,0.08)",
                        cursor: disabled ? "default" : "pointer",
                        opacity: disabled ? 0.32 : 1,
                        transition: "opacity 0.15s, background-color 0.15s",
                      }}
                    >
                      <span style={{ marginTop: "3px", width: "13px", height: "13px", borderRadius: "3px", border: `1px solid ${active ? "rgba(221,184,98,0.70)" : "rgba(221,184,98,0.25)"}`, backgroundColor: active ? "rgba(221,184,98,0.18)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
                        {active && <span style={{ fontSize: "8px", color: "#DDB862" }}>✓</span>}
                      </span>
                      <div>
                        <span style={{ fontFamily: SERIF, fontSize: "14px", color: active ? "rgba(240,235,225,0.92)" : "rgba(240,235,225,0.65)", display: "block", marginBottom: "2px" }}>
                          {dir.label}
                        </span>
                        <span style={{ fontFamily: SERIF, fontSize: "12px", color: "rgba(200,190,175,0.40)" }}>
                          {dir.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── This Week ──────────────────────────────────────────────────────── */}
      <div style={{ padding: "0 24px 28px" }}>

        {/* Section header row */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <span style={{ ...SECTION_LABEL, marginBottom: 0 }}>This Week</span>
          <div style={{ flex: 1 }} />
          <button
            onClick={shuffleActions}
            title="Shuffle list"
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              background: "transparent", border: "none",
              cursor: "pointer",
              color: "rgba(221,184,98,0.40)",
              transition: "color 0.15s",
              padding: "4px 0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,184,98,0.75)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,184,98,0.40)")}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.5 3h3v3"/>
              <path d="M13.5 3L9 7.5"/>
              <path d="M10.5 13h3v-3"/>
              <path d="M13.5 13L9 8.5"/>
              <path d="M2.5 3l4 4.5-4 4.5"/>
            </svg>
            <span style={{ fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.08em" }}>Shuffle</span>
          </button>
        </div>

        <div style={{ border: "1px solid rgba(221,184,98,0.18)", borderRadius: "6px", overflow: "hidden" }}>
          {actionOrder.map((actIdx, i) => {
            const act = ACTIONS[actIdx];
            const open = expandedId === act.id;
            const fb   = feedback[act.id];
            const isLast = i === ACTIONS.length - 1;
            return (
              <div key={act.id} style={{ borderTop: i === 0 ? "none" : "1px solid rgba(221,184,98,0.10)" }}>

                {/* ── Row header (always visible) ── */}
                <button
                  onClick={() => toggleExpand(act.id)}
                  style={{
                    width: "100%", textAlign: "left",
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "14px 16px",
                    backgroundColor: open ? "rgba(221,184,98,0.04)" : "transparent",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                  }}
                >
                  <Link
                    href={act.mapHref}
                    onClick={(e) => e.stopPropagation()}
                    style={LAYER_BADGE}
                  >
                    {act.layer}
                  </Link>
                  <span style={{ fontFamily: SERIF, fontSize: "15px", color: open ? "rgba(240,235,225,0.92)" : "rgba(240,235,225,0.78)", flex: 1, lineHeight: 1.4 }}>
                    {act.title}
                  </span>
                  <span style={{ fontFamily: SERIF, fontSize: "12px", color: "rgba(200,190,175,0.40)", whiteSpace: "nowrap", marginRight: "6px" }}>
                    {act.time}
                  </span>
                  <span style={{ fontSize: "10px", color: "rgba(221,184,98,0.45)", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>▾</span>
                </button>

                {/* ── Expanded body ── */}
                {open && (
                  <div style={{ borderTop: "1px solid rgba(221,184,98,0.10)" }}>

                    {/* Steps */}
                    <div style={{ padding: "4px 20px 16px" }}>
                      {act.steps.map((step, si) => (
                        <div key={si} style={{ display: "flex", gap: "14px", paddingTop: "13px" }}>
                          <span style={{ fontFamily: SERIF, fontSize: "13px", color: "rgba(221,184,98,0.65)", minWidth: "14px", paddingTop: "2px", flexShrink: 0 }}>
                            {si + 1}
                          </span>
                          <p style={{ fontFamily: SERIF, fontSize: "15px", color: "rgba(200,190,175,0.80)", lineHeight: 1.6, margin: 0 }}>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Prompt */}
                    <div style={{ margin: "0 16px 14px", borderRadius: "5px", overflow: "hidden", border: "1px solid rgba(221,184,98,0.22)", borderLeft: "3px solid rgba(221,184,98,0.45)", backgroundColor: "rgba(221,184,98,0.05)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px 8px" }}>
                        <span style={{ fontFamily: SANS, fontSize: "10px", letterSpacing: "0.20em", color: "rgba(221,184,98,0.80)", textTransform: "uppercase" }}>
                          Prompt Template
                        </span>
                        <button
                          onClick={() => copyPrompt(act.prompt)}
                          style={{
                            display: "flex", alignItems: "center", gap: "5px",
                            fontFamily: SANS, fontSize: "11px",
                            color: copied ? "#DDB862" : "rgba(221,184,98,0.60)",
                            border: `1px solid ${copied ? "rgba(221,184,98,0.55)" : "rgba(221,184,98,0.28)"}`,
                            borderRadius: "4px", padding: "4px 10px",
                            backgroundColor: copied ? "rgba(221,184,98,0.10)" : "transparent",
                            cursor: "pointer", transition: "all 0.2s",
                          }}
                        >
                          {copied
                            ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.2"/><path d="M4 3V2.5C4 1.67 4.67 1 5.5 1H9.5C10.33 1 11 1.67 11 2.5V6.5C11 7.33 10.33 8 9.5 8H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                          }
                          {copied ? "Copied" : "Copy"}
                        </button>
                      </div>
                      <p style={{ fontFamily: SANS, fontSize: "13px", color: "rgba(200,190,175,0.85)", lineHeight: 1.7, padding: "0 14px 14px", margin: 0 }}>
                        &ldquo;{act.prompt}&rdquo;
                      </p>
                    </div>

                    {/* Controls: thumbs + explore */}
                    <div style={{ padding: "8px 16px 14px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <button
                        onClick={() => toggleFeedback(act.id, "up")}
                        title="This works for me"
                        style={{
                          width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center",
                          borderRadius: "6px",
                          border: fb === "up" ? "1.5px solid rgba(221,184,98,0.70)" : "1px solid rgba(221,184,98,0.22)",
                          backgroundColor: fb === "up" ? "rgba(221,184,98,0.18)" : "rgba(221,184,98,0.06)",
                          cursor: "pointer", fontSize: "15px", transition: "all 0.15s",
                          opacity: fb === "down" ? 0.28 : 1,
                        }}
                      >👍</button>
                      <button
                        onClick={() => toggleFeedback(act.id, "down")}
                        title="Too hard"
                        style={{
                          width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center",
                          borderRadius: "6px",
                          border: fb === "down" ? "1.5px solid rgba(180,100,80,0.55)" : "1px solid rgba(221,184,98,0.22)",
                          backgroundColor: fb === "down" ? "rgba(180,100,80,0.14)" : "rgba(221,184,98,0.06)",
                          cursor: "pointer", fontSize: "15px", transition: "all 0.15s",
                          opacity: fb === "up" ? 0.28 : 1,
                        }}
                      >👎</button>
                      <div style={{ flex: 1 }} />
                      <Link
                        href={act.mapHref}
                        style={{ fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.06em", color: "rgba(221,184,98,0.55)", textDecoration: "none", whiteSpace: "nowrap" }}
                      >
                        Explore more →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Direction Path ─────────────────────────────────────────────────── */}
      <div style={{ padding: "0 24px 40px" }}>
        <span style={SECTION_LABEL}>Direction · 1–3 months</span>

        <div style={{ border: "1px solid rgba(221,184,98,0.18)", borderRadius: "6px", overflow: "hidden" }}>
          {PATH_STAGES.map((stage, i) => {
            const open   = activeStage === stage.id;
            const isLast = i === PATH_STAGES.length - 1;
            return (
              <div key={stage.id}>
                <button
                  onClick={() => setActiveStage(open ? null : stage.id)}
                  style={{ width: "100%", textAlign: "left", padding: "16px 18px", display: "flex", alignItems: "flex-start", gap: "14px", backgroundColor: open ? "rgba(221,184,98,0.04)" : "transparent", borderTop: i === 0 ? "none" : "1px solid rgba(221,184,98,0.08)", cursor: "pointer", transition: "background-color 0.15s" }}
                >
                  {/* Timeline dot + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "4px", flexShrink: 0 }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: stage.current ? "#DDB862" : "transparent", border: `1.5px solid ${stage.current ? "#DDB862" : "rgba(221,184,98,0.30)"}` }} />
                    {!isLast && <div style={{ width: "1px", minHeight: "24px", backgroundColor: "rgba(221,184,98,0.12)", marginTop: "4px" }} />}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: SERIF, fontSize: "10px", letterSpacing: "0.14em", color: stage.current ? "rgba(221,184,98,0.80)" : "rgba(221,184,98,0.42)", textTransform: "uppercase" as const }}>
                        {stage.range}
                      </span>
                      <span style={{ fontFamily: SERIF, fontSize: "10px", letterSpacing: "0.12em", color: stage.current ? "#DDB862" : "rgba(221,184,98,0.30)", border: `1px solid ${stage.current ? "rgba(221,184,98,0.35)" : "rgba(221,184,98,0.16)"}`, borderRadius: "2px", padding: "1px 5px" }}>
                        {stage.layer}
                      </span>
                      {stage.current && (
                        <span style={{ fontFamily: SERIF, fontSize: "9px", letterSpacing: "0.14em", color: "rgba(221,184,98,0.55)", textTransform: "uppercase" as const }}>
                          you are here
                        </span>
                      )}
                    </div>
                    <span style={{ fontFamily: SERIF, fontSize: "16px", color: stage.current ? "rgba(240,235,225,0.90)" : "rgba(240,235,225,0.55)", display: "block" }}>
                      {stage.title}
                    </span>
                  </div>

                  <span style={{ fontSize: "10px", color: "rgba(221,184,98,0.35)", transform: open ? "rotate(180deg)" : "none", display: "inline-block", transition: "transform 0.2s", paddingTop: "4px", flexShrink: 0 }}>
                    ▾
                  </span>
                </button>

                {open && (
                  <div style={{ padding: "0 18px 18px 40px", borderTop: "1px solid rgba(221,184,98,0.06)" }}>
                    <p style={{ fontFamily: SERIF, fontSize: "15px", color: "rgba(200,190,175,0.75)", lineHeight: 1.65, marginBottom: "10px" }}>
                      {stage.desc}
                    </p>
                    <p style={{ fontFamily: SERIF, fontSize: "13px", color: "rgba(221,184,98,0.65)", fontStyle: "italic" }}>
                      e.g. {stage.example}
                    </p>
                    {!stage.current && (
                      <button
                        onClick={() => { setExpandedId(null); setActiveStage(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        style={{ marginTop: "12px", fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.12em", color: "rgba(221,184,98,0.65)", border: "1px solid rgba(221,184,98,0.25)", borderRadius: "4px", padding: "6px 14px", background: "transparent", cursor: "pointer", textTransform: "uppercase" as const }}
                      >
                        Explore this stage →
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
