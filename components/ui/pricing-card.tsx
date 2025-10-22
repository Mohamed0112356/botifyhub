// components/ui/pricing-card.tsx
'use client';

import { HTMLAttributes } from 'react';
import { Button } from './button';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  plan: {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    buttonText: string;
    popular?: boolean;
    icon?: string;
    savings?: string;
  };
  isAnnual?: boolean;
}

// دالة مساعدة للـ cn إذا لم تكن موجودة
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function PricingCard({ 
  plan, 
  isAnnual = false, 
  className,
  ...props 
}: PricingCardProps) {
  const calculateAnnualPrice = (price: string) => {
    if (price.includes('$')) {
      const monthlyPrice = parseInt(price.replace('$', '').replace('/mo', ''));
      return `$${Math.floor(monthlyPrice * 0.8 * 12)}`;
    }
    return price;
  };

  const getPlanIcon = () => {
    switch (plan.name.toLowerCase()) {
      case 'starter':
        return <Zap className="w-6 h-6" />;
      case 'pro':
        return <Star className="w-6 h-6" />;
      case 'enterprise':
        return <Crown className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div
      className={cn(
        "relative group transition-all duration-500",
        plan.popular && "md:-translate-y-4",
        className
      )}
      {...props}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Savings Badge */}
      {isAnnual && plan.savings && (
        <div className="absolute -top-4 left-4 z-10">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Save {plan.savings}
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={cn(
          "relative h-full rounded-3xl p-8 backdrop-blur-sm border-2 transition-all duration-500",
          plan.popular
            ? "bg-gradient-to-br from-white to-gray-50 border-cyan-200 shadow-2xl shadow-cyan-500/20"
            : "bg-white border-gray-200 shadow-xl hover:shadow-2xl hover:border-cyan-100",
          "group-hover:scale-105"
        )}
      >
        {/* Animated Gradient Border */}
        <div
          className={cn(
            "absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 transition-opacity duration-500 -z-10",
            plan.popular ? "opacity-5" : "group-hover:opacity-5"
          )}
        />

        {/* Header */}
        <div className="relative text-center mb-8">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
            plan.popular 
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white" 
              : "bg-gray-100 text-gray-600"
          )}>
            {getPlanIcon()}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {plan.name}
          </h3>
          
          <div className="flex items-baseline justify-center mb-2">
            <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {isAnnual && !plan.price.includes('free') && !plan.price.includes('Custom') && !plan.price.includes('Contact')
                ? calculateAnnualPrice(plan.price)
                : plan.price.includes('$') 
                  ? plan.price 
                  : plan.price}
            </span>
            {plan.period && !plan.price.includes('Contact') && (
              <span className="text-gray-600 ml-2 text-lg">
                {isAnnual && !plan.price.includes('free') && !plan.price.includes('Custom') 
                  ? '/year' 
                  : plan.period}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 text-sm">{plan.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5",
                plan.popular 
                  ? "bg-green-100 text-green-600" 
                  : "bg-gray-100 text-gray-600"
              )}>
                <Check className="w-3 h-3" />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          variant={plan.popular ? "gradient" : "default"}
          size="lg"
          className={cn(
            "w-full font-semibold transition-all duration-300",
            plan.popular && "shadow-lg hover:shadow-xl"
          )}
        >
          {plan.buttonText}
        </Button>

        {/* Annual Savings Note */}
        {isAnnual && plan.price.includes('$') && !plan.price.includes('Contact') && (
          <div className="text-center mt-4">
            <p className="text-green-600 text-sm font-semibold">
              🎉 Save 20% with annual billing
            </p>
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute -z-10 top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
      <div className="absolute -z-10 bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping delay-300" />
    </div>
  );
}