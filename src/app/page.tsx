export default function Home() {
    return (
        <main className="bg-[#f3f1e7] text-[#4a2e21] min-h-screen flex flex-col justify-between">
            {/* Header Notice */}
            <div className="bg-[#3b190f] text-white text-sm py-2 text-center">
                회사는 당신을 책임지지 않습니다.
            </div>

            {/* Navigation Bar */}
            <header className="bg-[#fff] shadow sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="font-bold text-xl text-[#4a2e21]">직장탈출학교</h1>
                    <ul className="hidden md:flex gap-6 text-sm text-[#4a2e21]">
                        <li>입학 안내</li>
                        <li>교육 과목</li>
                        <li>교육 활동</li>
                        <li>칼럼</li>
                        <li>장학금</li>
                        <li>진단서</li>
                    </ul>
                    <button className="bg-[#4a2e21] text-white px-4 py-2 rounded-full text-sm">로그인</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 px-6">
                <img
                    src="/hero-image.png"
                    alt="책 위의 사람"
                    className="rounded-lg shadow-lg"
                />
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6">
                        직장을 탈출하기 위해서 <br />
                        <span className="text-[#772d24]">우리는 학교에서 가르치지 않는 걸 배워야 합니다.</span>
                    </h2>
                    <button className="bg-[#75712e] text-white px-6 py-3 rounded hover:bg-[#5f5a1a] transition">
                        직장탈출학교란?
                    </button>
                </div>
            </section>

            {/* Column Section */}
            <section className="bg-[#fdfaf2] py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">칼럼만 읽어도 <br /> <span className="text-[#772d24]">직장 탈출이 가능합니다.</span></h3>
                        <p className="text-sm text-[#6b4a3d] mb-6">
                            기존의 고정관념을 깨지 않으면 당신의 인생은 절대 변하지 않습니다. <br />
                            칼럼만 읽어도 여러분의 삶을 충분히 바꿀 수 있습니다.
                        </p>
                        <button className="bg-[#4a2e21] text-white px-4 py-2 rounded text-sm">6가지 칼럼 읽기</button>
                    </div>
                    <div>
                        <img src="/column1.jpg" alt="여섯 가지 이야기" className="rounded shadow" />
                        <p className="text-sm mt-2">칼럼1 (1) 여섯 가지 이야기</p>
                    </div>
                    <div>
                        <img src="/column2.jpg" alt="투자자" className="rounded shadow" />
                        <p className="text-sm mt-2">칼럼2 (2) 투자는 나중이다. 일단 OO을 높이자</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-white py-24 px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    당신의 인생에 <span className="text-[#772d24]">터닝포인트</span>가 되길 바랍니다.
                </h2>
                <p className="mb-6 text-[#4a2e21]">
                    저는 28살 때부터 직장 탈출을 준비했고 불과 2년 만에 연봉 3억을 만들게 됩니다.
                </p>
                <button className="bg-[#4a2e21] text-white px-6 py-3 rounded hover:bg-[#341a12] transition">
                    직장탈출학교 입학하기
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-[#4a2e21] text-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-sm text-center">
                    <p className="mb-2 font-semibold">대기업김과장</p>
                    <p className="mb-2">직장을 탈출하기 위해서 우리는 <br />학교에서 가르치지 않는 걸 배워야 합니다.</p>
                    <p className="mb-2">kks7180@naver.com</p>
                    <p className="text-xs mt-4">COPYRIGHT 2022. 대기업김과장 ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </main>
    );
}