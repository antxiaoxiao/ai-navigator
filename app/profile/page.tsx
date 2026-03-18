// Profile — footprints, settings, weekly question
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-12">
      <h1 className="font-serif text-gold text-3xl mb-2">Profile</h1>
      <p className="text-text-secondary text-sm mb-12">Footprints · Settings · Weekly question</p>
      <div className="space-y-4 max-w-xl">
        <div className="border border-gold/20 rounded px-5 py-4">
          <p className="text-text-secondary text-xs tracking-widest mb-1">THIS WEEK'S QUESTION</p>
          <p className="font-serif text-text text-lg">Placeholder — curated weekly by Claude.</p>
        </div>
        <div className="border border-gold/20 rounded px-5 py-4">
          <p className="text-text-secondary text-xs tracking-widest mb-1">FOOTPRINTS</p>
          <p className="text-text-secondary text-sm">Sign in to track the knowledge nodes you've explored.</p>
        </div>
      </div>
    </main>
  );
}
