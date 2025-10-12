
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface MemorialService {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  image: string;
  included: string[];
}

interface MemorialProduct {
  id: number;
  name: string;
  type: string;
  description: string;
  materials: string[];
  customization: string[];
  price: string;
  image: string;
}

export default function MemorialPage() {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '장례 서비스', '추모 용품', '기념품 제작', '상담 서비스'];
  
  const memorialServices: MemorialService[] = [
    {
      id: 1,
      title: '프리미엄 반려동물 장례 서비스',
      category: '장례 서비스',
      description: '사랑하는 반려동물과의 마지막 인사를 품격 있고 따뜻하게 도와드리는 종합 장례 서비스입니다.',
      features: ['24시간 접수', '전문 상담사', '개별 화장', '유골함 제공', '추도식 진행'],
      price: '350,000원~',
      duration: '당일 진행',
      image: 'https://readdy.ai/api/search-image?query=premium%20pet%20funeral%20service%20peaceful%20ceremony%20with%20flowers%20and%20memorial%20setup%20dignified%20farewell&width=400&height=250&seq=memorial1&orientation=landscape',
      included: ['시신 수습', '개별 화장', '유골함', '추도식', '상담 서비스']
    },
    {
      id: 2,
      title: '집사 추모 서비스',
      category: '장례 서비스',
      description: '반려동물을 먼저 떠나보낸 집사님들을 위한 특별한 추모 서비스입니다. 함께했던 소중한 추억을 기리는 시간을 제공합니다.',
      features: ['추모 공간 제공', '사진 전시', '추억 영상 제작', '추모 편지', '심리 상담'],
      price: '150,000원~',
      duration: '2-3시간',
      image: 'https://readdy.ai/api/search-image?query=pet%20owner%20memorial%20service%20peaceful%20remembrance%20ceremony%20with%20photos%20and%20flowers%20emotional%20support&width=400&height=250&seq=memorial2&orientation=landscape',
      included: ['추모 공간', '사진 전시', '추억 영상', '상담 서비스', '기념품']
    },
    {
      id: 3,
      title: '온라인 추모관 서비스',
      category: '상담 서비스',
      description: '언제 어디서나 접속할 수 있는 온라인 추모관을 만들어 영원히 기억할 수 있도록 도와드립니다.',
      features: ['개인 추모관', '사진/영상 업로드', '추모 메시지', '방명록', '추모일 알림'],
      price: '월 10,000원',
      duration: '영구 보관',
      image: 'https://readdy.ai/api/search-image?query=online%20pet%20memorial%20website%20digital%20remembrance%20platform%20with%20photos%20and%20messages%20virtual%20tribute&width=400&height=250&seq=memorial3&orientation=landscape',
      included: ['개인 페이지', '무제한 업로드', '방명록', '알림 서비스', '백업 서비스']
    },
    {
      id: 4,
      title: '반려동물 생전 기록 서비스',
      category: '기념품 제작',
      description: '건강할 때 미리 발자국, 털, 사진 등을 보관하여 소중한 기념품을 만드는 서비스입니다.',
      features: ['발자국 채취', '털 보관', '사진 촬영', '기념품 제작', '보관 서비스'],
      price: '80,000원~',
      duration: '1-2주',
      image: 'https://readdy.ai/api/search-image?query=pet%20life%20recording%20service%20paw%20prints%20fur%20collection%20photo%20session%20creating%20keepsakes%20while%20healthy&width=400&height=250&seq=memorial4&orientation=landscape',
      included: ['발자국 채취', '털 보관함', '사진 앨범', '기념품', '보관 서비스']
    },
    {
      id: 5,
      title: '펫로스 심리 상담',
      category: '상담 서비스',
      description: '반려동물을 잃은 슬픔을 극복할 수 있도록 전문 상담사가 도와드리는 심리 상담 서비스입니다.',
      features: ['전문 상담사', '개별 상담', '그룹 상담', '온라인 상담', '24시간 지원'],
      price: '회당 50,000원',
      duration: '50분',
      image: 'https://readdy.ai/api/search-image?query=pet%20loss%20grief%20counseling%20professional%20therapist%20helping%20pet%20owner%20emotional%20support%20healing&width=400&height=250&seq=memorial5&orientation=landscape',
      included: ['전문 상담', '자료 제공', '과제 지원', '응급 상담', '추후 관리']
    },
    {
      id: 6,
      title: '반려동물 수목장',
      category: '장례 서비스',
      description: '자연 속에서 영원히 쉴 수 있는 친환경적인 수목장 서비스입니다. 나무와 함께 자연으로 돌아갑니다.',
      features: ['친환경 매장', '수목 식재', '표지석 설치', '관리 서비스', '방문 가능'],
      price: '200,000원~',
      duration: '영구 관리',
      image: 'https://readdy.ai/api/search-image?query=pet%20tree%20burial%20service%20natural%20forest%20cemetery%20eco-friendly%20memorial%20with%20trees%20and%20markers&width=400&height=250&seq=memorial6&orientation=landscape',
      included: ['수목 식재', '표지석', '관리 서비스', '방문 안내', '연례 행사']
    },
    {
      id: 7,
      title: '추모 사진 촬영',
      category: '기념품 제작',
      description: '전문 사진작가가 반려동물의 마지막 모습을 아름답게 담아드리는 추모 사진 촬영 서비스입니다.',
      features: ['전문 촬영', '편집 서비스', '앨범 제작', '액자 제공', '디지털 파일'],
      price: '120,000원~',
      duration: '1-2시간',
      image: 'https://readdy.ai/api/search-image?query=professional%20pet%20memorial%20photography%20beautiful%20final%20portraits%20with%20flowers%20peaceful%20setting&width=400&height=250&seq=memorial7&orientation=landscape',
      included: ['촬영 서비스', '편집', '앨범', '액자', '디지털 파일']
    },
    {
      id: 8,
      title: '반려동물 장례식장 대관',
      category: '장례 서비스',
      description: '조용하고 품격 있는 공간에서 반려동물과의 마지막 시간을 보낼 수 있는 장례식장 대관 서비스입니다.',
      features: ['전용 공간', '음향 시설', '꽃 장식', '다과 서비스', '주차 공간'],
      price: '시간당 80,000원',
      duration: '2-4시간',
      image: 'https://readdy.ai/api/search-image?query=pet%20funeral%20hall%20rental%20peaceful%20ceremony%20space%20with%20flowers%20seating%20and%20memorial%20setup&width=400&height=250&seq=memorial8&orientation=landscape',
      included: ['공간 대관', '기본 장식', '음향 시설', '의자', '주차']
    }
  ];

  const memorialProducts: MemorialProduct[] = [
    {
      id: 1,
      name: '맞춤형 유골함',
      type: '추모 용품',
      description: '반려동물의 이름과 사진을 새긴 개인 맞춤형 유골함입니다. 다양한 소재와 디자인으로 제작 가능합니다.',
      materials: ['원목', '대리석', '세라믹', '금속', '크리스탈'],
      customization: ['이름 각인', '사진 인쇄', '생년월일', '추모 문구', '발자국'],
      price: '150,000원~',
      image: 'https://readdy.ai/api/search-image?query=custom%20pet%20urn%20with%20engraved%20name%20and%20photo%20beautiful%20memorial%20container%20various%20materials&width=300&height=300&seq=product1&orientation=squarish'
    },
    {
      id: 2,
      name: '추모 액자',
      type: '기념품 제작',
      description: '소중한 추억의 사진을 담은 고급 추모 액자입니다. LED 조명과 음성 메시지 기능이 포함됩니다.',
      materials: ['고급 원목', '강화유리', 'LED 조명', '스피커', '메모리'],
      customization: ['사진 선택', '음성 녹음', '조명 색상', '프레임 색상', '문구 각인'],
      price: '80,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20photo%20frame%20with%20LED%20lighting%20and%20audio%20message%20elegant%20wooden%20frame%20for%20pet%20memories&width=300&height=300&seq=product2&orientation=squarish'
    },
    {
      id: 3,
      name: '발자국 기념품',
      type: '기념품 제작',
      description: '반려동물의 발자국을 영구 보존하는 기념품입니다. 점토나 석고로 제작하여 오래도록 보관할 수 있습니다.',
      materials: ['특수 점토', '석고', '브론즈', '실버', '골드'],
      customization: ['발자국 크기', '베이스 색상', '이름 각인', '날짜 표시', '보호 케이스'],
      price: '60,000원~',
      image: 'https://readdy.ai/api/search-image?query=pet%20paw%20print%20keepsake%20clay%20impression%20bronze%20casting%20memorial%20with%20name%20engraving&width=300&height=300&seq=product3&orientation=squarish'
    },
    {
      id: 4,
      name: '추모 목걸이',
      type: '추모 용품',
      description: '반려동물의 털이나 유골 일부를 넣을 수 있는 추모 목걸이입니다. 언제나 함께할 수 있는 특별한 기념품입니다.',
      materials: ['스테인리스 스틸', '실버', '골드', '티타늄', '크리스탈'],
      customization: ['펜던트 모양', '각인 문구', '체인 길이', '보석 추가', '케이스 선택'],
      price: '120,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20pet%20necklace%20pendant%20with%20fur%20or%20ashes%20compartment%20elegant%20jewelry%20keepsake&width=300&height=300&seq=product4&orientation=squarish'
    },
    {
      id: 5,
      name: '추모 화분',
      type: '기념품 제작',
      description: '반려동물의 유골을 비료로 활용하여 나무나 꽃을 키울 수 있는 친환경 추모 화분입니다.',
      materials: ['생분해 화분', '특수 토양', '씨앗', '영양제', '안내서'],
      customization: ['식물 종류', '화분 색상', '이름표', '관리 가이드', '성장 기록지'],
      price: '45,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20plant%20pot%20with%20pet%20ashes%20as%20fertilizer%20eco-friendly%20remembrance%20growing%20tree%20or%20flowers&width=300&height=300&seq=product5&orientation=squarish'
    },
    {
      id: 6,
      name: '추모 앨범',
      type: '기념품 제작',
      description: '반려동물과의 소중한 추억을 담은 고급 추모 앨범입니다. 전문 디자이너가 레이아웃을 제작해드립니다.',
      materials: ['고급 용지', '가죽 표지', '금박 인쇄', '리본', '보호 케이스'],
      customization: ['표지 디자인', '페이지 수', '레이아웃', '문구 추가', '특수 인쇄'],
      price: '100,000원~',
      image: 'https://readdy.ai/api/search-image?query=luxury%20pet%20memorial%20photo%20album%20leather%20bound%20with%20gold%20foil%20printing%20professional%20layout%20design&width=300&height=300&seq=product6&orientation=squarish'
    },
    {
      id: 7,
      name: '추모 캔들',
      type: '추모 용품',
      description: '반려동물을 기리는 특별한 향이 담긴 추모 캔들입니다. 긴 시간 동안 타면서 평안한 분위기를 만들어줍니다.',
      materials: ['천연 왁스', '에센셜 오일', '면심지', '유리 용기', '뚜껑'],
      customization: ['향 선택', '용기 색상', '라벨 디자인', '연소 시간', '포장 옵션'],
      price: '35,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20candle%20for%20pets%20natural%20wax%20with%20essential%20oils%20peaceful%20remembrance%20atmosphere&width=300&height=300&seq=product7&orientation=squarish'
    },
    {
      id: 8,
      name: '추모 스톤',
      type: '추모 용품',
      description: '정원이나 특별한 장소에 놓을 수 있는 추모 스톤입니다. 자연석에 반려동물의 이름과 메시지를 새겨드립니다.',
      materials: ['화강암', '대리석', '사암', '현무암', '인조석'],
      customization: ['돌 크기', '각인 내용', '글씨체', '장식 무늬', '받침대'],
      price: '180,000원~',
      image: 'https://readdy.ai/api/search-image?query=pet%20memorial%20stone%20granite%20with%20engraved%20name%20and%20message%20garden%20remembrance%20marker&width=300&height=300&seq=product8&orientation=squarish'
    },
    {
      id: 9,
      name: '추모 쿠션',
      type: '기념품 제작',
      description: '반려동물의 사진이 프린트된 추모 쿠션입니다. 부드러운 소재로 제작되어 언제나 곁에 둘 수 있습니다.',
      materials: ['고급 원단', '메모리폼', '방수 커버', '지퍼', '세탁 가능'],
      customization: ['사진 선택', '크기 선택', '원단 색상', '메시지 추가', '모양 선택'],
      price: '55,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20cushion%20with%20pet%20photo%20printed%20soft%20fabric%20comfort%20keepsake%20for%20remembrance&width=300&height=300&seq=product9&orientation=squarish'
    },
    {
      id: 10,
      name: '추모 오르골',
      type: '기념품 제작',
      description: '반려동물이 좋아했던 음악이나 특별한 멜로디가 흘러나오는 추모 오르골입니다.',
      materials: ['원목', '금속 무브먼트', '벨벳 내부', '거울', '보석함'],
      customization: ['멜로디 선택', '내부 장식', '각인 문구', '크기 선택', '색상 선택'],
      price: '90,000원~',
      image: 'https://readdy.ai/api/search-image?query=memorial%20music%20box%20for%20pets%20wooden%20with%20melody%20mechanism%20velvet%20interior%20keepsake&width=300&height=300&seq=product10&orientation=squarish'
    }
  ];

  const filteredServices = selectedCategory === '전체' 
    ? memorialServices 
    : memorialServices.filter(service => service.category === selectedCategory);

  const filteredProducts = selectedCategory === '전체' 
    ? memorialProducts 
    : memorialProducts.filter(product => product.type === selectedCategory);

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Peaceful%20memorial%20service%20for%20pets%20dignified%20ceremony%20flowers%20candles%20remembrance%20gentle%20purple%20lighting&width=1200&height=600&seq=memorial-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(147, 51, 234, 0.8), 0 0 40px rgba(99, 102, 241, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              추모 서비스
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              사랑하는 반려동물과 집사님들을 위한 따뜻하고 품격 있는 추모 서비스를 제공합니다
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="space-button px-8 py-3 whitespace-nowrap">
                서비스 상담
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                24시간 접수
              </button>
            </div>
          </div>
        </section>

        {/* Service Info */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 접수</h3>
                <p className="text-gray-600 text-sm">언제든지 연락주시면 신속하게 도움을 드립니다</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-heart-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 상담</h3>
                <p className="text-gray-600 text-sm">경험 많은 전문 상담사가 세심하게 도와드립니다</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">품격 있는 서비스</h3>
                <p className="text-gray-600 text-sm">존중과 사랑으로 마지막까지 함께합니다</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'services', label: '추모 서비스', icon: 'ri-service-line' },
                { id: 'products', label: '추모 용품', icon: 'ri-gift-line' },
                { id: 'guide', label: '서비스 안내', icon: 'ri-book-line' },
                { id: 'contact', label: '상담 신청', icon: 'ri-phone-line' }
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

        {/* Memorial Services */}
        {activeTab === 'services' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">가격</span>
                          <div className="font-medium text-purple-600">{service.price}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">소요시간</span>
                          <div className="font-medium text-gray-900">{service.duration}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">주요 특징</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature) => (
                            <span key={feature} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-purple-600 text-xs">+{service.features.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">포함 사항</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {service.included.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-center">
                              <i className="ri-check-line text-purple-600 mr-2"></i>
                              {item}
                            </li>
                          ))}
                          {service.included.length > 3 && (
                            <li className="text-purple-600">+{service.included.length - 3}개 더</li>
                          )}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        상담 신청하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Memorial Products */}
        {activeTab === 'products' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {product.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">소재</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.materials.slice(0, 3).map((material) => (
                            <span key={material} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {material}
                            </span>
                          ))}
                          {product.materials.length > 3 && (
                            <span className="text-gray-600 text-xs">+{product.materials.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">맞춤 옵션</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.customization.slice(0, 2).map((option) => (
                            <span key={option} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                              {option}
                            </span>
                          ))}
                          {product.customization.length > 2 && (
                            <span className="text-purple-600 text-xs">+{product.customization.length - 2}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-purple-600">{product.price}</span>
                        <span className="text-sm text-gray-500">맞춤 제작</span>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                        주문 문의하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Guide */}
        {activeTab === 'guide' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 안내</h2>
                <p className="text-lg text-gray-600">
                  어려운 시간을 함께하며 도움을 드리는 방법을 안내해드립니다
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: '반려동물 장례 절차',
                    icon: 'ri-heart-line',
                    steps: [
                      '24시간 접수 전화 (02-1234-5678)',
                      '전문 상담사와 상담 및 일정 조율',
                      '시신 수습 및 임시 안치',
                      '장례 방식 선택 (화장/매장)',
                      '추도식 진행 (선택사항)',
                      '유골 인도 및 추모 용품 제공'
                    ]
                  },
                  {
                    title: '집사 추모 서비스',
                    icon: 'ri-user-heart-line',
                    steps: [
                      '온라인 또는 전화로 상담 신청',
                      '개별 상담을 통한 맞춤 서비스 계획',
                      '추모 공간 준비 및 사진/영상 편집',
                      '추모식 진행 및 추억 나누기',
                      '기념품 제작 및 전달',
                      '지속적인 심리 상담 지원'
                    ]
                  },
                  {
                    title: '추모 용품 주문',
                    icon: 'ri-gift-line',
                    steps: [
                      '온라인 카탈로그 확인 또는 매장 방문',
                      '제품 선택 및 맞춤 옵션 상담',
                      '디자인 시안 확인 및 승인',
                      '제작 진행 (1-3주 소요)',
                      '품질 검수 및 포장',
                      '배송 또는 직접 수령'
                    ]
                  },
                  {
                    title: '심리 상담 서비스',
                    icon: 'ri-mental-health-line',
                    steps: [
                      '초기 상담 신청 및 상담사 배정',
                      '개별 상담을 통한 상태 파악',
                      '맞춤형 치료 계획 수립',
                      '정기 상담 진행 (주 1-2회)',
                      '그룹 상담 참여 (선택사항)',
                      '회복 상태 점검 및 종료 상담'
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
                    
                    <div className="space-y-3">
                      {guide.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24시간 상담 서비스</h3>
                <p className="text-gray-600 mb-6">
                  언제든지 도움이 필요하시면 연락주세요. 전문 상담사가 24시간 대기하고 있습니다.
                </p>
                <div className="flex justify-center gap-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    전화 상담: 02-1234-5678
                  </button>
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-purple-600">
                    온라인 상담 신청
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">상담 신청</h2>
                <p className="text-lg text-gray-600">
                  어려운 시간을 함께하겠습니다. 언제든지 편안하게 연락주세요.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">상담 신청서</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="성함을 입력해주세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="010-0000-0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        서비스 유형 *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8">
                        <option>반려동물 장례 서비스</option>
                        <option>집사 추모 서비스</option>
                        <option>추모 용품 주문</option>
                        <option>심리 상담</option>
                        <option>기타 문의</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        반려동물 정보
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="이름"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="종류 (예: 고양이, 강아지)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        상황 설명
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="현재 상황이나 원하시는 서비스에 대해 자세히 알려주세요"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        희망 연락 시간
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8">
                        <option>언제든지</option>
                        <option>오전 (09:00-12:00)</option>
                        <option>오후 (12:00-18:00)</option>
                        <option>저녁 (18:00-21:00)</option>
                        <option>긴급 상황</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      상담 신청하기
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">연락처 정보</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-phone-line text-purple-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">24시간 상담 전화</div>
                          <div className="text-gray-600">02-1234-5678</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-mail-line text-purple-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">이메일 상담</div>
                          <div className="text-gray-600">memorial@mewnion.com</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-map-pin-line text-purple-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">추모관 위치</div>
                          <div className="text-gray-600">서울시 강남구 테헤란로 123</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <i className="ri-time-line text-purple-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">운영 시간</div>
                          <div className="text-gray-600">24시간 (연중무휴)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">서비스 현황</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">2,847</div>
                        <div className="text-sm text-gray-600">누적 서비스</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                        <div className="text-sm text-gray-600">만족도</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">24시간</div>
                        <div className="text-sm text-gray-600">상담 가능</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">15년</div>
                        <div className="text-sm text-gray-600">서비스 경험</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">긴급 상황 안내</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      반려동물이 위급한 상황이거나 즉시 도움이 필요하시면 
                      24시간 긴급 전화로 연락주세요.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                      긴급 상황: 02-1234-5678
                    </button>
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
