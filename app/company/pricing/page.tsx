import { PRICING_PLANS, type PricingPlan } from "../../../lib/constants"

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include our core features with scalable options.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {PRICING_PLANS.map((plan: PricingPlan, index: number) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "border-indigo-500 bg-white shadow-xl"
                : "border-gray-200 bg-white shadow-lg"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a custom solution?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We offer enterprise-grade solutions with custom pricing for large organizations with specific requirements.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Contact Sales
        </button>
      </div>
    </div>
  )
}
