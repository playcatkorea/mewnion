
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Game {
  id: number;
  title: string;
  description: string;
  category: string;
  players: number;
  rating: number;
  image: string;
  status: 'live' | 'beta' | 'coming-soon';
  rewards: string[];
}

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '구조 게임', '채굴', '미니게임', 'P2E', 'NFT 게임'];
  
  const games: Game[] = [
    {
      id: 1,
      title: '길고양이 구조 대작전',
      description: '위험에 처한 길고양이들을 구조하는 액션 어드벤처 게임입니다. 실제 구조 활동과 연동되어 게임 플레이가 현실의 도움이 됩니다.',
      category: '구조 게임',
      players: 15420,
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=pixel%20art%20rescue%20game%20with%20cute%20cats%20in%20danger%20being%20saved%20by%20heroes%20colorful%20adventure%20game%20style&width=400&height=250&seq=game1&orientation=landscape',
      status: 'live',
      rewards: ['구조 배지 NFT', '실제 후원금 기부', '경험치 포인트']
    },
    {
      id: 2,
      title: '우주 캣닢 채굴',
      description: '퍼니버스 우주에서 희귀한 캣닢을 채굴하는 전략 게임입니다. 채굴한 자원으로 캣룸을 업그레이드하고 MEOW 토큰을 획득하세요.',
      category: '채굴',
      players: 8920,
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=space%20mining%20game%20with%20cats%20collecting%20cosmic%20catnip%20in%20colorful%20universe%20pixel%20art%20style&width=400&height=250&seq=game2&orientation=landscape',
      status: 'live',
      rewards: ['MEOW 토큰', '캣닢 NFT', '채굴 장비 업그레이드']
    },
    {
      id: 3,
      title: '고양이 카페 타이쿤',
      description: '나만의 고양이 카페를 운영하는 경영 시뮬레이션 게임입니다. 다양한 고양이들을 돌보며 최고의 카페를 만들어보세요.',
      category: 'P2E',
      players: 12350,
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=cute%20cat%20cafe%20management%20game%20with%20multiple%20cats%20and%20customers%20cozy%20interior%20pixel%20art%20style&width=400&height=250&seq=game3&orientation=landscape',
      status: 'live',
      rewards: ['카페 수익 토큰', '고양이 컬렉션 NFT', '인테리어 아이템']
    },
    {
      id: 4,
      title: '캣 러너 익스트림',
      description: '귀여운 고양이가 되어 무한 달리기를 즐기는 캐주얼 게임입니다. 장애물을 피하고 아이템을 수집하며 최고 기록에 도전하세요.',
      category: '미니게임',
      players: 25680,
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=endless%20runner%20game%20with%20cute%20cat%20character%20jumping%20over%20obstacles%20colorful%20pixel%20art%20platformer&width=400&height=250&seq=game4&orientation=landscape',
      status: 'live',
      rewards: ['일일 보상', '캐릭터 스킨', '파워업 아이템']
    },
    {
      id: 5,
      title: '퍼니버스 배틀 로얄',
      description: '100명의 플레이어가 참여하는 대규모 배틀 로얄 게임입니다. 우주 고양이별에서 최후의 1인이 되어보세요.',
      category: 'P2E',
      players: 18750,
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=battle%20royale%20game%20with%20space%20cats%20fighting%20in%20cosmic%20arena%20competitive%20multiplayer%20pixel%20art&width=400&height=250&seq=game5&orientation=landscape',
      status: 'beta',
      rewards: ['승리 토큰', '랭킹 NFT', '전투 장비']
    },
    {
      id: 6,
      title: '고양이 퍼즐 어드벤처',
      description: '다양한 퍼즐을 풀며 고양이들을 구출하는 퍼즐 게임입니다. 단계별로 난이도가 증가하며 창의적 사고력을 기를 수 있습니다.',
      category: '미니게임',
      players: 9870,
      rating: 4.4,
      image: 'https://readdy.ai/api/search-image?query=puzzle%20adventure%20game%20with%20cute%20cats%20solving%20colorful%20brain%20teasers%20match-3%20style%20gameplay&width=400&height=250&seq=game6&orientation=landscape',
      status: 'live',
      rewards: ['퍼즐 마스터 배지', '힌트 아이템', '보너스 레벨']
    },
    {
      id: 7,
      title: 'NFT 고양이 육성',
      description: '희귀한 NFT 고양이를 키우고 훈련시키는 육성 게임입니다. 각 고양이마다 고유한 능력과 특성을 가지고 있습니다.',
      category: 'NFT 게임',
      players: 5430,
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=NFT%20cat%20breeding%20game%20with%20unique%20digital%20cats%20having%20special%20abilities%20colorful%20collection%20game&width=400&height=250&seq=game7&orientation=landscape',
      status: 'live',
      rewards: ['희귀 고양이 NFT', '육성 아이템', '번식 권한']
    },
    {
      id: 8,
      title: '캣 레이싱 챔피언십',
      description: '고양이들이 참여하는 스릴 넘치는 레이싱 게임입니다. 다양한 트랙에서 친구들과 경쟁하며 챔피언이 되어보세요.',
      category: '미니게임',
      players: 11200,
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=cat%20racing%20game%20with%20cute%20cats%20driving%20colorful%20vehicles%20on%20exciting%20tracks%20competitive%20racing&width=400&height=250&seq=game8&orientation=landscape',
      status: 'live',
      rewards: ['레이싱 트로피', '차량 업그레이드', '트랙 언락']
    },
    {
      id: 9,
      title: '길고양이 보호소 건설',
      description: '길고양이들을 위한 보호소를 건설하고 운영하는 시뮬레이션 게임입니다. 실제 보호소 운영에 도움이 되는 교육적 요소가 포함되어 있습니다.',
      category: '구조 게임',
      players: 7650,
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=animal%20shelter%20building%20game%20with%20cats%20being%20cared%20for%20in%20modern%20facility%20management%20simulation&width=400&height=250&seq=game9&orientation=landscape',
      status: 'beta',
      rewards: ['보호소 후원금', '시설 업그레이드', '봉사자 모집']
    },
    {
      id: 10,
      title: '우주 고양이 탐험',
      description: '미지의 우주를 탐험하며 새로운 행성과 고양이 종족을 발견하는 어드벤처 게임입니다.',
      category: 'P2E',
      players: 6840,
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=space%20exploration%20game%20with%20cats%20discovering%20new%20planets%20and%20alien%20cat%20species%20cosmic%20adventure&width=400&height=250&seq=game10&orientation=landscape',
      status: 'coming-soon',
      rewards: ['탐험 일지 NFT', '새로운 행성 발견', '우주 자원']
    },
    {
      id: 11,
      title: '캣 타워 디펜스',
      description: '고양이 타워를 건설하여 침입자들로부터 영토를 지키는 타워 디펜스 게임입니다.',
      category: '미니게임',
      players: 13450,
      rating: 4.3,
      image: 'https://readdy.ai/api/search-image?query=tower%20defense%20game%20with%20cat%20towers%20defending%20against%20enemies%20strategic%20gameplay%20pixel%20art&width=400&height=250&seq=game11&orientation=landscape',
      status: 'live',
      rewards: ['방어 전략 가이드', '타워 업그레이드', '특수 능력']
    },
    {
      id: 12,
      title: '고양이 요리 마스터',
      description: '고양이들을 위한 맛있는 요리를 만드는 쿠킹 게임입니다. 다양한 레시피를 배우고 요리 실력을 향상시켜보세요.',
      category: '미니게임',
      players: 8920,
      rating: 4.4,
      image: 'https://readdy.ai/api/search-image?query=cooking%20game%20with%20cats%20preparing%20delicious%20meals%20colorful%20kitchen%20gameplay%20cute%20chef%20cats&width=400&height=250&seq=game12&orientation=landscape',
      status: 'live',
      rewards: ['레시피 컬렉션', '요리 도구', '마스터 셰프 인증']
    },
    {
      id: 13,
      title: '캣닢 농장 시뮬레이터',
      description: '우주 최고의 캣닢을 재배하는 농장 시뮬레이션 게임입니다. 다양한 품종의 캣닢을 키우고 판매하여 수익을 올리세요.',
      category: '채굴',
      players: 4520,
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=catnip%20farming%20simulation%20with%20space%20greenhouse%20growing%20magical%20plants%20for%20cats%20agricultural%20game&width=400&height=250&seq=game13&orientation=landscape',
      status: 'beta',
      rewards: ['희귀 캣닢 씨앗', '농장 확장', '판매 수익']
    },
    {
      id: 14,
      title: '고양이 패션쇼',
      description: '고양이들을 위한 패션 아이템을 디자인하고 패션쇼를 개최하는 크리에이티브 게임입니다.',
      category: 'NFT 게임',
      players: 6780,
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=cat%20fashion%20show%20game%20with%20stylish%20cats%20wearing%20designer%20outfits%20on%20runway%20creative%20dress-up&width=400&height=250&seq=game14&orientation=landscape',
      status: 'coming-soon',
      rewards: ['패션 디자이너 NFT', '의상 컬렉션', '런웨이 쇼 티켓']
    },
    {
      id: 15,
      title: '묘연 트레이딩 카드',
      description: '다양한 고양이 캐릭터들의 트레이딩 카드를 수집하고 배틀하는 전략 카드 게임입니다.',
      category: 'NFT 게임',
      players: 9650,
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=trading%20card%20game%20with%20cute%20cat%20characters%20having%20special%20powers%20strategic%20card%20battle%20gameplay&width=400&height=250&seq=game15&orientation=landscape',
      status: 'live',
      rewards: ['희귀 카드 팩', '배틀 토너먼트', '카드 거래소']
    }
  ];

  const filteredGames = selectedCategory === '전체' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-blue-100 text-blue-800';
      case 'coming-soon': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return '서비스중';
      case 'beta': return '베타';
      case 'coming-soon': return '출시예정';
      default: return '알 수 없음';
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=gaming%20universe%20with%20pixel%20art%20cats%20playing%20various%20games%20colorful%20retro%20arcade%20atmosphere&width=1200&height=600&seq=games-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>게임 컨텐츠</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>

              퍼니버스에서 즐길 수 있는 다양한 게임들을 만나보세요. 
              재미있게 플레이하면서 실제 길고양이 구조에도 도움이 되는 특별한 게임들입니다.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#f6b73c] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e5a632] transition-colors">
                게임 시작하기
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                토너먼트 참가
              </button>
            </div>
          </div>
        </section>

        {/* Game Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f6b73c] mb-2">15+</div>
                <div className="text-gray-600">게임 종류</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7e5bef] mb-2">125K+</div>
                <div className="text-gray-600">총 플레이어</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">2.4M</div>
                <div className="text-gray-600">구조된 고양이</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">850K</div>
                <div className="text-gray-600">지급된 토큰</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#f6b73c] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">인기 게임</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {filteredGames.slice(0, 2).map((game) => (
                <div key={game.id} className="bg-white rounded-lg shadow-sm overflow-hidden border hover:shadow-md transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(game.status)}`}>
                        {getStatusText(game.status)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      ⭐ {game.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {game.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {game.players.toLocaleString()} 플레이어
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#f6b73c] transition-colors">
                      {game.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {game.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">게임 보상</h4>
                      <div className="flex flex-wrap gap-1">
                        {game.rewards.map((reward) => (
                          <span key={reward} className="bg-[#f6b73c]/10 text-[#f6b73c] px-2 py-1 rounded text-xs">
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#f6b73c] text-white py-3 px-4 rounded-lg hover:bg-[#e5a632] transition-colors font-medium">
                      지금 플레이하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Games Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">모든 게임</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.slice(2).map((game) => (
                <div key={game.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(game.status)}`}>
                        {getStatusText(game.status)}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      ⭐ {game.rating}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {game.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {game.players.toLocaleString()}명
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#f6b73c] transition-colors">
                      {game.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {game.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {game.rewards.slice(0, 2).map((reward) => (
                          <span key={reward} className="bg-[#f6b73c]/10 text-[#f6b73c] px-2 py-1 rounded text-xs">
                            {reward}
                          </span>
                        ))}
                        {game.rewards.length > 2 && (
                          <span className="text-[#f6b73c] text-xs">+{game.rewards.length - 2}</span>
                        )}
                      </div>
                    </div>
                    
                    <button className="w-full bg-[#f6b73c] text-white py-2 px-4 rounded-lg hover:bg-[#e5a632] transition-colors text-sm font-medium">
                      {game.status === 'live' ? '플레이하기' : game.status === 'beta' ? '베타 참여' : '알림 설정'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournament Section */}
        <section className="py-16 bg-gradient-to-r from-[#f6b73c]/10 to-[#7e5bef]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">게임 토너먼트</h2>
            <p className="text-lg text-gray-600 mb-8">
              다른 플레이어들과 실력을 겨루고 특별한 보상을 획득하세요
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-[#f6b73c] mb-2">주간 토너먼트</div>
                <div className="text-gray-600 mb-4">매주 진행되는 정기 토너먼트</div>
                <div className="text-sm text-gray-500">상금: 10,000 MEOW</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-[#7e5bef] mb-2">월간 챔피언십</div>
                <div className="text-gray-600 mb-4">최고 수준의 경쟁 토너먼트</div>
                <div className="text-sm text-gray-500">상금: 100,000 MEOW</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-500 mb-2">자선 이벤트</div>
                <div className="text-gray-600 mb-4">길고양이 구조 기금 마련</div>
                <div className="text-sm text-gray-500">참가비 전액 기부</div>
              </div>
            </div>
            
            <button className="bg-[#f6b73c] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e5a632] transition-colors">
              토너먼트 참가하기
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
