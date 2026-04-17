import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { MarketsSection } from "@/components/home/markets-section"
import { CoursesSection } from "@/components/home/courses-section"
import { MentorsSection } from "@/components/home/mentors-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingSection } from "@/components/home/pricing-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <MarketsSection />
      <CoursesSection />
      <MentorsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
