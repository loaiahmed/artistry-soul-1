export interface Painting {
  id: number;
  Title: string;
  Slug: string;
  Description: string;
  Dimensions: string;
  Year: string;
  Image: {
    url: string;
  };
}

// Sample paintings data for demo
export const SAMPLE_PAINTINGS: Painting[] = [
  {
    id: 1,
    Title: "Sunset Over Peaks",
    Slug: "sunset-over-peaks",
    Description: "A mesmerizing capture of golden hour light cascading over mountain ridges, where warm oranges blend with cool purples in the sky.",
    Dimensions: "24\" x 36\"",
    Year: "2024",
    Image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" }
  },
  {
    id: 2,
    Title: "Forest Mystique",
    Slug: "forest-mystique",
    Description: "Deep within an ancient forest, rays of light pierce through the canopy creating an ethereal atmosphere of mystery and wonder.",
    Dimensions: "30\" x 40\"",
    Year: "2024",
    Image: { url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" }
  },
  {
    id: 3,
    Title: "Abstract Flow",
    Slug: "abstract-flow",
    Description: "An exploration of color and movement, where fluid forms dance across the canvas in a symphony of emotion and energy.",
    Dimensions: "36\" x 48\"",
    Year: "2023",
    Image: { url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800" }
  },
  {
    id: 4,
    Title: "City at Night",
    Slug: "city-at-night",
    Description: "The urban landscape transformed by darkness, where city lights create constellations of human activity against the night sky.",
    Dimensions: "28\" x 42\"",
    Year: "2023",
    Image: { url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800" }
  },
  {
    id: 5,
    Title: "Ocean Dreams",
    Slug: "ocean-dreams",
    Description: "Waves of turquoise and deep blue merge in this meditative piece that captures the endless rhythm of the sea.",
    Dimensions: "32\" x 44\"",
    Year: "2024",
    Image: { url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800" }
  },
  {
    id: 6,
    Title: "Golden Fields",
    Slug: "golden-fields",
    Description: "A pastoral scene of wheat fields swaying in the summer breeze, bathed in the warm glow of afternoon sunlight.",
    Dimensions: "26\" x 38\"",
    Year: "2023",
    Image: { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" }
  }
];
