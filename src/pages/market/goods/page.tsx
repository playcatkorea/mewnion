
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function MarketGoodsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  
  const categories = [
    { id: 'all', label: '전체', icon: 'ri-apps-line' },
    { id: 'food', label: '사료/간식', icon: 'ri-bowl-line' },
    { id: 'toys', label: '장난감', icon: 'ri-basketball-line' },
    { id: 'furniture', label: '가구/용품', icon: 'ri-home-line' },
    { id: 'health', label: '건강/케어', icon: 'ri-heart-pulse-line' },
    { id: 'accessories', label: '액세서리', icon: 'ri-shirt-line' },
    { id: 'smart', label: '스마트 기기', icon: 'ri-smartphone-line' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'PLAYCAT 스마트 급식기 Pro',
      category: 'smart',
      price: 189000,
      originalPrice: 220000,
      rating: 4.8,
      reviews: 342,
      image: 'https://readdy.ai/api/search-image?query=PLAYCAT%20smart%20automatic%20pet%20feeder%20with%20app%20control%20modern%20design%20premium%20quality&width=300&height=300&seq=goods1&orientation=squarish',
      brand: 'PLAYCAT',
      description: 'AI 기반 맞춤 급식과 건강 모니터링이 가능한 프리미엄 스마트 급식기입니다.',
      features: ['앱 연동', 'AI 분석', '자동 급식', '건강 모니터링', '음성 녹음'],
      inStock: true,
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: '프리미엄 원목 캣타워 XL',
      category: 'furniture',
      price: 145000,
      rating: 4.7,
      reviews: 189,
      image: 'https://readdy.ai/api/search-image?query=premium%20wooden%20cat%20tower%20XL%20size%20natural%20wood%20multi-level%20cat%20furniture&width=300&height=300&seq=goods2&orientation=squarish',
      brand: '그린펫',
      description: '친환경 원목으로 제작된 대형 캣타워입니다. 안전하고 튼튼한 구조로 설계되었습니다.',
      features: ['친환경 원목', '안전 인증', '조립 간편', '대형 사이즈', '스크래치 포스트'],
      inStock: true,
      isBestseller: true
    },
    {
      id: 3,
      name: '자동 청소 고양이 화장실',
      category: 'furniture',
      price: 298000,
      originalPrice: 350000,
      rating: 4.6,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=automatic%20self-cleaning%20cat%20litter%20box%20modern%20design%20sensor%20technology&width=300&height=300&seq=goods3&orientation=squarish',
      brand: 'PLAYCAT',
      description: '센서 기반 자동 청소 시스템으로 항상 깨끗한 화장실을 유지합니다.',
      features: ['자동 청소', '냄새 제거', '센서 감지', '앱 알림', 'LED 표시'],
      inStock: true,
      isNew: true
    },
    {
      id: 4,
      name: '프리미엄 고양이 사료 2kg',
      category: 'food',
      price: 35000,
      rating: 4.9,
      reviews: 523,
      image: 'https://readdy.ai/api/search-image?query=premium%20cat%20food%20package%20high-quality%20ingredients%20natural%20nutrition%20for%20cats&width=300&height=300&seq=goods4&orientation=squarish',
      brand: '자연펫',
      description: '100% 천연 원료로 만든 프리미엄 고양이 사료입니다. 영양 균형이 완벽합니다.',
      features: ['천연 원료', '영양 균형', '기호성 우수', '소화 잘됨', '털 윤기'],
      inStock: true,
      isBestseller: true
    },
    {
      id: 5,
      name: '인터랙티브 전자 장난감',
      category: 'toys',
      price: 45000,
      rating: 4.5,
      reviews: 234,
      image: 'https://readdy.ai/api/search-image?query=interactive%20electronic%20cat%20toy%20with%20motion%20sensors%20automatic%20play%20engaging%20for%20cats&width=300&height=300&seq=goods5&orientation=squarish',
      brand: 'PLAYCAT',
      description: '고양이의 사냥 본능을 자극하는 인터랙티브 전자 장난감입니다.',
      features: ['모션 센서', '자동 작동', '다양한 모드', '충전식', '안전 소재'],
      inStock: true,
      isNew: true
    },
    {
      id: 6,
      name: '고양이 건강 간식 세트',
      category: 'food',
      price: 28000,
      rating: 4.8,
      reviews: 445,
      image: 'https://readdy.ai/api/search-image?query=healthy%20cat%20treats%20variety%20pack%20natural%20ingredients%20nutritious%20snacks%20for%20cats&width=300&height=300&seq=goods6&orientation=squarish',
      brand: '힐링펫',
      description: '건강에 좋은 천연 재료로 만든 고양이 간식 세트입니다.',
      features: ['천연 재료', '영양 보충', '치아 건강', '소화 도움', '다양한 맛'],
      inStock: true
    },
    {
      id: 7,
      name: '뮤틀러 AI 홈캠',
      category: 'smart',
      price: 125000,
      rating: 4.7,
      reviews: 178,
      image: 'https://readdy.ai/api/search-image?query=Mewtler%20AI%20home%20camera%20for%20pets%20monitoring%20with%20smart%20features%20app%20control&width=300&height=300&seq=goods7&orientation=squarish',
      brand: '뮤틀러',
      description: 'AI 기반 고양이 행동 분석과 건강 모니터링이 가능한 홈캠입니다.',
      features: ['AI 분석', '행동 인식', '건강 모니터링', '양방향 통화', '클라우드 저장'],
      inStock: true,
      isBestseller: true
    },
    {
      id: 8,
      name: '친환경 고양이 모래 10L',
      category: 'health',
      price: 18000,
      rating: 4.6,
      reviews: 367,
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20cat%20litter%20natural%20materials%20biodegradable%20clumping%20litter&width=300&height=300&seq=goods8&orientation=squarish',
      brand: '그린펫',
      description: '생분해 가능한 친환경 고양이 모래입니다. 응고력이 뛰어납니다.',
      features: ['친환경', '생분해', '강력 응고', '냄새 제거', '먼지 없음'],
      inStock: true
    },
    {
      id: 9,
      name: '고양이 목걸이 & 인식표 세트',
      category: 'accessories',
      price: 15000,
      rating: 4.4,
      reviews: 289,
      image: 'https://readdy.ai/api/search-image?query=cat%20collar%20with%20ID%20tag%20set%20colorful%20designs%20safety%20breakaway%20collar&width=300&height=300&seq=goods9&orientation=squarish',
      brand: '로컬펫',
      description: '안전한 세이프티 버클이 있는 고양이 목걸이와 인식표 세트입니다.',
      features: ['세이프티 버클', '인식표 포함', '다양한 색상', '조절 가능', '반사 소재'],
      inStock: true
    },
    {
      id: 10,
      name: '고양이 그루밍 도구 세트',
      category: 'health',
      price: 32000,
      rating: 4.7,
      reviews: 198,
      image: 'https://readdy.ai/api/search-image?query=cat%20grooming%20tools%20set%20brushes%20nail%20clippers%20professional%20pet%20care%20kit&width=300&height=300&seq=goods10&orientation=squarish',
      brand: '케어펫',
      description: '전문가용 고양이 그루밍 도구 세트입니다. 모든 필수 도구가 포함되어 있습니다.',
      features: ['전문가용', '완전 세트', '고품질 소재', '사용 편리', '보관 케이스'],
      inStock: true
    },
    {
      id: 11,
      name: '고양이 캐리어 백팩',
      category: 'accessories',
      price: 89000,
      rating: 4.5,
      reviews: 134,
      image: 'https://readdy.ai/api/search-image?query=cat%20carrier%20backpack%20transparent%20window%20comfortable%20travel%20bag%20for%20pets&width=300&height=300&seq=goods11&orientation=squarish',
      brand: '프리미엄펫',
      description: '투명창이 있는 고양이 전용 캐리어 백팩입니다. 여행과 이동에 편리합니다.',
      features: ['투명창', '통풍 우수', '편안한 착용', '안전 잠금', '세탁 가능'],
      inStock: true
    },
    {
      id: 12,
      name: '고양이 정수기',
      category: 'furniture',
      price: 65000,
      rating: 4.8,
      reviews: 256,
      image: 'https://readdy.ai/api/search-image?query=cat%20water%20fountain%20automatic%20pet%20water%20dispenser%20with%20filtration%20system&width=300&height=300&seq=goods12&orientation=squarish',
      brand: 'PLAYCAT',
      description: '필터링 시스템이 있는 고양이 전용 정수기입니다. 항상 신선한 물을 제공합니다.',
      features: ['필터링', '자동 순환', '조용한 모터', '대용량', 'LED 표시'],
      inStock: true,
      isBestseller: true
    },
    {
      id: 13,
      name: '고양이 스크래치 소파',
      category: 'furniture',
      price: 78000,
      rating: 4.6,
      reviews: 167,
      image: 'https://readdy.ai/api/search-image?query=cat%20scratching%20sofa%20furniture%20corrugated%20cardboard%20eco-friendly%20cat%20scratcher&width=300&height=300&seq=goods13&orientation=squarish',
      brand: '그린펫',
      description: '친환경 골판지로 만든 고양이 스크래치 소파입니다. 가구를 보호합니다.',
      features: ['친환경 소재', '가구 보호', '내구성', '교체 가능', '디자인 우수'],
      inStock: true
    },
    {
      id: 14,
      name: '고양이 치약 & 칫솔 세트',
      category: 'health',
      price: 22000,
      rating: 4.3,
      reviews: 145,
      image: 'https://readdy.ai/api/search-image?query=cat%20toothpaste%20and%20toothbrush%20set%20dental%20care%20for%20cats%20oral%20hygiene&width=300&height=300&seq=goods14&orientation=squarish',
      brand: '힐링펫',
      description: '고양이 전용 치약과 칫솔 세트입니다. 구강 건강을 지켜줍니다.',
      features: ['고양이 전용', '안전 성분', '맛있는 맛', '부드러운 칫솔', '구강 건강'],
      inStock: true
    },
    {
      id: 15,
      name: '고양이 옷 4계절 세트',
      category: 'accessories',
      price: 42000,
      rating: 4.2,
      reviews: 98,
      image: 'https://readdy.ai/api/search-image?query=cat%20clothing%204%20seasons%20set%20cute%20outfits%20for%20cats%20comfortable%20pet%20fashion&width=300&height=300&seq=goods15&orientation=squarish',
      brand: '공감펫',
      description: '사계절용 고양이 옷 세트입니다. 귀엽고 편안한 디자인입니다.',
      features: ['4계절용', '편안한 착용', '귀여운 디자인', '세탁 가능', '다양한 사이즈'],
      inStock: false
    },
    {
      id: 16,
      name: '고양이 발톱깎이 전문용',
      category: 'health',
      price: 25000,
      rating: 4.9,
      reviews: 312,
      image: 'https://readdy.ai/api/search-image?query=professional%20cat%20nail%20clippers%20sharp%20stainless%20steel%20grooming%20tool&width=300&height=300&seq=goods16&orientation=squarish',
      brand: '케어펫',
      description: '전문가용 고양이 발톱깎이입니다. 날카롭고 안전한 스테인리스 스틸 제작.',
      features: ['전문가용', '스테인리스 스틸', '안전 설계', '인체공학적', '평생 보증'],
      inStock: true,
      isBestseller: true
    },
    {
      id: 17,
      name: '고양이 터널 놀이터',
      category: 'toys',
      price: 35000,
      rating: 4.7,
      reviews: 203,
      image: 'https://readdy.ai/api/search-image?query=cat%20tunnel%20playground%20collapsible%20play%20tunnel%20with%20multiple%20entrances%20for%20cats&width=300&height=300&seq=goods17&orientation=squarish',
      brand: '해피펫',
      description: '접을 수 있는 고양이 터널 놀이터입니다. 여러 입구로 재미있게 놀 수 있습니다.',
      features: ['접이식', '여러 입구', '바스락 소리', '세탁 가능', '안전 소재'],
      inStock: true
    },
    {
      id: 18,
      name: '고양이 자동 급수기',
      category: 'smart',
      price: 95000,
      rating: 4.6,
      reviews: 187,
      image: 'https://readdy.ai/api/search-image?query=automatic%20cat%20water%20dispenser%20smart%20sensor%20activated%20pet%20water%20fountain&width=300&height=300&seq=goods18&orientation=squarish',
      brand: '스마트펫',
      description: '센서로 작동하는 자동 급수기입니다. 고양이가 다가가면 자동으로 물이 나옵니다.',
      features: ['센서 작동', '자동 급수', '절전 모드', '필터 교체', '조용한 작동'],
      inStock: true
    },
    {
      id: 19,
      name: '고양이 마사지 브러시',
      category: 'health',
      price: 19000,
      rating: 4.8,
      reviews: 278,
      image: 'https://readdy.ai/api/search-image?query=cat%20massage%20brush%20soft%20bristles%20grooming%20tool%20relaxing%20for%20cats&width=300&height=300&seq=goods19&orientation=squarish',
      brand: '러브펫',
      description: '마사지 효과가 있는 고양이 브러시입니다. 털 정리와 마사지를 동시에.',
      features: ['마사지 효과', '부드러운 모', '털 제거', '스트레스 완화', '인체공학적'],
      inStock: true
    },
    {
      id: 20,
      name: '고양이 GPS 트래커',
      category: 'smart',
      price: 85000,
      rating: 4.4,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=cat%20GPS%20tracker%20small%20lightweight%20device%20for%20pet%20location%20monitoring&width=300&height=300&seq=goods20&orientation=squarish',
      brand: '테크펫',
      description: '소형 경량 고양이 GPS 트래커입니다. 실시간 위치 추적이 가능합니다.',
      features: ['실시간 추적', '소형 경량', '방수 기능', '장시간 배터리', '앱 연동'],
      inStock: true
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'reviews': return b.reviews - a.reviews;
      default: return 0;
    }
  });

  const priceFilteredProducts = priceRange === 'all' 
    ? sortedProducts 
    : sortedProducts.filter(product => {
        switch (priceRange) {
          case 'under-30': return product.price < 30000;
          case '30-100': return product.price >= 30000 && product.price < 100000;
          case '100-200': return product.price >= 100000 && product.price < 200000;
          case 'over-200': return product.price >= 200000;
          default: return true;
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20cat%20products%20supplies%20toys%20food%20accessories%20colorful%20display%20modern%20pet%20store&width=1200&height=600&seq=goods-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              고양이용품
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              사랑하는 고양이를 위한 최고 품질의 용품들을 만나보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="space-button px-8 py-3 whitespace-nowrap">
                베스트 상품 보기
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                신상품 보기
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">2,500+</div>
                <div className="text-gray-600 text-sm">상품 수</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 mb-1">98%</div>
                <div className="text-gray-600 text-sm">만족도</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">24시간</div>
                <div className="text-gray-600 text-sm">배송</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">무료</div>
                <div className="text-gray-600 text-sm">반품/교환</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 py-4 px-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === category.id
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className={category.icon}></i>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="py-6 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">가격대:</span>
                  <select 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 pr-6"
                  >
                    <option value="all">전체</option>
                    <option value="under-30">3만원 미만</option>
                    <option value="30-100">3-10만원</option>
                    <option value="100-200">10-20만원</option>
                    <option value="over-200">20만원 이상</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  총 {priceFilteredProducts.length}개 상품
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">정렬:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 pr-6"
                  >
                    <option value="popular">인기순</option>
                    <option value="price-low">낮은 가격순</option>
                    <option value="price-high">높은 가격순</option>
                    <option value="rating">평점순</option>
                    <option value="reviews">리뷰순</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {priceFilteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          NEW
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                          BEST
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                          SALE
                        </span>
                      )}
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium">
                          품절
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i}
                            className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-xs`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature) => (
                          <span key={feature} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-gray-500 text-xs">+{product.features.length - 2}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {product.originalPrice && (
                          <div className="text-xs text-gray-400 line-through">
                            {product.originalPrice.toLocaleString()}원
                          </div>
                        )}
                        <div className="text-lg font-bold text-gray-900">
                          {product.price.toLocaleString()}원
                        </div>
                      </div>
                      {product.originalPrice && (
                        <div className="text-xs text-red-500 font-medium">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                        </div>
                      )}
                    </div>
                    
                    <button 
                      className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        product.inStock
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? '장바구니 담기' : '품절'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      page === 1
                        ? 'bg-green-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">묘연 마켓의 특별함</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: 'ri-shield-check-line',
                  title: '품질 보증',
                  description: '엄선된 브랜드와 검증된 제품만 판매합니다'
                },
                {
                  icon: 'ri-truck-line',
                  title: '빠른 배송',
                  description: '당일 발송으로 빠르게 받아보세요'
                },
                {
                  icon: 'ri-customer-service-line',
                  title: '전문 상담',
                  description: '펫 전문가의 상품 추천과 상담'
                },
                {
                  icon: 'ri-heart-line',
                  title: '사회공헌',
                  description: '구매 금액의 일부가 길고양이 구조에 기부됩니다'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-green-600 text-2xl`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
