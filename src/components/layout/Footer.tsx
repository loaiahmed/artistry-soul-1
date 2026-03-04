import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail, Heart } from "lucide-react";

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

interface FooterData {
  title: string;
  description: string;
  email: string;
  instaLink: string;
}

const Footer = () => {
  const [data, setData] = useState<FooterData | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await fetch(`${STRAPI_BASE}/api/footer`);
        if (!res.ok) {
          console.error("Strapi fetch failed:", res.status, res.statusText);
          return;
        }
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error("Error fetching footer data from Strapi:", err);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {data?.title ?? "Artistry Soul"}
            </h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              {data?.description ?? "Exploring nature, memory, and light through vibrant oil and acrylics."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href={data?.instaLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href={`mailto:${data?.email ?? "artist@example.com"}`}
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60 flex items-center justify-center gap-1">
            © {currentYear} {data?.title ?? "Artistry Soul"}. Made with{" "}
            <Heart size={14} className="text-primary fill-primary" /> for art lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;