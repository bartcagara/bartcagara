'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!, // Your proxy: e.bartcagara.com
    ui_host: 'https://eu.posthog.com', // CRITICAL: PostHog's actual domain for toolbar
    person_profiles: 'identified_only',
    capture_pageview: false,
    persistence: 'localStorage',
    disable_session_recording: true, // Start disabled; enabled on real user interaction
    loaded: (ph) => {
      const ua = navigator.userAgent;
      if (
        navigator.webdriver ||
        !ua ||
        /bot|crawl|spider|slurp|facebookexternalhit|baiduspider|yandex|duckduckbot|sogou|exabot|ia_archiver|semrush|ahref|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|applebot|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slack|pingdom|uptimerobot|headlesschrome|phantomjs|prerender|lighthouse|chrome-lighthouse|screaming frog/i.test(
          ua
        )
      ) {
        ph.opt_out_capturing();
        return;
      }

      // Load toolbar if launched from PostHog (must run inside loaded callback
      // so PostHog is fully initialized and ui_host is respected)
      const hash = window.location.hash.substring(1);
      const toolbarJSON = new URLSearchParams(hash).get('__posthog');
      if (toolbarJSON) {
        try {
          ph.loadToolbar(JSON.parse(toolbarJSON));
        } catch (e) {
          console.error('Failed to load PostHog toolbar:', e);
        }
      }

      // Only start session recording after real user interaction.
      // Bots produce zero clicks/scrolls/mouse movement, so they never trigger this.
      let recordingStarted = false;
      const startRecording = () => {
        if (recordingStarted) return;
        recordingStarted = true;
        ph.startSessionRecording();
        interactionEvents.forEach((evt) =>
          window.removeEventListener(evt, startRecording, { capture: true })
        );
      };
      const interactionEvents = ['mousemove', 'click', 'scroll', 'keydown', 'touchstart'];
      interactionEvents.forEach((evt) =>
        window.addEventListener(evt, startRecording, { capture: true, once: false, passive: true })
      );
    },
  });
}

export function PostHogProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      {children}
    </PostHogProvider>
  );
}