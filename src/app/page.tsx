import TestimonialSliderWrapper from '../components/HomeTestimonialSliderWrapper';

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
            <section className="bg-[#f3f1e7] py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4a2e21]">
                    합격을 부르는 자기소개서와 면접 컨설팅
                </h1>
                <p className="text-lg text-[#4a2e21] mb-6">
                    SK, 공기업, 대기업 최종 합격자 배출!<br />
                    실전 중심 맞춤형 피드백으로 당신의 합격을 이끕니다.
                </p>
                <button className="bg-[#4a2e21] text-white px-6 py-3 rounded-full text-lg hover:bg-[#341a12] transition">
                    무료 상담 신청하기
                </button>
            </section>

            {/* Profile Summary */}
            <section className="bg-[#f9f9f9] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* 제목 */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#4a2e21]">전문가 프로필</h2>
                    </div>

                    {/* 좌우 레이아웃 */}
                    <div className="flex justify-center items-center">
                        {/* 이미지 (오른쪽으로 10px margin) */}
                        <div className="w-1/2 flex justify-end pr-[20px]">
                            <div className="w-[220px] rounded-xl overflow-hidden shadow-md">
                                <img
                                    src="/img/desk_front.jpg"
                                    alt="전문 컨설턴트"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* 내용 (왼쪽으로 10px margin) */}
                        <div className="w-1/2 flex justify-start pl-[20px] ">
                            <ul className="text-gray-800 text-base space-y-4">
                                {[
                                    "전직 대기업 인사팀 출신",
                                    "누적 컨설팅 300+건 이상",
                                    "합격자 배출 기업: SK, 현대, LG, 한국전력 등",
                                    "자소서 피드백 + 면접 모의고사 완전 대응",
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#4a2e21] mt-1">✔</span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards */}
            <section className="bg-[#fdfaf2] py-16 px-6">
                <h2 className="text-2xl font-semibold text-center mb-12">제공 서비스</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "자기소개서 1:1 피드백",
                            desc: "문제점 분석 + 킬러 문장 제안까지!",
                        },
                        {
                            title: "실전 면접 모의 훈련",
                            desc: "실제 질문 중심의 코칭과 피드백 제공",
                        },
                        {
                            title: "공기업/NCS 준비",
                            desc: "직무 기반 서류 및 면접 완전 대비",
                        },
                    ].map(({ title, desc }) => (
                        <div key={title} className="bg-white shadow rounded p-6 text-center">
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials - Card Slider */}
            <section className="py-20 px-6 bg-white">
                <h2 className="text-2xl font-semibold text-center mb-12">이용자 후기</h2>

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
            <section className="bg-[#f3f1e7] text-center py-24 px-6">
                <h2 className="text-3xl font-bold mb-4 text-[#4a2e21]">
                    당신의 합격, 지금 시작해보세요.
                </h2>
                <button className="bg-[#4a2e21] text-white px-8 py-4 rounded-full text-lg hover:bg-[#341a12] transition">
                    무료 상담 신청하기
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-[#4a2e21] text-white py-12 px-6 text-center text-sm">
                <p className="font-semibold mb-2">자기소개서/면접 컨설턴트 홍보 페이지</p>
                <p>이메일: kks7180@naver.com</p>
                <p className="text-xs mt-4">© 2025 Consultant. All rights reserved.</p>
            </footer>
        </main>
    );
}