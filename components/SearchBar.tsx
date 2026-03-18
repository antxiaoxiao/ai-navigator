"use client";

import { usePathname } from "next/navigation";

export default function SearchBar() {
  const pathname = usePathname();

  // Hidden on the splash/opening screen
  if (pathname === "/") return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center gap-3 px-5 h-14"
      style={{
        backgroundColor: "#0d0d0f",
        borderBottom: "1px solid rgba(196,168,130,0.15)",
      }}
    >
      {/* Gold search icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "#C4A882", flexShrink: 0 }}
      >
        <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      <input
        type="text"
        placeholder="Search any AI concept, skill or tool..."
        className="flex-1 bg-transparent font-serif text-sm outline-none placeholder:opacity-40"
        style={{
          color: "rgba(240,235,225,0.90)",
          caretColor: "#C4A882",
        }}
      />
    </div>
  );
}
