// Configuration for Finpromptu website

export const config = {
  // Contact Form API endpoint
  // Update this after deploying the AWS Lambda function
  contactApiUrl: process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/contact',
  
  // Enable debug logging
  debug: process.env.NEXT_PUBLIC_DEBUG === 'true',
  
  // Contact information
  contact: {
    phone: '(512) 222-7896',
    email: 'info@finpromptu.com',
    businessHours: '8:00 AM - 5:00 PM CST'
  }
} 