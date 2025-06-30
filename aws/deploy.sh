#!/bin/bash

# Finpromptu Contact Form Backend Deployment Script
# This script deploys the Lambda function and CloudFormation stack

set -e

# Default values
ENVIRONMENT="prod"
REGION="us-east-1"
STACK_NAME="finpromptu-contact-form"
NOTIFICATION_EMAIL="info@finpromptu.com"
FROM_EMAIL="noreply@finpromptu.com"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -e|--environment)
      ENVIRONMENT="$2"
      shift 2
      ;;
    -r|--region)
      REGION="$2"
      shift 2
      ;;
    --notification-email)
      NOTIFICATION_EMAIL="$2"
      shift 2
      ;;
    --from-email)
      FROM_EMAIL="$2"
      shift 2
      ;;
    -h|--help)
      echo "Usage: $0 [OPTIONS]"
      echo "Options:"
      echo "  -e, --environment ENV    Environment (dev/staging/prod) [default: prod]"
      echo "  -r, --region REGION      AWS region [default: us-east-1]"
      echo "  --notification-email     Email to receive notifications [default: info@finpromptu.com]"
      echo "  --from-email            Email to send from [default: noreply@finpromptu.com]"
      echo "  -h, --help              Show this help message"
      exit 0
      ;;
    *)
      echo "Unknown option $1"
      exit 1
      ;;
  esac
done

echo "🚀 Deploying Finpromptu Contact Form Backend"
echo "Environment: $ENVIRONMENT"
echo "Region: $REGION"
echo "Notification Email: $NOTIFICATION_EMAIL"
echo "From Email: $FROM_EMAIL"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if we're authenticated
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials not configured. Please run 'aws configure' first."
    exit 1
fi

# Create deployment package
echo "📦 Creating Lambda deployment package..."
cd "$(dirname "$0")/../lambda/contact-form"

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
fi

# Create ZIP package
zip -r ../contact-form.zip . -x "*.git*" "*.DS_Store*"
cd ../../aws

echo "✅ Lambda package created: lambda/contact-form.zip"

# Deploy CloudFormation stack
echo "☁️  Deploying CloudFormation stack..."

aws cloudformation deploy \
  --template-file cloudformation-template.yaml \
  --stack-name "$STACK_NAME-$ENVIRONMENT" \
  --parameter-overrides \
    Environment="$ENVIRONMENT" \
    NotificationEmail="$NOTIFICATION_EMAIL" \
    FromEmail="$FROM_EMAIL" \
  --capabilities CAPABILITY_NAMED_IAM \
  --region "$REGION"

if [ $? -ne 0 ]; then
    echo "❌ CloudFormation deployment failed"
    exit 1
fi

echo "✅ CloudFormation stack deployed successfully"

# Get the Lambda function name
FUNCTION_NAME=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME-$ENVIRONMENT" \
  --region "$REGION" \
  --query 'Stacks[0].Outputs[?OutputKey==`LambdaFunctionName`].OutputValue' \
  --output text)

# Update Lambda function code
echo "🔄 Updating Lambda function code..."
aws lambda update-function-code \
  --function-name "$FUNCTION_NAME" \
  --zip-file fileb://../lambda/contact-form.zip \
  --region "$REGION"

if [ $? -ne 0 ]; then
    echo "❌ Lambda function update failed"
    exit 1
fi

echo "✅ Lambda function updated successfully"

# Get API endpoint
API_ENDPOINT=$(aws cloudformation describe-stacks \
  --stack-name "$STACK_NAME-$ENVIRONMENT" \
  --region "$REGION" \
  --query 'Stacks[0].Outputs[?OutputKey==`ApiEndpoint`].OutputValue' \
  --output text)

echo ""
echo "🎉 Deployment completed successfully!"
echo "📡 API Endpoint: $API_ENDPOINT"
echo ""
echo "Next steps:"
echo "1. Verify your SES email addresses in AWS Console"
echo "2. Update your frontend to use this API endpoint"
echo "3. Test the contact form"
echo ""
echo "SES Setup Commands:"
echo "aws ses verify-email-identity --email-address $FROM_EMAIL --region $REGION"
echo "aws ses verify-email-identity --email-address $NOTIFICATION_EMAIL --region $REGION"

# Clean up
rm -f ../lambda/contact-form.zip

echo ""
echo "✅ Deployment script completed!" 