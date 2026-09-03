import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { CEOStory } from "@/components/home/CEOStory";
import { Testimonials, ReviewsTrust } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CEOStory />
      <ServicesShowcase />
      <DoctorsSection />
      <BeforeAfter />
      <Testimonials />
      <ReviewsTrust />
      <FinalCTA />
    </>
  );
}
