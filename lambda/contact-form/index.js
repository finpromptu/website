const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: process.env.AWS_REGION || 'us-east-1' });

exports.handler = async (event) => {
    // Enable CORS with comprehensive headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'CORS preflight success' })
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse request body
        const body = JSON.parse(event.body);
        const { name, email, company, service, message } = body;

        // Validate required fields
        if (!name || !email || !company || !service || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    error: 'Missing required fields',
                    required: ['name', 'email', 'company', 'service', 'message']
                })
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid email format' })
            };
        }

        // Sanitize inputs (basic XSS prevention)
        const sanitize = (str) => str.replace(/[<>]/g, '');
        const cleanName = sanitize(name);
        const cleanCompany = sanitize(company);
        const cleanMessage = sanitize(message);

        // Map service values to readable names
        const serviceNames = {
            'governiq': 'GovernIQ - Cloud Governance',
            'ai-services': 'AI Integration Services',
            'msp-partnership': 'MSP Partnership',
            'general': 'General Inquiry'
        };
        const serviceName = serviceNames[service] || service;

        // Email content
        const subject = `New Contact Form Submission - ${serviceName}`;
        const htmlBody = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Service Interest:</strong> ${serviceName}</p>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${cleanCompany}</p>
            <p><strong>Message:</strong></p>
            <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted from finpromptu.com contact form</small></p>
        `;

        const textBody = `
New Contact Form Submission

Service Interest: ${serviceName}
Name: ${cleanName}
Email: ${email}
Company: ${cleanCompany}

Message:
${cleanMessage}

---
Submitted from finpromptu.com contact form
        `;

        // Auto-reply email content
        const autoReplySubject = 'Thank you for contacting Finpromptu';
        const autoReplyHtml = `
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${cleanName},</p>
            <p>We've received your inquiry about <strong>${serviceName}</strong> and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
                <li>Call us at <a href="tel:+15122227896">(512) 222-7896</a></li>
                <li>Learn more about <a href="https://finpromptu.com/governiq">GovernIQ</a></li>
                <li>Explore our <a href="https://finpromptu.com/ai-services">AI Services</a></li>
            </ul>
            <p>Best regards,<br>The Finpromptu Team</p>
            <hr>
            <p><small>Finpromptu | Cloud Governance & AI Integration<br>
            Phone: (512) 222-7896 | Email: info@finpromptu.com</small></p>
        `;

        const autoReplyText = `
Thank you for reaching out!

Hi ${cleanName},

We've received your inquiry about ${serviceName} and will get back to you within 24 hours.

In the meantime, feel free to:
- Call us at (512) 222-7896
- Learn more about our services at finpromptu.com

Best regards,
The Finpromptu Team

---
Finpromptu | Cloud Governance & AI Integration
Phone: (512) 222-7896 | Email: info@finpromptu.com
        `;

        // Send notification email to Finpromptu
        const notificationParams = {
            Destination: {
                ToAddresses: [process.env.NOTIFICATION_EMAIL || 'info@finpromptu.com']
            },
            Message: {
                Body: {
                    Html: { Data: htmlBody },
                    Text: { Data: textBody }
                },
                Subject: { Data: subject }
            },
            Source: process.env.FROM_EMAIL || 'noreply@finpromptu.com'
        };

        // Send auto-reply to customer
        const autoReplyParams = {
            Destination: {
                ToAddresses: [email]
            },
            Message: {
                Body: {
                    Html: { Data: autoReplyHtml },
                    Text: { Data: autoReplyText }
                },
                Subject: { Data: autoReplySubject }
            },
            Source: process.env.FROM_EMAIL || 'noreply@finpromptu.com'
        };

        // Send both emails
        await Promise.all([
            ses.sendEmail(notificationParams).promise(),
            ses.sendEmail(autoReplyParams).promise()
        ]);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
                success: true,
                message: 'Contact form submitted successfully'
            })
        };

    } catch (error) {
        console.error('Error processing contact form:', error);
        
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: 'Failed to process contact form submission'
            })
        };
    }
}; 