import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  Lightbulb,
  Shield,
  TrendingUp
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About <span className="text-blue-600">Finpromptu</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We&apos;re on a mission to democratize enterprise-grade technology for businesses of all sizes. 
              From cloud governance to AI automation, we make powerful tools accessible and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To bridge the technology gap between enterprise corporations and small-to-medium businesses 
                  by providing world-class cloud governance and AI solutions that are accessible, affordable, 
                  and deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  A world where every business, regardless of size, has access to enterprise-level technology 
                  and expertise to optimize their operations, reduce costs, and compete effectively in the 
                  modern digital economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">
              Founded by cloud and AI experts who saw a gap in the market
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              Finpromptu was born from a simple observation: while large enterprises had access to sophisticated 
              cloud governance and AI automation tools, small and medium businesses were often left behind due 
              to complexity, cost, and lack of expertise.
            </p>
            
            <p>
              Our founders, with decades of experience in enterprise cloud architecture and AI implementation, 
              recognized that the same principles that help Fortune 500 companies optimize their operations 
              could be adapted and made accessible to businesses of all sizes.
            </p>
            
            <p>
              Today, we serve a growing community of businesses and managed service providers who trust us to 
              deliver enterprise-grade solutions with small business sensibility. Our approach combines 
              cutting-edge technology with personalized service, ensuring every client receives the attention 
              and results they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear pricing, honest communication, and verifiable results in everything we deliver
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Results-Driven</h3>
              <p className="text-gray-600">
                We measure success by the tangible impact we have on your business operations and bottom line
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We&apos;re not just vendors - we&apos;re partners invested in your long-term success and growth
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving our solutions to leverage the latest advances in cloud and AI technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Finpromptu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine enterprise expertise with small business understanding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Proven Expertise</CardTitle>
              <CardDescription>
                Our team brings decades of enterprise cloud and AI experience, having worked with 
                Fortune 500 companies and leading technology firms.
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-4">Enterprise Security</CardTitle>
              <CardDescription>
                SOC2 Type II compliant with enterprise-grade security practices, ensuring your data 
                and operations are always protected.
              </CardDescription>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl mb-4">Personal Service</CardTitle>
              <CardDescription>
                Unlike large consulting firms, we provide personalized attention and build long-term 
                relationships with every client.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals committed to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-2">Leadership Team</CardTitle>
              <CardDescription className="mb-4">
                Our experienced leaders bring decades of enterprise cloud and AI expertise to help 
                businesses of all sizes achieve their technology goals.
              </CardDescription>
              <p className="text-sm text-gray-500">
                Detailed team information available upon request
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-2">Advisory Board</CardTitle>
              <CardDescription className="mb-4">
                Industry veterans and subject matter experts who guide our strategic direction 
                and ensure we stay at the forefront of technology trends.
              </CardDescription>
              <p className="text-sm text-gray-500">
                Including former executives from leading tech companies
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-12 w-12 text-purple-600" />
              </div>
              <CardTitle className="text-xl mb-2">Technical Team</CardTitle>
              <CardDescription className="mb-4">
                Certified cloud architects, AI specialists, and automation engineers dedicated 
                to delivering exceptional results for our clients.
              </CardDescription>
              <p className="text-sm text-gray-500">
                AWS, Azure, and GCP certified professionals
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of security and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">SOC2 Type II</h3>
              <p className="text-gray-600 text-sm">Security, availability, and confidentiality controls</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AWS Partners</h3>
              <p className="text-gray-600 text-sm">Certified cloud solution architects and specialists</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm">European data protection and privacy regulations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">HIPAA Ready</h3>
              <p className="text-gray-600 text-sm">Healthcare data protection capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help optimize your cloud infrastructure or automate your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8"
            >
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 h-11 rounded-md px-8 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}