"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/news",
    label: "News",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
        <path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/>
      </svg>
    ),
  },
  {
    href: "/actions",
    label: "Actions",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    href: "/map",
    label: "Map",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
        <line x1="9" y1="3" x2="9" y2="18"/>
        <line x1="15" y1="6" x2="15" y2="21"/>
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profile",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function TopBar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <header
      className="flex fixed top-0 left-0 right-0 z-50 items-center"
      style={{
        height: "56px",
        backgroundColor: "#0d0d0f",
        borderBottom: "1px solid rgba(221,184,98,0.12)",
        paddingLeft: "28px",
        paddingRight: "20px",
        gap: "20px",
      }}
    >
      {/* Brand */}
      <span
        className="font-serif tracking-[0.25em] text-sm uppercase flex-shrink-0"
        style={{ color: "#DDB862" }}
      >
        AI Navigator
      </span>

      {/* Search */}
      <div className="flex-1 flex justify-center">
        <div
          className="flex items-center gap-2 px-4"
          style={{
            maxWidth: "480px",
            width: "100%",
            height: "34px",
            border: "1px solid rgba(221,184,98,0.18)",
            borderRadius: "6px",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ color: "#DDB862", flexShrink: 0 }}>
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
            <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search any AI concept, skill or tool..."
            className="flex-1 bg-transparent font-serif text-xs outline-none placeholder:opacity-30"
            style={{ color: "rgba(240,235,225,0.85)", caretColor: "#DDB862" }}
          />
        </div>
      </div>

      {/* 4 nav icon links */}
      <nav className="flex items-center gap-1 flex-shrink-0">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className="flex items-center justify-center rounded transition-colors duration-150"
              style={{
                width: "36px",
                height: "36px",
                color: active ? "#DDB862" : "rgba(200,190,175,0.38)",
                backgroundColor: active ? "rgba(221,184,98,0.08)" : "transparent",
                borderRadius: "6px",
              }}
            >
              {icon}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
