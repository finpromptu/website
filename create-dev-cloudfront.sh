#!/bin/bash

# Create CloudFront distribution for dev.finpromptu.com
set -e

DOMAIN="dev.finpromptu.com"
BUCKET_NAME="dev.finpromptu.com"
REGION="us-east-1"
CERT_ARN="arn:aws:acm:us-east-1:029809080243:certificate/3ba11cee-1ad9-4c92-a466-eaf1186ab2c2"

echo "☁️  Creating CloudFront distribution for $DOMAIN..."

# Create CloudFront distribution configuration
cat > /tmp/dev-cloudfront-config.json << EOF
{
    "CallerReference": "dev-finpromptu-$(date +%s)",
    "Aliases": {
        "Quantity": 1,
        "Items": ["$DOMAIN"]
    },
    "DefaultRootObject": "index.html",
    "Comment": "Finpromptu dev/staging website",
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
        "DefaultTTL": 300,
        "MaxTTL": 86400,
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
DISTRIBUTION_OUTPUT=$(aws cloudfront create-distribution --distribution-config file:///tmp/dev-cloudfront-config.json)

# Extract distribution ID and domain name
DISTRIBUTION_ID=$(echo "$DISTRIBUTION_OUTPUT" | jq -r '.Distribution.Id')
CLOUDFRONT_DOMAIN=$(echo "$DISTRIBUTION_OUTPUT" | jq -r '.Distribution.DomainName')

rm /tmp/dev-cloudfront-config.json

echo ""
echo "✅ Dev CloudFront distribution created successfully!"
echo ""
echo "📋 Distribution Details:"
echo "   Distribution ID: $DISTRIBUTION_ID"
echo "   CloudFront Domain: $CLOUDFRONT_DOMAIN"
echo ""
echo "🌐 Next steps:"
echo "   1. Validate SSL certificate in ACM console"
echo "   2. Add CNAME record: $DOMAIN -> $CLOUDFRONT_DOMAIN"
echo "   3. Update GitHub Actions with distribution ID: $DISTRIBUTION_ID"