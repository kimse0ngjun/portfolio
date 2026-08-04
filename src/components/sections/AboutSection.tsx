const aboutTopics = [
  {
    number: "01",
    title: "백엔드 개발 경험",
    description:
      "Java와 Spring Boot를 중심으로 백엔드 개발을 학습하고 프로젝트에 적용했습니다. Spring Security와 JWT를 활용한 인증부터 일정·거래처 관리, 월별·현장별 데이터 분석 기능을 구현하며 요청과 데이터의 흐름을 익혔습니다.",
  },
  {
    number: "02",
    title: "프로젝트 경험",
    description:
      "BuildSync에서는 인증과 업무 데이터 처리, 배포를 경험했고 SpecMate와 VIA에서는 검색 구조와 프롬프트 설계, 상담 이력 관리 등 AI 기능을 서비스에 연결했습니다. 서로 다른 기술을 나열하기보다 각 기능에 필요한 저장 방식과 연동 구조를 선택하는 과정을 경험했습니다.",
  },
  {
    number: "03",
    title: "성장 과정",
    description:
      "처음에는 기능을 완성하는 데 집중했지만 프로젝트를 거치며 인증, 데이터 구조, 배포 과정에서 발생하는 문제를 직접 마주했습니다. 이후 임시로 동작하게 만드는 것보다 원인을 분석하고 구조를 개선하는 방향으로 접근하며 유지보수성과 협업을 함께 고려하고 있습니다.",
  },
] as const;

const statistics = [
  { label: "대표 프로젝트", value: "4개", description: "Featured Projects" },
  { label: "주요 분야", value: "Backend", description: "Backend Focus" },
  { label: "프로젝트 유형", value: "Team", description: "Team Collaboration" },
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
              문제를 이해하고
              <span className="block text-muted">구조로 해결합니다.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              기능 구현에 그치지 않고 문제의 원인과 데이터의 흐름을
              이해하려고 합니다. 경험을 바탕으로 안정적이고 유지보수하기
              쉬운 서비스를 만드는 백엔드 개발자로 성장하고자 합니다.
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
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-12 grid gap-3 sm:grid-cols-3 lg:ml-[calc(35%+2rem)] lg:mt-16"
          aria-label="주요 개발 경험"
        >
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="rounded-xl border border-border bg-background p-5 sm:p-6"
            >
              <p
                className="text-3xl font-bold tracking-tight text-foreground"
                aria-label={`${statistic.label} ${statistic.value}`}
              >
                {statistic.value}
              </p>
              <p className="mt-3 text-sm font-semibold">{statistic.label}</p>
              <p className="mt-1 text-xs text-muted">
                {statistic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
