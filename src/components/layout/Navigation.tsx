"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "소개", href: "/#about" },
  { label: "기술", href: "/#skills" },
  { label: "프로젝트", href: "/#projects" },
  { label: "연락처", href: "/#contact" },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <nav aria-label="주요 메뉴">
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">{isOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      <ul className="hidden items-center gap-1 md:flex">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-background p-4 shadow-lg md:hidden"
        >
          <ul className="page-container flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-medium text-muted hover:bg-surface hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
