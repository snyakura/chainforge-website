"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Start your trading journey",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Access to free course previews",
      "Daily market analysis newsletter",
      "Community Discord access",
      "Basic trading tools",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Trader",
    description: "For serious individual traders",
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      "All courses included",
      "Live trading room access",
      "Real-time trade alerts",
      "Weekly mentor Q&A sessions",
      "Portfolio tracking tools",
      "Priority support",
    ],
    cta: "Start Trading",
    popular: true,
  },
  {
    name: "Elite",
    description: "For professional traders",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: [
      "Everything in Trader",
      "1-on-1 mentor sessions (monthly)",
      "Proprietary trading signals",
      "Advanced algo trading tools",
      "Private Discord channel",
      "Early access to new courses",
      "Tax optimization guides",
    ],
    cta: "Go Elite",
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false)

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">Membership Plans</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Invest in Your Trading Future</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your trading goals. All plans include access to our community and live trading sessions.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <Badge variant="secondary" className="ml-1 text-primary">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <div className={`h-full rounded-2xl border ${plan.popular ? 'border-primary' : 'border-border'} bg-card p-6`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Billed {isYearly ? 'yearly' : 'monthly'}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link href="/pricing">{plan.cta}</Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Need a Custom Solution?</h3>
              <p className="text-muted-foreground text-sm">
                For hedge funds, prop trading firms, and large teams. Get custom training programs, API access, and dedicated support.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/enterprise">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
