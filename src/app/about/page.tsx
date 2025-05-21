export default function About() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    870명 합격의 비밀, 대기업 김과장
                </h1>
                <p className="text-lg text-[#4655C7] mb-6">
                    SK하이닉스·현대로템 출신 취업 전문가<br />
                    연간 1,000건 이상 자소서 첨삭 & 비대면 면접 컨설팅<br />
                    숨고/크몽 분야 1위, 합격률 82%의 실력
                </p>
                <div className="space-x-4">
                    <button className="bg-[#4655C7] text-white px-6 py-3 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                        자소서 첨삭 서비스 보기
                    </button>
                    <button className="border-2 border-[#4655C7] text-[#4655C7] px-6 py-3 rounded-full text-lg hover:bg-[#f0f2ff] transition">
                        후기 보기
                    </button>
                </div>
            </section>

            {/* Consultant Introduction */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#4655C7]">대기업 김과장은 누구인가요?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <img
                                src="/img/consultant.jpg"
                                alt="대기업 김과장"
                                className="w-full h-auto rounded-lg mb-6"
                            />
                        </div>
                        <div>
                            <ul className="space-y-4">
                                {[
                                    "SK하이닉스 Photo 공정 연구원",
                                    "전) 현대로템 철도사업부",
                                    "삼성전자 반도체 연구소 공정개발 경력직 최종합격",
                                    "연간 1천명 이상 클라이언트 컨설팅",
                                    "자소서/면접 전문 유료 컨설팅 수료",
                                    "유명 대기업 면접 합격률 90%+ 실적 보유",
                                    "기업 서류 평가 및 면접관 경험"
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">✔</span>
                                        <span className="text-gray-800">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Fields */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">내가 잘하는 분야는?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { category: "반도체", companies: "SK하이닉스, 삼성전자 DS, 삼성디스플레이" },
                            { category: "자동차/중공업", companies: "현대자동차, 현대로템, 기아" },
                            { category: "외국계 기업", companies: "마이크론, ASML, 램리서치 등" },
                            { category: "공기업/공무직", companies: "한국수자원공사, 근로복지공단, 교통안전공단" },
                            { category: "직무", companies: "생산기술 / R&D / 품질관리 / 공정기술 / 설계 / HR" }
                        ].map((field, i) => (
                            <div key={i} className="bg-[#f0f2ff] p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-xl mb-3 text-[#4655C7]">✅ {field.category}</h3>
                                <p className="text-gray-700">{field.companies}</p>
                            </div>
                        ))}
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
                            { count: "최대 82%", label: "평균 자소서 합격률" },
                            { count: "150곳+", label: "최종 합격 기업" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <div className="text-3xl font-bold text-[#4655C7] mb-2">{stat.count}</div>
                                <div className="text-gray-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="font-bold text-xl mb-6 text-center text-[#4655C7]">주요 합격 기업</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {[
                                "ASML", "삼성전자", "SK하이닉스", "현대자동차", "LG디스플레이",
                                "현대로템", "삼성SDI", "한국전력", "수자원공사", "포스코"
                            ].map((company, i) => (
                                <div key={i} className="bg-[#f7f9ff] p-3 rounded-lg text-center text-gray-800 font-medium">
                                    {company}
                                </div>
                            ))}
                        </div>
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
                            { icon: "🎯", title: "합격자 자소서 무료 제공 (요청 시)", desc: "희망 기업의 실제 합격한 자기소개서를 참고자료로 제공하여 방향성을 잡을 수 있도록 돕습니다." }
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
                    합격을 향한 첫걸음, 지금 시작하세요
                </h2>
                <button className="bg-[#4655C7] text-white px-8 py-4 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                    무료 상담 신청하기
                </button>
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