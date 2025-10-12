
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { goToContact, goToRoute, openExternal } from '../../utils/navigation';

interface Brand {
  id: number;
  name: string;
  category: string;
  description: string;
  mission: string;
  products: string[];
  certifications: string[];
  socialImpact: string;
  image: string;
  website: string;
  established: string;
  location: string;
}

export default function BrandPage() {
  const [activeTab, setActiveTab] = useState('brands');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', 'PLAYCAT', 'PLAYDOG', 'PLAYZOO', '친환경 브랜드', '사회적 기업', '로컬 브랜드'];
  
  const brands: Brand[] = [
    {
      id: 1,
      name: 'PLAYCAT',
      category: 'PLAYCAT',
      description: '고양이의 행복한 놀이와 건강한 생활을 위한 혁신적인 제품을 만드는 브랜드입니다.',
      mission: '모든 고양이가 행복하고 건강한 삶을 살 수 있도록 최고 품질의 제품을 제공합니다.',
      products: ['스마트 급식기', '자동 화장실', '인터랙티브 장난감', '건강 모니터링 디바이스', '프리미엄 사료'],
      certifications: ['ISO 9001', '친환경 인증', '동물복지 인증', 'KC 안전인증'],
      socialImpact: '매출의 5%를 길고양이 구조 활동에 기부하며, 제품 판매 수익으로 보호소를 지원합니다.',
      image: 'https://readdy.ai/api/search-image?query=PLAYCAT%20brand%20premium%20cat%20products%20smart%20feeding%20devices%20and%20toys%20modern%20design&width=400&height=250&seq=brand1&orientation=landscape',
      website: 'www.playcat.co.kr',
      established: '2019',
      location: '서울시 강남구'
    },
    {
      id: 2,
      name: 'PLAYDOG',
      category: 'PLAYDOG',
      description: '반려견의 즐거운 놀이와 건강 관리를 위한 전문 브랜드입니다.',
      mission: '반려견과 보호자의 더 나은 관계를 위한 혁신적인 솔루션을 제공합니다.',
      products: ['스마트 산책용품', '훈련 도구', '건강 간식', '놀이 장난감', '케어 용품'],
      certifications: ['ISO 9001', 'HACCP', '동물복지 인증', 'KC 안전인증'],
      socialImpact: '유기견 보호소와 파트너십을 맺고 입양 프로그램을 지원합니다.',
      image: 'https://readdy.ai/api/search-image?query=PLAYDOG%20brand%20premium%20dog%20products%20smart%20walking%20gear%20and%20training%20tools%20modern%20design&width=400&height=250&seq=brand2&orientation=landscape',
      website: 'www.playdog.co.kr',
      established: '2020',
      location: '부산시 해운대구'
    },
    {
      id: 3,
      name: 'PLAYZOO',
      category: 'PLAYZOO',
      description: '다양한 반려동물을 위한 종합 케어 브랜드입니다.',
      mission: '모든 반려동물이 행복한 삶을 살 수 있도록 포괄적인 케어 솔루션을 제공합니다.',
      products: ['소동물 용품', '조류 케어', '파충류 용품', '수족관 용품', '종합 사료'],
      certifications: ['ISO 14001', '친환경 인증', '동물복지 인증'],
      socialImpact: '야생동물 보호 활동을 지원하고 생태계 보전에 기여합니다.',
      image: 'https://readdy.ai/api/search-image?query=PLAYZOO%20brand%20comprehensive%20pet%20care%20products%20for%20various%20animals%20birds%20reptiles%20aquarium&width=400&height=250&seq=brand3&orientation=landscape',
      website: 'www.playzoo.co.kr',
      established: '2021',
      location: '대구시 중구'
    },
    {
      id: 4,
      name: '그린펫',
      category: '친환경 브랜드',
      description: '지속가능한 소재로 만든 친환경 반려동물 용품 브랜드입니다.',
      mission: '환경을 생각하는 반려동물 용품으로 지구와 동물 모두를 보호합니다.',
      products: ['생분해 배변봉투', '대나무 식기', '재활용 장난감', '천연 샴푸', '유기농 간식'],
      certifications: ['친환경 인증', '유기농 인증', 'FSC 인증', '비건 인증'],
      socialImpact: '플라스틱 사용량 감소와 환경 보호 캠페인을 진행합니다.',
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20pet%20products%20made%20from%20sustainable%20materials%20bamboo%20toys%20biodegradable%20bags&width=400&height=250&seq=brand4&orientation=landscape',
      website: 'www.greenpet.co.kr',
      established: '2018',
      location: '제주시'
    },
    {
      id: 5,
      name: '착한동물병원',
      category: '사회적 기업',
      description: '저소득층 반려동물 의료비 지원과 길고양이 치료를 전문으로 하는 동물병원입니다.',
      mission: '경제적 어려움으로 치료받지 못하는 동물들에게 의료 서비스를 제공합니다.',
      products: ['저가 진료 서비스', '무료 중성화 수술', '응급 치료', '예방 접종', '건강 검진'],
      certifications: ['사회적기업 인증', '수의사회 인증', '동물복지 인증'],
      socialImpact: '연간 1,000마리 이상의 길고양이 무료 치료와 500건의 저소득층 지원을 실시합니다.',
      image: 'https://readdy.ai/api/search-image?query=social%20enterprise%20veterinary%20clinic%20helping%20low-income%20pet%20owners%20and%20street%20cats%20medical%20care&width=400&height=250&seq=brand5&orientation=landscape',
      website: 'www.goodvet.co.kr',
      established: '2017',
      location: '서울시 마포구'
    },
    {
      id: 6,
      name: '로컬펫',
      category: '로컬 브랜드',
      description: '지역 특산품을 활용한 수제 반려동물 간식과 용품을 만드는 로컬 브랜드입니다.',
      mission: '지역 경제 활성화와 반려동물의 건강을 동시에 추구합니다.',
      products: ['지역 특산 간식', '수제 장난감', '천연 케어 용품', '맞춤형 사료', '핸드메이드 액세서리'],
      certifications: ['지역특산품 인증', '수제품 인증', '천연 원료 인증'],
      socialImpact: '지역 농가와 협력하여 상생 경제를 만들고 일자리를 창출합니다.',
      image: 'https://readdy.ai/api/search-image?query=local%20pet%20brand%20handmade%20treats%20and%20toys%20using%20regional%20specialties%20artisan%20crafted%20products&width=400&height=250&seq=brand6&orientation=landscape',
      website: 'www.localpet.co.kr',
      established: '2020',
      location: '전주시 완산구'
    },
    {
      id: 7,
      name: '힐링펫',
      category: '사회적 기업',
      description: '반려동물을 통한 치료와 힐링 프로그램을 제공하는 사회적 기업입니다.',
      mission: '동물매개치료를 통해 사회적 약자들의 정신건강 회복을 돕습니다.',
      products: ['동물매개치료', '펫테라피 교육', '치료견 훈련', '힐링 프로그램', '상담 서비스'],
      certifications: ['사회적기업 인증', '치료사 자격증', '동물매개치료 인증'],
      socialImpact: '장애인, 노인, 아동을 대상으로 연간 2,000회 이상의 치료 프로그램을 진행합니다.',
      image: 'https://readdy.ai/api/search-image?query=pet%20therapy%20healing%20program%20with%20therapy%20dogs%20helping%20people%20mental%20health%20treatment&width=400&height=250&seq=brand7&orientation=landscape',
      website: 'www.healingpet.co.kr',
      established: '2016',
      location: '광주시 서구'
    },
    {
      id: 8,
      name: '스마트펫',
      category: 'PLAYCAT',
      description: 'IoT 기술을 활용한 스마트 반려동물 케어 솔루션을 제공합니다.',
      mission: '기술의 힘으로 반려동물과 보호자의 삶의 질을 향상시킵니다.',
      products: ['스마트 모니터링', 'AI 건강 분석', '원격 케어 시스템', '자동화 기기', '헬스케어 앱'],
      certifications: ['ISO 27001', 'KC 인증', '개인정보보호 인증', 'AI 윤리 인증'],
      socialImpact: '독거노인의 반려동물 케어를 지원하는 사회공헌 프로그램을 운영합니다.',
      image: 'https://readdy.ai/api/search-image?query=smart%20pet%20care%20technology%20IoT%20devices%20AI%20health%20monitoring%20systems%20for%20pets%20modern%20tech&width=400&height=250&seq=brand8&orientation=landscape',
      website: 'www.smartpet.co.kr',
      established: '2022',
      location: '성남시 분당구'
    },
    {
      id: 9,
      name: '자연펫',
      category: '친환경 브랜드',
      description: '100% 천연 원료로 만든 반려동물 케어 제품을 생산하는 브랜드입니다.',
      mission: '자연의 힘으로 반려동물의 건강을 지키고 환경을 보호합니다.',
      products: ['천연 샴푸', '허브 간식', '아로마 케어', '천연 방충제', '유기농 사료'],
      certifications: ['유기농 인증', '천연 원료 인증', '비건 인증', '무첨가 인증'],
      socialImpact: '매출의 3%를 환경 보호 단체에 기부하고 플라스틱 프리 캠페인을 진행합니다.',
      image: 'https://readdy.ai/api/search-image?query=natural%20pet%20care%20products%20made%20from%20100%25%20organic%20ingredients%20herbal%20treats%20aromatherapy&width=400&height=250&seq=brand9&orientation=landscape',
      website: 'www.naturalpet.co.kr',
      established: '2019',
      location: '춘천시'
    },
    {
      id: 10,
      name: '공감펫',
      category: '사회적 기업',
      description: '발달장애인과 함께 반려동물 용품을 제작하는 사회적 기업입니다.',
      mission: '발달장애인의 자립을 돕고 반려동물의 행복을 동시에 추구합니다.',
      products: ['수제 장난감', '핸드메이드 목줄', '천연 간식', '맞춤 의류', '케어 용품'],
      certifications: ['사회적기업 인증', '장애인기업 인증', '수제품 인증'],
      socialImpact: '30명의 발달장애인에게 일자리를 제공하고 직업 훈련 프로그램을 운영합니다.',
      image: 'https://readdy.ai/api/search-image?query=social%20enterprise%20making%20pet%20products%20with%20disabled%20workers%20handmade%20toys%20and%20accessories&width=400&height=250&seq=brand10&orientation=landscape',
      website: 'www.empathypet.co.kr',
      established: '2018',
      location: '인천시 부평구'
    },
    {
      id: 11,
      name: '프리미엄펫',
      category: 'PLAYDOG',
      description: '최고급 소재와 장인 정신으로 만든 프리미엄 반려동물 용품 브랜드입니다.',
      mission: '반려동물도 최고의 품질을 누릴 자격이 있다는 믿음으로 제품을 만듭니다.',
      products: ['럭셔리 침구', '프리미엄 사료', '수제 간식', '맞춤 의류', '고급 액세서리'],
      certifications: ['프리미엄 품질 인증', '장인 기술 인증', '고급 소재 인증'],
      socialImpact: '고급 제품 판매 수익으로 보호소 동물들의 의료비를 지원합니다.',
      image: 'https://readdy.ai/api/search-image?query=premium%20luxury%20pet%20products%20high-end%20bedding%20custom%20clothing%20artisan%20crafted%20accessories&width=400&height=250&seq=brand11&orientation=landscape',
      website: 'www.premiumpet.co.kr',
      established: '2020',
      location: '부산시 중구'
    },
    {
      id: 12,
      name: '케어펫',
      category: 'PLAYZOO',
      description: '시니어 반려동물과 특별한 케어가 필요한 동물들을 위한 전문 브랜드입니다.',
      mission: '나이가 들거나 아픈 반려동물도 편안하고 행복한 삶을 살 수 있도록 돕습니다.',
      products: ['시니어 전용 사료', '관절 케어 용품', '재활 도구', '편안한 침구', '건강 보조제'],
      certifications: ['수의학 인증', '시니어 케어 인증', '의료기기 인증'],
      socialImpact: '시니어 반려동물 의료비 지원 프로그램과 호스피스 케어를 제공합니다.',
      image: 'https://readdy.ai/api/search-image?query=senior%20pet%20care%20products%20specialized%20food%20joint%20care%20rehabilitation%20tools%20comfortable%20bedding&width=400&height=250&seq=brand12&orientation=landscape',
      website: 'www.carepet.co.kr',
      established: '2017',
      location: '대전시 서구'
    },
    {
      id: 13,
      name: '해피펫',
      category: '로컬 브랜드',
      description: '지역 커뮤니티와 함께 성장하는 동네 반려동물 용품점입니다.',
      mission: '우리 동네 반려동물들의 행복한 일상을 만들어갑니다.',
      products: ['일상 용품', '간식', '장난감', '케어 용품', '맞춤 서비스'],
      certifications: ['지역 브랜드 인증', '커뮤니티 파트너 인증'],
      socialImpact: '지역 반려동물 축제를 주최하고 이웃 간 소통의 장을 마련합니다.',
      image: 'https://readdy.ai/api/search-image?query=local%20community%20pet%20store%20happy%20neighborhood%20pets%20daily%20supplies%20and%20custom%20services&width=400&height=250&seq=brand13&orientation=landscape',
      website: 'www.happypet.co.kr',
      established: '2021',
      location: '수원시 영통구'
    },
    {
      id: 14,
      name: '테크펫',
      category: 'PLAYCAT',
      description: '최신 기술을 활용한 혁신적인 반려동물 케어 솔루션을 개발합니다.',
      mission: '기술 혁신을 통해 반려동물 케어의 새로운 표준을 제시합니다.',
      products: ['AI 진단 도구', '로봇 케어 시스템', '바이오 센서', '헬스 트래커', '스마트 홈 연동'],
      certifications: ['기술 혁신 인증', 'AI 안전 인증', 'IoT 보안 인증'],
      socialImpact: '기술 접근성이 낮은 지역에 무료 기술 지원 서비스를 제공합니다.',
      image: 'https://readdy.ai/api/search-image?query=high-tech%20pet%20care%20solutions%20AI%20diagnostic%20tools%20robotic%20systems%20biosensors%20smart%20home%20integration&width=400&height=250&seq=brand14&orientation=landscape',
      website: 'www.techpet.co.kr',
      established: '2023',
      location: '판교 테크노밸리'
    },
    {
      id: 15,
      name: '러브펫',
      category: '친환경 브랜드',
      description: '사랑으로 만든 친환경 반려동물 용품으로 지구와 동물을 모두 사랑합니다.',
      mission: '사랑과 책임감으로 지속가능한 반려동물 문화를 만들어갑니다.',
      products: ['재활용 소재 제품', '업사이클링 장난감', '친환경 포장재', '제로웨이스트 용품', '지속가능 사료'],
      certifications: ['지속가능성 인증', '재활용 소재 인증', '탄소중립 인증'],
      socialImpact: '환경 교육 프로그램을 운영하고 탄소 발자국 줄이기 캠페인을 진행합니다.',
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20pet%20products%20made%20with%20love%20recycled%20materials%20upcycled%20toys%20zero%20waste%20packaging&width=400&height=250&seq=brand15&orientation=landscape',
      website: 'www.lovepet.co.kr',
      established: '2020',
      location: '울산시 남구'
    }
  ];

  const filteredBrands = selectedCategory === '전체' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory);

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Social%20impact%20brands%20helping%20animals%20ethical%20companies%20animal%20welfare%20community%20support%20warm%20colors&width=1200&height=600&seq=brand-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(249, 115, 22, 0.8), 0 0 40px rgba(239, 68, 68, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              착한 브랜드
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              사회적 가치와 동물 복지를 실천하는 브랜드들을 만나보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="space-button px-8 py-3 whitespace-nowrap"
                onClick={goToRoute('/market/goods')}
              >
                브랜드 둘러보기
              </button>
              <button
                className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap"
                onClick={goToContact('brand')}
              >
                파트너 신청
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
      <section id="brand-partners" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">파트너 브랜드</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">2.4억원</div>
                <div className="text-gray-600">사회공헌 기금</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <div className="text-gray-600">도움받은 동물</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">고객 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'brands', label: '착한 브랜드', icon: 'ri-heart-line' },
                { id: 'partnership', label: '파트너십', icon: 'ri-handshake-line' },
                { id: 'impact', label: '사회적 임팩트', icon: 'ri-earth-line' },
                { id: 'apply', label: '브랜드 신청', icon: 'ri-add-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-600 text-orange-600'
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

        {/* Brands */}
        {activeTab === 'brands' && (
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
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Brands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBrands.map((brand) => (
                  <div key={brand.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={brand.image} 
                        alt={brand.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {brand.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{brand.name}</h3>
                        <span className="text-sm text-gray-500">{brand.established}년 설립</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {brand.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">미션</h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {brand.mission}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">주요 제품</h4>
                        <div className="flex flex-wrap gap-1">
                          {brand.products.slice(0, 3).map((product) => (
                            <span key={product} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                              {product}
                            </span>
                          ))}
                          {brand.products.length > 3 && (
                            <span className="text-orange-600 text-xs">+{brand.products.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">인증</h4>
                        <div className="flex flex-wrap gap-1">
                          {brand.certifications.slice(0, 2).map((cert) => (
                            <span key={cert} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {cert}
                            </span>
                          ))}
                          {brand.certifications.length > 2 && (
                            <span className="text-green-600 text-xs">+{brand.certifications.length - 2}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">사회적 임팩트</h4>
                        <p className="text-gray-600 text-xs line-clamp-2">
                          {brand.socialImpact}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>{brand.location}</span>
                        <a href={`https://${brand.website}`} className="text-orange-600 hover:text-orange-700">
                          {brand.website}
                        </a>
                      </div>
                      
                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                        브랜드 상세보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Partnership */}
        {activeTab === 'partnership' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 프로그램</h2>
                <p className="text-lg text-gray-600">
                  묘연과 함께 사회적 가치를 실현하는 다양한 파트너십 기회
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: '제품 파트너십',
                    description: '착한 가치를 담은 제품을 묘연 플랫폼에서 판매하고 홍보할 수 있습니다.',
                    benefits: ['플랫폼 입점 지원', '마케팅 협력', '브랜드 스토리 홍보', '고객 리뷰 관리'],
                    requirements: ['동물 복지 가치 공유', '품질 인증서 보유', '사회적 임팩트 활동'],
                    icon: 'ri-shopping-bag-line'
                  },
                  {
                    title: '기술 파트너십',
                    description: '혁신적인 펫테크 기술을 함께 개발하고 상용화하는 파트너십입니다.',
                    benefits: ['공동 R&D', '기술 투자 지원', '시장 진출 지원', '특허 공유'],
                    requirements: ['기술 혁신성', '시장성 검증', '개발 역량'],
                    icon: 'ri-lightbulb-line'
                  },
                  {
                    title: '사회공헌 파트너십',
                    description: '길고양이 구조, 동물 복지 등 사회공헌 활동을 함께 진행합니다.',
                    benefits: ['CSR 활동 기획', '임팩트 측정', '홍보 지원', '세제 혜택'],
                    requirements: ['사회적 가치 추구', '지속적 참여 의지', '투명한 운영'],
                    icon: 'ri-heart-line'
                  },
                  {
                    title: '유통 파트너십',
                    description: '오프라인 매장과 온라인 플랫폼을 통한 유통 협력 관계입니다.',
                    benefits: ['유통망 확대', '물류 지원', '재고 관리', '판매 데이터 제공'],
                    requirements: ['유통 경험', '고객 서비스 역량', '브랜드 가치 일치'],
                    icon: 'ri-truck-line'
                  },
                  {
                    title: '교육 파트너십',
                    description: '반려동물 교육 콘텐츠와 프로그램을 함께 개발하고 운영합니다.',
                    benefits: ['콘텐츠 제작 지원', '전문가 네트워크', '교육 플랫폼 제공', '수료증 발급'],
                    requirements: ['전문성', '교육 경험', '콘텐츠 개발 능력'],
                    icon: 'ri-book-line'
                  },
                  {
                    title: '글로벌 파트너십',
                    description: '해외 진출과 글로벌 시장 확장을 위한 전략적 파트너십입니다.',
                    benefits: ['해외 진출 지원', '현지화 서비스', '글로벌 네트워크', '문화 적응 지원'],
                    requirements: ['글로벌 역량', '현지 네트워크', '문화적 이해'],
                    icon: 'ri-global-line'
                  }
                ].map((partnership, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <i className={`${partnership.icon} text-orange-600 text-xl`}></i>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {partnership.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {partnership.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">혜택</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partnership.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <i className="ri-check-line text-orange-600 mr-2"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">요구사항</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partnership.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center">
                            <i className="ri-arrow-right-s-line text-gray-400 mr-2"></i>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                      파트너십 문의
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Social Impact */}
        {activeTab === 'impact' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">사회적 임팩트</h2>
                <p className="text-lg text-gray-600">
                  착한 브랜드들과 함께 만들어가는 긍정적인 변화
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { title: '구조된 동물', value: '15,247', unit: '마리', color: 'text-green-600' },
                  { title: '기부 금액', value: '2.4', unit: '억원', color: 'text-blue-600' },
                  { title: '일자리 창출', value: '342', unit: '개', color: 'text-purple-600' },
                  { title: '환경 보호', value: '1,850', unit: 'kg CO₂ 절약', color: 'text-orange-600' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.unit}</div>
                    <div className="text-gray-900 font-medium mt-1">{stat.title}</div>
                  </div>
                ))}
              </div>

              {/* Impact Stories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: '길고양이 구조 프로젝트',
                    description: 'PLAYCAT과 함께 진행한 겨울철 길고양이 구조 프로젝트로 342마리의 고양이가 안전한 보금자리를 찾았습니다.',
                    image: 'https://readdy.ai/api/search-image?query=winter%20cat%20rescue%20project%20success%20story%20with%20rescued%20cats%20in%20warm%20shelter&width=500&height=300&seq=impact1&orientation=landscape',
                    impact: '342마리 구조',
                    partner: 'PLAYCAT'
                  },
                  {
                    title: '발달장애인 일자리 창출',
                    description: '공감펫과의 협력으로 30명의 발달장애인에게 안정적인 일자리를 제공하고 직업 훈련 프로그램을 운영하고 있습니다.',
                    image: 'https://readdy.ai/api/search-image?query=disabled%20workers%20making%20pet%20products%20job%20creation%20program%20social%20enterprise%20success&width=500&height=300&seq=impact2&orientation=landscape',
                    impact: '30명 고용',
                    partner: '공감펫'
                  },
                  {
                    title: '친환경 제품 개발',
                    description: '그린펫과 함께 개발한 생분해 제품으로 연간 1,850kg의 CO₂ 배출을 줄이고 플라스틱 사용량을 30% 감소시켰습니다.',
                    image: 'https://readdy.ai/api/search-image?query=eco-friendly%20biodegradable%20pet%20products%20environmental%20protection%20CO2%20reduction&width=500&height=300&seq=impact3&orientation=landscape',
                    impact: '1,850kg CO₂ 절약',
                    partner: '그린펫'
                  },
                  {
                    title: '저소득층 의료비 지원',
                    description: '착한동물병원과의 파트너십으로 경제적 어려움을 겪는 가정의 반려동물 1,200마리에게 무료 치료를 제공했습니다.',
                    image: 'https://readdy.ai/api/search-image?query=free%20veterinary%20care%20for%20low-income%20families%20pets%20medical%20support%20program&width=500&height=300&seq=impact4&orientation=landscape',
                    impact: '1,200마리 치료',
                    partner: '착한동물병원'
                  }
                ].map((story, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                          {story.partner}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {story.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-orange-600 font-semibold">{story.impact}</span>
                        <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                          자세히 보기 →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Brand Application */}
        {activeTab === 'apply' && (
          <section className="py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">착한 브랜드 신청</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        브랜드명 *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="브랜드 이름을 입력해주세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        설립년도 *
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="2020"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      브랜드 카테고리 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-8">
                      <option>PLAYCAT</option>
                      <option>PLAYDOG</option>
                      <option>PLAYZOO</option>
                      <option>친환경 브랜드</option>
                      <option>사회적 기업</option>
                      <option>로컬 브랜드</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      웹사이트
                    </label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://www.example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      브랜드 소개 *
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="브랜드의 특징과 가치를 간단히 소개해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      브랜드 미션 *
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="브랜드가 추구하는 미션과 비전을 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      주요 제품/서비스 *
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="주요 제품이나 서비스를 나열해주세요 (쉼표로 구분)"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      보유 인증서
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="보유하고 있는 인증서나 자격증을 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      사회적 임팩트 활동 *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="동물 복지, 환경 보호, 사회공헌 등 브랜드가 실천하고 있는 사회적 가치 활동을 자세히 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      희망 파트너십 유형 (복수 선택 가능)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['제품 파트너십', '기술 파트너십', '사회공헌 파트너십', '유통 파트너십', '교육 파트너십', '글로벌 파트너십'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 정보 *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="담당자 이름"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="이메일"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="tel"
                        placeholder="전화번호"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="회사 주소"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">
                      개인정보 수집 및 이용에 동의합니다 *
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    브랜드 신청하기
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
