interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-text" : "text-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text/85 leading-relaxed max-w-2xl text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
