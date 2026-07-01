import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Event production gallery from Novo Events — corporate events, weddings, concerts, lighting, sound, and staging in Uganda.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
