import { Metadata } from "next"
import { PaymentsSection } from "@/components/payments/payments-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Payment Methods | ChainForge Institute",
  description: "Choose from our flexible payment options including mobile money, crypto, and traditional payment methods.",
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <PaymentsSection />
      <Footer />
    </div>
  )
}
