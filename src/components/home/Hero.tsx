"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { luxuryEase } from "@/lib/motion";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, prefersReducedMotion ? 1 : 0]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-novo-black">
      {/* Parallax background image — dark overlay lets image breathe */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={images.hero.main}
          alt={images.hero.alt}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay — image visible at top, fades to near-black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        {/* Subtle radial vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Gold accent line — top of hero */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-novo-gold to-transparent z-20" />

      <motion.div
        style={{ opacity }}
        className="container-narrow relative z-10 px-6 text-center md:px-12 lg:px-20"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
        >
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-novo-gold" />
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-novo-gold">
              {siteConfig.location}
            </span>
            <div className="h-px w-12 bg-novo-gold" />
          </div>
        </motion.div>

        {/* Main headline — white on dark background, legible over any image */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
          className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          <span className="block">Crafting</span>
          <span className="mt-2 block text-gradient-gold">Unforgettable</span>
          <span className="mt-2 block">Experiences</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: luxuryEase }}
          className="mx-auto mt-8 max-w-2xl text-lg text-white/75 md:text-xl"
        >
          {siteConfig.slogan}. Premium event production and technical solutions
          for Uganda and East Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: luxuryEase }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/booking" className="btn-primary group">
            Start Your Event
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "200+ Events Delivered",
            "Kampala · Entebbe · Jinja",
            "ISO-Standard Equipment",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-novo-gold" />
              <span className="text-xs text-white/60 uppercase tracking-wider">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
