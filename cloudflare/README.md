# PostHog Reverse Proxy Setup

This directory contains the Cloudflare Worker configuration for proxying PostHog analytics requests through `e.bartcagara.com` to bypass ad blockers.

## Why Use a Reverse Proxy?

- **Bypass ad blockers**: Many browser extensions block requests to known analytics domains. Using your own domain avoids this.
- **Better performance**: Cloudflare caches static assets and serves them from edge locations.
- **Accurate analytics**: Get complete visitor data without blocking.

## Setup Instructions

### Step 1: Deploy the Cloudflare Worker

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create Application** → **Create Worker**
4. Name it something like `posthog-proxy`
5. Click **Deploy** to create the worker
6. Click **Edit Code**
7. Copy the entire contents of `posthog-worker.js` and paste it into the worker editor
8. Click **Save and Deploy**
9. Note your worker URL (e.g., `posthog-proxy.your-account.workers.dev`)

### Step 2: Configure DNS

1. In your Cloudflare dashboard, go to your domain (`bartcagara.com`)
2. Click on **DNS** in the left sidebar
3. Click **Add record**
4. Configure the record:
   - **Type**: `CNAME`
   - **Name**: `e`
   - **Target**: Your worker URL from Step 1 (e.g., `posthog-proxy.your-account.workers.dev`)
   - **Proxy status**: Proxied (orange cloud icon enabled ☁️)
5. Click **Save**

### Step 3: Add Worker Route

1. In your Cloudflare dashboard, go to **Workers & Pages**
2. Click on your worker (`posthog-proxy`)
3. Go to **Settings** → **Triggers**
4. Under **Routes**, click **Add route**
5. Enter the route: `e.bartcagara.com/*`
6. Select your worker from the dropdown
7. Click **Add route**

### Step 4: Test the Setup

1. Open your browser's developer console
2. Navigate to your website
3. Check the Network tab for requests to `e.bartcagara.com`
4. Verify that PostHog events are being sent successfully

You can also test directly by visiting: `https://e.bartcagara.com/i/v0/e/` - you should get a response from PostHog.

## Verification

Once deployed, your PostHog configuration in `src/app/providers.tsx` is already set to use `https://e.bartcagara.com` as the API host. All analytics events will now be routed through your own domain!

## Troubleshooting

**DNS not resolving**: DNS changes can take a few minutes to propagate. Wait 5-10 minutes and try again.

**Worker not responding**: Make sure the route `e.bartcagara.com/*` is correctly configured in the Worker Triggers settings.

**CORS errors**: The worker includes CORS headers, but if you encounter issues, check that the `Access-Control-Allow-Origin` header in the worker matches your domain.

## Cloudflare Free Plan Limits

- **100,000 requests per day** on the free plan
- This should be more than enough for most websites
- If you exceed this, consider upgrading to Cloudflare's paid Workers plan
