'use client';

import { useState, useEffect } from 'react';

// 후기 데이터 타입 정의
type Testimonial = {
    name: string;
    title: string;
    review: string;
};

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
    // 현재 슬라이드 상태 관리
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);

    // 화면 크기에 따라 한 번에 보여줄 아이템 개수 조정
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
        };

        // 초기 설정
        handleResize();

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', handleResize);

        // 클린업
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 다음 슬라이드로 이동
    const nextSlide = () => {
        const maxSlide = testimonials.length - itemsPerView;
        setCurrentSlide((prev) => (prev >= maxSlide ? maxSlide : prev + 1));
    };

    // 이전 슬라이드로 이동
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? 0 : prev - 1));
    };

    return (
        <div className="relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                {/* 슬라이드 컨테이너 */}
                <div className="mx-12 relative overflow-hidden">
                    {/* 슬라이드 내용 - 트랜지션 추가 */}
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
                            transition: 'transform 0.5s ease-in-out',
                            width: '100%'
                        }}
                    >
                        {testimonials.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-none w-full md:w-1/3 px-3"
                                style={{ flexBasis: `${100 / itemsPerView}%` }}
                            >
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl h-full flex flex-col">
                                    <h3 className="text-lg font-bold mb-3 text-[#4a2e21]">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-4 flex-grow">{item.review}</p>
                                    <div className="mt-auto">
                                        <div className="flex items-center mt-4">
                                            <div className="bg-[#4a2e21] text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
                                                    <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                                            <div className="ml-auto flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span key={star} className="text-yellow-400">★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 좌우 화살표 버튼 */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-all duration-200"
                    aria-label="이전 후기"
                    disabled={currentSlide === 0}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="transition-colors duration-200 hover:text-[#582D26] group">
                        <circle cx="19" cy="19" r="18.5" stroke="currentColor" className="text-[#6B3F36] group-hover:text-[#582D26]"></circle>
                        <path d="M21 13L15 19L21 25" stroke="currentColor" className="text-[#6B3F36] group-hover:text-[#582D26]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-all duration-200"
                    aria-label="다음 후기"
                    disabled={currentSlide >= testimonials.length - itemsPerView}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="transition-colors duration-200 hover:text-[#582D26] group">
                        <circle cx="19" cy="19" r="18.5" stroke="currentColor" className="text-[#6B3F36] group-hover:text-[#582D26]"></circle>
                        <path d="M17 25L23 19L17 13" stroke="currentColor" className="text-[#6B3F36] group-hover:text-[#582D26]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}