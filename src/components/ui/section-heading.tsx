interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {label && (
        <div
          className={`mb-4 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
        >
          <div className="gold-line" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-novo-gold">
            {label}
          </span>
        </div>
      )}
      <h2 className="heading-section text-balance">{title}</h2>
      {description && (
        <p className="mt-6 text-lg leading-relaxed text-novo-muted">
          {description}
        </p>
      )}
    </div>
  );
}
