import TestimonialSliderWrapper from '../components/HomeTestimonialSliderWrapper';
import Link from 'next/link';

// 후기 데이터 - 서버 컴포넌트에서 정의하여 SEO에 노출
const testimonials = [
    {
        name: "안**",
        title: "빠른 응답과 맞춤형 피드백으로 설득력 있는 자소서 완성!",
        review: "처음 문의드렸을 때부터 응답이 정말 빠르고 친절하셨습니다. 상담도 자세하게 해주셔서 방향을 잡는 데 큰 도움이 됐습니다. 수정 요청 사항도 정확히 반영해주셨고, 결과물도 약속한 기한보다 빠르게 받아볼 수 있어서 만족도가 높았습니다."
    },
    {
        name: "허**",
        title: "어려웠던 자기표현, 합리적 가격으로 완벽하게 해결!",
        review: "제 경험에 대한 내용을 스스로 글로 풀어내는 것이 너무 어려워서 연락을 드리게 되었습니다. 가격도 합리적으로 제시해주셨고 결과물을 받았을 때 지금까지 제가 냈던 자소서 내용들이 부끄러워질 정도로 저의 경험들을 잘 풀어내주셨습니다."
    },
    {
        name: "정**",
        title: "자신감 있는 경력 포장으로 이직 준비 완벽 지원!",
        review: "최근에 이직을 위해 숨고를 통해 이력서 및 경력기술서를 요청 하였을 때, 많은 의뢰와 연락이 왔었습니다. 김과장님의 자신감과 확신으로 믿고 의뢰 요청을 드렸습니다. 타임라인 안에 요청드린 이력서 및 경력기술서를 회신 받았고, 현재 좋은 결과를 기다리고 있습니다."
    },
    {
        name: "박**",
        title: "평생 써먹을 수 있는 전문적인 경력 기술서 작성!",
        review: "경력 기술서 작성이 너무 막막했는데 제 경력을 최대한 전문성 있어 보이게 잘 작성해주셔서 감사합니다. 그냥 이거 들고 평생 써먹어도 될 것 같아요. 한번의 비용 지급에 20년 동안 경력 기술서로 머리 싸맬 일이 날아간다고 보시면 됩니다."
    },
    {
        name: "비**",
        title: "SK하이닉스 합격까지! 맞춤형 지원으로 꿈을 이루다!",
        review: "SK하이닉스 메인트에 꼭 합격하고 싶어서 마지막으로 도전을 준비하던 중, 여러 고수님들을 꼼꼼히 비교해보다가 대기업 김과장님을 알게 되었습니다! SK하이닉스 현직 출신이시고, 리뷰에서도 진심이 느껴져서 고민 없이 바로 진행했습니다! 덕분에 최종합격까지 갈 수 있었습니다."
    }
];

export default function Home() {
    return (
        <main className="bg-white text-gray-900 min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-[#f0f2ff] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4655C7] p-5">
                    합격을 부르는 자기소개서와 면접 컨설팅
                </h1>
                <p className="text-lg text-[#4655C7] mb-6">
                    SK, 공기업, 대기업 최종 합격자 배출!<br />
                    실전 중심 맞춤형 피드백으로 당신의 합격을 이끕니다. <br />
                </p>
                <button className="bg-[#4655C7] text-white px-6 py-3 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                    무료 상담 신청하기
                </button>
            </section>

            {/* 취업, 스펙이 부족해서 떨어지는 걸까요? 섹션 */}
            <section className="bg-[#f7f9ff] py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
                        취업, 스펙이 부족해서 떨어지는 걸까요?
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-md mb-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                            또 자격증, 인턴, 대외활동을 찾아 헤매시나요?
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-[#4655C7] text-center mb-8">
                            하지만 채용 담당자는 그보다 <span className="font-bold border-b-2 border-[#4655C7] pb-1">&#39;읽고 싶은 자기소개서&#39;</span>를 찾고 있습니다.
                        </p>

                        <div className="space-y-5 mb-8">
                            {[
                                "스펙보다 중요한 건, 전달력입니다.",
                                "비슷한 배경, 비슷한 경험 속에서도 합격자를 만드는 건 결국 '표현의 차이'입니다.",
                                "불합격 이유를 몰라서 방황하고 있다면, 당신은 혼자가 아닙니다."
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-[#4655C7] font-bold mt-1">✦</span>
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            ))}
                        </div>
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
                    <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
                        기업에서 원하는 대화법이 있습니다
                    </h2>

                    <div className="bg-[#f0f2ff] p-8 rounded-xl shadow-md mb-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                            면접에서 어떤 말이 합격을 이끌어낼까요?
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-[#4655C7] text-center mb-8">
                            그 <span className="font-bold border-b-2 border-[#4655C7] pb-1">대화법</span>을 알려드립니다.
                        </p>

                        <div className="space-y-5 mb-8">
                            {[
                                "취준생들은 기업에서 원하는 소통 방식을 잘 모릅니다.",
                                "답변이 아닌 대화를 준비하세요.",
                                "1분 자기소개부터 마무리 멘트까지, 실제 면접관의 기준으로 도와드립니다."
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-[#4655C7] font-bold mt-1">✦</span>
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            ))}
                        </div>
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

                    {/* 예상 질문 리스트 */}
                    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                        <h3 className="text-xl font-bold text-[#4655C7] mb-6">
                            이런 질문, 준비해보셨나요?
                        </h3>
                        <div className="grid grid-cols-1 gap-4 mb-6">
                            {[
                                "귀하의 경험 중에서 가장 도전적이었던 문제는 무엇이었으며, 어떻게 해결했습니까?",
                                "지원한 직무에서 성공하기 위해 필요한 역량은 무엇이라고 생각하나요?",
                                "우리 회사의 어떤 점이 지원자님과 맞는다고 생각하시나요?",
                                "이전 업무/프로젝트에서 실패한 경험과 그로부터 배운 점은 무엇인가요?"
                            ].map((question, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <span className="text-[#4655C7] font-bold">Q.</span>
                                    <p className="text-gray-700 text-sm">{question}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 추가 필요 */}

            {/* Testimonials - Card Slider */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-3xl font-bold text-[#4655C7] text-center mb-12">이용자 후기</h2>

                {/* SEO를 위한 실제 후기 데이터 (스크린 리더와 검색 엔진용) */}
                <div className="sr-only">
                    {testimonials.map((item, idx) => (
                        <div key={idx}>
                            <h3>{item.title}</h3>
                            <p>{item.review}</p>
                            <p>작성자: {item.name}</p>
                            <p>평점: 5/5</p>
                        </div>
                    ))}
                </div>

                {/* 클라이언트 슬라이더 컴포넌트 */}
                <TestimonialSliderWrapper testimonials={testimonials} />
            </section>

            {/* CTA Section */}
            <section className="bg-[#f0f2ff] text-center py-24 px-6">
                <h2 className="text-3xl font-bold mb-4 text-[#4655C7] p-5">
                    당신의 합격, 지금 시작해보세요.
                </h2>
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