import Link from 'next/link';

export default function Services() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    기업이 원하는 언어로 바꿔드립니다
                </h1>
                <p className="text-lg text-[#4655C7] mb-6">
                    대기업 출신이 직접 첨삭하는 1:1 맞춤 피드백<br />
                    합격을 위한 최고의 선택
                </p>
            </section>

            {/* Service Introduction */}
            <section className="bg-[#f5f6f7] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] mb-8 text-center">대기업 출신이 말하는 합격 자기소개서</h2>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <ul className="space-y-4">
                            {[
                                "불합격의 이유를 명확하게 분석",
                                "기업 맞춤 키워드 반영",
                                "표현력/논리력 강화 첨삭"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#4655C7] mt-1">✔</span>
                                    <span className="text-gray-800">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-[#4655C7] font-medium">누적 첨삭 수 2,000건 이상 / 첨삭 만족도 98%</p>
                    </div>
                </div>
            </section>

            {/* Service Types and Pricing */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">서비스 종류 및 가격</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: '기본 자기소개서 첨삭', desc: '문법/표현/논리 구성 중심 첨삭' },
                            { name: '프리미엄 첨삭', desc: '기업 맞춤형 + 면접 대비 키워드 반영'},
                            { name: '1:1 모의면접 피드백', desc: '영상 녹화 후 면접 피드백 제공' },
                            { name: '패키지 상품', desc: '첨삭 + 모의면접 세트' },
                        ].map((s, i) => (
                            <div key={i} className="bg-[#f7f9ff] rounded-xl p-6 shadow-md hover:shadow-lg transition">
                                <h3 className="font-bold text-xl mb-3 text-[#4655C7]">{s.name}</h3>
                                <p className="text-gray-700 mb-4">{s.desc}</p>

                                <Link href="/contact">
                                    <button className="w-full py-3 bg-[#4655C7] text-white rounded-full hover:bg-[#344199] transition hover:cursor-pointer">
                                        신청하기
                                    </button>
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Example */}
            <section className="bg-[#f0f2ff] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">실제 첨삭 전후 비교</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400">
                            <h4 className="font-medium mb-4 text-gray-600 text-lg">Before</h4>
                            <p className="text-gray-700">저는 열심히 일하는 성격입니다. 그래서 어떤 일이든 최선을 다하려고 합니다.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#4655C7]">
                            <h4 className="font-medium mb-4 text-[#4655C7] text-lg">After</h4>
                            <p className="text-gray-700">저는 맡은 일에 대한 책임감을 바탕으로, 마감 기한 내 최고의 결과를 도출해내는 실행력을 갖추고 있습니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">진행 방식</h2>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <ol className="space-y-6">
                            {[
                                { step: "신청서 작성", desc: "원하시는 서비스와 요구사항을 입력해 주세요." },
                                { step: "파일 업로드", desc: "첨삭이 필요한 자기소개서 파일을 업로드합니다." },
                                { step: "첨삭 진행", desc: "전문 컨설턴트가 맞춤형 첨삭을 진행합니다." },
                                { step: "피드백 전달", desc: "상세한 피드백과 함께 수정본을 받아보세요." },
                                { step: "필요시 재첨삭", desc: "추가 요청사항이 있다면 재첨삭을 진행합니다." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-[#4655C7] text-white flex items-center justify-center font-bold">
                                            {i+1}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">{item.step}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">자주 묻는 질문</h2>
                    <div className="space-y-6">
                        {[
                            { q: "언제까지 받을 수 있나요?", a: "보통 24시간 이내, 최대 48시간입니다." },
                            { q: "첨삭 후 수정 요청은 가능한가요?", a: "1회 무료 재첨삭 제공됩니다." },
                            { q: "특정 기업에 맞는 첨삭도 가능한가요?", a: "네, 프리미엄 첨삭에서는 지원 기업의 특성과 성향을 고려한 맞춤형 첨삭을 제공해 드립니다." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#f7f9ff] p-6 rounded-xl">
                                <p className="font-bold text-lg text-[#4655C7] mb-2">Q. {item.q}</p>
                                <p className="text-gray-700">A. {item.a}</p>
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