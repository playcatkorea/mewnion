
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  type: string;
  medium: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  views: number;
  createdAt: string;
  isAvailable: boolean;
  isNFT?: boolean;
  dimensions?: string;
}

interface Artist {
  id: number;
  name: string;
  bio: string;
  avatar: string;
  followers: number;
  artworks: number;
  specialties: string[];
}

export default function MarketArtPage() {
  const [activeTab, setActiveTab] = useState('artworks');
  const [selectedType, setSelectedType] = useState('전체');
  const [sortBy, setSortBy] = useState('latest');
  
  const artTypes = ['전체', '일러스트', '사진', '디지털아트', 'NFT', '음악', '글/시', '굿즈'];
  
  const artworks: Artwork[] = [
    {
      id: 1,
      title: '우주 고양이의 꿈',
      artist: '김아티스트',
      type: '일러스트',
      medium: '디지털 페인팅',
      price: 150000,
      description: '퍼니버스 세계관을 배경으로 한 환상적인 우주 고양이 일러스트입니다. 별빛 속에서 꿈꾸는 고양이의 모습을 따뜻한 색감으로 표현했습니다.',
      image: 'https://readdy.ai/api/search-image?query=space%20cat%20dreaming%20in%20cosmic%20universe%20digital%20art%20illustration%20with%20warm%20colors%20and%20stars&width=400&height=300&seq=art1&orientation=landscape',
      tags: ['우주', '고양이', '꿈', '판타지', '디지털아트'],
      likes: 342,
      views: 1250,
      createdAt: '2024-01-15',
      isAvailable: true,
      dimensions: '3000x2000px'
    },
    {
      id: 2,
      title: '길고양이 사진집 - 도시의 작은 영웅들',
      artist: '박포토그래퍼',
      type: '사진',
      medium: '디지털 사진',
      price: 80000,
      description: '도시 곳곳에서 살아가는 길고양이들의 일상을 담은 사진집입니다. 각각의 고양이가 가진 고유한 매력과 생명력을 포착했습니다.',
      image: 'https://readdy.ai/api/search-image?query=street%20cats%20photography%20collection%20urban%20life%20documentary%20style%20black%20and%20white%20photos&width=400&height=300&seq=art2&orientation=landscape',
      tags: ['길고양이', '다큐멘터리', '흑백사진', '도시', '생명'],
      likes: 189,
      views: 890,
      createdAt: '2024-01-14',
      isAvailable: true,
      dimensions: '사진집 (A4 사이즈, 120페이지)'
    },
    {
      id: 3,
      title: '고양이와 함께하는 하루 NFT',
      artist: '이크리에이터',
      type: 'NFT',
      medium: '3D 애니메이션',
      price: 250000,
      description: '고양이와 집사의 일상을 3D 애니메이션으로 표현한 NFT 작품입니다. 24시간의 일상이 루프로 재생되며, 각 시간대마다 다른 매력을 보여줍니다.',
      image: 'https://readdy.ai/api/search-image?query=3D%20animation%20NFT%20cat%20and%20owner%20daily%20life%20loop%2024%20hours%20cute%20digital%20art&width=400&height=300&seq=art3&orientation=landscape',
      tags: ['NFT', '3D', '애니메이션', '일상', '루프'],
      likes: 567,
      views: 2340,
      createdAt: '2024-01-13',
      isAvailable: true,
      isNFT: true,
      dimensions: '1920x1080px (30초 루프)'
    },
    {
      id: 4,
      title: '고양이 자장가 - 평온한 밤',
      artist: '최뮤지션',
      type: '음악',
      medium: '디지털 음원',
      price: 15000,
      description: '고양이들이 좋아하는 주파수를 활용한 힐링 음악입니다. 잠들기 전 고양이와 함께 들으면 평온한 밤을 보낼 수 있습니다.',
      image: 'https://readdy.ai/api/search-image?query=peaceful%20night%20music%20for%20cats%20healing%20sound%20waves%20visualization%20calming%20atmosphere&width=400&height=300&seq=art4&orientation=landscape',
      tags: ['음악', '힐링', '자장가', '주파수', '평온'],
      likes: 234,
      views: 1560,
      createdAt: '2024-01-12',
      isAvailable: true,
      dimensions: '5분 30초 (MP3, FLAC)'
    },
    {
      id: 5,
      title: '묘연이의 모험 일기',
      artist: '정작가',
      type: '글/시',
      medium: '전자책',
      price: 12000,
      description: '묘연이가 퍼니버스를 여행하며 겪는 모험을 담은 동화책입니다. 아이들과 어른 모두가 즐길 수 있는 따뜻한 이야기입니다.',
      image: 'https://readdy.ai/api/search-image?query=adventure%20diary%20book%20cover%20with%20cute%20cat%20character%20traveling%20through%20universe%20colorful%20illustration&width=400&height=300&seq=art5&orientation=landscape',
      tags: ['동화', '모험', '묘연이', '전자책', '가족'],
      likes: 445,
      views: 1890,
      createdAt: '2024-01-11',
      isAvailable: true,
      dimensions: '전자책 (PDF, 80페이지)'
    },
    {
      id: 6,
      title: '고양이 캐릭터 스티커 팩',
      artist: '한디자이너',
      type: '굿즈',
      medium: '스티커',
      price: 8000,
      description: '다양한 표정과 포즈의 귀여운 고양이 캐릭터 스티커 20종 세트입니다. 방수 코팅으로 어디든 붙일 수 있습니다.',
      image: 'https://readdy.ai/api/search-image?query=cute%20cat%20character%20sticker%20pack%20various%20expressions%20and%20poses%20colorful%20design%20merchandise&width=400&height=300&seq=art6&orientation=landscape',
      tags: ['스티커', '캐릭터', '굿즈', '귀여움', '방수'],
      likes: 678,
      views: 3240,
      createdAt: '2024-01-10',
      isAvailable: true,
      dimensions: '20종 세트 (5x5cm 각)'
    },
    {
      id: 7,
      title: '미니멀 고양이 포트레이트',
      artist: '윤미니멀',
      type: '일러스트',
      medium: '벡터 아트',
      price: 45000,
      description: '심플하면서도 고양이의 특징을 잘 살린 미니멀 스타일의 포트레이트입니다. 인테리어 소품으로 완벽합니다.',
      image: 'https://readdy.ai/api/search-image?query=minimal%20cat%20portrait%20vector%20art%20simple%20lines%20clean%20design%20modern%20interior%20decoration&width=400&height=300&seq=art7&orientation=landscape',
      tags: ['미니멀', '포트레이트', '벡터', '인테리어', '심플'],
      likes: 123,
      views: 567,
      createdAt: '2024-01-09',
      isAvailable: true,
      dimensions: '벡터 파일 (AI, SVG, PNG)'
    },
    {
      id: 8,
      title: '고양이 요가 시리즈',
      artist: '김요가',
      type: '사진',
      medium: '디지털 사진',
      price: 95000,
      description: '고양이들의 자연스러운 스트레칭 자세를 요가 포즈와 연결한 유머러스한 사진 시리즈입니다.',
      image: 'https://readdy.ai/api/search-image?query=cats%20doing%20yoga%20poses%20stretching%20natural%20positions%20humorous%20photography%20series&width=400&height=300&seq=art8&orientation=landscape',
      tags: ['요가', '스트레칭', '유머', '자연스러움', '시리즈'],
      likes: 289,
      views: 1120,
      createdAt: '2024-01-08',
      isAvailable: true,
      dimensions: '10장 세트 (각 4000x3000px)'
    },
    {
      id: 9,
      title: '퍼니버스 테마송 - 별빛 여행',
      artist: '송컴포저',
      type: '음악',
      medium: '오케스트라',
      price: 35000,
      description: '퍼니버스의 웅장함과 아름다움을 오케스트라로 표현한 테마송입니다. 영화 OST 같은 감동을 선사합니다.',
      image: 'https://readdy.ai/api/search-image?query=orchestral%20music%20theme%20song%20for%20universe%20travel%20with%20stars%20cinematic%20soundtrack%20visualization&width=400&height=300&seq=art9&orientation=landscape',
      tags: ['오케스트라', '테마송', '영화음악', '웅장함', '감동'],
      likes: 156,
      views: 890,
      createdAt: '2024-01-07',
      isAvailable: true,
      dimensions: '3분 45초 (WAV, MP3)'
    },
    {
      id: 10,
      title: '고양이 감정 표현 가이드',
      artist: '조교육자',
      type: '일러스트',
      medium: '인포그래픽',
      price: 25000,
      description: '고양이의 다양한 감정 표현을 이해하기 쉽게 정리한 교육용 인포그래픽입니다. 집사들에게 유용한 정보를 담았습니다.',
      image: 'https://readdy.ai/api/search-image?query=cat%20emotion%20expression%20guide%20infographic%20educational%20illustration%20various%20feelings%20and%20behaviors&width=400&height=300&seq=art10&orientation=landscape',
      tags: ['교육', '감정', '인포그래픽', '가이드', '유용함'],
      likes: 445,
      views: 2100,
      createdAt: '2024-01-06',
      isAvailable: true,
      dimensions: 'A2 포스터 사이즈 (PDF, PNG)'
    },
    {
      id: 11,
      title: '고양이 명상 음악 앨범',
      artist: '명상마스터',
      type: '음악',
      medium: '앰비언트',
      price: 28000,
      description: '고양이와 함께 명상할 수 있는 앰비언트 음악 앨범입니다. 8트랙으로 구성되어 있으며 각각 다른 테마를 가지고 있습니다.',
      image: 'https://readdy.ai/api/search-image?query=meditation%20music%20album%20for%20cats%20ambient%20sounds%20peaceful%20atmosphere%20zen%20garden&width=400&height=300&seq=art11&orientation=landscape',
      tags: ['명상', '앰비언트', '앨범', '평화', '젠'],
      likes: 178,
      views: 756,
      createdAt: '2024-01-05',
      isAvailable: true,
      dimensions: '8트랙 앨범 (총 45분)'
    },
    {
      id: 12,
      title: '고양이 패션 일러스트 컬렉션',
      artist: '패션일러스트',
      type: '일러스트',
      medium: '수채화',
      price: 120000,
      description: '고양이들이 다양한 패션을 입고 있는 모습을 수채화로 표현한 컬렉션입니다. 각각의 고양이가 독특한 스타일을 보여줍니다.',
      image: 'https://readdy.ai/api/search-image?query=cat%20fashion%20illustration%20collection%20watercolor%20painting%20various%20styles%20and%20outfits%20elegant%20art&width=400&height=300&seq=art12&orientation=landscape',
      tags: ['패션', '수채화', '컬렉션', '스타일', '우아함'],
      likes: 234,
      views: 1340,
      createdAt: '2024-01-04',
      isAvailable: true,
      dimensions: '12장 세트 (각 A3 사이즈)'
    },
    {
      id: 13,
      title: '고양이 하이쿠 시집',
      artist: '시인고양이',
      type: '글/시',
      medium: '시집',
      price: 18000,
      description: '고양이의 시선으로 바라본 세상을 하이쿠로 표현한 시집입니다. 짧지만 깊은 울림을 주는 50편의 시를 담았습니다.',
      image: 'https://readdy.ai/api/search-image?query=haiku%20poetry%20book%20about%20cats%20perspective%20on%20world%20minimalist%20design%20literary%20art&width=400&height=300&seq=art13&orientation=landscape',
      tags: ['하이쿠', '시집', '문학', '철학', '감성'],
      likes: 89,
      views: 445,
      createdAt: '2024-01-03',
      isAvailable: true,
      dimensions: '전자책 (50편, 120페이지)'
    },
    {
      id: 14,
      title: '고양이 캐릭터 이모티콘 세트',
      artist: '이모티콘작가',
      type: '굿즈',
      medium: '디지털 이모티콘',
      price: 3000,
      description: '메신저에서 사용할 수 있는 고양이 캐릭터 이모티콘 40종 세트입니다. 다양한 상황에서 사용할 수 있는 표현들을 담았습니다.',
      image: 'https://readdy.ai/api/search-image?query=cat%20character%20emoticon%20set%20messenger%20stickers%20various%20expressions%20digital%20communication&width=400&height=300&seq=art14&orientation=landscape',
      tags: ['이모티콘', '메신저', '캐릭터', '소통', '표현'],
      likes: 892,
      views: 4560,
      createdAt: '2024-01-02',
      isAvailable: true,
      dimensions: '40종 세트 (PNG, 512x512px)'
    },
    {
      id: 15,
      title: '고양이 별자리 지도',
      artist: '천문학자',
      type: '일러스트',
      medium: '디지털 아트',
      price: 65000,
      description: '실제 별자리를 고양이 모양으로 재해석한 창의적인 별자리 지도입니다. 천문학적 정확성과 예술성을 모두 갖췄습니다.',
      image: 'https://readdy.ai/api/search-image?query=cat%20constellation%20map%20stars%20reimagined%20as%20cat%20shapes%20astronomical%20art%20creative%20interpretation&width=400&height=300&seq=art15&orientation=landscape',
      tags: ['별자리', '천문학', '창의성', '지도', '우주'],
      likes: 267,
      views: 1230,
      createdAt: '2024-01-01',
      isAvailable: true,
      dimensions: 'A1 포스터 (고해상도 PDF)'
    }
  ];

  const artists: Artist[] = [
    {
      id: 1,
      name: '김아티스트',
      bio: '10년 경력의 디지털 아티스트로, 판타지와 동물을 주제로 한 작품을 전문으로 합니다. 특히 고양이의 신비로운 매력을 표현하는 데 탁월합니다.',
      avatar: 'https://readdy.ai/api/search-image?query=digital%20artist%20profile%20photo%20creative%20person%20with%20artistic%20background%20professional&width=100&height=100&seq=artist1&orientation=squarish',
      followers: 2340,
      artworks: 45,
      specialties: ['디지털 페인팅', '판타지 아트', '동물 일러스트']
    },
    {
      id: 2,
      name: '박포토그래퍼',
      bio: '다큐멘터리 사진작가로 길고양이와 반려동물의 일상을 기록하는 작업을 하고 있습니다. 생명의 소중함을 사진으로 전달합니다.',
      avatar: 'https://readdy.ai/api/search-image?query=documentary%20photographer%20profile%20with%20camera%20professional%20pet%20photography%20specialist&width=100&height=100&seq=artist2&orientation=squarish',
      followers: 1890,
      artworks: 78,
      specialties: ['다큐멘터리', '동물 사진', '흑백 사진']
    },
    {
      id: 3,
      name: '이크리에이터',
      bio: 'NFT와 3D 애니메이션 전문가입니다. 블록체인 기술을 활용한 디지털 아트의 새로운 가능성을 탐구하고 있습니다.',
      avatar: 'https://readdy.ai/api/search-image?query=NFT%20creator%203D%20animation%20specialist%20digital%20art%20blockchain%20technology%20expert&width=100&height=100&seq=artist3&orientation=squarish',
      followers: 3450,
      artworks: 23,
      specialties: ['NFT', '3D 애니메이션', '블록체인 아트']
    },
    {
      id: 4,
      name: '최뮤지션',
      bio: '동물 행동학을 연구하며 반려동물을 위한 힐링 음악을 작곡합니다. 과학적 근거를 바탕으로 한 치료 음악을 만듭니다.',
      avatar: 'https://readdy.ai/api/search-image?query=musician%20composer%20for%20pets%20healing%20music%20therapy%20specialist%20with%20instruments&width=100&height=100&seq=artist4&orientation=squarish',
      followers: 1560,
      artworks: 34,
      specialties: ['힐링 음악', '동물 치료', '사운드 테라피']
    },
    {
      id: 5,
      name: '정작가',
      bio: '아동문학 작가이자 고양이 애호가입니다. 고양이와 관련된 따뜻한 이야기를 통해 생명의 소중함을 전달합니다.',
      avatar: 'https://readdy.ai/api/search-image?query=children%20book%20author%20writer%20with%20cats%20warm%20storyteller%20literary%20professional&width=100&height=100&seq=artist5&orientation=squarish',
      followers: 2100,
      artworks: 12,
      specialties: ['아동문학', '동화', '에세이']
    }
  ];

  const filteredArtworks = selectedType === '전체' 
    ? artworks 
    : artworks.filter(artwork => artwork.type === selectedType);

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'popular': return b.likes - a.likes;
      case 'views': return b.views - a.views;
      default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20art%20marketplace%20cat%20themed%20artwork%20illustrations%20crafts%20colorful%20artistic%20products%20gallery&width=1200&height=600&seq=art-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              창작물 판매
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              고양이를 사랑하는 창작자들의 특별한 작품을 만나보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="space-button px-8 py-3 whitespace-nowrap">
                인기 작품 보기
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                작품 등록하기
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">1,250+</div>
                <div className="text-gray-600 text-sm">등록 작품</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 mb-1">340+</div>
                <div className="text-gray-600 text-sm">창작자</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">15,000+</div>
                <div className="text-gray-600 text-sm">총 판매</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                <div className="text-gray-600 text-sm">창작자 수익률</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'artworks', label: '작품 갤러리', icon: 'ri-palette-line' },
                { id: 'artists', label: '창작자', icon: 'ri-user-star-line' },
                { id: 'upload', label: '작품 등록', icon: 'ri-upload-line' },
                { id: 'guide', label: '판매 가이드', icon: 'ri-book-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
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

        {/* Artworks */}
        {activeTab === 'artworks' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex flex-wrap gap-2">
                  {artTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {sortedArtworks.length}개 작품
                  </span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 pr-6"
                  >
                    <option value="latest">최신순</option>
                    <option value="popular">인기순</option>
                    <option value="views">조회순</option>
                    <option value="price-low">낮은 가격순</option>
                    <option value="price-high">높은 가격순</option>
                  </select>
                </div>
              </div>

              {/* Artworks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedArtworks.map((artwork) => (
                  <div key={artwork.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="relative">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {artwork.type}
                        </span>
                        {artwork.isNFT && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                            NFT
                          </span>
                        )}
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        <i className="ri-eye-line mr-1"></i>
                        {artwork.views}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {artwork.artist.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{artwork.artist}</span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {artwork.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {artwork.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {artwork.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                        {artwork.tags.length > 3 && (
                          <span className="text-purple-600 text-xs">+{artwork.tags.length - 3}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-lg font-bold text-purple-600">
                          {artwork.price.toLocaleString()}원
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <i className="ri-heart-line"></i>
                            {artwork.likes}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mb-3">
                        {artwork.medium} • {artwork.dimensions}
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        구매하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Artists */}
        {activeTab === 'artists' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">창작자</h2>
                <p className="text-lg text-gray-600">
                  고양이를 사랑하는 재능 있는 창작자들을 만나보세요
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artists.map((artist) => (
                  <div key={artist.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="text-center mb-6">
                      <img 
                        src={artist.avatar} 
                        alt={artist.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{artist.bio}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{artist.followers.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">팔로워</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 mb-1">{artist.artworks}</div>
                        <div className="text-xs text-gray-600">작품 수</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">전문 분야</h4>
                      <div className="flex flex-wrap gap-1">
                        {artist.specialties.map((specialty) => (
                          <span key={specialty} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        팔로우
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                        작품 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Upload */}
        {activeTab === 'upload' && (
          <section className="py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">작품 등록</h2>
                <p className="text-lg text-gray-600">
                  여러분의 창작물을 묘연 마켓에서 판매해보세요
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      작품 제목 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="작품의 제목을 입력해주세요"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        작품 유형 *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8">
                        <option>일러스트</option>
                        <option>사진</option>
                        <option>디지털아트</option>
                        <option>NFT</option>
                        <option>음악</option>
                        <option>글/시</option>
                        <option>굿즈</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        매체/기법 *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="예: 디지털 페인팅, 수채화, 사진 등"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      작품 설명 *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="작품에 대한 상세한 설명을 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      작품 이미지 *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <i className="ri-image-line text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-600">이미지를 드래그하거나 클릭하여 업로드</p>
                      <p className="text-sm text-gray-500 mt-1">JPG, PNG, GIF (최대 10MB)</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        판매 가격 *
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-2 text-gray-500">원</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        작품 크기/규격
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="예: 3000x2000px, A4 사이즈 등"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      태그
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="태그를 쉼표로 구분하여 입력해주세요 (예: 고양이, 일러스트, 귀여움)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      라이선스 유형 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8">
                      <option>개인 사용 라이선스</option>
                      <option>상업적 사용 라이선스</option>
                      <option>확장 라이선스</option>
                      <option>독점 라이선스</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">
                      판매 약관 및 저작권 정책에 동의합니다 *
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    작품 등록하기
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Guide */}
        {activeTab === 'guide' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">판매 가이드</h2>
                <p className="text-lg text-gray-600">
                  성공적인 작품 판매를 위한 가이드를 확인하세요
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: '작품 등록 준비',
                    icon: 'ri-upload-line',
                    content: [
                      '고해상도 이미지 준비 (최소 1920x1080px 권장)',
                      '작품에 대한 상세하고 매력적인 설명 작성',
                      '적절한 가격 책정 (시장 조사 후 결정)',
                      '관련성 높은 태그 5-10개 선정',
                      '저작권 확인 및 라이선스 유형 결정'
                    ]
                  },
                  {
                    title: '판매 최적화 팁',
                    icon: 'ri-line-chart-line',
                    content: [
                      '트렌드에 맞는 고양이 관련 키워드 활용',
                      '시즌별 테마 작품 제작 (크리스마스, 발렌타인 등)',
                      '시리즈 작품으로 브랜딩 구축',
                      '고객 피드백을 반영한 작품 개선',
                      '정기적인 신작 업로드로 노출 증대'
                    ]
                  },
                  {
                    title: '수익 관리',
                    icon: 'ri-money-dollar-circle-line',
                    content: [
                      '묘연 마켓 수수료: 판매가의 5% (업계 최저 수준)',
                      '월 단위 정산 (매월 말일 기준)',
                      '세금 신고를 위한 판매 내역 자동 제공',
                      '다양한 결제 수단 지원 (계좌이체, 페이팔 등)',
                      '판매 통계 및 분석 도구 무료 제공'
                    ]
                  },
                  {
                    title: '저작권 보호',
                    icon: 'ri-shield-check-line',
                    content: [
                      '워터마크 자동 적용으로 무단 사용 방지',
                      '디지털 지문 기술로 복제품 탐지',
                      '저작권 침해 신고 시스템 운영',
                      '법적 지원 서비스 제공',
                      'NFT 등록을 통한 소유권 증명'
                    ]
                  },
                  {
                    title: '마케팅 지원',
                    icon: 'ri-megaphone-line',
                    content: [
                      '묘연 SNS 채널을 통한 작품 홍보',
                      '우수 작품 메인 페이지 노출',
                      '창작자 인터뷰 및 스토리 소개',
                      '이벤트 및 콘테스트 참여 기회',
                      '커뮤니티 활동을 통한 팬층 구축'
                    ]
                  }
                ].map((guide, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <i className={`${guide.icon} text-purple-600 text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {guide.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <i className="ri-check-line text-purple-600 mr-3 mt-0.5"></i>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">창작자 지원 프로그램</h3>
                <p className="text-gray-600 mb-6">
                  신규 창작자를 위한 특별 혜택과 기존 창작자를 위한 다양한 지원 프로그램을 제공합니다
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    지원 프로그램 신청
                  </button>
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-purple-600">
                    창작자 커뮤니티 가입
                  </button>
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
