import HeroBanner from "@/components/sections/hero-banner";
import AnimatedStepsRow from "@/components/sections/steps-banner";
import FAQAccordion from "@/components/sections/faq-banner";
import ServicesBanner from "@/components/sections/services";
import ContractorDetailsBanner from "@/components/sections/contractor-details";
import OurVisionBanner from "@/components/ui/about";
import Vetted from "@/components/sections/vetted";
import WorkTogetherSection from "@/components/sections/work-together";

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
      <WorkTogetherSection />
    </div>
  );
}
