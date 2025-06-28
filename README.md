# Finpromptu Website

Modern, Apple-style website for Finpromptu showcasing cloud governance and AI integration services.

🌐 **Production**: https://finpromptu.com  
🚧 **Staging**: https://dev.finpromptu.com  
📦 **Repository**: https://github.com/finpromptu/website

## Quick Start

### Prerequisites
- Node.js 18+
- AWS CLI configured
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

## Project Structure

```
├── src/app/                 # Next.js app router pages
│   ├── page.tsx            # Homepage
│   ├── governiq/           # GovernIQ product page
│   ├── ai-services/        # AI integration services
│   ├── about/              # Company information
│   └── contact/            # Contact forms
├── src/components/         # Reusable UI components
│   ├── navigation.tsx      # Site navigation
│   └── ui/                 # shadcn/ui components
└── .github/workflows/      # GitHub Actions CI/CD
```

## Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **SSL**: AWS Certificate Manager
- **Forms**: React Hook Form + Zod validation

## Features

### GovernIQ Platform
- Multi-cloud governance (AWS, Azure, GCP)
- 15-30% cost reduction
- MSP partnership program (30% commission)
- Cloud Custodian integration
- White-label capability

### AI Integration Services
- Customer service automation
- Business process optimization
- Marketing automation
- Data analytics and insights
- Pricing: $2,500-$5,000/month packages

## AWS Architecture

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

### Feature Development
1. **Local Development**: `npm run dev`
2. **Create Feature Branch**: `git checkout -b feature/new-page`
3. **Make Changes**: Edit components, pages, styles
4. **Test Locally**: Verify functionality and design
5. **Commit & Push**: `git push origin feature/new-page`
6. **Create PR to Dev**: Merge feature branch to `dev` for staging
7. **Review on Staging**: Test at https://dev.finpromptu.com
8. **Create PR to Main**: Merge `dev` to `main` for production
9. **Automatic Deployment**: Live at https://finpromptu.com in minutes

### Environment Flow
```
feature/branch → dev → main
     ↓           ↓      ↓
   local    staging  production
```

### Branch Strategy
- `main` - Production environment (https://finpromptu.com)
- `dev` - Staging environment (https://dev.finpromptu.com)  
- `feature/*` - Feature branches for development

## Performance

- ⚡ Static site generation
- 🚀 CloudFront CDN
- 📱 Mobile-first responsive design
- 🎨 Apple-inspired UI/UX
- 🔒 HTTPS with SSL certificate
- 📊 Core Web Vitals optimized

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## Support

For technical issues or questions:
- 📧 Email: support@finpromptu.com
- 🐛 Issues: [GitHub Issues](https://github.com/finpromptu/website/issues)
- 📚 Docs: See CLAUDE.md for detailed instructions

---

Built with ❤️ using Next.js and deployed on AWS<!-- Last updated: Sat Jun 28 13:27:06 CDT 2025 -->
