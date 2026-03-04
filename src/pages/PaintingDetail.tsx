import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Maximize2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Painting } from "@/types/painting";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

const PaintingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [painting, setPainting] = useState<Painting | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPainting = async () => {
      try {
        const res = await fetch(
          `${STRAPI_BASE}/api/paintings?filters[Slug][$eq]=${slug}&populate=*`
        );

        if (!res.ok) {
          console.error("Strapi fetch failed:", res.status, res.statusText);
          setError(true);
          return;
        }

        const json = await res.json();
        const found = json.data?.[0] ?? null;
        setPainting(found);
      } catch (err) {
        console.error("Error fetching painting from Strapi:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPainting();
  }, [slug]);

  const imageUrl = painting?.Image?.url.startsWith("http")
    ? painting.Image.url
    : `${STRAPI_BASE}${painting?.Image?.url}`;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-24">
          <p className="text-muted-foreground">Loading painting...</p>
        </div>
      </Layout>
    );
  }

  if (error || !painting) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              Painting Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The painting you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/gallery")}>
              <ArrowLeft className="mr-2" size={18} />
              Back to Gallery
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/gallery")}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
            Back to Gallery
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={imageUrl}
                  alt={painting.Title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-secondary/10"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-primary/20 to-accent-foreground/20 rounded-3xl blur-2xl opacity-50" />
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-6">
                  {painting.Title}
                </h1>

                <div className="space-y-6">
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-accent/50">
                      <div className="flex items-center gap-2 text-accent-foreground mb-1">
                        <Maximize2 size={16} />
                        <span className="text-sm font-medium">Dimensions</span>
                      </div>
                      <p className="text-foreground font-semibold">
                        {painting.Dimensions}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/50">
                      <div className="flex items-center gap-2 text-accent-foreground mb-1">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">Year</span>
                      </div>
                      <p className="text-foreground font-semibold">
                        {painting.Year}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">
                      About This Piece
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-serif">
                      {painting.Description}
                    </p>
                  </div>

                  {/* Contact CTA */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Interested in this piece? Contact the artist for inquiries.
                    </p>
                    <Button className="w-full rounded-full">
                      Inquire About This Painting
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaintingDetail;