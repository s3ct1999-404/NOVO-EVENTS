import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "section-padding relative overflow-hidden border-t border-black/8 bg-novo-surface",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.06)_0%,_transparent_70%)]" />
      <div className="container-narrow relative text-center">
        <div className="gold-line mx-auto mb-8" />
        <h2 className="heading-section mx-auto max-w-2xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-novo-muted">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primaryHref} className="btn-primary group">
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn-outline">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
