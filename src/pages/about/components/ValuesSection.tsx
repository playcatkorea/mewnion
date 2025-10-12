
import { goToRoute } from '../../../utils/navigation';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-heart-3-fill',
      title: '생명공감 (Life Empathy)',
      description: '모든 생명의 소중함을 인정하고 공감하는 마음',
      details: [
        '생명에 대한 무조건적 사랑',
        '종을 넘나드는 깊은 이해',
        '약자를 보호하는 책임감'
      ],
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: 'ri-lightbulb-flash-fill',
      title: '혁신적 사고 (Innovation)',
      description: '기술과 창의성으로 불가능을 가능하게 만드는 힘',
      details: [
        'AI와 블록체인 기술 활용',
        '사용자 중심의 디자인 사고',
        '지속적인 학습과 개선'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: 'ri-team-fill',
      title: '협력과 연대 (Collaboration)',
      description: '함께할 때 더 큰 변화를 만들 수 있다는 믿음',
      details: [
        '글로벌 커뮤니티 구축',
        '다양한 이해관계자와의 파트너십',
        '집단지성을 통한 문제 해결'
      ],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: 'ri-leaf-fill',
      title: '지속가능성 (Sustainability)',
      description: '현재와 미래 세대 모두를 위한 책임감 있는 성장',
      details: [
        '환경 친화적 솔루션 개발',
        '경제적-사회적 가치의 균형',
        '순환경제 생태계 구축'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 'ri-shield-check-fill',
      title: '투명성 (Transparency)',
      description: '모든 과정을 투명하게 공개하여 신뢰를 구축',
      details: [
        '블록체인 기반 투명한 후원',
        '오픈소스 개발 문화',
        '정기적인 성과 공유'
      ],
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: 'ri-infinity-fill',
      title: '지속적 학습 (Continuous Learning)',
      description: '끊임없이 배우고 성장하며 더 나은 내일을 준비',
      details: [
        '실패를 통한 학습과 개선',
        '다양한 분야의 전문성 습득',
        '커뮤니티와 함께하는 성장'
      ],
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  return (
    <section id="about-values" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#7e5bef]/10 rounded-full text-[#7e5bef] text-sm font-medium mb-6">
            <i className="ri-compass-3-line mr-2"></i>
            Our Values
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            묘연을 움직이는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6b73c] to-[#7e5bef]">
              핵심 가치
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            우리의 모든 결정과 행동의 기준이 되는 6가지 핵심 가치를 소개합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {value.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <i className="ri-check-line text-[#f6b73c] mr-2 mt-0.5 flex-shrink-0"></i>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            가치를 실천하는 방법
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            우리의 가치는 단순한 구호가 아닙니다. 
            매일의 작은 행동과 결정을 통해 실천되는 살아있는 원칙입니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-heart-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">일상 속 실천</h4>
              <p className="text-sm opacity-80">매일의 작은 선택에서 가치를 실현</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">커뮤니티와 함께</h4>
              <p className="text-sm opacity-80">함께 성장하고 배우는 문화 조성</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">글로벌 임팩트</h4>
              <p className="text-sm opacity-80">세계적 변화를 만드는 행동</p>
            </div>
          </div>

          <button
            data-cta="manual"
            className="px-8 py-3 bg-white text-[#f6b73c] rounded-full font-bold hover:bg-gray-100 transition-colors"
            onClick={goToRoute('/community')}
          >
            <i className="ri-heart-add-line mr-2"></i>
            가치 실천에 동참하기
          </button>
        </div>
      </div>
    </section>
  );
}
