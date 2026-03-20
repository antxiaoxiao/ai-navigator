"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/brief",   label: "News" },
  { href: "/actions", label: "Actions" },
  { href: "/map",     label: "Map" },
  { href: "/profile", label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-4"
      style={{ backgroundColor: "#0d0d0f", borderTop: "1px solid rgba(221,184,98,0.15)" }}
    >
      {NAV_ITEMS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center flex-1 h-full text-xs tracking-widest transition-colors"
            style={{ color: active ? "#DDB862" : "rgba(200,190,175,0.45)", fontFamily: "var(--font-eb-garamond), Georgia, serif" }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
