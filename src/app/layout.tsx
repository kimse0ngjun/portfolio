import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const metadata: Metadata = {
  title: {
    default: "백엔드 개발자 포트폴리오",
    template: "%s | 백엔드 개발자 포트폴리오",
  },
  description: "백엔드 개발자의 경험과 프로젝트를 소개하는 포트폴리오입니다.",
  metadataBase: siteUrl,
  applicationName: "김성준 백엔드 개발자 포트폴리오",
  authors: [{ name: "김성준", url: "https://github.com/kimse0ngjun" }],
  creator: "김성준",
  keywords: [
    "김성준",
    "백엔드 개발자",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "포트폴리오",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "김성준 백엔드 개발자 포트폴리오",
    title: "백엔드 개발자 김성준 포트폴리오",
    description: "문제 해결 과정과 프로젝트 경험을 소개하는 백엔드 개발자 김성준의 포트폴리오입니다.",
  },
  twitter: {
    card: "summary",
    title: "백엔드 개발자 김성준 포트폴리오",
    description: "문제 해결 과정과 프로젝트 경험을 소개하는 백엔드 개발자 김성준의 포트폴리오입니다.",
  },
};

const themeScript = `
  (() => {
    let storedTheme = null;
    try {
      storedTheme = localStorage.getItem("theme");
    } catch {
      storedTheme = null;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <a className="skip-link" href="#main-content">
          본문 바로가기
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
