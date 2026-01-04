import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Painting, SAMPLE_PAINTINGS } from "@/types/painting";
import { Button } from "@/components/ui/button";

interface SlideshowProps {
  paintings?: Painting[];
  interval?: number;
}

const Slideshow = ({
  paintings = SAMPLE_PAINTINGS.slice(0, 4),
  interval = 4000,
}: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paintings.length);
    }, interval);

    return () => clearInterval(timer);
  }, [paintings.length, interval, isHovered]);

  if (paintings.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-20">
        No paintings to display in slideshow.
      </div>
    );
  }

  const currentPainting = paintings[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? paintings.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
  };

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slide */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
        <Link to={`/gallery/${currentPainting.Slug}`}>
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={currentPainting.Image.url}
              alt={currentPainting.Title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-secondary-foreground">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                {currentPainting.Title}
              </h3>
              <p className="text-secondary-foreground/80 line-clamp-2 max-w-lg">
                {currentPainting.Description}
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.preventDefault();
            goToPrevious();
          }}
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.preventDefault();
            goToNext();
          }}
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {paintings.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-primary w-8"
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
