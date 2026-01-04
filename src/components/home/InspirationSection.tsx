import { Link } from "react-router-dom";
import { Palette, Eye, Sparkles } from "lucide-react";

const InspirationSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Vibrant Colors",
      description:
        "Each piece is crafted with carefully selected pigments that dance between shadow and light.",
    },
    {
      icon: Eye,
      title: "Unique Vision",
      description:
        "A distinctive perspective that transforms ordinary scenes into extraordinary moments.",
    },
    {
      icon: Sparkles,
      title: "Emotional Depth",
      description:
        "Art that speaks to the soul, evoking memories and stirring the imagination.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            The Vision
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Inspiration
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-serif">
            The current collection focuses on the serenity found in quiet moments of
            the landscape. Each brushstroke is an attempt to capture the fleeting
            light of dawn and dusk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card hover:bg-accent transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 transition-all"
          >
            Learn more about the artist's philosophy →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
