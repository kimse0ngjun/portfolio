"use client";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme: Theme = getCurrentTheme() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface"
      onClick={toggleTheme}
      aria-label="색상 테마 전환"
      title="색상 테마 전환"
    >
      <span aria-hidden="true" className="text-lg">
        ◐
      </span>
    </button>
  );
}
