export default function Home() {
  return (
    <div className="page-container py-16 sm:py-20 lg:py-24">
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-10">
        <p className="mb-3 text-sm font-semibold text-accent">PORTFOLIO</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          홈 콘텐츠 준비 중
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          공통 레이아웃이 적용되었습니다. 자기소개와 프로젝트 정보는 실제
          자료를 확인한 뒤 다음 단계에서 추가합니다.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["about", "skills", "projects", "contact"].map((id) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-24 rounded-xl border border-dashed border-border p-5"
            aria-labelledby={`${id}-title`}
          >
            <h2 id={`${id}-title`} className="font-semibold capitalize">
              {id}
            </h2>
            <p className="mt-2 text-sm text-muted">콘텐츠 준비 중</p>
          </section>
        ))}
      </div>
    </div>
  );
}
