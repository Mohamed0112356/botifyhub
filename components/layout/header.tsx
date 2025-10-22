// components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './../ui/button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Custom', href: '/company' },
  { name: 'Pricing', href: '/company/pricing' },
];

function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative">
      <div className="flex items-center space-x-8">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
            >
              <span
                className={`relative z-10 font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400 drop-shadow-lg'
                    : 'text-white hover:text-white drop-shadow-md'
                }`}
              >
                {item.name}
              </span>
              
              {/* Animated underline */}
              <div
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full ${
                  isActive ? 'w-full' : ''
                }`}
              />
              
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-lg bg-cyan-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/50 py-3'
            : 'bg-slate-900/90 backdrop-blur-lg py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
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
                {/* Pulsing glow effect */}
                <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  BotifyHub
                </span>
                <div className="h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Navigation />
              
              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <Link href="/auth/login">
                 <Button variant="ghost" className="text-white hover:text-cyan-300 hover:bg-white/10 font-medium drop-shadow-md border border-transparent hover:border-cyan-400/30 transition-all duration-300">
                  Sign In
                  </Button>
                 </Link>
                <Link href="/marketplace">
                  <Button variant="gradient" className="rounded-xl font-semibold drop-shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col space-y-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 drop-shadow-md ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 drop-shadow-md ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 drop-shadow-md ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white text-lg font-semibold transition-colors duration-300 py-2 border-b border-white/5 last:border-b-0 drop-shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link href="/marketplace" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="gradient" className="rounded-xl w-full font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Background Elements */}
      <div className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  );
}