import HeroSection from "@/src/components/home/HeroSection";
import TrustedBy from "@/src/components/home/TrustedBy";
import ServicesSection from "@/src/components/home/ServicesSection";
import StatsSection from "@/src/components/home/StatsSection";
import HowItWorks from "@/src/components/home/HowItWorks";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";
import FAQSection from "@/src/components/home/FAQSection";
import CTASection from "@/src/components/home/CTASection";
// import { AnimatedTestimonialsDemo } from "@/src/components/home/Carousel";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      {/* <StatsSection /> */}
      {/* <AnimatedTestimonialsDemo/> */}
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}