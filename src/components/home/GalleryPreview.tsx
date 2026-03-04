import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Painting } from "@/types/painting";
import Slideshow from "./Slideshow";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

const GalleryPreview = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await fetch(
          `${STRAPI_BASE}/api/paintings?populate=Image&pagination[limit]=5`
        );
        if (!res.ok) {
          console.error("Strapi fetch failed:", res.status, res.statusText);
          return;
        }
        const json = await res.json();
        setPaintings(json.data ?? []);
      } catch (err) {
        console.error("Error fetching slideshow paintings:", err);
      }
    };

    fetchPaintings();
  }, []);

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            Featured Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Glimpse of the Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Slideshow paintings={paintings} />

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-8"
          >
            <Link to="/gallery">
              View All Paintings
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;