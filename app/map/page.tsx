// Knowledge Map — expandable vertical scroll
import { MAP_LAYERS } from "@/lib/mapData";
import MapLayer from "@/components/MapLayer";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="mb-10">
        <h1 className="font-serif text-gold text-3xl mb-2">Knowledge Map</h1>
        <p className="text-text-secondary text-sm">
          8 layers of AI literacy · tap any layer to explore
        </p>
      </div>
      <div className="space-y-3 max-w-2xl">
        {MAP_LAYERS.map((layer) => (
          <MapLayer key={layer.id} layer={layer} />
        ))}
      </div>
    </main>
  );
}
