#!/bin/bash

# Complete API Gateway Setup Script
# Replace YOUR_API_ID with the actual API ID from: aws apigateway get-rest-apis --region us-east-1

echo "🚀 Completing Finpromptu Contact Form API Setup"

# Configuration
API_ID="qwg4qpgakb"  # ← Replace this with your actual API ID
ACCOUNT_ID="029809080243"
REGION="us-east-1"
LAMBDA_FUNCTION_ARN="arn:aws:lambda:${REGION}:${ACCOUNT_ID}:function:finpromptu-contact-form"

if [ "$API_ID" = "YOUR_API_ID" ]; then
    echo "❌ Please replace YOUR_API_ID with your actual API Gateway ID"
    echo "Run: aws apigateway get-rest-apis --region us-east-1"
    exit 1
fi

echo "📋 Using API ID: $API_ID"

# Step 1: Get root resource ID
echo "🔍 Getting root resource..."
ROOT_RESOURCE_ID=$(aws apigateway get-resources --rest-api-id $API_ID --region $REGION --query 'items[?path==`/`].id' --output text)
echo "✅ Root resource ID: $ROOT_RESOURCE_ID"

# Step 2: Create /contact resource
echo "🔨 Creating /contact resource..."
CONTACT_RESOURCE_ID=$(aws apigateway create-resource \
  --rest-api-id $API_ID \
  --parent-id $ROOT_RESOURCE_ID \
  --path-part contact \
  --region $REGION \
  --query 'id' --output text)
echo "✅ Contact resource ID: $CONTACT_RESOURCE_ID"

# Step 3: Create POST method
echo "🔨 Creating POST method..."
aws apigateway put-method \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method POST \
  --authorization-type NONE \
  --region $REGION

# Step 4: Create OPTIONS method (CORS)
echo "🔨 Creating OPTIONS method..."
aws apigateway put-method \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method OPTIONS \
  --authorization-type NONE \
  --region $REGION

# Step 5: Lambda integration
echo "🔗 Setting up Lambda integration..."
aws apigateway put-integration \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method POST \
  --type AWS_PROXY \
  --integration-http-method POST \
  --uri "arn:aws:apigateway:${REGION}:lambda:path/2015-03-31/functions/${LAMBDA_FUNCTION_ARN}/invocations" \
  --region $REGION

# Step 6: CORS integration
echo "🔗 Setting up CORS..."
aws apigateway put-integration \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method OPTIONS \
  --type MOCK \
  --region $REGION

# Step 7: CORS method response
aws apigateway put-method-response \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method OPTIONS \
  --status-code 200 \
  --response-parameters method.response.header.Access-Control-Allow-Headers=false,method.response.header.Access-Control-Allow-Methods=false,method.response.header.Access-Control-Allow-Origin=false \
  --region $REGION

# Step 8: CORS integration response
aws apigateway put-integration-response \
  --rest-api-id $API_ID \
  --resource-id $CONTACT_RESOURCE_ID \
  --http-method OPTIONS \
  --status-code 200 \
  --response-parameters '{"method.response.header.Access-Control-Allow-Headers":"'\''Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'\''","method.response.header.Access-Control-Allow-Methods":"'\''GET,OPTIONS,POST'\''","method.response.header.Access-Control-Allow-Origin":"'\''*'\''"} ' \
  --region $REGION

# Step 9: Add Lambda permission
echo "🔐 Adding Lambda permission..."
aws lambda add-permission \
  --function-name finpromptu-contact-form \
  --statement-id allow-api-gateway-${API_ID} \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --source-arn "arn:aws:execute-api:${REGION}:${ACCOUNT_ID}:${API_ID}/*/*" \
  --region $REGION

# Step 10: Deploy API
echo "🚀 Deploying API..."
aws apigateway create-deployment \
  --rest-api-id $API_ID \
  --stage-name prod \
  --region $REGION

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "📋 Your API endpoint is:"
echo "https://${API_ID}.execute-api.${REGION}.amazonaws.com/prod/contact"
echo ""
echo "📝 Next steps:"
echo "1. Update src/lib/config.ts with your API ID"
echo "2. Test the contact form on your website"
echo "3. Check SES email verification (click links in verification emails)"
echo ""
echo "🧪 Test your API:"
echo "curl -X POST https://${API_ID}.execute-api.${REGION}.amazonaws.com/prod/contact \\"
echo "  -H \"Content-Type: application/json\" \\"
echo "  -d '{\"name\":\"Test User\",\"email\":\"test@example.com\",\"company\":\"Test Co\",\"service\":\"general\",\"message\":\"Test message\"}'" 
