import HeroBanner from "@/components/ui/hero-banner";
import AnimatedStepsRow from "@/components/ui/steps-banner";
import FAQAccordion from "@/components/ui/faq-banner";
import ServicesBanner from "@/components/ui/services";
import ContractorDetailsBanner from "@/components/ui/contractor-details";
import OurVisionBanner from "@/components/ui/about";
import Vetted from "@/components/ui/vetted";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <OurVisionBanner />
    
      <AnimatedStepsRow />
      <Vetted />
      <ServicesBanner />
      <ContractorDetailsBanner />
      <FAQAccordion />
    </div>
  );
}
