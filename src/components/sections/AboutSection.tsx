const aboutTopics = [
  {
    number: "01",
    title: "자기소개",
    description:
      "개발자로서의 관심 분야와 강점을 설명할 자기소개가 들어갈 자리입니다.",
  },
  {
    number: "02",
    title: "성장 과정",
    description:
      "개발을 시작한 계기와 학습 과정, 경험의 흐름을 정리할 자리입니다.",
  },
  {
    number: "03",
    title: "개발 가치관",
    description:
      "협업과 문제 해결 과정에서 중요하게 생각하는 기준을 설명할 자리입니다.",
  },
] as const;

const statistics = [
  { label: "프로젝트 경험", value: "—" },
  { label: "사용 기술", value: "—" },
  { label: "문제 해결 사례", value: "—" },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-title"
    >
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-accent">
              ABOUT
            </p>
            <h2
              id="about-title"
              className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl"
            >
              경험을 설명할
              <span className="block text-muted">소개 영역입니다.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              확인된 자기소개 자료를 바탕으로 개발 과정과 가치관을 연결해
              작성할 예정입니다. 현재 문구는 섹션 구조를 확인하기 위한
              Placeholder입니다.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {aboutTopics.map((topic) => (
              <article
                key={topic.number}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-7"
              >
                <p
                  className="text-sm font-semibold text-accent"
                  aria-hidden="true"
                >
                  {topic.number}
                </p>
                <div>
                  <h3 className="text-lg font-bold">{topic.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                    {topic.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-muted">
                    TODO · 실제 자료 확인 후 작성
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid gap-3 sm:grid-cols-3 lg:ml-[calc(35%+2rem)] lg:mt-16"
          aria-label="주요 통계 Placeholder"
        >
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="rounded-xl border border-border bg-background p-5 sm:p-6"
            >
              <p
                className="text-3xl font-bold tracking-tight text-foreground"
                aria-label="수치 준비 중"
              >
                {statistic.value}
              </p>
              <p className="mt-3 text-sm font-semibold">{statistic.label}</p>
              <p className="mt-1 text-xs text-muted">TODO · 수치 확인 필요</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
