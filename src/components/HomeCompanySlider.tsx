'use client';

import { useEffect, useState, useRef } from 'react';

interface HomeCompanySliderProps {
    companies: string[];
}

const createRows = (companies: string[]) => {
    const rowCount = 4;
    const rows = [];

    // companies를 4개 부분으로 나누기
    const parts = [];
    for (let i = 0; i < rowCount; i++) {
        const start = Math.floor(i * companies.length / rowCount);
        const end = Math.floor((i + 1) * companies.length / rowCount);
        parts.push(companies.slice(start, end));
    }

    // 각 row마다 다른 순서로 배치
    for (let i = 0; i < rowCount; i++) {
        const extendedRow = [];

        // i만큼 shift된 순서로 parts 배치
        for (let j = 0; j < rowCount; j++) {
            const partIndex = (i + j) % rowCount;
            extendedRow.push(...parts[partIndex]);
        }

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
    const animationRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        // DOM 요소 너비 미리 계산
        const containerWidth = containerRef.current.scrollWidth / 4;

        // 요소를 직접 조작하는 애니메이션 함수
        const animate = (timestamp: number) => {
            if (!containerRef.current) return;

            if (startTimeRef.current === null) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const translateX = 0 - (elapsed * speed) / 1000;

            // 직접 DOM 스타일 조작
            containerRef.current.style.transform = `translateX(${translateX}px)`;

            // 리셋 지점에 도달하면
            if (translateX <= -containerWidth) {
                startTimeRef.current = timestamp;
                containerRef.current.style.transform = `translateX(0px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [speed, rowIndex, mounted]);

    return (
        <div className="overflow-hidden">
            <div
                ref={containerRef}
                className="flex gap-3 will-change-transform"
                style={{
                    transform: `translateX(0px)`,
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
    const speeds = [89, 92, 98, 95];

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