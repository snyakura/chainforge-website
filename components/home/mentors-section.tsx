"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Users } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Alex Krieger",
    title: "Former Goldman Sachs Quant",
    bio: "Alex spent 12 years at Goldman Sachs developing algorithmic trading systems. His strategies have generated over $500M in profits. Now he teaches retail traders the institutional methods that actually work.",
    totalProfit: "$2.4M",
    winRate: "68%",
    experience: "15+ years",
    avgReturn: "8.2%/mo",
    students: "18,500",
    image: "/mentors/alex.jpg",
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Crypto & DeFi Specialist",
    bio: "Sarah was an early Bitcoin adopter in 2013 and has been trading crypto full-time since 2017. She specializes in DeFi protocols, yield farming, and on-chain analysis. Her calls have 10x'd multiple portfolios.",
    totalProfit: "$4.8M",
    winRate: "72%",
    experience: "10+ years",
    avgReturn: "15.3%/mo",
    students: "32,000",
    image: "/mentors/sarah.jpg",
  },
  {
    id: 3,
    name: "Marcus Williams",
    title: "Day Trading Champion",
    bio: "Marcus turned $5,000 into $1.2M in 3 years through day trading stocks. Featured in Benzinga and Warrior Trading. He focuses on momentum plays, gap strategies, and VWAP trading.",
    totalProfit: "$1.8M",
    winRate: "65%",
    experience: "8+ years",
    avgReturn: "12.1%/mo",
    students: "24,500",
    image: "/mentors/marcus.jpg",
  },
  {
    id: 4,
    name: "Elena Kowalski",
    title: "Forex & Macro Analyst",
    bio: "Elena worked at Deutsche Bank's FX desk before going independent. She combines fundamental macro analysis with technical trading to capture major currency moves. Her EUR/USD calls are legendary.",
    totalProfit: "$3.2M",
    winRate: "61%",
    experience: "12+ years",
    avgReturn: "6.8%/mo",
    students: "15,800",
    image: "/mentors/elena.jpg",
  },
]

export function MentorsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Expert Mentors</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Learn from Millionaire Traders</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our mentors have a combined trading experience of 50+ years and have generated over $100M in profits. 
            Verified track records, real results.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/mentors/${mentor.id}`} className="group block">
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                        <span className="text-xl font-bold">{mentor.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {mentor.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{mentor.title}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {mentor.bio}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="text-center p-2 rounded-lg bg-secondary">
                      <p className="text-sm font-bold text-primary">{mentor.totalProfit}</p>
                      <p className="text-xs text-muted-foreground">Total Profit</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-secondary">
                      <p className="text-sm font-bold">{mentor.winRate}</p>
                      <p className="text-xs text-muted-foreground">Win Rate</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-secondary">
                      <p className="text-sm font-bold">{mentor.experience}</p>
                      <p className="text-xs text-muted-foreground">{mentor.avgReturn} avg</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-secondary">
                      <p className="text-sm font-bold">{mentor.students}</p>
                      <p className="text-xs text-muted-foreground">students</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/mentors">
              Meet All Mentors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
