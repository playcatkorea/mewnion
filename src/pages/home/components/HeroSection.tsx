
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';
import { useAuth } from '../../../context/AuthContext';
import { showFeedback } from '../../../utils/navigation';

export default function HeroSection() {
  const { isAuthenticated, user } = useAuth();

  const handleCatRoomAccess = () => {
    if (isAuthenticated) {
      navigateTo('/catroom');
    } else {
      showFeedback('로그인하면 나만의 캣룸을 바로 열 수 있어요!', 'info');
      navigateTo('/login');
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a]">
      {/* Pixel Art Universe Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Pixel%20art%20style%20cute%20cat%20universe%20with%20floating%20cat%20planets%2C%208-bit%20retro%20gaming%20aesthetic%2C%20colorful%20space%20cats%20floating%20among%20pixelated%20stars%20and%20planets%2C%20purple%20and%20golden%20cosmic%20background%2C%20low%20resolution%20pixel%20graphics%2C%20nostalgic%20arcade%20game%20style%2C%20kawaii%20space%20cats%2C%20minimalist%20pixel%20design%2C%20vibrant%20colors%2C%20retro%20gaming%20atmosphere&width=1920&height=1080&seq=pixel-universe&orientation=landscape')`
        }}
      />
      
      {/* Pixel Stars Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-yellow-300 opacity-80" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center pt-14 lg:pt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Cat Room Status */}
            <div className="mb-8 lg:mb-12">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-purple-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-lg flex items-center justify-center">
                      <i className="ri-home-heart-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {isAuthenticated ? `${user?.name ?? '나의'} 캣룸` : '캣룸을 열어보세요'}
                      </h3>
                      <p className="text-purple-300 text-sm">
                        {isAuthenticated ? '우주 고양이별 - 지구 서울시' : '로그인하면 나만의 고양이별이 생성돼요'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold text-lg">
                      {isAuthenticated ? '레벨 15' : '잠금됨'}
                    </div>
                    <div className="text-purple-300 text-sm">
                      {isAuthenticated ? '행복도 98%' : '로그인이 필요해요'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {[
                    { icon: 'ri-heart-fill', label: '건강', value: isAuthenticated ? '최고' : '로그인 필요' },
                    { icon: 'ri-gamepad-fill', label: '놀이', value: isAuthenticated ? '활발' : '로그인 필요' },
                    { icon: 'ri-restaurant-fill', label: '식사', value: isAuthenticated ? '만족' : '로그인 필요' },
                    { icon: 'ri-user-heart-fill', label: '애정', value: isAuthenticated ? '최고' : '로그인 필요' },
                  ].map((item) => (
                    <div key={item.label} className="bg-purple-900/50 rounded-lg p-3 text-center">
                      <i
                        className={`${item.icon} text-xl mb-1 ${
                          isAuthenticated ? 'text-red-400' : 'text-purple-300'
                        }`}
                      ></i>
                      <div className="text-white text-sm font-medium">{item.label}</div>
                      <div
                        className={`text-xs ${
                          isAuthenticated ? 'text-green-400' : 'text-purple-300'
                        }`}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                      <>
                        <span className="text-purple-300">
                          오늘 방문자: <span className="text-yellow-400 font-bold">23명</span>
                        </span>
                        <span className="text-purple-300">
                          새 메시지: <span className="text-pink-400 font-bold">5개</span>
                        </span>
                      </>
                    ) : (
                      <span className="text-purple-200">
                        로그인하면 실시간 방문자와 메시지를 확인할 수 있어요.
                      </span>
                    )}
                  </div>
                  <Button
                    data-cta="manual"
                    size="sm"
                    className="text-xs"
                    onClick={handleCatRoomAccess}
                  >
                    {isAuthenticated ? '캣룸 열기' : '로그인하고 열기'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-6 lg:space-y-8">
              {/* Logo Animation */}
              <div className="flex justify-center mb-6 lg:mb-8">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl flex items-center justify-center shadow-2xl animate-bounce border-4 border-white/20">
                    <i className="ri-heart-3-fill text-white text-2xl lg:text-3xl"></i>
                  </div>
                  <div className="absolute -inset-2 lg:-inset-3 bg-gradient-to-br from-[#f6b73c]/20 to-[#7e5bef]/20 rounded-2xl animate-ping"></div>
                </div>
              </div>

              {/* Main Title */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight pixel-font">
                  <span className="bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] bg-clip-text text-transparent">
                    Furniverse
                  </span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-purple-200">
                  퍼니버스 - 우주 고양이들의 세계
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed">
                  픽셀 아트로 만나는 우주 고양이들의 모험<br className="hidden sm:block" />
                  <span className="text-[#f6b73c] font-semibold">WEB3 · NFT · 게임 · SNS</span>가 하나된<br className="hidden sm:block" />
                  차세대 메타버스 플랫폼
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 lg:pt-8">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-w-48 bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] hover:from-[#e5a635] hover:to-[#6d4fd6]"
                  onClick={() => navigateTo('/furniverse')}
                >
                  <i className="ri-rocket-line mr-2"></i>
                  퍼니버스 입장
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-48 border-purple-400 text-purple-200 hover:bg-purple-800/50"
                  onClick={() => navigateTo('/games')}
                >
                  <i className="ri-gamepad-line mr-2"></i>
                  게임 시작하기
                </Button>
              </div>
            </div>

            {/* Service Grid */}
            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { 
                    icon: 'ri-global-line', 
                    title: '퍼니버스', 
                    desc: '우주 고양이별 탐험',
                    color: 'from-purple-500 to-pink-500',
                    href: '/furniverse'
                  },
                  { 
                    icon: 'ri-heart-line', 
                    title: '길구넷', 
                    desc: '길고양이 구조 네트워크',
                    color: 'from-red-500 to-orange-500',
                    href: '/rescue'
                  },
                  { 
                    icon: 'ri-shopping-bag-line', 
                    title: '마켓', 
                    desc: '고양이 용품 & 굿즈',
                    color: 'from-green-500 to-teal-500',
                    href: '/market'
                  },
                  { 
                    icon: 'ri-robot-line', 
                    title: '뮤틀러AI', 
                    desc: 'AI 홈캠 & 분석',
                    color: 'from-blue-500 to-cyan-500',
                    href: '/mewtler'
                  },
                  { 
                    icon: 'ri-palette-line', 
                    title: '브랜드', 
                    desc: '착한 브랜드 플랫폼',
                    color: 'from-yellow-500 to-orange-500',
                    href: '/brand'
                  },
                  { 
                    icon: 'ri-book-line', 
                    title: '아카데미', 
                    desc: '고양이 & 창작 강의',
                    color: 'from-indigo-500 to-purple-500',
                    href: '/academy'
                  },
                  { 
                    icon: 'ri-community-line', 
                    title: '집사SNS', 
                    desc: '집사들의 소통공간',
                    color: 'from-pink-500 to-rose-500',
                    href: '/community'
                  },
                  { 
                    icon: 'ri-coins-line', 
                    title: 'WEB3', 
                    desc: 'DAO & 토크노믹스',
                    color: 'from-amber-500 to-yellow-500',
                    href: '/web3'
                  }
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => navigateTo(service.href)}
                  >
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <i className={`${service.icon} text-xl lg:text-2xl text-white`}></i>
                      </div>
                      <h3 className="font-bold text-white mb-2 text-sm lg:text-base">{service.title}</h3>
                      <p className="text-xs lg:text-sm text-purple-200 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-12 lg:mt-16">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                  <i className="ri-notation-line mr-2 text-yellow-400"></i>
                  실시간 퍼니버스 소식
                </h3>
                <div className="space-y-3">
                  {[
                    { user: '냥집사123', action: '새로운 우주 고양이별을 발견했습니다!', time: '2분 전', icon: 'ri-planet-line' },
                    { user: '길냥이사랑', action: '길고양이 구조 미션을 완료했습니다', time: '5분 전', icon: 'ri-heart-fill' },
                    { user: '픽셀캣', action: 'NFT 아트 작품을 새로 등록했습니다', time: '8분 전', icon: 'ri-palette-line' },
                    { user: '우주탐험가', action: '레벨 20을 달성했습니다!', time: '12분 전', icon: 'ri-trophy-line' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-purple-900/30 rounded-lg">
                      <i className={`${activity.icon} text-yellow-400 text-lg`}></i>
                      <div className="flex-1">
                        <span className="text-purple-200 font-medium">{activity.user}</span>
                        <span className="text-purple-300 ml-2">{activity.action}</span>
                      </div>
                      <span className="text-purple-400 text-xs">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-[#f6b73c] rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-[#f6b73c] rounded-full mt-1 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}






