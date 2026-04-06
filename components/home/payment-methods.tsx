"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CreditCard, Wallet, Smartphone, Globe } from "lucide-react"

const paymentMethods = [
  { name: "Deriv", icon: Globe, category: "Trading Platform" },
  { name: "EcoCash", icon: Smartphone, category: "Mobile Money" },
  { name: "InnBucks", icon: Smartphone, category: "Mobile Money" },
  { name: "Bitcoin", icon: Wallet, category: "Cryptocurrency" },
  { name: "Ethereum", icon: Wallet, category: "Cryptocurrency" },
  { name: "USDT", icon: Wallet, category: "Cryptocurrency" },
  { name: "Ozow", icon: Globe, category: "Bank Transfer" },
  { name: "PayPal", icon: Globe, category: "Digital Wallet" },
  { name: "Visa", icon: CreditCard, category: "Credit Card" },
  { name: "Mastercard", icon: CreditCard, category: "Credit Card" },
]

export function PaymentMethods() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-background/60 uppercase tracking-wider"
          >
            Flexible Payments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold mt-2"
          >
            Multiple Payment Options
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-background/60 mt-4"
          >
            Pay for your courses using your preferred payment method
          </motion.p>
        </div>

        {/* Payment Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-xl p-4 text-center hover:bg-background/20 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-background/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-semibold text-sm">{method.name}</div>
                <div className="text-xs text-background/50 mt-1">{method.category}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
