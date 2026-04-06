"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Check,
  Shield,
  Lock,
  Zap,
  Smartphone,
  Wallet,
  CreditCard,
  Globe,
  ArrowRight,
  BadgeCheck
} from "lucide-react"
import { cn } from "@/lib/utils"

// Payment method data with realistic branding colors
const paymentMethods = [
  {
    id: "deriv",
    name: "Deriv",
    description: "Trade directly from Deriv",
    label: "Recommended",
    labelColor: "bg-emerald-500",
    icon: "/payments/deriv.svg",
    iconFallback: Globe,
    brandColor: "from-red-500/20 to-red-600/10",
    glowColor: "shadow-red-500/20",
    borderColor: "border-red-500",
    processingTime: "Instant",
    fees: "No fees",
  },
  {
    id: "ecocash",
    name: "EcoCash",
    description: "Mobile money payments",
    label: "Popular",
    labelColor: "bg-blue-500",
    icon: "/payments/ecocash.svg",
    iconFallback: Smartphone,
    brandColor: "from-green-500/20 to-green-600/10",
    glowColor: "shadow-green-500/20",
    borderColor: "border-green-500",
    processingTime: "Instant",
    fees: "1% fee",
  },
  {
    id: "innbucks",
    name: "InnBucks",
    description: "Quick mobile transfers",
    label: "Fast",
    labelColor: "bg-amber-500",
    icon: "/payments/innbucks.svg",
    iconFallback: Smartphone,
    brandColor: "from-orange-500/20 to-orange-600/10",
    glowColor: "shadow-orange-500/20",
    borderColor: "border-orange-500",
    processingTime: "Instant",
    fees: "1% fee",
  },
  {
    id: "crypto",
    name: "Crypto",
    description: "BTC, ETH, USDT accepted",
    label: "Secure",
    labelColor: "bg-amber-500",
    icon: "/payments/crypto.svg",
    iconFallback: Wallet,
    brandColor: "from-amber-500/20 to-yellow-600/10",
    glowColor: "shadow-amber-500/20",
    borderColor: "border-amber-500",
    processingTime: "2-30 min",
    fees: "Network fees",
    cryptoOptions: ["BTC", "ETH", "USDT"],
  },
  {
    id: "ozow",
    name: "Ozow",
    description: "Instant EFT for SA banks",
    label: "Local",
    labelColor: "bg-cyan-500",
    icon: "/payments/ozow.svg",
    iconFallback: Globe,
    brandColor: "from-cyan-500/20 to-cyan-600/10",
    glowColor: "shadow-cyan-500/20",
    borderColor: "border-cyan-500",
    processingTime: "Instant",
    fees: "No fees",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Buyer protection included",
    label: "Trusted",
    labelColor: "bg-blue-600",
    icon: "/payments/paypal.svg",
    iconFallback: Globe,
    brandColor: "from-blue-500/20 to-blue-600/10",
    glowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500",
    processingTime: "Instant",
    fees: "2.9% + $0.30",
  },
  {
    id: "card",
    name: "Visa / Mastercard",
    description: "Credit or debit cards",
    label: "Global",
    labelColor: "bg-indigo-500",
    icon: "/payments/cards.svg",
    iconFallback: CreditCard,
    brandColor: "from-indigo-500/20 to-purple-600/10",
    glowColor: "shadow-indigo-500/20",
    borderColor: "border-indigo-500",
    processingTime: "Instant",
    fees: "2.9%",
  },
]

// Sample course for order summary
const sampleCourse = {
  name: "Advanced Forex Mastery",
  price: 299,
  currency: "USD",
}

export function PaymentsSection() {
  const [selectedMethod, setSelectedMethod] = React.useState<string | null>(null)
  const [selectedCrypto, setSelectedCrypto] = React.useState("BTC")

  const selectedPayment = paymentMethods.find((m) => m.id === selectedMethod)
  const fees = selectedPayment?.fees === "No fees" ? 0 : 
    selectedPayment?.fees.includes("%") ? 
      (parseFloat(selectedPayment.fees) / 100) * sampleCourse.price : 
      0
  const total = sampleCourse.price + fees

  return (
    <section className="py-12 lg:py-20 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <Shield className="h-4 w-4 text-success" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Choose Payment Method
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 text-lg"
          >
            Select your preferred payment option to unlock your trading education
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Payment Methods Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {paymentMethods.map((method, index) => {
                const Icon = method.iconFallback
                const isSelected = selectedMethod === method.id

                return (
                  <motion.button
                    key={method.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMethod(method.id)}
                    className={cn(
                      "relative p-6 rounded-2xl text-left transition-all duration-300",
                      "bg-card border-2",
                      "hover:shadow-xl",
                      isSelected 
                        ? `${method.borderColor} shadow-2xl ${method.glowColor} dark:shadow-lg` 
                        : "border-border/50 hover:border-border"
                    )}
                  >
                    {/* Gradient overlay */}
                    <div 
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 bg-gradient-to-br",
                        method.brandColor,
                        isSelected && "opacity-100"
                      )}
                    />

                    {/* Label badge */}
                    <Badge 
                      className={cn(
                        "absolute top-4 right-4 text-white text-xs",
                        method.labelColor
                      )}
                    >
                      {method.label}
                    </Badge>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                          "bg-secondary/80 dark:bg-secondary",
                          isSelected && "bg-foreground text-background dark:bg-foreground dark:text-background scale-110"
                        )}>
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1 min-w-0 pt-1">
                          <h3 className="font-bold text-lg">{method.name}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {method.description}
                          </p>
                        </div>
                      </div>

                      {/* Processing info */}
                      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/50 text-xs">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Zap className="h-3.5 w-3.5 text-success" />
                          {method.processingTime}
                        </span>
                        <span className="text-muted-foreground">{method.fees}</span>
                      </div>
                    </div>

                    {/* Selected checkmark */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className={cn(
                            "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center",
                            "bg-success text-success-foreground shadow-lg"
                          )}
                        >
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )
              })}
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 border-t border-border/50"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BadgeCheck className="h-4 w-4" />
                <span>Verified Merchant</span>
              </div>
            </motion.div>
          </div>

          {/* Order Summary & Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-24 space-y-6"
            >
              {/* Order Summary Card */}
              <div className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{sampleCourse.name}</p>
                      <p className="text-sm text-muted-foreground">Full Course Access</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${sampleCourse.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Fee</span>
                      <span>{selectedPayment ? `$${fees.toFixed(2)}` : "—"}</span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-border/50 font-bold text-lg">
                    <span>Total</span>
                    <span>${selectedPayment ? total.toFixed(2) : sampleCourse.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Payment Form */}
              <AnimatePresence mode="wait">
                {selectedMethod && (
                  <motion.div
                    key={selectedMethod}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 bg-card border border-border rounded-2xl"
                  >
                    <h3 className="font-bold text-lg mb-4">
                      {selectedPayment?.name} Details
                    </h3>

                    {/* Crypto selector */}
                    {selectedMethod === "crypto" && (
                      <div className="mb-4">
                        <Label className="text-sm text-muted-foreground mb-2 block">
                          Select Cryptocurrency
                        </Label>
                        <div className="flex gap-2">
                          {["BTC", "ETH", "USDT"].map((crypto) => (
                            <button
                              key={crypto}
                              onClick={() => setSelectedCrypto(crypto)}
                              className={cn(
                                "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all",
                                selectedCrypto === crypto
                                  ? "bg-foreground text-background"
                                  : "bg-secondary hover:bg-secondary/80"
                              )}
                            >
                              {crypto}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Form fields based on payment method */}
                    <div className="space-y-4">
                      {selectedMethod === "ecocash" || selectedMethod === "innbucks" ? (
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            placeholder="+263 7X XXX XXXX" 
                            className="mt-1.5"
                          />
                        </div>
                      ) : selectedMethod === "card" ? (
                        <>
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input 
                              id="cardNumber" 
                              placeholder="4242 4242 4242 4242" 
                              className="mt-1.5"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor="expiry">Expiry</Label>
                              <Input 
                                id="expiry" 
                                placeholder="MM/YY" 
                                className="mt-1.5"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvc">CVC</Label>
                              <Input 
                                id="cvc" 
                                placeholder="123" 
                                className="mt-1.5"
                              />
                            </div>
                          </div>
                        </>
                      ) : selectedMethod === "paypal" ? (
                        <div>
                          <Label htmlFor="email">PayPal Email</Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="you@example.com" 
                            className="mt-1.5"
                          />
                        </div>
                      ) : selectedMethod === "crypto" ? (
                        <div className="p-4 bg-secondary/50 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            Send exactly
                          </p>
                          <p className="font-mono font-bold text-xl">
                            {selectedCrypto === "BTC" ? "0.00521" : 
                             selectedCrypto === "ETH" ? "0.0892" : "299.00"} {selectedCrypto}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Wallet address will be provided after confirmation
                          </p>
                        </div>
                      ) : selectedMethod === "deriv" ? (
                        <div>
                          <Label htmlFor="derivId">Deriv Account ID</Label>
                          <Input 
                            id="derivId" 
                            placeholder="CR1234567" 
                            className="mt-1.5"
                          />
                        </div>
                      ) : selectedMethod === "ozow" ? (
                        <div className="p-4 bg-secondary/50 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to your bank to complete the payment
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Confirm Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  className={cn(
                    "w-full h-14 rounded-xl font-semibold text-lg gap-2",
                    "bg-foreground text-background hover:bg-foreground/90",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  disabled={!selectedMethod}
                >
                  <Lock className="h-4 w-4" />
                  Confirm Payment
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                  <Shield className="h-3 w-3" />
                  Your payment is secured with bank-level encryption
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
