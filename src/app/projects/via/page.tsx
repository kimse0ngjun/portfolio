import type { Metadata } from "next";
import Link from "next/link";
import { ProjectSectionHeading } from "@/components/project/ProjectSectionHeading";

const technologyGroups = [
  { label: "Frontend", items: ["JavaScript", "React", "Axios"] },
  { label: "Backend", items: ["Python", "FastAPI", "CORS Middleware"] },
  { label: "Data & AI", items: ["MongoDB", "OpenAI API", "커리어넷 API"] },
] as const;

const contributions = [
  {
    title: "개인화 진로 탐색",
    description:
      "사용자 정보와 관심 분야를 Prompt에 반영해 맞춤형 진로 상담 응답을 생성하는 Backend 흐름을 구현했습니다.",
  },
  {
    title: "마이페이지 사용자 정보 관리",
    description:
      "사용자와 학생 정보를 MongoDB에 저장·조회·수정·삭제하고 상담 응답의 사용자 맥락으로 연결했습니다.",
  },
  {
    title: "상담 정보 저장",
    description:
      "AI 상담 내용과 대화 이력을 저장하고, 상세 조회를 통해 이전 상담을 다시 확인할 수 있도록 구현했습니다.",
  },
  {
    title: "커리어넷 API 연동",
    description:
      "상담 질문에서 직업 정보를 탐색하고 커리어넷 데이터를 AI 응답에 결합하는 API 연동을 구현했습니다.",
  },
] as const;

const features = [
  {
    title: "개인화 진로 상담",
    description: "사용자의 관심 분야와 저장된 정보를 Prompt에 반영해 맞춤형 상담 제공",
  },
  {
    title: "마이페이지",
    description: "학생 정보를 저장·수정·삭제하고 진로 상담 응답에 활용",
  },
  {
    title: "상담 이력",
    description: "AI 상담 내용을 저장하고 상세 화면에서 이전 상담을 이어서 확인",
  },
  {
    title: "커리어넷 연동",
    description: "커리어넷 직업 정보를 상담 응답과 진로 추천에 결합",
  },
] as const;

const troubleshootingCases = [
  {
    title: "Prompt에 따른 응답 품질 편차",
    problem: "같은 의도의 질문도 표현 방식에 따라 응답의 정확성과 일관성이 달라졌습니다.",
    solution:
      "AI 역할과 사용자 정보를 명시하고, 친절하고 전문적인 어조와 간결한 출력 형식 등 응답 가이드라인을 Prompt에 분리해 지정했습니다.",
  },
  {
    title: "FastAPI와 React 연동 실패",
    problem: "브라우저의 CORS 정책으로 React에서 FastAPI API 호출이 차단되었습니다.",
    solution: "FastAPI에 CORS Middleware를 적용하고 허용 Origin을 환경별로 분리했습니다.",
  },
  {
    title: "OpenAI API 사용 비용 관리",
    problem: "정제되지 않은 데이터와 모델 테스트 과정에서 예상보다 많은 API 비용이 발생했습니다.",
    solution:
      "실험 전에 입력 데이터를 정제하고 API 사용량과 비용을 함께 확인해야 한다는 운영 기준을 정립했습니다.",
  },
] as const;

const outcomes = [
  "관심 분야와 기존 상담 기록을 활용한 맞춤형 진로 상담 구현",
  "학생 정보의 저장·수정·삭제와 상담 응답 연결",
  "AI 역할과 사용자 맥락, 출력 가이드라인을 활용한 Prompt 설계 경험",
] as const;

export const metadata: Metadata = {
  title: "VIA",
  description: "학생의 IT 분야 진로 탐색과 면접 준비를 돕는 AI 상담 플랫폼 VIA",
};

export default function ViaPage() {
  return (
    <article>
      <header className="border-b border-border">
        <div className="page-container py-14 sm:py-20 lg:py-24">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            <span className="mr-2" aria-hidden="true">←</span>
            Projects 목록으로 돌아가기
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-end lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent">
                  PROJECT DETAIL
                </p>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  Team Project · 3명
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                VIA
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                학생의 IT 분야 진로 탐색과 면접 준비를 돕는 AI 상담 플랫폼
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-sm font-semibold">GitHub Repository</p>
              <a
                href="https://github.com/kimse0ngjun/via"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                kimse0ngjun/via <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="page-container divide-y divide-border">
        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="via-overview-title"
        >
          <ProjectSectionHeading
            eyebrow="OVERVIEW"
            title="프로젝트 개요"
            description="학생의 관심 분야와 저장된 정보를 AI 상담에 연결해 진로 탐색과 면접 준비를 지원하는 웹 서비스입니다."
            id="via-overview-title"
          />
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">프로젝트 형태</dt>
              <dd className="mt-2 font-bold">3인 Team Project</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">서비스 유형</dt>
              <dd className="mt-2 font-bold">AI 진로 상담 플랫폼</dd>
            </div>
            <div className="bg-surface p-5 sm:col-span-2 sm:p-6">
              <dt className="text-xs font-semibold text-muted">진행 기간</dt>
              <dd className="mt-2 font-bold">2025.02.19 — 2025.06.13</dd>
            </div>
          </dl>
        </section>

        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="via-contribution-title"
        >
          <ProjectSectionHeading
            eyebrow="MY CONTRIBUTION"
            title="담당 기능"
            description="개인화 상담과 사용자·상담 데이터 관리, 외부 API 연동을 포함한 Backend 기능을 담당했습니다."
            id="via-contribution-title"
          />
          <ol className="space-y-3">
            {contributions.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"
              >
                <span className="text-sm font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-stack-title">
          <ProjectSectionHeading
            eyebrow="TECH STACK"
            title="기술 스택"
            description="VIA의 사용자 화면, 상담 API와 데이터 저장 흐름을 구성하는 기술입니다."
            id="via-stack-title"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {technologyGroups.map((group) => (
              <article key={group.label} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="font-bold">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.label} 기술`}>
                  {group.items.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-architecture-title">
          <ProjectSectionHeading
            eyebrow="ARCHITECTURE"
            title="시스템 아키텍처"
            description="FastAPI가 사용자 정보와 상담 이력을 MongoDB에서 조회하고 OpenAI 및 커리어넷 응답을 결합합니다."
            id="via-architecture-title"
          />
          <div
            className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8"
            role="group"
            aria-label="VIA 시스템 아키텍처"
          >
            <div className="grid items-center gap-4 text-center lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-semibold text-muted">CLIENT</p>
                <p className="mt-2 font-bold">React</p>
              </div>
              <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
                <p className="text-xs font-semibold text-accent">BACKEND API</p>
                <p className="mt-2 font-bold">FastAPI</p>
                <p className="mt-2 text-xs text-muted">인증 · 학생 정보 · 상담 · 이력</p>
              </div>
              <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
              <div className="grid gap-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">DATABASE</p>
                  <p className="mt-2 font-bold">MongoDB</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">EXTERNAL API</p>
                  <p className="mt-2 font-bold">OpenAI · 커리어넷</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-features-title">
          <ProjectSectionHeading
            eyebrow="KEY FEATURES"
            title="주요 기능"
            description="사용자 정보와 외부 API를 상담 경험에 연결한 핵심 기능입니다."
            id="via-features-title"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <article key={feature.title} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <p className="text-xs font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-troubleshooting-title">
          <ProjectSectionHeading
            eyebrow="TROUBLE SHOOTING"
            title="문제 해결"
            description="AI 응답 품질과 프론트엔드 연동, API 비용 관리 과정에서 얻은 경험입니다."
            id="via-troubleshooting-title"
          />
          <div className="mt-8 space-y-5">
            {troubleshootingCases.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <dl className="mt-5 grid gap-5 lg:grid-cols-2">
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-muted">PROBLEM</dt>
                        <dd className="mt-2 text-sm leading-6">{item.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-muted">SOLUTION</dt>
                        <dd className="mt-2 text-sm leading-6">{item.solution}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-outcomes-title">
          <ProjectSectionHeading
            eyebrow="OUTCOMES & LEARNINGS"
            title="결과 및 배운 점"
            description="VIA를 구현하며 완성한 기능과 Prompt 설계 경험을 정리했습니다."
            id="via-outcomes-title"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6">
                <span className="text-sm font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6">{outcome}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="border-t border-border bg-surface/50" aria-label="프로젝트 상세 탐색">
        <div className="page-container py-10 sm:py-12">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span className="mr-2" aria-hidden="true">←</span>
            Projects 목록으로 돌아가기
          </Link>
        </div>
      </nav>
    </article>
  );
}
