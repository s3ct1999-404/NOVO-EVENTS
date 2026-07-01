import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View Novo Events portfolio — corporate events, weddings, concerts, and conferences produced across Uganda.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
