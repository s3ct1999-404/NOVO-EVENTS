import Image from "@/components/ui/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="section-padding section-surface">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Gallery"
            title="Moments We've Created"
            description="A glimpse into the productions that define our craft."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="columns-2 gap-4 md:columns-3">
          {preview.map((image, index) => (
            <StaggerItem key={image.id}>
              <div
                className={`group relative mb-4 overflow-hidden rounded-sm break-inside-avoid ${
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
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs font-medium uppercase tracking-widest text-novo-gold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link href="/gallery" className="btn-outline group inline-flex">
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
