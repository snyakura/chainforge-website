"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const courses = [
  {
    id: 1,
    title: "Forex Fundamentals Mastery",
    description: "Learn the core principles of forex trading from scratch",
    category: "Forex",
    level: "Beginner",
    price: 199,
    duration: "8 weeks",
    students: 2340,
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    title: "Crypto Trading Strategies",
    description: "Advanced strategies for cryptocurrency market success",
    category: "Crypto",
    level: "Intermediate",
    price: 349,
    duration: "10 weeks",
    students: 1856,
    rating: 4.8,
    featured: false,
  },
  {
    id: 3,
    title: "Technical Analysis Pro",
    description: "Master chart patterns and technical indicators",
    category: "Both",
    level: "Advanced",
    price: 449,
    duration: "12 weeks",
    students: 1245,
    rating: 4.9,
    featured: true,
  },
  {
    id: 4,
    title: "Risk Management Essentials",
    description: "Protect your capital with proven risk strategies",
    category: "Both",
    level: "Beginner",
    price: 149,
    duration: "4 weeks",
    students: 3120,
    rating: 4.7,
    featured: false,
  },
]

export function FeaturedCourses() {
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
              Featured Courses
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold mt-2"
            >
              Start Your Trading Journey
            </motion.h2>
          </div>
          <Button asChild variant="outline" className="rounded-full w-fit">
            <Link href="/courses">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/courses/${course.id}`} className="group block h-full">
                <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300">
                  {/* Course Image Placeholder */}
                  <div className="relative h-40 bg-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-foreground/30">
                          {course.category === "Forex" ? "FX" : course.category === "Crypto" ? "CR" : "TC"}
                        </span>
                      </div>
                    </div>
                    {course.featured && (
                      <Badge className="absolute top-3 left-3 bg-foreground text-background">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      variant="secondary"
                      className={cn(
                        "absolute top-3 right-3",
                        course.level === "Beginner" && "bg-success/10 text-success border-success/20",
                        course.level === "Intermediate" && "bg-chart-4/10 text-chart-4 border-chart-4/20",
                        course.level === "Advanced" && "bg-destructive/10 text-destructive border-destructive/20"
                      )}
                    >
                      {course.level}
                    </Badge>
                  </div>

                  {/* Course Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {course.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-chart-4 text-chart-4" />
                        {course.rating}
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-xl font-bold">${course.price}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1">
                        Learn More
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </span>
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
