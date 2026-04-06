import { Metadata } from "next"
import { MarketsDashboard } from "@/components/markets/markets-dashboard"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Live Markets | ChainForge Institute",
  description: "Track live forex and cryptocurrency market data with real-time prices and charts.",
}

export default function MarketsPage() {
  return (
    <div className="min-h-screen pt-20">
      <MarketsDashboard />
      <Footer />
    </div>
  )
}
