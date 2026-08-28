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
        <ProjectMediaSection id="via-media-title" name={project.name} image={project.image} screenshots={project.screenshots} />
        <ProjectOverviewSection id="via-overview-title" description={project.overviewDescription} items={project.overviewItems} />
        <ProjectContributionSection id="via-contribution-title" description={project.contributionDescription} items={project.contributions} />
        <ProjectTechStackSection id="via-stack-title" description={project.stackDescription} groups={project.technologyGroups} />

        {project.architectureDescription && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-architecture-title">
            <ProjectSectionHeading eyebrow="구성" title="시스템 아키텍처" description={project.architectureDescription} id="via-architecture-title" />
            <ProjectArchitectureImage
              src="/projects/via-architecture.png"
              projectName="VIA"
              alt="VIA의 React 프런트엔드, FastAPI 백엔드, MongoDB 기반 사용자 정보와 상담 이력, 커리어넷 외부 정보, OpenAI API 및 Docker Compose와 AWS EC2 배포 구성을 나타낸 시스템 아키텍처"
              flow="사용자 → React/Vite → FastAPI → MongoDB·커리어넷 컨텍스트 → OpenAI API → 응답 저장 및 반환"
            />
          </section>
        )}

        <ProjectFeaturesSection id="via-features-title" description={project.featuresDescription} items={project.features} columns="two" />
        <ProjectTroubleshootingSection id="via-troubleshooting-title" description={project.troubleshootingDescription} items={project.troubleshooting} />
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="via-outcomes-title">
            <ProjectSectionHeading eyebrow="성과와 학습" title="결과 및 배운 점" description="VIA를 구현하며 완성한 기능과 프롬프트 설계 경험을 정리했습니다." id="via-outcomes-title" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{project.outcomes.map((outcome, index) => <li key={outcome} className="flex gap-4 rounded-xl border border-border bg-surface p-5 sm:p-6"><span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p className="text-sm leading-6">{outcome}</p></li>)}</ul>
          </section>
        )}
      </div>
      <ProjectBackLink />
    </article>
  );
}
