import Image from "next/image";

type ProjectArchitectureImageProps = {
  src: string;
  alt: string;
  projectName: string;
  flow: string;
};

export function ProjectArchitectureImage({
  src,
  alt,
  projectName,
  flow,
}: ProjectArchitectureImageProps) {
  return (
    <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="bg-white">
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          sizes="(max-width: 1280px) 100vw, 1152px"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="flex flex-col gap-3 border-t border-border px-5 py-4 text-sm leading-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="min-w-0">
          <span className="font-semibold text-foreground">핵심 흐름</span>
          <span className="mx-2 text-border" aria-hidden="true">·</span>
          <span className="text-muted">{flow}</span>
        </p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center rounded-lg font-semibold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`${projectName} 시스템 아키텍처 원본 이미지 새 창에서 보기`}
        >
          원본 크기로 보기 <span className="sr-only">(새 창에서 열림)</span><span aria-hidden="true">↗</span>
        </a>
      </figcaption>
    </figure>
  );
}
