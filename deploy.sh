#!/bin/bash

# Production deployment script for Finpromptu website
set -e

BUCKET_NAME="finpromptu.com"
REGION="us-east-1"

echo "🚀 Starting Finpromptu website deployment..."
echo "   Region: $REGION"
echo "   Bucket: $BUCKET_NAME"
echo ""

# Build the Next.js application
echo "🏗️  Building Next.js application..."
npm run build

echo "✅ Build completed successfully"

# Create S3 bucket
echo "🪣 Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION 2>/dev/null || echo "   Bucket already exists"

# Configure public access
echo "🔓 Configuring bucket for public access..."
aws s3api put-public-access-block \
    --bucket $BUCKET_NAME \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Configure static website hosting
echo "🌐 Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Wait for configuration to take effect
sleep 5

# Set bucket policy for public read access
echo "🔐 Setting bucket policy..."
cat > /tmp/bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file:///tmp/bucket-policy.json
rm /tmp/bucket-policy.json

# Upload the built website
echo "📤 Uploading website files..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📋 Website URLs:"
echo "   S3 Website: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "   S3 Direct:  https://$BUCKET_NAME.s3.$REGION.amazonaws.com/index.html"
echo ""
echo "✅ Your Finpromptu website is now live!"