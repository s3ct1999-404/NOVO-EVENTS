import Image from "next/image";
import Link from "next/link";
import {
  Volume2,
  LayoutGrid,
  Lightbulb,
  Camera,
  Video,
  Sparkles,
  Music,
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "volume-2": Volume2,
  "layout-grid": LayoutGrid,
  lightbulb: Lightbulb,
  camera: Camera,
  video: Video,
  sparkles: Sparkles,
  music: Music,
};

export function CoreServices() {
  return (
    <section className="section-padding section-surface">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Our Services"
            title="Complete Production Solutions"
            description="From sound to staging, lighting to live entertainment — we deliver every element your event demands."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Volume2;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group card-premium block h-full overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-novo-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-sm bg-novo-gold/90 text-novo-black">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl transition-colors group-hover:text-novo-gold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-novo-muted">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-novo-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link href="/services" className="btn-outline group inline-flex">
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
