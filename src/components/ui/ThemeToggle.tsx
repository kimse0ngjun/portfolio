"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("portfolio-theme-change", callback);
  return () => window.removeEventListener("portfolio-theme-change", callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getCurrentTheme, () => "light");

  const toggleTheme = () => {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
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
