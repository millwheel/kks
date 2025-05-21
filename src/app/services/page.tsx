export default function Services() {
    return (
        <main className="px-6 py-12 max-w-5xl mx-auto space-y-24">
            {/* 1. 히어로 섹션 */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold">자기소개서, 기업이 원하는 언어로 바꿔드립니다</h1>
                <p className="text-lg text-gray-600">대기업 인사담당자 출신이 직접 첨삭하는 1:1 맞춤 피드백</p>
                <div className="space-x-4">
                    <button className="px-6 py-2 bg-rose-800 text-white rounded-full">첨삭 신청하기</button>
                    <button className="px-6 py-2 border border-rose-800 text-rose-800 rounded-full">합격 후기 보기</button>
                </div>
            </section>

            {/* 2. 서비스 소개 섹션 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">대기업 인사담당자 출신이 말하는 합격 자기소개서</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>불합격의 이유를 명확하게 분석</li>
                    <li>기업 맞춤 키워드 반영</li>
                    <li>표현력/논리력 강화 첨삭</li>
                </ul>
                <p className="text-sm text-gray-400">누적 첨삭 수 2,000건 이상 / 첨삭 만족도 98%</p>
            </section>

            {/* 3. 서비스 종류 및 가격 안내 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">서비스 종류 및 가격</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { name: '기본 자기소개서 첨삭', desc: '문법/표현/논리 구성 중심 첨삭', price: '49,000원' },
                        { name: '프리미엄 첨삭', desc: '기업 맞춤형 + 면접 대비 키워드 반영', price: '79,000원' },
                        { name: '1:1 모의면접 피드백', desc: '영상 녹화 후 면접 피드백 제공', price: '69,000원' },
                        { name: '패키지 상품', desc: '첨삭 + 모의면접 세트', price: '110,000원' },
                    ].map((s, i) => (
                        <div key={i} className="border rounded-xl p-4 space-y-2 shadow-sm">
                            <h3 className="font-bold text-lg">{s.name}</h3>
                            <p className="text-gray-600">{s.desc}</p>
                            <div className="text-right font-semibold">{s.price}</div>
                            <button className="mt-2 w-full py-2 bg-rose-800 text-white rounded-full">신청하기</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. 실제 첨삭 예시 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">실제 첨삭 전후 비교</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-xl border">
                        <h4 className="font-medium mb-2">Before</h4>
                        <p className="text-sm text-gray-700">저는 열심히 일하는 성격입니다. 그래서 어떤 일이든 최선을 다하려고 합니다.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border">
                        <h4 className="font-medium mb-2">After</h4>
                        <p className="text-sm text-gray-700">저는 맡은 일에 대한 책임감을 바탕으로, 마감 기한 내 최고의 결과를 도출해내는 실행력을 갖추고 있습니다.</p>
                    </div>
                </div>
            </section>

            {/* 5. 신청 프로세스 안내 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">진행 방식</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>신청서 작성</li>
                    <li>파일 업로드</li>
                    <li>첨삭 진행</li>
                    <li>피드백 전달</li>
                    <li>필요시 재첨삭</li>
                </ol>
            </section>

            {/* 6. FAQ 섹션 */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">자주 묻는 질문</h2>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium">Q. 언제까지 받을 수 있나요?</p>
                        <p className="text-sm text-gray-700">보통 24시간 이내, 최대 48시간입니다.</p>
                    </div>
                    <div>
                        <p className="font-medium">Q. 첨삭 후 수정 요청은 가능한가요?</p>
                        <p className="text-sm text-gray-700">1회 무료 재첨삭 제공됩니다.</p>
                    </div>
                </div>
            </section>

            {/* 7. 하단 CTA */}
            <section className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">합격을 부르는 자기소개서, 지금 시작하세요</h2>
                <button className="px-8 py-3 bg-rose-800 text-white rounded-full">지금 첨삭 신청하기</button>
            </section>
        </main>
    );
}
