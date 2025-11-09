import TestimonialSliderWrapper from "../components/HomeTestimonialSliderWrapper";
import Link from "next/link";
import HomeCompanySlider from "@/components/HomeCompanySlider";
import HomeJobSlider from "@/components/HomeJobSlider";

import { testimonialAbstracts } from "@/data/testimonialAbstract";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";
import FadeInAnimation from "@/components/FadeInAnimation";
import BubblePopAnimation from "@/components/BubblePopAnimation";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f2ff] via-[#e8ebff] to-[#dde3ff] py-18 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 제목은 중앙 정렬 유지 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#4655C7] p-5">
              합격을 부르는 자기소개서 & 면접 컨설팅
            </h1>
          </div>

          {/* 프로필 사진과 소개 텍스트 - 중앙 정렬 */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* 프로필 사진 영역 */}
              <div className="flex-1">
                <div className="w-80 h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                  <img
                    src="/img/desk_front.jpg"
                    alt="전문 컨설턴트 프로필 이미지"
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>

              {/* 소개 텍스트 영역 */}
              <div className="flex-2">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1e3a8a] text-left space-y-2 md:space-y-3">
                  <FadeInAnimation delay={0}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. SK하이닉스, 현대로템 출신 취업 전문 컨설턴트
                    </div>
                  </FadeInAnimation>
                  <FadeInAnimation delay={200}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. 연 1,000건+ 자소서 첨삭 및 Zoom 비대면 면접 컨설팅
                    </div>
                  </FadeInAnimation>
                  <FadeInAnimation delay={400}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. 현재까지 누적 990명+ 최종합격 이력
                    </div>
                  </FadeInAnimation>
                  <FadeInAnimation delay={600}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. 숨고, 크몽, 블로그, 당근, 사람인 플랫폼 취업컨설턴트
                    </div>
                  </FadeInAnimation>
                  <FadeInAnimation delay={800}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. 유명 취업 컨설팅 기업 &#34;마스터 강사&#34;
                    </div>
                  </FadeInAnimation>
                  <FadeInAnimation delay={1000}>
                    <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                      -. Thread 취준생 3만 팔로워 보유
                    </div>
                  </FadeInAnimation>
                    <FadeInAnimation delay={1000}>
                        <div className="hover:text-[#e1582e] transition-colors duration-300 hover:cursor-default">
                            -. 자기소개서 & 면접 실시간 Zoom 강의 (매달 1회 진행)
                        </div>
                    </FadeInAnimation>
                </h2>
              </div>
            </div>
          </div>

          {/* CTA 버튼은 중앙 정렬 유지 */}
          <div className="text-center mt-3">
            <Link href="/contact">
              <button className="bg-[#4655C7] text-white px-8 py-4 rounded-full text-lg hover:bg-[#344199] transition hover:cursor-pointer">
                무료 상담 신청하기
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 취업, 스펙이 부족해서 떨어지는 걸까요? 섹션 */}
      <section className="bg-[#f0f4fa] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[#4655C7] text-center mb-8">
            취업, 스펙이 부족해서 떨어지는 걸까요?
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            또 자격증, 인턴, 대외활동을 찾아 헤매시나요?
          </h2>
          <h2 className="text-2xl font-semibold text-[#4655C7] text-center mb-8">
            채용 담당자는 그보다{" "}
            <span className="font-bold border-[#4655C7] pb-1">
              &#39;읽고 싶은 자기소개서&#39;
            </span>
            를 찾고 있습니다.
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-lg font-semibold text-gray-600 mb-8">
              👉 스펙보다 중요한 건, 전달력입니다. <br />
              👉 비슷한 배경, 경험 속에서도 결국 &#39;표현의 차이&#39;가 합불을
              결정합니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
              {/* 실패 사례 */}
              <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xs">
                <h4 className="font-bold text-center text-gray-600 text-xl mb-8 pb-4 border-b border-gray-200">
                  불합격 사례
                </h4>

                {/* 지원자 말풍선 (왼쪽) */}
                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        지원자
                      </p>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-200">
                        <p className="text-gray-700">
                          &#34;저는 관련 자격증도 있고, 학점도 높고, 인턴 경험도
                          있는데 왜 계속 떨어지는지 모르겠어요. 더 이상 보완할
                          스펙이 없는데...&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 컨설턴트 말풍선 (오른쪽) */}
                <BubblePopAnimation delay={400}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-[#4655C7] mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-[#4655C7] p-4 rounded-2xl rounded-tr-none shadow-md">
                        <p className="text-white">
                          스펙을 아무리 쌓아도 그것을 자기소개서에서 효과적으로
                          표현하지 못하면 합격으로 이어지지 않습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>

              {/* 합격 사례 */}
              <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xs">
                <h4 className="font-bold text-center text-[#4655C7] text-xl mb-8 pb-4 border-b border-blue-200">
                  합격 사례
                </h4>

                {/* 지원자 말풍선 (왼쪽) */}
                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        지원자
                      </p>
                      <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none shadow-md border border-blue-200">
                        <p className="text-gray-700">
                          &#34;전공과 무관한 분야였고, 특별한 인턴 경험도
                          없었지만 제가 가진 경험을 회사가 원하는 방향으로
                          표현하는 데 집중했더니 합격했어요!&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 컨설턴트 말풍선 (오른쪽) */}
                <BubblePopAnimation delay={400}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-[#4655C7] mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-[#4655C7] p-4 rounded-2xl rounded-tr-none shadow-md">
                        <p className="text-white">
                          같은 경험도 어떻게 표현하느냐에 따라 인사담당자의 눈에
                          완전히 다르게 보입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기업에서 원하는 대화법이 있습니다 섹션 */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[#4655C7] text-center mb-8">
            기업에서 원하는 대화법이 있습니다
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            면접에서 번번히 고배를 마시나요?
          </h2>
          <h2 className="text-2xl font-semibold text-[#4655C7] text-center mb-8">
            채용담당자가 원하는{" "}
            <span className="font-bold border-[#4655C7] pb-1">
              &#39;소통 방식&#39;
            </span>
            을 안다면, 손쉽게 풀어나갈 수 있습니다.
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-lg font-semibold text-gray-600 mb-8">
              👉 정해놓은 답변이 아닌 상호작용이 있는 대화를 준비하세요. <br />
              👉 솔직한 경험을 토대로 대답해도 충분히 면접관의 이목을 끌 수 있는
              방법이 있습니다.
            </p>
          </div>

          {/* 면접 실패 vs 성공 예시 대화 */}
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
              {/* 실패 대화 */}
              <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xs">
                <h4 className="font-bold text-center text-gray-600 text-xl mb-8 pb-4 border-b border-gray-200">
                  실패하는 대화
                </h4>

                {/* 면접관 질문 (오른쪽) */}
                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none shadow-md border border-gray-200">
                        <p className="text-gray-700">
                          &#34;지원자님의 강점이 무엇인가요?&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 지원자 답변 (왼쪽) */}
                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        지원자
                      </p>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-md border border-gray-200">
                        <p className="text-gray-700">
                          &#34;저는 성실하고 책임감이 강합니다. 맡은 일은 끝까지
                          해내는 성격입니다.&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 면접관 속마음 (오른쪽) */}
                <BubblePopAnimation delay={600}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-red-50 p-4 rounded-2xl rounded-tr-none shadow-md border border-red-200">
                        <p className="text-red-700 italic">
                          &#39;모든 지원자가 하는 말이네... 구체적인 사례가 없어
                          신뢰하기 어렵다.&#39;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>

              {/* 성공 대화 */}
              <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xs">
                <h4 className="font-bold text-center text-[#4655C7] text-xl mb-8 pb-4 border-b border-blue-200">
                  성공하는 대화
                </h4>

                {/* 면접관 질문 (오른쪽) */}
                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tr-none shadow-md border border-gray-200">
                        <p className="text-gray-700">
                          &#34;지원자님의 강점이 무엇인가요?&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 지원자 답변 (왼쪽) */}
                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-lg">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        지원자
                      </p>
                      <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none shadow-md border border-blue-200">
                        <p className="text-gray-700">
                          &#34;저는 목표 달성을 위한 체계적인 실행력이
                          강점입니다. 학부 연구 프로젝트에서 예상치 못한 문제가
                          발생했을 때 (중략) ~를 통해 원인을 세분화하고 팀원들과
                          협업하여 (중략) ~한 전략을 통해 일정 내에 문제를
                          해결했습니다. 이러한 경험이 귀사의 R&D 프로젝트에도
                          도움이 될 것이라 생각합니다.&#34;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                {/* 면접관 속마음 (오른쪽) */}
                <BubblePopAnimation delay={600}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-gray-700 mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-green-50 p-4 rounded-2xl rounded-tr-none shadow-md border border-green-200">
                        <p className="text-green-700 italic">
                          &#39;구체적인 사례와 우리 회사와의 연관성까지
                          언급했네. 준비가 잘 되어 있군.&#39;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 채용 혹한기에도 압도적인 성과 섹션 */}
      <section className="bg-[#f0f4fa] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#4655C7] text-center mb-6">
            채용 혹한기에도 압도적인 성과를 내고 있습니다
          </h1>

          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            <span className="font-semibold text-[#4655C7]">
              990명 이상의 합격자, 150개 이상의 기업.
            </span>{" "}
            데이터가 증명합니다.
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            당신도 다음 성공 사례가 될 수 있습니다.
          </h2>

          {/* 숫자 강조 배너 */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { count: "990명+", label: "누적 합격자 수" },
                { count: "1,000건+", label: "연간 첨삭/컨설팅 건수" },
                { count: "82%", label: "평균 자소서 합격률" },
                { count: "150곳+", label: "최종 합격 기업" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="text-4xl font-bold text-[#e1582e] mb-2">
                    {stat.count}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 합격 기업 리스트 섹션 */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h3 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
              이용자 실제 합격 기업 현황
            </h3>
            <HomeCompanySlider rowCount={4} items={companies} />
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-3xl font-bold text-[#4655C7] text-center mb-8">
              이용자 실제 합격 직무 현황
            </h3>
            <HomeJobSlider rowCount={2} items={jobs} />
          </div>
        </div>
      </section>

      {/* Testimonials - Card Slider */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-[#4655C7] text-center mb-12">
          이용자 후기
        </h2>

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
        <p className="text-xs mt-4">
          COPYRIGHT 2025. 대기업김과장 All rights reserved.
        </p>
      </footer>
    </main>
  );
}
