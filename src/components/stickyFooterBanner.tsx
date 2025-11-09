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
            <div className="bg-white shadow-xl rounded-xl p-3 flex flex-col items-center gap-2 border border-gray-200 cursor-pointer hover:shadow-2xl transition-shadow">
                <p className="text-xs md:text-sm font-medium text-gray-700 text-center leading-tight">
                    자기소개서 & 면접 실시간 Zoom 강의
                    <br />
                    (매달 1회 진행)
                </p>
                <Image
                    src="/img/bottom_fixed_banner.png"
                    alt="실시간 강의 신청 링크 이미지"
                    width={200}
                    height={130}
                    className="object-contain"
                />
            </div>
        </a>
    );
}