// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BotifyHub - AI Bots Marketplace',
  description: 'Transform your workflow with powerful AI bots - Automate, optimize, and revolutionize your business',
  keywords: 'AI bots, automation, marketplace, business tools, workflow optimization',
  authors: [{ name: 'BotifyHub Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <div className="relative flex-1 flex flex-col">
          {/* خلفية مستقبلية خفيفة */}
          <div className="fixed inset-0 -z-10 futuristic-grid">
            {/* أشعة ضوئية خفيفة */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* الهيدر */}
          <Header />
          
          {/* المحتوى الرئيسي */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* الفوتر */}
          <Footer />
        </div>
      </body>
    </html>
  );
}