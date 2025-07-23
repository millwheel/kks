import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "대기업김과장의 합격하는 자소서 | 취업 걱정 오늘부터 그만",
  description: "현대로템, SK하이닉스 출신 컨설턴트가 제공하는 합격을 부르는 실전 중심 취업 컨설팅. 대기업 취업 전문 컨설턴트가 제공하는 자소서 작성 및 면접 전략",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
