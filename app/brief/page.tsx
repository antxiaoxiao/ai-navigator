// Daily Brief — 3 curated stories
export default function BriefPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12">
      <h1 className="font-serif text-gold text-3xl mb-2">Daily Brief</h1>
      <p className="text-text-secondary text-sm mb-12">What happened in AI today</p>
      <div className="space-y-8 max-w-xl">
        {[
          { type: "Technology", label: "TECHNOLOGY" },
          { type: "Products", label: "PRODUCTS" },
          { type: "Industry", label: "INDUSTRY" },
        ].map(({ type, label }) => (
          <div key={type} className="border-l-2 border-gold/40 pl-4">
            <p className="text-gold/60 text-xs tracking-widest mb-1">{label}</p>
            <p className="font-serif text-text text-lg">Placeholder headline</p>
            <p className="text-text-secondary text-sm mt-1">Summary content to be filled in.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
