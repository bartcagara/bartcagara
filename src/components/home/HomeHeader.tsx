import Image from "next/image";
import { CONTAINER, GUTTER } from "./ui";

/** /brief's and /quiz's header: the label, Bart's name and headshot, the navy rule. */
export function HomeHeader({ label }: { label: string }) {
  return (
    <header className={GUTTER}>
      <div className={`${CONTAINER} h-[72px] md:h-24 flex items-center justify-between border-b-2 border-bleu-nuit`}>
        <span className="inline-block whitespace-nowrap bg-bleu-accent text-white font-mono text-xs uppercase tracking-normal px-3 py-1 shadow-[2px_2px_0_0_var(--bleu-nuit)]">
          {label}
        </span>
        <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[-0.02em]">
          <span className="hidden sm:flex flex-col items-end gap-1">
            Bart Cagara
            <span className="text-xs font-medium normal-case tracking-normal text-bleu-nuit/60">Fitness Coach to Founders</span>
          </span>
          <Image
            src="/images/bart-headshot.jpg"
            alt="Bart Cagara"
            width={224}
            height={224}
            priority
            className="w-10 h-10 rounded-full object-cover border-2 border-bleu-nuit"
          />
        </span>
      </div>
    </header>
  );
}
