#!/bin/bash

# Create CloudFront distribution for Finpromptu website with SSL
set -e

DOMAIN="finpromptu.com"
BUCKET_NAME="finpromptu.com"
REGION="us-east-1"
CERT_ARN="arn:aws:acm:us-east-1:029809080243:certificate/8b0bbf05-56f5-4fba-bda9-ea0b5bb7ce6d"

echo "☁️  Creating CloudFront distribution for $DOMAIN..."

# Create CloudFront distribution configuration
cat > /tmp/cloudfront-config.json << EOF
{
    "CallerReference": "finpromptu-$(date +%s)",
    "Aliases": {
        "Quantity": 2,
        "Items": ["$DOMAIN", "www.$DOMAIN"]
    },
    "DefaultRootObject": "index.html",
    "Comment": "Finpromptu website with HTTPS",
    "Enabled": true,
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-$BUCKET_NAME",
                "DomainName": "$BUCKET_NAME.s3-website-$REGION.amazonaws.com",
                "CustomOriginConfig": {
                    "HTTPPort": 80,
                    "HTTPSPort": 443,
                    "OriginProtocolPolicy": "http-only"
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
        "ViewerProtocolPolicy": "redirect-to-https",
        "TrustedSigners": {
            "Enabled": false,
            "Quantity": 0
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "Compress": true
    },
    "ViewerCertificate": {
        "ACMCertificateArn": "$CERT_ARN",
        "SSLSupportMethod": "sni-only",
        "MinimumProtocolVersion": "TLSv1.2_2021"
    },
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    },
    "PriceClass": "PriceClass_100"
}
EOF

echo "🚀 Creating CloudFront distribution..."
DISTRIBUTION_OUTPUT=$(aws cloudfront create-distribution --distribution-config file:///tmp/cloudfront-config.json)

# Extract distribution ID and domain name
DISTRIBUTION_ID=$(echo "$DISTRIBUTION_OUTPUT" | jq -r '.Distribution.Id')
CLOUDFRONT_DOMAIN=$(echo "$DISTRIBUTION_OUTPUT" | jq -r '.Distribution.DomainName')

rm /tmp/cloudfront-config.json

echo ""
echo "✅ CloudFront distribution created successfully!"
echo ""
echo "📋 Distribution Details:"
echo "   Distribution ID: $DISTRIBUTION_ID"
echo "   CloudFront Domain: $CLOUDFRONT_DOMAIN"
echo ""
echo "⏳ Distribution is deploying (takes 5-15 minutes)"
echo "   You can check status with: aws cloudfront get-distribution --id $DISTRIBUTION_ID"
echo ""
echo "🌐 Next steps:"
echo "   1. Wait for distribution to deploy"
echo "   2. Update DNS to point $DOMAIN to $CLOUDFRONT_DOMAIN"
echo "   3. Your site will be available at https://$DOMAIN"
echo ""
echo "💡 To update DNS in GoDaddy:"
echo "   - Add CNAME: www.$DOMAIN -> $CLOUDFRONT_DOMAIN"
echo "   - Add A record: $DOMAIN -> CloudFront IP (or use ALIAS if available)"