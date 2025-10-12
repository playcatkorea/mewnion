
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface OEMService {
  id: number;
  title: string;
  category: string;
  description: string;
  process: string[];
  minOrder: string;
  leadTime: string;
  features: string[];
  image: string;
  price: string;
}

interface ODMService {
  id: number;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  expertise: string[];
  portfolio: string[];
  image: string;
  timeline: string;
}

export default function OEMPage() {
  const [activeTab, setActiveTab] = useState('oem');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '고양이 용품', '강아지 용품', '소동물 용품', '스마트 기기', '친환경 제품'];
  
  const oemServices: OEMService[] = [
    {
      id: 1,
      title: '스마트 급식기 OEM',
      category: '스마트 기기',
      description: '고객의 브랜드로 제작되는 AI 기반 스마트 급식기입니다. 앱 연동, 자동 급식, 건강 모니터링 기능을 포함합니다.',
      process: ['요구사항 분석', '설계 및 프로토타입', '샘플 제작', '테스트 및 검증', '대량 생산', '품질 관리', '배송'],
      minOrder: '500개',
      leadTime: '45-60일',
      features: ['앱 연동', 'AI 분석', '자동 급식', '건강 모니터링', '원격 제어'],
      image: 'https://readdy.ai/api/search-image?query=smart%20pet%20feeder%20OEM%20manufacturing%20process%20high-tech%20automated%20feeding%20device%20production%20line&width=400&height=250&seq=oem1&orientation=landscape',
      price: '개당 85,000원~'
    },
    {
      id: 2,
      title: '프리미엄 캣타워 OEM',
      category: '고양이 용품',
      description: '고급 원목과 친환경 소재로 제작되는 맞춤형 캣타워입니다. 고객의 디자인과 브랜드 요구사항에 맞춰 제작합니다.',
      process: ['디자인 상담', '소재 선택', '구조 설계', '샘플 제작', '승인 후 생산', '포장', '배송'],
      minOrder: '100개',
      leadTime: '30-45일',
      features: ['친환경 소재', '맞춤 디자인', '안전 인증', '조립 간편', '내구성 보장'],
      image: 'https://readdy.ai/api/search-image?query=premium%20cat%20tower%20OEM%20manufacturing%20wooden%20cat%20furniture%20production%20custom%20design&width=400&height=250&seq=oem2&orientation=landscape',
      price: '개당 120,000원~'
    },
    {
      id: 3,
      title: '자동 화장실 OEM',
      category: '고양이 용품',
      description: '자동 청소 기능이 있는 스마트 고양이 화장실입니다. 센서 기반 자동 청소와 냄새 제거 시스템을 포함합니다.',
      process: ['기술 검토', '설계 최적화', '부품 조달', '조립 생산', '기능 테스트', '포장', '출하'],
      minOrder: '200개',
      leadTime: '50-70일',
      features: ['자동 청소', '냄새 제거', '센서 감지', '앱 알림', 'LED 표시'],
      image: 'https://readdy.ai/api/search-image?query=automatic%20cat%20litter%20box%20OEM%20production%20smart%20self-cleaning%20toilet%20manufacturing&width=400&height=250&seq=oem3&orientation=landscape',
      price: '개당 180,000원~'
    },
    {
      id: 4,
      title: '강아지 훈련 도구 OEM',
      category: '강아지 용품',
      description: '전문적인 강아지 훈련을 위한 다양한 도구들을 OEM 방식으로 제작합니다. 안전성과 효과성을 검증받은 제품입니다.',
      process: ['훈련 전문가 자문', '안전성 검토', '프로토타입 제작', '훈련사 테스트', '개선 및 양산', '포장', '배송'],
      minOrder: '300개',
      leadTime: '25-35일',
      features: ['전문가 설계', '안전 소재', '다양한 크기', '내구성', '사용 편의성'],
      image: 'https://readdy.ai/api/search-image?query=dog%20training%20tools%20OEM%20manufacturing%20professional%20equipment%20production%20safety%20tested&width=400&height=250&seq=oem4&orientation=landscape',
      price: '개당 25,000원~'
    },
    {
      id: 5,
      title: '친환경 장난감 OEM',
      category: '친환경 제품',
      description: '100% 천연 소재로 만든 반려동물 장난감입니다. 생분해 가능한 소재를 사용하여 환경 친화적입니다.',
      process: ['소재 인증 확인', '디자인 개발', '안전성 테스트', '샘플 승인', '대량 생산', '친환경 포장', '배송'],
      minOrder: '1,000개',
      leadTime: '20-30일',
      features: ['천연 소재', '생분해 가능', '무독성', '다양한 모양', '친환경 포장'],
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20pet%20toys%20OEM%20manufacturing%20natural%20materials%20biodegradable%20production&width=400&height=250&seq=oem5&orientation=landscape',
      price: '개당 8,000원~'
    },
    {
      id: 6,
      title: '소동물 케이지 OEM',
      category: '소동물 용품',
      description: '햄스터, 토끼, 기니피그 등 소동물을 위한 맞춤형 케이지를 제작합니다. 통풍과 안전성을 고려한 설계입니다.',
      process: ['동물별 요구사항 분석', '케이지 설계', '소재 선택', '제작', '안전성 검사', '조립 가이드 제작', '배송'],
      minOrder: '50개',
      leadTime: '35-45일',
      features: ['동물별 맞춤', '안전한 소재', '조립 간편', '청소 용이', '확장 가능'],
      image: 'https://readdy.ai/api/search-image?query=small%20animal%20cage%20OEM%20manufacturing%20hamster%20rabbit%20guinea%20pig%20custom%20habitat%20production&width=400&height=250&seq=oem6&orientation=landscape',
      price: '개당 65,000원~'
    },
    {
      id: 7,
      title: '펫 웨어러블 기기 OEM',
      category: '스마트 기기',
      description: '반려동물의 활동량, 건강상태를 모니터링하는 웨어러블 기기입니다. GPS 추적과 건강 데이터 분석 기능을 포함합니다.',
      process: ['하드웨어 설계', '소프트웨어 개발', '앱 연동', '베타 테스트', '인증 획득', '양산', '배송'],
      minOrder: '1,000개',
      leadTime: '60-90일',
      features: ['GPS 추적', '활동량 측정', '건강 모니터링', '방수 기능', '장시간 배터리'],
      image: 'https://readdy.ai/api/search-image?query=pet%20wearable%20device%20OEM%20manufacturing%20GPS%20tracker%20health%20monitor%20production%20line&width=400&height=250&seq=oem7&orientation=landscape',
      price: '개당 45,000원~'
    },
    {
      id: 8,
      title: '프리미엄 사료 OEM',
      category: '고양이 용품',
      description: '고품질 원료로 제작되는 프리미엄 반려동물 사료입니다. 영양 균형과 기호성을 모두 고려한 레시피로 제작합니다.',
      process: ['영양 분석', '레시피 개발', '원료 조달', '생산', '품질 검사', '포장', '유통'],
      minOrder: '1톤',
      leadTime: '15-25일',
      features: ['프리미엄 원료', '영양 균형', '기호성 우수', 'HACCP 인증', '맞춤 포장'],
      image: 'https://readdy.ai/api/search-image?query=premium%20pet%20food%20OEM%20manufacturing%20high-quality%20ingredients%20production%20facility&width=400&height=250&seq=oem8&orientation=landscape',
      price: 'kg당 12,000원~'
    }
  ];

  const odmServices: ODMService[] = [
    {
      id: 1,
      title: 'AI 펫케어 솔루션 ODM',
      category: '스마트 기기',
      description: '인공지능 기술을 활용한 종합 펫케어 솔루션을 설계부터 제조까지 원스톱으로 제공합니다.',
      capabilities: ['AI 알고리즘 개발', '하드웨어 설계', '앱 개발', '클라우드 서비스', '데이터 분석'],
      expertise: ['머신러닝', 'IoT 기술', '모바일 앱', '클라우드 컴퓨팅', '빅데이터'],
      portfolio: ['스마트 급식기', '건강 모니터링 시스템', 'AI 행동 분석기', '자동 놀이 로봇'],
      image: 'https://readdy.ai/api/search-image?query=AI%20pet%20care%20solution%20ODM%20development%20artificial%20intelligence%20technology%20for%20pets&width=400&height=250&seq=odm1&orientation=landscape',
      timeline: '6-12개월'
    },
    {
      id: 2,
      title: '친환경 펫용품 라인 ODM',
      category: '친환경 제품',
      description: '지속가능한 소재를 활용한 친환경 반려동물 용품 라인을 기획부터 생산까지 전담합니다.',
      capabilities: ['친환경 소재 연구', '제품 디자인', '생산 공정 설계', '인증 획득 지원', '브랜딩 지원'],
      expertise: ['바이오 소재', '재활용 기술', '친환경 인증', '지속가능성', '그린 디자인'],
      portfolio: ['생분해 장난감', '대나무 식기', '재활용 침구', '천연 케어 용품'],
      image: 'https://readdy.ai/api/search-image?query=eco-friendly%20pet%20products%20ODM%20development%20sustainable%20materials%20green%20manufacturing&width=400&height=250&seq=odm2&orientation=landscape',
      timeline: '4-8개월'
    },
    {
      id: 3,
      title: '스마트홈 연동 펫시스템 ODM',
      category: '스마트 기기',
      description: '스마트홈과 연동되는 통합 펫케어 시스템을 개발합니다. IoT 기술을 활용한 자동화 솔루션입니다.',
      capabilities: ['IoT 시스템 설계', '스마트홈 연동', '자동화 프로그래밍', '센서 통합', '음성 인식'],
      expertise: ['IoT 플랫폼', '홈 오토메이션', '센서 기술', '음성 AI', '네트워크 보안'],
      portfolio: ['스마트 급식 시스템', '자동 환경 제어', '보안 모니터링', '건강 추적'],
      image: 'https://readdy.ai/api/search-image?query=smart%20home%20pet%20system%20ODM%20development%20IoT%20automation%20connected%20devices&width=400&height=250&seq=odm3&orientation=landscape',
      timeline: '8-15개월'
    },
    {
      id: 4,
      title: '펫 헬스케어 디바이스 ODM',
      category: '스마트 기기',
      description: '반려동물의 건강 관리를 위한 전문 의료 기기를 개발합니다. 수의학적 검증을 거친 정확한 측정이 가능합니다.',
      capabilities: ['의료기기 설계', '센서 기술', '데이터 분석', '수의학 자문', '인증 지원'],
      expertise: ['바이오센서', '의료 알고리즘', '데이터 보안', '의료기기 인증', '수의학'],
      portfolio: ['혈압 측정기', '체온 모니터', '심박수 센서', '혈당 측정기'],
      image: 'https://readdy.ai/api/search-image?query=pet%20healthcare%20device%20ODM%20development%20medical%20equipment%20veterinary%20technology&width=400&height=250&seq=odm4&orientation=landscape',
      timeline: '12-18개월'
    },
    {
      id: 5,
      title: '펫 엔터테인먼트 시스템 ODM',
      category: '고양이 용품',
      description: '반려동물의 놀이와 엔터테인먼트를 위한 혁신적인 시스템을 개발합니다. 인터랙티브한 놀이 경험을 제공합니다.',
      capabilities: ['게임 시스템 설계', '인터랙티브 디자인', '동작 인식', '보상 시스템', 'AR/VR 기술'],
      expertise: ['게임 개발', '동작 인식', '증강현실', '사용자 경험', '행동 분석'],
      portfolio: ['인터랙티브 놀이터', 'AR 게임 시스템', '자동 놀이 로봇', '스마트 장난감'],
      image: 'https://readdy.ai/api/search-image?query=pet%20entertainment%20system%20ODM%20development%20interactive%20play%20technology%20gaming%20for%20pets&width=400&height=250&seq=odm5&orientation=landscape',
      timeline: '6-10개월'
    },
    {
      id: 6,
      title: '펫 영양 관리 시스템 ODM',
      category: '강아지 용품',
      description: '개별 반려동물의 영양 상태를 분석하고 맞춤형 사료를 제공하는 시스템을 개발합니다.',
      capabilities: ['영양 분석 알고리즘', '맞춤 사료 제조', '배송 시스템', '건강 추적', '수의사 연동'],
      expertise: ['동물 영양학', '개인화 기술', '공급망 관리', '품질 관리', '수의학'],
      portfolio: ['맞춤 사료 시스템', '영양 분석 앱', '자동 배송 서비스', '건강 리포트'],
      image: 'https://readdy.ai/api/search-image?query=pet%20nutrition%20management%20system%20ODM%20development%20customized%20food%20analysis%20technology&width=400&height=250&seq=odm6&orientation=landscape',
      timeline: '10-14개월'
    }
  ];

  const filteredOEM = selectedCategory === '전체' 
    ? oemServices 
    : oemServices.filter(service => service.category === selectedCategory);

  const filteredODM = selectedCategory === '전체' 
    ? odmServices 
    : odmServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20manufacturing%20facility%20pet%20products%20production%20line%20high-tech%20factory%20OEM%20ODM%20services&width=1200&height=600&seq=oem-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              OEM/ODM 서비스
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              고객의 브랜드 가치와 비전을 실현하는 전문 제조 서비스를 제공합니다
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="space-button px-8 py-3 whitespace-nowrap">
                서비스 문의
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                포트폴리오 보기
              </button>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-settings-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">OEM 서비스</h3>
                <p className="text-gray-600 mb-6">
                  고객의 브랜드로 기존 제품을 맞춤 제작하는 서비스입니다. 
                  검증된 기술과 품질로 안정적인 제품을 제공합니다.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 기존 제품의 브랜드 맞춤 제작</li>
                  <li>• 빠른 출시와 안정적인 품질</li>
                  <li>• 최소 주문량부터 대량 생산까지</li>
                  <li>• 포장 및 브랜딩 지원</li>
                </ul>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ODM 서비스</h3>
                <p className="text-gray-600 mb-6">
                  고객의 아이디어를 바탕으로 새로운 제품을 설계부터 제조까지 
                  원스톱으로 개발하는 서비스입니다.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 아이디어부터 제품화까지 전 과정</li>
                  <li>• 혁신적인 기술과 디자인</li>
                  <li>• 시장 분석 및 기획 지원</li>
                  <li>• 지적재산권 보호</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'oem', label: 'OEM 서비스', icon: 'ri-settings-line' },
                { id: 'odm', label: 'ODM 서비스', icon: 'ri-lightbulb-line' },
                { id: 'process', label: '제작 과정', icon: 'ri-flow-chart' },
                { id: 'contact', label: '문의하기', icon: 'ri-phone-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
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

        {/* OEM Services */}
        {activeTab === 'oem' && (
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
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* OEM Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOEM.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          OEM
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
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
                          <span className="text-gray-500">최소 주문량</span>
                          <div className="font-medium text-gray-900">{service.minOrder}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">제작 기간</span>
                          <div className="font-medium text-gray-900">{service.leadTime}</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">주요 기능</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature) => (
                            <span key={feature} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-indigo-600 text-xs">+{service.features.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-indigo-600">{service.price}</span>
                        <span className="text-sm text-gray-500">부가세 별도</span>
                      </div>
                      
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                        견적 문의하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ODM Services */}
        {activeTab === 'odm' && (
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

              {/* ODM Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredODM.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          ODM
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <span className="text-sm text-gray-500">개발 기간: {service.timeline}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-3">핵심 역량</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {service.capabilities.map((capability, index) => (
                              <li key={index} className="flex items-center">
                                <i className="ri-check-line text-purple-600 mr-2"></i>
                                {capability}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-3">전문 기술</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.expertise.map((tech) => (
                              <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">포트폴리오</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.portfolio.map((item) => (
                            <div key={item} className="bg-gray-50 p-2 rounded text-xs text-gray-700 text-center">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        개발 상담 신청
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        {activeTab === 'process' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">제작 과정</h2>
                <p className="text-lg text-gray-600">
                  체계적이고 전문적인 프로세스로 최고 품질의 제품을 제작합니다
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* OEM Process */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">OEM 제작 과정</h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: '요구사항 분석',
                        description: '고객의 브랜드 요구사항과 제품 사양을 상세히 분석합니다.',
                        duration: '1-2일'
                      },
                      {
                        step: 2,
                        title: '견적 및 계약',
                        description: '정확한 견적을 제공하고 제작 일정을 확정합니다.',
                        duration: '2-3일'
                      },
                      {
                        step: 3,
                        title: '샘플 제작',
                        description: '고객 브랜드가 적용된 샘플을 제작하여 승인받습니다.',
                        duration: '7-14일'
                      },
                      {
                        step: 4,
                        title: '대량 생산',
                        description: '승인된 샘플을 기준으로 대량 생산을 진행합니다.',
                        duration: '20-45일'
                      },
                      {
                        step: 5,
                        title: '품질 검사',
                        description: '엄격한 품질 기준에 따라 전수 검사를 실시합니다.',
                        duration: '2-3일'
                      },
                      {
                        step: 6,
                        title: '포장 및 배송',
                        description: '고객 브랜드 포장재로 포장하여 안전하게 배송합니다.',
                        duration: '3-5일'
                      }
                    ].map((process) => (
                      <div key={process.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {process.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{process.title}</h4>
                            <span className="text-sm text-gray-500">{process.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ODM Process */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">ODM 개발 과정</h3>
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: '아이디어 검토',
                        description: '고객의 아이디어를 분석하고 기술적 실현 가능성을 검토합니다.',
                        duration: '3-5일'
                      },
                      {
                        step: 2,
                        title: '시장 조사',
                        description: '시장 동향과 경쟁 제품을 분석하여 차별화 포인트를 찾습니다.',
                        duration: '1-2주'
                      },
                      {
                        step: 3,
                        title: '설계 및 디자인',
                        description: '제품의 구조 설계와 외관 디자인을 완성합니다.',
                        duration: '2-4주'
                      },
                      {
                        step: 4,
                        title: '프로토타입 제작',
                        description: '실제 작동하는 프로토타입을 제작하여 기능을 검증합니다.',
                        duration: '3-6주'
                      },
                      {
                        step: 5,
                        title: '테스트 및 개선',
                        description: '다양한 테스트를 통해 제품을 개선하고 완성도를 높입니다.',
                        duration: '2-4주'
                      },
                      {
                        step: 6,
                        title: '양산 준비',
                        description: '대량 생산을 위한 공정을 설계하고 품질 기준을 수립합니다.',
                        duration: '2-3주'
                      },
                      {
                        step: 7,
                        title: '양산 및 출시',
                        description: '최종 제품을 양산하여 시장에 출시합니다.',
                        duration: '4-8주'
                      }
                    ].map((process) => (
                      <div key={process.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {process.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{process.title}</h4>
                            <span className="text-sm text-gray-500">{process.duration}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h2>
                <p className="text-lg text-gray-600">
                  전문 상담을 통해 최적의 제조 솔루션을 제안해드립니다
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">상담 신청</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          회사명 *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="회사명을 입력해주세요"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          담당자명 *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="담당자명을 입력해주세요"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          연락처 *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="010-0000-0000"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일 *
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="example@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        서비스 유형 *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-8">
                        <option>OEM 서비스</option>
                        <option>ODM 서비스</option>
                        <option>OEM + ODM 복합</option>
                        <option>상담 후 결정</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        제품 카테고리
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-8">
                        <option>고양이 용품</option>
                        <option>강아지 용품</option>
                        <option>소동물 용품</option>
                        <option>스마트 기기</option>
                        <option>친환경 제품</option>
                        <option>기타</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        예상 주문량
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="예: 1,000개, 협의 후 결정 등"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        상세 요구사항 *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="제품에 대한 상세한 요구사항, 기능, 디자인 등을 자세히 작성해주세요"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
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
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <i className="ri-phone-line text-indigo-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">전화 상담</div>
                          <div className="text-gray-600">02-1234-5678</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <i className="ri-mail-line text-indigo-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">이메일 문의</div>
                          <div className="text-gray-600">oem@mewnion.com</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <i className="ri-time-line text-indigo-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">상담 시간</div>
                          <div className="text-gray-600">평일 09:00 - 18:00</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <i className="ri-map-pin-line text-indigo-600"></i>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">제조 공장</div>
                          <div className="text-gray-600">경기도 화성시 산업단지</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">제조 역량</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">15+</div>
                        <div className="text-sm text-gray-600">년 경험</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">500+</div>
                        <div className="text-sm text-gray-600">완료 프로젝트</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">50+</div>
                        <div className="text-sm text-gray-600">파트너 브랜드</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">99%</div>
                        <div className="text-sm text-gray-600">품질 만족도</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">빠른 상담 예약</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      전문 상담사와 1:1 화상 상담을 통해 더 자세한 정보를 받아보세요
                    </p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                      화상 상담 예약
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
