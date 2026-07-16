type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
};

export function SectionHeader({ eyebrow, title, description, index }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          {index ? (
            <span className="font-mono text-[11px] font-medium tabular-nums text-ink-muted">{index}</span>
          ) : null}
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
