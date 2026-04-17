"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { symbol: "BTC", price: "$67,423", change: "+1.86%", isUp: true },
  { symbol: "ETH", price: "$3,842", change: "+2.37%", isUp: true },
  { symbol: "SPY", price: "$512.45", change: "+0.83%", isUp: true },
  { symbol: "EUR/USD", price: "1.0834", change: "-0.11%", isUp: false },
  { symbol: "SOL", price: "$142.56", change: "+6.19%", isUp: true },
  { symbol: "NVDA", price: "$892.34", change: "+2.70%", isUp: true },
  { symbol: "XAU/USD", price: "$2,341", change: "+0.45%", isUp: true },
  { symbol: "GBP/USD", price: "1.2654", change: "-0.23%", isUp: false },
]

export function MarketTicker() {
  // Duplicate for seamless loop
  const tickerItems = [...marketData, ...marketData]

  return (
    <div className="w-full bg-card border-b border-border overflow-hidden">
      <div className="animate-ticker flex whitespace-nowrap">
        {tickerItems.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-2 px-6 py-2.5 border-r border-border"
          >
            <span className="font-semibold text-foreground text-sm">{item.symbol}</span>
            <span className="text-muted-foreground text-sm">{item.price}</span>
            <span
              className={`flex items-center gap-0.5 text-sm font-medium ${
                item.isUp ? "text-primary" : "text-destructive"
              }`}
            >
              {item.isUp ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
