import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">채용</h1>
            <p className="text-xl text-white">뮤니온과 함께 펫테크의 미래를 만들어가세요</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Company Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">뮤니온의 문화</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">혁신</h3>
                  <p className="text-gray-600">새로운 기술과 아이디어를 적극 수용합니다</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">협력</h3>
                  <p className="text-gray-600">팀워크를 중시하고 함께 성장합니다</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">워라밸</h3>
                  <p className="text-gray-600">일과 삶의 균형을 존중합니다</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">성장</h3>
                  <p className="text-gray-600">개인의 커리어 성장을 지원합니다</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">복지 혜택</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">💰</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">경쟁력 있는 연봉</h3>
                    <p className="text-gray-600">업계 최고 수준의 급여와 스톡옵션 제공</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">🏥</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">건강 관리</h3>
                    <p className="text-gray-600">종합 건강검진, 의료비 지원, 운동비 지원</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">🏖️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">휴가 제도</h3>
                    <p className="text-gray-600">자유로운 연차 사용, 리프레시 휴가, 안식휴가</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">🎓</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">교육 지원</h3>
                    <p className="text-gray-600">교육비, 도서 구입비, 컨퍼런스 참가비 지원</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">🏠</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">유연 근무</h3>
                    <p className="text-gray-600">재택근무, 선택적 출퇴근제, 탄력 근무제</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-purple-600 text-2xl">🐱</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">펫 프렌들리</h3>
                    <p className="text-gray-600">반려동물 동반 출근, 펫케어 비용 지원</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">채용 공고</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>개발팀</span>
                        <span>•</span>
                        <span>경력 5년 이상</span>
                        <span>•</span>
                        <span>서울</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      지원하기
                    </button>
                  </div>
                  <p className="text-gray-600">React, TypeScript 기반의 펫테크 서비스를 개발할 시니어 프론트엔드 개발자를 찾습니다.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">AI/ML Engineer</h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>AI팀</span>
                        <span>•</span>
                        <span>경력 3년 이상</span>
                        <span>•</span>
                        <span>서울</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      지원하기
                    </button>
                  </div>
                  <p className="text-gray-600">반려동물 행동 분석 및 건강 예측 AI 모델을 개발할 ML 엔지니어를 모집합니다.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Manager</h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>프로덕트팀</span>
                        <span>•</span>
                        <span>경력 4년 이상</span>
                        <span>•</span>
                        <span>서울</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      지원하기
                    </button>
                  </div>
                  <p className="text-gray-600">펫테크 플랫폼의 전략을 수립하고 실행할 프로덕트 매니저를 찾습니다.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">UX/UI Designer</h3>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>디자인팀</span>
                        <span>•</span>
                        <span>경력 3년 이상</span>
                        <span>•</span>
                        <span>서울</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      지원하기
                    </button>
                  </div>
                  <p className="text-gray-600">사용자 중심의 펫테크 서비스 UI/UX를 디자인할 디자이너를 모집합니다.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">함께 일하고 싶으신가요?</h2>
              <p className="text-xl mb-8">적합한 포지션이 없더라도 언제든 지원해주세요</p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                이력서 보내기
              </button>
              <p className="mt-4 text-sm">careers@mewnion.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
