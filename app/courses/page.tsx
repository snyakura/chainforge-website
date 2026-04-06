import { Metadata } from "next"
import { CoursesGrid } from "@/components/courses/courses-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Courses | ChainForge Institute",
  description: "Explore our comprehensive forex and cryptocurrency trading courses for all skill levels.",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen pt-20">
      <CoursesGrid />
      <Footer />
    </div>
  )
}
