"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle2, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael R.",
    role: "Trading Student",
    profit: "+$24,500 profit",
    course: "Crypto Trading Masterclass",
    quote: "Sarah's crypto course completely changed my approach. I went from losing money to consistently profitable. Made back my course fee in the first week.",
    rating: 5,
    verified: true,
  },
  {
    id: 2,
    name: "Jennifer L.",
    role: "Trading Student",
    profit: "+$42,000/yr profit",
    course: "Options: The Wheel Strategy",
    quote: "The wheel strategy course paid for itself in one month. I'm now generating $3-4K/month in premium income. David explains everything so clearly.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "David K.",
    role: "Trading Student",
    profit: "+$156,000/yr profit",
    course: "Day Trading Stocks",
    quote: "Marcus's day trading system is legit. Took me 3 months to get consistent, but now I'm averaging $800/day. The momentum setups are gold.",
    rating: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Amanda S.",
    role: "Trading Student",
    profit: "+$85,000 profit",
    course: "Prediction Markets",
    quote: "Made $85K on the 2024 election using Sarah's prediction market strategies. The Kelly criterion sizing was a game changer.",
    rating: 5,
    verified: true,
  },
  {
    id: 5,
    name: "Robert T.",
    role: "Trading Student",
    profit: "+$8,200/mo profit",
    course: "Algorithmic Trading with Python",
    quote: "Alex's algo trading course is next level. Built my first profitable bot in 2 months. Now running 3 strategies 24/7. This is the future.",
    rating: 5,
    verified: true,
  },
  {
    id: 6,
    name: "Lisa M.",
    role: "Trading Student",
    profit: "+$31,000 profit",
    course: "Forex: Major Pairs Mastery",
    quote: "Elena's forex course taught me to think like an institution. Her EUR/USD analysis is incredibly accurate. Finally profitable after 2 years of losing.",
    rating: 5,
    verified: true,
  },
]

const featuredIn = ["Bloomberg", "Forbes", "CoinDesk", "TechCrunch"]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Success Stories</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Traders Who Changed Their Lives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real traders. See how our students went from beginners to profitable traders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                {/* Profit Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {testimonial.profit}
                  </Badge>
                  <Quote className="h-6 w-6 text-muted-foreground/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Course */}
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="text-primary font-medium">{testimonial.course}</span>
                  <span className="mx-2">·</span>
                  Course Taken
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                      <span className="text-sm font-medium">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">AS FEATURED IN</p>
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
            {featuredIn.map((name) => (
              <span key={name} className="text-xl lg:text-2xl font-bold text-muted-foreground/50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
