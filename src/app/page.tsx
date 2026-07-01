import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { CoreServices } from "@/components/home/CoreServices";
import { EventCategories } from "@/components/home/EventCategories";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Statistics } from "@/components/home/Statistics";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EquipmentShowcase } from "@/components/home/EquipmentShowcase";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TeamPreview } from "@/components/home/TeamPreview";
import { CTABanner } from "@/components/ui/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <CoreServices />
      <EventCategories />
      <WhyChoose />
      <Statistics />
      <FeaturedProjects />
      <EquipmentShowcase />
      <GalleryPreview />
      <TestimonialsSection />
      <TeamPreview />
      <CTABanner
        title="Ready to Create Something Extraordinary?"
        description="Let's discuss your vision and craft a production that exceeds every expectation. Every quotation is customized to your unique event."
        primaryLabel="Book Your Event"
        primaryHref="/booking"
        secondaryLabel="Request a Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
