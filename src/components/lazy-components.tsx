'use client'

import React, { Suspense } from 'react'

// Loading component for suspense fallback
export function ComponentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  )
}

// Wrapper component for lazy loading with suspense
export function LazyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<ComponentSkeleton />}>
      {children}
    </Suspense>
  )
}

// Intersection Observer hook for lazy loading
export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, options])

  return isIntersecting
}