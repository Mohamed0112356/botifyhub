import Link from 'next/link'

export default function CompanyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20 pt-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Looking for a Bot to <span className="text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text">Handle Your Tasks?</span>
        </h1>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          Want to make your company smarter and save significant money? Need a bot that's always with you, 
          sending notifications for important life events and tasks?
        </p>
        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 p-8 rounded-2xl border border-cyan-100 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 font-semibold italic">
            "We come from the future to make your world better, smarter, and more productive. 
            Here you'll find the bot that will handle everything for you!"
          </p>
        </div>
      </div>

      {/* Bot Showcase */}
      <div className="grid lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-cyan-500/25">
            <div className="w-8 h-8 bg-white rounded-lg relative">
              <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-600 rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-600 rounded-full"></div>
              <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-cyan-600 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Customer Service Bot</h3>
          <p className="text-gray-600 text-center">
            Handles 24/7 customer inquiries with human-like responses and instant problem resolution
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-purple-500/25">
            <div className="w-8 h-8 bg-white rounded-lg relative">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-purple-600 rounded-full"></div>
              <div className="absolute bottom-1 left-1 right-1 h-0.5 bg-purple-600 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Social Media Manager</h3>
          <p className="text-gray-600 text-center">
            Automates content scheduling, engagement, and analytics across all platforms
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-green-500/25">
            <div className="w-8 h-8 bg-white rounded-lg relative">
              <div className="absolute top-2 left-2 w-1 h-1 bg-green-600 rounded-full"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-green-600 rounded-full"></div>
              <div className="absolute bottom-2 left-1 right-1 h-0.5 bg-green-600 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-3 left-1 right-1 h-0.5 bg-green-600 rounded-full transform -rotate-45"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Personal Assistant</h3>
          <p className="text-gray-600 text-center">
            Manages your schedule, reminders, and daily tasks with smart notifications
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 mb-16 border border-gray-200 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Create Your Bot in 3 Simple Steps</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Through our intuitive dashboard, create the perfect bot in minutes
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
              <span className="text-2xl text-white">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up</h3>
            <p className="text-gray-600">Create your account in minutes and start your automation journey</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25">
              <span className="text-2xl text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customize</h3>
            <p className="text-gray-600">Choose from templates or build from scratch with our easy tools</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
              <span className="text-2xl text-white">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy</h3>
            <p className="text-gray-600">Launch your bot and watch it handle tasks automatically</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Pricing Plans</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include our core features with scalable options.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
            <p className="text-gray-600 mb-6">30D free trial - Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Free</span>
              <span className="text-gray-600">/Then $39 monthly</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                1 Bot
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                Email Support
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                Basic Analytics
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                Community Access
              </li>
            </ul>
            <button className="w-full bg-cyan-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300">
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-xl relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For growing businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$150</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                5 Ultra-Bots
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Priority Support
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Advanced Analytics
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                API Access
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Custom Templates
              </li>
            </ul>
            <button className="w-full bg-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300">
              Choose Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Unlimited Bots
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Dedicated Support
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Full Analytics
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                White-label Solution
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                SLA Guarantee
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Custom Development
              </li>
            </ul>
            <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Custom Solution */}
        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-8 mt-8 text-center border border-cyan-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a custom solution?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer enterprise-grade solutions with custom pricing for large organizations with specific requirements.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Video Space */}
      <div className="bg-gray-100 rounded-3xl p-12 mb-16 text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
          <span className="text-3xl text-white">🎥</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">See BotifyHub in Action</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Watch how our bots transform businesses and simplify daily tasks
        </p>
        <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Video Player Space - Coming Soon</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Automate Your World?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses and individuals who are already saving time and money with BotifyHub
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/marketplace">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-8 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              Explore Marketplace
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-white text-gray-900 py-4 px-8 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}