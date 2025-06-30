'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Google Analytics configuration
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX' // Replace with actual GA4 ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Google Analytics component
export function GoogleAnalytics() {
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Only load GA in production
  if (!isProduction || GA_TRACKING_ID === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
            });
          `,
        }}
      />
    </>
  )
}

// Hook for tracking page views in Next.js
export function usePageTracking() {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    // Track initial page view
    pageview(window.location.pathname)

    // For Next.js router, you would add:
    // router.events.on('routeChangeComplete', handleRouteChange)
    // return () => router.events.off('routeChangeComplete', handleRouteChange)
    
  }, [])
} 