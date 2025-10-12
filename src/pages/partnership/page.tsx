import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Partnership() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">파트너십</h1>
            <p className="text-xl text-white">함께 성장하는 파트너가 되어주세요</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Partnership Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">파트너십 유형</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">비즈니스 파트너</h3>
                  <p className="text-gray-600 mb-4">뮤니온과 함께 새로운 비즈니스 기회를 만들어갑니다.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 리셀러 프로그램</li>
                    <li>• 공동 마케팅</li>
                    <li>• 수익 공유 모델</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">기술 파트너</h3>
                  <p className="text-gray-600 mb-4">기술 협력을 통해 더 나은 서비스를 제공합니다.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• API 연동</li>
                    <li>• 기술 지원</li>
                    <li>• 공동 개발</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-purple-600 text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">콘텐츠 파트너</h3>
                  <p className="text-gray-600 mb-4">양질의 콘텐츠로 사용자 경험을 향상시킵니다.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 콘텐츠 제공</li>
                    <li>• 브랜드 협업</li>
                    <li>• 마케팅 제휴</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 text-white mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">파트너 혜택</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">🎯 전문적인 지원</h3>
                  <p>전담 파트너 매니저의 1:1 지원으로 성공적인 협력을 보장합니다.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">📈 성장 기회</h3>
                  <p>뮤니온의 성장과 함께 파트너사의 비즈니스도 함께 성장합니다.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">💰 경쟁력 있는 수익 구조</h3>
                  <p>공정하고 투명한 수익 배분으로 지속 가능한 협력을 만듭니다.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔧 기술 지원</h3>
                  <p>최신 기술과 개발 도구를 제공하여 빠른 통합을 지원합니다.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">파트너십 문의</h2>
              <p className="text-center text-gray-600 mb-8">
                파트너십에 관심이 있으시다면 아래 연락처로 문의해주세요.
              </p>
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-2">
                  <span className="font-semibold">이메일:</span> partnership@mewnion.com
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">전화:</span> 1588-0000 (내선 2번)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
