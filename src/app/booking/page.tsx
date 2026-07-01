import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { images } from "@/data/images";
import { BookingForm } from "@/components/forms/BookingForm";

export const metadata: Metadata = {
  title: "Book Your Event",
  description:
    "Book Novo Events for your next event in Uganda. Custom production packages — no fixed pricing. Sound, lighting, staging, and more.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        label="Booking"
        title="Reserve Your Date"
        subtitle="Tell us about your event and we'll craft a customized production plan. No fixed packages — every quotation is tailored to you."
        image={images.pages.booking}
      />

      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <FadeIn>
            <div className="mb-8 rounded-sm border border-novo-gold/20 bg-novo-gold/5 p-6">
              <p className="text-sm text-novo-muted">
                <strong className="text-novo-gold">Note:</strong> This form does
                not display pricing. Novo Events provides customized quotations
                based on your specific requirements. Submit your details and our
                team will contact you within 24 hours.
              </p>
            </div>
            <BookingForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
