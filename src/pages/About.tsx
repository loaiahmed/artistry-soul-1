import { useState, useEffect } from "react";
import { Mail, MapPin, Brush } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

interface AboutData {
  title: string;
  subTitle1: string;
  subDescription1_1: string;
  subDescription1_2: string;
  subTitle2: string;
  subDescription2_1: string;
  subDescription2_2: string;
  connect: string;
  connectDescription: string;
  connectEmail: string;
  connectLocation: string;
  artistImg: {
    url: string;
  };
}

const About = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`${STRAPI_BASE}/api/about-page?populate=artistImg`);
        if (!res.ok) {
          console.error("Strapi fetch failed:", res.status, res.statusText);
          return;
        }
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error("Error fetching about page from Strapi:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const artistImgUrl = data?.artistImg?.url.startsWith("http")
    ? data.artistImg.url
    : `${STRAPI_BASE}${data?.artistImg?.url}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            The Artist
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            {loading ? "About Me" : data?.title ?? "About Me"}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">

            {/* Artist Image */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-card">
                  {data?.artistImg?.url ? (
                    <img
                      src={artistImgUrl}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Brush className="w-20 h-20 text-primary/50" />
                  )}
                </div>
                <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-pulse" />
              </div>
            </div>

            <div className="space-y-12">
              {/* The Journey */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="font-serif text-2xl font-bold text-card-foreground">
                    {loading ? "The Journey Begins" : data?.subTitle1 ?? "The Journey Begins"}
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                  <p>{loading ? "..." : data?.subDescription1_1}</p>
                  <p>{loading ? "" : data?.subDescription1_2}</p>
                </div>
              </div>

              {/* Vision & Philosophy */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="font-serif text-2xl font-bold text-card-foreground">
                    {loading ? "Vision & Philosophy" : data?.subTitle2 ?? "Vision & Philosophy"}
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                  <p>{loading ? "..." : data?.subDescription2_1}</p>
                  <p>{loading ? "" : data?.subDescription2_2}</p>
                </div>
              </div>

              {/* Connect */}
              <div className="bg-gradient-to-br from-primary/10 to-accent rounded-2xl p-8 text-center">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {loading ? "Let's Connect" : data?.connect ?? "Let's Connect"}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  {loading
                    ? "I am always open to commissions, collaborations, and conversations about art."
                    : data?.connectDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    <a href={`mailto:${data?.connectEmail ?? "artist@example.com"}`}>
                      <Mail className="mr-2" size={18} />
                      Send an Email
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span>{loading ? "..." : data?.connectLocation}</span>
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

export default About;