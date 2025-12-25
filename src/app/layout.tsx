import { BlurredDots } from "@/components/BlurredDots";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 | 프론트엔드 개발자",
  description:
    "프론트엔드 개발자의 통합 포트폴리오 사이트입니다. 경력, 프로젝트, 리뷰, 블로그를 확인하세요.",
  icons: {
    icon: "👨‍💻",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-primary-light text-text-primary">
        <BlurredDots count={12} />
        <Navigation />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
