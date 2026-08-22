import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyTransparency } from "@/components/home/WhyTransparency";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { TreatmentJourney } from "@/components/home/TreatmentJourney";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { CEOStory } from "@/components/home/CEOStory";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { Testimonials, ReviewsTrust } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Partners, FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BeforeAfter />
      <WhyTransparency />
      <ServicesShowcase />
      <TreatmentJourney />
      <DoctorsSection />
      <CEOStory />
      <ClinicExperience />
      <Testimonials />
      <ReviewsTrust />
      <FAQ />
      <Partners />
      <FinalCTA />
    </>
  );
}
