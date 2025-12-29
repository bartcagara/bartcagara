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
const ALLOWED_ORIGIN = "https://bartcagara.com";
const MAX_BODY_SIZE = 1048576; // 1MB limit
const ALLOWED_METHODS = ["GET", "POST", "OPTIONS"];

// Headers safe to forward to PostHog
const SAFE_HEADERS = ["content-type", "user-agent", "accept", "accept-encoding", "accept-language"];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(origin),
      });
    }

    // Validate request method
    if (!ALLOWED_METHODS.includes(request.method)) {
      return new Response("Method not allowed", {
        status: 405,
        headers: getCorsHeaders(origin),
      });
    }

    // Validate request size for POST requests
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      return new Response("Payload too large", {
        status: 413,
        headers: getCorsHeaders(origin),
      });
    }

    // Construct the PostHog URL
    const posthogUrl = POSTHOG_HOST + url.pathname + url.search;

    // Filter headers - only forward safe ones
    const safeHeaders = new Headers();
    SAFE_HEADERS.forEach((header) => {
      const value = request.headers.get(header);
      if (value) safeHeaders.set(header, value);
    });

    // Create a new request with the PostHog URL
    const newRequest = new Request(posthogUrl, {
      method: request.method,
      headers: safeHeaders,
      body: request.method === "POST" ? request.body : null,
    });

    try {
      // Forward the request to PostHog
      const response = await fetch(newRequest);

      // Clone the response so we can modify headers
      const newResponse = new Response(response.body, response);

      // Add CORS headers - restrict to our domain only
      const corsHeaders = getCorsHeaders(origin);
      for (const [key, value] of Object.entries(corsHeaders)) {
        newResponse.headers.set(key, value);
      }

      return newResponse;
    } catch (error) {
      return new Response(JSON.stringify({ error: "Proxy request failed" }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          ...getCorsHeaders(origin),
        },
      });
    }
  },
};

/**
 * Get CORS headers based on origin
 * Only allows requests from bartcagara.com (and localhost for dev)
 */
function getCorsHeaders(origin) {
  // Allow localhost for development, and production domain
  const allowedOrigins = [
    ALLOWED_ORIGIN,
    "http://localhost:3000",
    "http://localhost:3001",
  ];

  const allowOrigin = allowedOrigins.includes(origin) ? origin : ALLOWED_ORIGIN;

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}
