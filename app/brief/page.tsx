'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RolePerspective {
  shortTerm: string;
  longTerm: string;
}

interface Article {
  id: string;
  category: string;
  layerLabel: string;
  title: string;
  summary: string;
  role: RolePerspective;
  imageSeed: string;
  imageAccent: string;
}

interface ExtraItem {
  id: string;
  category: string;
  layerLabel: string;
  title: string;
}

const MAIN_ARTICLES: Article[] = [
  {
    id: 'tech-1',
    category: 'TECHNOLOGY',
    layerLabel: 'L2',
    title: 'Anthropic Research Shows Claude Maintains Consistent Accuracy Across 200K-Token Contexts',
    summary:
      'Earlier degradation in long-context recall has been largely resolved, enabling reliable analysis of entire codebases or document archives in a single session.',
    role: {
      shortTerm:
        'When using Claude for large-scale UX research synthesis, you can now trust outputs referencing early-document content as much as recent content. Test this with your next research debrief.',
      longTerm:
        "As context windows become effectively unlimited, the bottleneck shifts from what AI can read to how well you structure what you give it. Prompt architecture becomes the design skill.",
    },
    imageSeed: '1081',
    imageAccent: 'rgba(80,50,140,0.45)',
  },
  {
    id: 'products-1',
    category: 'PRODUCTS',
    layerLabel: 'L3',
    title: 'Figma Releases AI Layout Suggestions in Dev Mode — Now in Public Beta',
    summary:
      'Designers can describe intended layout behavior in plain language; Figma translates it to auto layout constraints and component properties automatically.',
    role: {
      shortTerm:
        "Reduces friction when setting up responsive auto layout from scratch, especially useful for developer handoff. Worth spending 30 minutes in the beta this week.",
      longTerm:
        "As AI handles layout mechanics, the UX designer's role in Figma shifts toward defining intent and reviewing output — more art direction, less constraint-tuning.",
    },
    imageSeed: '180',
    imageAccent: 'rgba(20,80,120,0.45)',
  },
  {
    id: 'industry-1',
    category: 'INDUSTRY',
    layerLabel: 'L5',
    title: 'Goldman Sachs: 26% of Knowledge Work Tasks Now Performed with AI Assistance',
    summary:
      'Enterprise tracking data shows workers in design, consulting, and professional services are using AI for over a quarter of their documented work activities.',
    role: {
      shortTerm:
        "If your team isn't tracking AI usage, you're already behind in understanding where efficiency gains are happening — and which of your tasks are quietly being delegated.",
      longTerm:
        "The firms winning aren't using the most AI — they're using it in the highest-leverage moments. Knowing which tasks to own vs. delegate is the professional skill of the decade.",
    },
    imageSeed: '430',
    imageAccent: 'rgba(100,70,10,0.45)',
  },
];

const MORE_ITEMS: ExtraItem[] = [
  {
    id: 'more-1',
    category: 'MODELS',
    layerLabel: 'L1',
    title: "Meta's Llama 4 Scout Outperforms GPT-4o on 17 of 23 Standard Benchmarks",
  },
  {
    id: 'more-2',
    category: 'TOOLS',
    layerLabel: 'L4',
    title: 'OpenAI Launches Persistent Memory for Team Plans — Context Across Sessions',
  },
  {
    id: 'more-3',
    category: 'POLICY',
    layerLabel: 'L8',
    title: 'EU AI Act Enforcement Timeline: What Product Teams Must Prepare by August',
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        flexShrink: 0,
        transition: 'transform 0.2s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <polyline
        points="3 6 8 11 13 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggle = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <div className="mb-8">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
          <h1 className="font-serif text-gold text-3xl">News</h1>
          <span
            style={{
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '13px',
              letterSpacing: '0.12em',
              color: 'rgba(221,184,98,0.55)',
              textTransform: 'uppercase',
            }}
          >
            March 20
          </span>
        </div>
        <p className="text-text-secondary text-sm">
          3 things in AI today — and what they mean for you
        </p>
      </div>

      {/* Main articles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '672px', marginBottom: '36px' }}>
        {MAIN_ARTICLES.map((article) => {
          const isOpen = expandedId === article.id;
          return (
            <div
              key={article.id}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: isOpen
                  ? '1px solid rgba(221,184,98,0.30)'
                  : '1px solid rgba(221,184,98,0.15)',
                background: isOpen ? 'rgba(221,184,98,0.03)' : 'transparent',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
            >
              {/* Card image */}
              <div
                style={{
                  height: '160px',
                  position: 'relative',
                  backgroundImage: `url(https://picsum.photos/seed/${article.imageSeed}/640/320)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => toggle(article.id)}
              >
                {/* Gradient overlay — darker at bottom for legibility */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, ${article.imageAccent} 0%, rgba(13,13,15,0.55) 100%)`,
                  }}
                />
                {/* Category badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '12px',
                      letterSpacing: '0.2em',
                      color: 'rgba(255,245,230,0.95)',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ color: 'rgba(221,184,98,0.6)', fontSize: '11px' }}>·</span>
                  <Link
                    href="/map"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      color: '#DDB862',
                      textDecoration: 'none',
                    }}
                  >
                    {article.layerLabel}
                  </Link>
                </div>
              </div>

              {/* Clickable text header */}
              <button
                onClick={() => toggle(article.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 20px 14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Title */}
                  <p
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '18px',
                      color: 'rgba(240,235,225,0.93)',
                      lineHeight: 1.35,
                      marginBottom: '8px',
                    }}
                  >
                    {article.title}
                  </p>
                  {/* Summary */}
                  <p
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '14px',
                      color: 'rgba(200,190,175,0.70)',
                      lineHeight: 1.65,
                    }}
                  >
                    {article.summary}
                  </p>
                </div>
                {/* Chevron */}
                <span style={{ color: 'rgba(221,184,98,0.55)', marginTop: '4px' }}>
                  <Chevron open={isOpen} />
                </span>
              </button>

              {/* Expandable role perspective */}
              <div
                style={{
                  maxHeight: isOpen ? '420px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <div style={{ padding: '0 20px 22px' }}>
                  <div style={{ height: '1px', background: 'rgba(221,184,98,0.15)', marginBottom: '16px' }} />
                  <p
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '11px',
                      letterSpacing: '0.18em',
                      color: 'rgba(221,184,98,0.85)',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    For UX Designers
                  </p>
                  {/* Short-term */}
                  <div style={{ marginBottom: '16px' }}>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        color: '#DDB862',
                        opacity: 0.8,
                        textTransform: 'uppercase',
                        marginBottom: '7px',
                      }}
                    >
                      This Week
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                        fontSize: '15px',
                        color: 'rgba(240,235,225,0.82)',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {article.role.shortTerm}
                    </p>
                  </div>
                  {/* Long-term */}
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        color: '#DDB862',
                        opacity: 0.8,
                        textTransform: 'uppercase',
                        marginBottom: '7px',
                      }}
                    >
                      3–6 Months
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                        fontSize: '15px',
                        color: 'rgba(240,235,225,0.82)',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {article.role.longTerm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* More Today */}
      <div style={{ maxWidth: '672px' }}>
        <button
          onClick={() => setShowMore((v) => !v)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '11px',
            letterSpacing: '0.16em',
            color: 'rgba(221,184,98,0.80)',
            textTransform: 'uppercase',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '14px',
          }}
        >
          <span>{showMore ? 'Less' : 'More Today'}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transition: 'transform 0.2s ease',
              transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <polyline
              points="3 6 8 11 13 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          style={{
            maxHeight: showMore ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.35s ease',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {MORE_ITEMS.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '13px 16px',
                  borderRadius: '5px',
                  border: '1px solid rgba(221,184,98,0.12)',
                  borderLeft: '2px solid rgba(221,184,98,0.22)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      color: 'rgba(221,184,98,0.85)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ color: 'rgba(221,184,98,0.35)', fontSize: '10px' }}>·</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                      fontSize: '11px',
                      color: 'rgba(221,184,98,0.75)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.layerLabel}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                    fontSize: '15px',
                    color: 'rgba(200,190,175,0.75)',
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
