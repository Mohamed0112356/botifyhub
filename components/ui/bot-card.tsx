// components/ui/bot-card.tsx
'use client';

import { HTMLAttributes, useState } from 'react';
import Link from 'next/link';
import { Button } from './button';
import { Star, Zap, Users, Clock } from 'lucide-react';

interface Bot {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  features: string[];
  deploymentTime: string;
  usage: string;
  featured?: boolean;
  tags: string[];
}

interface BotCardProps extends HTMLAttributes<HTMLDivElement> {
  bot: Bot;
  showCategory?: boolean;
}

// دالة مساعدة للـ cn إذا لم تكن موجودة
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function BotCard({ 
  bot, 
  showCategory = true,
  className,
  ...props 
}: BotCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group transition-all duration-500",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          "relative bg-white rounded-3xl p-6 shadow-xl border border-gray-200 transition-all duration-500 h-full flex flex-col overflow-hidden",
          isHovered && "scale-105 shadow-2xl border-cyan-200",
          bot.featured && "ring-2 ring-cyan-500 ring-opacity-50"
        )}
      >
        {/* Featured Badge */}
        {bot.featured && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Featured
            </div>
          </div>
        )}

        {/* Hover Glow */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500",
            isHovered && "opacity-100"
          )}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
              {bot.name}
            </h3>
            {showCategory && (
              <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                {bot.category}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-2">
          {bot.description}
        </p>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-semibold text-gray-900">{bot.rating}</span>
              <span>({bot.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span>{bot.usage.split(' ')[0]}+</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-green-500" />
              <span>{bot.deploymentTime}</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {bot.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-gray-200"
            >
              {feature}
            </span>
          ))}
          {bot.features.length > 2 && (
            <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-xs font-medium">
              +{bot.features.length - 2} more
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {bot.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-700 rounded-lg text-xs font-semibold border border-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            <div className="text-2xl font-bold text-gray-900">${bot.price}</div>
            <div className="text-gray-500 text-sm">per month</div>
          </div>
          <div className="flex space-x-2">
            <Link href={`/marketplace/${bot.id}`}>
              <Button variant="outline" size="sm" className="rounded-xl border-gray-300 hover:border-cyan-400">
                Details
              </Button>
            </Link>
            <Button variant="gradient" size="sm" className="rounded-xl">
              Get Bot
            </Button>
          </div>
        </div>

        {/* Hover Actions Overlay */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 flex items-center justify-center space-x-3 opacity-0 transition-all duration-300 backdrop-blur-sm",
            isHovered ? "opacity-100" : "pointer-events-none"
          )}
        >
          <Link href={`/marketplace/${bot.id}`}>
            <Button variant="default" size="lg" className="rounded-2xl bg-white text-gray-900 hover:bg-gray-100">
              🚀 Buy Now
            </Button>
          </Link>
          <Link href={`/marketplace/${bot.id}`}>
            <Button variant="outline" size="lg" className="rounded-2xl border-white text-white hover:bg-white/10">
              ℹ Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}