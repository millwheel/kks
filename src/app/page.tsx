import TestimonialSliderWrapper from '../components/HomeTestimonialSliderWrapper';
import Link from 'next/link';
import HomeCompanySlider from "@/components/HomeCompanySlider";

import { testimonialAbstracts } from '@/data/testimonialAbstract';
import { companies } from '@/data/companies';

export default function Home() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    합격을 부르는 자기소개서 & 면접 컨설팅
                </h1>
                <h2 className="text-lg text-[#4655C7] mb-6">
                    공기업, 대기업 최종 합격자 다수 배출!<br />
                    실전 중심 맞춤형 피드백으로 당신의 합격을 이끕니다. <br />
                </h2>
                <Link href="/contact">
                    <button className="bg-[#4655C7] text-white px-8 py-4 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                        무료 상담 신청하기
                    </button>
                </Link>
            </section>

            {/* 취업, 스펙이 부족해서 떨어지는 걸까요? 섹션 */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#4655C7] text-center mb-8">
                        취업, 스펙이 부족해서 떨어지는 걸까요?
                    </h1>
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        또 자격증, 인턴, 대외활동을 찾아 헤매시나요?
                    </h2>
                    <h2 className="text-xl font-semibold text-[#4655C7] text-center mb-8">
                        채용 담당자는 그보다 <span className="font-bold border-b-2 border-[#4655C7] pb-1">&#39;읽고 싶은 자기소개서&#39;</span>를 찾고 있습니다.
                    </h2>
                    <div className="max-w-xl mx-auto">
                        <p className="text-lg font-semibold text-gray-600 mb-8">
                            👉 스펙보다 중요한 건, 전달력입니다. <br/>
                            👉 비슷한 배경, 경험 속에서도 결국 &#39;표현의 차이&#39;가 합불을 결정합니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 실패 사례 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400">
                            <h4 className="font-bold mb-4 text-gray-600 text-lg">지원자 A (불합격)</h4>
                            <p className="text-gray-700 mb-4">
                                &#34;저는 관련 자격증도 있고, 학점도 높고, 인턴 경험도 있는데 왜 계속 떨어지는지 모르겠어요. 더 이상 보완할 스펙이 없는데...&#34;
                            </p>
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <p className="text-sm text-gray-600 italic">
                                    스펙은 좋지만, 그것을 자기소개서에서 효과적으로 표현하지 못하면 합격으로 이어지지 않습니다.
                                </p>
                            </div>
                        </div>

                        {/* 합격 사례 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#4655C7]">
                            <h4 className="font-bold mb-4 text-[#4655C7] text-lg">지원자 B (최종합격)</h4>
                            <p className="text-gray-700 mb-4">
                                &#34;전공과 무관한 분야였고, 특별한 인턴 경험도 없었지만 제가 가진 경험을 회사가 원하는 방향으로 표현하는 데 집중했더니 합격했어요!&#34;
                            </p>
                            <div className="bg-[#f0f2ff] p-3 rounded-lg">
                                <p className="text-sm text-[#4655C7] italic">
                                    같은 경험도 어떻게 표현하느냐에 따라 인사담당자의 눈에 완전히 다르게 보입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 기업에서 원하는 대화법이 있습니다 섹션 */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-bold text-[#4655C7] text-center mb-8">
                        기업에서 원하는 대화법이 있습니다
                    </h1>
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                        면접에서 번번히 고배를 마시나요?
                    </h2>
                    <h3 className="text-lg md:text-xl font-semibold text-[#4655C7] text-center mb-8">
                        채용담당자가 원하는 소통 방식을 안다면, 손쉽게 풀어나갈 수 있습니다.
                    </h3>
                    <div className="max-w-xl mx-auto">
                        <p className="text-lg font-semibold text-gray-600 mb-8">
                            👉 답변이 아닌 대화를 준비하세요. <br/>
                            👉 솔직한 경험을 토대로 대답해도 충분히 면접관의 이목을 끌 수 있는 방법이 있습니다.
                        </p>
                    </div>

                    {/* 면접 실패 vs 성공 예시 대화 */}
                    <div className="mb-12">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                            면접 실패 vs 성공 대화 예시
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* 실패 대화 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400">
                                <h4 className="font-bold mb-4 text-gray-600 text-lg">실패하는 대화</h4>
                                <div className="space-y-4">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">면접관</p>
                                        <p className="text-sm text-gray-600">&#34;지원자님의 강점이 무엇인가요?&#34;</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">지원자</p>
                                        <p className="text-sm text-gray-600">&#34;저는 성실하고 책임감이 강합니다. 맡은 일은 끝까지 해내는 성격입니다.&#34;</p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">면접관 (속마음)</p>
                                        <p className="text-sm text-gray-600 italic">&#34;모든 지원자가 하는 말이네... 구체적인 사례가 없어 신뢰하기 어렵다.&#34;</p>
                                    </div>
                                </div>
                            </div>

                            {/* 성공 대화 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#4655C7]">
                                <h4 className="font-bold mb-4 text-[#4655C7] text-lg">성공하는 대화</h4>
                                <div className="space-y-4">
                                    <div className="bg-[#f0f2ff] p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">면접관</p>
                                        <p className="text-sm text-gray-600">&#34;지원자님의 강점이 무엇인가요?&#34;</p>
                                    </div>
                                    <div className="bg-[#f7f9ff] p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">지원자</p>
                                        <p className="text-sm text-gray-600">&#34;저는 목표 달성을 위한 체계적인 실행력이 강점입니다. 학부 연구 프로젝트에서 예상치 못한 문제가 발생했을 때 (중략) ~를 통해 원인을 세분화하고 팀원들과 협업하여 (중략) ~한 전략을 통해 일정 내에 문제를 해결했습니다. 이러한 경험이 귀사의 R&D 프로젝트에도 도움이 될 것이라 생각합니다.&#34;</p>
                                    </div>
                                    <div className="bg-[#f0f2ff] p-3 rounded-lg">
                                        <p className="text-sm font-semibold text-gray-700">면접관 (속마음)</p>
                                        <p className="text-sm text-[#4655C7] italic">&#34;구체적인 사례와 우리 회사와의 연관성까지 언급했네. 준비가 잘 되어 있군.&#34;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 채용 혹한기에도 압도적인 성과 섹션 */}
            <section className="bg-[#f0f4fa] py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#4655C7] text-center mb-6">
                        채용 혹한기에도 압도적인 성과를 내고 있습니다
                    </h2>

                    <div className="text-center mb-12">
                        <div className="space-y-3 text-gray-700">
                            <p className="text-base md:text-lg">
                                <span className="font-semibold text-[#4655C7]">870명 이상의 합격자, 150개 이상의 기업.</span> 데이터가 증명합니다.
                            </p>
                            <p className="text-base md:text-lg font-semibold text-gray-800">
                                당신도 다음 성공 사례가 될 수 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* 숫자 강조 배너 */}
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { count: "870명+", label: "누적 합격자 수" },
                                { count: "1,000건+", label: "연간 첨삭/컨설팅 건수" },
                                { count: "82%", label: "평균 자소서 합격률" },
                                { count: "150곳+", label: "최종 합격 기업" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <div className="text-4xl font-bold text-[#e1582e] mb-2">{stat.count}</div>
                                    <div className="text-gray-700">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 합격 기업 리스트 섹션 */}
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
                            이용자 실제 합격 기업 현황
                        </h3>
                        <HomeCompanySlider companies={companies} />

                    </div>
                </div>
            </section>

            {/* Testimonials - Card Slider */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-4xl font-bold text-[#4655C7] text-center mb-12">이용자 후기</h2>

                {/* SEO를 위한 실제 후기 데이터 (스크린 리더와 검색 엔진용) */}
                <div className="sr-only">
                    {testimonialAbstracts.map((item, idx) => (
                        <div key={idx}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p>작성자: {item.name}</p>
                            <p>평점: 5/5</p>
                        </div>
                    ))}
                </div>

                {/* 클라이언트 슬라이더 컴포넌트 */}
                <TestimonialSliderWrapper testimonials={testimonialAbstracts} />
            </section>

            {/* CTA Section */}
            <section className="bg-[#f0f2ff] text-center py-24 px-6">
                <h2 className="text-4xl font-bold mb-4 text-[#4655C7] p-4">
                    합격으로 가는 가장 빠른 길
                </h2>
                <p className="text-lg text-[#4655C7] mb-6">
                    서류부터 면접까지 한 방에 끝내기
                </p>
                <Link href="/contact">
                    <button className="bg-[#4655C7] text-white px-8 py-4 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                        무료 상담 신청하기
                    </button>
                </Link>
            </section>

            {/* Footer */}
            <footer className="bg-[#4655C7] text-white py-12 px-6 text-center text-sm">
                <p className="font-semibold mb-2">대기업김과장</p>
                <p>이메일: kks7180@naver.com</p>
                <p className="text-xs mt-4">COPYRIGHT 2025. 대기업김과장 All rights reserved.</p>
            </footer>

        </main>
    );
}