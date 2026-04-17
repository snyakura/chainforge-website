"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Bitcoin, LineChart, DollarSign, BarChart3, Target, Cpu, Shield, TrendingUp } from "lucide-react"

const markets = [
  {
    icon: Bitcoin,
    title: "Cryptocurrency",
    description: "Bitcoin, Ethereum, altcoins, DeFi, and blockchain trading strategies",
    courses: 24,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: LineChart,
    title: "Stock Trading",
    description: "Day trading, swing trading, and long-term stock market investing",
    courses: 18,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: DollarSign,
    title: "Forex",
    description: "Currency pairs, technical analysis, and forex market strategies",
    courses: 15,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: BarChart3,
    title: "Options Trading",
    description: "Calls, puts, spreads, and advanced options strategies",
    courses: 12,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Target,
    title: "Prediction Markets",
    description: "Polymarket, Kalshi, and event-based trading strategies",
    courses: 8,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: TrendingUp,
    title: "Technical Analysis",
    description: "Chart patterns, indicators, and price action mastery",
    courses: 20,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Position sizing, stop losses, and portfolio protection",
    courses: 10,
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Algorithmic Trading",
    description: "Trading bots, APIs, and automated strategy development",
    courses: 14,
    color: "from-indigo-500/20 to-purple-500/20",
  },
]

export function MarketsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Trading Markets</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Market</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From crypto to stocks, forex to prediction markets — master any market with expert guidance.
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {markets.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/courses?category=${market.title.toLowerCase().replace(' ', '-')}`}
                className="group block h-full"
              >
                <div className="relative h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${market.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <market.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {market.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {market.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">{market.courses}</span> courses
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
