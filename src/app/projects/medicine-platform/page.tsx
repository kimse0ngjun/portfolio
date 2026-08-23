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
              eyebrow="ARCHITECTURE"
              title="시스템 아키텍처"
              description={project.architectureDescription}
              id="medicine-architecture-title"
            />
            <div
              className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-6 sm:p-8"
              role="group"
              aria-label="Medicine Platform 시스템 아키텍처 텍스트 설명"
            >
              <p className="text-center text-xs font-semibold tracking-[0.16em] text-muted">
                ARCHITECTURE IMAGE PLACEHOLDER
              </p>
              <p className="mt-5 text-center font-semibold">
                사용자 → React → Spring Boot REST API
              </p>
              <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-3" aria-label="Backend 연동 구성">
                <li className="rounded-lg border border-border bg-background p-4 text-center">
                  MySQL<br /><span className="text-xs text-muted">리콜 데이터 · 조회 이력</span>
                </li>
                <li className="rounded-lg border border-border bg-background p-4 text-center">
                  Tesseract OCR<br /><span className="text-xs text-muted">이미지 텍스트 · LOT 추출</span>
                </li>
                <li className="rounded-lg border border-border bg-background p-4 text-center">
                  Gemini API<br /><span className="text-xs text-muted">리콜 정보 요약</span>
                </li>
              </ul>
            </div>
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
              eyebrow="OUTCOMES & LEARNINGS"
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
