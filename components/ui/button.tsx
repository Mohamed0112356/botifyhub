// components/ui/button.tsx
'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'default',
  size = 'md',
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-semibold transition-all duration-300 rounded-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2';
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };
  
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-lg hover:shadow-xl hover:scale-105',
    gradient: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };

  return (
    <button 
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}