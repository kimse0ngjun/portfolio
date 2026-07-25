import type { Metadata } from "next";
import Link from "next/link";
import { ProjectSectionHeading } from "@/components/project/ProjectSectionHeading";

const technologyGroups = [
  {
    label: "Backend",
    items: [
      "Java 17",
      "Spring Boot 3.4.6",
      "Spring Security",
      "Spring Data JPA",
      "JWT",
      "SpringDoc OpenAPI",
    ],
  },
  {
    label: "Data & AI",
    items: [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "Spring AI",
      "OpenAI Assistant",
      "Qdrant",
      "RAG",
    ],
  },
  {
    label: "Frontend & Infra",
    items: [
      "React",
      "JavaScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "AWS",
    ],
  },
] as const;

const contributions = [
  {
    title: "Backend",
    description:
      "Spring Boot 기반 API와 인증, 상품, 채팅, 견적 도메인 및 AI 연동 구조를 담당했습니다.",
  },
  {
    title: "Data Crawling",
    description:
      "다나와 PC 부품 데이터 수집, 중복 제거, JSON 구조화와 임포트 흐름을 담당했습니다.",
  },
] as const;

const features = [
  {
    title: "AI 견적 생성",
    description: "예산, 용도, 선호 브랜드를 바탕으로 PC 부품 조합을 제안",
  },
  {
    title: "유사 부품 추천",
    description: "Qdrant 벡터 검색을 이용한 유사 부품 추천과 성능 비교",
  },
  {
    title: "대화형 상담",
    description: "AI 챗봇에서 견적을 요청하고 추천 결과와 설명을 확인",
  },
  {
    title: "관리자 기능",
    description: "부품 데이터, 사용자 견적 이력과 FAQ를 통합 관리",
  },
  {
    title: "부품 데이터 구조화",
    description: "다나와 크롤링 데이터를 정제해 JSON과 PostgreSQL로 관리",
  },
] as const;

const troubleshootingCases = [
  {
    title: "크롤링 데이터 누락 및 IP 차단",
    problem:
      "JavaScript 렌더링으로 실제 판매처 URL이 누락되고, 요청 과다로 특정 시간대에 IP가 차단되었습니다.",
    solution:
      "Selenium과 WebDriverWait으로 렌더링 완료 시점을 감지하고, 랜덤 지연·예외 처리·VPN 회전·재시도 로직을 적용했습니다.",
    results: [
      "크롤링 실패율 10% → 2%",
      "전체 수집 시간 2시간 → 1시간 30분",
      "실제 판매처 링크까지 수집",
    ],
  },
  {
    title: "중복 데이터 및 품질 문제",
    problem:
      "옵션별 동일 제품이 중복 수집되어 JSON 크기가 증가하고 제품을 구분할 기준이 부족했습니다.",
    solution:
      "제품명과 제조사를 조합한 중복 검사 알고리즘을 추가하고 중복 데이터 필터링과 JSON 정제를 자동화했습니다.",
    results: [
      "중복률 0% 달성",
      "데이터 용량 약 20% 감소",
      "AI 입력 데이터 품질 개선",
    ],
  },
  {
    title: "GPT 응답 오류 및 세션 맥락 단절",
    problem:
      "기존 GPT 호출 구조에서는 DB 연동과 대화 맥락 유지가 어렵고 Prompt의 역할과 출력 형식이 혼재했습니다.",
    solution:
      "Spring AI·Qdrant·OpenAI Assistant 기반 RAG 구조와 Thread 세션 관리를 도입하고 Prompt를 System·Role·Output Schema로 분리했습니다.",
    results: [
      "GPT 응답 오류율 15% → 2%",
      "DB 기반 견적 생성 및 자연어 응답",
      "RAG 챗봇 구조 완성",
    ],
  },
] as const;

const outcomes = [
  "JSON 임포트와 중복 제거를 포함한 부품 데이터 자동화 및 ERD 정립",
  "Spring Boot·Spring AI·Qdrant 기반 AI 견적 생성과 유사도 검색 구현",
  "LangChain과 LangGraph의 역할 차이 학습",
  "OpenAI Assistant를 활용한 Prompt와 Thread 구성",
  "운영자의 데이터·상담·사용자 통합 관리 흐름 설계",
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
                컴퓨터 하드웨어 지식이 부족한 사용자를 위한 AI 견적 에이전트
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-sm font-semibold">GitHub Repositories</p>
              <div className="mt-4 grid gap-2">
                <a
                  href="https://github.com/spec-mate/backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  Backend <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/spec-mate/data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  Data Crawling <span aria-hidden="true">↗</span>
                </a>
              </div>
              <a
                href="https://github.com/spec-mate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-semibold text-muted underline-offset-4 hover:text-foreground hover:underline"
              >
                SpecMate 전체 저장소 보기
                <span className="ml-1" aria-hidden="true">↗</span>
              </a>
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
            description="예산, 용도, 선호 브랜드 등 사용자의 요구를 분석해 PC 부품 조합을 제안하는 RAG 기반 웹 애플리케이션입니다."
            id="specmate-overview-title"
          />
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">프로젝트 형태</dt>
              <dd className="mt-2 font-bold">Team Project</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">담당 영역</dt>
              <dd className="mt-2 font-bold">Backend · Data Crawling</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">서비스 유형</dt>
              <dd className="mt-2 font-bold">AI 기반 PC 견적 추천</dd>
            </div>
            <div className="bg-surface p-5 sm:p-6">
              <dt className="text-xs font-semibold text-muted">데이터 영역</dt>
              <dd className="mt-2 font-bold">PC 부품 상품 데이터</dd>
            </div>
            <div className="bg-surface p-5 sm:col-span-2 sm:p-6">
              <dt className="text-xs font-semibold text-muted">진행 기간</dt>
              <dd className="mt-2 font-bold">2025.09.02 — 2025.11</dd>
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
            description="Backend 개발과 PC 부품 데이터 크롤링을 담당했습니다."
            id="specmate-contribution-title"
          />
          <ol className="space-y-3">
            {contributions.map((contribution, index) => (
              <li
                key={contribution.title}
                className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"
              >
                <span className="text-sm font-semibold text-accent" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold">{contribution.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {contribution.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-stack-title">
          <ProjectSectionHeading
            eyebrow="TECH STACK"
            title="기술 스택"
            description="SpecMate의 Backend와 데이터 수집 흐름을 구성하는 기술입니다."
            id="specmate-stack-title"
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

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-architecture-title">
          <ProjectSectionHeading
            eyebrow="ARCHITECTURE"
            title="시스템 아키텍처"
            description="Backend가 사용자 요청과 RAG 기반 AI 에이전트를 연결하고, 상품 데이터와 채팅·견적 이력을 관리합니다."
            id="specmate-architecture-title"
          />
          <div
            className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8"
            role="group"
            aria-label="SpecMate 시스템 및 데이터 흐름"
          >
            <div className="grid items-center gap-4 text-center lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="text-xs font-semibold text-muted">CLIENT</p>
                <p className="mt-2 font-bold">React</p>
              </div>
              <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
                <p className="text-xs font-semibold text-accent">BACKEND</p>
                <p className="mt-2 font-bold">Spring Boot API</p>
                <p className="mt-2 text-xs text-muted">인증 · 상품 · 채팅 · 견적</p>
              </div>
              <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
              <div className="grid gap-3">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">DATA</p>
                  <p className="mt-2 font-bold">PostgreSQL · Redis</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-xs font-semibold text-muted">AI</p>
                  <p className="mt-2 font-bold">Spring AI · OpenAI · Qdrant</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-background p-4 text-center sm:flex-row sm:justify-center">
              <span className="text-xs font-semibold text-accent">DATA PIPELINE</span>
              <span className="hidden text-muted sm:inline" aria-hidden="true">·</span>
              <p className="text-sm text-muted">
                다나와 크롤러 → 카테고리별 JSON → PC 부품 상품 데이터
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-features-title">
          <ProjectSectionHeading
            eyebrow="KEY FEATURES"
            title="주요 기능"
            description="Backend API와 데이터 저장소에서 확인되는 핵심 기능을 정리했습니다."
            id="specmate-features-title"
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

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-troubleshooting-title">
          <ProjectSectionHeading
            eyebrow="TROUBLE SHOOTING"
            title="문제 해결"
            description="데이터 수집과 AI 연동 과정에서 발생한 문제를 원인과 해결 결과 중심으로 정리했습니다."
            id="specmate-troubleshooting-title"
          />
          <div className="mt-8 space-y-5">
            {troubleshootingCases.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
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
                    <div className="mt-5 border-t border-border pt-5">
                      <p className="text-xs font-semibold tracking-wide text-muted">RESULT</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {item.results.map((result) => (
                          <li
                            key={result}
                            className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent"
                          >
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-outcomes-title">
          <ProjectSectionHeading
            eyebrow="OUTCOMES & LEARNINGS"
            title="결과 및 배운 점"
            description="프로젝트를 통해 구현한 결과와 새롭게 학습한 내용을 정리했습니다."
            id="specmate-outcomes-title"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <li
                key={outcome}
                className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"
              >
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
