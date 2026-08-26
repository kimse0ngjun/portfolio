import Link from "next/link";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";

const developmentValues = [
  {
    title: "문제의 원인을 먼저 확인합니다",
    description:
      "기능이 동작하는 데서 끝내지 않고 오류가 발생한 지점과 원인을 확인합니다. 확인한 원인을 바탕으로 같은 문제가 반복되지 않는 해결 방법을 찾습니다.",
  },
  {
    title: "유지보수 가능한 구조를 고민합니다",
    description:
      "중복을 줄이고 역할과 책임을 분리해 변경의 영향을 파악하기 쉬운 구조를 만들고자 합니다. 새로운 기능을 추가할 때 기존 코드를 안전하게 확장할 수 있는지도 함께 살핍니다.",
  },
  {
    title: "협업 가능한 코드를 작성합니다",
    description:
      "명확한 이름과 일관된 구조로 다른 사람이 흐름을 이해할 수 있는 코드를 지향합니다. 작업 단위를 나누고 필요한 내용을 문서로 남기는 과정을 중요하게 생각합니다.",
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
              백엔드 개발자 · 포트폴리오
            </p>

            <h1
              id="hero-title"
              className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
            >
              안녕하세요.
              <span className="block text-accent">
                백엔드 개발자 김성준입니다.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              문제의 원인을 살피고 유지보수하기 쉬운 구조를 고민하며
              성장하고 있습니다. 프로젝트를 통해 인증과 데이터 처리부터 AI
              서비스 연동과 배포까지 경험했습니다.
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
              <Link
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                Contact
              </Link>
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
              핵심 소개
            </p>
            <h2 id="intro-title" className="mt-3 text-xl font-bold sm:text-2xl">
              개발 가치관
            </h2>
            <div className="mt-6 space-y-4">
              {developmentValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <h3 className="text-sm font-semibold">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
