import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  image?: string;
  size?: "default" | "large";
}

export function PageHero({
  title,
  subtitle,
  label,
  image,
  size = "default",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-novo-black ${
        size === "large" ? "min-h-[70vh]" : "min-h-[50vh]"
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-novo-dark-grey to-novo-black" />
      )}

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-novo-gold/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.08)_0%,_transparent_60%)]" />

      <div className="container-narrow relative w-full px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:px-20">
        {label && (
          <FadeIn delay={0.1}>
            <div className="mb-4 flex items-center gap-4">
              <div className="gold-line" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-novo-gold">
                {label}
              </span>
            </div>
          </FadeIn>
        )}
        <FadeIn delay={0.2}>
          <h1 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl text-balance">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.35}>
            <p className="mt-6 max-w-2xl text-lg text-white/70">{subtitle}</p>
          </FadeIn>
        )}
        <FadeIn delay={0.45}>
          <nav className="mt-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition-colors hover:text-novo-gold">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/80">{title}</span>
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}
