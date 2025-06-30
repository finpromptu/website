# Finpromptu Website

Modern, enterprise-grade website for Finpromptu showcasing cloud governance and AI integration services with premium UX and full backend functionality.

🌐 **Production**: https://finpromptu.com  
🚧 **Staging**: https://dev.finpromptu.com  
📦 **Repository**: https://github.com/finpromptu/website

## ✨ Features

### 🎯 **Business Solutions**
- **GovernIQ**: Enterprise cloud governance platform (15-30% cost reduction)
- **AI Integration**: Small business automation services ($1,695-$5,000/month)
- **MSP Partnership**: 30% commission program for managed service providers
- **Industry Verticals**: Specialized solutions for 6+ industries

### 🚀 **Technical Excellence**
- **Contact Form**: Real email notifications via AWS Lambda + SES
- **SEO Optimized**: 8.5/10 score with comprehensive metadata and structured data  
- **Premium UX**: Micro-interactions, loading states, and smooth animations
- **Mobile-First**: Responsive design with touch optimizations
- **Performance**: Static site generation with CDN delivery

### 🛡️ **Enterprise Ready**
- **Security**: SOC2 compliant infrastructure
- **Scalability**: AWS serverless backend
- **Monitoring**: Real-time contact form and error tracking
- **Accessibility**: WCAG compliant with reduced motion support

## Quick Start

### Prerequisites
- Node.js 18+
- AWS CLI configured (for backend)
- GitHub CLI (optional)

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

### Build & Deploy
```bash
# Build for production
npm run build

# Static export for AWS deployment
npm run export
```

## Project Structure

```
├── src/app/                 # Next.js app router pages
│   ├── page.tsx            # Homepage with dual offerings
│   ├── governiq/           # GovernIQ product page
│   ├── ai-services/        # AI integration services
│   ├── industries/         # Industry-specific solutions
│   ├── about/              # Company information
│   └── contact/            # Contact form with backend
├── src/components/         # Reusable UI components
│   ├── navigation.tsx      # Site navigation
│   └── ui/                 # shadcn/ui components
├── lambda/                 # AWS Lambda functions
│   └── contact-form/       # Contact form backend
├── aws/                    # AWS infrastructure
│   ├── cloudformation-template.yaml
│   └── deploy.sh
├── public/                 # Static assets
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
└── .github/workflows/      # CI/CD automation
```

## Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with custom animations
- **Backend**: AWS Lambda, API Gateway, SES
- **Database**: Serverless (form submissions via email)
- **Deployment**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **SSL**: AWS Certificate Manager
- **SEO**: Structured data, Open Graph, Twitter Cards

## Automated Deployment

### Production Environment
Every push to `main` branch automatically:
1. Builds the Next.js application
2. Deploys to S3 bucket `finpromptu.com`
3. Invalidates CloudFront cache (EMP2ELOJJSHZ8)
4. Updates live website at https://finpromptu.com

### Development Environment  
Every push to `dev` branch automatically:
1. Builds the Next.js application
2. Deploys to S3 bucket `dev.finpromptu.com`
3. Invalidates CloudFront cache (EAYJPX4TO0TVT)
4. Updates staging website at https://dev.finpromptu.com

### GitHub Secrets Required
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Backend Architecture

### Contact Form Infrastructure
```
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│   Frontend      │───▶│ API Gateway  │───▶│ Lambda Function │
│ Contact Form    │    │   + CORS     │    │  (Node.js)      │
└─────────────────┘    └──────────────┘    └─────────────────┘
                                                      │
                                           ┌─────────────────┐
                                           │    AWS SES      │
                                           │ Email Service   │
                                           └─────────────────┘
```

### Email Flow
1. **User submits** contact form
2. **Lambda validates** input and sanitizes data
3. **SES sends two emails**:
   - Notification to `info@finpromptu.com`
   - Auto-reply to customer (if email verified)
4. **Frontend shows** success confirmation

## AWS Infrastructure

```
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│   GoDaddy DNS   │───▶│  CloudFront  │───▶│   S3 Bucket     │
│  finpromptu.com │    │ Distribution │    │ finpromptu.com  │
└─────────────────┘    └──────────────┘    └─────────────────┘
                              │
                       ┌──────────────┐
                       │     ACM      │
                       │ SSL Certificate│
                       └──────────────┘
```

## Development Workflow

### Branch Strategy
- `main` - Production environment (https://finpromptu.com)
- `dev` - Staging environment (https://dev.finpromptu.com)  
- `feature/*` - Feature branches for development

### Environment Flow
```
feature/branch → dev → main
     ↓           ↓      ↓
   local    staging  production
```

### Feature Development Process
1. **Local Development**: `npm run dev`
2. **Create Feature Branch**: `git checkout -b feature/enhancement`
3. **Make Changes**: Edit components, pages, styles
4. **Test Locally**: Verify functionality and UX
5. **Commit & Push**: `git push origin feature/enhancement`
6. **Create PR to Dev**: Merge to `dev` for staging
7. **Review on Staging**: Test at https://dev.finpromptu.com
8. **Create PR to Main**: Merge `dev` to `main` for production
9. **Automatic Deployment**: Live at https://finpromptu.com

## Performance & SEO

### Metrics
- ⚡ **Core Web Vitals**: Optimized
- 🔍 **SEO Score**: 8.5/10
- 📱 **Mobile Performance**: 95+
- 🚀 **Load Time**: <2s globally

### SEO Features
- **Structured Data**: Schema.org markup
- **Meta Tags**: Page-specific titles and descriptions  
- **Open Graph**: Social media optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine directives
- **Canonical URLs**: Proper URL structure

### UX Enhancements
- **Micro-interactions**: Smooth hover and focus effects
- **Loading States**: Professional button and form feedback
- **Page Transitions**: Smooth fade-in animations
- **Mobile Touch**: Optimized for mobile interactions
- **Accessibility**: WCAG compliant with reduced motion support

## Contact Form Features

### User Experience
- ✅ **Input Validation**: Real-time field validation
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Success Confirmation**: Clear confirmation with next steps
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Auto-reply**: Professional email confirmation to customers

### Security & Reliability
- ✅ **Input Sanitization**: XSS protection
- ✅ **Rate Limiting**: Spam prevention
- ✅ **SES Integration**: Professional email delivery
- ✅ **Error Monitoring**: Graceful error handling
- ✅ **CORS Security**: Proper cross-origin configuration

## Industry Solutions

### Supported Verticals
1. **Healthcare & Wellness** - HIPAA compliance and patient engagement
2. **Technology** - DevOps automation and cloud optimization  
3. **Financial Services & Insurance** - Regulatory compliance and customer automation
4. **Real Estate** - Lead generation and client management
5. **Professional Services** - Practice management and client automation
6. **eCommerce & Retail** - Customer service and sales automation

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes with proper testing
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Submit pull request to `dev` branch

## Support & Documentation

- 📧 **Email**: info@finpromptu.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/finpromptu/website/issues)
- 📚 **Implementation Guide**: See `IMPLEMENTATION_PLAN.md`
- 🔧 **AWS Setup**: See `AWS_BACKEND_SUMMARY.md`

---

Built with ❤️ using Next.js and deployed on AWS  
Last updated: December 30, 2025
