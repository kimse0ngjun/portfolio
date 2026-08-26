const techCategories = [
  {
    name: "백엔드",
    marker: "BE",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MyBatis",
      "FastAPI",
    ],
    layout: "lg:col-span-2",
  },
  {
    name: "데이터베이스",
    marker: "DB",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Qdrant"],
    layout: "lg:col-span-2",
  },
  {
    name: "프런트엔드",
    marker: "FE",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript"],
    layout: "lg:col-span-2",
  },
  {
    name: "인프라",
    marker: "DO",
    technologies: ["Docker", "Docker Compose", "Nginx", "AWS EC2", "AWS RDS"],
    layout: "lg:col-span-3",
  },
  {
    name: "도구",
    marker: "TL",
    technologies: ["Git", "GitHub", "Swagger", "Postman"],
    layout: "lg:col-span-3",
  },
] as const;

export function TechStackSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-16 sm:py-20 lg:py-24"
      aria-labelledby="tech-stack-title"
    >
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent">
            기술 스택
          </p>
          <h2
            id="tech-stack-title"
            className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl"
          >
            사용 기술
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            사용 경험이 확인된 기술을 역할에 따라 분류했습니다. 숙련도를
            임의의 수치로 표현하지 않으며, 구체적인 활용 경험은 프로젝트
            상세 페이지에서 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6">
          {techCategories.map((category) => (
            <article
              key={category.name}
              className={`group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6 ${category.layout}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-xs font-bold tracking-wide text-accent"
                  aria-hidden="true"
                >
                  {category.marker}
                </span>
                <h3 className="text-lg font-bold tracking-tight">
                  {category.name}
                </h3>
              </div>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label={`${category.name} 기술 목록`}
              >
                {category.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground"
                  >
                    <span
                      className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle"
                      aria-hidden="true"
                    />
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
