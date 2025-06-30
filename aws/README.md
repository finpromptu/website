# Finpromptu Contact Form Backend

This directory contains the AWS infrastructure and Lambda function for handling contact form submissions with real email functionality using AWS SES.

## 🏗️ Architecture

- **AWS Lambda**: Processes contact form submissions
- **AWS API Gateway**: Provides REST endpoint for frontend
- **AWS SES**: Sends emails to both customer (auto-reply) and Finpromptu team
- **CloudFormation**: Infrastructure as Code deployment

## 📋 Prerequisites

1. **AWS CLI installed and configured**
   ```bash
   aws configure
   ```

2. **Node.js and npm** (for Lambda dependencies)

3. **Proper AWS permissions** for:
   - CloudFormation (create/update stacks)
   - Lambda (create/update functions)
   - API Gateway (create APIs)
   - IAM (create roles and policies)
   - SES (send emails, verify identities)

## 🚀 Quick Deployment

1. **Make the deployment script executable:**
   ```bash
   chmod +x aws/deploy.sh
   ```

2. **Deploy to production:**
   ```bash
   ./aws/deploy.sh
   ```

3. **Deploy to staging/development:**
   ```bash
   ./aws/deploy.sh --environment staging
   ```

## 📧 SES Email Setup

**IMPORTANT**: After deployment, you must verify your email addresses in SES:

1. **Verify the "from" email address:**
   ```bash
   aws ses verify-email-identity --email-address noreply@finpromptu.com
   ```

2. **Verify the notification email address:**
   ```bash
   aws ses verify-email-identity --email-address info@finpromptu.com
   ```

3. **Check verification status:**
   ```bash
   aws ses get-identity-verification-attributes --identities noreply@finpromptu.com info@finpromptu.com
   ```

**Note**: In SES sandbox mode, you can only send emails to verified addresses. To send to any email address, request production access in the AWS Console.

## 🔧 Configuration Options

The deployment script accepts several parameters:

```bash
./aws/deploy.sh \
  --environment prod \
  --region us-east-1 \
  --notification-email info@finpromptu.com \
  --from-email noreply@finpromptu.com
```

### Parameters:
- `--environment`: `dev`, `staging`, or `prod` (default: `prod`)
- `--region`: AWS region (default: `us-east-1`)
- `--notification-email`: Where to send form submissions (default: `info@finpromptu.com`)
- `--from-email`: Email address to send from (default: `noreply@finpromptu.com`)

## 📱 Frontend Integration

After deployment, update your frontend contact form to use the API endpoint:

```javascript
// Get the API endpoint from CloudFormation outputs
const API_ENDPOINT = 'https://[api-id].execute-api.us-east-1.amazonaws.com/prod/contact';

// Example form submission
const submitForm = async (formData) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      // Success - show confirmation
      console.log('Email sent successfully:', result);
    } else {
      // Error - show error message
      console.error('Error:', result.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

## 🔍 Testing

Test the API endpoint directly:

```bash
curl -X POST https://[your-api-endpoint]/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "service": "general",
    "message": "Test message"
  }'
```

## 📊 Monitoring

Monitor your Lambda function and API Gateway:

1. **CloudWatch Logs**: 
   - Lambda function logs: `/aws/lambda/finpromptu-contact-form-[env]`
   - API Gateway logs: Enable in API Gateway console

2. **CloudWatch Metrics**:
   - Lambda: Duration, Errors, Invocations
   - API Gateway: Count, Latency, 4XX/5XX errors

3. **SES Metrics**:
   - Sent, Delivered, Bounced, Complained emails

## 🛠️ Manual Setup (Alternative)

If you prefer manual setup instead of using the deployment script:

1. **Create the CloudFormation stack:**
   ```bash
   aws cloudformation create-stack \
     --stack-name finpromptu-contact-form-prod \
     --template-body file://cloudformation-template.yaml \
     --parameters ParameterKey=Environment,ParameterValue=prod \
     --capabilities CAPABILITY_NAMED_IAM
   ```

2. **Package and upload Lambda code:**
   ```bash
   cd lambda/contact-form
   npm install
   zip -r contact-form.zip .
   
   aws lambda update-function-code \
     --function-name finpromptu-contact-form-prod \
     --zip-file fileb://contact-form.zip
   ```

## 🔐 Security Features

- **Input validation**: Email format, required fields
- **Input sanitization**: XSS protection
- **CORS enabled**: Proper cross-origin headers
- **Rate limiting**: Consider adding API Gateway rate limiting for production

## 💰 Cost Estimation

Expected monthly costs for typical usage:

- **Lambda**: ~$0.20 (1M requests)
- **API Gateway**: ~$3.50 (1M requests) 
- **SES**: $0.10 per 1K emails
- **CloudWatch**: ~$0.50 (logs and metrics)

**Total**: ~$4-5/month for moderate usage

## 🚨 Troubleshooting

### Common Issues:

1. **SES emails not sending**:
   - Verify email addresses in SES console
   - Check SES sending limits
   - Ensure SES is in production mode for external emails

2. **Lambda timeout errors**:
   - Check CloudWatch logs
   - Verify SES permissions
   - Increase Lambda timeout if needed

3. **CORS errors**:
   - Verify API Gateway CORS configuration
   - Check preflight OPTIONS responses

4. **CloudFormation deployment fails**:
   - Check IAM permissions
   - Verify region availability
   - Check for naming conflicts

### Useful Commands:

```bash
# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name finpromptu-contact-form-prod

# View Lambda function logs
aws logs tail /aws/lambda/finpromptu-contact-form-prod --follow

# Test SES email sending
aws ses send-email \
  --source noreply@finpromptu.com \
  --destination ToAddresses=test@example.com \
  --message Subject="Test",Body="Test message"
```

## 🔄 Updates and Maintenance

To update the Lambda function code:

```bash
# Re-run the deployment script
./aws/deploy.sh

# Or manually update just the Lambda code
cd lambda/contact-form
zip -r contact-form.zip .
aws lambda update-function-code \
  --function-name finpromptu-contact-form-prod \
  --zip-file fileb://contact-form.zip
```

## 🗑️ Cleanup

To remove all AWS resources:

```bash
aws cloudformation delete-stack --stack-name finpromptu-contact-form-prod
```

**Warning**: This will permanently delete the Lambda function, API Gateway, and all associated resources. 