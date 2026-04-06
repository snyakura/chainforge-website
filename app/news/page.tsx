import { Metadata } from "next"
import { NewsFeed } from "@/components/news/news-feed"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "News & Announcements | ChainForge Institute",
  description: "Stay updated with the latest news, market insights, and announcements from ChainForge Institute.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-20">
      <NewsFeed />
      <Footer />
    </div>
  )
}
