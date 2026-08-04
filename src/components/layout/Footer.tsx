export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-container flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} 김성준 Portfolio</p>
        <p>Backend Developer · 프로젝트와 문제 해결 과정</p>
      </div>
    </footer>
  );
}
