import Image from "@/components/ui/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, ImageReveal } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export function Intro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              label="About Novo Events"
              title="Where Vision Meets Execution"
              description="We are a premium event production company based in Kampala, delivering world-class technical solutions for events of every scale."
            />
            <p className="mb-6 leading-relaxed text-novo-muted">
              At Novo Events, we believe that every successful event is built on
              one principle: <em className="text-novo-gold not-italic">{siteConfig.slogan}</em>.
              From intimate corporate gatherings to stadium-scale concerts, we
              bring the same level of craftsmanship to every production.
            </p>
            <p className="mb-8 leading-relaxed text-novo-muted">
              Our team combines deep local expertise with international
              production standards, ensuring your event not only meets
              expectations — it exceeds them.
            </p>
            <Link href="/about" className="btn-outline group inline-flex">
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <ImageReveal className="relative aspect-[4/5] rounded-sm shadow-lg">
                <Image
                  src={images.intro.main}
                  alt={images.intro.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ImageReveal>
              <div className="absolute -bottom-6 -left-6 border border-novo-gold/30 bg-white p-8 shadow-md md:-bottom-8 md:-left-8">
                <p className="font-display text-4xl text-novo-gold">10+</p>
                <p className="mt-1 text-sm text-novo-muted">Years of Excellence</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
