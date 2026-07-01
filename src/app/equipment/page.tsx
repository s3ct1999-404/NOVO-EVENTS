"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { images } from "@/data/images";
import { equipment, equipmentCategories } from "@/data/equipment";

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        label="Equipment Hire"
        title="Professional Equipment, On Demand"
        subtitle="Hire industry-leading production equipment independently or as part of your event package. No fixed packages — every hire is customized."
        image={images.pages.equipment}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              label="Our Inventory"
              title="Production-Ready Equipment"
              description="Browse our professional-grade inventory. Delivery, setup, and technical support available."
              align="center"
            />
          </FadeIn>

          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {equipmentCategories.map((category) => (
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

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group card-premium h-full overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute left-4 top-4 rounded-sm bg-white/90 px-3 py-1 text-xs uppercase tracking-widest text-novo-gold shadow-sm backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-novo-muted">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-sm border border-black/8 px-2.5 py-1 text-xs text-novo-muted"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-16 text-center">
            <p className="mb-6 text-novo-muted">
              Don&apos;t see what you need? Our inventory is constantly expanding.
            </p>
            <Link href="/quote" className="btn-primary group inline-flex">
              Request Equipment Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Need Equipment for Your Next Event?"
        description="Get a customized quotation for equipment hire with optional delivery and technical support."
        primaryLabel="Request Quote"
        primaryHref="/quote"
        secondaryLabel="Book Full Production"
        secondaryHref="/booking"
      />
    </>
  );
}
