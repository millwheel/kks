'use client';

import { useEffect, useState, useRef } from 'react';

interface HomeCompanySliderProps {
    companies: string[];
}

// 고정된 순서로 기업 리스트를 4개 행으로 나누기 (hydration 문제 방지)
const createRows = (companies: string[]) => {
    const rowCount = 4;
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
        const start = Math.floor(i * companies.length / rowCount);
        const end = Math.floor((i + 1) * companies.length / rowCount);
        // 무한 스크롤을 위해 여러 번 복제
        const originalRow = companies.slice(start, end);
        const extendedRow = [...originalRow, ...originalRow, ...originalRow, ...originalRow];
        rows.push(extendedRow);
    }

    return rows;
};

interface ScrollingRowProps {
    companies: string[];
    speed: number;
    rowIndex: number;
}

function ScrollingRow({ companies, speed, rowIndex }: ScrollingRowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [translateX, setTranslateX] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        let animationId: number;
        let startTime: number | null = null;
        let containerWidth: number | null = null;

        // 각 row마다 다른 시작 오프셋 적용
        const initialOffset = -(rowIndex * 500);
        setTranslateX(initialOffset);

        const animate = (currentTime: number) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            // 컨테이너 너비를 한 번만 계산
            if (containerWidth === null && containerRef.current) {
                containerWidth = containerRef.current.scrollWidth / 4;
            }

            const elapsed = currentTime - startTime;

            // 기본 위치에서 계속 왼쪽으로 이동
            const newTranslateX = initialOffset - (elapsed * speed) / 1000;

            // 컨테이너 너비의 1/4 지점에 도달하면 리셋
            if (containerWidth && newTranslateX <= -containerWidth) {
                startTime = currentTime;
                setTranslateX(initialOffset);
            } else {
                setTranslateX(newTranslateX);
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [speed, rowIndex, mounted]);

    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-3 will-change-transform"
                style={{
                    transform: `translateX(${translateX}px)`,
                    transition: 'none'
                }}
            >
                {companies.map((company, index) => (
                    <div
                        key={`${rowIndex}-${index}`}
                        className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm whitespace-nowrap flex-shrink-0"
                    >
                        {company}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HomeCompanySlider({ companies }: HomeCompanySliderProps) {
    const [rows] = useState(() => createRows(companies));
    const speeds = [30, 25, 35, 28]; // 각 row마다 살짝 다른 속도

    return (
        <div className="space-y-4">
            {rows.map((row, rowIndex) => (
                <ScrollingRow
                    key={rowIndex}
                    companies={row}
                    speed={speeds[rowIndex]}
                    rowIndex={rowIndex}
                />
            ))}
        </div>
    );
}