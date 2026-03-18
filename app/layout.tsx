import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import SearchBar from "@/components/SearchBar";

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
      <body className="antialiased pb-16 pt-14">
        <SearchBar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
