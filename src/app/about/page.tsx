import Link from 'next/link';

export default function About() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    870명 합격의 비밀, 대기업김과장
                </h1>
                <h2 className="text-lg text-[#4655C7] mb-6">
                    SK하이닉스·현대로템 출신 취업 전문가<br />
                    연간 1,000건 이상 자소서 첨삭 & 비대면 면접 컨설팅<br />
                    숨고/크몽 분야 1위, 합격률 82%의 실력
                </h2>
            </section>

            {/* Profile */}
            <section className="relative bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#4a5568] py-12 md:py-20 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* 이미지 */}
                        <div className="w-full md:flex-1 pr-12 mb-8 md:mb-0">
                            <div className="relative w-64 md:w-96 mx-auto md:mx-0 rounded-2xl overflow-hidden">
                                <img
                                    src="/img/stand_front.jpg"
                                    alt="전문 컨설턴트"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* 설명 */}
                        <div className="w-full md:flex-2 text-center md:text-left">
                            {/* 메인 타이틀 */}
                            <div className="mb-6 md:mb-8">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                                    상위 1% 초격차<br />
                                    취업 컨설팅 전문
                                </h2>
                            </div>

                            {/* 세부사항 */}
                            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">SK하이닉스 Photo 공정 연구원 출신</span>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">현대로템 철도사업부 출신</span>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">삼성전자 반도체 연구소 공정개발 경력직 최종 합격</span>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">연간 1천명 이상 클라이언트 컨설팅 경험 보유</span>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">굴지 대기업 면접 합격률 실적 다수 보유</span>
                                </div>
                                <div className="flex justify-center md:justify-start flex-wrap gap-2">
                                    <span className="text-white text-base md:text-lg">자소서/면접 전문 유료 컨설팅 수료</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Fields */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">[KKS 필독!] 스토리텔링 파트</h2>

                    <div className="grid grid-cols-1 content-center">
                        <span>여기에 스토리텔링을 넣어서 신뢰감을 올려주게 만든다. (아래는 예시)</span>
                        <span>~한 경험을 통해 컨설팅을 시작하게 되었습니다.</span>
                        <span>~라는 가설을 세웠고, ~을 통해 결과를 검증해냈습니다</span>
                        <span>아직 늦지 않았습니다. 당신도 충분히 가능합니다.</span>
                        <span>- 대기업김과장</span>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-[#f0f4fa] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">고객님의 합격이 곧 저의 실력입니다.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { count: "870명+", label: "누적 합격자 수" },
                            { count: "1,000건+", label: "연간 첨삭/컨설팅 건수" },
                            { count: "82%", label: "평균 자소서 합격률" },
                            { count: "150곳+", label: "최종 합격 기업" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <div className="text-3xl font-bold text-[#4655C7] mb-2">{stat.count}</div>
                                <div className="text-gray-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consulting Philosophy */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">단순한 첨삭이 아닙니다. 전략이 있는 코칭입니다.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: "🧠", title: "7가지 핵심 포인트 기반 첨삭", desc: "단순 문법 수정이 아닌, 기업 맞춤형 합격 전략을 담은 전문적인 피드백을 제공합니다." },
                            { icon: "📄", title: "예상 면접 질문 리스트 제공", desc: "자기소개서를 바탕으로 실제 면접에서 물어볼 가능성이 높은 질문들을 미리 예측하여 제공합니다." },
                            { icon: "🗣️", title: "1분 자기소개, 지원동기, 마무리 멘트까지 피드백", desc: "지원자가 면접에서 좋은 첫인상과 마지막 인상을 남길 수 있도록 핵심 멘트를 코칭합니다." },
                            { icon: "🎯", title: "합격자 자소서 무료 제공", desc: "희망 기업의 실제 합격한 자기소개서를 참고자료로 제공하여 방향성을 잡을 수 있도록 돕습니다." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f7f9ff] p-6 rounded-xl shadow-md">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-xl mb-2 text-[#4655C7]">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#f0f2ff] text-center py-24 px-6">
                <h2 className="text-3xl font-bold mb-6 text-[#4655C7]">
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