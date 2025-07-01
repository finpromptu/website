'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Google Analytics configuration
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX' // Replace with actual GA4 ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
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

// Google Analytics component with optimized loading
export function GoogleAnalytics() {
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Only load GA in production and if ID is configured
  if (!isProduction || GA_TRACKING_ID === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      {/* Load GA script with worker strategy for better performance */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="worker"
        onLoad={() => {
          // Initialize gtag only after script loads
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', GA_TRACKING_ID, {
            page_path: window.location.pathname,
            anonymize_ip: true,
            send_page_view: false, // We'll handle this manually
          });
        }}
        onError={(e) => {
          console.warn('Google Analytics failed to load:', e);
        }}
      />
    </>
  )
}

// Optimized hook for tracking page views
export function usePageTracking() {
  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV !== 'production') return

    const handleRouteChange = (url: string) => {
      // Add delay to ensure gtag is available
      setTimeout(() => pageview(url), 100)
    }

    // Track initial page view
    setTimeout(() => pageview(window.location.pathname), 100)

    // For Next.js app router, we'd need to implement custom route tracking
    // This would require additional setup with usePathname hook
    
  }, [])
} 