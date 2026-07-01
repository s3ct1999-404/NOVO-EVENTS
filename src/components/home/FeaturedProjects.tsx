import Image from "@/components/ui/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/portfolio";

export function FeaturedProjects() {
  const featured = portfolioProjects.filter((p) => p.featured);

  return (
    <section className="section-padding section-surface">
      <div className="container-narrow">
        <FadeIn>
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="A selection of productions that showcase our commitment to excellence."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <StaggerItem key={project.id}>
              <Link
                href="/portfolio"
                className={`group block overflow-hidden rounded-sm ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[500px]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-novo-black via-novo-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <span className="mb-2 text-xs font-medium uppercase tracking-widest text-novo-gold">
                      {project.category}
                    </span>
                    <h3
                      className={`font-display transition-colors group-hover:text-novo-gold ${
                        index === 0 ? "text-3xl md:text-4xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-novo-muted line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link href="/portfolio" className="btn-outline group inline-flex">
            View Full Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
