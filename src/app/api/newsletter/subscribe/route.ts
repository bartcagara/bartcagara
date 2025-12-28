import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/newsletter/subscribe
 * Subscribes a user to the ConvertKit newsletter
 */
export async function POST(request: NextRequest) {
    try {
        const { email, firstName } = await request.json();

        // Validate input
        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        // Get ConvertKit credentials from environment variables
        const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
        const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

        if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
            console.error("ConvertKit credentials missing");
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        // Subscribe to ConvertKit
        const convertkitResponse = await fetch(
            `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    api_key: CONVERTKIT_API_KEY,
                    email: email,
                    first_name: firstName || "",
                    tags: [], // Optional: Add tags if needed
                }),
            }
        );

        const data = await convertkitResponse.json();

        if (!convertkitResponse.ok) {
            console.error("ConvertKit API error:", data);

            // Handle specific ConvertKit errors
            if (data.error && data.message) {
                return NextResponse.json(
                    { error: data.message },
                    { status: 400 }
                );
            }

            return NextResponse.json(
                { error: "Failed to subscribe. Please try again." },
                { status: 500 }
            );
        }

        // Success
        return NextResponse.json(
            {
                success: true,
                message: "Successfully subscribed to the newsletter!",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
