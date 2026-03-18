"use client";

import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();

  // Hidden on opening screen and on mobile
  if (pathname === "/") return null;

  return (
    <header
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center"
      style={{
        height: "56px",
        backgroundColor: "#0d0d0f",
        borderBottom: "1px solid rgba(196,168,130,0.12)",
      }}
    >
      {/* Left: brand — sits over the collapsed SideNav (48px) */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: "48px" }}
      >
        {/* intentionally empty — brand text is in SideNav on expanded */}
      </div>

      {/* Brand name — visible beside sidebar */}
      <span
        className="font-serif tracking-[0.25em] text-sm uppercase flex-shrink-0 pr-8"
        style={{ color: "#C4A882" }}
      >
        AI Navigator
      </span>

      {/* Center: search */}
      <div className="flex-1 flex justify-center">
        <div
          className="flex items-center gap-2 px-4"
          style={{
            maxWidth: "480px",
            width: "100%",
            height: "34px",
            border: "1px solid rgba(196,168,130,0.18)",
            borderRadius: "6px",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: "#C4A882", flexShrink: 0 }}
          >
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search any AI concept, skill or tool..."
            className="flex-1 bg-transparent font-serif text-xs outline-none placeholder:opacity-30"
            style={{
              color: "rgba(240,235,225,0.85)",
              caretColor: "#C4A882",
            }}
          />
        </div>
      </div>

      {/* Right: avatar placeholder */}
      <div className="flex items-center pr-6 flex-shrink-0">
        <div
          className="flex items-center justify-center rounded-full font-serif text-xs"
          style={{
            width: "30px",
            height: "30px",
            border: "1px solid rgba(196,168,130,0.30)",
            color: "rgba(196,168,130,0.60)",
            backgroundColor: "rgba(196,168,130,0.06)",
          }}
        >
          A
        </div>
      </div>
    </header>
  );
}
