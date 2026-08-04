# 김성준 백엔드 개발자 포트폴리오

프로젝트 경험, 개인 기여, 기술적 판단과 문제 해결 과정을 소개하는 개인 포트폴리오입니다.

## 주요 구성

- 홈: Hero, About, Tech Stack, Projects, Contact
- 프로젝트 상세: BuildSync, Medicine Platform, SpecMate, VIA
- 라이트·다크 테마 및 반응형 레이아웃
- 키보드 탐색과 시맨틱 마크업을 고려한 접근성

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## 로컬 실행

Node.js와 npm이 설치된 환경에서 다음 명령을 실행합니다.

```bash
npm install
npm run dev
```

검증 명령은 다음과 같습니다.

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## 환경 변수

배포 주소가 확정되면 SEO URL 생성을 위해 `.env.local` 또는 배포 환경에 다음 값을 설정합니다.

```text
NEXT_PUBLIC_SITE_URL=https://확정된-도메인
```

값이 없으면 로컬 개발 주소인 `http://localhost:3000`을 사용합니다. Oracle Cloud 배포 설정과 실제 배포는 현재 저장소 범위에 포함하지 않습니다.

## 공개 정보

- GitHub: https://github.com/kimse0ngjun
- 이메일: tjdwns8083@gmail.com
- 이력서: 준비 중
