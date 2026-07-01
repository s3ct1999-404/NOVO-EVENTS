"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled || !isHome
          ? "border-b border-black/8 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <div className="container-narrow flex h-20 items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-medium tracking-wider text-novo-black transition-colors group-hover:text-novo-gold md:text-2xl">
            NOVO
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-novo-muted">
            Events
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-xs font-medium uppercase tracking-widest transition-colors hover:text-novo-gold",
                pathname === link.href ? "text-novo-gold" : "text-novo-black/70"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 h-px w-full bg-novo-gold"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/quote" className="btn-outline !px-6 !py-2.5 !text-xs">
            Get Quote
          </Link>
          <Link href="/booking" className="btn-primary !px-6 !py-2.5 !text-xs">
            Book Now
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-novo-black lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-display text-3xl transition-colors hover:text-novo-gold",
                      pathname === link.href
                        ? "text-novo-gold"
                        : "text-novo-black"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link href="/quote" className="btn-outline">
                  Get Quote
                </Link>
                <Link href="/booking" className="btn-primary">
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
