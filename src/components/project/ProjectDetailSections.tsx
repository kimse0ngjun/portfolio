import Image from "next/image";
import Link from "next/link";
import type {
  ProjectContentItem,
  ProjectImage,
  ProjectLink,
  ProjectOverviewItem,
  ProjectTechnologyGroup,
  ProjectTroubleshooting,
} from "@/types/project";
import { ProjectSectionHeading } from "./ProjectSectionHeading";

const sectionClassName = "py-16 sm:py-20 lg:py-24";

export function ProjectMediaSection({
  id,
  name,
  image,
  screenshots,
}: {
  id: string;
  name: string;
  image?: ProjectImage;
  screenshots?: readonly ProjectImage[];
}) {
  const images = image ? [image, ...(screenshots ?? [])] : [...(screenshots ?? [])];

  if (images.length === 0) return null;

  return (
    <section className={sectionClassName} aria-labelledby={id}>
      <ProjectSectionHeading
        eyebrow="프로젝트 자료"
        title="프로젝트 화면"
        description={`${name}의 실제 화면과 프로젝트 시각 자료입니다.`}
        id={id}
      />
      <div className="mt-8 grid gap-5">
        {images.map((projectImage) => (
          <figure key={projectImage.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src={projectImage.src}
              alt={projectImage.alt}
              width={projectImage.width}
              height={projectImage.height}
              sizes="(min-width: 1152px) 72rem, calc(100vw - 2rem)"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-border px-5 py-3 text-sm text-muted">
              {projectImage.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function isUsableExternalUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";
  } catch {
    return false;
  }
}

function ProjectLinks({ title, links }: { title: string; links?: readonly ProjectLink[] }) {
  const usableLinks = links?.filter((link) => isUsableExternalUrl(link.url)) ?? [];

  if (usableLinks.length === 0) return null;

  const primaryLinks = usableLinks.filter((link) => link.variant !== "secondary");
  const secondaryLinks = usableLinks.filter((link) => link.variant === "secondary");

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <p className="text-sm font-semibold">{title}</p>
      {primaryLinks.length > 0 && (
        <div className="mt-4 grid gap-2">
          {primaryLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              {link.label} <span className="sr-only">(새 창에서 열림)</span><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
      {secondaryLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center text-xs font-semibold text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          {link.label}<span className="sr-only">(새 창에서 열림)</span><span className="ml-1" aria-hidden="true">↗</span>
        </a>
      ))}
      {usableLinks.length === 1 && usableLinks[0].description && (
        <p className="mt-3 text-xs leading-5 text-muted">{usableLinks[0].description}</p>
      )}
    </div>
  );
}

type ProjectHeroProps = {
  name: string;
  summary: string;
  type: string;
  links?: readonly ProjectLink[];
  linkTitle?: string;
  linkPlaceholder?: string;
};

export function ProjectHero({ name, summary, type, links, linkTitle = "GitHub 저장소", linkPlaceholder }: ProjectHeroProps) {
  const hasUsableLinks = links?.some((link) => isUsableExternalUrl(link.url)) ?? false;
  const hasLinkPanel = hasUsableLinks || Boolean(linkPlaceholder);

  return (
    <header className="border-b border-border">
      <div className="page-container py-14 sm:py-20 lg:py-24">
        <ProjectBackLink compact />
        <div className={`mt-10 grid gap-10 lg:items-end lg:gap-16 ${hasLinkPanel ? "lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]" : ""}`}>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-accent">프로젝트 상세</p>
              <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">{type}</span>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">{name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{summary}</p>
          </div>
          {hasUsableLinks && <ProjectLinks title={linkTitle} links={links} />}
          {!hasUsableLinks && linkPlaceholder && (
            <div className="rounded-2xl border border-dashed border-border bg-surface p-5 sm:p-6">
              <p className="text-sm font-semibold">{linkTitle}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{linkPlaceholder}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export function ProjectOverviewSection({ id, description, items }: { id: string; description: string; items: readonly ProjectOverviewItem[] }) {
  if (items.length === 0) return null;
  return (
    <section className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24" aria-labelledby={id}>
      <ProjectSectionHeading eyebrow="개요" title="프로젝트 개요" description={description} id={id} />
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className={`bg-surface p-5 sm:p-6 ${item.fullWidth ? "sm:col-span-2" : ""}`}>
            <dt className="text-xs font-semibold text-muted">{item.label}</dt>
            <dd className="mt-2 font-bold">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ProjectContributionSection({ id, description, items, placeholder = false }: { id: string; description: string; items: readonly ProjectContentItem[]; placeholder?: boolean }) {
  if (items.length === 0) return null;
  return (
    <section className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-24" aria-labelledby={id}>
      <ProjectSectionHeading eyebrow="개인 기여" title="담당 기능" description={description} id={id} />
      <ol className="space-y-3">
        {items.map((item, index) => (
          <li key={item.title} className={`flex gap-4 rounded-xl border bg-surface p-5 sm:p-6 ${placeholder ? "border-dashed border-border" : "border-border"}`}>
            <span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div><h3 className="font-bold">{item.title}</h3><p className={`mt-2 text-sm text-muted ${placeholder ? "" : "leading-6"}`}>{item.description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectTechStackSection({ id, description, groups }: { id: string; description: string; groups: readonly ProjectTechnologyGroup[] }) {
  if (groups.length === 0) return null;
  return (
    <section className={sectionClassName} aria-labelledby={id}>
      <ProjectSectionHeading eyebrow="사용 기술" title="기술 스택" description={description} id={id} />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.label} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="font-bold">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.label} 기술`}>
              {group.items.map((technology) => <li key={technology} className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs font-medium">{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectFeaturesSection({ id, description, items, columns = "three" }: { id: string; description: string; items: readonly ProjectContentItem[]; columns?: "two" | "three" }) {
  if (items.length === 0) return null;
  return (
    <section className={sectionClassName} aria-labelledby={id}>
      <ProjectSectionHeading eyebrow="핵심 기능" title="주요 기능" description={description} id={id} />
      <div className={`mt-8 grid gap-4 sm:grid-cols-2 ${columns === "three" ? "lg:grid-cols-3" : ""}`}>
        {items.map((feature, index) => (
          <article key={feature.title} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="text-xs font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectTroubleshootingSection({ id, description, items }: { id: string; description?: string; items?: readonly ProjectTroubleshooting[] }) {
  if (!description || !items || items.length === 0) return null;
  const placeholdersOnly = items.every((item) => item.placeholder);
  return (
    <section className={sectionClassName} aria-labelledby={id}>
      <ProjectSectionHeading eyebrow="트러블슈팅" title="문제 해결" description={description} id={id} />
      <div className={`mt-8 ${placeholdersOnly ? "space-y-3" : "space-y-5"}`}>
        {items.map((item, index) => item.placeholder ? (
          <article key={item.title} className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-surface p-5 sm:p-6">
            <span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3 className="font-bold">{item.title} · 자료 준비 중</h3>
          </article>
        ) : (
          <article key={item.title} className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
            <div className="flex items-start gap-4"><span className="text-sm font-semibold text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1"><h3 className="text-lg font-bold">{item.title}</h3>
                {(item.problem || item.cause || item.solution) && <dl className={`mt-5 grid gap-5 ${item.cause ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
                  {item.problem && <div><dt className="text-xs font-semibold tracking-wide text-muted">문제</dt><dd className="mt-2 text-sm leading-6">{item.problem}</dd></div>}
                  {item.cause && <div><dt className="text-xs font-semibold tracking-wide text-muted">원인</dt><dd className="mt-2 text-sm leading-6">{item.cause}</dd></div>}
                  {item.solution && <div><dt className="text-xs font-semibold tracking-wide text-muted">해결</dt><dd className="mt-2 text-sm leading-6">{item.solution}</dd></div>}
                </dl>}
                {item.results && item.results.length > 0 && <div className="mt-5 border-t border-border pt-5"><p className="text-xs font-semibold tracking-wide text-muted">결과</p><ul className="mt-3 flex flex-wrap gap-2">{item.results.map((result) => <li key={result} className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent">{result}</li>)}</ul></div>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectBackLink({ compact = false }: { compact?: boolean }) {
  const link = <Link href="/#projects" className={compact ? "inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-semibold text-muted transition-colors hover:text-foreground" : "inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background"}><span className="mr-2" aria-hidden="true">←</span>프로젝트 목록으로 돌아가기</Link>;
  if (compact) return link;
  return <nav className="border-t border-border bg-surface/50" aria-label="프로젝트 상세 탐색"><div className="page-container py-10 sm:py-12">{link}</div></nav>;
}
