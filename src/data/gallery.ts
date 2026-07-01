import { images } from "./images";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export const galleryCategories = [
  "All",
  "Corporate",
  "Weddings",
  "Concerts",
  "Church",
  "Lighting",
  "Sound",
  "Stage",
  "Photography",
  "Videography",
  "Decoration",
];

export const galleryImages: GalleryImage[] = images.gallery.map((img) => ({
  id: img.id,
  src: img.src,
  alt: img.alt,
  category: img.category,
  width: img.width,
  height: img.height,
}));
