import Image from "@/components/ui/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMembers } from "@/data/team";

export function TeamPreview() {
  const preview = teamMembers.slice(0, 4);

  return (
    <section className="section-padding section-surface">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Our Team"
            title="The People Behind the Production"
            description="A dedicated team of creatives, engineers, and producers committed to your event's success."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((member) => (
            <StaggerItem key={member.id}>
              <div className="group card-premium overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg">{member.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-novo-gold">
                    {member.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link href="/team" className="btn-outline group inline-flex">
            Meet the Full Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
