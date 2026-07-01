import {
  Settings,
  Layers,
  Globe,
  Target,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/site";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  settings: Settings,
  layers: Layers,
  globe: Globe,
  target: Target,
};

export function WhyChoose() {
  return (
    <section className="section-padding section-surface">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Why Novo Events"
            title="The Standard Others Aspire To"
            description="We don't just produce events — we engineer experiences that leave lasting impressions."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Target;
            return (
              <StaggerItem key={item.title}>
                <div className="group card-premium p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-novo-gold/20 text-novo-gold transition-colors group-hover:bg-novo-gold group-hover:text-novo-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-novo-muted">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
