import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
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

        {/* TopBar fixed at top (56px). Hidden on opening screen / */}
        <TopBar />

        {/* Content area — offset by TopBar height except on opening screen */}
        <div className="min-h-screen pt-[56px]">
          <div className="max-w-[900px] mx-auto px-6 py-10">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
