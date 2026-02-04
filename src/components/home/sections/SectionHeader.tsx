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
      <h2 className={`text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] ${titleClass} mb-4 md:mb-6`}>
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h2>
      <h3 className={`text-base md:text-lg lg:text-xl font-medium ${subtitleClass} max-w-3xl leading-relaxed`}>
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
