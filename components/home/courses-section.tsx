"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Star, TrendingUp } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Crypto Trading Masterclass: From Zero to Hero",
    description: "The complete guide to trading Bitcoin, Ethereum, and altcoins. Learn technical analysis, on-chain metrics, DeFi strategies, and risk management.",
    category: "Cryptocurrency",
    level: "Beginner",
    duration: "32 hours",
    winRate: "72%",
    avgReturn: "+45% avg",
    trades: "2,400+",
    profitFactor: "3.2",
    instructor: "Sarah Chen",
    price: 297,
    originalPrice: 597,
    image: "/courses/crypto.jpg",
  },
  {
    id: 2,
    title: "Day Trading Stocks: The Complete System",
    description: "Learn my exact day trading system that turned $5K into $1.2M. Momentum plays, gap strategies, and VWAP trading with live trade examples.",
    category: "Stock Trading",
    level: "Intermediate",
    duration: "28 hours",
    winRate: "65%",
    avgReturn: "+$1,200/day",
    trades: "5,800+",
    profitFactor: "2.8",
    instructor: "Marcus Williams",
    price: 397,
    originalPrice: 797,
    image: "/courses/stocks.jpg",
  },
  {
    id: 3,
    title: "Options Trading: The Wheel Strategy",
    description: "Generate consistent monthly income selling options premium. Learn the wheel strategy, credit spreads, and how I make $50K+ per month.",
    category: "Options Trading",
    level: "Intermediate",
    duration: "24 hours",
    winRate: "78%",
    avgReturn: "+5.4%/mo",
    trades: "3,200+",
    profitFactor: "4.1",
    instructor: "David Park",
    price: 349,
    originalPrice: 699,
    image: "/courses/options.jpg",
  },
  {
    id: 4,
    title: "Algorithmic Trading with Python",
    description: "Build automated trading systems like a Goldman Sachs quant. Python, backtesting, machine learning, and live deployment.",
    category: "Algorithmic Trading",
    level: "Advanced",
    duration: "38 hours",
    winRate: "68%",
    avgReturn: "+8.2%/mo",
    trades: "12,000+",
    profitFactor: "3.5",
    instructor: "Alex Krieger",
    price: 497,
    originalPrice: 997,
    image: "/courses/algo.jpg",
  },
  {
    id: 5,
    title: "Technical Analysis: Complete Price Action",
    description: "Master chart reading, candlestick patterns, support/resistance, and price action trading. Works for stocks, crypto, and forex.",
    category: "Technical Analysis",
    level: "Beginner",
    duration: "22 hours",
    winRate: "65%",
    avgReturn: "+12% on setups",
    trades: "5,800+",
    profitFactor: "2.8",
    instructor: "Marcus Williams",
    price: 199,
    originalPrice: 399,
    image: "/courses/ta.jpg",
  },
]

export function CoursesSection() {
  return (
    <section className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Top Rated Courses</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Master the Markets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn proven strategies from traders who have generated millions in profits. 
            Each course includes real trade examples and track records.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/courses/${course.id}`} className="group block h-full">
                <div className="h-full rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="h-16 w-16 text-primary/30" />
                    </div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {course.winRate} Win Rate
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur">
                        {course.level}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 backdrop-blur">
                        <Clock className="h-3 w-3 mr-1" />
                        {course.duration}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg bg-secondary/50">
                      <div className="text-center">
                        <p className="text-sm font-semibold text-primary">{course.avgReturn}</p>
                        <p className="text-xs text-muted-foreground">Avg Return</p>
                      </div>
                      <div className="text-center border-x border-border">
                        <p className="text-sm font-semibold">{course.trades}</p>
                        <p className="text-xs text-muted-foreground">Trades</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">{course.profitFactor}</p>
                        <p className="text-xs text-muted-foreground">Profit Factor</p>
                      </div>
                    </div>

                    {/* Instructor & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs font-medium">{course.instructor.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{course.instructor}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">${course.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">${course.originalPrice}</span>
                      </div>
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
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
