
export default function TrendingSection() {
  const trendingTopics = [
    { tag: '#겨울철반려동물관리', posts: 1247 },
    { tag: '#Playcat신제품', posts: 892 },
    { tag: '#길고양이구조', posts: 756 },
    { tag: '#반려동물건강', posts: 634 },
    { tag: '#집사일상', posts: 589 },
    { tag: '#입양후기', posts: 445 },
    { tag: '#펫푸드추천', posts: 378 },
    { tag: '#훈련팁', posts: 267 }
  ];

  const popularCreators = [
    {
      name: '수의사김선생',
      specialty: '반려동물 건강 전문',
      followers: '28.9K',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20veterinarian%20portrait%2C%20kind%20and%20knowledgeable%20expression%2C%20medical%20background&width=80&height=80&seq=creator-1&orientation=squarish',
      verified: true
    },
    {
      name: '길냥이구조대',
      specialty: '동물 구조 및 보호',
      followers: '45.7K',
      avatar: 'https://readdy.ai/api/search-image?query=Animal%20rescue%20volunteer%20with%20caring%20expression%2C%20surrounded%20by%20rescued%20cats%2C%20compassionate%20atmosphere&width=80&height=80&seq=creator-2&orientation=squarish',
      verified: true
    },
    {
      name: '펫트레이너민수',
      specialty: '반려동물 훈련 전문',
      followers: '19.3K',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20pet%20trainer%20with%20dogs%2C%20confident%20and%20friendly%20expression%2C%20training%20facility%20background&width=80&height=80&seq=creator-3&orientation=squarish',
      verified: true
    },
    {
      name: '캣맘지은',
      specialty: '다묘가정 관리 노하우',
      followers: '8.7K',
      avatar: 'https://readdy.ai/api/search-image?query=Experienced%20cat%20mom%20with%20multiple%20cats%2C%20warm%20motherly%20expression%2C%20cozy%20home%20setting&width=80&height=80&seq=creator-4&orientation=squarish',
      verified: false
    }
  ];

  const liveStreams = [
    {
      title: '새끼 고양이 응급처치 교육',
      streamer: '수의사김선생',
      viewers: 1247,
      thumbnail: 'https://readdy.ai/api/search-image?query=Live%20streaming%20setup%20for%20pet%20emergency%20care%20education%2C%20veterinarian%20teaching%20first%20aid%20for%20kittens%2C%20professional%20medical%20environment&width=200&height=120&seq=live-1&orientation=landscape'
    },
    {
      title: '강아지 기본 훈련 라이브',
      streamer: '펫트레이너민수',
      viewers: 892,
      thumbnail: 'https://readdy.ai/api/search-image?query=Live%20dog%20training%20session%2C%20professional%20trainer%20working%20with%20puppies%2C%20interactive%20educational%20content&width=200&height=120&seq=live-2&orientation=landscape'
    },
    {
      title: '길고양이 TNR 현장 중계',
      streamer: '길냥이구조대',
      viewers: 634,
      thumbnail: 'https://readdy.ai/api/search-image?query=TNR%20rescue%20operation%20for%20street%20cats%2C%20volunteers%20working%20in%20the%20field%2C%20caring%20and%20professional%20rescue%20work&width=200&height=120&seq=live-3&orientation=landscape'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-fire-line text-[#f6b73c] mr-2"></i>
          인기 토픽
        </h3>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
              <div>
                <div className="font-medium text-gray-800 text-sm">{topic.tag}</div>
                <div className="text-xs text-gray-500">{topic.posts.toLocaleString()} 게시물</div>
              </div>
              <div className="text-xs text-[#f6b73c] font-bold">#{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Creators */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-star-line text-[#f6b73c] mr-2"></i>
          인기 크리에이터
        </h3>
        <div className="space-y-4">
          {popularCreators.map((creator, index) => (
            <div key={index} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1">
                  <h4 className="font-medium text-gray-800 text-sm truncate">{creator.name}</h4>
                  {creator.verified && (
                    <i className="ri-verified-badge-fill text-[#f6b73c] text-xs"></i>
                  )}
                </div>
                <p className="text-xs text-gray-500 truncate">{creator.specialty}</p>
                <p className="text-xs text-[#f6b73c] font-medium">{creator.followers} 팔로워</p>
              </div>
              <button className="px-3 py-1 bg-[#f6b73c] text-white text-xs rounded-full hover:bg-[#e5a632] transition-colors whitespace-nowrap">
                팔로우
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Live Streams */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-live-line text-red-500 mr-2"></i>
          라이브 방송
        </h3>
        <div className="space-y-4">
          {liveStreams.map((stream, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-2">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                  LIVE
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                  <i className="ri-eye-line mr-1"></i>
                  {stream.viewers.toLocaleString()}
                </div>
              </div>
              <h4 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">{stream.title}</h4>
              <p className="text-xs text-gray-500">{stream.streamer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-gradient-to-br from-[#f6b73c]/10 to-[#7e5bef]/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
          <i className="ri-shield-check-line text-[#f6b73c] mr-2"></i>
          커뮤니티 가이드
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start">
            <i className="ri-check-line text-[#f6b73c] mr-2 mt-0.5 flex-shrink-0"></i>
            <span>반려동물에 대한 사랑과 존중</span>
          </div>
          <div className="flex items-start">
            <i className="ri-check-line text-[#f6b73c] mr-2 mt-0.5 flex-shrink-0"></i>
            <span>건전하고 유익한 정보 공유</span>
          </div>
          <div className="flex items-start">
            <i className="ri-check-line text-[#f6b73c] mr-2 mt-0.5 flex-shrink-0"></i>
            <span>서로를 배려하는 소통</span>
          </div>
          <div className="flex items-start">
            <i className="ri-check-line text-[#f6b73c] mr-2 mt-0.5 flex-shrink-0"></i>
            <span>동물 학대 금지</span>
          </div>
        </div>
        <button className="mt-4 text-[#f6b73c] text-sm font-medium hover:underline">
          전체 가이드라인 보기 →
        </button>
      </div>
    </div>
  );
}
