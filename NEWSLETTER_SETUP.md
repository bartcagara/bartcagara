# Newsletter Opt-in Page Setup

## Overview
A custom-branded newsletter opt-in page at `/briefing-optin` that integrates with ConvertKit.

## Live Page
- **URL**: `https://yourdomain.com/briefing-optin`
- **Purpose**: Collect email subscribers for "The Executive Briefing" newsletter

## Setup Instructions

### 1. Get ConvertKit Credentials

#### API Key
1. Log into your ConvertKit account
2. Go to **Settings** → **Advanced** → **API & Webhooks**
3. Copy your **API Secret** (NOT the Public Key)

#### Form ID
1. Go to your ConvertKit dashboard
2. Navigate to **Grow** → **Landing Pages & Forms**
3. Find your "Briefing" form
4. The Form ID is in the URL: `https://app.convertkit.com/forms/designers/[FORM_ID]`
   - OR click on the form and look for the ID in the settings

### 2. Set Environment Variables

Create a `.env.local` file in the root directory:

```bash
CONVERTKIT_API_KEY=your_api_secret_here
CONVERTKIT_FORM_ID=your_form_id_here
```

**Important**: Never commit the `.env.local` file to git!

### 3. Deploy

If you're using Vercel:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add both variables:
   - `CONVERTKIT_API_KEY`
   - `CONVERTKIT_FORM_ID`
4. Redeploy your application

### 4. Test

1. Visit `/briefing-optin` on your site
2. Fill out the form with a test email
3. Check your ConvertKit dashboard to verify the subscription appeared
4. Check your email for the confirmation

## Features

✅ Custom branding matching your neo-brutalist design system
✅ PostHog analytics tracking for:
- Successful subscriptions
- Failed attempts
- Network errors

✅ User-friendly error handling
✅ Success confirmation message
✅ Mobile-responsive design
✅ Accessible form fields

## Customization

### Update Copy
Edit the page content in: `/src/app/(pages)/briefing-optin/page.tsx`

### Add Tags
To automatically tag subscribers, edit the API route:
`/src/app/api/newsletter/subscribe/route.ts`

Add tags in the ConvertKit API call:
```typescript
tags: [123456], // Replace with your ConvertKit tag IDs
```

### Change Styling
The page uses your existing design system:
- Colors: `bleu-nuit`, `bleu-accent`, `bleu-fumee`
- Styles: Defined in `homepage.module.css`
- Utilities: Defined in `globals.css`

## Migration from Kit.com Page

Your old page: `https://bartcagara.kit.com/subscribe`

To fully migrate:
1. Update all links pointing to the old Kit.com page to `/briefing-optin`
2. Keep the old page active for a transition period
3. Consider adding a redirect from Kit.com to your custom page (in Kit settings)

## Troubleshooting

### "Server configuration error"
- Environment variables not set correctly
- Check spelling of variable names
- Make sure you're using the API Secret, not the Public Key

### "Failed to subscribe"
- Check ConvertKit API status
- Verify Form ID is correct
- Check server logs for detailed error messages

### Subscribers not showing up
- Verify the Form ID matches your intended form
- Check if ConvertKit requires double opt-in confirmation
- Look in your ConvertKit "Subscribers" tab

## Support

For ConvertKit API documentation:
https://developers.convertkit.com/
