'use client';

export default function Contact() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section - 상담 초대 */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4655C7] p-5">
                    맞춤형 자소서 피드백부터 면접 준비까지,<br />
                    지금 바로 시작해보세요
                </h1>
                <p className="text-lg text-[#4655C7] mb-8">
                    전문 컨설턴트와 1:1 상담으로 합격률을 높여보세요<br />
                    빠른 응답과 맞춤형 솔루션을 제공합니다
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => window.open('https://open.kakao.com/o/sAfYyKLg', '_blank')}
                        className="bg-[#FEE500] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#F5DC00] transition flex items-center gap-2 hover:cursor-pointer"
                    >
                        <img
                            src="/icons/kakaotalk.png"
                            alt="카카오톡 아이콘"
                            className="w-6 h-6 object-contain"
                        />
                        카카오톡으로 상담하기
                    </button>
                </div>
            </section>

            {/* 브랜드 신뢰 보조 채널 */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
                        다양한 채널에서 김과장을 만나보세요
                    </h2>
                    <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
                        기존 이용자들의 후기와 무료 콘텐츠를 확인해보세요
                    </h3>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { name: '숨고', icon: '/icons/soomgo.png',  link: 'https://soomgo.com/profile/users/10562016' },
                            { name: '크몽', icon: '/icons/kmong.png', link: 'https://kmong.com/gig/645507' },
                            { name: '네이버 블로그', icon: '/icons/naver_blog.svg',  link: 'https://blog.naver.com/pass_everything' },
                            { name: '인스타그램', icon: '/icons/instagram.webp', link: 'https://www.instagram.com/allpass_everything/' },
                            { name: '스레드', icon: '/icons/threads.png',  link: 'https://www.threads.com/@allpass_everything' },
                        ].map((channel, i) => (
                            <button
                                key={i}
                                onClick={() => window.open(channel.link, '_blank')}
                                className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer group"
                            >
                                <div className="h-8 w-8 mx-auto mb-2 flex items-center justify-center">
                                    <img
                                        src={channel.icon}
                                        alt={`${channel.name} 아이콘`}
                                        className="max-h-full max-w-full object-contain w-8 h-8"
                                    />
                                </div>
                                <h3 className="font-medium text-gray-700 mb-1">{channel.name}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ 섹션 */}
            <section className="bg-[#f0f4fa] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">상담 신청 전 읽어주세요</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "상담 가능 시간은 언제인가요?",
                                a: "평일 오전 9시~오후 9시, 주말 오전 10시~오후 6시까지 상담 가능합니다."
                            },
                            {
                                q: "카카오톡 상담 시 어떤 내용을 먼저 보내야 하나요?",
                                a: "① 지원하시는 기업/직무, ② 현재 준비 상황, ③ 원하시는 서비스(자소서 첨삭, 면접 연습 등), ④ 마감일정을 알려주세요."
                            },
                            {
                                q: "자기소개서 첨삭 요청은 어떤 방식으로 이루어지나요?",
                                a: "상담 후 서비스 확정 시, 자기소개서를 보내주시면 24-48시간 내 첨삭본과 상세 피드백을 제공해드립니다."
                            },
                            {
                                q: "비용은 얼마나 되나요?",
                                a: "서비스별로 상이하며, 상담 시 맞춤형 견적을 제공해드립니다. 첫 상담은 무료입니다!"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                                <p className="font-bold text-lg text-[#4655C7] mb-3">Q. {item.q}</p>
                                <p className="font-bold text-gray-700 leading-relaxed">&nbsp;A. {item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#4655C7] text-white py-12 px-6 text-center text-sm border-t border-[#3A46B9]">
                <p className="font-semibold mb-2">대기업김과장</p>
                <p>이메일: kks7180@naver.com</p>
                <p className="text-xs mt-4 opacity-75">COPYRIGHT 2025. 대기업김과장 All rights reserved.</p>
            </footer>
        </main>
    );
}