import Image from "@/components/ui/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { eventCategories } from "@/data/services";

export function EventCategories() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Event Categories"
            title="Events We Bring to Life"
            description="Trusted by corporates, churches, NGOs, government institutions, and private clients across Uganda."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-novo-black/40 to-transparent transition-opacity group-hover:via-novo-black/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl transition-colors group-hover:text-novo-gold">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-novo-muted">
                    {category.description}
                  </p>
                </div>
                <div className="absolute left-0 top-0 h-1 w-0 bg-novo-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
