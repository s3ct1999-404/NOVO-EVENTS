"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { images } from "@/data/images";
import { galleryImages, galleryCategories } from "@/data/gallery";
import { luxuryEase } from "@/lib/motion";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const lightboxImage = galleryImages.find((img) => img.id === lightbox);

  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox]);

  return (
    <>
      <PageHero
        label="Gallery"
        title="Visual Stories"
        subtitle="Moments captured from productions across Uganda — corporate events, weddings, concerts, and more."
        image={images.pages.gallery}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all ${
                    activeCategory === category
                      ? "filter-pill filter-pill-active"
                      : "filter-pill filter-pill-inactive"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {filtered.map((image, index) => (
              <StaggerItem key={image.id}>
                <button
                  onClick={() => setLightbox(image.id)}
                  className={`group relative mb-4 w-full overflow-hidden rounded-sm break-inside-avoid ${
                    index % 3 === 1 ? "md:mt-8" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      index % 2 === 0 ? "aspect-[4/5]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-novo-black/0 transition-colors duration-300 group-hover:bg-novo-black/50" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xs font-medium uppercase tracking-widest text-novo-gold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: luxuryEase }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 text-novo-muted transition-colors hover:text-novo-black"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={lightboxImage.width}
                height={lightboxImage.height}
                className="max-h-[85vh] w-auto object-contain"
                sizes="90vw"
                priority
              />
              <p className="mt-4 text-center text-sm text-novo-muted">
                {lightboxImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
