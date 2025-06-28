import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Building,
  Bot
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Ready to optimize your cloud infrastructure or automate your business with AI? 
              Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" action="mailto:info@finpromptu.com" method="get">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="governiq">GovernIQ - Cloud Governance</option>
                      <option value="ai-services">AI Integration Services</option>
                      <option value="msp-partnership">MSP Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="body"
                      placeholder="Tell us about your needs and how we can help..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button type="submit" className="w-full">
                      Send Email
                    </Button>
                    <Link 
                      href="tel:+15551234567"
                      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 h-10 px-4 py-2"
                    >
                      Call Us: (555) 123-4567
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Get in touch with us directly or schedule a call
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <Link href="mailto:info@finpromptu.com" className="hover:text-blue-600">
                      info@finpromptu.com
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <Link href="tel:+15551234567" className="hover:text-blue-600">
                      +1 (555) 123-4567
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>United States</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                  <CardDescription>
                    Learn more about our specific offerings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">GovernIQ Demo</p>
                      <p className="text-sm text-gray-600">Schedule a demo of our cloud governance platform</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bot className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">AI Assessment</p>
                      <p className="text-sm text-gray-600">Free AI readiness assessment for your business</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">MSP Partnership</p>
                      <p className="text-sm text-gray-600">Learn about our partner program benefits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-blue-50">
                <CardContent className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-blue-600 font-medium text-2xl mb-2">&lt; 24 hours</p>
                  <p className="text-sm text-gray-600">
                    We typically respond to all inquiries within one business day
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can we see results with GovernIQ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most customers see measurable cost savings within 30 days of implementation. 
                  Our goal is to demonstrate clear ROI within the first 3 months.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s included in the AI Integration services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our AI services include consultation, implementation, training, and ongoing support. 
                  We customize each solution based on your specific business needs and industry requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer free trials or assessments?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We offer free AI readiness assessments and GovernIQ pilots to help you understand 
                  the potential value before making a commitment.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-lg">How does the MSP partnership program work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  MSP partners earn 30% commission on verified customer cost savings, get white-label portals, 
                  and receive dedicated support. Contact us to learn about qualification requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}