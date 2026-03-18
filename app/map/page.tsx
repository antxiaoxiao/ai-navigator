// Knowledge Map — vertical scroll
export default function MapPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12">
      <h1 className="font-serif text-gold text-3xl mb-2">Knowledge Map</h1>
      <p className="text-text-secondary text-sm mb-12">AI knowledge framework · vertical scroll</p>
      <div className="space-y-6 max-w-xl">
        {[
          "L1 · AI Foundations",
          "L2 · AI Technology Landscape",
          "L3 · AI Products & Applications",
          "L4 · AI Tools in Practice",
          "L5 · AI Industry & Trends",
          "L6 · AI & People · Organizations",
          "L7 · AI Entrepreneurship & Business",
          "L8 · AI Ethics & Governance",
        ].map((level) => (
          <div key={level} className="border border-gold/20 rounded px-5 py-4">
            <p className="font-serif text-text">{level}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
