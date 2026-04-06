"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Shield, Users } from "lucide-react"

const stats = [
  { label: "Students Enrolled", value: "12K+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
  { label: "Secure Platform", value: "100%", icon: Shield },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-sm font-medium">New courses available</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
              Forge Your{" "}
              <span className="relative">
                Financial
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Future
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Master the art of Forex and Cryptocurrency trading with expert-led courses, 
              live market analysis, and a community of successful traders.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full text-base px-8">
                <Link href="/courses">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8">
                <Link href="/markets">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-2xl lg:text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Content - Card Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Card */}
              <div className="col-span-2 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Portfolio Value</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success font-medium">
                    +24.5%
                  </span>
                </div>
                <div className="text-3xl font-bold">$47,832.50</div>
                <div className="mt-4 h-24 flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-foreground/10 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* BTC Card */}
              <div className="bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7931A]/10 flex items-center justify-center">
                    <span className="text-[#F7931A] font-bold text-sm">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Bitcoin</div>
                    <div className="text-xs text-muted-foreground">BTC</div>
                  </div>
                </div>
                <div className="text-xl font-bold">$67,432</div>
                <div className="text-xs text-success mt-1">+2.4%</div>
              </div>

              {/* EUR/USD Card */}
              <div className="bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <span className="font-bold text-sm">€$</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">EUR/USD</div>
                    <div className="text-xs text-muted-foreground">Forex</div>
                  </div>
                </div>
                <div className="text-xl font-bold">1.0842</div>
                <div className="text-xs text-destructive mt-1">-0.12%</div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-medium">Live Trading</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
