// Splash — daily quote with star animation
import dynamic from "next/dynamic";
import Link from "next/link";

const StarField = dynamic(() => import("@/components/StarField"), { ssr: false });

export default function SplashPage() {
  return (
    <>
      <StarField />
      <main
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          padding: "0 24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-eb-garamond), Georgia, serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#DDB862",
            opacity: 0.5,
            marginBottom: "36px",
          }}
        >
          AI Navigator
        </p>
        <blockquote
          style={{
            fontFamily: "var(--font-eb-garamond), Georgia, serif",
            fontSize: "clamp(26px, 5vw, 44px)",
            textAlign: "center",
            color: "rgba(240,235,225,0.92)",
            lineHeight: 1.45,
            maxWidth: "580px",
            margin: "0 0 48px",
            fontWeight: 400,
          }}
        >
          &ldquo;A living map of human knowledge — and the path you have walked
          through it.&rdquo;
        </blockquote>
        <Link
          href="/brief"
          className="font-serif text-gold text-base tracking-wide px-6 py-2 transition-opacity hover:opacity-70"
          style={{ border: "1px solid rgba(221,184,98,0.45)" }}
        >
          Begin Exploring →
        </Link>
      </main>
    </>
  );
}
