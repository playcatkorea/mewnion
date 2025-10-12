
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

interface SponsorProduct {
  id: number;
  name: string;
  company: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  description: string;
  sponsorAmount: number;
  beneficiary: string;
  rating: number;
  reviews: number;
  tags: string[];
}

interface CartItem extends SponsorProduct {
  quantity: number;
}

const MarketSponsor = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [sortBy, setSortBy] = useState('인기순');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const categories = ['전체', '사료/간식', '장난감', '용품', '의료용품', '생활용품'];
  const sortOptions = ['인기순', '후원금액순', '할인율순', '가격낮은순', '가격높은순'];

  const sponsorProducts: SponsorProduct[] = [
    {
      id: 1,
      name: '프리미엄 연어 사료 2kg',
      company: '펫프렌즈',
      category: '사료/간식',
      price: 28000,
      originalPrice: 35000,
      discount: 20,
      image: 'https://readdy.ai/api/search-image?query=premium%20salmon%20cat%20food%20bag%20with%20cute%20cat%20illustration%2C%20clean%20white%20background%2C%20product%20photography%20style%2C%20high%20quality%20pet%20food%20packaging&width=300&height=300&seq=1&orientation=squarish',
      description: '신선한 연어로 만든 프리미엄 고양이 사료',
      sponsorAmount: 7000,
      beneficiary: '서울 길고양이 보호소',
      rating: 4.8,
      reviews: 156,
      tags: ['무첨가', '연어', '프리미엄']
    },
    {
      id: 2,
      name: '자동 급수기 스마트',
      company: '펫테크',
      category: '용품',
      price: 89000,
      originalPrice: 120000,
      discount: 26,
      image: 'https://readdy.ai/api/search-image?query=smart%20automatic%20pet%20water%20fountain%20dispenser%2C%20modern%20white%20design%2C%20clean%20background%2C%20product%20photography%20for%20cats&width=300&height=300&seq=2&orientation=squarish',
      description: 'IoT 기능이 탑재된 스마트 자동 급수기',
      sponsorAmount: 31000,
      beneficiary: '부산 유기동물 센터',
      rating: 4.9,
      reviews: 89,
      tags: ['스마트', 'IoT', '자동']
    },
    {
      id: 3,
      name: '천연 캣닢 장난감 세트',
      company: '네이처펫',
      category: '장난감',
      price: 15000,
      originalPrice: 20000,
      discount: 25,
      image: 'https://readdy.ai/api/search-image?query=natural%20catnip%20toy%20set%20with%20colorful%20mice%20and%20balls%2C%20organic%20cat%20toys%2C%20clean%20white%20background%2C%20playful%20design&width=300&height=300&seq=3&orientation=squarish',
      description: '100% 천연 캣닢으로 만든 안전한 장난감',
      sponsorAmount: 5000,
      beneficiary: '대구 고양이 쉼터',
      rating: 4.7,
      reviews: 203,
      tags: ['천연', '캣닢', '안전']
    },
    {
      id: 4,
      name: '프로바이오틱스 영양제',
      company: '헬시펫',
      category: '의료용품',
      price: 45000,
      originalPrice: 55000,
      discount: 18,
      image: 'https://readdy.ai/api/search-image?query=probiotic%20supplement%20bottle%20for%20cats%2C%20medical%20grade%20pet%20nutrition%2C%20clean%20pharmaceutical%20packaging%20design&width=300&height=300&seq=4&orientation=squarish',
      description: '장 건강을 위한 고양이 전용 프로바이오틱스',
      sponsorAmount: 10000,
      beneficiary: '인천 동물병원 후원',
      rating: 4.6,
      reviews: 78,
      tags: ['건강', '프로바이오틱스', '영양제']
    },
    {
      id: 5,
      name: '온열 방석 프리미엄',
      company: '컴포트펫',
      category: '생활용품',
      price: 65000,
      originalPrice: 80000,
      discount: 19,
      image: 'https://readdy.ai/api/search-image?query=heated%20pet%20mat%20cushion%2C%20cozy%20warm%20bed%20for%20cats%2C%20soft%20fabric%20design%2C%20comfort%20pet%20product%20photography&width=300&height=300&seq=5&orientation=squarish',
      description: '겨울철 필수 온열 방석, 온도 조절 가능',
      sponsorAmount: 15000,
      beneficiary: '광주 길고양이 급식소',
      rating: 4.8,
      reviews: 134,
      tags: ['온열', '겨울용품', '온도조절']
    },
    {
      id: 6,
      name: '유기농 참치 캔 12개입',
      company: '오가닉펫',
      category: '사료/간식',
      price: 36000,
      originalPrice: 48000,
      discount: 25,
      image: 'https://readdy.ai/api/search-image?query=organic%20tuna%20cans%20for%20cats%2C%2012%20pack%20set%2C%20premium%20pet%20food%20packaging%2C%20clean%20product%20photography&width=300&height=300&seq=6&orientation=squarish',
      description: '유기농 참치로 만든 프리미엄 습식 사료',
      sponsorAmount: 12000,
      beneficiary: '전주 동물 구조단',
      rating: 4.9,
      reviews: 267,
      tags: ['유기농', '참치', '습식사료']
    },
    {
      id: 7,
      name: '스크래처 타워 대형',
      company: '플레이캣',
      category: '장난감',
      price: 120000,
      originalPrice: 150000,
      discount: 20,
      image: 'https://readdy.ai/api/search-image?query=large%20cat%20scratching%20tower%20post%2C%20multi%20level%20cat%20furniture%2C%20modern%20design%20for%20indoor%20cats&width=300&height=300&seq=7&orientation=squarish',
      description: '대형 고양이를 위한 튼튼한 스크래처 타워',
      sponsorAmount: 30000,
      beneficiary: '울산 유기묘 보호소',
      rating: 4.7,
      reviews: 92,
      tags: ['대형', '스크래처', '튼튼함']
    },
    {
      id: 8,
      name: '자동 모래 청소기',
      company: '클린펫',
      category: '용품',
      price: 180000,
      originalPrice: 220000,
      discount: 18,
      image: 'https://readdy.ai/api/search-image?query=automatic%20cat%20litter%20box%20cleaner%2C%20modern%20pet%20hygiene%20device%2C%20smart%20home%20pet%20product&width=300&height=300&seq=8&orientation=squarish',
      description: '자동으로 모래를 청소해주는 스마트 화장실',
      sponsorAmount: 40000,
      beneficiary: '창원 고양이 카페',
      rating: 4.5,
      reviews: 45,
      tags: ['자동', '청소', '스마트']
    },
    {
      id: 9,
      name: '면역력 강화 간식',
      company: '이뮨펫',
      category: '사료/간식',
      price: 22000,
      originalPrice: 28000,
      discount: 21,
      image: 'https://readdy.ai/api/search-image?query=immunity%20boosting%20cat%20treats%2C%20healthy%20pet%20snacks%20packaging%2C%20veterinary%20approved%20cat%20food&width=300&height=300&seq=9&orientation=squarish',
      description: '면역력 강화에 도움되는 기능성 간식',
      sponsorAmount: 6000,
      beneficiary: '천안 동물병원',
      rating: 4.6,
      reviews: 178,
      tags: ['면역력', '기능성', '건강']
    },
    {
      id: 10,
      name: 'LED 레이저 포인터',
      company: '펀펫',
      category: '장난감',
      price: 18000,
      originalPrice: 25000,
      discount: 28,
      image: 'https://readdy.ai/api/search-image?query=LED%20laser%20pointer%20toy%20for%20cats%2C%20interactive%20pet%20toy%2C%20modern%20design%20cat%20entertainment%20device&width=300&height=300&seq=10&orientation=squarish',
      description: '고양이 운동을 위한 LED 레이저 포인터',
      sponsorAmount: 7000,
      beneficiary: '안산 길고양이 보호단',
      rating: 4.4,
      reviews: 156,
      tags: ['LED', '운동', '인터랙티브']
    },
    {
      id: 11,
      name: '관절 건강 영양제',
      company: '조인트케어',
      category: '의료용품',
      price: 52000,
      originalPrice: 65000,
      discount: 20,
      image: 'https://readdy.ai/api/search-image?query=joint%20health%20supplement%20for%20senior%20cats%2C%20veterinary%20grade%20pet%20medicine%2C%20professional%20packaging&width=300&height=300&seq=11&orientation=squarish',
      description: '노령묘를 위한 관절 건강 영양제',
      sponsorAmount: 13000,
      beneficiary: '수원 시니어묘 보호소',
      rating: 4.8,
      reviews: 89,
      tags: ['관절건강', '노령묘', '영양제']
    },
    {
      id: 12,
      name: '캣타워 원목 프리미엄',
      company: '우드펫',
      category: '용품',
      price: 250000,
      originalPrice: 320000,
      discount: 22,
      image: 'https://readdy.ai/api/search-image?query=premium%20wooden%20cat%20tower%20furniture%2C%20natural%20wood%20cat%20tree%2C%20luxury%20pet%20furniture%20design&width=300&height=300&seq=12&orientation=squarish',
      description: '천연 원목으로 제작된 프리미엄 캣타워',
      sponsorAmount: 70000,
      beneficiary: '성남 고양이 쉼터',
      rating: 4.9,
      reviews: 67,
      tags: ['원목', '프리미엄', '천연소재']
    },
    {
      id: 13,
      name: '치석 제거 덴탈 간식',
      company: '덴탈펫',
      category: '사료/간식',
      price: 19000,
      originalPrice: 24000,
      discount: 21,
      image: 'https://readdy.ai/api/search-image?query=dental%20care%20treats%20for%20cats%2C%20teeth%20cleaning%20pet%20snacks%2C%20veterinary%20dental%20health%20product&width=300&height=300&seq=13&orientation=squarish',
      description: '치석 제거와 구강 건강을 위한 덴탈 간식',
      sponsorAmount: 5000,
      beneficiary: '평택 동물병원',
      rating: 4.5,
      reviews: 198,
      tags: ['덴탈케어', '치석제거', '구강건강']
    },
    {
      id: 14,
      name: '스마트 사료 급식기',
      company: '오토펫',
      category: '용품',
      price: 95000,
      originalPrice: 125000,
      discount: 24,
      image: 'https://readdy.ai/api/search-image?query=smart%20automatic%20pet%20feeder%2C%20programmable%20cat%20food%20dispenser%2C%20modern%20pet%20technology%20device&width=300&height=300&seq=14&orientation=squarish',
      description: '스마트폰으로 제어 가능한 자동 급식기',
      sponsorAmount: 30000,
      beneficiary: '의정부 유기묘 센터',
      rating: 4.7,
      reviews: 112,
      tags: ['스마트', '자동급식', '앱제어']
    },
    {
      id: 15,
      name: '털빠짐 방지 브러시',
      company: '그루밍펫',
      category: '생활용품',
      price: 32000,
      originalPrice: 40000,
      discount: 20,
      image: 'https://readdy.ai/api/search-image?query=professional%20cat%20grooming%20brush%2C%20anti-shedding%20pet%20brush%2C%20quality%20pet%20grooming%20tool&width=300&height=300&seq=15&orientation=squarish',
      description: '털빠짐을 효과적으로 줄여주는 전문 브러시',
      sponsorAmount: 8000,
      beneficiary: '고양 고양이 미용실',
      rating: 4.6,
      reviews: 234,
      tags: ['그루밍', '털빠짐방지', '전문용']
    },
    {
      id: 16,
      name: '소화기능 개선 사료',
      company: '다이제스트펫',
      category: '사료/간식',
      price: 42000,
      originalPrice: 55000,
      discount: 24,
      image: 'https://readdy.ai/api/search-image?query=digestive%20health%20cat%20food%2C%20sensitive%20stomach%20pet%20nutrition%2C%20veterinary%20diet%20cat%20food%20packaging&width=300&height=300&seq=16&orientation=squarish',
      description: '소화가 예민한 고양이를 위한 특수 사료',
      sponsorAmount: 13000,
      beneficiary: '파주 동물병원',
      rating: 4.7,
      reviews: 145,
      tags: ['소화기능', '예민한위', '특수사료']
    },
    {
      id: 17,
      name: '캣닢 스프레이 천연',
      company: '아로마펫',
      category: '장난감',
      price: 12000,
      originalPrice: 16000,
      discount: 25,
      image: 'https://readdy.ai/api/search-image?query=natural%20catnip%20spray%20bottle%2C%20organic%20cat%20attractant%2C%20safe%20pet%20aromatherapy%20product&width=300&height=300&seq=17&orientation=squarish',
      description: '100% 천연 캣닢으로 만든 스프레이',
      sponsorAmount: 4000,
      beneficiary: '김포 길고양이 급식소',
      rating: 4.4,
      reviews: 187,
      tags: ['천연', '캣닢', '스프레이']
    },
    {
      id: 18,
      name: '항균 모래 프리미엄',
      company: '클린샌드',
      category: '생활용품',
      price: 28000,
      originalPrice: 35000,
      discount: 20,
      image: 'https://readdy.ai/api/search-image?query=premium%20antibacterial%20cat%20litter%2C%20clean%20white%20cat%20sand%2C%20hygienic%20pet%20litter%20packaging&width=300&height=300&seq=18&orientation=squarish',
      description: '항균 기능이 있는 프리미엄 고양이 모래',
      sponsorAmount: 7000,
      beneficiary: '하남 고양이 보호소',
      rating: 4.8,
      reviews: 298,
      tags: ['항균', '프리미엄', '위생']
    },
    {
      id: 19,
      name: '스트레스 완화 디퓨저',
      company: '릴렉스펫',
      category: '의료용품',
      price: 38000,
      originalPrice: 48000,
      discount: 21,
      image: 'https://readdy.ai/api/search-image?query=stress%20relief%20diffuser%20for%20cats%2C%20calming%20pet%20aromatherapy%20device%2C%20anxiety%20reduction%20pet%20product&width=300&height=300&seq=19&orientation=squarish',
      description: '고양이 스트레스 완화를 위한 아로마 디퓨저',
      sponsorAmount: 10000,
      beneficiary: '남양주 동물행동치료센터',
      rating: 4.5,
      reviews: 76,
      tags: ['스트레스완화', '아로마', '심리치료']
    },
    {
      id: 20,
      name: '인터랙티브 퍼즐 토이',
      company: '브레인펫',
      category: '장난감',
      price: 35000,
      originalPrice: 45000,
      discount: 22,
      image: 'https://readdy.ai/api/search-image?query=interactive%20puzzle%20toy%20for%20cats%2C%20brain%20training%20pet%20game%2C%20educational%20cat%20toy%20design&width=300&height=300&seq=20&orientation=squarish',
      description: '고양이 두뇌 발달을 위한 인터랙티브 퍼즐',
      sponsorAmount: 10000,
      beneficiary: '구리 고양이 놀이터',
      rating: 4.6,
      reviews: 123,
      tags: ['두뇌발달', '퍼즐', '교육용']
    }
  ];

  const filteredProducts = sponsorProducts.filter(product => 
    selectedCategory === '전체' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case '후원금액순':
        return b.sponsorAmount - a.sponsorAmount;
      case '할인율순':
        return b.discount - a.discount;
      case '가격낮은순':
        return a.price - b.price;
      case '가격높은순':
        return b.price - a.price;
      default:
        return b.rating - a.rating;
    }
  });

  // 장바구니에 추가
  const addToCart = (product: SponsorProduct) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 2000);
  };

  // 장바구니에서 제거
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // 수량 변경
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // 총 금액 계산
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalSponsor = cart.reduce((sum, item) => sum + (item.sponsorAmount * item.quantity), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen space-bg">
      <Header />

      {/* 장바구니 버튼 (고정) */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-8 right-8 bg-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-purple-700 transition-all z-40 flex items-center justify-center"
      >
        <i className="ri-shopping-cart-line text-2xl"></i>
        {cartItemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
            {cartItemsCount}
          </span>
        )}
      </button>

      {/* 성공 알림 */}
      {showSuccessModal && (
        <div className="fixed top-24 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <i className="ri-checkbox-circle-fill text-2xl"></i>
            <span className="font-medium">장바구니에 추가되었습니다!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Corporate%20sponsorship%20and%20charitable%20shopping%2C%20business%20partnership%20with%20heart%2C%20purple%20and%20pink%20lighting%2C%20modern%20retail%20environment%20supporting%20cats&width=1200&height=600&seq=sponsor-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>후원기업 제품</h1>
          <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            구매할 때마다 길고양이들에게 도움이 되는 착한 소비
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-heart-fill mr-2"></i>
              구매 시 자동 후원
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-shield-check-fill mr-2"></i>
              검증된 후원기업
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-gift-fill mr-2"></i>
              특별 할인 혜택
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm pr-8 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    후원 {product.sponsorAmount.toLocaleString()}원
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-purple-600 font-medium mb-1">{product.company}</div>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price.toLocaleString()}원
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice.toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600 mb-3">
                    <i className="ri-heart-fill text-red-500 mr-1"></i>
                    후원처: {product.beneficiary}
                  </div>
                  
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                  >
                    <i className="ri-shopping-cart-line"></i>
                    구매하고 후원하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">후원기업 제품으로 만든 변화</h2>
            <p className="text-lg opacity-90">여러분의 착한 소비가 만들어낸 실제 성과입니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2,847</div>
              <div className="text-lg opacity-90">구조된 길고양이</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,523</div>
              <div className="text-lg opacity-90">성공한 입양</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">89,234,000</div>
              <div className="text-lg opacity-90">누적 후원금액 (원)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156</div>
              <div className="text-lg opacity-90">참여 후원기업</div>
            </div>
          </div>
        </div>
      </section>

      {/* 장바구니 모달 */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* 헤더 */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <i className="ri-shopping-cart-line"></i>
                장바구니
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* 장바구니 내용 */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 text-lg">장바구니가 비어있습니다</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.company}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-purple-600">
                            {item.price.toLocaleString()}원
                          </span>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                            후원 {item.sponsorAmount.toLocaleString()}원
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <i className="ri-subtract-line"></i>
                            </button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <i className="ri-add-line"></i>
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            <i className="ri-delete-bin-line"></i> 삭제
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">
                          {(item.price * item.quantity).toLocaleString()}원
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 하단 요약 & 결제 */}
            {cart.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>상품 금액</span>
                    <span className="font-medium">{totalPrice.toLocaleString()}원</span>
                  </div>
                  <div className="flex items-center justify-between text-purple-600 font-medium">
                    <span className="flex items-center gap-1">
                      <i className="ri-heart-fill"></i>
                      총 후원 금액
                    </span>
                    <span>{totalSponsor.toLocaleString()}원</span>
                  </div>
                  <div className="border-t pt-3 flex items-center justify-between text-lg font-bold">
                    <span>총 결제 금액</span>
                    <span className="text-purple-600">{totalPrice.toLocaleString()}원</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-800 flex items-center gap-2">
                    <i className="ri-information-line"></i>
                    <span>
                      이 구매로 <strong>{totalSponsor.toLocaleString()}원</strong>이 길고양이들을 위해 후원됩니다!
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    alert(`총 ${totalPrice.toLocaleString()}원 결제가 완료되었습니다!\n${totalSponsor.toLocaleString()}원이 후원되었습니다. 감사합니다! 💜`);
                    setCart([]);
                    setShowCart(false);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  {totalPrice.toLocaleString()}원 결제하기
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MarketSponsor;
