"use client";

import Image from "next/image";

export default function BottomLinkBanner() {
    return (
        <a
            href="https://www.latpeed.com/products/ER__M"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
        >
            <div
                className="
                bg-white shadow-xl rounded-xl border border-gray-200 cursor-pointer
                hover:shadow-2xl transition-shadow
                flex flex-col items-center gap-2
                p-2 w-[140px] md:w-[240px]   /* 모바일 작게 / 데스크탑 크게 */
                "
            >
                <p className="text-[11px] md:text-sm font-medium text-gray-700 text-center leading-tight">
                    자기소개서 & 면접 실시간 Zoom 강의
                    <br />
                    (매달 1회 진행)
                </p>

                <Image
                    src="/img/bottom_fixed_banner.png"
                    alt="실시간 강의 신청 링크 이미지"
                    width={200}   // 기본 데스크탑 기준
                    height={130}
                    className="object-contain w-[140px] md:w-[240px] h-auto"
                />
            </div>
        </a>
    );
}