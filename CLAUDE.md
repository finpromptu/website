# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern, Apple-style website for Finpromptu showcasing two main offerings:
1. **GovernIQ** - Enterprise cloud governance platform competing with Stacklet
2. **AI Integration Services** - Small business automation solutions

## Technology Stack

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, shadcn/ui components
- **Development**: Local Node.js environment
- **Deployment**: Static site export for AWS S3 + CloudFront
- **Contact Forms**: AWS Lambda + SES for email processing
- **Styling**: Apple-inspired design with clean typography and modern UI

## Development Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000

# Build for production
npm run build

# Static export for AWS deployment
npm run export
```

### AWS Deployment
```bash
# Deploy to S3 (us-east-1)
./deploy.sh

# Setup SSL certificate
./setup-ssl.sh

# Create CloudFront distribution
./create-cloudfront.sh

# Setup custom domain
./setup-domain.sh
```

## Project Structure

- `/src/app` - Next.js app router pages
  - `page.tsx` - Homepage with hero section and offerings overview
  - `governiq/page.tsx` - GovernIQ product page with MSP program details
  - `ai-services/page.tsx` - AI integration services with pricing packages
  - `about/page.tsx` - Company information and team details
  - `contact/page.tsx` - Contact forms with validation and submission
- `/src/components` - Reusable UI components
  - `navigation.tsx` - Site navigation with responsive design
  - `/ui` - shadcn/ui components (Button, Card, Input, Textarea)
- `/aws-lambda` - Contact form processing Lambda function
- `deploy.sh` - S3 deployment script
- `setup-ssl.sh` - SSL certificate setup
- `create-cloudfront.sh` - CloudFront distribution creation
- `setup-domain.sh` - Custom domain configuration

## Key Features

### GovernIQ Platform
- Positions as Stacklet competitor
- Emphasizes 15-30% cost reduction
- MSP partnership program with 30% commission
- Multi-cloud governance (AWS, Azure, GCP)
- Cloud Custodian integration
- White-label capability for MSPs

### AI Integration Services
- SMB-focused automation solutions
- Customer service automation
- Business process optimization
- Marketing automation
- Data analytics and insights
- Document processing
- Pricing: $2,500-$5,000/month packages

## Design Principles

- **Apple-inspired**: Clean, minimal, sophisticated aesthetics
- **Mobile-first**: Responsive design for all screen sizes
- **Performance**: Optimized for fast loading and SEO
- **Conversion-focused**: Clear CTAs throughout
- **Professional**: Enterprise-grade appearance while remaining approachable

## AWS Deployment Architecture

### Simple Static Hosting (Recommended)
1. Next.js static export (`npm run export`)
2. Upload `out/` folder to S3 bucket
3. CloudFront distribution for CDN
4. Route 53 for custom domain
5. Lambda function for contact form processing

### Contact Form Integration
- React Hook Form with Zod validation
- AWS Lambda function handles submissions
- SES sends emails to team and confirmation to users
- Includes spam protection and error handling

## Content Strategy

- **Value Proposition**: Cost optimization and business automation
- **Target Audience**: SMBs, MSPs, enterprise IT teams
- **Messaging**: Professional, results-focused, transparent pricing
- **Social Proof**: ROI examples, success stories, industry credentials

## Development Notes

- All pages use shadcn/ui components for consistency
- Contact form includes proper validation and error handling
- Navigation is responsive with mobile menu consideration
- All images should be optimized for web (Next.js Image component)
- Color scheme: Blue primary, purple for AI services, green for success states

## Maintenance

- Static site requires minimal maintenance
- Lambda function should be monitored for email delivery
- Regular content updates for case studies and testimonials
- Monitor Core Web Vitals for performance optimization