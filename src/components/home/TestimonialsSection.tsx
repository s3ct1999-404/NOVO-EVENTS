"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Testimonials"
            title="Trusted by Leaders"
            description="What our clients say about working with Novo Events."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mx-auto max-w-4xl">
            <Quote className="absolute -top-4 left-0 h-12 w-12 text-novo-gold/20" />

            <div className="card-premium p-8 md:p-12">
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonials[active].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-novo-gold text-novo-gold"
                    />
                  )
                )}
              </div>

              <blockquote className="font-display text-xl leading-relaxed md:text-2xl">
                &ldquo;{testimonials[active].content}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-novo-gold/10 font-display text-lg text-novo-gold">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonials[active].name}</p>
                  <p className="text-sm text-novo-muted">
                    {testimonials[active].role},{" "}
                    {testimonials[active].organization}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-8 bg-novo-gold"
                      : "w-2 bg-black/15 hover:bg-black/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
