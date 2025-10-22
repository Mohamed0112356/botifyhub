// app/marketplace/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Users, 
  Shield, 
  Rocket, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Sparkles,
  Brain,
  Bot,
  Workflow,
  BarChart3,
  MessageSquare,
  ShoppingCart,
  CloudLightning,
  Crown,
  Target,
  Video,
  Palette,
  User,
  Building,
  Heart
} from 'lucide-react';

// أنواع البيانات - محدثة
interface Bot {
  id: string;
  name: string;
  description: string;
  price: number;
  rentPrice: number; // تمت الإضافة
  buyPrice: number; // تمت الإضافة
  rating: number;
  reviews: number;
  category: string;
  icon: string;
  featured: boolean;
  tags: string[];
  deploymentTime: string;
}

// أيقونات مخصصة
const BotIcons = {
  AI: Brain,
  Chat: MessageSquare,
  Analytics: BarChart3,
  Automation: Workflow,
  Ecommerce: ShoppingCart,
  Speed: CloudLightning,
  Bot: Bot,
  Target: Target,
  Video: Video,
  Design: Palette,
  Personal: User,
  Business: Building,
  Social: Heart
};

// بيانات البوتات المحدثة مع إضافة أسعار الإيجار والشراء
const mockBots: Bot[] = [
  {
    id: '1',
    name: 'Neuro Support AI',
    description: 'Next-gen customer service with emotional intelligence and predictive analytics for unparalleled customer satisfaction.',
    price: 149,
    rentPrice: 29,
    buyPrice: 149,
    rating: 4.9,
    reviews: 1847,
    category: 'Customer Service',
    icon: 'AI',
    featured: true,
    tags: ['Neural Network', 'Emotional AI', 'Predictive'],
    deploymentTime: '2 minutes'
  },
  {
    id: '2',
    name: 'Quantum Marketer',
    description: 'AI-driven marketing campaigns with quantum computing optimization for maximum ROI and engagement.',
    price: 199,
    rentPrice: 39,
    buyPrice: 199,
    rating: 4.8,
    reviews: 956,
    category: 'Marketing',
    icon: 'Analytics',
    featured: true,
    tags: ['Quantum AI', 'Optimization', 'Real-time'],
    deploymentTime: '5 minutes'
  },
  {
    id: '3',
    name: 'Sales Synapse',
    description: 'Neural network-powered sales forecasting and intelligent lead generation with 99% accuracy.',
    price: 129,
    rentPrice: 25,
    buyPrice: 129,
    rating: 4.7,
    reviews: 723,
    category: 'Sales',
    icon: 'Target',
    featured: false,
    tags: ['Neural Network', 'Forecasting', 'Leads'],
    deploymentTime: '3 minutes'
  },
  {
    id: '4',
    name: 'HR Cognition',
    description: 'Advanced HR management with cognitive behavioral analysis and automated talent acquisition.',
    price: 179,
    rentPrice: 35,
    buyPrice: 179,
    rating: 4.6,
    reviews: 512,
    category: 'HR',
    icon: 'Automation',
    featured: true,
    tags: ['Cognitive AI', 'Behavioral', 'Management'],
    deploymentTime: '4 minutes'
  },
  {
    id: '5',
    name: 'Data Nexus',
    description: 'Multi-dimensional data analysis with holographic visualization and real-time insights.',
    price: 249,
    rentPrice: 49,
    buyPrice: 249,
    rating: 4.9,
    reviews: 634,
    category: 'Analytics',
    icon: 'Analytics',
    featured: false,
    tags: ['Multi-dimensional', 'Holographic', 'ML'],
    deploymentTime: '6 minutes'
  },
  {
    id: '6',
    name: 'Commerce Core',
    description: 'Blockchain-integrated e-commerce with AI-powered inventory and customer behavior prediction.',
    price: 159,
    rentPrice: 32,
    buyPrice: 159,
    rating: 4.5,
    reviews: 845,
    category: 'E-Commerce',
    icon: 'Ecommerce',
    featured: false,
    tags: ['Blockchain', 'Inventory AI', 'Secure'],
    deploymentTime: '3 minutes'
  },
  // البوتات الجديدة
  {
    id: '7',
    name: 'Social Creator Pro',
    description: 'AI-powered content creation suite for social media influencers and content creators.',
    price: 89,
    rentPrice: 19,
    buyPrice: 299,
    rating: 4.8,
    reviews: 623,
    category: 'Content Creation',
    icon: 'Video',
    featured: true,
    tags: ['Content AI', 'Social Media', 'Automation'],
    deploymentTime: '1 minute'
  },
  {
    id: '8',
    name: 'Personal Assistant AI',
    description: 'Your personal AI companion for daily tasks, scheduling, and productivity enhancement.',
    price: 49,
    rentPrice: 9,
    buyPrice: 149,
    rating: 4.7,
    reviews: 892,
    category: 'Personal',
    icon: 'Personal',
    featured: false,
    tags: ['Personal AI', 'Productivity', 'Assistant'],
    deploymentTime: '30 seconds'
  },
  {
    id: '9',
    name: 'Enterprise Flow',
    description: 'Comprehensive business automation platform for enterprises with multi-department integration.',
    price: 299,
    rentPrice: 59,
    buyPrice: 999,
    rating: 4.9,
    reviews: 345,
    category: 'Business',
    icon: 'Business',
    featured: true,
    tags: ['Enterprise', 'Automation', 'Integration'],
    deploymentTime: '8 minutes'
  }
];

const categories = ['All', 'Customer Service', 'Marketing', 'Sales', 'HR', 'Analytics', 'E-Commerce', 'Content Creation', 'Personal', 'Business'];

export default function MarketplacePage() {
  const [bots, setBots] = useState<Bot[]>(mockBots);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredBots = bots
    .filter(bot => 
      bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bot.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bot.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(bot => selectedCategory === 'All' || bot.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': return a.rentPrice - b.rentPrice; // تم التعديل لاستخدام rentPrice
        case 'name': return a.name.localeCompare(b.name);
        case 'reviews': return b.reviews - a.reviews;
        default: return b.rating - a.rating;
      }
    });

  const handleDeployClick = (e: React.MouseEvent, botId: string) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/marketplace/${botId}`);
  };

  return (
    <div className="min-h-screen pt-8 pb-16 bg-gradient-to-br from-white to-gray-50/80 relative overflow-hidden">
      {/* خلفية متحركة خفيفة */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* الهيدر الرئيسي المعدل */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-6 text-gray-900">
            <span className="text-gradient">AI Marketplace</span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="text-cyan-600 font-bold">Discover Intelligent Solutions</span> for Every Need
            <span className="block text-lg text-purple-600 mt-4 font-semibold">
              Rent Premium AI Tools - Flexible & Affordable
            </span>
          </p>
        </div>

        {/* الإحصائيات المعدلة */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: 'Active Users', value: '85K+', color: 'cyan' },
            { icon: Zap, label: 'AI Models', value: '300+', color: 'purple' },
            { icon: Shield, label: 'Uptime', value: '99.99%', color: 'green' },
            { icon: Rocket, label: 'Monthly Rentals', value: '45K+', color: 'pink' } // تم التعديل
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-card p-6 rounded-2xl hover-lift border border-gray-200/80 bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-sm"></div>
                    <stat.icon className={`relative w-8 h-8 text-${stat.color}-600 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* أدوات البحث والتصفية المعدلة */}
        <div className="glass-card-intense rounded-2xl p-8 mb-12 border border-cyan-200/60 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
            {/* شريط البحث */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI assistants, automation tools, neural networks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-cyan-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 shadow-sm"
                />
              </div>
            </div>

            {/* التصنيفات */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-cyan-300'
                  } shadow-sm`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* الترتيب */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-600 w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-cyan-300 rounded-xl pl-10 pr-8 py-3 text-gray-900 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 appearance-none shadow-sm"
              >
                <option value="rating">Top Rated</option>
                <option value="price">Rent Price Low-High</option> {/* تم التعديل */}
                <option value="reviews">Most Reviews</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* شبكة البوتات المعدلة */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(9)].map((_, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 animate-pulse border border-gray-200 bg-white/80"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-32 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBots.map((bot, index) => {
              const IconComponent = BotIcons[bot.icon as keyof typeof BotIcons];
              return (
                <div
                  key={bot.id}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredCard(bot.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* تأثير Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 ${
                    hoveredCard === bot.id ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
                  }`}></div>
                  
                  <Link 
                    href={`/marketplace/${bot.id}`}
                    className="block glass-card rounded-2xl p-6 hover-lift cursor-pointer relative overflow-hidden border border-gray-200/80 bg-white/80 backdrop-blur-sm group/card shadow-sm"
                  >
                    {/* شارة Featured */}
                    {bot.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/25 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          FEATURED
                        </div>
                      </div>
                    )}

                    {/* أيقونة البوت */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/25 relative z-10">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-cyan-500/10 rounded-2xl blur-md group-hover/card:blur-xl transition-all duration-500"></div>
                    </div>

                    {/* معلومات البوت */}
                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover/card:text-cyan-600 transition-colors duration-300">
                      {bot.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed font-medium text-sm">
                      {bot.description}
                    </p>

                    {/* التصنيف والوقت */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-gray-900 font-bold">{bot.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm">({bot.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-600 text-sm font-semibold">
                        <Clock className="w-4 h-4" />
                        {bot.deploymentTime}
                      </div>
                    </div>

                    {/* التاجات */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {bot.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-700 text-xs font-semibold rounded-lg border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* السعر والزر - تم التعديل لاستخدام سعر الـ Rent */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                      <div>
                        <div className="text-2xl font-black text-cyan-600">
                          ${bot.rentPrice} {/* تم التعديل */}
                        </div>
                        <div className="text-gray-500 text-sm font-medium">rent per month</div> {/* تم التعديل */}
                      </div>
                      <button 
                        onClick={(e) => handleDeployClick(e, bot.id)}
                        className="modern-button flex items-center gap-2 group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10">Rent Now</span> {/* تم التعديل */}
                        <Rocket className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* رسالة عدم وجود نتائج */}
        {!isLoading && filteredBots.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">No AI Models Found</h3>
            <p className="text-gray-600 text-lg font-medium">Try different search terms or browse all categories</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(203, 213, 225, 0.6);
        }
        
        .glass-card-intense {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(103, 232, 249, 0.3);
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .modern-button {
          background: white;
          border: 1px solid #cbd5e1;
          color: #475569;
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .modern-button:hover {
          color: white;
          border-color: transparent;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
}