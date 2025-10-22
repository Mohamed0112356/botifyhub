export interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  popular: boolean
}

export interface Bot {
  id: string
  name: string
  description: string
  price: number
  category: string
  rating: number
  features: string[]
  image: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "30D free trial",
    description: "Then $39 monthly",
    features: [
      "1 Bot",
      "Email Support", 
      "Basic Analytics",
      "Community Access"
    ],
    buttonText: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro", 
    price: "$150",
    period: "/month",
    description: "For growing businesses",
    features: [
      "5 Ultra-Bots",
      "Priority Support", 
      "Advanced Analytics",
      "API Access",
      "Custom Templates"
    ],
    buttonText: "Choose Plan", 
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom", 
    description: "For large organizations",
    features: [
      "Unlimited Bots",
      "Dedicated Support",
      "Full Analytics", 
      "White-label Solution",
      "SLA Guarantee",
      "Custom Development"
    ],
    buttonText: "Get in Touch",
    popular: false
  }
]

export const BOT_CATEGORIES = [
  "Customer Service",
  "Marketing",
  "Sales",
  "HR & Recruitment",
  "IT Support",
  "E-commerce",
  "Analytics",
  "Social Media"
]

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Company", href: "/company" },
  { name: "Pricing", href: "/company/pricing" }
]

export const COMPANY_INFO = {
  name: "BotifyHub",
  email: "contact@botifyhub.com",
  phone: "+1 (555) 123-4567",
  address: "123 AI Street, Tech City, TC 12345",
  social: {
    twitter: "https://twitter.com/botifyhub",
    linkedin: "https://linkedin.com/company/botifyhub",
    github: "https://github.com/botifyhub"
  }
}
