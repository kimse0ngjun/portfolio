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
import { ProjectArchitectureImage } from "@/components/project/ProjectArchitectureImage";
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
      <ProjectHero name={project.name} summary={project.summary} type={project.type} links={project.links} linkTitle="GitHub 저장소" />
      <div className="page-container divide-y divide-border">
        <ProjectMediaSection id="specmate-media-title" name={project.name} image={project.image} screenshots={project.screenshots} />
        <ProjectOverviewSection id="specmate-overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="specmate-contribution-title" description={project.contributionDescription} items={project.contributions} />
        <ProjectTechStackSection id="specmate-stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-architecture-title">
            <ProjectSectionHeading eyebrow="구성" title="시스템 아키텍처" description={project.architectureDescription} id="specmate-architecture-title" />
            <ProjectArchitectureImage
              src="/projects/specmate-architecture.png"
              projectName="SpecMate"
              alt="SpecMate의 React 프런트엔드, Spring Boot 백엔드, PostgreSQL과 Redis 데이터 계층, Qdrant 벡터 데이터베이스, OpenAI API 및 Docker Compose와 AWS EC2 배포 구성을 나타낸 시스템 아키텍처"
              flow="사용자 → React/Vite → Nginx → Spring Boot API → PostgreSQL·Redis·Qdrant → OpenAI API → 응답 반환"
            />
          </section>
        )}

        <ProjectFeaturesSection id="specmate-features-title" description={project.featuresDescription} items={project.features} />
        <ProjectTroubleshootingSection id="specmate-troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="specmate-outcomes-title">
            <ProjectSectionHeading eyebrow="성과와 학습" title="결과 및 배운 점" description="프로젝트를 통해 구현한 결과와 새롭게 학습한 내용을 정리했습니다." id="specmate-outcomes-title" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{project.outcomes.map((outcome, index) => <li key={outcome} className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"><span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6">{outcome}</p></li>)}</ul>
          </section>
        )}
      </div>
      <ProjectBackLink />
    </article>
  );
}
