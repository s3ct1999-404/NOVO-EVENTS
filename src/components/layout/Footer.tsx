import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/8 bg-novo-surface">
      <div className="section-padding !pb-12 !pt-20">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="group flex flex-col">
                <span className="font-display text-2xl font-medium tracking-wider text-novo-black transition-colors group-hover:text-novo-gold">
                  NOVO
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-novo-muted">
                  Events
                </span>
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-novo-muted">
                {siteConfig.slogan}
              </p>
              <p className="mt-4 text-sm text-novo-muted">
                Premium event production and technical solutions in{" "}
                {siteConfig.location}.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-novo-gold">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-novo-muted transition-colors hover:text-novo-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/testimonials" className="text-sm text-novo-muted transition-colors hover:text-novo-black">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-novo-muted transition-colors hover:text-novo-black">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-novo-muted transition-colors hover:text-novo-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-novo-gold">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Sound Systems",
                  "Stage Construction",
                  "Lighting",
                  "Photography",
                  "Videography",
                  "Decoration",
                  "Entertainment",
                  "Equipment Hire",
                ].map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-sm text-novo-muted transition-colors hover:text-novo-black">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-novo-gold">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-novo-muted transition-colors hover:text-novo-black">
                    <Phone className="h-4 w-4 text-novo-gold" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-novo-muted transition-colors hover:text-novo-black">
                    <Mail className="h-4 w-4 text-novo-gold" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-novo-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-novo-gold" />
                  {siteConfig.address}
                </li>
              </ul>

              <div className="mt-8 flex gap-4">
                {[
                  { icon: Instagram, href: siteConfig.social.instagram },
                  { icon: Facebook, href: siteConfig.social.facebook },
                  { icon: Twitter, href: siteConfig.social.twitter },
                  { icon: Linkedin, href: siteConfig.social.linkedin },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-black/10 text-novo-muted transition-all hover:border-novo-gold hover:text-novo-gold"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/8 pt-8 md:flex-row">
            <p className="text-xs text-novo-muted">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/booking" className="text-xs text-novo-muted transition-colors hover:text-novo-gold">
                Book an Event
              </Link>
              <Link href="/quote" className="text-xs text-novo-muted transition-colors hover:text-novo-gold">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
