'use client';

import { createContext, useContext } from 'react';
import type { PostHog } from 'posthog-js';

/**
 * posthog-js is imported dynamically after first paint (see
 * `src/app/providers.tsx`), so this context is `null` until the library has
 * loaded and initialised. Deliberately not `posthog-js/react`'s own context:
 * that module statically imports posthog-js, which would drag the whole SDK
 * back into the critical bundle.
 */
export const PostHogClientContext = createContext<PostHog | null>(null);

/**
 * Returns the PostHog client, or `null` while it is still loading. Callers must
 * handle the null case (`posthog?.capture(...)`); effects that depend on it
 * re-run once the client arrives, so nothing captured on mount is lost.
 */
export function usePostHogClient(): PostHog | null {
  return useContext(PostHogClientContext);
}
