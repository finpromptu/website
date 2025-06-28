import { SimpleNavigation } from '@/components/simple-navigation'
import Link from 'next/link'

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Cloud Governance &
            <br />
            <span className="text-blue-600">AI Integration</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Reduce cloud waste by 15-30% with GovernIQ, or transform your business with AI automation. 
            Two powerful solutions for modern companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Explore GovernIQ
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
              AI Integration Services
            </Link>
          </div>
        </div>
      </section>

      {/* Two Main Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* GovernIQ */}
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.4 4.4 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">GovernIQ</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Enterprise Cloud Governance Platform
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>15-30% cloud cost reduction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-cloud governance & compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>MSP partner program</span>
                  </div>
                </div>

                <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>

            {/* AI Services */}
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Integration</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Small Business Automation Services
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Customer service automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Business process optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Marketing & sales automation</span>
                  </div>
                </div>

                <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you need cloud governance or AI automation, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-white text-blue-600 hover:bg-gray-50 transition-colors">
              Schedule a Demo
            </Link>
            <Link href="/contact/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 border border-white text-white hover:bg-blue-700 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Finpromptu</h3>
              <p className="text-gray-400">
                Cloud governance and AI integration solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact/" className="hover:text-white">GovernIQ</Link></li>
                <li><Link href="/contact/" className="hover:text-white">AI Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact/" className="hover:text-white">About</Link></li>
                <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact/" className="hover:text-white">Get Help</Link></li>
                <li><Link href="/contact/" className="hover:text-white">Request Demo</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Finpromptu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}