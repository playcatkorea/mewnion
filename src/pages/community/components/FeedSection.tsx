
import { useState } from 'react';

export default function FeedSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '전체', icon: 'ri-apps-line' },
    { id: 'photos', label: '사진', icon: 'ri-image-line' },
    { id: 'videos', label: '동영상', icon: 'ri-video-line' },
    { id: 'questions', label: '질문', icon: 'ri-question-line' },
    { id: 'tips', label: '팁', icon: 'ri-lightbulb-line' },
    { id: 'adoption', label: '입양', icon: 'ri-heart-line' }
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: '냥집사민지',
        avatar: 'https://readdy.ai/api/search-image?query=Cute%20profile%20picture%20of%20a%20young%20Korean%20woman%20with%20a%20cat%2C%20warm%20and%20friendly%20expression%2C%20casual%20style%2C%20soft%20lighting&width=100&height=100&seq=user-1&orientation=squarish',
        verified: true,
        followers: '12.4K'
      },
      content: '우리 먼지가 새로운 캣타워를 너무 좋아해요! 🐱 Playcat에서 주문한 원목 캣타워인데 디자인도 예쁘고 먼지도 만족하는 것 같아요. 집사 여러분들께 추천드려요!',
      images: [
        'https://readdy.ai/api/search-image?query=Beautiful%20wooden%20cat%20tower%20with%20a%20cute%20gray%20cat%20playing%20on%20it%2C%20modern%20home%20interior%2C%20natural%20lighting%2C%20cozy%20atmosphere&width=600&height=400&seq=post-1-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Close-up%20of%20a%20happy%20gray%20cat%20on%20wooden%20cat%20furniture%2C%20showing%20the%20cat%20enjoying%20the%20new%20tower%2C%20warm%20indoor%20lighting&width=600&height=400&seq=post-1-2&orientation=landscape'
      ],
      timestamp: '2시간 전',
      likes: 247,
      comments: 18,
      shares: 5,
      tags: ['#Playcat', '#캣타워', '#먼지', '#집사일상']
    },
    {
      id: 2,
      user: {
        name: '댕댕이아빠',
        avatar: 'https://readdy.ai/api/search-image?query=Profile%20picture%20of%20a%20Korean%20man%20in%20his%2030s%20with%20a%20golden%20retriever%2C%20happy%20and%20caring%20expression%2C%20outdoor%20setting&width=100&height=100&seq=user-2&orientation=squarish',
        verified: false,
        followers: '3.2K'
      },
      content: '골든리트리버 초보 집사입니다. 우리 골디가 요즘 산책할 때 다른 강아지들을 너무 좋아해서 흥분을 많이 하는데, 어떻게 훈련시키면 좋을까요? 경험 있으신 분들 조언 부탁드려요! 🐕',
      images: [
        'https://readdy.ai/api/search-image?query=Excited%20golden%20retriever%20on%20a%20leash%20during%20a%20walk%2C%20meeting%20other%20dogs%20in%20a%20park%2C%20energetic%20and%20happy%20expression&width=600&height=400&seq=post-2-1&orientation=landscape'
      ],
      timestamp: '4시간 전',
      likes: 89,
      comments: 32,
      shares: 2,
      tags: ['#골든리트리버', '#강아지훈련', '#산책', '#초보집사']
    },
    {
      id: 3,
      user: {
        name: '길냥이구조대',
        avatar: 'https://readdy.ai/api/search-image?query=Profile%20picture%20representing%20animal%20rescue%20volunteer%2C%20caring%20hands%20with%20rescued%20cats%2C%20compassionate%20and%20dedicated%20expression&width=100&height=100&seq=user-3&orientation=squarish',
        verified: true,
        followers: '45.7K'
      },
      content: '🚨 긴급 구조 요청 🚨\n\n서울 강남구 역삼동에서 새끼 고양이 3마리가 발견되었습니다. 어미 고양이는 보이지 않고 아이들이 너무 어려서 긴급히 도움이 필요합니다. 임시보호 가능하신 분이나 후원해주실 분 연락 부탁드려요.\n\n📞 010-1234-5678\n💰 후원 계좌: 묘연 123-456-789',
      images: [
        'https://readdy.ai/api/search-image?query=Three%20tiny%20rescued%20kittens%20in%20a%20cardboard%20box%2C%20very%20young%20and%20vulnerable%2C%20needing%20care%20and%20help%2C%20emotional%20rescue%20scene&width=600&height=400&seq=post-3-1&orientation=landscape'
      ],
      timestamp: '6시간 전',
      likes: 892,
      comments: 156,
      shares: 234,
      tags: ['#긴급구조', '#새끼고양이', '#임시보호', '#후원', '#길구넷'],
      urgent: true
    },
    {
      id: 4,
      user: {
        name: '수의사김선생',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20Korean%20veterinarian%20in%20white%20coat%2C%20kind%20and%20knowledgeable%20expression%2C%20medical%20clinic%20background&width=100&height=100&seq=user-4&orientation=squarish',
        verified: true,
        followers: '28.9K'
      },
      content: '🩺 반려동물 건강 팁 🩺\n\n겨울철 반려동물 관리 주의사항을 알려드려요!\n\n1. 실내 온도는 20-22도 유지\n2. 건조한 공기로 인한 피부 트러블 주의\n3. 산책 시간 단축하되 실내 활동량 늘리기\n4. 충분한 수분 섭취 확인\n\n더 자세한 내용은 댓글로 질문해주세요! 💙',
      images: [
        'https://readdy.ai/api/search-image?query=Veterinarian%20examining%20a%20healthy%20cat%20in%20a%20modern%20clinic%2C%20professional%20medical%20care%2C%20warm%20and%20caring%20atmosphere&width=600&height=400&seq=post-4-1&orientation=landscape'
      ],
      timestamp: '8시간 전',
      likes: 445,
      comments: 67,
      shares: 89,
      tags: ['#수의사팁', '#겨울철관리', '#반려동물건강', '#전문조언']
    },
    {
      id: 5,
      user: {
        name: '캣맘지은',
        avatar: 'https://readdy.ai/api/search-image?query=Middle-aged%20Korean%20woman%20with%20multiple%20cats%2C%20warm%20motherly%20expression%2C%20surrounded%20by%20cats%20in%20a%20cozy%20home&width=100&height=100&seq=user-5&orientation=squarish',
        verified: false,
        followers: '8.7K'
      },
      content: '우리 집 5냥이들의 점심시간 🍽️ 각자 취향이 달라서 밥 주는 것도 일이에요 ㅋㅋ 치즈는 참치만, 모카는 연어만, 라떼는 닭고기만... 나머지 둘은 뭐든 잘 먹고 😅 다묘가정 집사님들은 어떻게 관리하시나요?',
      images: [
        'https://readdy.ai/api/search-image?query=Five%20cats%20eating%20from%20different%20bowls%20in%20a%20kitchen%2C%20each%20cat%20with%20different%20colored%20fur%2C%20organized%20feeding%20time%2C%20cozy%20home%20atmosphere&width=600&height=400&seq=post-5-1&orientation=landscape'
      ],
      timestamp: '12시간 전',
      likes: 178,
      comments: 43,
      shares: 12,
      tags: ['#다묘가정', '#5냥이', '#밥시간', '#집사일상']
    },
    {
      id: 6,
      user: {
        name: '펫샵사장님',
        avatar: 'https://readdy.ai/api/search-image?query=Friendly%20pet%20shop%20owner%20with%20various%20pet%20supplies%20and%20animals%2C%20professional%20and%20caring%20expression%2C%20pet%20store%20background&width=100&height=100&seq=user-6&orientation=squarish',
        verified: true,
        followers: '15.3K'
      },
      content: '🎉 묘연 커뮤니티 특가 이벤트! 🎉\n\n이번 주말 한정으로 Playcat 제품 20% 할인해드려요! 원목 캣타워, 스크래처, 캣휠까지 모든 제품이 할인 대상입니다.\n\n📅 12월 16-17일 (주말 양일간)\n💳 결제 시 "묘연20" 쿠폰 입력\n🚚 전국 무료배송\n\n우리 아이들에게 크리스마스 선물 어떠세요? 🎄',
      images: [
        'https://readdy.ai/api/search-image?query=Beautiful%20display%20of%20wooden%20cat%20furniture%20and%20toys%2C%20Christmas%20sale%20promotion%20setup%2C%20festive%20decorations%2C%20pet%20store%20interior&width=600&height=400&seq=post-6-1&orientation=landscape'
      ],
      timestamp: '1일 전',
      likes: 567,
      comments: 89,
      shares: 145,
      tags: ['#Playcat', '#할인이벤트', '#크리스마스', '#캣타워', '#특가']
    }
  ];

  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-[#f6b73c] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <i className={`${filter.icon} mr-2`}></i>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${post.urgent ? 'ring-2 ring-red-400' : ''}`}>
            {post.urgent && (
              <div className="bg-red-500 text-white px-4 py-2 text-sm font-medium">
                <i className="ri-alarm-warning-line mr-2"></i>
                긴급 구조 요청
              </div>
            )}
            
            {/* Post Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-800">{post.user.name}</h3>
                      {post.user.verified && (
                        <i className="ri-verified-badge-fill text-[#f6b73c] text-sm"></i>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{post.user.followers} 팔로워</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                  <i className="ri-more-line text-gray-500"></i>
                </button>
              </div>

              {/* Post Content */}
              <p className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
                {post.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="text-[#f6b73c] text-sm hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Images */}
            {post.images && post.images.length > 0 && (
              <div className={`grid gap-1 ${post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Post image ${index + 1}`}
                    className="w-full h-64 object-cover cursor-pointer hover:opacity-95 transition-opacity"
                  />
                ))}
              </div>
            )}

            {/* Post Actions */}
            <div className="p-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      likedPosts.includes(post.id) ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <i className={`${likedPosts.includes(post.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-xl`}></i>
                    <span className="font-medium">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#f6b73c] transition-colors">
                    <i className="ri-chat-3-line text-xl"></i>
                    <span className="font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#f6b73c] transition-colors">
                    <i className="ri-share-line text-xl"></i>
                    <span className="font-medium">{post.shares}</span>
                  </button>
                </div>
                <button className="text-gray-600 hover:text-[#f6b73c] transition-colors">
                  <i className="ri-bookmark-line text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <button className="px-8 py-3 bg-[#f6b73c] text-white rounded-full font-medium hover:bg-[#e5a632] transition-colors">
          <i className="ri-refresh-line mr-2"></i>
          더 많은 게시물 보기
        </button>
      </div>
    </div>
  );
}
