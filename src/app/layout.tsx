import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import FormComponent from '@/components/FormComponent';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "bunvarn'car shop",
  description: "Car Shop Application built with Next.js and React",
  keywords: ["car", "discount", "modern", "luxeri", "web development"],
  authors: [{ name: "Marta Full Stack" }],
  creator: "Matra",
  openGraph: {
    title: "Car Shop",
    description: "Car Shop Application built with Next.js and React",
    url: "",
    siteName: "Car Shop",
    images: [
      {
        url: "https://imgs.search.brave.com/SVYEabTzcQSVZWQl9wiH3bdeXk-0I0RnY3H21gex6sU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzEyMS0xMjE3/NjA4X3Nwb3J0cy1j/YXItY2xpcGFydC1j/YXItY2xpcGFydC13/aXRob3V0LWJhY2tn/cm91bmQucG5n",
        width: 1200,
        height: 630,
        alt: "Car Rental Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
     return (
   <html>
    <body>
      <StoreProvider>{children}</StoreProvider>
       <div className="container mx-auto px-6 py-12">
      <div className="text-center space-y-6">
        <div className="inline-block">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            Welcome to Car Shop
          </h1>
          <div className="h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mt-2"></div>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover your perfect ride with our curated collection of premium vehicles. 
          From luxury cars to everyday essentials, we have something special for everyone.
        </p>
        
        <div className="pt-8">
          <button className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Explore Our Cars</span>
            <svg className="relative w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>
        
        {/* Cute decorative hearts */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-4 h-4 bg-pink-300 transform rotate-45 rounded-tl-full rounded-br-full animate-pulse"></div>
          <div className="w-3 h-3 bg-rose-300 transform rotate-45 rounded-tl-full rounded-br-full animate-pulse delay-300"></div>
          <div className="w-4 h-4 bg-pink-300 transform rotate-45 rounded-tl-full rounded-br-full animate-pulse delay-700"></div>
        </div>
      </div>
    </div>

    </body>
   </html>
  );
}