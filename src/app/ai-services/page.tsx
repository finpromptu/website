import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  ArrowRight, 
  Bot, 
  MessageSquare, 
  TrendingUp, 
  Mail, 
  FileText, 
  Calendar,
  Users,
  BarChart3,
  CheckCircle,
  Zap,
  Target,
  Clock,
  DollarSign
} from 'lucide-react'

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              <span className="text-purple-600">AI Integration</span>
              <br />
              for Small Business
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation. From customer service to marketing, 
              we help SMBs leverage AI to compete with enterprise-level efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Free AI Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions Tailored for SMBs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on practical AI implementations that deliver immediate ROI for small and medium businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Service Automation */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Customer Service Automation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">AI chatbots & virtual assistants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Ticket routing & prioritization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sentiment analysis & escalation</span>
                </div>
              </CardContent>
            </Card>

            {/* Business Process Automation */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Process Automation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Data entry & verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Invoice processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Appointment scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Workflow optimization</span>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Automation */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Marketing Automation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Email campaign optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Content generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Lead scoring & nurturing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Social media management</span>
                </div>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-yellow-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Data Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Business intelligence dashboards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Predictive analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Customer behavior analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Performance optimization</span>
                </div>
              </CardContent>
            </Card>

            {/* Document Processing */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Document Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Intelligent document parsing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Contract analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Automated data extraction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Compliance monitoring</span>
                </div>
              </CardContent>
            </Card>

            {/* Sales Optimization */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Sales Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Lead qualification automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Sales forecasting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">CRM integration</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why SMBs Choose Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and budget constraints of small businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                Affordable solutions that deliver immediate ROI without enterprise-level complexity or cost
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick Implementation</h3>
              <p className="text-gray-600">
                Most solutions deployed within 2-4 weeks with minimal disruption to your current operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Dedicated support team that understands small business needs and provides hands-on assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right level of AI automation for your business size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <CardDescription className="text-lg">Perfect for small businesses just starting with AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">$2,500</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic chatbot implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Email automation setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Simple data analytics dashboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic training & support</span>
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="p-8 border-2 border-blue-600 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Professional</CardTitle>
                <CardDescription className="text-lg">Comprehensive AI automation for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">$5,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced customer service automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Marketing automation & lead scoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Business process automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Priority support & training</span>
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Get Started
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-lg">Full AI transformation for established businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-gray-600 block">Pricing</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Complete AI automation suite</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Custom AI model development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 premium support</span>
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Contact Sales
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other small businesses have transformed their operations with AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local Insurance Agency</h3>
                    <p className="text-gray-600">50 employees</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;AI chatbot handles 80% of customer inquiries automatically, freeing up our team for complex cases. 
                  Customer satisfaction increased 25% while reducing response time from hours to minutes.&quot;
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">80%</span>
                      <p className="text-sm text-gray-600">Queries automated</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-green-600">25%</span>
                      <p className="text-sm text-gray-600">Satisfaction increase</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-commerce Retailer</h3>
                    <p className="text-gray-600">25 employees</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  &quot;Marketing automation and predictive analytics helped us increase conversion rates by 40% 
                  and reduce manual work by 60%. ROI was evident within the first month.&quot;
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">40%</span>
                      <p className="text-sm text-gray-600">Conversion increase</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-green-600">60%</span>
                      <p className="text-sm text-gray-600">Manual work reduced</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free AI readiness assessment and discover opportunities for automation in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
            >
              Free AI Assessment
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-white border-white hover:bg-white hover:text-purple-600"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}