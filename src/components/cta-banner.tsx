"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const CTA_BANNER_KEY = "ctaBannerDismissed";

export default function CTABanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVisible(!localStorage.getItem(CTA_BANNER_KEY));
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(CTA_BANNER_KEY, "true");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" onClick={handleDismiss} />
      {/* Modal Banner */}
      <div className="relative pointer-events-auto max-w-lg w-full bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col items-center gap-6 p-8 animate-fade-in mx-4">
        <button
          aria-label="Dismiss banner"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Supercharge Your Business with AI!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Chatbots that engage. Workflows that save time.
          </p>
          <p className="text-2xl md:text-3xl mt-2" role="img" aria-label="Let's automate your growth">
            <span className="mr-2">👉</span> Let&apos;s automate your growth.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 text-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 