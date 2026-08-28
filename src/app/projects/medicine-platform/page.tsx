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

const project = getProject("medicine-platform");

export const metadata: Metadata = {
  title: "Medicine Platform",
  description: "의약품 리콜 정보를 검색하고 확인할 수 있는 Medicine Platform 프로젝트",
  alternates: { canonical: project.route },
  openGraph: { title: "Medicine Platform", description: project.summary, url: project.route },
};

export default function MedicinePlatformPage() {
  return (
    <article>
      <ProjectHero
        name={project.name}
        summary={project.summary}
        type={project.type}
        links={project.links}
        linkTitle="프로젝트 링크"
        linkPlaceholder="GitHub URL을 확인한 뒤 연결할 예정입니다."
      />

      <div className="page-container divide-y divide-border">
        <ProjectMediaSection
          id="medicine-media-title"
          name={project.name}
          image={project.image}
          screenshots={project.screenshots}
        />
        <ProjectOverviewSection
          id="medicine-overview-title"
          description={project.overviewDescription}
          items={project.overviewItems}
        />
        <ProjectContributionSection
          id="medicine-contribution-title"
          description={project.contributionDescription}
          items={project.contributions}
        />
        <ProjectTechStackSection
          id="medicine-stack-title"
          description={project.stackDescription}
          groups={project.technologyGroups}
        />

        {project.architectureDescription && (
          <section
            className="py-16 sm:py-20 lg:py-24"
            aria-labelledby="medicine-architecture-title"
          >
            <ProjectSectionHeading
              eyebrow="구성"
              title="시스템 아키텍처"
              description={project.architectureDescription}
              id="medicine-architecture-title"
            />
            <ProjectArchitectureImage
              src="/projects/medicine-platform-architecture.png"
              projectName="Medicine Platform"
              alt="Medicine Platform의 React 프런트엔드, Spring Boot 백엔드, MySQL 데이터베이스, Gemini API, Tesseract OCR 및 JWT 인증 흐름을 나타낸 시스템 아키텍처"
              flow="사용자 → React/Vite → Spring Boot REST API → MySQL·Gemini API·Tesseract OCR → 결과 반환"
            />
          </section>
        )}

        <ProjectFeaturesSection
          id="medicine-features-title"
          description={project.featuresDescription}
          items={project.features}
        />
        <ProjectTroubleshootingSection
          id="medicine-troubleshooting-title"
          description={project.troubleshootingDescription}
          items={project.troubleshooting}
        />

        {project.outcomes && project.outcomes.length > 0 && (
          <section
            className="py-16 sm:py-20 lg:py-24"
            aria-labelledby="medicine-outcomes-title"
          >
            <ProjectSectionHeading
              eyebrow="성과와 학습"
              title="결과 및 배운 점"
              description="구현 코드와 수정 이력에서 확인되는 결과와 개발 경험을 정리했습니다."
              id="medicine-outcomes-title"
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
