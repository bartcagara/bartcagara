interface SectionHeaderProps {
  title: string;
  subtitle: string;
  variant?: 'dark' | 'light';
}

/**
 * Shared section header component for Diagnosis and Solution sections
 * Handles multi-line title/subtitle rendering with consistent styling
 */
export function SectionHeader({ title, subtitle, variant = 'dark' }: SectionHeaderProps) {
  const titleClass = variant === 'dark'
    ? 'text-bleu-nuit'
    : 'text-white';

  const subtitleClass = variant === 'dark'
    ? 'text-bleu-nuit/60'
    : 'text-white/60';

  return (
    <>
      <h2 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] ${titleClass} mb-8`}>
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h2>
      <h3 className={`text-2xl md:text-3xl font-medium ${subtitleClass} max-w-3xl leading-tight`}>
        {subtitle.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < subtitle.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h3>
    </>
  );
}
