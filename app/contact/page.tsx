import { Metadata } from "next"
import { ContactSection } from "@/components/contact/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | ChainForge Institute",
  description: "Get in touch with ChainForge Institute. We're here to help with any questions about our courses or services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactSection />
      <Footer />
    </div>
  )
}
