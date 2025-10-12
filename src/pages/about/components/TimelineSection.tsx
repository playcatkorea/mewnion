
import { goToRoute } from '../../../utils/navigation';

export default function TimelineSection() {
  const timeline = [
    {
      year: '2019',
      title: '묘연의 시작',
      description: '길고양이 묘연이를 구조하며 시작된 생명공감의 여정',
      achievements: ['묘연이 구조 및 치료', '첫 번째 Playcat 프로토타입 제작', '동물 행동학 연구 시작'],
      image: 'https://readdy.ai/api/search-image?query=The%20beginning%20of%20a%20journey%2C%20showing%20a%20small%20rescued%20kitten%20in%20caring%20hands%20with%20the%20first%20prototype%20of%20cat%20furniture%20in%20a%20workshop%20setting.%20Warm%20lighting%2C%20tools%20and%20wood%20materials%20around%2C%20representing%20the%20humble%20beginnings%20of%20innovation%20and%20care.%20The%20atmosphere%20should%20be%20hopeful%20and%20determined.&width=300&height=200&seq=timeline-2019&orientation=landscape'
    },
    {
      year: '2020',
      title: '기술과 사랑의 만남',
      description: 'AI 기술을 활용한 반려동물 케어 시스템 개발 착수',
      achievements: ['Mewtler AI 초기 개발', 'Play Factory 설립', '첫 번째 특허 출원'],
      image: 'https://readdy.ai/api/search-image?query=Technology%20meeting%20love%2C%20showing%20AI%20development%20screens%2C%20cat%20behavior%20analysis%20data%2C%20and%20innovative%20pet%20furniture%20designs.%20Include%20elements%20of%20coding%2C%20artificial%20intelligence%2C%20and%20caring%20for%20animals.%20The%20scene%20should%20represent%20the%20fusion%20of%20technology%20and%20compassion%20with%20modern%2C%20clean%20aesthetics.&width=300&height=200&seq=timeline-2020&orientation=landscape'
    },
    {
      year: '2021',
      title: '커뮤니티의 성장',
      description: '전국 동물보호소와 파트너십 체결, 길구넷 서비스 런칭',
      achievements: ['길구넷 베타 서비스 출시', '50개 보호소 파트너십', '첫 1,000마리 구조 달성'],
      image: 'https://readdy.ai/api/search-image?query=Growing%20community%20of%20animal%20lovers%2C%20showing%20people%20from%20different%20backgrounds%20coming%20together%20to%20help%20animals.%20Include%20animal%20shelters%2C%20volunteers%2C%20and%20rescued%20pets%20in%20a%20heartwarming%20community%20setting.%20The%20image%20should%20convey%20unity%2C%20growth%2C%20and%20collective%20care%20for%20animals.&width=300&height=200&seq=timeline-2021&orientation=landscape'
    },
    {
      year: '2022',
      title: '글로벌 확장',
      description: '해외 진출 및 블록체인 기술 도입으로 투명한 후원 시스템 구축',
      achievements: ['MEW 토큰 출시', '5개국 서비스 확장', '블록체인 후원 시스템 도입'],
      image: 'https://readdy.ai/api/search-image?query=Global%20expansion%20with%20blockchain%20technology%2C%20showing%20a%20world%20map%20with%20connected%20nodes%2C%20cryptocurrency%20symbols%2C%20and%20international%20collaboration%20for%20animal%20welfare.%20Include%20elements%20of%20transparency%2C%20trust%2C%20and%20global%20connectivity%20with%20a%20modern%2C%20technological%20aesthetic.&width=300&height=200&seq=timeline-2022&orientation=landscape'
    },
    {
      year: '2023',
      title: '메타버스 퍼니버스',
      description: '가상 세계에서도 반려동물과 함께하는 새로운 경험 제공',
      achievements: ['퍼니버스 알파 버전 출시', '10만 명 사용자 돌파', 'VR/AR 기술 통합'],
      image: 'https://readdy.ai/api/search-image?query=Virtual%20metaverse%20world%20designed%20for%20pets%20and%20their%20owners%2C%20showing%20a%20beautiful%20digital%20landscape%20with%20virtual%20cats%2C%20futuristic%20pet%20homes%2C%20and%20people%20interacting%20in%20a%203D%20virtual%20environment.%20Include%20elements%20of%20VR%2FAR%20technology%20and%20digital%20pet%20care%20with%20vibrant%2C%20futuristic%20colors.&width=300&height=200&seq=timeline-2023&orientation=landscape'
    },
    {
      year: '2024',
      title: 'AI 혁신의 해',
      description: '차세대 Mewtler AI와 생애보호 시스템으로 완전한 생태계 구축',
      achievements: ['Mewtler AI 2.0 출시', 'CatLife Continuum 시스템 도입', '100만 마리 등록 달성'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20innovation%20for%20pet%20care%2C%20showing%20sophisticated%20artificial%20intelligence%20systems%20monitoring%20and%20caring%20for%20millions%20of%20pets%20worldwide.%20Include%20holographic%20displays%2C%20advanced%20sensors%2C%20health%20monitoring%20systems%2C%20and%20a%20network%20of%20connected%20pet%20care%20devices%20with%20a%20sleek%2C%20futuristic%20design.&width=300&height=200&seq=timeline-2024&orientation=landscape'
    },
    {
      year: '2025',
      title: '미래를 향한 도약',
      description: '완전한 생명공감 생태계 완성과 글로벌 표준 확립',
      achievements: ['DAO 거버넌스 완성', '20개국 진출 목표', '지속가능한 생태계 구축'],
      image: 'https://readdy.ai/api/search-image?query=The%20future%20of%20animal%20care%20and%20global%20compassion%2C%20showing%20a%20utopian%20world%20where%20technology%20and%20nature%20coexist%20perfectly.%20Include%20sustainable%20cities%2C%20happy%20animals%2C%20advanced%20but%20harmonious%20technology%2C%20and%20people%20from%20all%20cultures%20working%20together%20for%20animal%20welfare.%20The%20scene%20should%20be%20inspiring%20and%20represent%20the%20ultimate%20vision%20of%20care.&width=300&height=200&seq=timeline-2025&orientation=landscape'
    }
  ];

  return (
    <section id="about-timeline" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#f6b73c]/10 rounded-full text-[#f6b73c] text-sm font-medium mb-6">
            <i className="ri-time-line mr-2"></i>
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            함께 걸어온
            <br />
            <span className="text-[#f6b73c]">성장의 발자취</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            작은 시작에서 글로벌 플랫폼까지, 
            묘연이 걸어온 혁신과 사랑의 여정을 소개합니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#f6b73c] to-[#7e5bef] rounded-full hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`bg-white rounded-3xl p-8 shadow-xl ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center px-3 py-1 bg-[#f6b73c] text-white rounded-full text-sm font-bold mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <i className="ri-check-line text-[#f6b73c] mr-2 flex-shrink-0"></i>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full flex items-center justify-center shadow-xl hidden lg:flex">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#f6b73c] rounded-full"></div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              그리고 계속되는 여정...
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              우리의 이야기는 여기서 끝나지 않습니다. 
              더 많은 생명을 구하고, 더 나은 세상을 만들기 위한 여정은 계속됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-cta="manual"
                className="px-8 py-3 bg-[#f6b73c] text-white rounded-full font-medium hover:bg-[#e5a632] transition-colors"
                onClick={goToRoute('/community')}
              >
                <i className="ri-rocket-line mr-2"></i>
                함께 만들어가기
              </button>
              <button
                data-cta="manual"
                className="px-8 py-3 border-2 border-[#f6b73c] text-[#f6b73c] rounded-full font-medium hover:bg-[#f6b73c] hover:text-white transition-colors"
                onClick={goToRoute('/web3')}
              >
                <i className="ri-roadmap-line mr-2"></i>
                로드맵 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
