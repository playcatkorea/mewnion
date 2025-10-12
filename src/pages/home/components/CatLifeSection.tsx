
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function CatLifeSection() {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Cat Passport NFT',
      description: '고양이의 모든 정보가 담긴 디지털 여권',
      details: ['건강 기록 저장', '예방접종 이력', '행동 패턴 데이터', '소유권 증명']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Soul Memory',
      description: '고양이와의 소중한 추억을 영원히 보존',
      details: ['사진/영상 저장', 'AI 행동 분석', '성장 기록', '추억 타임라인']
    },
    {
      icon: 'ri-user-heart-line',
      title: '후견인 시스템',
      description: '집사가 떠나도 고양이는 혼자가 되지 않게',
      details: ['후견인 자동 매칭', '응급상황 알림', '케어 가이드', '의료비 지원']
    },
    {
      icon: 'ri-building-line',
      title: '보호소 연계',
      description: '전국 보호소와 연결된 안전망',
      details: ['자동 이관 시스템', '건강상태 공유', '입양 우선권', '평생 추적 관리']
    }
  ];

  const timeline = [
    {
      step: '01',
      title: '고양이 등록',
      description: 'Cat Passport NFT 발급 및 기본 정보 등록',
      icon: 'ri-file-add-line'
    },
    {
      step: '02',
      title: '일상 기록',
      description: 'Mewtler AI를 통한 자동 행동 데이터 수집',
      icon: 'ri-camera-line'
    },
    {
      step: '03',
      title: '후견인 지정',
      description: '비상시를 대비한 후견인 및 보호소 지정',
      icon: 'ri-user-add-line'
    },
    {
      step: '04',
      title: '평생 보호',
      description: '생애 전반에 걸친 지속적인 케어 시스템',
      icon: 'ri-infinity-line'
    }
  ];

  return (
    <section id="catlife" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
            <i className="ri-infinity-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            CatLife Continuum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-emerald-600 font-semibold">집사가 떠나도 고양이는 혼자가 되지 않게</span><br />
            생애 전반에 걸친 완전한 보호 시스템
          </p>
        </div>

        {/* Main Visual */}
        <div className="relative mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  영원한 사랑의 약속
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  CatLife Continuum은 고양이의 탄생부터 무지개다리를 건널 때까지, 
                  그리고 그 이후까지도 지속되는 완전한 생애 보호 시스템입니다. 
                  블록체인 기술로 모든 기록이 영구 보존됩니다.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    '24시간 응급상황 모니터링',
                    '전국 보호소 네트워크 연결',
                    '의료비 자동 지원 시스템',
                    '추억 영구 보존 서비스'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" onClick={() => navigateTo('/memorial')}>
                  <i className="ri-heart-add-line mr-2"></i>
                  고양이 생애 등록하기
                </Button>
              </div>
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Heartwarming%20scene%20of%20a%20cat%20being%20cared%20for%20throughout%20its%20lifetime%2C%20showing%20different%20life%20stages%20from%20kitten%20to%20senior%20cat%2C%20surrounded%20by%20loving%20hands%20and%20protective%20elements%2C%20emotional%20and%20touching%20atmosphere%2C%20warm%20golden%20lighting%2C%20life%20journey%20concept%20art&width=600&height=500&seq=catlife-main&orientation=squarish"
                  alt="CatLife Continuum"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <i className="ri-heart-3-fill text-white text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Process */}
        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              생애 보호 프로세스
            </h3>
            <p className="text-gray-600 text-lg">
              고양이의 평생을 책임지는 4단계 시스템
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="text-center relative">
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-emerald-300 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-emerald-200">
                    <i className={`${item.icon} text-2xl text-emerald-600`}></i>
                  </div>
                  <div className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Response System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Emergency%20response%20system%20for%20pets%2C%20modern%20control%20center%20with%20monitoring%20screens%2C%20professional%20veterinary%20emergency%20team%2C%20high-tech%20medical%20equipment%2C%2024%2F7%20monitoring%20concept%2C%20clean%20and%20professional%20medical%20environment&width=600&height=500&seq=emergency-system&orientation=squarish"
              alt="Emergency Response System"
              className="w-full rounded-2xl shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-medium animate-pulse">
              24시간 모니터링
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              응급상황 자동 대응
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Mewtler AI가 이상 징후를 감지하면 즉시 등록된 후견인과 인근 동물병원에 
              자동으로 알림이 전송됩니다. 집사가 부재중이어도 고양이의 안전을 보장합니다.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: 'ri-alarm-warning-line',
                  title: '이상 징후 감지',
                  description: 'AI가 24시간 모니터링하여 응급상황을 즉시 파악'
                },
                {
                  icon: 'ri-notification-line',
                  title: '자동 알림 발송',
                  description: '후견인, 동물병원, 보호소에 동시 알림 전송'
                },
                {
                  icon: 'ri-truck-line',
                  title: '신속 출동',
                  description: '전문 구조팀이 30분 내 현장 도착 보장'
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${step.icon} text-emerald-600 text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
