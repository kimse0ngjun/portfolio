import type { Metadata } from "next";
import {
  ProjectBackLink,
  ProjectContributionSection,
  ProjectFeaturesSection,
  ProjectHero,
  ProjectMediaSection,
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
  alternates: { canonical: project.route },
  openGraph: { title: "BuildSync", description: project.summary, url: project.route },
};

export default function BuildSyncPage() {
  return (
    <article>
      <ProjectHero name={project.name} summary={project.summary} type={project.type} links={project.links} linkTitle="프로젝트 링크" />
      <div className="page-container divide-y divide-border">
        <ProjectMediaSection id="buildsync-media-title" name={project.name} image={project.image} screenshots={project.screenshots} />
        <ProjectOverviewSection id="overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="contribution-title" description={project.contributionDescription} items={project.contributions} placeholder={project.contributionPlaceholder} />
        <ProjectTechStackSection id="stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="architecture-title">
            <ProjectSectionHeading eyebrow="구성" title="시스템 아키텍처" description={project.architectureDescription} id="architecture-title" />
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-8" role="group" aria-label="BuildSync 시스템 아키텍처">
              <div className="grid items-center gap-4 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">진입점</p><p className="mt-2 font-bold">Nginx :80</p></div>
                <span className="hidden text-muted md:block" aria-hidden="true">→</span>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">프런트엔드</p><p className="mt-2 font-bold">React · Vite · TypeScript</p></div>
                  <div className="rounded-xl border border-border bg-background p-4"><p className="text-xs font-semibold text-muted">백엔드 API</p><p className="mt-2 font-bold">Spring Boot :8080</p><p className="mt-2 text-xs text-muted">Spring Security · JWT</p></div>
                </div>
                <span className="hidden text-muted md:block" aria-hidden="true">→</span>
                <div className="rounded-xl border border-border bg-background p-5"><p className="text-xs font-semibold text-muted">데이터베이스</p><p className="mt-2 font-bold">MySQL :3306</p></div>
              </div>
              <p className="mt-5 text-center text-xs leading-5 text-muted">AWS EC2에서 Nginx, 프런트엔드, 백엔드, MySQL을 Docker Compose로 구성하고 MySQL 데이터는 볼륨에 저장합니다.</p>
            </div>
          </section>
        )}

        <ProjectFeaturesSection id="features-title" description={project.featuresDescription} items={project.features} />
        <ProjectTroubleshootingSection id="troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="outcomes-title">
            <ProjectSectionHeading
              eyebrow="성과와 학습"
              title="결과 및 배운 점"
              description="BuildSync를 구현하고 통합하며 이해한 기술적 흐름과 협업 경험을 정리했습니다."
              id="outcomes-title"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.outcomes.map((outcome, index) => (
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
        )}
      </div>
      <ProjectBackLink />
    </article>
  );
}
