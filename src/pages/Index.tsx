import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import InspirationSection from "@/components/home/InspirationSection";
import LoadingScreen from "@/components/ui/loadingScreen";
import { Painting } from "@/types/painting";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

interface HomePageData {
  title: string;
  description: string;
  featured_art: { url: string };
}

const Index = () => {
  const [heroData, setHeroData] = useState<HomePageData | null>(null);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroRes, paintingsRes] = await Promise.all([
          fetch(`${STRAPI_BASE}/api/home-page?populate=featured_art`),
          fetch(`${STRAPI_BASE}/api/paintings?populate=Image&pagination[limit]=5`),
        ]);

        const heroJson = await heroRes.json();
        const paintingsJson = await paintingsRes.json();

        setHeroData(heroJson.data);
        setPaintings(paintingsJson.data ?? []);
      } catch (err) {
        console.error("Error fetching home page data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <HeroSection data={heroData} />
      <GalleryPreview paintings={paintings} />
      <InspirationSection />
    </Layout>
  );
};

export default Index;