import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">투자자 정보</h1>
            <p className="text-xl text-white">뮤니온과 함께 펫테크 시장의 성장에 동참하세요</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">회사 개요</h2>
              <div className="bg-white rounded-lg shadow-lg p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">뮤니온 소개</h3>
                    <p className="text-gray-600 mb-4">
                      뮤니온은 AI와 IoT 기술을 활용하여 반려동물과 보호자를 연결하는 혁신적인 펫테크 플랫폼입니다.
                    </p>
                    <p className="text-gray-600 mb-4">
                      2023년 설립 이후, 빠르게 성장하며 국내 펫테크 시장을 선도하고 있습니다.
                    </p>
                    <p className="text-gray-600">
                      Web3, 메타버스 등 최신 기술을 접목하여 차별화된 가치를 제공합니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">주요 지표</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-600">설립일</span>
                        <span className="font-semibold text-gray-900">2023.01</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-600">누적 투자 유치</span>
                        <span className="font-semibold text-gray-900">50억 원</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-600">월간 활성 사용자</span>
                        <span className="font-semibold text-gray-900">100만+</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-600">파트너사</span>
                        <span className="font-semibold text-gray-900">200+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Opportunity */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">시장 기회</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-purple-600 text-4xl mb-4">📈</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">시장 성장</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">20%</p>
                  <p className="text-gray-600">연평균 성장률 (2023-2028)</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-purple-600 text-4xl mb-4">🐾</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">반려인구</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">1,500만</p>
                  <p className="text-gray-600">국내 반려동물 양육 가구</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-purple-600 text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">시장 규모</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">6조 원</p>
                  <p className="text-gray-600">2025년 예상 시장 규모</p>
                </div>
              </div>
            </div>

            {/* Investment Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">투자 하이라이트</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">검증된 비즈니스 모델</h3>
                    <p className="text-gray-600">
                      다양한 수익원(플랫폼 수수료, 구독 서비스, 광고, 데이터 서비스)을 통한 안정적인 매출 구조
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">기술 경쟁력</h3>
                    <p className="text-gray-600">
                      AI/ML 기반 행동 분석, IoT 기기 통합, 블록체인 기술 등 차별화된 기술력 보유
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">강력한 네트워크 효과</h3>
                    <p className="text-gray-600">
                      사용자, 펫 서비스 제공자, 브랜드가 모두 참여하는 플랫폼으로 높은 진입 장벽 확보
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">글로벌 확장 계획</h3>
                    <p className="text-gray-600">
                      국내 시장 안정화 후 아시아 및 글로벌 시장으로의 확장 로드맵 보유
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">재무 정보</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">항목</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">2023</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">2024 (예상)</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">2025 (목표)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">매출액</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">50억 원</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">120억 원</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">300억 원</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">영업이익</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">-20억 원</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">-10억 원</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">30억 원</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">활성 사용자</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">30만</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">100만</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-right">300만</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leadership */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">경영진</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">김대표</h3>
                  <p className="text-purple-600 mb-2">CEO</p>
                  <p className="text-sm text-gray-600">전 네이버 AI Lab 리더</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">이기술</h3>
                  <p className="text-purple-600 mb-2">CTO</p>
                  <p className="text-sm text-gray-600">전 카카오 플랫폼 개발팀장</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">박전략</h3>
                  <p className="text-purple-600 mb-2">CFO</p>
                  <p className="text-sm text-gray-600">전 삼성전자 M&A 팀장</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">투자 문의</h2>
              <p className="text-xl mb-8">뮤니온의 성장에 함께하고 싶으신가요?</p>
              <div className="flex justify-center gap-6">
                <div>
                  <p className="font-semibold mb-2">IR 자료 요청</p>
                  <p>ir@mewnion.com</p>
                </div>
                <div className="border-l border-white/30 pl-6">
                  <p className="font-semibold mb-2">투자 문의</p>
                  <p>invest@mewnion.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
