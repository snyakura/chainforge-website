"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

const marketData = [
  { symbol: "BTC/USD", price: "67,432.50", change: "+2.45%", isPositive: true },
  { symbol: "ETH/USD", price: "3,521.80", change: "+1.82%", isPositive: true },
  { symbol: "EUR/USD", price: "1.0842", change: "-0.12%", isPositive: false },
  { symbol: "GBP/USD", price: "1.2654", change: "+0.08%", isPositive: true },
  { symbol: "XRP/USD", price: "0.5234", change: "-1.24%", isPositive: false },
  { symbol: "USD/JPY", price: "154.32", change: "+0.34%", isPositive: true },
  { symbol: "SOL/USD", price: "178.45", change: "+5.67%", isPositive: true },
  { symbol: "AUD/USD", price: "0.6534", change: "-0.21%", isPositive: false },
]

export function MarketTicker() {
  return (
    <section className="border-y border-border bg-secondary/50 overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={{ x: [0, -50 * marketData.length * 16] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 py-4"
        >
          {[...marketData, ...marketData, ...marketData].map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="flex items-center gap-4 px-4 shrink-0"
            >
              <span className="font-semibold text-sm">{item.symbol}</span>
              <span className="text-sm text-muted-foreground">${item.price}</span>
              <span
                className={cn(
                  "flex items-center gap-1 text-sm font-medium",
                  item.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {item.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
