import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";
import TopBar from "@/components/TopBar";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Navigator",
  description: "A living map of human knowledge — and the path you have walked through it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="antialiased" style={{ backgroundColor: "#0d0d0f" }}>

        {/* Desktop: TopBar fixed at top (56px). Hidden on /  */}
        <TopBar />

        {/* Mobile: search bar fixed at top. Hidden on / */}
        <SearchBar />

        {/* Mobile: bottom nav. Hidden on desktop (md:hidden). Hidden on / */}
        <BottomNav />

        {/* Content area
            Mobile : pt-14 (SearchBar 56px) + pb-16 (BottomNav 64px)
            Desktop: pt-[56px] (TopBar), full width — no left offset
            Home / : no nav offsets applied (both bars hidden on /) */}
        <div className="min-h-screen pt-14 pb-16 md:pt-[56px] md:pb-0">
          <div className="max-w-[900px] mx-auto px-6 py-10">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
