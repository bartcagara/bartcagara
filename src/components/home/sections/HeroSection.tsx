import { CTAButton } from "@/components/ui/CTAButton";
import { TiltedLabel } from "@/components/ui/TiltedLabel";
import type { HeroSectionProps } from "@/components/home/types";

/**
 * HeroSection - Main hero section of the homepage
 *
 * Conversion-first hierarchy, top to bottom:
 *   eyebrow social proof → H1 headline → subheadline → single primary
 *   CTA → proof stats bar. One clear path to booking.
 *
 * Typography uses the fluid `text-*` utilities (globals.css) so the
 * scale is continuous across viewports and centralized in one place.
 */
export function HeroSection({ content }: HeroSectionProps) {
  // Render the first word on its own line and keep the remainder ("your kid's")
  // together on a single line at every breakpoint.
  const [headlineLead, ...headlineRestParts] = content.headline.split(" ");
  const headlineRest = headlineRestParts.join(" ");
  return (
    <section
      className="border-b-2 border-white/10 bg-bleu-nuit overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-48 md:pb-32">
        {/* Social proof as the opening trust anchor */}
        <p className="text-eyebrow text-white/70 mb-6">{content.socialProof}</p>

        <h1 className="text-display text-white max-w-5xl mb-10">
          {headlineLead}
          {headlineRest && (
            <>
              <br />
              <span className="whitespace-nowrap">{headlineRest}</span>
            </>
          )}
          <br />
          {/* w-min hugs the box to its own phrase (widest word) at every size. */}
          <TiltedLabel className="bg-gray-50 text-bleu-nuit">
            {content.highlightedText}
          </TiltedLabel>
        </h1>

        <div className="border-l-4 border-bleu-accent pl-5 md:pl-8 max-w-2xl mb-10">
          <p className="text-lead font-medium leading-relaxed text-white/80">
            {content.subheadline}
          </p>
        </div>

        <CTAButton href="#book-call" variant="light" cal>
          {content.ctaText}
        </CTAButton>

        {/* Proof stats */}
        <dl className="mt-14 grid grid-cols-3 gap-6 max-w-2xl border-t-2 border-white/10 pt-8">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                {stat.value}
              </dt>
              <dd className="text-eyebrow text-white/70 mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
