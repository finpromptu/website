#!/bin/bash

# Setup custom domain for Finpromptu website
set -e

DOMAIN="finpromptu.com"
BUCKET_NAME="finpromptu.com"
REGION="us-east-1"

echo "🌐 Setting up custom domain for $DOMAIN..."

# Step 1: Get the hosted zone ID for your domain
echo "📋 Finding Route 53 hosted zone for $DOMAIN..."
HOSTED_ZONE_ID=$(aws route53 list-hosted-zones-by-name --dns-name "$DOMAIN" --query "HostedZones[0].Id" --output text | cut -d'/' -f3)

if [ "$HOSTED_ZONE_ID" = "None" ] || [ -z "$HOSTED_ZONE_ID" ]; then
    echo "❌ No hosted zone found for $DOMAIN"
    echo "   Please ensure your domain is configured in Route 53"
    exit 1
fi

echo "✅ Found hosted zone: $HOSTED_ZONE_ID"

# Step 2: Create Route 53 record to point to S3 website
echo "🔗 Creating Route 53 A record..."
cat > /tmp/route53-change.json << EOF
{
    "Changes": [
        {
            "Action": "UPSERT",
            "ResourceRecordSet": {
                "Name": "$DOMAIN",
                "Type": "A",
                "AliasTarget": {
                    "DNSName": "s3-website-$REGION.amazonaws.com",
                    "EvaluateTargetHealth": false,
                    "HostedZoneId": "Z3AQBSTGFYJSTF"
                }
            }
        }
    ]
}
EOF

aws route53 change-resource-record-sets \
    --hosted-zone-id "$HOSTED_ZONE_ID" \
    --change-batch file:///tmp/route53-change.json

rm /tmp/route53-change.json

echo ""
echo "✅ Domain setup completed!"
echo ""
echo "📋 Your website will be accessible at:"
echo "   http://$DOMAIN (may take 5-10 minutes to propagate)"
echo ""
echo "🔒 For HTTPS/SSL, you'll need to:"
echo "   1. Create an SSL certificate in ACM (Certificate Manager)"
echo "   2. Set up CloudFront distribution"
echo "   3. Update Route 53 to point to CloudFront"
echo ""
echo "   Run './setup-ssl.sh' to automate HTTPS setup"