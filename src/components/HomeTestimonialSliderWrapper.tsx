'use client';

import dynamic from 'next/dynamic';

// 클라이언트 컴포넌트에서 dynamic 임포트 사용
const TestimonialSlider = dynamic(() => import('./HomeTestimonialSlider'), {
    ssr: false
});

type Testimonial = {
    name: string;
    title: string;
    review: string;
};

export default function TestimonialSliderWrapper({
                                                     testimonials
                                                 }: {
    testimonials: Testimonial[]
}) {
    return <TestimonialSlider testimonials={testimonials} />;
}