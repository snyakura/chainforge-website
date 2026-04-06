"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { cn } from "@/lib/utils"

const newsArticles = [
  {
    id: 1,
    title: "New Advanced Crypto DeFi Course Launching Next Week",
    excerpt: "Master decentralized finance with our comprehensive new course covering yield farming, liquidity pools, smart contracts, and more. Early bird discounts available.",
    category: "Crypto",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    author: "Sarah Chen",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "Live Trading Session This Weekend",
    excerpt: "Join our expert traders for a live forex trading session covering major currency pairs and real-time market analysis.",
    category: "Forex",
    date: "Apr 1, 2026",
    readTime: "3 min read",
    author: "Michael Roberts",
    featured: false,
    size: "medium",
  },
  {
    id: 3,
    title: "Platform Update: New Analysis Tools Added",
    excerpt: "We&apos;ve added powerful new charting tools and technical indicators to enhance your trading experience.",
    category: "Updates",
    date: "Mar 28, 2026",
    readTime: "2 min read",
    author: "Tech Team",
    featured: false,
    size: "small",
  },
  {
    id: 4,
    title: "Bitcoin Halving: What It Means for Traders",
    excerpt: "A comprehensive guide to understanding Bitcoin halving events and how to position yourself for potential opportunities in the market.",
    category: "Crypto",
    date: "Mar 25, 2026",
    readTime: "8 min read",
    author: "David Kim",
    featured: true,
    size: "medium",
  },
  {
    id: 5,
    title: "Top 5 Forex Trading Mistakes to Avoid",
    excerpt: "Learn from common mistakes that beginners make in forex trading and how to avoid them for better results.",
    category: "Forex",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    author: "Emma Wilson",
    featured: false,
    size: "small",
  },
  {
    id: 6,
    title: "Student Success Story: From Beginner to Pro Trader",
    excerpt: "Read how one of our students went from complete beginner to consistently profitable trader in just 8 months.",
    category: "Community",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    author: "James Okonkwo",
    featured: false,
    size: "medium",
  },
  {
    id: 7,
    title: "Understanding Risk-Reward Ratios",
    excerpt: "Master the fundamentals of risk-reward ratios and learn how to apply them to improve your trading strategy.",
    category: "Education",
    date: "Mar 18, 2026",
    readTime: "5 min read",
    author: "Lisa Thompson",
    featured: false,
    size: "small",
  },
  {
    id: 8,
    title: "New Payment Methods: InnBucks & Ozow Now Available",
    excerpt: "We&apos;ve expanded our payment options to include InnBucks and Ozow for easier access to our courses.",
    category: "Updates",
    date: "Mar 15, 2026",
    readTime: "2 min read",
    author: "Admin Team",
    featured: false,
    size: "small",
  },
]

const categories = ["All", "Crypto", "Forex", "Updates", "Education", "Community"]

export function NewsFeed() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredArticles = newsArticles.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  )

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            News & Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Stay updated with the latest market insights, course launches, and platform updates
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 4) }}
              className="break-inside-avoid"
            >
              <Link href={`/news/${article.id}`} className="group block">
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div
                    className={cn(
                      "relative bg-secondary",
                      article.size === "large" && "h-56",
                      article.size === "medium" && "h-40",
                      article.size === "small" && "h-32"
                    )}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-foreground/10">
                        {article.category === "Crypto"
                          ? "CR"
                          : article.category === "Forex"
                          ? "FX"
                          : article.category === "Updates"
                          ? "UP"
                          : article.category === "Education"
                          ? "ED"
                          : "CM"}
                      </div>
                    </div>
                    {article.featured && (
                      <Badge className="absolute top-3 left-3 bg-foreground text-background">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3"
                    >
                      {article.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "font-semibold group-hover:text-accent transition-colors line-clamp-2",
                        article.size === "large" ? "text-xl" : "text-lg"
                      )}
                    >
                      {article.title}
                    </h3>

                    <p
                      className={cn(
                        "text-sm text-muted-foreground mt-2",
                        article.size === "large"
                          ? "line-clamp-4"
                          : article.size === "medium"
                          ? "line-clamp-3"
                          : "line-clamp-2"
                      )}
                    >
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <span className="text-sm font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                        Read
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
