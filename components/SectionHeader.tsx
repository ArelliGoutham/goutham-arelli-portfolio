type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.26em] text-signal">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-lg leading-8 text-ink/72">{description}</p> : null}
    </div>
  );
}
