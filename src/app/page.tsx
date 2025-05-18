export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          내가 직접 붙여본 자기소개서, 당신도 합격하게 만들 수 있습니다
        </h1>
        <p className="mt-4 text-lg text-gray-600">스펙이 없어도, 경험이 부족해도 합격할 수 있습니다.</p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
          합격 전략 보기
        </button>
      </main>
  );
}