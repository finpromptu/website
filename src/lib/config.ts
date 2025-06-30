// Configuration for Finpromptu website

export const config = {
  // API Configuration
  api: {
    // Replace YOUR_API_ID with your actual API Gateway ID
    contactFormEndpoint: process.env.NODE_ENV === 'production' 
      ? 'https://qwg4qpgakb.execute-api.us-east-1.amazonaws.com/prod/contact'
      : 'https://qwg4qpgakb.execute-api.us-east-1.amazonaws.com/prod/contact',
  },
  
  // Feature flags
  features: {
    enableContactForm: true,
    enableAnalytics: false,
  },
  
  // Contact information
  contact: {
    phone: '(512) 222-7896',
    email: 'info@finpromptu.com',
    hours: '8:00 AM - 5:00 PM CST',
  },
} 
