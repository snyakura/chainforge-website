"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Clock, Users, Star, Search, Filter, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const allCourses = [
  {
    id: 1,
    title: "Forex Fundamentals Mastery",
    description: "Learn the core principles of forex trading from scratch. Understand currency pairs, market dynamics, and build a solid foundation.",
    category: "Forex",
    level: "Beginner",
    price: 199,
    duration: "8 weeks",
    students: 2340,
    rating: 4.9,
    lessons: 42,
    featured: true,
  },
  {
    id: 2,
    title: "Crypto Trading Strategies",
    description: "Advanced strategies for cryptocurrency market success. Learn to navigate volatility and maximize profits.",
    category: "Crypto",
    level: "Intermediate",
    price: 349,
    duration: "10 weeks",
    students: 1856,
    rating: 4.8,
    lessons: 56,
    featured: false,
  },
  {
    id: 3,
    title: "Technical Analysis Pro",
    description: "Master chart patterns, technical indicators, and price action analysis for both forex and crypto markets.",
    category: "Both",
    level: "Advanced",
    price: 449,
    duration: "12 weeks",
    students: 1245,
    rating: 4.9,
    lessons: 68,
    featured: true,
  },
  {
    id: 4,
    title: "Risk Management Essentials",
    description: "Protect your capital with proven risk management strategies. Essential knowledge for every trader.",
    category: "Both",
    level: "Beginner",
    price: 149,
    duration: "4 weeks",
    students: 3120,
    rating: 4.7,
    lessons: 24,
    featured: false,
  },
  {
    id: 5,
    title: "DeFi & Yield Farming",
    description: "Deep dive into decentralized finance, liquidity pools, and yield farming strategies.",
    category: "Crypto",
    level: "Advanced",
    price: 399,
    duration: "8 weeks",
    students: 892,
    rating: 4.8,
    lessons: 38,
    featured: false,
  },
  {
    id: 6,
    title: "Forex Price Action Trading",
    description: "Trade like the pros using pure price action. No indicators needed - just clean chart reading.",
    category: "Forex",
    level: "Intermediate",
    price: 299,
    duration: "6 weeks",
    students: 1567,
    rating: 4.9,
    lessons: 32,
    featured: true,
  },
  {
    id: 7,
    title: "Bitcoin Investment Fundamentals",
    description: "Understand Bitcoin from the ground up. Perfect for beginners entering the crypto space.",
    category: "Crypto",
    level: "Beginner",
    price: 179,
    duration: "5 weeks",
    students: 2890,
    rating: 4.6,
    lessons: 28,
    featured: false,
  },
  {
    id: 8,
    title: "Algorithmic Trading Basics",
    description: "Introduction to automated trading systems. Build your first trading bot.",
    category: "Both",
    level: "Advanced",
    price: 549,
    duration: "14 weeks",
    students: 654,
    rating: 4.8,
    lessons: 72,
    featured: false,
  },
]

const categories = ["All", "Forex", "Crypto", "Both"]
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

export function CoursesGrid() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showFilters, setShowFilters] = React.useState(false)

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesLevel && matchesSearch
  })

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
            Explore Our Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Choose from our comprehensive selection of trading courses designed for all skill levels
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden rounded-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className={cn(
            "flex flex-wrap gap-2",
            !showFilters && "hidden sm:flex"
          )}>
            <div className="flex flex-wrap gap-2">
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
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLevel(level)}
                  className="rounded-full"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
        </div>

        {/* Pinterest-style Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/courses/${course.id}`} className="group block h-full">
                  <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300">
                    {/* Course Image */}
                    <div className="relative h-44 bg-secondary overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-3xl font-bold text-foreground/30">
                            {course.category === "Forex" ? "FX" : course.category === "Crypto" ? "CR" : "TC"}
                          </span>
                        </div>
                      </div>
                      
                      {/* Badges */}
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

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {course.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-chart-4 text-chart-4" />
                          {course.rating}
                        </div>
                      </div>

                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {course.students.toLocaleString()}
                        </span>
                        <span>{course.lessons} lessons</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-2xl font-bold">${course.price}</span>
                        <span className="text-sm font-medium group-hover:text-accent transition-colors flex items-center gap-1">
                          Enroll Now
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedLevel("All Levels")
                setSearchQuery("")
              }}
              className="rounded-full"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
