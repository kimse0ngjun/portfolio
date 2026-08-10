"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // 저장소 접근이 제한되어도 현재 페이지의 테마 전환은 유지합니다.
  }
}

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeToTheme(callback: () => void) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const applySystemTheme = (event: MediaQueryListEvent) => {
    if (getStoredTheme()) return;

    document.documentElement.classList.toggle("dark", event.matches);
    document.documentElement.style.colorScheme = event.matches ? "dark" : "light";
    callback();
  };

  window.addEventListener("portfolio-theme-change", callback);
  systemTheme.addEventListener("change", applySystemTheme);
  return () => {
    window.removeEventListener("portfolio-theme-change", callback);
    systemTheme.removeEventListener("change", applySystemTheme);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getCurrentTheme, () => "light");

  const toggleTheme = () => {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    storeTheme(nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  const label = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";

  return (
    <button
      type="button"
      className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
    >
      <span aria-hidden="true" className="text-lg">
        ◐
      </span>
    </button>
  );
}
