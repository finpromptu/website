import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Shield, TrendingUp, Users, Cloud, CheckCircle, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            About <span className="text-blue-600">Finpromptu</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We&apos;re dedicated to helping enterprises optimize their cloud infrastructure 
            through intelligent governance and cost management solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower organizations with enterprise-grade cloud governance tools that 
                deliver measurable cost savings and operational efficiency.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that every company deserves access to the same cloud optimization 
                capabilities that Fortune 500 companies use, without the complexity and cost 
                of traditional enterprise solutions.
              </p>
              <Link href="/contact">
                <Button className="btn-enhanced">
                  Schedule a Call
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 card-hover">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">15-30%</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Average cost reduction</CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6 card-hover">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Enterprise</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Security & compliance</CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6 card-hover">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">24/7</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Expert support</CardDescription>
                </CardContent>
              </Card>
              <Card className="p-6 card-hover">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cloud className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-lg">Multi-Cloud</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Platform support</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every solution we build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Measurable Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  We focus on delivering quantifiable cost savings and efficiency gains 
                  that directly impact your bottom line.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-8 card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Security and compliance are built into every aspect of our platform, 
                  ensuring your data and infrastructure remain protected.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="p-8 card-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Customer Success</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Your success is our success. We provide dedicated support and work 
                  closely with you to achieve your cloud optimization goals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep knowledge in cloud governance, cost optimization, and enterprise infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cloud Cost Optimization</h3>
                  <p className="text-gray-600">
                    Advanced analytics and automation to identify and eliminate cloud waste, 
                    reducing costs by 15-30% on average.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Multi-Cloud Governance</h3>
                  <p className="text-gray-600">
                    Unified governance across AWS, Azure, and Google Cloud with consistent 
                    policies and compliance management.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Resource Management</h3>
                  <p className="text-gray-600">
                    Intelligent resource tagging, allocation tracking, and automated 
                    optimization recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compliance & Security</h3>
                  <p className="text-gray-600">
                    SOC2 compliant platform with enterprise-grade security features and 
                    comprehensive audit trails.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">MSP Partnerships</h3>
                  <p className="text-gray-600">
                    Dedicated partner program for Managed Service Providers to deliver 
                    cloud governance services to their clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous monitoring and alerting with actionable insights and 
                    automated response capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the companies already saving millions with our cloud governance platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="btn-enhanced">
                Schedule a Demo
              </Button>
            </Link>
            <Link href="/governiq">
              <Button variant="outline" className="btn-enhanced border-white text-white hover:bg-white hover:text-blue-600">
                Learn About GovernIQ
              </Button>
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
                Enterprise cloud governance and cost optimization solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/governiq" className="hover:text-white">GovernIQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}