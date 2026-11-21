import Image from "next/image";
import { CHIP, CONTAINER, GUTTER } from "./ui";

/** /quiz's header: the label, Bart's round headshot, the navy rule. */
export function HomeHeader({ label }: { label: string }) {
  return (
    <header className={GUTTER}>
      <div className={`${CONTAINER} h-[72px] md:h-24 flex items-center justify-between border-b-2 border-bleu-nuit`}>
        <span className={CHIP}>{label}</span>
        <Image
          src="/images/bart-headshot.jpg"
          alt="Bart Cagara"
          width={224}
          height={224}
          priority
          className="w-10 h-10 rounded-full object-cover border-2 border-bleu-nuit"
        />
      </div>
    </header>
  );
}
