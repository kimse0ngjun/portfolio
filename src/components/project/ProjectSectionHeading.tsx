type ProjectSectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
};

export function ProjectSectionHeading({
  eyebrow,
  title,
  description,
  id,
}: ProjectSectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-2xl font-bold tracking-[-0.02em] sm:text-3xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}
