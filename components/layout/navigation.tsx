'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '/company' },
  { name: 'Pricing', href: '/company/pricing' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="relative">
      <div className="flex items-center space-x-8">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
            >
              <span
                className={`relative z-10 font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-white/80 hover:text-white'
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
          )
        })}
      </div>
    </nav>
  )
}