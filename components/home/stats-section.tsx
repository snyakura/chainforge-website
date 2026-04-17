"use client"

import { motion } from "framer-motion"
import { DollarSign, TrendingUp, Users, Award } from "lucide-react"

const stats = [
  {
    icon: DollarSign,
    value: "$47M+",
    label: "Student Profits Generated",
    description: "Combined profits from our trading community",
  },
  {
    icon: TrendingUp,
    value: "73%",
    label: "Average Win Rate",
    description: "Across all verified student trades",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Active Traders",
    description: "Learning and trading with us daily",
  },
  {
    icon: Award,
    value: "3.2x",
    label: "Avg Profit Factor",
    description: "Our mentors average performance",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
