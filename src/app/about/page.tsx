import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { siteConfig, stats } from "@/data/site";

import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Novo Events — Kampala's premium event production company delivering international-standard technical solutions across Uganda and East Africa.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every cable routed, every light focused, every sound balanced — executed with meticulous attention.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "We see beyond the brief to create productions that tell your story and elevate your brand.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Events are our craft. We pour genuine enthusiasm into every project, large or small.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Built on Precision"
        subtitle="A premium event production company redefining what's possible in Uganda and East Africa."
        image={images.pages.about}
        size="large"
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <SectionHeading
                label="Our Story"
                title="From Vision to Reality"
              />
              <div className="space-y-6 text-novo-muted leading-relaxed">
                <p>
                  Novo Events was founded with a singular belief: that events in
                  Uganda deserve the same level of production excellence found
                  anywhere in the world. Based in Kampala, we set out to bridge
                  the gap between local event needs and international production
                  standards.
                </p>
                <p>
                  What began as a passion for sound engineering and stage
                  production has evolved into a full-service event production
                  company trusted by corporates, churches, NGOs, government
                  institutions, and private clients across East Africa.
                </p>
                <p>
                  Today, Novo Events delivers complete production solutions —
                  sound, lighting, staging, photography, videography,
                  decoration, and entertainment — all unified by our founding
                  principle:{" "}
                  <em className="text-novo-gold not-italic">
                    {siteConfig.slogan}
                  </em>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={images.intro.main}
                  alt="Novo Events production"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding section-surface">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              label="Our Values"
              title="What Drives Us"
              align="center"
            />
          </FadeIn>
          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-premium p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-sm border border-novo-gold/20 text-novo-gold">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-novo-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl text-novo-gold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-novo-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Let's Build Your Next Event Together"
        description="Whether it's a corporate summit or an intimate celebration, we bring the same precision to every production."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
