import Link from "next/link";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="page-container flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-md text-base font-bold tracking-tight sm:text-lg"
          aria-label="포트폴리오 홈"
        >
          포트폴리오
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
