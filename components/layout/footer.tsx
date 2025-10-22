// components/layout/footer.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaDiscord,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcApplePay
} from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';

const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/company/pricing' },
      { name: 'API', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/company/about' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  },
];

// إنشاء مصفوفة ثابتة للجسيمات بدلاً من استخدام Math.random()
const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5) % 100}%`,
  top: `${(i * 7) % 100}%`,
  animationDelay: `${(i * 0.5) % 5}s`,
  animationDuration: `${10 + (i % 10)}s`,
}));

export function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const socialLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/botifyhub',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/botifyhub',
      color: 'hover:text-blue-600 hover:bg-blue-600/10'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/botifyhub',
      color: 'hover:text-gray-300 hover:bg-gray-300/10'
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      href: 'https://discord.gg/botifyhub',
      color: 'hover:text-purple-400 hover:bg-purple-400/10'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/botifyhub',
      color: 'hover:text-red-500 hover:bg-red-500/10'
    }
  ];

  const paymentMethods = [
    {
      name: 'Visa',
      icon: FaCcVisa,
      color: 'text-blue-600'
    },
    {
      name: 'Mastercard',
      icon: FaCcMastercard,
      color: 'text-red-600'
    },
    {
      name: 'American Express',
      icon: SiAmericanexpress,
      color: 'text-blue-800'
    },
    {
      name: 'PayPal',
      icon: FaCcPaypal,
      color: 'text-blue-500'
    },
    {
      name: 'Stripe',
      icon: FaCcStripe,
      color: 'text-purple-600'
    },
    {
      name: 'Apple Pay',
      icon: FaCcApplePay,
      color: 'text-black'
    }
  ];

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/0 to-slate-900" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/0 to-slate-900" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Image
                      src="/BotifyHub-logo-transparent.png"
                      alt="BotifyHub"
                      width={40}
                      height={40}
                      className="brightness-0 invert"
                    />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    BotifyHub
                  </span>
                  <span className="text-white/60 text-sm">AI Bot Marketplace</span>
                </div>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed mb-6">
                Building the future of AI automation. Discover, deploy, and customize 
                powerful AI bots that transform your workflow.
              </p>
              
              {/* Social Links - محدثة بأيقونات حقيقية */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/60 transition-all duration-300 hover:scale-110 group ${social.color}`}
                      title={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 flex items-center group"
                      >
                        <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-white/60 text-sm">
            © {currentYear} BotifyHub. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <span className="flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              <span>All systems operational</span>
            </span>
            
            {/* وسائل الدفع والشعارات */}
            <div className="flex items-center space-x-4">
              {/* وسائل الدفع */}
              <div className="flex items-center space-x-2">
                {paymentMethods.map((payment) => {
                  const PaymentIcon = payment.icon;
                  return (
                    <div
                      key={payment.name}
                      className="group relative"
                      title={payment.name}
                    >
                      <PaymentIcon className={`w-6 h-6 ${payment.color} transition-all duration-300 hover:scale-110`} />
                    </div>
                  );
                })}
              </div>
              
              {/* الشعارات */}
              <div className="flex items-center space-x-3 text-white/60">
                <span className="flex items-center space-x-1">
                  <span>🌍</span>
                  <span className="text-xs">Global</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>🔒</span>
                  <span className="text-xs">Secure</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles - ثابتة بدلاً من عشوائية */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}
    </footer>
  );
}