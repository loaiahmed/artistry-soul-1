import { Link } from "react-router-dom";
import { Painting } from "@/types/painting";

interface ArtCardProps {
  painting: Painting;
}

const STRAPI_BASE = import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337";

const ArtCard = ({ painting }: ArtCardProps) => {
  const imageUrl = painting.Image.url.startsWith("http")
    ? painting.Image.url
    : `${STRAPI_BASE}${painting.Image.url}`;

  return (
    <Link
      to={`/gallery/${painting.Slug}`}
      className="group block overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={imageUrl}
          alt={painting.Title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content on Hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="text-primary-foreground/80 text-sm font-medium mb-1">
            {painting.Year}
          </span>
          <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">
            {painting.Title}
          </h3>
          <p className="text-primary-foreground/80 text-sm line-clamp-2">
            {painting.Description}
          </p>
        </div>
      </div>

      {/* Always Visible Title */}
      <div className="p-5 bg-card">
        <h3 className="font-serif text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {painting.Title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{painting.Dimensions}</p>
      </div>
    </Link>
  );
};

export default ArtCard;