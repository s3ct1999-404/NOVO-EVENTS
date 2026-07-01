import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { images } from "@/data/images";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a customized quotation from Novo Events. Event production, sound hire, stage hire, lighting, photography, and videography in Uganda.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        label="Quotation"
        title="Request Pricing"
        subtitle="Not ready to book yet? Request a customized quotation and explore what's possible for your event."
        image={images.pages.quote}
      />

      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <FadeIn>
            <div className="mb-8 rounded-sm border border-novo-gold/20 bg-novo-gold/5 p-6">
              <p className="text-sm text-novo-muted">
                <strong className="text-novo-gold">How it works:</strong> Share
                your event details and requirements. Our team will prepare a
                tailored quotation and respond within 48 hours. No obligation to
                book.
              </p>
            </div>
            <QuoteForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
