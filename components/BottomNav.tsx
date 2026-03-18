"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/map",     label: "Map" },
  { href: "/brief",   label: "Brief" },
  { href: "/actions", label: "Actions" },
  { href: "/profile", label: "Profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 px-4"
      style={{ backgroundColor: "#0d0d0f", borderTop: "1px solid rgba(196,168,130,0.15)" }}
    >
      {NAV_ITEMS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center flex-1 h-full text-xs tracking-widest transition-colors"
            style={{ color: active ? "#C4A882" : "rgba(200,190,175,0.45)" }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
