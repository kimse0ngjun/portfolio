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
              className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-8 text-center sm:p-10"
              role="group"
              aria-label="Medicine Platform 시스템 아키텍처 Placeholder"
            >
              <p className="font-semibold">Architecture Placeholder</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                구성 요소와 데이터 흐름을 확인할 수 있는 자료가 필요합니다.
              </p>
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

        <section
          className="py-16 sm:py-20 lg:py-24"
          aria-labelledby="medicine-outcomes-title"
        >
          <ProjectSectionHeading
            eyebrow="OUTCOMES & LEARNINGS"
            title="결과 및 배운 점"
            description="확인된 자료를 바탕으로 결과와 배운 점을 정리할 예정입니다."
            id="medicine-outcomes-title"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["프로젝트 결과", "배운 점"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-border bg-surface p-5 sm:p-6"
              >
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-muted">TODO · 자료 확인 필요</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ProjectBackLink />
    </article>
  );
}
