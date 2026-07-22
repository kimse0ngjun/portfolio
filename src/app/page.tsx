import Link from "next/link";

const placeholderSections = [
  {
    id: "about",
    eyebrow: "ABOUT",
    title: "자기소개",
    description:
      "개발자로서의 방향과 경험을 설명할 자기소개가 들어갈 자리입니다.",
  },
  {
    id: "skills",
    eyebrow: "TECH STACK",
    title: "기술 스택",
    description:
      "실제 프로젝트에서 사용한 기술과 활용 경험을 정리할 자리입니다.",
  },
  {
    id: "projects",
    eyebrow: "PROJECTS",
    title: "프로젝트",
    description:
      "BuildSync, Medicine-platform, SpecMate, VIA를 소개할 자리입니다.",
  },
  {
    id: "contact",
    eyebrow: "CONTACT",
    title: "연락처",
    description: "확인된 GitHub 주소와 이메일을 연결할 자리입니다.",
  },
] as const;

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section
        className="page-container flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20 lg:py-24"
        aria-labelledby="hero-title"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-muted sm:text-sm">
              BACKEND DEVELOPER · PORTFOLIO
            </p>

            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
            >
              핵심 소개 문구를
              <span className="block text-accent">준비하고 있습니다.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              실제 경험과 기술적 판단, 문제 해결 과정을 확인한 뒤 소개 문구로
              교체할 예정입니다. 현재 내용은 Home 구조 확인을 위한
              Placeholder입니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                프로젝트 영역 보기
                <span className="ml-2" aria-hidden="true">
                  ↓
                </span>
              </Link>
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-muted opacity-70"
                aria-describedby="resume-status"
              >
                이력서 준비 중
              </button>
              <span id="resume-status" className="sr-only">
                이력서 PDF가 준비된 후 활성화됩니다.
              </span>
            </div>
          </div>

          <aside
            className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            aria-labelledby="intro-title"
          >
            <div
              className="absolute -right-16 -top-16 -z-10 size-44 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold tracking-[0.16em] text-accent">
              CORE INTRODUCTION
            </p>
            <h2 id="intro-title" className="mt-3 text-xl font-bold sm:text-2xl">
              핵심 소개 영역
            </h2>
            <div className="mt-6 space-y-4">
              {["개발 방향", "주요 경험", "문제 해결 기준"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-dashed border-border bg-background p-4"
                >
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    TODO · 확인된 자료로 작성 예정
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="border-t border-border bg-surface/50">
        <div className="page-container grid gap-px py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4 lg:py-24">
          {placeholderSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-b border-border py-8 first:pt-0 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:last:pr-0"
              aria-labelledby={`${section.id}-title`}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-accent">
                {section.eyebrow}
              </p>
              <h2
                id={`${section.id}-title`}
                className="mt-3 text-xl font-bold tracking-tight"
              >
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {section.description}
              </p>
              <p className="mt-5 text-xs font-semibold text-muted">
                TODO · 콘텐츠 준비 중
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
