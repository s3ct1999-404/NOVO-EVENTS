import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Novo Events in Kampala, Uganda. Event production inquiries, bookings, and equipment hire.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Talk"
        subtitle="Ready to start planning? Have a question? We'd love to hear from you."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-16 lg:grid-cols-5">
            <FadeIn className="lg:col-span-2">
              <h2 className="font-display text-2xl">Get in Touch</h2>
              <p className="mt-4 text-novo-muted leading-relaxed">
                Whether you&apos;re planning a corporate summit, wedding, concert,
                or private celebration — our team is ready to help bring your
                vision to life.
              </p>

              <div className="mt-10 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-novo-gold/20 text-novo-gold">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-novo-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm transition-colors hover:text-novo-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-3">
              <div className="card-premium p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
