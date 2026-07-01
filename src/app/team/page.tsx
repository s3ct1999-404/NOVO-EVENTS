import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTABanner } from "@/components/ui/cta-banner";
import { teamMembers } from "@/data/team";

import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the creative directors, engineers, and producers behind Novo Events — Kampala's premium event production team.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Team"
        title="Masters of Their Craft"
        subtitle="The dedicated professionals who bring precision to every detail of your event."
        image={images.pages.team}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <SectionHeading
              label="Leadership & Crew"
              title="People Who Make It Happen"
              description="A multidisciplinary team united by a shared commitment to production excellence."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group card-premium overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-novo-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-novo-gold">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-novo-muted">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner
        title="Work With Uganda's Finest Production Team"
        description="Our crew is ready to bring your next event to life."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
