"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTABanner } from "@/components/ui/cta-banner";
import { faqItems, faqCategories } from "@/data/faq";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Questions Answered"
        subtitle="Everything you need to know about working with Novo Events."
      />

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <FadeIn>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {["All", ...faqCategories].map((category) => (
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

          <FadeIn>
            <Accordion type="single" collapsible className="w-full">
              {filtered.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        description="Our team is happy to help. Reach out and we'll respond promptly."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Request Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
