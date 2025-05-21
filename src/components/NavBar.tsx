'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: '대기업김과장은 누구인가?', href: '/about' },
        { name: '대표 서비스', href: '/services' },
        { name: '후기 및 합격 사례', href: '/testimonials' },
        { name: '칼럼', href: '/column' },
        { name: '상담 신청', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* 로고 */}
                    <div className="flex-shrink-0 flex items-center pl-5">
                        <Link href="/" className="text-[#4655C7] text-xl font-extrabold">
                            대기업김과장
                        </Link>
                    </div>

                    {/* 데스크톱 메뉴 */}
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-700 hover:text-[#4655C7] hover:border-b-2 hover:border-[#4655C7]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 로그인 버튼 */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/login"
                            className="bg-[#4655C7] text-white px-4 py-2 rounded-full text-sm hover:bg-[#344199] transition"
                        >
                            로그인
                        </Link>
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4655C7] hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">메뉴 열기</span>
                            {/* 햄버거 아이콘 */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-[#4655C7] hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            className="block pl-3 pr-4 py-2 text-base font-medium text-white bg-[#4655C7] hover:bg-[#344199] mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            로그인
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}