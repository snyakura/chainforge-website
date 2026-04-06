"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Full-time Trader",
    content: "ChainForge Institute transformed my trading career. The structured approach to forex trading helped me achieve consistent profits within 6 months.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Crypto Investor",
    content: "The crypto trading strategies I learned here are invaluable. The instructors really know their stuff and the community support is amazing.",
    rating: 5,
    avatar: "SW",
  },
  {
    id: 3,
    name: "David Okonkwo",
    role: "Part-time Trader",
    content: "Best investment I've made in my education. The risk management course alone saved me from potential losses worth 10x the course fee.",
    rating: 5,
    avatar: "DO",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Finance Professional",
    content: "As someone with a finance background, I was impressed by the depth of content. ChainForge goes beyond basics to truly advanced strategies.",
    rating: 5,
    avatar: "ET",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
          >
            Student Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mt-2"
          >
            Trusted by Thousands of Traders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4"
          >
            Join our community of successful traders who have transformed their financial futures
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-chart-4 text-chart-4" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-muted-foreground/20 mb-2" />

              <p className="text-sm text-muted-foreground leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
