"use client";

import { useState } from "react";
import Link from "next/link";
import type { Layer } from "@/lib/mapData";

interface Props {
  layer: Layer;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        flexShrink: 0,
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
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

export default function MapLayer({ layer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubNode, setSelectedSubNode] = useState<string | null>(null);

  const toggle = () => {
    setIsOpen((v) => !v);
    setSelectedSubNode(null);
  };

  const selectSubNode = (id: string) => {
    setSelectedSubNode((prev) => (prev === id ? null : id));
  };

  const activeDescription = layer.subNodes.find(
    (s) => s.id === selectedSubNode
  )?.description;

  return (
    <div
      style={{
        borderRadius: "6px",
        border: isOpen
          ? "1px solid rgba(221,184,98,0.35)"
          : "1px solid rgba(221,184,98,0.15)",
        borderLeft: isOpen
          ? "2px solid #DDB862"
          : "2px solid rgba(221,184,98,0.15)",
        background: isOpen ? "rgba(221,184,98,0.03)" : "transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      {/* Header row — clickable */}
      <button
        onClick={toggle}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "18px 20px 16px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "12px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          color: "inherit",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-eb-garamond), Georgia, serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#DDB862",
              opacity: 0.88,
              marginBottom: "4px",
              textTransform: "uppercase",
            }}
          >
            {layer.label} {layer.starred ? "★" : "·"}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-eb-garamond), Georgia, serif",
              fontSize: "20px",
              color: "rgba(240,235,225,0.92)",
              lineHeight: 1.25,
              marginBottom: "5px",
            }}
          >
            {layer.name}
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-eb-garamond), Georgia, serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "rgba(200,190,175,0.60)",
              lineHeight: 1.4,
            }}
          >
            {layer.coreQuestion}
          </span>
        </div>
        <span style={{ color: "rgba(221,184,98,0.70)", marginTop: "2px" }}>
          <Chevron open={isOpen} />
        </span>
      </button>

      {/* Expandable panel */}
      <div
        style={{
          maxHeight: isOpen ? "700px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div style={{ padding: "0 20px 20px" }}>
          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "rgba(221,184,98,0.12)",
              marginBottom: "14px",
            }}
          />

          {/* Sub-nodes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {layer.subNodes.map((sub) => {
              const active = selectedSubNode === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => selectSubNode(sub.id)}
                  style={{
                    textAlign: "left",
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-eb-garamond), Georgia, serif",
                    fontSize: "15px",
                    lineHeight: 1.4,
                    background: active
                      ? "rgba(221,184,98,0.09)"
                      : "transparent",
                    color: active
                      ? "#DDB862"
                      : "rgba(200,190,175,0.72)",
                    transition: "background 0.15s ease, color 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      color: "#DDB862",
                      opacity: active ? 1 : 0.60,
                      marginRight: "8px",
                      fontSize: "12px",
                    }}
                  >
                    ·
                  </span>
                  {sub.title}
                </button>
              );
            })}
          </div>

          {/* Description panel */}
          {activeDescription && (
            <div
              style={{
                marginTop: "14px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(221,184,98,0.12)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-eb-garamond), Georgia, serif",
                  fontSize: "15px",
                  color: "rgba(240,235,225,0.80)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {activeDescription}
              </p>
              <Link
                href={`/map/${layer.id.toLowerCase()}/${selectedSubNode}`}
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  fontFamily: "var(--font-eb-garamond), Georgia, serif",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  color: "rgba(221,184,98,0.65)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#DDB862")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(221,184,98,0.65)")
                }
              >
                Read more →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
