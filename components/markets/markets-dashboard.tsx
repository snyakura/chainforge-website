"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const forexPairs = [
  { symbol: "EUR/USD", price: 1.0842, change: -0.12, high: 1.0865, low: 1.0821, volume: "2.4B" },
  { symbol: "GBP/USD", price: 1.2654, change: 0.08, high: 1.2678, low: 1.2612, volume: "1.8B" },
  { symbol: "USD/JPY", price: 154.32, change: 0.34, high: 154.56, low: 153.89, volume: "2.1B" },
  { symbol: "AUD/USD", price: 0.6534, change: -0.21, high: 0.6567, low: 0.6512, volume: "890M" },
  { symbol: "USD/CHF", price: 0.9012, change: 0.15, high: 0.9034, low: 0.8987, volume: "650M" },
  { symbol: "USD/CAD", price: 1.3456, change: -0.08, high: 1.3489, low: 1.3421, volume: "720M" },
]

const cryptoPairs = [
  { symbol: "BTC/USD", price: 67432.50, change: 2.45, high: 68234, low: 66123, volume: "28.5B" },
  { symbol: "ETH/USD", price: 3521.80, change: 1.82, high: 3589, low: 3445, volume: "15.2B" },
  { symbol: "XRP/USD", price: 0.5234, change: -1.24, high: 0.5412, low: 0.5189, volume: "1.8B" },
  { symbol: "SOL/USD", price: 178.45, change: 5.67, high: 182.34, low: 168.90, volume: "4.2B" },
  { symbol: "ADA/USD", price: 0.4523, change: -0.56, high: 0.4612, low: 0.4489, volume: "890M" },
  { symbol: "DOGE/USD", price: 0.1234, change: 3.21, high: 0.1278, low: 0.1189, volume: "1.2B" },
]

const chartData = [
  { time: "09:00", value: 67100 },
  { time: "10:00", value: 67250 },
  { time: "11:00", value: 67180 },
  { time: "12:00", value: 67420 },
  { time: "13:00", value: 67380 },
  { time: "14:00", value: 67520 },
  { time: "15:00", value: 67432 },
]

export function MarketsDashboard() {
  const [activeTab, setActiveTab] = React.useState<"forex" | "crypto">("crypto")
  const [selectedPair, setSelectedPair] = React.useState("BTC/USD")
  const [lastUpdate, setLastUpdate] = React.useState(new Date())

  const markets = activeTab === "forex" ? forexPairs : cryptoPairs
  const selectedMarket = markets.find((m) => m.symbol === selectedPair) || markets[0]

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const maxValue = Math.max(...chartData.map((d) => d.value))
  const minValue = Math.min(...chartData.map((d) => d.value))
  const range = maxValue - minValue

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Live Markets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mt-2"
            >
              Real-time forex and cryptocurrency market data
            </motion.p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-8"
        >
          <Button
            variant={activeTab === "crypto" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("crypto")
              setSelectedPair("BTC/USD")
            }}
            className="rounded-full"
          >
            Cryptocurrency
          </Button>
          <Button
            variant={activeTab === "forex" ? "default" : "outline"}
            onClick={() => {
              setActiveTab("forex")
              setSelectedPair("EUR/USD")
            }}
            className="rounded-full"
          >
            Forex
          </Button>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-card border border-border rounded-2xl p-6"
          >
            {/* Chart Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{selectedMarket.symbol}</h2>
                  <Badge
                    variant="secondary"
                    className={cn(
                      selectedMarket.change >= 0
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                    )}
                  >
                    {selectedMarket.change >= 0 ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {selectedMarket.change >= 0 ? "+" : ""}
                    {selectedMarket.change}%
                  </Badge>
                </div>
                <div className="text-4xl font-bold mt-2">
                  {activeTab === "crypto" ? "$" : ""}
                  {selectedMarket.price.toLocaleString(undefined, {
                    minimumFractionDigits: activeTab === "forex" ? 4 : 2,
                    maximumFractionDigits: activeTab === "forex" ? 4 : 2,
                  })}
                </div>
              </div>
              <div className="text-right text-sm">
                <div className="text-muted-foreground">24h Volume</div>
                <div className="font-semibold">{selectedMarket.volume}</div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-64 relative">
              <svg className="w-full h-full" preserveAspectRatio="none">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((percent) => (
                  <line
                    key={percent}
                    x1="0"
                    y1={`${percent}%`}
                    x2="100%"
                    y2={`${percent}%`}
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeDasharray="4 4"
                  />
                ))}
                
                {/* Area */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`
                    M 0 ${((maxValue - chartData[0].value) / range) * 100}%
                    ${chartData.map((d, i) => {
                      const x = (i / (chartData.length - 1)) * 100
                      const y = ((maxValue - d.value) / range) * 100
                      return `L ${x}% ${y}%`
                    }).join(" ")}
                    L 100% 100%
                    L 0 100%
                    Z
                  `}
                  fill="url(#chartGradient)"
                  className={selectedMarket.change >= 0 ? "text-success" : "text-destructive"}
                />
                
                {/* Line */}
                <path
                  d={`
                    M 0 ${((maxValue - chartData[0].value) / range) * 100}%
                    ${chartData.map((d, i) => {
                      const x = (i / (chartData.length - 1)) * 100
                      const y = ((maxValue - d.value) / range) * 100
                      return `L ${x}% ${y}%`
                    }).join(" ")}
                  `}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={selectedMarket.change >= 0 ? "text-success" : "text-destructive"}
                />
              </svg>

              {/* Time Labels */}
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                {chartData.map((d) => (
                  <span key={d.time}>{d.time}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div>
                <div className="text-xs text-muted-foreground mb-1">24h High</div>
                <div className="font-semibold text-success">
                  {activeTab === "crypto" ? "$" : ""}
                  {selectedMarket.high.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">24h Low</div>
                <div className="font-semibold text-destructive">
                  {activeTab === "crypto" ? "$" : ""}
                  {selectedMarket.low.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">24h Change</div>
                <div className={cn(
                  "font-semibold",
                  selectedMarket.change >= 0 ? "text-success" : "text-destructive"
                )}>
                  {selectedMarket.change >= 0 ? "+" : ""}
                  {selectedMarket.change}%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold">
                {activeTab === "forex" ? "Forex Pairs" : "Crypto Assets"}
              </h3>
            </div>
            <div className="divide-y divide-border">
              {markets.map((market) => (
                <button
                  key={market.symbol}
                  onClick={() => setSelectedPair(market.symbol)}
                  className={cn(
                    "w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left",
                    selectedPair === market.symbol && "bg-secondary"
                  )}
                >
                  <div>
                    <div className="font-semibold">{market.symbol}</div>
                    <div className="text-sm text-muted-foreground">
                      Vol: {market.volume}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      {activeTab === "crypto" ? "$" : ""}
                      {market.price.toLocaleString(undefined, {
                        minimumFractionDigits: activeTab === "forex" ? 4 : 2,
                        maximumFractionDigits: activeTab === "forex" ? 4 : 2,
                      })}
                    </div>
                    <div
                      className={cn(
                        "text-sm flex items-center justify-end gap-1",
                        market.change >= 0 ? "text-success" : "text-destructive"
                      )}
                    >
                      {market.change >= 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {market.change >= 0 ? "+" : ""}
                      {market.change}%
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Market Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
        >
          {[
            { label: "Market Cap", value: "$2.54T", change: "+1.2%" },
            { label: "24h Volume", value: "$98.5B", change: "+5.8%" },
            { label: "BTC Dominance", value: "52.4%", change: "-0.3%" },
            { label: "Active Pairs", value: "1,245", change: "+12" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-4"
            >
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-2xl font-bold mt-1">{stat.value}</div>
              <div className={cn(
                "text-sm mt-1",
                stat.change.startsWith("+") ? "text-success" : stat.change.startsWith("-") ? "text-destructive" : "text-muted-foreground"
              )}>
                {stat.change}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
