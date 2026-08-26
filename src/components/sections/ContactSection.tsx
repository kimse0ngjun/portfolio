const repositories = [
  { label: "BuildSync", url: "https://github.com/kimse0ngjun/BuildSync" },
  { label: "Medicine Platform", url: "https://github.com/kimse0ngjun/medicine-platform" },
  { label: "SpecMate", url: "https://github.com/spec-mate" },
  { label: "VIA", url: "https://github.com/kimse0ngjun/via" },
] as const;

const externalLinkClassName =
  "inline-flex min-h-11 items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors hover:border-foreground hover:bg-foreground hover:text-background";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-title"
    >
      <div className="page-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-accent">CONTACT</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
            Contact
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            프로젝트와 개발 경험에 관한 연락은 이메일로 확인할 수 있습니다.
            공개 저장소에서는 구현 내용과 코드도 살펴보실 수 있습니다.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className={externalLinkClassName} href="mailto:tjdwns8083@gmail.com">
              이메일 보내기 <span aria-hidden="true">→</span>
            </a>
            <a
              className={externalLinkClassName}
              href="https://github.com/kimse0ngjun"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인 GitHub <span className="sr-only">(새 창에서 열림)</span><span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-4 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted" aria-label="이력서 상태">
            이력서 · 준비 중
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
          <h3 className="text-lg font-bold">프로젝트 저장소</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {repositories.map((repository) => (
              <li key={repository.url}>
                <a
                  className={`${externalLinkClassName} w-full`}
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repository.label}
                  <span className="sr-only"> 저장소(새 창에서 열림)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
