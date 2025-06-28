#!/bin/bash

# Setup HTTPS/SSL for Finpromptu website using CloudFront + ACM
set -e

DOMAIN="finpromptu.com"
BUCKET_NAME="finpromptu.com"
REGION="us-east-1"

echo "🔒 Setting up HTTPS/SSL for $DOMAIN..."

# Step 1: Request SSL certificate (must be in us-east-1 for CloudFront)
echo "📜 Requesting SSL certificate..."
CERT_ARN=$(aws acm request-certificate \
    --domain-name "$DOMAIN" \
    --domain-name "www.$DOMAIN" \
    --validation-method DNS \
    --region us-east-1 \
    --query "CertificateArn" \
    --output text)

echo "✅ SSL certificate requested: $CERT_ARN"
echo ""
echo "⚠️  IMPORTANT: You need to validate the certificate in ACM"
echo "   1. Go to AWS Certificate Manager in us-east-1 region"
echo "   2. Find your certificate and click on it"
echo "   3. Add the DNS validation records to Route 53"
echo "   4. Wait for validation to complete (can take 5-30 minutes)"
echo ""
echo "   After validation, run: './create-cloudfront.sh'"