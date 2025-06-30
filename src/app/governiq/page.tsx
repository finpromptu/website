import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  ArrowRight, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  CheckCircle, 
  Award,
  BarChart3,
  Globe,
  Settings,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'GovernIQ - Cloud Governance Platform | Reduce Cloud Costs 15-30%',
  description: 'Enterprise cloud governance platform that reduces AWS, Azure & GCP costs by 15-30%. Built for MSPs with 30% commission on verified savings. Request demo today.',
  keywords: [
    'cloud governance',
    'cloud cost optimization',
    'GovernIQ',
    'AWS cost reduction',
    'Azure cost optimization',
    'GCP governance',
    'MSP cloud services',
    'cloud custodian',
    'multi-cloud governance',
    'enterprise cloud management'
  ],
  openGraph: {
    title: 'GovernIQ - Cloud Governance Platform | Reduce Cloud Costs 15-30%',
    description: 'Enterprise cloud governance platform that reduces AWS, Azure & GCP costs by 15-30%. Built for MSPs with 30% commission on verified savings.',
    url: '/governiq',
    type: 'website',
  },
  twitter: {
    title: 'GovernIQ - Cloud Governance Platform | Reduce Cloud Costs 15-30%',
    description: 'Enterprise cloud governance platform that reduces AWS, Azure & GCP costs by 15-30%. Built for MSPs with 30% commission on verified savings.',
  },
  alternates: {
    canonical: '/governiq',
  },
}

export default function GovernIQPage() {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="text-blue-600">GovernIQ</span>
              <br />
              Cloud Governance Platform
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Enterprise-grade cloud governance that reduces waste by 15-30% through automated policy enforcement. 
              Built for MSPs and direct customers with multi-cloud support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 h-11 rounded-md px-8"
              >
                MSP Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why GovernIQ Outperforms Stacklet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for MSPs with transparent pricing and superior cost optimization results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-4">15-30% Cost Reduction</CardTitle>
              <CardDescription>
                Proven cost optimization results with verified savings tracking and ROI guarantee within 3 months
              </CardDescription>
            </Card>

            <Card className="p-6 text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl mb-4">MSP-First Design</CardTitle>
              <CardDescription>
                Built specifically for MSPs with white-label capability, commission tracking, and customer isolation
              </CardDescription>
            </Card>

            <Card className="p-6 text-center card-hover">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl mb-4">Transparent Pricing</CardTitle>
              <CardDescription>
                Clear cost savings sharing model with no hidden fees. MSPs earn 30% of verified customer savings
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for comprehensive cloud governance across AWS, Azure, and GCP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multi-Cloud Support */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Multi-Cloud Governance</h3>
                <p className="text-gray-600">Unified policy management across AWS, Azure, and Google Cloud Platform</p>
              </div>
            </div>

            {/* Cloud Custodian Integration */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cloud Custodian Engine</h3>
                <p className="text-gray-600">Powered by the industry-standard Cloud Custodian for reliable policy enforcement</p>
              </div>
            </div>

            {/* Real-time Monitoring */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-gray-600">Continuous compliance monitoring with instant alerts and remediation</p>
              </div>
            </div>

            {/* Cost Analytics */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Detailed cost optimization reports with trend analysis and forecasting</p>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">SOC2 Type II compliant with comprehensive audit trails and data encryption</p>
              </div>
            </div>

            {/* API Integration */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">API & Integrations</h3>
                <p className="text-gray-600">RESTful APIs and webhooks for seamless integration with existing tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSP Program */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                MSP Partner Program
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Build a profitable cloud governance practice with GovernIQ&apos;s comprehensive MSP program.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Earn 30% commission on verified customer cost savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>White-label customer portals with your branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Dedicated partner success manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Co-marketing opportunities and joint sales support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Comprehensive training and certification program</span>
                </div>
              </div>

              <Link 
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
              >
                Become an MSP Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Revenue Sharing Model</CardTitle>
                <CardDescription>Transparent and fair commission structure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">MSP Managed Customers</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Customer Keeps</span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MSP Commission</span>
                      <span className="font-semibold text-blue-600">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finpromptu Platform</span>
                      <span className="font-semibold text-gray-600">10%</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg mb-2">Direct Customers</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Customer Keeps</span>
                      <span className="font-semibold text-green-600">70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finpromptu Platform</span>
                      <span className="font-semibold text-gray-600">30%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven ROI & Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our customers typically see ROI within 3 months with measurable cost savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator Example</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Cloud Spend</span>
                  <span className="font-semibold">$100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Waste Reduction</span>
                  <span className="font-semibold text-green-600">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Savings</span>
                  <span className="font-semibold text-green-600">$25,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Savings</span>
                    <span className="font-bold text-green-600 text-xl">$300,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Discovery Call</h4>
                    <p className="text-gray-600">Assess your cloud infrastructure and identify optimization opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Pilot Implementation</h4>
                    <p className="text-gray-600">30-day pilot program to demonstrate immediate value and ROI</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Full Deployment</h4>
                    <p className="text-gray-600">Complete governance implementation with ongoing optimization</p>
                  </div>
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
            Ready to Reduce Cloud Waste by 30%?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading enterprises and MSPs who trust GovernIQ for cloud governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
            >
              Schedule Demo
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-white text-blue-600 hover:bg-white hover:text-blue-700 h-11 rounded-md px-8"
            >
              MSP Partnership Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}