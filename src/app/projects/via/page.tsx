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

const project = getProject("via");

export const metadata: Metadata = {
  title: "VIA",
  description: "학생의 IT 분야 진로 탐색과 면접 준비를 돕는 AI 상담 플랫폼 VIA",
  alternates: { canonical: project.route },
  openGraph: { title: "VIA", description: project.summary, url: project.route },
};

export default function ViaPage() {
  return (
    <article>
      <ProjectHero name={project.name} summary={project.summary} type={project.type} links={project.links} />
      <div className="page-container divide-y divide-border">
        <ProjectOverviewSection id="via-overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="via-contribution-title" description={project.contributionDescription} items={project.contributions} />
        <ProjectTechStackSection id="via-stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-architecture-title">
            <ProjectSectionHeading eyebrow="ARCHITECTURE" title="시스템 아키텍처" description={project.architectureDescription} id="via-architecture-title" />
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8" role="group" aria-label="VIA 시스템 아키텍처">
              <div className="grid items-center gap-4 text-center lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">CLIENT</p><p className="mt-2 font-bold">React</p></div>
                <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-5"><p className="text-xs font-semibold text-accent">BACKEND API</p><p className="mt-2 font-bold">FastAPI</p><p className="mt-2 text-xs text-muted">인증 · 학생 정보 · 상담 · 이력</p></div>
                <span className="hidden text-muted lg:block" aria-hidden="true">→</span>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">DATABASE</p><p className="mt-2 font-bold">MongoDB</p></div>
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">EXTERNAL API</p><p className="mt-2 font-bold">OpenAI · 커리어넷</p></div>
                </div>
              </div>
            </div>
          </section>
        )}

        <ProjectFeaturesSection id="via-features-title" description={project.featuresDescription} items={project.features} columns="two" />
        <ProjectTroubleshootingSection id="via-troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-outcomes-title">
            <ProjectSectionHeading eyebrow="OUTCOMES & LEARNINGS" title="결과 및 배운 점" description="VIA를 구현하며 완성한 기능과 Prompt 설계 경험을 정리했습니다." id="via-outcomes-title" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{project.outcomes.map((outcome, index) => <li key={outcome} className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"><span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6">{outcome}</p></li>)}</ul>
          </section>
        )}
      </div>
      <ProjectBackLink />
    </article>
  );
}
