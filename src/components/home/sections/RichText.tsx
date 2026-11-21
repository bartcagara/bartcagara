import { H3, PROSE } from "@/components/home/ui";

/**
 * The copy style in one place: a line wrapped in ** is a key line, set in the
 * middle tier (bold and larger); **words** inside a line are bold in place.
 */

export function InlineBold({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-bleu-nuit">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export function isKeyLine(line: string) {
  return line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**");
}

export function Paragraphs({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <div className={`${PROSE} max-w-[34em] ${className}`}>
      {items.map((line, index) =>
        isKeyLine(line) ? (
          <p key={index} className={`${H3} text-bleu-nuit !my-8`}>
            {line.slice(2, -2)}
          </p>
        ) : (
          <p key={index}>
            <InlineBold text={line} />
          </p>
        )
      )}
    </div>
  );
}
