'use client'

import { BOT_CATEGORIES } from "../../lib/constants"
import { useState } from 'react'

// Sample bots data - you can replace this with real data
const SAMPLE_BOTS = [
  {
    id: 1,
    name: 'Customer Support Pro',
    description: 'AI-powered customer service bot that handles inquiries 24/7',
    price: 99,
    category: 'Customer Service',
    rating: 4.9,
    features: ['24/7 Support', 'Multi-language', 'CRM Integration'],
    image: '🤖'
  },
  {
    id: 2,
    name: 'Marketing Genius',
    description: 'Create and optimize marketing campaigns automatically',
    price: 149,
    category: 'Marketing',
    rating: 4.8,
    features: ['Campaign Automation', 'Analytics', 'A/B Testing'],
    image: '🚀'
  },
  {
    id: 3,
    name: 'Sales Accelerator',
    description: 'Boost sales with intelligent lead scoring and follow-ups',
    price: 199,
    category: 'Sales',
    rating: 4.7,
    features: ['Lead Scoring', 'Auto Follow-ups', 'Pipeline Management'],
    image: '💰'
  },
  {
    id: 4,
    name: 'HR Assistant',
    description: 'Streamline recruitment and employee onboarding processes',
    price: 129,
    category: 'HR & Recruitment',
    rating: 4.6,
    features: ['CV Screening', 'Interview Scheduling', 'Onboarding'],
    image: '👥'
  },
  {
    id: 5,
    name: 'IT Helpdesk',
    description: 'Automate IT support tickets and common technical issues',
    price: 179,
    category: 'IT Support',
    rating: 4.9,
    features: ['Ticket Routing', 'Knowledge Base', 'Self-service'],
    image: '💻'
  },
  {
    id: 6,
    name: 'E-commerce Optimizer',
    description: 'Maximize conversions and customer experience for online stores',
    price: 169,
    category: 'E-commerce',
    rating: 4.8,
    features: ['Product Recommendations', 'Cart Recovery', 'Reviews'],
    image: '🛒'
  }
]

export default function BotsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredBot, setHoveredBot] = useState<number | null>(null)

  const filteredBots = selectedCategory === 'All' 
    ? SAMPLE_BOTS 
    : SAMPLE_BOTS.filter(bot => bot.category === selectedCategory)

  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Explore Our AI Bots
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover powerful AI solutions designed to automate and enhance your business processes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-slate-800 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-slate-50 hover:shadow-md'
            }`}
          >
            All Bots
          </button>
          {BOT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-50 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBots.map((bot) => (
            <div
              key={bot.id}
              className="relative group"
              onMouseEnter={() => setHoveredBot(bot.id)}
              onMouseLeave={() => setHoveredBot(null)}
            >
              <div className={`relative bg-white rounded-3xl p-6 shadow-xl border border-slate-100 transition-all duration-500 ${
                hoveredBot === bot.id ? 'scale-105 shadow-2xl' : 'hover:shadow-2xl'
              }`}>
                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 ${
                  hoveredBot === bot.id ? 'opacity-100' : ''
                }`}></div>

                {/* Bot Icon */}
                <div className="text-4xl mb-4">{bot.image}</div>

                {/* Bot Info */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800 pr-4">{bot.name}</h3>
                    <div className="flex items-center bg-slate-100 px-2 py-1 rounded-lg">
                      <span className="text-amber-500">★</span>
                      <span className="text-slate-700 text-sm font-semibold ml-1">{bot.rating}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">{bot.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {bot.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-2xl font-bold text-slate-800">${bot.price}</div>
                      <div className="text-slate-500 text-sm">per month</div>
                    </div>
                    <button className="group relative px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <span className="relative z-10">View Details</span>
                      <div className="absolute inset-0 bg-slate-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-slate-800 text-white text-xs font-semibold rounded-full">
                    {bot.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white border border-slate-200 rounded-2xl font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:shadow-xl">
            <span className="relative z-10">Load More Bots</span>
          </button>
        </div>
      </div>
    </div>
  )
}