# Website Audit — Founder Athlete OS

_Prepared on the `claude/dazzling-galileo-gqwqtb` branch. Scope: full-site code
& design audit, with the **hero section** refactored as a worked example of the
standard. Priority lens: **conversion / bookings**._

---

## Executive summary

The honest verdict: **this is a solid, well-built site — not garbage.** Next.js 15
+ Tailwind v4, statically exported to Cloudflare Pages, content-driven, with error
boundaries, lazy-loaded sections, year-long asset caching, and **zero literal inline
`style={{}}` hacks.** We are not rescuing a mess; we are taking a B+ to flawless.

The real flaws are the subtle, structural kind — the difference between code that
*works* and a system that *scales without drift*. Four themes, in priority order:

| # | Finding | Severity | Status this branch |
|---|---------|----------|--------------------|
| 1 | Typography copy-pasted, not centralized | High (maintainability) | ✅ Fixed (foundation) |
| 2 | Accessibility gaps (contrast, focus, motion) | High (a11y + reach) | ✅ Fixed (hero + global) |
| 3 | `lever.png` shipped at 1.8 MB | High (performance) | ✅ Fixed |
| 4 | Two undocumented color systems | Medium (clarity) | ✅ Documented |

Everything below the hero is **teed up but not yet applied** — see _Rollout_.

---

## 1. Typography was copy-pasted, not a system  ·  HIGH

**Problem.** The same heading recipe —
`text-[15.5vw] md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85]`
— was hardcoded independently in `HeroSection`, `FinalCTASection`, and (in a sibling
form) `SectionHeader` and ~8 other files. Two failure modes:

- **No single source of truth.** Changing the display scale means editing ~11 files
  and hoping none are missed. That is how design drift starts.
- **Abrupt breakpoint jump.** `15.5vw` (≈ 56px at 360px) snaps to a fixed `8rem`
  (128px) at the `md` breakpoint with nothing in between — the headline visibly
  "pops" as the viewport crosses 768px.

**Fix (this branch).** A fluid, named type scale lives in **one place**
(`src/app/globals.css`) as Tailwind v4 `@utility` classes built on `clamp()`:
`text-display`, `text-h2`, `text-lead`, `text-lead-lg`, `text-eyebrow`. Each bakes in
size + line-height + tracking + weight + transform, so a component writes
`className="text-display text-white"` instead of a five-token string. The scale is
now continuous (no jump) and editable in one location.

**Why it matters for conversion.** Consistent hierarchy is what makes a page feel
*premium and trustworthy* — and trust is what gets the call booked.

## 2. Accessibility gaps  ·  HIGH

- **Contrast.** `text-white/40` on `--bleu-nuit (#09071D)` for the hero social proof
  is ~3:1 — below the WCAG AA 4.5:1 floor for body-size text. **Fixed:** bumped to
  `/70`; subheadlines standardized to `/80` minimum. Rule going forward: never below
  `/70` for body text on the dark navy.
- **Keyboard focus.** `CTAButton` had no visible focus ring — keyboard users couldn't
  see the booking button. **Fixed once, site-wide:** a `focus-visible` ring added to
  the shared `baseClasses`, so every CTA on every page benefits.
- **Motion.** `scroll-behavior: smooth` and transform hovers ran for everyone,
  including users with vestibular sensitivity. **Fixed:** a global
  `prefers-reduced-motion` guard neutralizes smooth scroll and the brutalist hover
  translate for users who opt out.

**Why it matters for conversion.** Accessibility is reach. Every visitor who can't
tab to (or comfortably use) the CTA is a lost booking — and it's an SEO/legal risk.

## 3. `lever.png` was 1.8 MB  ·  HIGH

A single trust-bar logo shipped at **2500×952 px / 1.84 MB** — larger than the entire
transformations folder — to display at ~80 px wide. **Fixed:** re-encoded to
**320×122 / 10.7 KB (−99.4%)**, now consistent with the other logos. ~1.8 MB shaved
off every first visit, directly improving Largest Contentful Paint on the trust bar.

Everything else is already healthy: transformations are WebP, fonts use
`display: swap` + preload, and `_headers` sets 1-year immutable caching.

## 4. Two undocumented color systems  ·  MEDIUM

`globals.css` carried a shadcn **OKLCh** token set (`--background`, `--foreground`…)
*and* a hex **neo-brutalist brand** set (`--bleu-*`). They don't collide, but nothing
said which to use where — an invitation for a future contributor to cross-wire them
and accidentally restyle the error pages. **Fixed:** a header comment documents the
split — OKLCh is **internal-only** (body defaults + ErrorReporter), `--bleu-*` is
**canonical** for all marketing UI. No values changed; brand colors untouched.

---

## The hero, as the worked example

`src/components/home/sections/HeroSection.tsx` was rebuilt to demonstrate the standard
without changing the brand look:

- **Conversion-first hierarchy:** social-proof eyebrow → headline → subheadline →
  a single, unmissable primary CTA. One clear path to booking, no competing actions.
- Consumes the new `text-display` / `text-lead` / `text-eyebrow` utilities.
- Contrast, focus, and mobile padding fixed; the rotated highlight span is constrained
  so it can't clip on small screens.
- Copy still lives in `src/data/homepage-content.ts` — the content-as-code discipline
  is preserved.

---

## Rollout — completed

The foundation made the rest mechanical, and it's now done across the site:

1. ✅ **Type system propagated.** Every section (`HeroSection`, `FinalCTASection`,
   `SectionHeader`, `ResultsSection`, `ProgramSection`, `AboutSection`,
   `DiagnosisSection`, `SolutionSection`, `ObjectionsSection`, `BriefingSection`)
   now uses `text-display` / `text-h2` / `text-lead` / `text-lead-lg`. The
   copy-pasted `text-5xl md:text-8xl …` and `text-[15.5vw] md:text-[8rem]` strings
   are gone. Note: `text-lead*` are **size-only** tokens — they pair with the
   existing `font-*` / `leading-*` so regular copy vs. bold emphasis is preserved.
2. ✅ **Testimonials → WebP.** All 26 `dm-*.jpg` converted to WebP and capped at
   1100px tall (they render ~500px): **2.59 MB → 1.61 MB (−38%)**, text fully legible.
   The JPGs were removed and `assets.ts` rewired.
3. ✅ **Contrast sweep.** Low-contrast small text bumped to ≥`/70` across
   `TrustedBy`, `SectionHeader`, `AboutSection`, and `OptinForm` (labels, disclaimer,
   and input placeholders).

### Still open (deferred, infra-level)

- Drop `images.unoptimized` via Cloudflare Image Resizing for true responsive
  `srcset` / AVIF — a deployment-config change, out of scope for this code pass.

---

## Phase 2 — functional & consistency pass (`claude/eloquent-mendel-344ndn`)

A second audit verified phase 1 held (build/tests green, no inline styles, no
oversized images, PostHog off the critical path) and then closed the gaps the
first pass left at the edges — the Navbar, Footer, forms, legal pages, and 404
had never adopted the system.

**Functional fixes** (things that could actually misbehave):
- `CalendarEmbed` retries until the Cal.com loader is ready instead of
  silently rendering an empty box on the booking path.
- Mobile menu scrolls on short viewports; body scroll lock is now a shared,
  reference-counted helper (`src/lib/scroll-lock.ts`) instead of two
  components fighting over `body.style.overflow`.
- `TransformationModal`: focus moves in, Tab is trapped, focus restores to
  the opener; `dvh` units for iOS.
- A global `:focus-visible` outline (zero-specificity `:where()`) gives every
  link and button a visible keyboard focus state.
- Carousel arrows advance one measured card (was 350px vs 445px cards);
  disabled arrows visible at `opacity-40`.
- `YouTubeLite` cards cap to the viewport on small screens.
- `ErrorReporter` dev-overlay polling no longer runs in production;
  `ContactForm`'s redirect follows the submitting origin.

**Consistency fixes** (the system, finished):
- **One CTA.** `CTAButton` (now with `size="sm" | "md"`, `onClick`) renders
  every booking button — hero, navbar desktop + mobile, 404. The six
  hand-rolled button recipes with five padding scales and three hover
  distances are gone; `hover-translate-brutal` (3px) is the only hover move.
- **One Cal.com config.** `src/lib/cal.ts` owns the event link, namespace,
  and embed config that were duplicated across four files.
- **Type scale completed.** New `text-title` token for subpage h1s (legal ×3,
  contact, briefing opt-in); 404 rebuilt on `text-h2`/`text-eyebrow`/
  `text-lead`; `ProgramSection` lists, `ObjectionsSection` answers, and
  briefing bullets moved to `text-lead`; `TrustedBy` label to `text-eyebrow`;
  navbar links off `text-[15px]` onto `text-sm`.
- **Contrast floor enforced.** Footer icons/text off default grays onto
  `bleu-nuit/70`+ (was ~2.5:1), "THE WIN:" labels to full white on accent
  (was ~2:1), opt-in placeholder and legal-page date lines to `/70`.
- **Footer on-brand & semantic.** Whole footer moved from Tailwind default
  grays + `blue-600` hovers onto `bleu-*` tokens; decorative `h3`/`h4` fixed
  (`p` for the brand name, `h2` for column headings).
- **Shadows tokenized.** `shadow-brutal-nuit-sm` added; `SectionBadge` and
  the navbar CTA now use named shadow utilities — zero literal `shadow-[…]`
  left in components.
- **Dead code removed.** Unused `ctaLink` props/content, `FinalCTASection`'s
  never-read `ctaText`/`ctaLink`, `TRUST_LOGOS` width/height, the redundant
  `hover-shadow-none` utility; `SectionSkeleton` padding now matches real
  sections so lazy swaps don't shift the page.
