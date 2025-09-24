import HeroBanner from "@/components/sections/hero-banner";
import AnimatedStepsRow from "@/components/sections/our-approach";
import FAQAccordion from "@/components/sections/faqs";
import ServicesBanner from "@/components/sections/services";
import ContractorDetailsBanner from "@/components/sections/join";
import OurVisionBanner from "@/components/sections/our-vision";
import Vetted from "@/components/sections/vetted";
import WorkTogetherSection from "@/components/sections/work-together";
import VideoPlayer from "@/components/sections/in-action";
import VisionSection from "@/components/sections/new-vision";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      {/* <OurVisionBanner /> */}
      <VisionSection />
      <AnimatedStepsRow />
      <VideoPlayer />
      <Vetted />
      <ServicesBanner />
      <ContractorDetailsBanner />
      <FAQAccordion />
      <WorkTogetherSection />
    </div>
  );
}
