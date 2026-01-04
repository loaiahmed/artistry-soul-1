import Layout from "@/components/layout/Layout";
import ArtCard from "@/components/gallery/ArtCard";
import { SAMPLE_PAINTINGS } from "@/types/painting";

const Gallery = () => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_PAINTINGS.map((painting) => (
              <ArtCard key={painting.id} painting={painting} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
