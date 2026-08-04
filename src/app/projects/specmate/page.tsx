import type { Metadata } from "next";
import {
  ProjectBackLink,
  ProjectContributionSection,
  ProjectFeaturesSection,
  ProjectHero,
  ProjectOverviewSection,
  ProjectTechStackSection,
  ProjectTroubleshootingSection,
} from "@/components/project/ProjectDetailSections";
import { ProjectSectionHeading } from "@/components/project/ProjectSectionHeading";
import { getProject } from "@/data/projects";

const project = getProject("specmate");

export const metadata: Metadata = {
  title: "SpecMate",
  description: "AI 기반 PC 견적 추천 서비스 SpecMate 프로젝트",
  alternates: { canonical: project.route },
  openGraph: { title: "SpecMate", description: project.summary, url: project.route },
};

export default function SpecMatePage() {
  return (
    <article>
      <ProjectHero name={project.name} summary={project.summary} type={project.type} links={project.links} linkTitle="GitHub Repositories" />
      <div className="page-container divide-y divide-border">
        <ProjectOverviewSection id="specmate-overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="specmate-contribution-title" description={project.contributionDescription} items={project.contributions} />
        <ProjectTechStackSection id="specmate-stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-architecture-title">
            <ProjectSectionHeading eyebrow="ARCHITECTURE" title="시스템 아키텍처" description={project.architectureDescription} id="specmate-architecture-title" />
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8" role="group" aria-label="SpecMate 시스템 및 데이터 흐름">
              <div className="grid items-center gap-4 text-center lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">CLIENT</p><p className="mt-2 font-bold">React</p></div>
                <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-5"><p className="text-xs font-semibold text-accent">BACKEND</p><p className="mt-2 font-bold">Spring Boot API</p><p className="mt-2 text-xs text-muted">인증 · 상품 · 채팅 · 견적</p></div>
                <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">DATA</p><p className="mt-2 font-bold">PostgreSQL · Redis</p></div>
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">AI</p><p className="mt-2 font-bold">Spring AI · OpenAI · Qdrant</p></div>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-background p-4 text-center sm:flex-row sm:justify-center"><span className="text-xs font-semibold text-accent">DATA PIPELINE</span><span className="hidden text-muted sm:inline" aria-hidden="true">·</span><p className="text-sm text-muted">다나와 크롤러 → 카테고리별 JSON → PC 부품 상품 데이터</p></div>
            </div>
          </section>
        )}

        <ProjectFeaturesSection id="specmate-features-title" description={project.featuresDescription} items={project.features} />
        <ProjectTroubleshootingSection id="specmate-troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-outcomes-title">
            <ProjectSectionHeading eyebrow="OUTCOMES & LEARNINGS" title="결과 및 배운 점" description="프로젝트를 통해 구현한 결과와 새롭게 학습한 내용을 정리했습니다." id="specmate-outcomes-title" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{project.outcomes.map((outcome, index) => <li key={outcome} className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"><span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6">{outcome}</p></li>)}</ul>
          </section>
        )}
      </div>
      <ProjectBackLink />
    </article>
  );
}
