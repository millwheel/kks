'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const FadeInAnimation = ({ children, className = "", delay = 0 }: AnimatedTextProps) => {
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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay, isMounted]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${
                isVisible
                    ? 'opacity-100'
                    : 'opacity-10'
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInAnimation;