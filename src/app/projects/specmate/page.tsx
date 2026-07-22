import type { Metadata } from "next";
import Link from "next/link";
import { ProjectSectionHeading } from "@/components/project/ProjectSectionHeading";

const technologies = [
  "Spring Boot",
  "React",
  "PostgreSQL",
  "Qdrant",
  "OpenAI",
] as const;

const contributionPlaceholders = [
  "담당 기능",
  "설계 및 구현 범위",
  "팀 협업 범위",
] as const;

const featurePlaceholders = [
  "주요 기능 01",
  "주요 기능 02",
  "주요 기능 03",
] as const;

const troubleshootingPlaceholders = [
  "Trouble Shooting 01",
  "Trouble Shooting 02",
] as const;

export const metadata: Metadata = {
  title: "SpecMate",
  description: "AI 기반 PC 견적 추천 서비스 SpecMate 프로젝트",
};

export default function SpecMatePage() {
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
                  Team Project
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                SpecMate
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                AI 기반 PC 견적 추천 서비스
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-sm font-semibold">프로젝트 링크</p>
              <button
                type="button"
                disabled
                className="mt-4 inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted opacity-70"
                aria-describedby="specmate-github-status"
              >
                GitHub 준비 중
              </button>
              <p
                id="specmate-github-status"
                className="mt-3 text-xs leading-5 text-muted"
              >
                TODO · 공개 가능한 GitHub 주소 확인 후 연결
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="page-container divide-y divide-border">
        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="specmate-overview-title"
        >
          <ProjectSectionHeading
            eyebrow="OVERVIEW"
            title="프로젝트 개요"
            description="현재 확인된 프로젝트 기본 정보만 표시합니다. 세부 목적과 진행 정보는 자료 확인 후 작성합니다."
            id="specmate-overview-title"
          />
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">프로젝트 형태</dt>
              <dd className="mt-2 font-bold">Team Project</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">서비스 유형</dt>
              <dd className="mt-2 font-bold">AI 기반 PC 견적 추천 서비스</dd>
            </div>
            <div className="bg-surface p-5 sm:col-span-2 sm:p-6">
              <dt className="text-xs font-semibold text-muted">추가 정보</dt>
              <dd className="mt-2 text-sm text-muted">TODO · 자료 확인 후 작성</dd>
            </div>
          </dl>
        </section>

        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="specmate-contribution-title"
        >
          <ProjectSectionHeading
            eyebrow="MY CONTRIBUTION"
            title="담당 기능"
            description="개인 기여와 팀 전체 기여를 구분할 수 있는 자료를 확인한 뒤 작성합니다."
            id="specmate-contribution-title"
          />
          <ol className="space-y-3">
            {contributionPlaceholders.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-dashed border-border bg-surface p-5"
              >
                <span className="text-sm font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold">{item}</p>
                  <p className="mt-2 text-sm text-muted">TODO · 실제 기여 내용 확인 필요</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-stack-title">
          <ProjectSectionHeading
            eyebrow="TECH STACK"
            title="기술 스택"
            description="SpecMate를 구성하는 주요 기술을 영역별로 정리했습니다."
            id="specmate-stack-title"
          />
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="SpecMate 사용 기술">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold"
              >
                <span
                  className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle"
                  aria-hidden="true"
                />
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-architecture-title">
          <ProjectSectionHeading
            eyebrow="ARCHITECTURE"
            title="시스템 아키텍처"
            description="서비스 구성과 AI 추천 흐름을 확인한 뒤 아키텍처로 정리할 예정입니다."
            id="specmate-architecture-title"
          />
          <div
            className="mt-8 flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-8 text-center sm:min-h-80"
            role="img"
            aria-label="SpecMate 시스템 아키텍처 이미지 Placeholder"
          >
            <div>
              <p className="text-sm font-semibold">ARCHITECTURE PLACEHOLDER</p>
              <p className="mt-2 text-sm text-muted">TODO · 구성도와 대체 설명 준비 중</p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-features-title">
          <ProjectSectionHeading
            eyebrow="KEY FEATURES"
            title="주요 기능"
            description="검증된 기능 자료가 준비되면 주요 기능을 선별해 작성합니다."
            id="specmate-features-title"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featurePlaceholders.map((feature) => (
              <article
                key={feature}
                className="rounded-xl border border-dashed border-border p-5 sm:p-6"
              >
                <h3 className="font-bold">{feature}</h3>
                <p className="mt-3 text-sm text-muted">TODO · 기능 내용 확인 필요</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-troubleshooting-title">
          <ProjectSectionHeading
            eyebrow="TROUBLE SHOOTING"
            title="문제 해결"
            description="이번 단계에서는 트러블슈팅 제목 Placeholder만 구성합니다."
            id="specmate-troubleshooting-title"
          />
          <div className="mt-8 space-y-3">
            {troubleshootingPlaceholders.map((item, index) => (
              <article
                key={item}
                className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-surface p-5 sm:p-6"
              >
                <span className="text-sm font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold">{item} · TODO</h3>
              </article>
            ))}
          </div>
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
