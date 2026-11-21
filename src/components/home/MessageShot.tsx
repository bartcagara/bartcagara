import Image from "next/image";
import type { MessageShotContent } from "./types";
import { FRAME, MICRO } from "./ui";

/**
 * A client's message screenshot at reading size, framed like /brief's reader
 * DM, with his name line under it.
 */
export function MessageShot({ message, className = "" }: { message: MessageShotContent; className?: string }) {
  return (
    <figure className={className}>
      <Image
        src={message.src}
        alt={message.alt}
        width={message.width}
        height={message.height}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 560px"
        className={`block w-full h-auto ${FRAME}`}
      />
      <figcaption className="mt-4">
        <span className={MICRO}>{message.caption}</span>
        {message.note && (
          <span className="block mt-2 text-base md:text-lg font-medium leading-snug text-pretty text-bleu-nuit/75">
            {message.note}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
