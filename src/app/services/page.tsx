import Link from 'next/link';
import FreeContents from "@/components/FreeContents";

export default function Services() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    기업이 원하는 언어로 바꿔드립니다
                </h1>
                <h2 className="text-xl text-[#4655C7] mb-6">
                    대기업 출신이 직접 첨삭하는 1:1 맞춤 피드백<br />
                    합격을 위한 최고의 선택
                </h2>
            </section>

            {/* 자기소개서 파트 */}
            <section className="bg-[#f5f6f7] py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] mb-8 text-center">자기소개서, 왜 계속 떨어질까요?</h2>
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            문장 하나 바꿨는데, 합격이 바뀌는 경우를 정말 많이 봤습니다.
                        </h3>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md mb-8">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-gray-800 mb-4">😰 대부분의 지원자들이 하는 실수</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">맞춤법, 문장력부터 고민한다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">흔한 표현을 사용한다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">자기 얘기만 하고 회사는 생각 안 한다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">지워도 되는 문장이 너무 많다</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-[#4655C7] mb-4">😊 합격하는 자소서의 비밀</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">첫 문장부터 시선을 끈다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">기업이 원하는 그림을 명확히 그린다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">한 문장도 지울 수 없는 글을 만든다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">설득의 언어로 말한다</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#f0f2ff] rounded-lg">
                            <p className="text-center text-[#4655C7] font-medium">
                                자기소개서는 &#34;내가 누구인지&#34;를 증명하는 글이 아니라,<br />
                                <span className="font-bold">&#34;당신들이 날 뽑아야 하는 이유&#34;를 설득하는 글입니다.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 모의 면접 파트 */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] mb-8 text-center">면접만 보면 왜 떨어질까요?</h2>
                    <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                        대부분의 지원자는 면접관이 중요하게 보는 것을 모르고 있습니다
                    </h3>

                    <div className="bg-[#f7f9ff] p-8 rounded-xl shadow-md mb-8">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-gray-800 mb-4">😰 면접에서 자주 하는 실수</h4>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="text-sm text-gray-600 mb-2"><strong>면접관:</strong> &#34;첫 3개월 동안 어떤 목표 세우실 건가요?&#34;</p>
                                    <p className="text-sm text-red-600"><strong>지원자:</strong> &#34;조직 안에서 빠르게 적응하겠습니다.&#34;</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">추상적이다. 아무 말도 안 한 것과 같다.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">에너지가 없어서 묻힌다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">디테일 없는 스토리를 말한다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-gray-700">준비한 답변만 기계적으로 말한다</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-[#4655C7] mb-4">😊 합격하는 면접의 비밀</h4>
                                <div className="bg-[#f0f2ff] p-4 rounded-lg mb-4">
                                    <p className="text-sm text-gray-600 mb-2"><strong>면접관:</strong> &#34;첫 3개월 동안 어떤 목표 세우실 건가요?&#34;</p>
                                    <p className="text-sm text-[#4655C7]"><strong>지원자:</strong> &#34;업무 흐름 파악과 자사 전산 프로세스를 빠르게 배우는 것을 1차 목표로 두고 있습니다. 특히 제가 지원한 설비기술 직무는...&#34;</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">구체적인 계획과 현장성이 보인다.</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">면접관에게 &#39;전달되는 임팩트&#39;가 있다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">구체적인 경험과 디테일로 말한다</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#4655C7] mt-1">•</span>
                                        <span className="text-gray-700">기업이 원하는 대화법을 안다</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#f0f4fa] rounded-lg">
                            <p className="text-center text-[#4655C7] font-medium">
                                <span className="font-bold">지금 이 팀에 들어오면 어떤 기여를 할 수 있을까?</span><br />
                                이 질문에 명확한 그림을 그려주는 사람이 이깁니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Contents */}
            <section className="bg-[#f5f6f7] py-16 px-6">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-8">아직 컨설팅 받을지 말지 고민되시나요?</h2>
                    <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
                        무료로 제공되는 컨텐츠부터 먼저 확인해보세요
                    </h3>

                    <FreeContents />

                    <p className="text-center text-gray-600 text-sm">
                        무료 취업 팁은 각 채널에서 매일 업데이트 됩니다
                    </p>
                </div>
            </section>

            {/* Resume Service Process */}
            <section className="bg-[#f0f2ff] py-16 px-6">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">자소서 서비스 진행 방식</h2>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <ol className="space-y-6">
                            {[
                                { step: "신청서 작성", desc: "원하시는 서비스와 요구사항을 입력합니다." },
                                { step: "파일 전송", desc: "첨삭이 필요한 자기소개서 파일을 전송합니다." },
                                { step: "첨삭 진행", desc: "컨설턴트가 회사별, 직무별 맞춤형 첨삭을 진행합니다." },
                                { step: "피드백 전달", desc: "상세한 피드백과 함께 수정본을 지원자에게 전달합니다." },
                                { step: "필요 시 재첨삭", desc: "추가 요청사항이 있다면 재첨삭을 진행합니다." }
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

            {/* Interview Service Process */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">모의 면접 서비스 진행 방식</h2>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <ol className="space-y-6">
                            {[
                                { step: "신청서 작성", desc: "원하시는 서비스와 요구사항을 입력합니다." },
                                { step: "파일 전송", desc: "지원자가 제출한 자기소개서 파일을 컨설턴트에게 전송합니다." },
                                { step: "지원서 분석", desc: "컨설턴트가 선택한 직무에 대한 예상 질문을 준비합니다." },
                                { step: "모의 면접", desc: "1대1 화상회의를 통해 모의 면접을 진행합니다." },
                                { step: "면접 피드백 및 코칭", desc: "모의 면접을 통해 파악한 지원자의 강점과 취약점을 토대로 코칭을 진행합니다." },
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
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">자주 묻는 질문</h2>
                    <div className="space-y-6">
                        {[
                            { q: "언제까지 받을 수 있나요?", a: "평균 24시간 이내, 최대 48시간 이내입니다." },
                            { q: "첨삭 후 수정 요청은 가능한가요?", a: "1회 무료 재첨삭 제공됩니다." },
                            { q: "특정 기업에 맞는 첨삭 및 코칭도 가능한가요?", a: "제공하는 모든 코칭은 지원 기업의 특성과 성향을 고려한 맞춤형 첨삭을 제공해 드립니다." }
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