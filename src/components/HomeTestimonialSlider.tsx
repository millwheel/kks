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
                                                <span className="text-xs">사용자</span>
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50"
                    aria-label="이전 후기"
                    disabled={currentSlide === 0}
                >
                    <span className="text-xl">&lt;</span>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50"
                    aria-label="다음 후기"
                    disabled={currentSlide >= testimonials.length - itemsPerView}
                >
                    <span className="text-xl">&gt;</span>
                </button>
            </div>
        </div>
    );
}