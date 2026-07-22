import type { Metadata } from "next";
import Link from "next/link";
import { ProjectSectionHeading as SectionHeading } from "@/components/project/ProjectSectionHeading";

const technologyGroups = [
  {
    label: "Backend",
    items: ["Java 17", "Spring Boot 3.5.5", "Spring Security", "Spring Data JPA", "JWT"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Axios"],
  },
  {
    label: "Infrastructure",
    items: ["MySQL 8", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "AWS"],
  },
] as const;

const contributionPlaceholders = [
  "담당 기능",
  "설계 및 구현 범위",
  "팀 협업 범위",
] as const;

const features = [
  {
    title: "공사 현장 관리",
    description: "현장 등록·수정·삭제와 현장별 자재 사용 내역 및 비용 분석",
  },
  {
    title: "발주 관리",
    description: "발주서 작성과 발주 요청·승인·취소 및 상태 관리",
  },
  {
    title: "자재 및 재고 관리",
    description: "자재 등록·수정·삭제, 입출고 처리와 재고 부족 알림",
  },
  {
    title: "일정 관리",
    description: "공사 일정을 등록하고 캘린더 형식으로 조회",
  },
  {
    title: "거래처 관리",
    description: "거래처 등록·수정·삭제와 목록 조회",
  },
  {
    title: "관리자 기능",
    description: "관리자 로그인과 사용자 권한 및 시스템 관리",
  },
] as const;

const troubleshootingPlaceholders = [
  "Trouble Shooting 01",
  "Trouble Shooting 02",
] as const;

export const metadata: Metadata = {
  title: "BuildSync",
  description: "건설 자재 발주 및 재고 관리 시스템 BuildSync 프로젝트",
};

export default function BuildSyncPage() {
  return (
    <article>
      <header className="border-b border-border">
        <div className="page-container py-14 sm:py-20 lg:py-24">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
          >
            <span className="mr-2" aria-hidden="true">
              ←
            </span>
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
                BuildSync
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                건설 자재 발주 및 재고 관리 시스템
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-sm font-semibold">프로젝트 링크</p>
              <a
                href="https://github.com/kimse0ngjun/BuildSync"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                aria-describedby="github-description"
              >
                GitHub Repository
                <span className="ml-2" aria-hidden="true">↗</span>
              </a>
              <p id="github-description" className="mt-3 text-xs leading-5 text-muted">
                새 창에서 BuildSync 공개 저장소를 엽니다.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="page-container divide-y divide-border">
        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="overview-title"
        >
          <SectionHeading
            eyebrow="OVERVIEW"
            title="프로젝트 개요"
            description="현재 확인된 프로젝트 기본 정보만 표시합니다. 기간과 인원 등 추가 정보는 자료 확인 후 작성합니다."
            id="overview-title"
          />
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">프로젝트 형태</dt>
              <dd className="mt-2 font-bold">Team Project</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">서비스 유형</dt>
              <dd className="mt-2 font-bold">발주 및 재고 관리 시스템</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">애플리케이션 구성</dt>
              <dd className="mt-2 font-bold">Frontend · Backend · Database</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">실행 환경</dt>
              <dd className="mt-2 font-bold">Docker Compose</dd>
            </div>
          </dl>
        </section>

        <section
          className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24"
          aria-labelledby="contribution-title"
        >
          <SectionHeading
            eyebrow="MY CONTRIBUTION"
            title="담당 기능"
            description="개인 기여와 팀 전체 기여를 구분할 수 있는 자료를 확인한 뒤 작성합니다."
            id="contribution-title"
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

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="stack-title">
          <SectionHeading
            eyebrow="TECH STACK"
            title="기술 스택"
            description="BuildSync 저장소의 README와 구성 파일에서 확인한 기술을 역할별로 정리했습니다."
            id="stack-title"
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

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="architecture-title">
          <SectionHeading
            eyebrow="ARCHITECTURE"
            title="시스템 아키텍처"
            description="Nginx가 진입점이 되어 React 프론트엔드와 Spring Boot API 요청을 분기하고, 백엔드는 MySQL과 연결됩니다."
            id="architecture-title"
          />
          <div
            className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8"
            role="group"
            aria-label="BuildSync 시스템 아키텍처"
          >
            <div className="grid items-center gap-4 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-semibold text-muted">ENTRY POINT</p>
                <p className="mt-2 font-bold">Nginx :80</p>
              </div>
              <span className="hidden text-muted md:block" aria-hidden="true">→</span>
              <div className="grid gap-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">FRONTEND</p>
                  <p className="mt-2 font-bold">React</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">BACKEND API</p>
                  <p className="mt-2 font-bold">Spring Boot :8080</p>
                </div>
              </div>
              <span className="hidden text-muted md:block" aria-hidden="true">→</span>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-semibold text-muted">DATABASE</p>
                <p className="mt-2 font-bold">MySQL :3306</p>
              </div>
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-muted">
              각 서비스는 Docker Compose로 구성되며 MySQL 데이터는 Volume에 저장됩니다.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="features-title">
          <SectionHeading
            eyebrow="KEY FEATURES"
            title="주요 기능"
            description="BuildSync 저장소 README에서 확인한 서비스 기능을 영역별로 정리했습니다."
            id="features-title"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="troubleshooting-title">
          <SectionHeading
            eyebrow="TROUBLE SHOOTING"
            title="문제 해결"
            description="이번 단계에서는 트러블슈팅 제목 Placeholder만 구성합니다."
            id="troubleshooting-title"
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
            <span className="mr-2" aria-hidden="true">
              ←
            </span>
            Projects 목록으로 돌아가기
          </Link>
        </div>
      </nav>
    </article>
  );
}
