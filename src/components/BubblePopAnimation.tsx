'use client';

import { useEffect, useRef, useState } from 'react';

interface BubblePopAnimationProps {
    children: React.ReactNode;
    delay?: number;
}

const BubblePopAnimation = ({ children, delay = 0 }: BubblePopAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentElement = ref.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [delay, isMounted]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-400 ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
            }`}
            style={{
                animationName: isVisible ? 'popUp' : 'none',
                animationDuration: '0.4s',
                animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                animationFillMode: 'forwards'
            }}
        >
            {children}
            <style jsx>{`
                @keyframes popUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default BubblePopAnimation;