"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navigationItems = [
  { label: "소개", href: "/#about" },
  { label: "기술", href: "/#skills" },
  { label: "프로젝트", href: "/#projects" },
  { label: "연락처", href: "/#contact" },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const desktopFirstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    isOpenRef.current = false;
    setIsOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => {
        const trigger = triggerRef.current;
        if (trigger && trigger.getClientRects().length > 0) {
          trigger.focus();
          return;
        }
        desktopFirstLinkRef.current?.focus();
      });
    }
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const closeMenuAtDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (!event.matches || !isOpenRef.current) return;

      isOpenRef.current = false;
      setIsOpen(false);
      requestAnimationFrame(() => desktopFirstLinkRef.current?.focus());
    };

    closeMenuAtDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeMenuAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };

    const closeOnPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !triggerRef.current?.closest("nav")?.contains(target)) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnPointerDown);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnPointerDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <nav
      aria-label="주요 메뉴"
      onBlur={(event) => {
        if (isOpen && !event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface md:hidden"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          const nextIsOpen = !isOpenRef.current;
          isOpenRef.current = nextIsOpen;
          setIsOpen(nextIsOpen);
        }}
      >
        <span className="sr-only">{isOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      <ul className="hidden items-center gap-1 md:flex">
        {navigationItems.map((item, index) => (
          <li key={item.href}>
            <Link
              ref={index === 0 ? desktopFirstLinkRef : undefined}
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
            {navigationItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 font-medium text-muted hover:bg-surface hover:text-foreground"
                  onClick={() => closeMenu()}
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
