export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="page-container flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Portfolio</p>
        <p>
          GitHub와 이메일은 실제 공개 정보를 확인한 뒤 연결합니다.
        </p>
      </div>
    </footer>
  );
}
