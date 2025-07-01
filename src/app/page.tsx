import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Cloud, Zap, Shield, TrendingUp, Users, Bot } from 'lucide-react'
import { Metadata } from 'next'

// Performance optimization: Export metadata separately
export const metadata: Metadata = {
  title: 'Cloud Governance & AI Integration Solutions',
  description: 'Reduce cloud costs by 15-30% with GovernIQ, or transform your business with AI automation. Expert solutions for modern companies.',
}

// Memoized icon components for better performance
const IconCloud = () => <Cloud className="h-8 w-8 text-blue-600" />
const IconBot = () => <Bot className="h-8 w-8 text-purple-600" />
const IconTrendingUp = () => <TrendingUp className="h-6 w-6 text-blue-600" />
const IconShield = () => <Shield className="h-6 w-6 text-green-600" />
const IconUsers = () => <Users className="h-6 w-6 text-purple-600" />

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Above the fold content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Cloud Governance &
            <br />
            <span className="text-blue-600">AI Integration</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Reduce cloud waste by 15-30% with GovernIQ, or transform your business with AI automation. 
            Two powerful solutions for modern companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/governiq/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-11 px-8"
              prefetch={false}
            >
              Explore GovernIQ <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/ai-services/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 h-11 px-8"
              prefetch={false}
            >
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
            <Card className="p-8 transition-transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCloud />
                </div>
                <CardTitle className="text-3xl">GovernIQ</CardTitle>
                <CardDescription className="text-lg">
                  Enterprise Cloud Governance Platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>15-30% cloud cost reduction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Multi-cloud governance & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span>MSP partner program</span>
                </div>
                <div className="pt-4">
                  <Link 
                    href="/governiq/"
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* AI Services */}
            <Card className="p-8 transition-transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconBot />
                </div>
                <CardTitle className="text-3xl">AI Integration</CardTitle>
                <CardDescription className="text-lg">
                  Small Business Automation Services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Customer service automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Business process optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Marketing & sales automation</span>
                </div>
                <div className="pt-4">
                  <Link 
                    href="/ai-services/"
                    className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why Choose Finpromptu?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconTrendingUp />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven ROI</h3>
              <p className="text-gray-600">
                Demonstrate measurable results within 30 days of implementation
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconShield />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                SOC2 compliant with enterprise-grade security and data protection
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated customer success team and MSP partner program
              </p>
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
            <Link 
              href="/contact/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-white text-blue-600 hover:bg-gray-50 h-11 px-8"
              prefetch={false}
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/about/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-white bg-transparent text-white hover:bg-white hover:text-blue-600 h-11 px-8"
              prefetch={false}
            >
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
                <li><Link href="/governiq/" className="hover:text-white transition-colors" prefetch={false}>GovernIQ</Link></li>
                <li><Link href="/ai-services/" className="hover:text-white transition-colors" prefetch={false}>AI Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about/" className="hover:text-white transition-colors" prefetch={false}>About</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition-colors" prefetch={false}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact/" className="hover:text-white transition-colors" prefetch={false}>Get Help</Link></li>
                <li><Link href="/contact/" className="hover:text-white transition-colors" prefetch={false}>Request Demo</Link></li>
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