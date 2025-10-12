
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Planet {
  id: number;
  name: string;
  description: string;
  population: number;
  specialFeatures: string[];
  image: string;
  climate: string;
  resources: string[];
}

interface NFTLand {
  id: number;
  name: string;
  location: string;
  size: string;
  price: number;
  owner?: string;
  features: string[];
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export default function FurniversePage() {
  const [activeTab, setActiveTab] = useState('universe');
  
  const planets: Planet[] = [
    {
      id: 1,
      name: '우주 고양이별',
      description: '퍼니버스의 중심이 되는 행성으로, 다양한 고양이 종족들이 평화롭게 공존하는 곳입니다.',
      population: 2847592,
      specialFeatures: ['무중력 놀이터', '우주 참치 농장', '별빛 낮잠 구역'],
      image: 'https://readdy.ai/api/search-image?query=magical%20space%20cat%20planet%20with%20floating%20islands%20colorful%20cosmic%20atmosphere%20cute%20pixel%20art%20style&width=400&height=300&seq=planet1&orientation=landscape',
      climate: '온화한 우주 기후',
      resources: ['스타더스트', '코스믹 캣닢', '우주 털실']
    },
    {
      id: 2,
      name: '지구별',
      description: '집사들과 고양이들이 함께 살아가는 친숙한 행성입니다. 현실과 가상이 연결되는 특별한 곳이에요.',
      population: 7892456,
      specialFeatures: ['집사 아카데미', '고양이 카페 거리', '펫샵 마켓플레이스'],
      image: 'https://readdy.ai/api/search-image?query=earth%20planet%20with%20cat%20themed%20cities%20and%20human%20settlements%20peaceful%20coexistence%20pixel%20art%20style&width=400&height=300&seq=planet2&orientation=landscape',
      climate: '다양한 기후대',
      resources: ['사료', '장난감', '집사의 사랑']
    },
    {
      id: 3,
      name: '대한민국 랜드',
      description: '한국의 전통과 현대가 어우러진 특별한 지역으로, K-고양이 문화의 중심지입니다.',
      population: 51780000,
      specialFeatures: ['한옥 캣카페', '김치 캣푸드 공장', 'K-펫 엔터테인먼트'],
      image: 'https://readdy.ai/api/search-image?query=Korean%20traditional%20architecture%20mixed%20with%20modern%20cat%20facilities%20hanbok%20wearing%20cats%20pixel%20art%20style&width=400&height=300&seq=planet3&orientation=landscape',
      climate: '사계절 뚜렷한 기후',
      resources: ['한국 전통 간식', 'K-펫 굿즈', '한류 콘텐츠']
    }
  ];

  const nftLands: NFTLand[] = [
    {
      id: 1,
      name: '스타더스트 펜트하우스',
      location: '우주 고양이별 중심가',
      size: '500㎡',
      price: 15.5,
      features: ['무중력 놀이방', '우주 전망대', '프리미엄 캣타워'],
      image: 'https://readdy.ai/api/search-image?query=luxury%20space%20penthouse%20for%20cats%20with%20cosmic%20view%20and%20premium%20furniture%20pixel%20art%20interior&width=300&height=200&seq=nft1&orientation=landscape',
      rarity: 'legendary'
    },
    {
      id: 2,
      name: '코스믹 가든 빌라',
      location: '우주 고양이별 교외',
      size: '300㎡',
      price: 8.2,
      features: ['우주 정원', '별빛 수영장', '캣닢 농장'],
      image: 'https://readdy.ai/api/search-image?query=cosmic%20garden%20villa%20with%20space%20plants%20and%20cat%20friendly%20outdoor%20areas%20pixel%20art%20style&width=300&height=200&seq=nft2&orientation=landscape',
      rarity: 'epic'
    },
    {
      id: 3,
      name: '한강뷰 캣룸',
      location: '대한민국 랜드 서울구역',
      size: '150㎡',
      price: 5.8,
      features: ['한강 전망', '온돌 바닥', '전통 캣타워'],
      image: 'https://readdy.ai/api/search-image?query=Korean%20style%20cat%20room%20with%20Han%20river%20view%20traditional%20ondol%20floor%20and%20modern%20amenities%20pixel%20art&width=300&height=200&seq=nft3&orientation=landscape',
      rarity: 'rare'
    },
    {
      id: 4,
      name: '별빛 스튜디오',
      location: '우주 고양이별 예술구',
      size: '200㎡',
      price: 6.9,
      features: ['창작 공간', '홀로그램 스튜디오', '아트 갤러리'],
      image: 'https://readdy.ai/api/search-image?query=artistic%20studio%20space%20for%20cats%20with%20hologram%20technology%20and%20creative%20workspace%20pixel%20art%20style&width=300&height=200&seq=nft4&orientation=landscape',
      rarity: 'epic'
    },
    {
      id: 5,
      name: '코지 캣 카페',
      location: '지구별 도심',
      size: '120㎡',
      price: 3.5,
      features: ['카페 운영권', '고양이 놀이터', '집사 휴게실'],
      image: 'https://readdy.ai/api/search-image?query=cozy%20cat%20cafe%20interior%20with%20comfortable%20seating%20areas%20and%20cat%20play%20zones%20pixel%20art%20style&width=300&height=200&seq=nft5&orientation=landscape',
      rarity: 'rare'
    },
    {
      id: 6,
      name: '우주 농장',
      location: '우주 고양이별 외곽',
      size: '1000㎡',
      price: 12.3,
      features: ['캣닢 재배지', '우주 참치 양식장', '자동 수확 시스템'],
      image: 'https://readdy.ai/api/search-image?query=space%20farm%20with%20catnip%20fields%20and%20cosmic%20tuna%20ponds%20automated%20farming%20systems%20pixel%20art&width=300&height=200&seq=nft6&orientation=landscape',
      rarity: 'legendary'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'epic': return 'bg-gradient-to-r from-purple-400 to-pink-500';
      case 'rare': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  const getRarityText = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return '전설';
      case 'epic': return '영웅';
      case 'rare': return '희귀';
      default: return '일반';
    }
  };

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=magical%20universe%20with%20multiple%20planets%20and%20space%20cats%20floating%20in%20cosmic%20environment%20colorful%20nebula%20background&width=1200&height=600&seq=furniverse-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>퍼니버스 세계관</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>

              무한한 우주 속에서 펼쳐지는 고양이들의 특별한 세계를 탐험해보세요. 
              각각의 행성마다 독특한 문화와 이야기가 기다리고 있습니다.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#f6b73c] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e5a632] transition-colors">
                세계 탐험하기
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                NFT 랜드 보기
              </button>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'universe', label: '세계관 소개', icon: 'ri-planet-line' },
                { id: 'planets', label: '행성 탐험', icon: 'ri-earth-line' },
                { id: 'nft', label: 'NFT 랜드', icon: 'ri-home-line' },
                { id: 'catroom', label: '내 캣룸', icon: 'ri-door-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#7e5bef] text-[#7e5bef]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Universe Overview */}
        {activeTab === 'universe' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">퍼니버스란?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  퍼니버스는 고양이와 집사들이 함께 만들어가는 메타버스 세계입니다. 
                  현실과 가상이 연결되어 새로운 경험과 가치를 창조하는 공간이에요.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-rocket-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">무한한 탐험</h3>
                  <p className="text-gray-600">
                    다양한 행성과 차원을 탐험하며 새로운 친구들을 만나보세요.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7e5bef] to-[#f6b73c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-palette-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">창작과 표현</h3>
                  <p className="text-gray-600">
                    나만의 캣룸을 꾸미고 창작물을 만들어 다른 집사들과 공유하세요.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-heart-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">사회적 가치</h3>
                  <p className="text-gray-600">
                    게임과 활동을 통해 실제 길고양이 구조에 기여할 수 있어요.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">퍼니버스의 특별함</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <i className="ri-check-line text-[#7e5bef] text-xl"></i>
                        <span className="text-gray-700">블록체인 기반의 투명한 경제 시스템</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-line text-[#7e5bef] text-xl"></i>
                        <span className="text-gray-700">AI 기반 개인화된 경험 제공</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-line text-[#7e5bef] text-xl"></i>
                        <span className="text-gray-700">현실 연동 소셜 임팩트 창출</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="ri-check-line text-[#7e5bef] text-xl"></i>
                        <span className="text-gray-700">크로스 플랫폼 호환성</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://readdy.ai/api/search-image?query=cute%20pixel%20art%20cats%20in%20space%20suits%20exploring%20colorful%20universe%20with%20stars%20and%20planets&width=400&height=300&seq=universe&orientation=landscape"
                      alt="퍼니버스 탐험"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Planets */}
        {activeTab === 'planets' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">행성 탐험</h2>
                <p className="text-lg text-gray-600">
                  각각의 행성마다 독특한 문화와 특징을 가지고 있어요
                </p>
              </div>

              <div className="space-y-12">
                {planets.map((planet, index) => (
                  <div key={planet.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <img 
                        src={planet.image} 
                        alt={planet.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{planet.name}</h3>
                      <p className="text-gray-600 mb-6">{planet.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-[#7e5bef] mb-1">
                            {planet.population.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">거주자 수</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {planet.climate}
                          </div>
                          <div className="text-sm text-gray-600">기후</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">특별한 장소들</h4>
                        <div className="flex flex-wrap gap-2">
                          {planet.specialFeatures.map((feature) => (
                            <span key={feature} className="bg-[#7e5bef]/10 text-[#7e5bef] px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">주요 자원</h4>
                        <div className="flex flex-wrap gap-2">
                          {planet.resources.map((resource) => (
                            <span key={resource} className="bg-[#f6b73c]/10 text-[#f6b73c] px-3 py-1 rounded-full text-sm">
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="bg-[#7e5bef] text-white px-6 py-3 rounded-lg hover:bg-[#6d4fd6] transition-colors">
                        {planet.name} 방문하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* NFT Lands */}
        {activeTab === 'nft' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">NFT 랜드 마켓플레이스</h2>
                <p className="text-lg text-gray-600">
                  퍼니버스에서 나만의 공간을 소유하고 꾸며보세요
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nftLands.map((land) => (
                  <div key={land.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={land.image} 
                        alt={land.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium text-white ${getRarityColor(land.rarity)}`}>
                        {getRarityText(land.rarity)}
                      </div>
                      {land.owner && (
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                          소유됨
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{land.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{land.location}</p>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">크기: {land.size}</span>
                        <span className="text-lg font-bold text-[#7e5bef]">{land.price} ETH</span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">특징</h4>
                        <div className="flex flex-wrap gap-1">
                          {land.features.map((feature) => (
                            <span key={feature} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button 
                        className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          land.owner 
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                            : 'bg-[#7e5bef] text-white hover:bg-[#6d4fd6]'
                        }`}
                        disabled={!!land.owner}
                      >
                        {land.owner ? '판매 완료' : '구매하기'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* My Cat Room */}
        {activeTab === 'catroom' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">내 캣룸</h2>
                <p className="text-lg text-gray-600">
                  나만의 특별한 공간을 꾸미고 관리해보세요
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cat Room Preview */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                      <img 
                        src="https://readdy.ai/api/search-image?query=cozy%20pixel%20art%20cat%20room%20interior%20with%20furniture%20toys%20and%20decorations%20space%20theme%20colorful%20design&width=800&height=400&seq=myroom&orientation=landscape"
                        alt="내 캣룸"
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        레벨 15 캣룸
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">코스믹 캣 하우스</h3>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#7e5bef] mb-1">85%</div>
                          <div className="text-sm text-gray-600">행복도</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#f6b73c] mb-1">92%</div>
                          <div className="text-sm text-gray-600">청결도</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-500 mb-1">78%</div>
                          <div className="text-sm text-gray-600">에너지</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 bg-[#7e5bef] text-white py-2 px-4 rounded-lg hover:bg-[#6d4fd6] transition-colors">
                          캣룸 꾸미기
                        </button>
                        <button className="flex-1 bg-[#f6b73c] text-white py-2 px-4 rounded-lg hover:bg-[#e5a632] transition-colors">
                          고양이 돌보기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Activities */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">최근 활동</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#7e5bef]/10 rounded-full flex items-center justify-center">
                          <i className="ri-gift-line text-[#7e5bef] text-sm"></i>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">새 장난감 구매</div>
                          <div className="text-xs text-gray-500">2시간 전</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#f6b73c]/10 rounded-full flex items-center justify-center">
                          <i className="ri-heart-line text-[#f6b73c] text-sm"></i>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">고양이 쓰다듬기</div>
                          <div className="text-xs text-gray-500">4시간 전</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <i className="ri-leaf-line text-green-500 text-sm"></i>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">캣닢 수확</div>
                          <div className="text-xs text-gray-500">6시간 전</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">방문자</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">김</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">김집사님</div>
                          <div className="text-xs text-gray-500">30분 전 방문</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">이</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">이집사님</div>
                          <div className="text-xs text-gray-500">1시간 전 방문</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">박</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">박집사님</div>
                          <div className="text-xs text-gray-500">2시간 전 방문</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">보유 아이템</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { name: '우주 캣타워', icon: 'ri-building-line' },
                        { name: '별빛 침대', icon: 'ri-hotel-bed-line' },
                        { name: '코스믹 볼', icon: 'ri-basketball-line' },
                        { name: '우주 간식', icon: 'ri-cake-line' },
                        { name: '홀로그램 TV', icon: 'ri-tv-line' },
                        { name: '무중력 해먹', icon: 'ri-tent-line' }
                      ].map((item) => (
                        <div key={item.name} className="bg-gray-50 p-3 rounded-lg text-center">
                          <i className={`${item.icon} text-[#7e5bef] text-lg mb-1`}></i>
                          <div className="text-xs text-gray-700">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
