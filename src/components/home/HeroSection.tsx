import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase mb-4 animate-fade-in">
            Welcome to
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Artistry Soul
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-serif italic">
            Exploring nature, memory, and light through vibrant oil and acrylics.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/gallery")}
            className="group text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            View the Full Gallery
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
