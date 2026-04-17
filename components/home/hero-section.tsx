"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Star, CheckCircle2, TrendingUp } from "lucide-react"

const stats = [
  { value: "$47M+", label: "Student Profits" },
  { value: "73%", label: "Avg Win Rate" },
  { value: "15K+", label: "Active Traders" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">1,247 traders online now</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Learn to Trade from{" "}
              <span className="text-primary">Millionaire Mentors</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Learn to trade stocks, crypto, forex, and options from professional traders. 
              Join 50,000+ students building wealth through financial education.
            </p>

            {/* Mini stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="/courses">
                  Start Trading Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/mentors">
                  <Play className="mr-2 h-4 w-4" />
                  Meet Our Mentors
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 from 2,847 traders</span>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main dashboard card */}
            <div className="relative bg-card border border-border rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Live Portfolio</p>
                    <p className="text-xs text-muted-foreground">Demo Account</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">+24.7%</Badge>
              </div>

              {/* Balance */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <p className="text-3xl font-bold">$124,723.45</p>
                <p className="text-sm text-primary">+$24,723.45 all time</p>
              </div>

              {/* Chart placeholder */}
              <div className="h-32 mb-6 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-end justify-between px-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 bg-primary/40 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-bold">156</p>
                  <p className="text-xs text-muted-foreground">Trades</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-bold text-primary">73%</p>
                  <p className="text-xs text-muted-foreground">Win Rate</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary">
                  <p className="text-lg font-bold">2.4</p>
                  <p className="text-xs text-muted-foreground">Profit Factor</p>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">BTC Long +12.4%</p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">+$2,340 Profit</p>
                  <p className="text-xs text-muted-foreground">ETH Trade Closed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
