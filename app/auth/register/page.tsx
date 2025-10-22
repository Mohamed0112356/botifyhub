'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic
    console.log('Register:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Bots Animation */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-20 animate-float">
          <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-cyan-300 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-35 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-1 bg-cyan-400 transform rotate-45"></div>
          <div className="absolute bottom-40 right-32 w-24 h-1 bg-purple-400 transform -rotate-45"></div>
          <div className="absolute top-60 right-40 w-20 h-1 bg-cyan-300"></div>
          <div className="absolute bottom-60 left-40 w-16 h-1 bg-purple-300 transform rotate-90"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className={`max-w-md w-full space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8 relative overflow-hidden">
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25 group hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
  {/* رأس الروبوت الكلاسيكي */}
  <div className="relative w-8 h-8">
    {/* الرأس */}
    <div className="w-8 h-8 bg-white rounded-md relative">
      {/* العينان */}
      <div className="absolute top-2 left-1 right-1 flex justify-between">
        <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
        <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
      </div>
      {/* الفم - خط مستقيم */}
      <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-slate-700 rounded-full"></div>
    </div>
    {/* الهوائيات الجانبية */}
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors duration-300"></div>
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors duration-300"></div>
  </div>
</div>
              <h2 className="text-3xl font-bold text-white">Create account</h2>
              <p className="mt-2 text-slate-400">Join the BotifyHub community</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-slate-600 rounded bg-slate-700/50"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-slate-300">
                  I agree to the{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Create account
              </button>

              <div className="text-center">
                <span className="text-slate-400">Already have an account? </span>
                <Link href="/auth/login" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}