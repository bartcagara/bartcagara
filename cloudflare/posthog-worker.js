/**
 * PostHog Reverse Proxy - Cloudflare Worker
 *
 * This worker intercepts requests to e.bartcagara.com and forwards them
 * to PostHog's EU server (eu.i.posthog.com) to bypass ad blockers.
 *
 * Setup Instructions:
 * 1. Go to your Cloudflare dashboard
 * 2. Navigate to Workers & Pages > Create Application > Create Worker
 * 3. Name it "posthog-proxy" or similar
 * 4. Copy and paste this code into the worker editor
 * 5. Deploy the worker
 * 6. Go to your domain's DNS settings
 * 7. Add a DNS record: Type: CNAME, Name: e, Content: your-worker.workers.dev
 * 8. Enable the orange cloud (proxied) for the DNS record
 * 9. In Workers Routes, add a route: e.bartcagara.com/* -> your worker
 */

const POSTHOG_HOST = "https://eu.i.posthog.com";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Construct the PostHog URL
    const posthogUrl = POSTHOG_HOST + url.pathname + url.search;

    // Create a new request with the PostHog URL
    const newRequest = new Request(posthogUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    try {
      // Forward the request to PostHog
      const response = await fetch(newRequest);

      // Clone the response so we can modify headers
      const newResponse = new Response(response.body, response);

      // Add CORS headers to allow requests from your domain
      newResponse.headers.set("Access-Control-Allow-Origin", "*");
      newResponse.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      newResponse.headers.set("Access-Control-Allow-Headers", "Content-Type");

      return newResponse;
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
