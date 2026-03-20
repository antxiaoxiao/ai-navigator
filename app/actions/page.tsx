"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";

const SERIF = "var(--font-eb-garamond), Georgia, serif";
const SANS  = "system-ui, -apple-system, sans-serif";
const GOLD  = "#C4A882";

// ─── Types ────────────────────────────────────────────────────────────────────
type TrackId = "build" | "craft" | "business";

interface Stage {
  label: string;
  current: boolean;
}

interface ActionCard {
  id:          string;
  layer:       string;
  title:       string;
  description: string;
  time:        string;
  mapHref:     string;
}

interface DirectionCard {
  title: string;
  body:  string;
}

interface TrackData {
  label:      string;
  stages:     Stage[];
  actions:    ActionCard[];
  directions: DirectionCard[];
}

// ─── Track content ────────────────────────────────────────────────────────────
const TRACKS: Record<TrackId, TrackData> = {
  build: {
    label: "Build",
    stages: [
      { label: "Define",    current: false },
      { label: "Skeleton",  current: false },
      { label: "Design",    current: true  },
      { label: "Data",      current: false },
      { label: "Validate",  current: false },
    ],
    actions: [
      {
        id: "build-1",
        layer: "L4",
        title: "Generate a React component from your Figma frame",
        description: "Export any Figma component as a PNG, paste it into Claude with your token system. Get working React code with TypeScript props and Tailwind classes you can drop straight into the codebase.",
        time: "~20 min",
        mapHref: "/map",
      },
      {
        id: "build-2",
        layer: "L4",
        title: "Scaffold a working prototype with Claude Code",
        description: "Describe one screen and one user flow. Claude Code builds it, you iterate. Skip the static mockup phase entirely for early concept validation with real interactions.",
        time: "~30 min",
        mapHref: "/map",
      },
      {
        id: "build-3",
        layer: "L3",
        title: "Debug a layout issue with AI as pair programmer",
        description: "Screenshot the broken layout, paste your CSS or Tailwind classes, ask Claude to diagnose. Faster than Stack Overflow and it explains the root cause so you learn the pattern.",
        time: "~15 min",
        mapHref: "/map",
      },
    ],
    directions: [
      {
        title: "From designer who codes → to engineer who designs",
        body: "The Build track is about closing the handoff gap — not becoming an engineer, but becoming capable of working directly in code on the parts that matter. AI makes this possible without years of learning.",
      },
      {
        title: "Own the design-to-code conversation",
        body: "The goal isn't to replace your engineer. It's to remove the ambiguity that causes rework. AI gives you the ability to produce reference implementations that say exactly what you mean.",
      },
    ],
  },

  craft: {
    label: "UX Craft",
    stages: [
      { label: "Discovery",  current: false },
      { label: "Execution",  current: true  },
      { label: "Testing",    current: false },
      { label: "Delivery",   current: false },
    ],
    actions: [
      {
        id: "craft-1",
        layer: "L4",
        title: "Synthesize a full research repository in one session",
        description: "Paste raw interview notes from multiple sessions. Ask Claude to identify top pain points, contradictions, and surprising signals. Use the output as your affinity diagram foundation.",
        time: "~15 min",
        mapHref: "/map",
      },
      {
        id: "craft-2",
        layer: "L4",
        title: "Turn a design critique into an actionable spec",
        description: "Paste your design review notes and ask Claude to organize them into prioritized changes with acceptance criteria. Ready to drop into Jira or Notion without editing.",
        time: "~15 min",
        mapHref: "/map",
      },
      {
        id: "craft-3",
        layer: "L3",
        title: "Run a heuristic review with Claude as co-evaluator",
        description: "Screenshot 4–6 key screens. Claude applies Nielsen's 10 heuristics and outputs violations by severity. Turn the output directly into your sprint backlog.",
        time: "~20 min",
        mapHref: "/map",
      },
    ],
    directions: [
      {
        title: "AI as your research co-pilot, not a shortcut",
        body: "The risk with AI-assisted research synthesis is over-trusting the output. The goal is to let AI find the patterns while you validate the meaning — not the other way around. Your judgment is the product.",
      },
      {
        title: "From execution to editorial judgment",
        body: "As AI handles more of the craft mechanics, the uniquely human part of UX becomes: which questions to ask, which insights matter, and what story to tell stakeholders. Invest there.",
      },
    ],
  },

  business: {
    label: "Business",
    stages: [
      { label: "Validate",     current: true  },
      { label: "First Users",  current: false },
      { label: "Convert",      current: false },
      { label: "Scale",        current: false },
    ],
    actions: [
      {
        id: "biz-1",
        layer: "L5",
        title: "Draft a stakeholder update that leads with impact",
        description: "Paste your bullet points into Claude. Ask it to rewrite as a 150-word update that leads with outcomes, not tasks. Delete every sentence of filler it produces — the rest is yours.",
        time: "~10 min",
        mapHref: "/map",
      },
      {
        id: "biz-2",
        layer: "L6",
        title: "Design a 60-minute team AI workshop",
        description: "Tell Claude your team size and roles. Get a structured workshop agenda where everyone leaves having used an AI tool on a real work task — not just watched a demo.",
        time: "~20 min",
        mapHref: "/map",
      },
      {
        id: "biz-3",
        layer: "L7",
        title: "Write an AI adoption proposal your team will actually read",
        description: "Identify one workflow, describe the pain to Claude, get a one-page proposal with success metrics and a 2-week pilot plan. Evidence-first, no jargon, no asking for permission.",
        time: "~20 min",
        mapHref: "/map",
      },
    ],
    directions: [
      {
        title: "Build the case before you build the system",
        body: "Most AI adoption fails not because the technology doesn't work, but because the change management wasn't designed. Your job is to make the case compellingly before asking anyone to change their workflow.",
      },
      {
        title: "Influence without authority",
        body: "You don't need to own the AI strategy to shape it. The designers who drive AI adoption in their organisations do it through demonstration — showing before telling, using real data from small pilots.",
      },
    ],
  },
};

const TRACK_ORDER: TrackId[] = ["craft", "build", "business"];

// ─── Stage progress bar ───────────────────────────────────────────────────────
function StageProgress({ stages }: { stages: Stage[] }) {
  const currentIdx = stages.findIndex((s) => s.current);
  return (
    <div style={{ padding: "20px 24px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
        {stages.map((stage, i) => {
          const done    = i < currentIdx;
          const current = i === currentIdx;
          const isLast  = i === stages.length - 1;
          return (
            <div key={stage.label} style={{ display: "flex", alignItems: "center", flex: isLast ? "0 0 auto" : 1, minWidth: 0 }}>
              {/* Node */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  backgroundColor: current ? GOLD : done ? "rgba(196,168,130,0.45)" : "transparent",
                  border: `1.5px solid ${current ? GOLD : done ? "rgba(196,168,130,0.40)" : "rgba(196,168,130,0.20)"}`,
                  transition: "all 0.2s",
                }} />
                <span style={{
                  fontFamily: SERIF, fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: current ? "rgba(240,235,225,0.85)" : done ? "rgba(200,190,175,0.50)" : "rgba(200,190,175,0.28)",
                  whiteSpace: "nowrap",
                }}>
                  {stage.label}
                </span>
              </div>
              {/* Connector line */}
              {!isLast && (
                <div style={{
                  flex: 1, height: "1px", margin: "0 4px",
                  marginBottom: "22px",  // offset for label below
                  backgroundColor: done ? "rgba(196,168,130,0.35)" : "rgba(196,168,130,0.12)",
                  transition: "background-color 0.2s",
                }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Action card ──────────────────────────────────────────────────────────────
function ActionItem({ action }: { action: ActionCard }) {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  return (
    <div style={{
      padding: "18px 20px",
      border: "1px solid rgba(196,168,130,0.14)",
      borderRadius: "6px",
      backgroundColor: "rgba(196,168,130,0.02)",
    }}>
      {/* Top row: L-tag + time */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <Link href={action.mapHref} style={{
          fontFamily: SERIF, fontSize: "11px", letterSpacing: "0.14em",
          color: GOLD, border: `1px solid rgba(196,168,130,0.30)`,
          borderRadius: "3px", padding: "2px 8px", textDecoration: "none",
        }}>
          {action.layer}
        </Link>
        <span style={{ fontFamily: SERIF, fontSize: "12px", color: "rgba(200,190,175,0.38)", letterSpacing: "0.04em" }}>
          {action.time}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: SERIF, fontSize: "17px", color: "rgba(240,235,225,0.88)", fontWeight: 400, lineHeight: 1.35, marginBottom: "10px" }}>
        {action.title}
      </h3>

      {/* Description */}
      <p style={{ fontFamily: SERIF, fontSize: "14px", color: "rgba(200,190,175,0.62)", lineHeight: 1.68, marginBottom: "16px" }}>
        {action.description}
      </p>

      {/* Bottom row: feedback + explore */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <button
          onClick={() => setFeedback((p) => p === "up" ? null : "up")}
          title="Works for me"
          style={{
            width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "6px", cursor: "pointer", fontSize: "14px", transition: "all 0.15s",
            border: feedback === "up" ? "1.5px solid rgba(196,168,130,0.65)" : "1px solid rgba(196,168,130,0.18)",
            backgroundColor: feedback === "up" ? "rgba(196,168,130,0.15)" : "rgba(196,168,130,0.04)",
            opacity: feedback === "down" ? 0.28 : 1,
          }}
        >👍</button>
        <button
          onClick={() => setFeedback((p) => p === "down" ? null : "down")}
          title="Too hard"
          style={{
            width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "6px", cursor: "pointer", fontSize: "14px", transition: "all 0.15s",
            border: feedback === "down" ? "1.5px solid rgba(180,100,80,0.55)" : "1px solid rgba(196,168,130,0.18)",
            backgroundColor: feedback === "down" ? "rgba(180,100,80,0.12)" : "rgba(196,168,130,0.04)",
            opacity: feedback === "up" ? 0.28 : 1,
          }}
        >👎</button>
        <div style={{ flex: 1 }} />
        <Link href={action.mapHref} style={{
          fontFamily: SERIF, fontSize: "12px", letterSpacing: "0.06em",
          color: "rgba(196,168,130,0.55)", textDecoration: "none",
        }}>
          Explore further →
        </Link>
      </div>
    </div>
  );
}

// ─── Direction card ───────────────────────────────────────────────────────────
function DirectionCard({ card }: { card: DirectionCard }) {
  return (
    <div style={{
      padding: "18px 20px",
      border: "1px solid rgba(196,168,130,0.14)",
      borderLeft: "3px solid rgba(196,168,130,0.35)",
      borderRadius: "6px",
      backgroundColor: "rgba(196,168,130,0.025)",
    }}>
      <h3 style={{ fontFamily: SERIF, fontSize: "16px", color: "rgba(240,235,225,0.85)", fontWeight: 400, lineHeight: 1.35, marginBottom: "10px" }}>
        {card.title}
      </h3>
      <p style={{ fontFamily: SERIF, fontSize: "14px", color: "rgba(200,190,175,0.60)", lineHeight: 1.70, margin: 0 }}>
        {card.body}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ActionsPage() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("build");
  const [visible, setVisible]         = useState(true);
  const switchTimeoutRef              = useRef<ReturnType<typeof setTimeout> | null>(null);

  const track = TRACKS[activeTrack];

  function switchTrack(id: TrackId) {
    if (id === activeTrack) return;
    // Fade out → switch → fade in
    setVisible(false);
    if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current);
    switchTimeoutRef.current = setTimeout(() => {
      setActiveTrack(id);
      setVisible(true);
    }, 180);
  }

  useEffect(() => () => { if (switchTimeoutRef.current) clearTimeout(switchTimeoutRef.current); }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0d0d0f", paddingBottom: "96px" }}>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <div style={{ padding: "48px 24px 0" }}>
        <h1 style={{ fontFamily: SERIF, fontSize: "32px", color: "rgba(240,235,225,0.92)", fontWeight: 400, marginBottom: "6px" }}>
          Actions
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: "16px", color: "rgba(200,190,175,0.55)", marginBottom: "28px" }}>
          From insight to real change
        </p>

        {/* ── Track tabs ──────────────────────────────────────────────────── */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(196,168,130,0.12)" }}>
          {TRACK_ORDER.map((id) => {
            const active = activeTrack === id;
            return (
              <button
                key={id}
                onClick={() => switchTrack(id)}
                style={{
                  fontFamily: SERIF, fontSize: "14px", letterSpacing: "0.01em",
                  color: active ? "rgba(240,235,225,0.92)" : "rgba(200,190,175,0.35)",
                  padding: "10px 20px 11px",
                  borderBottom: active ? `2px solid ${GOLD}` : "2px solid transparent",
                  marginBottom: "-1px",
                  background: "transparent", cursor: "pointer",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {TRACKS[id].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Animated content area ───────────────────────────────────────────── */}
      <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.18s ease" }}>

        {/* Stage progress */}
        <StageProgress stages={track.stages} />

        {/* ── This Week ─────────────────────────────────────────────────── */}
        <div style={{ padding: "28px 24px 0" }}>
          <span style={{ fontFamily: SERIF, fontSize: "11px", letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", display: "block", marginBottom: "14px" }}>
            This Week
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {track.actions.map((action) => (
              <ActionItem key={action.id} action={action} />
            ))}
          </div>
        </div>

        {/* ── Direction 1–3 months ──────────────────────────────────────── */}
        <div style={{ padding: "28px 24px 0" }}>
          <span style={{ fontFamily: SERIF, fontSize: "11px", letterSpacing: "0.22em", color: GOLD, textTransform: "uppercase", display: "block", marginBottom: "14px" }}>
            Direction · 1–3 months
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {track.directions.map((card, i) => (
              <DirectionCard key={i} card={card} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
