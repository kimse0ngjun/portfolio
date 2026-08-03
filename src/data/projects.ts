import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "buildsync",
    route: "/projects/buildsync",
    name: "BuildSync",
    summary: "건설 자재 발주 및 재고 관리 시스템",
    cardDescription: "건설 자재 발주 및 재고 관리 시스템",
    type: "Team Project",
    cardType: "Team Project",
    cardTechnologies: ["Spring Boot", "React", "MySQL", "Docker", "AWS"],
    technologyGroups: [
      { label: "Backend", items: ["Java 17", "Spring Boot 3.5.5", "Spring Security", "Spring Data JPA", "JWT"] },
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Axios"] },
      { label: "Infrastructure", items: ["MySQL 8", "Docker", "Docker Compose", "Nginx", "GitHub Actions", "AWS"] },
    ],
    overviewDescription: "현재 확인된 프로젝트 기본 정보만 표시합니다. 기간과 인원 등 추가 정보는 자료 확인 후 작성합니다.",
    overviewItems: [
      { label: "프로젝트 형태", value: "Team Project" },
      { label: "서비스 유형", value: "발주 및 재고 관리 시스템" },
      { label: "애플리케이션 구성", value: "Frontend · Backend · Database" },
      { label: "실행 환경", value: "Docker Compose" },
    ],
    contributionDescription: "개인 기여와 팀 전체 기여를 구분할 수 있는 자료를 확인한 뒤 작성합니다.",
    contributions: [
      { title: "담당 기능", description: "TODO · 실제 기여 내용 확인 필요" },
      { title: "설계 및 구현 범위", description: "TODO · 실제 기여 내용 확인 필요" },
      { title: "팀 협업 범위", description: "TODO · 실제 기여 내용 확인 필요" },
    ],
    contributionPlaceholder: true,
    stackDescription: "BuildSync 저장소의 README와 구성 파일에서 확인한 기술을 역할별로 정리했습니다.",
    architectureDescription: "Nginx가 진입점이 되어 React 프론트엔드와 Spring Boot API 요청을 분기하고, 백엔드는 MySQL과 연결됩니다.",
    featuresDescription: "BuildSync 저장소 README에서 확인한 서비스 기능을 영역별로 정리했습니다.",
    features: [
      { title: "공사 현장 관리", description: "현장 등록·수정·삭제와 현장별 자재 사용 내역 및 비용 분석" },
      { title: "발주 관리", description: "발주서 작성과 발주 요청·승인·취소 및 상태 관리" },
      { title: "자재 및 재고 관리", description: "자재 등록·수정·삭제, 입출고 처리와 재고 부족 알림" },
      { title: "일정 관리", description: "공사 일정을 등록하고 캘린더 형식으로 조회" },
      { title: "거래처 관리", description: "거래처 등록·수정·삭제와 목록 조회" },
      { title: "관리자 기능", description: "관리자 로그인과 사용자 권한 및 시스템 관리" },
    ],
    troubleshootingDescription: "이번 단계에서는 트러블슈팅 제목 Placeholder만 구성합니다.",
    troubleshooting: [
      { title: "Trouble Shooting 01", placeholder: true },
      { title: "Trouble Shooting 02", placeholder: true },
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/kimse0ngjun/BuildSync", description: "새 창에서 BuildSync 공개 저장소를 엽니다.", variant: "primary" },
    ],
  },
  {
    slug: "specmate",
    route: "/projects/specmate",
    name: "SpecMate",
    summary: "컴퓨터 하드웨어 지식이 부족한 사용자를 위한 AI 견적 에이전트",
    cardDescription: "AI 기반 PC 견적 추천 서비스",
    type: "Team Project",
    cardType: "Team Project",
    period: "2025.09.02 — 2025.11",
    cardTechnologies: ["Spring Boot", "React", "PostgreSQL", "Qdrant", "OpenAI"],
    technologyGroups: [
      { label: "Backend", items: ["Java 17", "Spring Boot 3.4.6", "Spring Security", "Spring Data JPA", "JWT", "SpringDoc OpenAPI"] },
      { label: "Data & AI", items: ["Python", "Selenium", "BeautifulSoup", "Spring AI", "OpenAI Assistant", "Qdrant", "RAG"] },
      { label: "Frontend & Infra", items: ["React", "JavaScript", "PostgreSQL", "Redis", "Docker", "Nginx", "AWS"] },
    ],
    overviewDescription: "예산, 용도, 선호 브랜드 등 사용자의 요구를 분석해 PC 부품 조합을 제안하는 RAG 기반 웹 애플리케이션입니다.",
    overviewItems: [
      { label: "프로젝트 형태", value: "Team Project" },
      { label: "담당 영역", value: "Backend · Data Crawling" },
      { label: "서비스 유형", value: "AI 기반 PC 견적 추천" },
      { label: "데이터 영역", value: "PC 부품 상품 데이터" },
      { label: "진행 기간", value: "2025.09.02 — 2025.11", fullWidth: true },
    ],
    contributionDescription: "Backend 개발과 PC 부품 데이터 크롤링을 담당했습니다.",
    contributions: [
      { title: "Backend", description: "Spring Boot 기반 API와 인증, 상품, 채팅, 견적 도메인 및 AI 연동 구조를 담당했습니다." },
      { title: "Data Crawling", description: "다나와 PC 부품 데이터 수집, 중복 제거, JSON 구조화와 임포트 흐름을 담당했습니다." },
    ],
    stackDescription: "SpecMate의 Backend와 데이터 수집 흐름을 구성하는 기술입니다.",
    architectureDescription: "Backend가 사용자 요청과 RAG 기반 AI 에이전트를 연결하고, 상품 데이터와 채팅·견적 이력을 관리합니다.",
    featuresDescription: "Backend API와 데이터 저장소에서 확인되는 핵심 기능을 정리했습니다.",
    features: [
      { title: "AI 견적 생성", description: "예산, 용도, 선호 브랜드를 바탕으로 PC 부품 조합을 제안" },
      { title: "유사 부품 추천", description: "Qdrant 벡터 검색을 이용한 유사 부품 추천과 성능 비교" },
      { title: "대화형 상담", description: "AI 챗봇에서 견적을 요청하고 추천 결과와 설명을 확인" },
      { title: "관리자 기능", description: "부품 데이터, 사용자 견적 이력과 FAQ를 통합 관리" },
      { title: "부품 데이터 구조화", description: "다나와 크롤링 데이터를 정제해 JSON과 PostgreSQL로 관리" },
    ],
    troubleshootingDescription: "데이터 수집과 AI 연동 과정에서 발생한 문제를 원인과 해결 결과 중심으로 정리했습니다.",
    troubleshooting: [
      { title: "크롤링 데이터 누락 및 IP 차단", problem: "JavaScript 렌더링으로 실제 판매처 URL이 누락되고, 요청 과다로 특정 시간대에 IP가 차단되었습니다.", solution: "Selenium과 WebDriverWait으로 렌더링 완료 시점을 감지하고, 랜덤 지연·예외 처리·VPN 회전·재시도 로직을 적용했습니다.", results: ["크롤링 실패율 10% → 2%", "전체 수집 시간 2시간 → 1시간 30분", "실제 판매처 링크까지 수집"] },
      { title: "중복 데이터 및 품질 문제", problem: "옵션별 동일 제품이 중복 수집되어 JSON 크기가 증가하고 제품을 구분할 기준이 부족했습니다.", solution: "제품명과 제조사를 조합한 중복 검사 알고리즘을 추가하고 중복 데이터 필터링과 JSON 정제를 자동화했습니다.", results: ["중복률 0% 달성", "데이터 용량 약 20% 감소", "AI 입력 데이터 품질 개선"] },
      { title: "GPT 응답 오류 및 세션 맥락 단절", problem: "기존 GPT 호출 구조에서는 DB 연동과 대화 맥락 유지가 어렵고 Prompt의 역할과 출력 형식이 혼재했습니다.", solution: "Spring AI·Qdrant·OpenAI Assistant 기반 RAG 구조와 Thread 세션 관리를 도입하고 Prompt를 System·Role·Output Schema로 분리했습니다.", results: ["GPT 응답 오류율 15% → 2%", "DB 기반 견적 생성 및 자연어 응답", "RAG 챗봇 구조 완성"] },
    ],
    links: [
      { label: "Backend", url: "https://github.com/spec-mate/backend", variant: "primary" },
      { label: "Data Crawling", url: "https://github.com/spec-mate/data", variant: "primary" },
      { label: "SpecMate 전체 저장소 보기", url: "https://github.com/spec-mate", variant: "secondary" },
    ],
    outcomes: [
      "JSON 임포트와 중복 제거를 포함한 부품 데이터 자동화 및 ERD 정립",
      "Spring Boot·Spring AI·Qdrant 기반 AI 견적 생성과 유사도 검색 구현",
      "LangChain과 LangGraph의 역할 차이 학습",
      "OpenAI Assistant를 활용한 Prompt와 Thread 구성",
      "운영자의 데이터·상담·사용자 통합 관리 흐름 설계",
    ],
  },
  {
    slug: "via",
    route: "/projects/via",
    name: "VIA",
    summary: "학생의 IT 분야 진로 탐색과 면접 준비를 돕는 AI 상담 플랫폼",
    cardDescription: "AI 진로 상담 플랫폼",
    type: "Team Project · 3명",
    cardType: "Team Project",
    period: "2025.02.19 — 2025.06.13",
    cardTechnologies: ["FastAPI", "React", "MongoDB", "OpenAI"],
    technologyGroups: [
      { label: "Frontend", items: ["JavaScript", "React", "Axios"] },
      { label: "Backend", items: ["Python", "FastAPI", "CORS Middleware"] },
      { label: "Data & AI", items: ["MongoDB", "OpenAI API", "커리어넷 API"] },
    ],
    overviewDescription: "학생의 관심 분야와 저장된 정보를 AI 상담에 연결해 진로 탐색과 면접 준비를 지원하는 웹 서비스입니다.",
    overviewItems: [
      { label: "프로젝트 형태", value: "3인 Team Project" },
      { label: "서비스 유형", value: "AI 진로 상담 플랫폼" },
      { label: "진행 기간", value: "2025.02.19 — 2025.06.13", fullWidth: true },
    ],
    contributionDescription: "개인화 상담과 사용자·상담 데이터 관리, 외부 API 연동을 포함한 Backend 기능을 담당했습니다.",
    contributions: [
      { title: "개인화 진로 탐색", description: "사용자 정보와 관심 분야를 Prompt에 반영해 맞춤형 진로 상담 응답을 생성하는 Backend 흐름을 구현했습니다." },
      { title: "마이페이지 사용자 정보 관리", description: "사용자와 학생 정보를 MongoDB에 저장·조회·수정·삭제하고 상담 응답의 사용자 맥락으로 연결했습니다." },
      { title: "상담 정보 저장", description: "AI 상담 내용과 대화 이력을 저장하고, 상세 조회를 통해 이전 상담을 다시 확인할 수 있도록 구현했습니다." },
      { title: "커리어넷 API 연동", description: "상담 질문에서 직업 정보를 탐색하고 커리어넷 데이터를 AI 응답에 결합하는 API 연동을 구현했습니다." },
    ],
    stackDescription: "VIA의 사용자 화면, 상담 API와 데이터 저장 흐름을 구성하는 기술입니다.",
    architectureDescription: "FastAPI가 사용자 정보와 상담 이력을 MongoDB에서 조회하고 OpenAI 및 커리어넷 응답을 결합합니다.",
    featuresDescription: "사용자 정보와 외부 API를 상담 경험에 연결한 핵심 기능입니다.",
    features: [
      { title: "개인화 진로 상담", description: "사용자의 관심 분야와 저장된 정보를 Prompt에 반영해 맞춤형 상담 제공" },
      { title: "마이페이지", description: "학생 정보를 저장·수정·삭제하고 진로 상담 응답에 활용" },
      { title: "상담 이력", description: "AI 상담 내용을 저장하고 상세 화면에서 이전 상담을 이어서 확인" },
      { title: "커리어넷 연동", description: "커리어넷 직업 정보를 상담 응답과 진로 추천에 결합" },
    ],
    troubleshootingDescription: "AI 응답 품질과 프론트엔드 연동, API 비용 관리 과정에서 얻은 경험입니다.",
    troubleshooting: [
      { title: "Prompt에 따른 응답 품질 편차", problem: "같은 의도의 질문도 표현 방식에 따라 응답의 정확성과 일관성이 달라졌습니다.", solution: "AI 역할과 사용자 정보를 명시하고, 친절하고 전문적인 어조와 간결한 출력 형식 등 응답 가이드라인을 Prompt에 분리해 지정했습니다." },
      { title: "FastAPI와 React 연동 실패", problem: "브라우저의 CORS 정책으로 React에서 FastAPI API 호출이 차단되었습니다.", solution: "FastAPI에 CORS Middleware를 적용하고 허용 Origin을 환경별로 분리했습니다." },
      { title: "OpenAI API 사용 비용 관리", problem: "정제되지 않은 데이터와 모델 테스트 과정에서 예상보다 많은 API 비용이 발생했습니다.", solution: "실험 전에 입력 데이터를 정제하고 API 사용량과 비용을 함께 확인해야 한다는 운영 기준을 정립했습니다." },
    ],
    links: [
      { label: "kimse0ngjun/via", url: "https://github.com/kimse0ngjun/via", variant: "primary" },
    ],
    outcomes: [
      "관심 분야와 기존 상담 기록을 활용한 맞춤형 진로 상담 구현",
      "학생 정보의 저장·수정·삭제와 상담 응답 연결",
      "AI 역할과 사용자 맥락, 출력 가이드라인을 활용한 Prompt 설계 경험",
    ],
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProject(slug: ProjectSlug): Project {
  return projects.find((project) => project.slug === slug)!;
}
