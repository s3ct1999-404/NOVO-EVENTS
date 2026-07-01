"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { equipment } from "@/data/equipment";
import { luxuryEase } from "@/lib/motion";

export function EquipmentShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Equipment Hire"
            title="Professional Grade Equipment"
            description="Hire industry-leading production equipment independently or as part of your event package."
            align="center"
          />
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={equipment[active].id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                  className="absolute inset-0"
                >
                  <Image
                    src={equipment[active].image}
                    alt={equipment[active].name}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-3">
              {equipment.slice(0, 6).map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActive(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full rounded-sm border p-4 text-left transition-colors duration-300 ${
                    active === index
                      ? "border-novo-gold/40 bg-novo-gold/5"
                      : "border-black/8 bg-white hover:border-novo-gold/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-novo-gold">
                        {item.category}
                      </p>
                      <h3 className="mt-1 font-display text-lg text-novo-black">
                        {item.name}
                      </h3>
                    </div>
                    <div
                      className={`h-2 w-2 rounded-full transition-colors ${
                        active === index ? "bg-novo-gold" : "bg-black/10"
                      }`}
                    />
                  </div>
                </motion.button>
              ))}
            </div>

            <Link
              href="/equipment"
              className="btn-outline group mt-8 inline-flex"
            >
              Browse All Equipment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
