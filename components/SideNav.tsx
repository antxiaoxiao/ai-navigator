"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/map",
    label: "Map",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    href: "/brief",
    label: "Brief",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    href: "/actions",
    label: "Actions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "Profile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function SideNav() {
  const pathname = usePathname();

  // Hidden on opening screen
  if (pathname === "/") return null;

  return (
    <aside
      className="hidden md:flex flex-col fixed left-0 top-0 h-full z-40 overflow-hidden group"
      style={{
        width: "48px",
        backgroundColor: "#0d0d0f",
        borderRight: "1px solid rgba(221,184,98,0.15)",
        transition: "width 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.width = "180px";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.width = "48px";
      }}
    >
      {/* Nav items */}
      <nav className="flex flex-col gap-1 pt-16 px-2 flex-1">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center rounded transition-colors duration-150"
              style={{
                color: active ? "#DDB862" : "rgba(200,190,175,0.40)",
                backgroundColor: active
                  ? "rgba(221,184,98,0.09)"
                  : "transparent",
                height: "44px",
                minWidth: 0,
                padding: "0 11px",
                gap: "12px",
              }}
            >
              {/* Icon — always visible */}
              <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>

              {/* Label — fades in on expand */}
              <span
                className="font-serif text-sm tracking-widest whitespace-nowrap overflow-hidden"
                style={{
                  opacity: 0,
                  transition: "opacity 0.15s ease 0.05s",
                }}
                data-label
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Version */}
      <p
        className="text-xs tracking-wider whitespace-nowrap overflow-hidden px-3 pb-6"
        style={{ color: "rgba(200,190,175,0.20)" }}
        data-label
      >
        v0.1
      </p>

      {/* Label fade-in via CSS injected in globals */}
      <style>{`
        aside:hover [data-label] { opacity: 1 !important; }
      `}</style>
    </aside>
  );
}
