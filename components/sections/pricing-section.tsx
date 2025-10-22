'use client'

import { PRICING_PLANS, type PricingPlan } from "../../lib/constants"
import { useState } from 'react'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Choose the plan that works best for your business. All plans include our core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-100 rounded-2xl p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-white text-slate-800 shadow-lg'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-white text-slate-800 shadow-lg'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Annual <span className="text-green-500 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan: PricingPlan, index: number) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'md:-translate-y-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-3xl p-8 backdrop-blur-sm border transition-all duration-500 ${
                  plan.popular
                    ? 'bg-white/80 border-white shadow-2xl shadow-cyan-500/20'
                    : 'bg-white/60 border-white/50 shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    plan.popular
                      ? 'from-cyan-500/10 to-purple-500/10'
                      : 'from-slate-500/5 to-slate-500/5'
                  }`}
                ></div>

                {/* Header */}
                <div className="relative text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {isAnnual && plan.name !== 'Enterprise' && plan.name !== 'Basic'
                        ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}`
                        : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-600 ml-2 text-lg">
                        {isAnnual ? '/year' : plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-slate-800 text-white hover:bg-slate-700 hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">{plan.buttonText}</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-slate-600">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </div>
  )
}