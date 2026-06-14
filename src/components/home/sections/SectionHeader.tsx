interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle: string;
  variant?: 'dark' | 'light';
}

/**
 * Shared section header component for Diagnosis and Solution sections
 * Handles multi-line title/subtitle rendering with consistent styling
 */
export function SectionHeader({ id, title, subtitle, variant = 'dark' }: SectionHeaderProps) {
  const titleClass = variant === 'dark'
    ? 'text-bleu-nuit'
    : 'text-white';

  const subtitleClass = variant === 'dark'
    ? 'text-bleu-nuit/70'
    : 'text-white/70';

  return (
    <>
      <h2 id={id} className={`text-h2 ${titleClass} mb-8`}>
        {title.split('\n').map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className={`text-lead-lg font-medium ${subtitleClass} max-w-3xl leading-tight`}>
          {subtitle.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
    </>
  );
}
