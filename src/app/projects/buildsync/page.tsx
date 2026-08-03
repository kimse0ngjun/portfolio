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

const project = getProject("buildsync");

export const metadata: Metadata = {
  title: "BuildSync",
  description: "건설 자재 발주 및 재고 관리 시스템 BuildSync 프로젝트",
};

export default function BuildSyncPage() {
  return (
    <article>
      <ProjectHero name={project.name} summary={project.summary} type={project.type} links={project.links} linkTitle="프로젝트 링크" />
      <div className="page-container divide-y divide-border">
        <ProjectOverviewSection id="overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="contribution-title" description={project.contributionDescription} items={project.contributions} placeholder={project.contributionPlaceholder} />
        <ProjectTechStackSection id="stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="architecture-title">
            <ProjectSectionHeading eyebrow="ARCHITECTURE" title="시스템 아키텍처" description={project.architectureDescription} id="architecture-title" />
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8" role="group" aria-label="BuildSync 시스템 아키텍처">
              <div className="grid items-center gap-4 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">ENTRY POINT</p><p className="mt-2 font-bold">Nginx :80</p></div>
                <span className="hidden text-muted md:block" aria-hidden="true">→</span>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">FRONTEND</p><p className="mt-2 font-bold">React</p></div>
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">BACKEND API</p><p className="mt-2 font-bold">Spring Boot :8080</p></div>
                </div>
                <span className="hidden text-muted md:block" aria-hidden="true">→</span>
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">DATABASE</p><p className="mt-2 font-bold">MySQL :3306</p></div>
              </div>
              <p className="mt-5 text-center text-xs leading-5 text-muted">각 서비스는 Docker Compose로 구성되며 MySQL 데이터는 Volume에 저장됩니다.</p>
            </div>
          </section>
        )}

        <ProjectFeaturesSection id="features-title" description={project.featuresDescription} items={project.features} />
        <ProjectTroubleshootingSection id="troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
      </div>
      <ProjectBackLink />
    </article>
  );
}
