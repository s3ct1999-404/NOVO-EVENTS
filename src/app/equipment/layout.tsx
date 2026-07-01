import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Hire",
  description:
    "Professional event equipment hire in Uganda. Speakers, mixers, microphones, stage platforms, lighting, instruments, trusses, and accessories.",
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
