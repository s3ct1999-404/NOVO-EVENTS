"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { stats } from "@/data/site";

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericPart = parseInt(value.replace(/\D/g, ""), 10);
          const suffix = value.replace(/[\d]/g, "");
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(numericPart * eased) + suffix);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-5xl text-novo-gold md:text-6xl">
      {display}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.05)_0%,_transparent_70%)]" />
      <div className="container-narrow relative">
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedNumber value={stat.value} />
                <p className="mt-3 text-sm uppercase tracking-widest text-novo-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
