# Website Feedback Implementation Plan

## Overview
Implementation plan for 13 feedback items from 6/28/25 Website Feedback document.

## Feedback Items Summary

### Phase 1: Critical UI/UX Fixes
**Priority: HIGH**

#### Item 1 - Homepage CTA Button
- **Issue**: "Ready to Optimize Your Operations?" - "Learn more about us" white button text missing until mouseover
- **File**: `src/app/page.tsx`
- **Status**: ✅ Completed
- **Fix**: Removed conflicting `text-white` class and set proper `text-blue-600` for visibility

#### Item 3 - AI Services CTA Button  
- **Issue**: "Ready to Transform Your Business with AI?" Schedule Consultation white button text missing until mouseover
- **File**: `src/app/ai-services/page.tsx`
- **Status**: ✅ Completed
- **Fix**: Removed conflicting `text-white` class and set proper `text-purple-600` for visibility

#### Item 8 - AI Services Case Studies Button
- **Issue**: "View Case Studies" white button text missing until mouseover
- **File**: `src/app/ai-services/page.tsx`
- **Status**: ✅ Completed
- **Fix**: Changed from `border-white text-white` to `border-purple-600 text-purple-600` for visibility on white background

#### Additional Button Fixes Found
- **About Page**: "Schedule a Call" button - Fixed same CSS conflict issue
- **GovernIQ Page**: "MSP Partnership Inquiry" button - Fixed same CSS conflict issue
- **Status**: ✅ Completed

### Phase 2: Contact Page Overhaul  
**Priority: HIGH**

#### Item 5 - Contact Information Update
- **Issue**: Section needs real phone number (512) 222-7896 and hours 8 AM - 5 PM CST
- **File**: `src/app/contact/page.tsx`
- **Status**: ❌ Not Started

#### Item 6 - Call Us Number
- **Issue**: Number at bottom needs to be changed to (512) 222-7896
- **File**: `src/app/contact/page.tsx`
- **Status**: ❌ Not Started

#### Item 7 - Quick Links Activation
- **Issue**: Quick links aren't active
- **File**: `src/app/contact/page.tsx`
- **Status**: ❌ Not Started

#### Item 9 - Email Security Warning
- **Issue**: "Send Email" button displays security warning
- **File**: `src/app/contact/page.tsx`
- **Status**: ❌ Not Started

#### Item 10 - Email Client Launch
- **Issue**: Contact form launches local email client instead of web-based sending
- **File**: `src/app/contact/page.tsx` + backend implementation
- **Status**: ❌ Not Started

#### Item 11 - Case Studies Link
- **Issue**: "View Case Studies" button links to wrong page
- **File**: `src/app/contact/page.tsx` + create case studies page
- **Status**: ❌ Not Started

### Phase 3: Pricing Structure Enhancement
**Priority: MEDIUM**

#### Item 2 - Add Lite Pricing Plan
- **Issue**: Add $1,500–$1,800 "Lite" plan with chatbot and email only below $2,500 Starter
- **File**: `src/app/ai-services/page.tsx`
- **Features**: 
  - Time saved emphasis
  - Revenue lift or lead-gen improvement
  - Ongoing optimization (not just one-and-done setup)
- **Status**: ❌ Not Started

### Phase 4: Content and Claims Review
**Priority: MEDIUM**

#### Item 4 - Success Stories Reference Policy
- **Issue**: What if customers ask to talk to reference customer?
- **File**: `src/app/ai-services/page.tsx`
- **Solution**: Add appropriate disclaimers
- **Status**: ❌ Not Started

#### Item 12 - AWS Partners Claim
- **Issue**: "AWS Partners" - Can we really say this yet?
- **File**: `src/app/about/page.tsx`
- **Action**: Verify claim or modify language
- **Status**: ❌ Not Started

### Phase 5: Industry Verticals Addition
**Priority: LOWER**

#### Item 13 - Industry Verticals
- **Issue**: Add industry verticals with tailored messaging
- **Industries**:
  - Healthcare & Wellness Providers
  - Technology  
  - Financial Services & Insurance
  - Real Estate
  - Professional Services
  - eCommerce & Retail
- **Files**: Create new page or add to existing
- **Reference**: https://chatgpt.com/s/t_68604a8e7cd0819183c4ecf664a9e4e3
- **Status**: ❌ Not Started

## Technical Requirements

### Backend Implementation Needed
- Contact form handler (replace mailto functionality)
- Form validation and security
- Email sending service integration

### New Pages/Components Needed
- Case Studies page/section
- Industry Verticals page/section
- Enhanced contact form component

### Styling Fixes Needed
- Button visibility issues across multiple pages
- Hover state fixes
- Responsive design verification

## Timeline Estimate
- **Phase 1**: 1-2 days (Critical UI fixes)
- **Phase 2**: 3-4 days (Contact page overhaul)  
- **Phase 3**: 1 day (Pricing structure)
- **Phase 4**: 1 day (Content review)
- **Phase 5**: 2-3 days (Industry verticals)

**Total**: 8-11 days

## Progress Tracking
- ❌ Not Started
- 🟡 In Progress  
- ✅ Completed
- 🔄 Needs Review

## Development Workflow
**Repository**: https://github.com/finpromptu/website

### Branch Strategy
- **`dev` branch** → https://dev.finpromptu.com (staging - automatic deployment)
- **`master` branch** → https://finpromptu.com (production - automatic deployment)

### Implementation Process
1. Make changes on `dev` branch
2. Commit and push to trigger automatic staging deployment
3. Review changes on https://dev.finpromptu.com
4. After testing, create PR from `dev` → `master` for production

## Notes
- Priority should be given to Phase 1 and Phase 2 items as they affect user experience
- Phone number (512) 222-7896 needs to be updated site-wide
- Contact form security and functionality is critical
- AWS Partners claim needs verification before proceeding
- All changes should be tested on staging before production deployment 