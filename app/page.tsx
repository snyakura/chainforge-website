import { HeroSection } from "@/components/home/hero-section"
import { MarketTicker } from "@/components/home/market-ticker"
import { FeaturedCourses } from "@/components/home/featured-courses"
import { Testimonials } from "@/components/home/testimonials"
import { Announcements } from "@/components/home/announcements"
import { PaymentMethods } from "@/components/home/payment-methods"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MarketTicker />
      <FeaturedCourses />
      <Testimonials />
      <Announcements />
      <PaymentMethods />
      <Footer />
    </div>
  )
}
