import Image from "next/image";
import type { MomentContent, ShotContent } from "./types";
import { CHIP, FRAME, MICRO, QUOTE } from "./ui";

/**
 * The page's repeating device: a small label naming the place, one client
 * sentence very large, his screenshot as the receipt, then his name line.
 */
export function Moment({ moment, className = "" }: { moment: MomentContent; className?: string }) {
  const shots = moment.shots?.length ? <Shots shots={moment.shots} /> : null;

  return (
    <figure className={`max-w-3xl ${className}`}>
      <span className={CHIP}>{moment.label}</span>
      {moment.shotsFirst && shots && <div className="mt-6 md:mt-8">{shots}</div>}
      <blockquote className="mt-6 md:mt-8">
        {moment.lead && (
          <p className="mb-2 text-lg md:text-2xl font-medium leading-[1.45] text-bleu-nuit/75">&ldquo;{moment.lead}</p>
        )}
        <p className={QUOTE}>
          {!moment.lead && <>&ldquo;</>}
          {moment.quote}&rdquo;
        </p>
      </blockquote>
      {!moment.shotsFirst && shots && <div className="mt-8 md:mt-10">{shots}</div>}
      {(moment.name || moment.note) && (
        <figcaption className="mt-5">
          {moment.name && <span className={MICRO}>{moment.name}</span>}
          {moment.note && (
            <span className="block mt-2 text-base md:text-lg font-medium leading-snug text-pretty text-bleu-nuit/75">
              {moment.note}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function Shots({ shots }: { shots: readonly ShotContent[] }) {
  return (
    <div className="max-w-[560px] space-y-5">
      {shots.map((shot) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 560px"
          className={`block w-full h-auto ${FRAME}`}
        />
      ))}
    </div>
  );
}
