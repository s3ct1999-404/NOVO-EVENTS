"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { CTABanner } from "@/components/ui/cta-banner";
import { images } from "@/data/images";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        label="Portfolio"
        title="Work That Speaks for Itself"
        subtitle="A showcase of productions that demonstrate our commitment to precision and excellence."
        image={images.pages.portfolio}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {portfolioCategories.map((category) => (
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

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {filtered.map((project) => (
              <StaggerItem key={project.id}>
                <article className="group card-premium overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium uppercase tracking-widest text-novo-gold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-2xl transition-colors group-hover:text-novo-gold">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-novo-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-novo-muted">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-sm border border-novo-gold/20 px-2.5 py-1 text-xs text-novo-gold"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="Your Event Could Be Our Next Showcase"
        description="Let's create a production worth remembering."
        primaryLabel="Start Your Project"
        primaryHref="/booking"
        secondaryLabel="Request Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
