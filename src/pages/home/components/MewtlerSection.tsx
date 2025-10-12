
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function MewtlerSection() {
  const features = [
    {
      icon: 'ri-eye-line',
      title: 'AI 행동 분석',
      description: '24시간 고양이의 행동 패턴을 분석하여 건강 상태를 모니터링합니다',
      stats: '99.2% 정확도'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: '건강 알림',
      description: '이상 행동 감지 시 즉시 집사에게 알림을 전송합니다',
      stats: '평균 3분 내 알림'
    },
    {
      icon: 'ri-coins-line',
      title: 'PoD 보상',
      description: '데이터 제공에 대한 보상으로 MEW 토큰을 획득할 수 있습니다',
      stats: '일평균 50 MEW'
    },
    {
      icon: 'ri-smartphone-line',
      title: '실시간 스트리밍',
      description: '언제 어디서나 스마트폰으로 우리 고양이를 확인할 수 있습니다',
      stats: '4K 화질 지원'
    }
  ];

  const aiInsights = [
    {
      time: '14:23',
      behavior: '식사 패턴 변화',
      description: '평소보다 30% 적게 먹고 있어요',
      severity: 'warning',
      recommendation: '수의사 상담을 권장합니다'
    },
    {
      time: '12:15',
      behavior: '활동량 증가',
      description: '오늘 평소보다 활발하게 움직이고 있어요',
      severity: 'good',
      recommendation: '건강한 상태입니다'
    },
    {
      time: '09:30',
      behavior: '수면 패턴',
      description: '깊은 잠을 충분히 자고 있어요',
      severity: 'good',
      recommendation: '스트레스 수준이 낮습니다'
    }
  ];

  const deviceSpecs = [
    { label: 'AI 칩셋', value: 'NVIDIA Jetson Orin Nano' },
    { label: '카메라', value: '4K 60fps, 야간 적외선' },
    { label: '저장공간', value: '256GB SSD + 클라우드' },
    { label: '연결성', value: 'Wi-Fi 6, Bluetooth 5.2' },
    { label: '전력', value: '저전력 설계 (15W)' },
    { label: '크기', value: '12 x 8 x 6 cm' }
  ];

  return (
    <section id="mewtler" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <i className="ri-robot-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mewtler AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-500 font-semibold">집사들의 집사</span><br />
            AI가 24시간 우리 고양이를 지켜보고 건강을 관리합니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-sm font-semibold text-blue-500">{feature.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Dashboard Demo */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                실시간 AI 분석 대시보드
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                뮤틀러 AI가 분석한 고양이의 행동 패턴과 건강 상태를 
                실시간으로 확인할 수 있습니다. 이상 징후 발견 시 즉시 알림을 받아보세요.
              </p>
              
              {/* AI Insights */}
              <div className="space-y-4 mb-8">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      insight.severity === 'warning' ? 'bg-yellow-400' : 'bg-green-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-800">{insight.behavior}</span>
                        <span className="text-sm text-gray-500">{insight.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{insight.description}</p>
                      <p className="text-xs text-blue-600">{insight.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" onClick={() => navigateTo('/mewtler')}>
                <i className="ri-smartphone-line mr-2"></i>
                앱에서 자세히 보기
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20AI%20dashboard%20interface%20showing%20cat%20behavior%20analysis%2C%20real-time%20monitoring%20charts%20and%20graphs%2C%20sleek%20technology%20design%20with%20blue%20and%20white%20color%20scheme%2C%20professional%20pet%20tech%20UI%2C%20data%20visualization%20for%20pet%20health%20monitoring&width=600&height=500&seq=mewtler-dashboard&orientation=squarish"
                alt="Mewtler AI Dashboard"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
                <i className="ri-eye-line text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Device Specifications */}
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              뮤틀러 디바이스 사양
            </h3>
            <p className="text-gray-600 text-lg">
              최첨단 AI 기술이 집약된 스마트 홈캠
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {deviceSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <h4 className="font-bold text-gray-800 mb-2">{spec.label}</h4>
                <p className="text-blue-600 font-medium">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img
              src="https://readdy.ai/api/search-image?query=Sleek%20modern%20AI%20pet%20camera%20device%2C%20compact%20white%20design%20with%20blue%20LED%20indicators%2C%20high-tech%20appearance%2C%20professional%20product%20photography%20on%20clean%20background%2C%20futuristic%20pet%20monitoring%20technology&width=400&height=300&seq=mewtler-device&orientation=squarish"
              alt="Mewtler Device"
              className="w-80 h-60 object-cover rounded-2xl mx-auto mb-8 shadow-xl"
            />
          </div>
        </div>

        {/* Playcat Integration */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Smart%20cat%20furniture%20with%20integrated%20AI%20camera%20system%2C%20modern%20wooden%20cat%20tree%20with%20built-in%20technology%2C%20IoT%20pet%20furniture%20design%2C%20connected%20smart%20home%20for%20cats%2C%20innovative%20pet%20tech%20integration&width=600&height=500&seq=playcat-integration&orientation=squarish"
                alt="Playcat Integration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                PLAYCAT 가구 연동
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                뮤틀러 AI와 PLAYCAT 가구가 연동되어 더욱 정확한 행동 분석이 가능합니다. 
                고양이가 어떤 공간을 선호하는지, 언제 가장 활발한지 모든 데이터를 수집합니다.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="text-gray-700">가구별 사용 패턴 분석</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="text-gray-700">선호 공간 및 시간대 파악</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="text-gray-700">스트레스 수준 모니터링</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                  <span className="text-gray-700">맞춤형 환경 자동 조절</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigateTo('/mewtler')}>
                  <i className="ri-shopping-cart-line mr-2"></i>
                  뮤틀러 주문하기
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigateTo('/iot')}>
                  <i className="ri-link mr-2"></i>
                  연동 시작하기
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* PoD Rewards System */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              PoD (Proof of Data) 보상 시스템
            </h3>
            <p className="text-blue-100 text-lg">
              고양이 데이터를 제공하고 MEW 토큰을 획득하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: 'ri-database-line',
                title: '데이터 수집',
                description: '뮤틀러가 고양이의 행동 데이터를 안전하게 수집합니다'
              },
              {
                icon: 'ri-shield-check-line',
                title: '프라이버시 보호',
                description: '개인정보는 암호화되어 익명으로 처리됩니다'
              },
              {
                icon: 'ri-coins-line',
                title: 'MEW 토큰 획득',
                description: '데이터 기여도에 따라 매일 토큰을 받을 수 있습니다'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => navigateTo('/ai-analysis')}
            >
              <i className="ri-play-circle-line mr-2"></i>
              PoD 시스템 시작하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
