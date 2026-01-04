import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import InspirationSection from "@/components/home/InspirationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GalleryPreview />
      <InspirationSection />
    </Layout>
  );
};

export default Index;
