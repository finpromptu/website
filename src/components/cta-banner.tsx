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
    <div
      className="fixed bottom-0 left-0 w-full z-50 flex justify-center px-4 pb-4 pointer-events-none"
      role="region"
      aria-label="Call to action banner"
    >
      <div className="pointer-events-auto max-w-3xl w-full bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-4 p-6 md:p-8 animate-fade-in">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold mb-1 text-gray-900 dark:text-white">
            Chatbot and Workflow Automation Services for SMBs
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            We help small and medium-sized businesses enhance customer engagement and streamline operations with custom chatbot and workflow automation solutions. Our chatbots handle common customer inquiries, lead capture, and support requests 24/7, reducing workload and improving response times. Our workflow automation services integrate your existing tools to eliminate repetitive tasks, ensure consistency, and boost productivity. Whether you're looking to improve customer experience or optimize internal processes, we provide tailored solutions that grow with your business.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            Contact Us
          </Link>
          <button
            aria-label="Dismiss banner"
            onClick={handleDismiss}
            className="ml-0 md:ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 