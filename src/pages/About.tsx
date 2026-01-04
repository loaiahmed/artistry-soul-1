import { Mail, MapPin, Brush } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-3">
            The Artist
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Artist Image Placeholder */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-card">
                  <Brush className="w-20 h-20 text-primary/50" />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-pulse" />
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* The Journey */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="font-serif text-2xl font-bold text-card-foreground">
                    The Journey Begins
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                  <p>
                    Welcome to the world of creative expression. Born and raised with
                    an innate appreciation for the arts, my journey into painting
                    began with a simple box of watercolors. That initial spark ignited
                    a lifelong passion for capturing the ephemeral beauty of the
                    natural world and the complex narratives of the human spirit.
                  </p>
                  <p>
                    My work primarily explores the themes of memory, nature, and
                    stillness, often utilizing impasto techniques in oil painting to
                    create texture and depth. I believe art is not just about what is
                    seen, but about the conversation it starts within the viewer.
                  </p>
                </div>
              </div>

              {/* Vision & Philosophy */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <h2 className="font-serif text-2xl font-bold text-card-foreground">
                    Vision & Philosophy
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-serif">
                  <p>
                    I strive to create pieces that feel timeless, drawing inspiration
                    from the luminosity of the Dutch Masters and the tranquility of
                    Zen gardens. Every canvas is a dialogue between intention and
                    spontaneity, where colors and forms collide to reveal hidden
                    truths.
                  </p>
                  <p>
                    I have exhibited my work in galleries across London and New York
                    and am honored to have my pieces held in private collections
                    worldwide. Thank you for taking the time to explore my portfolio
                    and share in my artistic vision.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/10 to-accent rounded-2xl p-8 text-center">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  I am always open to commissions, collaborations, and conversations
                  about art. Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    <a href="mailto:artist@example.com">
                      <Mail className="mr-2" size={18} />
                      Send an Email
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} />
                    <span>Based in New York City</span>
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
