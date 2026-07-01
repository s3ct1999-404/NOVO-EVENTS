import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client testimonials for Novo Events — trusted by corporates, churches, NGOs, and private clients across Uganda.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
