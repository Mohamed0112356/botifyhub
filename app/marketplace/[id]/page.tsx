// app/marketplace/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  Clock, 
  Zap, 
  Shield, 
  Rocket, 
  CheckCircle,
  Play,
  BarChart3,
  MessageSquare,
  Brain,
  Workflow,
  ShoppingCart,
  CloudLightning,
  Target,
  Calendar,
  Globe,
  Building,
  MessageCircle,
  Database,
  Cloud,
  CreditCard,
  Briefcase,
  Video,
  Palette,
  User,
  Heart,
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
  CalendarDays,
  FileText,
  Smartphone,
  Laptop
} from 'lucide-react';
import { 
  SiSalesforce, 
  SiHubspot, 
  SiSlack,
  SiZendesk,
  SiIntercom,
  SiGoogleanalytics,
  SiFacebook,
  SiMailchimp,
  SiShopify,
  SiStripe,
  SiGreenhouse,
  SiLinkedin,
  SiTableau,
  SiPowers,
  SiGooglebigquery,
  SiSnowflake,
  SiAmazon,
  SiWoo,
  SiMagento,
  SiPaypal,
  SiInstagram,
  SiYoutube,
  SiTiktok,
  SiWhatsapp,
  SiDiscord,
  SiNotion,
  SiTodoist,
  SiGooglecalendar,
  SiGooglemeet,
  SiZoom
} from "react-icons/si";

// أنواع البيانات - محدثة
interface Bot {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  rentPrice: number;
  buyPrice: number;
  rating: number;
  reviews: number;
  category: string;
  icon: string;
  featured: boolean;
  tags: string[];
  deploymentTime: string;
  features: string[];
  integrations: string[];
  usage: string;
  lastUpdated: string;
  version: string;
}

// بيانات البوتات التفصيلية - محدثة مع إضافة البوتات الجديدة
const botDetails: { [key: string]: Bot } = {
  '1': {
    id: '1',
    name: 'Neuro Support AI',
    description: 'Advanced customer service with emotional intelligence and predictive analytics.',
    detailedDescription: 'Neuro Support AI revolutionizes customer service by combining emotional intelligence with predictive analytics. Our advanced neural network understands customer sentiment in real-time, providing personalized responses that build trust and loyalty. The system learns from every interaction, continuously improving its ability to resolve issues before they escalate.',
    price: 149,
    rentPrice: 29,
    buyPrice: 149,
    rating: 4.9,
    reviews: 1847,
    category: 'Customer Service',
    icon: 'AI',
    featured: true,
    tags: ['Neural Network', 'Emotional AI', 'Predictive', '24/7 Support'],
    deploymentTime: '2 minutes',
    features: [
      'Real-time sentiment analysis',
      'Predictive issue resolution',
      'Multi-language support',
      'Seamless CRM integration',
      'Custom response templates',
      'Performance analytics dashboard'
    ],
    integrations: ['Salesforce', 'Zendesk', 'HubSpot', 'Intercom', 'Slack'],
    usage: 'Ideal for e-commerce, SaaS, and service-based businesses handling 1000+ daily interactions',
    lastUpdated: '2024-01-15',
    version: 'v2.1.4'
  },
  '2': {
    id: '2',
    name: 'Quantum Marketer',
    description: 'AI-driven marketing campaigns with quantum computing optimization.',
    detailedDescription: 'Quantum Marketer leverages quantum-inspired algorithms to optimize your marketing campaigns with unprecedented precision. Our platform analyzes millions of data points to identify the perfect audience segments, optimal timing, and most effective messaging strategies.',
    price: 199,
    rentPrice: 39,
    buyPrice: 199,
    rating: 4.8,
    reviews: 956,
    category: 'Marketing',
    icon: 'Analytics',
    featured: true,
    tags: ['Quantum AI', 'Optimization', 'Real-time', 'ROI Focused'],
    deploymentTime: '5 minutes',
    features: [
      'Quantum audience segmentation',
      'Real-time campaign optimization',
      'Cross-channel analytics',
      'Predictive ROI modeling',
      'Automated A/B testing',
      'Competitive intelligence'
    ],
    integrations: ['Google Analytics', 'Facebook Ads', 'Mailchimp', 'Shopify', 'Stripe'],
    usage: 'Perfect for marketing agencies and businesses running multi-channel campaigns',
    lastUpdated: '2024-01-10',
    version: 'v1.8.2'
  },
  '3': {
    id: '3',
    name: 'Sales Synapse',
    description: 'Neural network-powered sales forecasting and intelligent lead generation.',
    detailedDescription: 'Sales Synapse transforms your sales process with neural network-powered forecasting and intelligent lead scoring. Our system analyzes historical data, market trends, and customer behavior to predict sales outcomes with 95% accuracy.',
    price: 129,
    rentPrice: 25,
    buyPrice: 129,
    rating: 4.7,
    reviews: 723,
    category: 'Sales',
    icon: 'Target',
    featured: false,
    tags: ['Neural Network', 'Forecasting', 'Leads', 'Analytics'],
    deploymentTime: '3 minutes',
    features: [
      'AI-powered lead scoring',
      'Sales forecasting with 95% accuracy',
      'Pipeline optimization',
      'Automated follow-up sequences',
      'Competitor analysis',
      'Real-time performance metrics'
    ],
    integrations: ['Salesforce', 'HubSpot CRM', 'Pipedrive', 'Slack', 'Microsoft Teams'],
    usage: 'Designed for sales teams of all sizes looking to increase conversion rates',
    lastUpdated: '2024-01-08',
    version: 'v1.5.3'
  },
  '4': {
    id: '4',
    name: 'HR Cognition',
    description: 'Advanced HR management with cognitive behavioral analysis.',
    detailedDescription: 'HR Cognition brings artificial intelligence to human resources, automating repetitive tasks while providing deep insights into employee engagement and performance. Our cognitive behavioral analysis helps identify potential issues before they impact your team.',
    price: 179,
    rentPrice: 35,
    buyPrice: 179,
    rating: 4.6,
    reviews: 512,
    category: 'HR',
    icon: 'Automation',
    featured: true,
    tags: ['Cognitive AI', 'Behavioral', 'Management', 'Analytics'],
    deploymentTime: '4 minutes',
    features: [
      'Automated resume screening',
      'Employee sentiment analysis',
      'Performance prediction models',
      'Compliance monitoring',
      'Training recommendation engine',
      'Retention risk assessment'
    ],
    integrations: ['Workday', 'BambooHR', 'Greenhouse', 'LinkedIn', 'Slack'],
    usage: 'Ideal for HR departments managing 50+ employees',
    lastUpdated: '2024-01-12',
    version: 'v2.0.1'
  },
  '5': {
    id: '5',
    name: 'Data Nexus',
    description: 'Multi-dimensional data analysis with holographic visualization.',
    detailedDescription: 'Data Nexus provides multi-dimensional data analysis with stunning holographic visualizations. Our platform processes complex datasets from multiple sources, revealing insights that would be impossible to discover with traditional BI tools.',
    price: 249,
    rentPrice: 49,
    buyPrice: 249,
    rating: 4.9,
    reviews: 634,
    category: 'Analytics',
    icon: 'Analytics',
    featured: false,
    tags: ['Multi-dimensional', 'Holographic', 'ML', 'Real-time'],
    deploymentTime: '6 minutes',
    features: [
      '3D holographic data visualization',
      'Real-time multi-source data integration',
      'Predictive modeling',
      'Automated insight generation',
      'Collaborative analysis tools',
      'Custom dashboard creation'
    ],
    integrations: ['Tableau', 'Power BI', 'Google BigQuery', 'Snowflake', 'AWS Redshift'],
    usage: 'Perfect for data scientists and business analysts working with complex datasets',
    lastUpdated: '2024-01-05',
    version: 'v3.2.0'
  },
  '6': {
    id: '6',
    name: 'Commerce Core',
    description: 'Blockchain-integrated e-commerce with AI-powered inventory.',
    detailedDescription: 'Commerce Core combines blockchain technology with AI-powered inventory management to create the most secure and efficient e-commerce platform available. Our system prevents fraud, optimizes stock levels, and personalizes shopping experiences.',
    price: 159,
    rentPrice: 32,
    buyPrice: 159,
    rating: 4.5,
    reviews: 845,
    category: 'E-Commerce',
    icon: 'Ecommerce',
    featured: false,
    tags: ['Blockchain', 'Inventory AI', 'Secure', 'E-commerce'],
    deploymentTime: '3 minutes',
    features: [
      'Blockchain-powered security',
      'AI inventory optimization',
      'Personalized product recommendations',
      'Automated fraud detection',
      'Multi-channel sales integration',
      'Real-time analytics dashboard'
    ],
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
    usage: 'Designed for e-commerce businesses processing 500+ orders daily',
    lastUpdated: '2024-01-18',
    version: 'v1.9.7'
  },
  // البوتات الجديدة
  '7': {
    id: '7',
    name: 'Social Creator Pro',
    description: 'AI-powered content creation suite for social media influencers and content creators.',
    detailedDescription: 'Social Creator Pro is the ultimate AI assistant for content creators, influencers, and social media managers. Our platform generates viral content ideas, creates engaging captions, schedules posts across multiple platforms, and provides real-time performance analytics. From TikTok trends to Instagram Reels and YouTube videos, we help you grow your audience and maximize engagement.',
    price: 89,
    rentPrice: 19,
    buyPrice: 299,
    rating: 4.8,
    reviews: 623,
    category: 'Content Creation',
    icon: 'Video',
    featured: true,
    tags: ['Content AI', 'Social Media', 'Automation', 'Viral'],
    deploymentTime: '1 minute',
    features: [
      'AI content idea generation',
      'Multi-platform scheduling',
      'Hashtag optimization',
      'Video script writing',
      'Engagement analytics',
      'Trend prediction',
      'Caption generation',
      'Content calendar'
    ],
    integrations: ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'LinkedIn'],
    usage: 'Perfect for content creators, influencers, and social media managers with 10K+ followers',
    lastUpdated: '2024-01-20',
    version: 'v2.3.1'
  },
  '8': {
    id: '8',
    name: 'Personal Assistant AI',
    description: 'Your personal AI companion for daily tasks, scheduling, and productivity enhancement.',
    detailedDescription: 'Personal Assistant AI is your intelligent companion that helps organize your life, boost productivity, and simplify daily tasks. From managing your calendar and setting reminders to providing personalized recommendations and automating routine tasks, our AI learns your preferences and adapts to your lifestyle. Whether you\'re a student, professional, or busy parent, this assistant becomes an indispensable part of your daily routine.',
    price: 49,
    rentPrice: 9,
    buyPrice: 149,
    rating: 4.7,
    reviews: 892,
    category: 'Personal',
    icon: 'Personal',
    featured: false,
    tags: ['Personal AI', 'Productivity', 'Assistant', 'Smart'],
    deploymentTime: '30 seconds',
    features: [
      'Smart calendar management',
      'Task automation',
      'Personalized reminders',
      'Email organization',
      'Meeting scheduling',
      'Travel planning',
      'Expense tracking',
      'Learning your preferences'
    ],
    integrations: ['Google Calendar', 'Notion', 'Todoist', 'Gmail', 'WhatsApp', 'Zoom'],
    usage: 'Ideal for individuals looking to enhance personal productivity and organization',
    lastUpdated: '2024-01-22',
    version: 'v1.5.2'
  },
  '9': {
    id: '9',
    name: 'Enterprise Flow',
    description: 'Comprehensive business automation platform for enterprises with multi-department integration.',
    detailedDescription: 'Enterprise Flow is the ultimate business automation platform designed for large organizations. Our system seamlessly integrates across departments, automating complex workflows, optimizing resource allocation, and providing executive-level insights. With advanced AI algorithms, we help enterprises reduce operational costs, improve efficiency, and drive innovation across all business units.',
    price: 299,
    rentPrice: 59,
    buyPrice: 999,
    rating: 4.9,
    reviews: 345,
    category: 'Business',
    icon: 'Business',
    featured: true,
    tags: ['Enterprise', 'Automation', 'Integration', 'Scalable'],
    deploymentTime: '8 minutes',
    features: [
      'Cross-department workflow automation',
      'Real-time business intelligence',
      'Resource optimization',
      'Compliance monitoring',
      'Executive dashboard',
      'Multi-team collaboration',
      'Advanced analytics',
      'Custom integration API'
    ],
    integrations: ['Salesforce', 'Slack', 'SAP', 'Oracle', 'Workday', 'Tableau'],
    usage: 'Designed for enterprises with 500+ employees and multiple departments',
    lastUpdated: '2024-01-25',
    version: 'v4.1.0'
  }
};

// أيقونات مخصصة
const BotIcons = {
  AI: Brain,
  Chat: MessageSquare,
  Analytics: BarChart3,
  Automation: Workflow,
  Ecommerce: ShoppingCart,
  Speed: CloudLightning,
  Target: Target,
  Video: Video,
  Personal: User,
  Business: Building
};

export default function BotDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [bot, setBot] = useState<Bot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      const botId = params.id as string;
      const botData = botDetails[botId];
      setBot(botData);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [params.id]);

  // دالة محسنة لإرجاع الأيقونة المناسبة بناءً على اسم التكامل
  const getIntegrationIcon = (name: string) => {
    const iconStyle = "text-3xl mb-3 mx-auto";
    
    switch (name.toLowerCase()) {
      case 'salesforce':
        return <SiSalesforce className={iconStyle} style={{ color: '#00A1E0' }} />;
      case 'hubspot':
      case 'hubspot crm':
        return <SiHubspot className={iconStyle} style={{ color: '#FF7A59' }} />;
      case 'pipedrive':
        return <Building className={iconStyle} style={{ color: '#F01C2C' }} />;
      case 'slack':
        return <SiSlack className={iconStyle} style={{ color: '#4A154B' }} />;
      case 'microsoft teams':
        return <MessageCircle className={iconStyle} style={{ color: '#6264A7' }} />;
      case 'zendesk':
        return <SiZendesk className={iconStyle} style={{ color: '#03363D' }} />;
      case 'intercom':
        return <SiIntercom className={iconStyle} style={{ color: '#1F8DED' }} />;
      case 'google analytics':
        return <SiGoogleanalytics className={iconStyle} style={{ color: '#FFC107' }} />;
      case 'facebook ads':
      case 'facebook':
        return <SiFacebook className={iconStyle} style={{ color: '#1877F2' }} />;
      case 'mailchimp':
        return <SiMailchimp className={iconStyle} style={{ color: '#FFE01B' }} />;
      case 'shopify':
        return <SiShopify className={iconStyle} style={{ color: '#7AB55C' }} />;
      case 'stripe':
        return <SiStripe className={iconStyle} style={{ color: '#635BFF' }} />;
      case 'workday':
        return <Briefcase className={iconStyle} style={{ color: '#CC0000' }} />;
      case 'bamboohr':
        return <div className={`${iconStyle} font-bold text-lg`} style={{ color: '#00A4FD' }}>BH</div>;
      case 'greenhouse':
        return <SiGreenhouse className={iconStyle} style={{ color: '#00B2A9' }} />;
      case 'linkedin':
        return <SiLinkedin className={iconStyle} style={{ color: '#0A66C2' }} />;
      case 'tableau':
        return <SiTableau className={iconStyle} style={{ color: '#E97627' }} />;
      case 'power bi':
        return <SiPowers className={iconStyle} style={{ color: '#F2C811' }} />;
      case 'google bigquery':
        return <SiGooglebigquery className={iconStyle} style={{ color: '#4285F4' }} />;
      case 'snowflake':
        return <SiSnowflake className={iconStyle} style={{ color: '#29B5E8' }} />;
      case 'aws redshift':
        return <SiAmazon className={iconStyle} style={{ color: '#FF9900' }} />;
      case 'woocommerce':
        return <SiWoo className={iconStyle} style={{ color: '#96588A' }} />;
      case 'magento':
        return <SiMagento className={iconStyle} style={{ color: '#EE672F' }} />;
      case 'paypal':
        return <SiPaypal className={iconStyle} style={{ color: '#00457C' }} />;
      // التكاملات الجديدة
      case 'instagram':
        return <SiInstagram className={iconStyle} style={{ color: '#E4405F' }} />;
      case 'tiktok':
        return <SiTiktok className={iconStyle} style={{ color: '#000000' }} />;
      case 'youtube':
        return <SiYoutube className={iconStyle} style={{ color: '#FF0000' }} />;
      case 'whatsapp':
        return <SiWhatsapp className={iconStyle} style={{ color: '#25D366' }} />;
      case 'notion':
        return <SiNotion className={iconStyle} style={{ color: '#000000' }} />;
      case 'todoist':
        return <SiTodoist className={iconStyle} style={{ color: '#E44332' }} />;
      case 'google calendar':
        return <SiGooglecalendar className={iconStyle} style={{ color: '#4285F4' }} />;
      case 'gmail':
        return <SiGooglemeet className={iconStyle} style={{ color: '#EA4335' }} />;
      case 'zoom':
        return <SiZoom className={iconStyle} style={{ color: '#2D8CFF' }} />;
      case 'sap':
        return <Database className={iconStyle} style={{ color: '#008FD7' }} />;
      case 'oracle':
        return <Cloud className={iconStyle} style={{ color: '#F80000' }} />;
      default:
        return <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2" />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-32 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-96 bg-gray-300 rounded-2xl mb-6"></div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-gray-300 rounded"></div>
                <div className="h-24 bg-gray-300 rounded"></div>
                <div className="h-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!bot) {
    return (
      <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bot Not Found</h1>
          <p className="text-gray-600 mb-6">The AI bot you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/marketplace')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = BotIcons[bot.icon as keyof typeof BotIcons];

  return (
    <div className="min-h-screen pt-8 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* زر العودة */}
        <button 
          onClick={() => router.push('/marketplace')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-2">
            {/* الهيدر */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {IconComponent && (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{bot.name}</h1>
                    <p className="text-gray-600 text-lg">{bot.description}</p>
                  </div>
                </div>
                {bot.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                    <Zap className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              {/* التصنيف والمعلومات */}
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-900 font-bold text-lg">{bot.rating}</span>
                  </div>
                  <span className="text-gray-600">({bot.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold">{bot.usage.split(' ')[0]}+ users</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Deploys in {bot.deploymentTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Updated {bot.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* التبويبات المحدثة */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                {['overview', 'features', 'integrations'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* محتوى التبويبات */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{bot.detailedDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {bot.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">All Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bot.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'integrations' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Integrations</h3>
                  
                  {/* Integration Icons Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bot.integrations.map((integration, index) => (
                      <div 
                        key={index} 
                        className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        {getIntegrationIcon(integration)}
                        <span className="text-gray-700 text-sm font-semibold block">{integration}</span>
                      </div>
                    ))}
                  </div>

                  {/* Integration Description */}
                  <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Seamless Integration</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      All integrations are pre-configured and can be activated with one click. 
                      Our AI automatically syncs data and maintains security protocols across all connected platforms.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* التاجات */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {bot.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

{/* Updated Sidebar */}
<div className="space-y-6">
  {/* Pricing & Purchase Card */}
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-6">
    {/* Replaced price with marketing description */}
    <div className="text-center mb-6">
      <div className="text-xl font-bold text-gray-900 mb-3">
        {bot.id === '1' && "Transform Customer Service into Exceptional Experiences with Emotional Intelligence"}
        {bot.id === '2' && "Achieve Maximum ROI with Self-Evolving Smart Marketing Campaigns"}
        {bot.id === '3' && "Double Your Sales with Accurate Forecasting and High-Value Lead Scoring"}
        {bot.id === '4' && "Elevate Your HR with Smart Behavioral Analysis and Proactive Insights"}
        {bot.id === '5' && "Discover Hidden Insights in Your Data with Advanced Holographic Visualizations"}
        {bot.id === '6' && "Launch into E-commerce with Blockchain Security and Intelligent Inventory"}
        {bot.id === '7' && "Create Viral Content That Resonates with Your Audience Using Creative AI"}
        {bot.id === '8' && "Organize Your Life with a Personal Assistant That Learns and Adapts to You"}
        {bot.id === '9' && "Transform Your Enterprise into a Fully Integrated Smart Ecosystem"}
      </div>
      <div className="text-gray-600 text-sm leading-relaxed">
        {bot.detailedDescription.split('. ')[0]}.
      </div>
    </div>

    {/* Rent and Buy Buttons */}
    <div className="space-y-4 mb-6">
      <div className="text-center">
        <button 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold opacity-70 cursor-not-allowed"
          disabled
        >
          Rent Now
        </button>
        <div className="text-sm text-gray-500 mt-1">${bot.rentPrice}/month</div>
      </div>
      
      <div className="text-center">
        <button 
          className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold opacity-70 cursor-not-allowed"
          disabled
        >
          Buy Lifetime
        </button>
        <div className="text-sm text-gray-500 mt-1">${bot.buyPrice} one-time</div>
      </div>
    </div>

    <button className="w-full bg-white text-gray-900 py-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-semibold">
      <Play className="w-5 h-5" />
      Live Demo
    </button>

    <div className="mt-6 space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Version</span>
        <span className="text-gray-900 font-semibold">{bot.version}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Deployment</span>
        <span className="text-green-600 font-semibold">{bot.deploymentTime}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Support</span>
        <span className="text-gray-900 font-semibold">24/7</span>
      </div>
    </div>
  </div>

            {/* بطاقة الأمان */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Security & Compliance</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SOC 2 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Regular Security Audits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}