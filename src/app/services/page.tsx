import type { Metadata } from "next";
import Image from "@/components/ui/image";
import {
  Volume2,
  LayoutGrid,
  Lightbulb,
  Camera,
  Video,
  Sparkles,
  Music,
  Check,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { CTABanner } from "@/components/ui/cta-banner";
import { images } from "@/data/images";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional event production services in Uganda — sound systems, stage construction, lighting, photography, videography, decoration, and entertainment.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "volume-2": Volume2,
  "layout-grid": LayoutGrid,
  lightbulb: Lightbulb,
  camera: Camera,
  video: Video,
  sparkles: Sparkles,
  music: Music,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Complete Production Solutions"
        subtitle="Every service engineered with precision, delivered with excellence."
        image={images.pages.services}
      />

      <section className="section-padding">
        <div className="container-narrow space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Volume2;
            const isReversed = index % 2 !== 0;

            return (
              <FadeIn key={service.id}>
                <div
                  id={service.id}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    isReversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  </div>

                  <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-novo-gold/10 text-novo-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="gold-line" />
                    </div>
                    <h2 className="heading-section">{service.title}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-novo-muted">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-novo-muted"
                        >
                          <Check className="h-4 w-4 shrink-0 text-novo-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CTABanner
        title="Need a Custom Production Package?"
        description="Every event is unique. Tell us your vision and we'll craft a tailored solution."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="Book Now"
        secondaryHref="/booking"
      />
    </>
  );
}
