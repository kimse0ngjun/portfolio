import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-title"
    >
      <div className="page-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-accent">
              PROJECTS
            </p>
            <h2
              id="projects-title"
              className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl"
            >
              프로젝트
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            프로젝트의 목적과 사용 기술을 간략히 소개합니다. 각 프로젝트의
            담당 기능과 문제 해결 과정은 상세 페이지에서 확인할 수 있습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg focus-within:border-accent/60 focus-within:shadow-lg"
            >
              <div
                className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-background"
                role="img"
                aria-label={`${project.name} 프로젝트 이미지 Placeholder`}
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted">
                    IMAGE PLACEHOLDER
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {project.cardType ?? project.type}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.cardDescription}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`${project.name} 사용 기술`}
                >
                  {project.cardTechnologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.route}
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                  aria-label={`${project.name} 상세 페이지 보기`}
                >
                  View Detail
                  <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
