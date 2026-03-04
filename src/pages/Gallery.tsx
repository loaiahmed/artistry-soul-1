import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import ArtCard from "@/components/gallery/ArtCard";
import { Painting } from "@/types/painting";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

const Gallery = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await fetch(`${STRAPI_BASE}/api/paintings?populate=*`);

        if (!res.ok) {
          console.error("Strapi fetch failed:", res.status, res.statusText);
          setError(true);
          return;
        }

        const json = await res.json();
        setPaintings(json.data ?? []);
      } catch (err) {
        console.error("Error fetching paintings from Strapi:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Art Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the complete collection of original paintings, each telling its
            own unique story through color and form.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {loading ? (
            <p className="text-center text-muted-foreground py-20">Loading paintings...</p>
          ) : error ? (
            <p className="text-center text-destructive py-20">
              Failed to load paintings. Make sure Strapi is running.
            </p>
          ) : paintings.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              No paintings found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paintings.map((painting) => (
                <ArtCard key={painting.id} painting={painting} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;