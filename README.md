# Finpromptu Website

Modern, Apple-style website for Finpromptu's cloud governance and AI integration services.

## Quick Start with Docker

### Development
```bash
# Start development server
docker-compose up

# Access at http://localhost:3000
```

### Production Build & Deploy
```bash
# Build production image
docker build -f Dockerfile.production -t finpromptu-website .

# Run production container
docker run -p 80:80 finpromptu-website
```

## AWS Deployment

### Static Site (Recommended)
1. Build static export: `npm run export` (inside Docker)
2. Upload `out/` folder to S3 bucket
3. Configure CloudFront distribution
4. Point custom domain via Route 53

### Container Deployment (Alternative)
1. Push Docker image to ECR
2. Deploy to ECS Fargate or EC2
3. Configure ALB for load balancing

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions
- `Dockerfile` - Development container
- `Dockerfile.production` - Production container with nginx
- `nginx.conf` - Production nginx configuration

## Features

- ✅ Apple-inspired design
- ✅ Mobile responsive
- ✅ Static export ready
- ✅ Docker containerized
- ✅ AWS deployment ready
- 🔄 Contact form integration
- 🔄 Performance optimized