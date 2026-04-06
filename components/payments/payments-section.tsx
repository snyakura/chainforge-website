"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  CreditCard, 
  Wallet, 
  Smartphone, 
  Globe,
  Check,
  Shield,
  Clock,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

const paymentCategories = [
  {
    name: "Trading Platforms",
    methods: [
      {
        id: "deriv",
        name: "Deriv",
        description: "Trade directly from your Deriv account",
        icon: Globe,
        popular: true,
        processingTime: "Instant",
        fees: "No fees",
      },
    ],
  },
  {
    name: "Mobile Money",
    methods: [
      {
        id: "ecocash",
        name: "EcoCash",
        description: "Pay using your EcoCash mobile wallet",
        icon: Smartphone,
        popular: true,
        processingTime: "Instant",
        fees: "1% fee",
      },
      {
        id: "innbucks",
        name: "InnBucks",
        description: "Convenient mobile payments with InnBucks",
        icon: Smartphone,
        popular: false,
        processingTime: "Instant",
        fees: "1% fee",
      },
    ],
  },
  {
    name: "Cryptocurrency",
    methods: [
      {
        id: "btc",
        name: "Bitcoin",
        description: "Pay with BTC - the original cryptocurrency",
        icon: Wallet,
        popular: true,
        processingTime: "10-30 min",
        fees: "Network fees",
      },
      {
        id: "eth",
        name: "Ethereum",
        description: "Pay with ETH for fast transactions",
        icon: Wallet,
        popular: false,
        processingTime: "2-5 min",
        fees: "Gas fees",
      },
      {
        id: "usdt",
        name: "USDT",
        description: "Stable payments with Tether",
        icon: Wallet,
        popular: true,
        processingTime: "2-10 min",
        fees: "Network fees",
      },
    ],
  },
  {
    name: "Bank Transfers",
    methods: [
      {
        id: "ozow",
        name: "Ozow",
        description: "Instant EFT payments for South African banks",
        icon: Globe,
        popular: false,
        processingTime: "Instant",
        fees: "No fees",
      },
    ],
  },
  {
    name: "Digital Wallets",
    methods: [
      {
        id: "paypal",
        name: "PayPal",
        description: "Secure payments with PayPal protection",
        icon: Globe,
        popular: true,
        processingTime: "Instant",
        fees: "2.9% + $0.30",
      },
    ],
  },
  {
    name: "Credit & Debit Cards",
    methods: [
      {
        id: "visa",
        name: "Visa",
        description: "Pay with your Visa card",
        icon: CreditCard,
        popular: true,
        processingTime: "Instant",
        fees: "2.9%",
      },
      {
        id: "mastercard",
        name: "Mastercard",
        description: "Pay with your Mastercard",
        icon: CreditCard,
        popular: false,
        processingTime: "Instant",
        fees: "2.9%",
      },
    ],
  },
]

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "All transactions are encrypted and protected",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Get course access immediately after payment",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Payment support available around the clock",
  },
]

export function PaymentsSection() {
  const [selectedMethod, setSelectedMethod] = React.useState<string | null>(null)

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
            Payment Methods
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Choose your preferred payment method to get started with your trading education
          </motion.p>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Payment Methods Grid */}
        <div className="space-y-8">
          {paymentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.methods.map((method) => {
                  const Icon = method.icon
                  const isSelected = selectedMethod === method.id

                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={cn(
                        "relative p-5 bg-card border rounded-2xl text-left transition-all hover:shadow-lg",
                        isSelected 
                          ? "border-foreground ring-2 ring-foreground/20" 
                          : "border-border hover:border-foreground/30"
                      )}
                    >
                      {method.popular && (
                        <Badge className="absolute top-3 right-3 bg-foreground text-background">
                          Popular
                        </Badge>
                      )}

                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                          isSelected ? "bg-foreground text-background" : "bg-secondary"
                        )}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg">{method.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {method.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {method.processingTime}
                        </span>
                        <span>{method.fees}</span>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center"
                        >
                          <Check className="h-4 w-4" />
                        </motion.div>
                      )}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Payment CTA */}
        {selectedMethod && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-card border border-border rounded-2xl"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg">Ready to continue?</h3>
                <p className="text-muted-foreground">
                  You&apos;ve selected{" "}
                  <span className="font-medium text-foreground">
                    {paymentCategories
                      .flatMap((c) => c.methods)
                      .find((m) => m.id === selectedMethod)?.name}
                  </span>{" "}
                  as your payment method
                </p>
              </div>
              <Button size="lg" className="rounded-full">
                Continue to Checkout
              </Button>
            </div>
          </motion.div>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            All payments are processed securely. For payment-related queries, contact{" "}
            <a href="mailto:payments@chainforge.institute" className="text-foreground hover:underline">
              payments@chainforge.institute
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
