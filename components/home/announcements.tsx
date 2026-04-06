"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "New Advanced Crypto DeFi Course Launching",
    excerpt: "Master decentralized finance with our comprehensive new course covering yield farming, liquidity pools, and more.",
    category: "Crypto",
    date: "Apr 2, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "Live Trading Session This Weekend",
    excerpt: "Join our expert traders for a live forex trading session covering major currency pairs.",
    category: "Forex",
    date: "Apr 1, 2026",
    featured: false,
  },
  {
    id: 3,
    title: "Platform Update: New Analysis Tools",
    excerpt: "We've added powerful new charting tools and indicators to enhance your trading experience.",
    category: "Updates",
    date: "Mar 28, 2026",
    featured: false,
  },
]

export function Announcements() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
            >
              Latest Updates
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold mt-2"
            >
              News & Announcements
            </motion.h2>
          </div>
          <Button asChild variant="outline" className="rounded-full w-fit">
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Announcements Grid - Pinterest Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <Link href={`/news/${item.id}`} className="group block h-full">
                <div className={`h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300 ${index === 0 ? "flex flex-col" : ""}`}>
                  {/* Image Placeholder */}
                  <div className={`relative bg-secondary ${index === 0 ? "h-48 lg:flex-1 lg:min-h-[200px]" : "h-32"}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-foreground/10">
                        {item.category === "Crypto" ? "CR" : item.category === "Forex" ? "FX" : "UP"}
                      </div>
                    </div>
                    {item.featured && (
                      <Badge className="absolute top-3 left-3 bg-foreground text-background">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className={`font-semibold group-hover:text-accent transition-colors ${index === 0 ? "text-xl" : "text-lg"} line-clamp-2`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm text-muted-foreground mt-2 ${index === 0 ? "line-clamp-3" : "line-clamp-2"}`}>
                      {item.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 group-hover:text-accent transition-colors">
                      Read More
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
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
