import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Developers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">개발자 센터</h1>
            <p className="text-xl text-white">뮤니온 플랫폼으로 무한한 가능성을 만들어보세요</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Start */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">빠른 시작</h2>
              <div className="bg-gray-900 rounded-lg p-8 text-white">
                <pre className="overflow-x-auto">
                  <code>{`# 뮤니온 SDK 설치
npm install @mewnion/sdk

# 초기화
import { Mewnion } from '@mewnion/sdk';

const mewnion = new Mewnion({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// 첫 번째 API 호출
const result = await mewnion.getPetProfile('pet-id');
console.log(result);`}</code>
                </pre>
              </div>
            </div>

            {/* Resources */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">개발 리소스</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <a href="/api" className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">API 문서</h3>
                  <p className="text-gray-600">상세한 API 레퍼런스와 사용 가이드를 확인하세요.</p>
                </a>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">💡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">예제 코드</h3>
                  <p className="text-gray-600">다양한 사용 사례의 샘플 코드를 제공합니다.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">🛠️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">개발 도구</h3>
                  <p className="text-gray-600">SDK, CLI 도구, 테스트 환경을 제공합니다.</p>
                </div>
              </div>
            </div>

            {/* SDK Support */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">지원하는 SDK</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                  <div className="text-4xl mb-2">🟦</div>
                  <h3 className="font-semibold text-gray-900">TypeScript</h3>
                  <p className="text-sm text-gray-600">v1.0.0</p>
                </div>
                <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                  <div className="text-4xl mb-2">🐍</div>
                  <h3 className="font-semibold text-gray-900">Python</h3>
                  <p className="text-sm text-gray-600">v1.0.0</p>
                </div>
                <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                  <div className="text-4xl mb-2">☕</div>
                  <h3 className="font-semibold text-gray-900">Java</h3>
                  <p className="text-sm text-gray-600">v1.0.0</p>
                </div>
                <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-purple-600 transition-colors">
                  <div className="text-4xl mb-2">🔷</div>
                  <h3 className="font-semibold text-gray-900">Go</h3>
                  <p className="text-sm text-gray-600">v1.0.0</p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">개발자 커뮤니티</h2>
              <p className="text-xl mb-8">다른 개발자들과 함께 정보를 공유하고 협력하세요</p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  GitHub
                </button>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Discord
                </button>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Stack Overflow
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
