// Splash — daily image & quote
import Link from "next/link";

export default function SplashPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg px-6">
      <p className="text-gold text-sm tracking-widest uppercase mb-8 opacity-60">
        AI Navigator
      </p>
      <blockquote className="font-serif text-2xl text-center text-text leading-relaxed max-w-md mb-12">
        "A living map of human knowledge — and the path you have walked through it."
      </blockquote>
      <Link
        href="/map"
        className="font-serif text-gold text-base tracking-wide px-6 py-2 transition-opacity hover:opacity-70"
        style={{ border: "1px solid rgba(196,168,130,0.45)" }}
      >
        Begin Exploring →
      </Link>
    </main>
  );
}
