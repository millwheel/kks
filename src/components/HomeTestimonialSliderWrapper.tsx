'use client';

import dynamic from 'next/dynamic';
import {TestimonialAbstract} from "@/data/testimonialAbstract";

// 클라이언트 컴포넌트에서 dynamic 임포트 사용
const TestimonialSlider = dynamic(() => import('./HomeTestimonialSlider'), {
    ssr: false
});

export default function TestimonialSliderWrapper({
                                                     testimonials
                                                 }: {
    testimonials: TestimonialAbstract[]
}) {
    return <TestimonialSlider testimonials={testimonials} />;
}