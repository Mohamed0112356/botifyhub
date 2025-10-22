// app/features/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  Zap, 
  Workflow, 
  BarChart3, 
  MessageSquare, 
  Users, 
  Shield, 
  Rocket,
  Play,
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Brain,
  Target,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('dashboard');

  const features = {
    dashboard: {
      title: "Intuitive Dashboard",
      description: "Build professional bots with our drag-and-drop interface. No coding required.",
      image: "🎛️",
      details: [
        "Visual bot builder with drag & drop",
        "Pre-built templates for all industries",
        "Real-time testing and preview",
        "One-click deployment"
      ]
    },
    automation: {
      title: "Powerful Automation",
      description: "Automate complex workflows with intelligent decision trees and AI logic.",
      image: "⚡",
      details: [
        "AI-powered decision making",
        "Multi-step workflow automation",
        "Conditional logic and triggers",
        "API integrations"
      ]
    },
    analytics: {
      title: "Advanced Analytics",
      description: "Track performance and optimize your bots with detailed insights and reports.",
      image: "📊",
      details: [
        "Real-time performance metrics",
        "User behavior analysis",
        "Conversion tracking",
        "Custom reporting"
      ]
    },
    personal: {
      title: "Personal Bots",
      description: "Create bots that understand your daily routine and make life easier.",
      image: "👤",
      details: [
        "Personal assistant automation",
        "Smart notifications & reminders",
        "Habit tracking & optimization",
        "Lifestyle management"
      ]
    },
    business: {
      title: "Business Solutions",
      description: "Transform your company operations with enterprise-grade automation.",
      image: "🏢",
      details: [
        "Customer service automation",
        "Sales & marketing bots",
        "HR and recruitment automation",
        "Process optimization"
      ]
    },
    creator: {
      title: "Creator Tools",
      description: "Scale your content creation with intelligent automation and scheduling.",
      image: "🎨",
      details: [
        "Content scheduling & publishing",
        "Social media management",
        "Audience engagement automation",
        "Performance analytics"
      ]
    }
  };

  const useCases = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Businesses",
      description: "Automate customer support and sales processes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Enterprises",
      description: "Scale operations with enterprise automation",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Content Creators",
      description: "Manage multiple platforms effortlessly",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Individuals",
      description: "Simplify daily tasks and routines",
      color: "from-orange-500 to-red-500"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Describe Your Vision",
      description: "Tell us what you want to achieve - we'll handle the technical complexity",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Customize & Build",
      description: "Use our intuitive tools to create your perfect bot in minutes",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Deploy & Scale",
      description: "Launch your bot and watch it transform your workflow",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-2xl px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">No-Code AI Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Build <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">AI Bots</span>
            <br />
            Like a Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your ideas into powerful AI assistants. No technical skills needed - just your creativity and our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
                <Rocket className="w-5 h-5" />
                Start Building Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Visual Dashboard Showcase */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-blue-200 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Visual Bot Builder
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our drag-and-drop interface makes bot creation accessible to everyone. 
                Build complex workflows visually, without writing a single line of code.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Bot className="w-6 h-6" />, text: "Drag & Drop" },
                  { icon: <Workflow className="w-6 h-6" />, text: "Visual Workflows" },
                  { icon: <Zap className="w-6 h-6" />, text: "AI Templates" },
                  { icon: <Cloud className="w-6 h-6" />, text: "Cloud Hosted" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
                  Try Builder Free
                </button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Mock Dashboard */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-500/20 rounded-lg p-3">
                    <div className="text-white text-sm">Bot Nodes</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <div className="text-white text-sm">Workflow</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <div className="text-white text-sm">AI Logic</div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-600 rounded mb-2"></div>
                      <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From personal assistants to enterprise automation - we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(features).map(([key, feature]) => (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                onClick={() => setActiveFeature(key)}
              >
                <div className="text-4xl mb-4">{feature.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              From Idea to AI in 3 Steps
            </h2>
            <p className="text-blue-100 text-xl">
              Our expert team helps bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-black text-white">{step.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/company/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Talk to Our Experts
              </button>
            </Link>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Perfect For Everyone
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're an individual or a large enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white">
            <Crown className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-black mb-6">
              Ready to Build Your AI Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and businesses who are already automating their world with BotifyHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Start Building Free
                </button>
              </Link>
              <Link href="/marketplace">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300">
                  Explore Templates
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}