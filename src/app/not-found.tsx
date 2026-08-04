import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-container flex min-h-[60svh] flex-col items-start justify-center py-16" aria-labelledby="not-found-title">
      <p className="text-xs font-semibold tracking-[0.16em] text-accent">404 ERROR</p>
      <h1 id="not-found-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-muted">
        주소가 변경되었거나 존재하지 않는 페이지입니다. 홈에서 프로젝트를 다시 확인해 주세요.
      </p>
      <Link className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-85" href="/">
        홈으로 돌아가기
      </Link>
    </section>
  );
}
