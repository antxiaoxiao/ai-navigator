// Actions — short-term + long-term
export default function ActionsPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12">
      <h1 className="font-serif text-gold text-3xl mb-2">Actions</h1>
      <p className="text-text-secondary text-sm mb-12">From insight to real change</p>
      <section className="mb-10 max-w-xl">
        <h2 className="text-text text-xs tracking-widest uppercase mb-4">This Week</h2>
        <div className="border border-gold/20 rounded px-5 py-4">
          <p className="font-serif text-text">One thing you can do today (placeholder)</p>
          <p className="text-text-secondary text-sm mt-1">~15 minutes</p>
        </div>
      </section>
      <section className="max-w-xl">
        <h2 className="text-text text-xs tracking-widest uppercase mb-4">Direction</h2>
        <div className="border border-gold/20 rounded px-5 py-4">
          <p className="font-serif text-text">1–3 month directional thinking (placeholder)</p>
        </div>
      </section>
    </main>
  );
}
