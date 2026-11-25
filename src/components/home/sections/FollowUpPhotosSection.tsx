import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import type { FollowUpPhotosSectionProps } from "@/components/home/types";

/**
 * "The follow-up photos": the fastest proof, right after his own story.
 * Phone: a sideways row he swipes, the next photo peeking in from the edge.
 * Desktop: the three photos side by side. The weeks are printed on each photo.
 */
export function FollowUpPhotosSection({ content }: FollowUpPhotosSectionProps) {
  return (
    <section id="results" className="bg-bleu-fumee text-bleu-nuit border-t-2 border-bleu-nuit" aria-labelledby="photos-title">
      <div className="max-w-7xl mx-auto py-16 lg:px-12 lg:py-28">
        <div className="px-6 lg:px-0 max-w-[720px]">
          <SectionBadge>{content.label}</SectionBadge>
          <h2 id="photos-title" className="heading-section">
            {content.title}
          </h2>
          <p className="mt-6 text-body text-bleu-nuit/75">{content.intro}</p>
        </div>

        <ul
          className="mt-10 lg:mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 pb-3 scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0"
          aria-label="Before-and-after photos"
        >
          {content.photos.map((photo) => (
            <li key={photo.src} className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-auto">
              <div className="border-2 border-bleu-nuit shadow-brutal-md bg-white">
                <Image src={photo.src} alt={photo.alt} width={940} height={788} sizes="(max-width: 1024px) 85vw, 400px" className="block w-full h-auto" />
              </div>
            </li>
          ))}
        </ul>
        <p className="px-6 mt-3 text-sm text-bleu-nuit/60 lg:hidden" aria-hidden="true">Swipe for more →</p>

      </div>
    </section>
  );
}
