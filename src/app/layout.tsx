import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@/components/analytics'
import { ServiceWorkerRegistration } from '@/components/service-worker'
import './globals.css'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Finpromptu - Cloud Governance & AI Integration',
    template: '%s | Finpromptu'
  },
  description: 'Reduce cloud costs by 15-30% with GovernIQ governance platform, or transform your business with AI automation services. Expert solutions for SMBs.',
  keywords: [
    'cloud governance',
    'cloud cost optimization', 
    'AI integration',
    'business automation',
    'GovernIQ',
    'cloud management',
    'AWS cost reduction',
    'small business AI'
  ],
  authors: [{ name: 'Finpromptu' }],
  creator: 'Finpromptu',
  publisher: 'Finpromptu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://finpromptu.com' : 'https://dev.finpromptu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Finpromptu - Cloud Governance & AI Integration',
    description: 'Reduce cloud costs by 15-30% with GovernIQ governance platform, or transform your business with AI automation services.',
    siteName: 'Finpromptu',
    images: [
      {
        url: '/apple-touch-icon.png', // We'll add a proper OG image later
        width: 1200,
        height: 630,
        alt: 'Finpromptu - Cloud Governance & AI Integration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finpromptu - Cloud Governance & AI Integration',
    description: 'Reduce cloud costs by 15-30% with GovernIQ governance platform, or transform your business with AI automation services.',
    images: ['/apple-touch-icon.png'], // We'll add a proper Twitter image later
    creator: '@finpromptu',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        <link rel="canonical" href={process.env.NODE_ENV === 'production' ? 'https://finpromptu.com' : 'https://dev.finpromptu.com'} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Finpromptu",
              "description": "Cloud governance and AI integration solutions for modern businesses",
              "url": process.env.NODE_ENV === 'production' ? 'https://finpromptu.com' : 'https://dev.finpromptu.com',
              "logo": `${process.env.NODE_ENV === 'production' ? 'https://finpromptu.com' : 'https://dev.finpromptu.com'}/apple-touch-icon.png`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-512-222-7896",
                "contactType": "Customer Service",
                "availableLanguage": "English"
              },
              "sameAs": [
                // Add social media URLs when available
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <GoogleAnalytics />
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  )
}