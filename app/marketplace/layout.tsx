// app/marketplace/layout.tsx
import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BotifyHub - AI Bots Marketplace',
  description: 'Transform your workflow with intelligent AI automation - Experience the future of business optimization',
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-primary">
      {children}
    </div>
  );
}