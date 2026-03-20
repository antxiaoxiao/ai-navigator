import Link from 'next/link';
import { MAP_LAYERS } from '@/lib/mapData';
import { notFound } from 'next/navigation';

const layerLens: Record<string, string> = {
  L1: 'Understanding how models actually work removes the black-box feeling — you become a more confident AI user and a better judge of what it can and cannot do.',
  L2: 'Knowing where AI is heading helps you position your design skills. The directions that matter most for UX are agents and multimodal — both change interaction design fundamentally.',
  L3: 'AI UX is a different craft from traditional UX. The earlier you build mental models for probabilistic systems, the better you will design for the products being built right now.',
  L4: 'These are tools you can pick up today. Each one you master is a direct productivity multiplier — and a signal to employers that you are ahead of the curve.',
  L5: 'Trends analysis helps you make better bets. Understanding what is accelerating vs. what is hype is how you decide which skills to invest in and which to wait on.',
  L6: 'Introducing AI to a team is a design problem, not a tech problem. Your UX skills transfer directly here — you understand user behavior, resistance, and motivation.',
  L7: 'AI has dropped the barrier to building products. Even if you do not want to be a founder, understanding creation economics changes how you think about your own value.',
  L8: 'Ethical AI is not a separate specialty — it is embedded in every design decision. The sooner it becomes a natural lens, the less remediation you will need to do later.',
};

interface Props {
  params: { layerId: string; nodeId: string };
}

export default function NodeDetailPage({ params }: Props) {
  const layer = MAP_LAYERS.find(
    (l) => l.id.toLowerCase() === params.layerId.toLowerCase()
  );
  if (!layer) notFound();

  const node = layer.subNodes.find((s) => s.id === params.nodeId);
  if (!node) notFound();

  const otherNodes = layer.subNodes.filter((s) => s.id !== node.id);
  const lens = layerLens[layer.id] ?? '';

  return (
    <main className="min-h-screen bg-bg" style={{ maxWidth: '640px' }}>
      {/* Back link */}
      <div style={{ marginBottom: '32px' }}>
        <Link
          href="/map"
          style={{
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '13px',
            letterSpacing: '0.1em',
            color: 'rgba(221,184,98,0.72)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <polyline
              points="10 3 5 8 10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Knowledge Map
        </Link>
      </div>

      {/* Layer context */}
      <div style={{ marginBottom: '28px' }}>
        <span
          style={{
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#DDB862',
            opacity: 0.85,
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '4px',
          }}
        >
          {layer.label} {layer.starred ? '★' : '·'} {layer.name}
        </span>
        <p
          style={{
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '14px',
            fontStyle: 'italic',
            color: 'rgba(200,190,175,0.65)',
            margin: 0,
          }}
        >
          {layer.coreQuestion}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(221,184,98,0.12)', marginBottom: '28px' }} />

      {/* Node title */}
      <h1
        style={{
          fontFamily: 'var(--font-eb-garamond), Georgia, serif',
          fontSize: 'clamp(24px, 4vw, 32px)',
          color: 'rgba(240,235,225,0.95)',
          lineHeight: 1.25,
          marginBottom: '20px',
          fontWeight: 400,
        }}
      >
        {node.title}
      </h1>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-eb-garamond), Georgia, serif',
          fontSize: '17px',
          color: 'rgba(240,235,225,0.80)',
          lineHeight: 1.75,
          marginBottom: '36px',
        }}
      >
        {node.description}
      </p>

      {/* Why this matters */}
      {lens && (
        <div style={{ marginBottom: '36px' }}>
          <div style={{ height: '1px', background: 'rgba(221,184,98,0.12)', marginBottom: '20px' }} />
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#DDB862',
              opacity: 0.85,
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            Why This Matters
          </span>
          <p
            style={{
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '15px',
              color: 'rgba(200,190,175,0.80)',
              lineHeight: 1.7,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {lens}
          </p>
        </div>
      )}

      {/* Other nodes in this layer */}
      {otherNodes.length > 0 && (
        <div style={{ marginBottom: '36px' }}>
          <div style={{ height: '1px', background: 'rgba(221,184,98,0.12)', marginBottom: '20px' }} />
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#DDB862',
              opacity: 0.85,
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Also in {layer.name}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {otherNodes.map((other) => (
              <Link
                key={other.id}
                href={`/map/${layer.id.toLowerCase()}/${other.id}`}
                style={{
                  display: 'block',
                  padding: '11px 14px',
                  borderRadius: '4px',
                  border: '1px solid rgba(221,184,98,0.18)',
                  fontFamily: 'var(--font-eb-garamond), Georgia, serif',
                  fontSize: '15px',
                  color: 'rgba(200,190,175,0.78)',
                  textDecoration: 'none',
                }}
              >
                <span style={{ color: 'rgba(221,184,98,0.55)', marginRight: '8px', fontSize: '12px' }}>
                  ·
                </span>
                {other.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Ask AI — placeholder UI */}
      <div>
        <div style={{ height: '1px', background: 'rgba(221,184,98,0.12)', marginBottom: '20px' }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '13px 16px',
            borderRadius: '5px',
            border: '1px solid rgba(221,184,98,0.18)',
            cursor: 'not-allowed',
            opacity: 0.65,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: 'rgba(221,184,98,0.7)' }}>
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 6.5C6 5.4 6.9 4.5 8 4.5s2 .9 2 2c0 .9-.6 1.7-1.5 1.9V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="8" cy="12" r=".6" fill="currentColor" />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '14px',
              color: 'rgba(200,190,175,0.65)',
              fontStyle: 'italic',
            }}
          >
            What does this mean for my work as a UX designer?
          </span>
          <span
            style={{
              marginLeft: 'auto',
              fontFamily: 'var(--font-eb-garamond), Georgia, serif',
              fontSize: '13px',
              color: 'rgba(221,184,98,0.55)',
            }}
          >
            →
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-eb-garamond), Georgia, serif',
            fontSize: '12px',
            color: 'rgba(200,190,175,0.45)',
            letterSpacing: '0.08em',
            marginTop: '8px',
            marginLeft: '2px',
          }}
        >
          AI Q&amp;A — coming soon
        </p>
      </div>
    </main>
  );
}
