
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { goToContact, goToRoute } from '../../utils/navigation';

interface AdoptionCase {
  id: number;
  name: string;
  age: string;
  gender: string;
  breed: string;
  personality: string[];
  healthStatus: string;
  story: string;
  image: string;
  location: string;
  contact: string;
  adoptionFee: number;
  isSpayedNeutered: boolean;
  isVaccinated: boolean;
  specialNeeds: string[];
}

interface SponsorshipProgram {
  id: number;
  title: string;
  description: string;
  monthlyAmount: number;
  benefits: string[];
  currentSponsors: number;
  maxSponsors: number;
  image: string;
}

export default function AdoptionPage() {
  const [activeTab, setActiveTab] = useState('adoption');
  const [selectedFilter, setSelectedFilter] = useState('전체');
  
  const filters = ['전체', '새끼고양이', '성묘', '시니어', '특별케어'];
  
  const adoptionCases: AdoptionCase[] = [
    {
      id: 1,
      name: '별이',
      age: '3개월',
      gender: '암컷',
      breed: '코리안 숏헤어',
      personality: ['활발함', '사람 좋아함', '호기심 많음'],
      healthStatus: '건강함',
      story: '어미 고양이와 함께 구조되었지만, 어미는 야생성이 강해 방사하고 새끼들만 입양을 기다리고 있습니다. 매우 활발하고 사람을 좋아하는 성격입니다.',
      image: 'https://readdy.ai/api/search-image?query=adorable%203%20month%20old%20kitten%20with%20bright%20eyes%20playful%20personality%20ready%20for%20adoption%20cute%20and%20healthy&width=300&height=300&seq=adopt1&orientation=squarish',
      location: '서울 강남구',
      contact: '김집사 (010-1234-5678)',
      adoptionFee: 100000,
      isSpayedNeutered: false,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 2,
      name: '구름이',
      age: '2살',
      gender: '수컷',
      breed: '터키시 앙고라 믹스',
      personality: ['온순함', '조용함', '독립적'],
      healthStatus: '건강함',
      story: '길에서 구조된 후 임시보호 중입니다. 처음엔 경계심이 있었지만 이제는 사람을 따르며 무릎에 올라와 잠들기도 합니다.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20white%20fluffy%20cat%202%20years%20old%20calm%20personality%20Turkish%20Angora%20mix%20ready%20for%20adoption&width=300&height=300&seq=adopt2&orientation=squarish',
      location: '부산 해운대구',
      contact: '이냥이 (010-2345-6789)',
      adoptionFee: 150000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 3,
      name: '까망이',
      age: '5살',
      gender: '암컷',
      breed: '블랙 숏헤어',
      personality: ['차분함', '애교많음', '다른 고양이와 잘 지냄'],
      healthStatus: '건강함',
      story: '다른 고양이들과 함께 지내던 길고양이였습니다. 사람에게 친숙하며 다른 고양이들과도 잘 어울립니다.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20black%20cat%205%20years%20old%20calm%20and%20affectionate%20personality%20ready%20for%20adoption%20healthy&width=300&height=300&seq=adopt3&orientation=squarish',
      location: '대구 중구',
      contact: '박구조 (010-3456-7890)',
      adoptionFee: 120000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 4,
      name: '호랑이',
      age: '1살',
      gender: '수컷',
      breed: '브라운 태비',
      personality: ['장난기 많음', '에너지 넘침', '사람 따라다님'],
      healthStatus: '건강함',
      story: '공사장에서 구조된 새끼 고양이입니다. 매우 활발하고 장난기가 많아 젊은 가정에 적합합니다.',
      image: 'https://readdy.ai/api/search-image?query=playful%20brown%20tabby%20cat%201%20year%20old%20energetic%20personality%20ready%20for%20adoption%20healthy%20young%20cat&width=300&height=300&seq=adopt4&orientation=squarish',
      location: '인천 연수구',
      contact: '최봉사 (010-4567-8901)',
      adoptionFee: 130000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 5,
      name: '할머니',
      age: '12살',
      gender: '암컷',
      breed: '코리안 숏헤어',
      personality: ['조용함', '온순함', '잠 많이 잠'],
      healthStatus: '관절염 치료 중',
      story: '나이가 많아 버려진 할머니 고양이입니다. 관절염이 있지만 약물 치료로 관리 가능하며, 조용한 환경에서 여생을 보내고 싶어합니다.',
      image: 'https://readdy.ai/api/search-image?query=senior%20cat%2012%20years%20old%20gentle%20and%20calm%20personality%20needing%20special%20care%20for%20arthritis&width=300&height=300&seq=adopt5&orientation=squarish',
      location: '광주 북구',
      contact: '정급식 (010-5678-9012)',
      adoptionFee: 50000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: ['관절염 약물 치료', '정기 검진']
    },
    {
      id: 6,
      name: '삼색이',
      age: '4개월',
      gender: '암컷',
      breed: '칼리코',
      personality: ['호기심 많음', '활발함', '사람 좋아함'],
      healthStatus: '건강함',
      story: '삼색 털을 가진 예쁜 암컷 새끼 고양이입니다. 매우 활발하고 사람을 좋아하며 다른 고양이들과도 잘 놉니다.',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20calico%20kitten%204%20months%20old%20playful%20and%20curious%20personality%20ready%20for%20adoption&width=300&height=300&seq=adopt6&orientation=squarish',
      location: '대전 유성구',
      contact: '김사회화 (010-6789-0123)',
      adoptionFee: 110000,
      isSpayedNeutered: false,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 7,
      name: '회색이',
      age: '6살',
      gender: '수컷',
      breed: '러시안 블루 믹스',
      personality: ['내성적', '조용함', '한 사람만 따름'],
      healthStatus: '건강함',
      story: '처음엔 매우 경계심이 강했지만 시간이 지나면서 한 사람에게만 마음을 여는 성격입니다. 조용한 환경을 선호합니다.',
      image: 'https://readdy.ai/api/search-image?query=gray%20Russian%20Blue%20mix%20cat%206%20years%20old%20shy%20and%20quiet%20personality%20needing%20patient%20owner&width=300&height=300&seq=adopt7&orientation=squarish',
      location: '울산 남구',
      contact: '이호스피스 (010-7890-1234)',
      adoptionFee: 140000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: ['조용한 환경', '인내심 있는 가족']
    },
    {
      id: 8,
      name: '점박이',
      age: '8개월',
      gender: '암컷',
      breed: '스팟 태비',
      personality: ['장난꾸러기', '똑똑함', '활발함'],
      healthStatus: '건강함',
      story: '점무늬가 특징인 예쁜 고양이입니다. 매우 똑똑하고 장난기가 많아 놀아줄 시간이 충분한 가정에 적합합니다.',
      image: 'https://readdy.ai/api/search-image?query=spotted%20tabby%20cat%208%20months%20old%20playful%20and%20intelligent%20personality%20ready%20for%20adoption&width=300&height=300&seq=adopt8&orientation=squarish',
      location: '경기 성남시',
      contact: '박건강 (010-8901-2345)',
      adoptionFee: 125000,
      isSpayedNeutered: false,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 9,
      name: '노랑이',
      age: '3살',
      gender: '수컷',
      breed: '오렌지 태비',
      personality: ['친화적', '활발함', '식탐 많음'],
      healthStatus: '건강함',
      story: '매우 친화적이고 사람을 좋아하는 오렌지 고양이입니다. 식탐이 많아 체중 관리가 필요하지만 건강한 상태입니다.',
      image: 'https://readdy.ai/api/search-image?query=friendly%20orange%20tabby%20cat%203%20years%20old%20sociable%20personality%20loves%20food%20ready%20for%20adoption&width=300&height=300&seq=adopt9&orientation=squarish',
      location: '제주시',
      contact: '강급식소 (010-9012-3456)',
      adoptionFee: 135000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: ['체중 관리']
    },
    {
      id: 10,
      name: '하얀이',
      age: '7살',
      gender: '암컷',
      breed: '화이트 숏헤어',
      personality: ['우아함', '조용함', '깔끔함'],
      healthStatus: '건강함',
      story: '순백색의 아름다운 고양이입니다. 매우 우아하고 깔끔한 성격으로 조용한 환경을 선호합니다.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20white%20cat%207%20years%20old%20graceful%20and%20clean%20personality%20ready%20for%20adoption%20beautiful&width=300&height=300&seq=adopt10&orientation=squarish',
      location: '강원 춘천시',
      contact: '윤쉼터 (010-0123-4567)',
      adoptionFee: 145000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 11,
      name: '줄무늬',
      age: '5개월',
      gender: '수컷',
      breed: '실버 태비',
      personality: ['호기심 많음', '장난기 많음', '사람 따라다님'],
      healthStatus: '건강함',
      story: '은색 줄무늬가 아름다운 새끼 고양이입니다. 호기심이 많고 사람을 따라다니며 관심을 끌려고 합니다.',
      image: 'https://readdy.ai/api/search-image?query=silver%20tabby%20kitten%205%20months%20old%20curious%20and%20playful%20personality%20following%20people%20around&width=300&height=300&seq=adopt11&orientation=squarish',
      location: '충북 청주시',
      contact: '조중성화 (010-1234-5670)',
      adoptionFee: 115000,
      isSpayedNeutered: false,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 12,
      name: '복실이',
      age: '4살',
      gender: '암컷',
      breed: '페르시안 믹스',
      personality: ['온순함', '조용함', '그루밍 좋아함'],
      healthStatus: '건강함',
      story: '복실복실한 털이 특징인 페르시안 믹스입니다. 매우 온순하고 조용하며 그루밍을 좋아합니다.',
      image: 'https://readdy.ai/api/search-image?query=fluffy%20Persian%20mix%20cat%204%20years%20old%20gentle%20and%20quiet%20personality%20loves%20grooming&width=300&height=300&seq=adopt12&orientation=squarish',
      location: '경남 창원시',
      contact: '한입양 (010-2345-6781)',
      adoptionFee: 160000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: ['정기 그루밍']
    },
    {
      id: 13,
      name: '깜찍이',
      age: '2개월',
      gender: '암컷',
      breed: '코리안 숏헤어',
      personality: ['애교많음', '활발함', '사람 좋아함'],
      healthStatus: '건강함',
      story: '생후 2개월의 아기 고양이입니다. 매우 애교가 많고 사람을 좋아하며 다른 고양이들과도 잘 어울립니다.',
      image: 'https://readdy.ai/api/search-image?query=tiny%202%20month%20old%20kitten%20very%20cute%20and%20affectionate%20personality%20loves%20people%20ready%20for%20adoption&width=300&height=300&seq=adopt13&orientation=squarish',
      location: '전북 전주시',
      contact: '임응급 (010-3456-7892)',
      adoptionFee: 90000,
      isSpayedNeutered: false,
      isVaccinated: false,
      specialNeeds: ['예방접종 필요']
    },
    {
      id: 14,
      name: '멍멍이',
      age: '6개월',
      gender: '수컷',
      breed: '코리안 숏헤어',
      personality: ['개처럼 행동', '사람 따라다님', '목줄 산책 가능'],
      healthStatus: '건강함',
      story: '개와 함께 자라서 개 같은 행동을 하는 특별한 고양이입니다. 목줄을 하고 산책도 가능하며 사람을 매우 좋아합니다.',
      image: 'https://readdy.ai/api/search-image?query=unique%20cat%206%20months%20old%20behaves%20like%20dog%20can%20walk%20on%20leash%20very%20social%20personality&width=300&height=300&seq=adopt14&orientation=squarish',
      location: '전남 목포시',
      contact: '서장비 (010-4567-8903)',
      adoptionFee: 120000,
      isSpayedNeutered: false,
      isVaccinated: true,
      specialNeeds: []
    },
    {
      id: 15,
      name: '공주',
      age: '9살',
      gender: '암컷',
      breed: '페르시안',
      personality: ['우아함', '도도함', '조용함'],
      healthStatus: '신장 질환 관리 중',
      story: '나이가 들어 버려진 페르시안 고양이입니다. 신장 질환이 있어 특별한 관리가 필요하지만 매우 우아하고 품격 있는 고양이입니다.',
      image: 'https://readdy.ai/api/search-image?query=elegant%20Persian%20cat%209%20years%20old%20regal%20personality%20needs%20special%20care%20for%20kidney%20disease&width=300&height=300&seq=adopt15&orientation=squarish',
      location: '경북 포항시',
      contact: '노보호소 (010-5678-9014)',
      adoptionFee: 80000,
      isSpayedNeutered: true,
      isVaccinated: true,
      specialNeeds: ['신장 질환 관리', '특별 사료', '정기 검진']
    }
  ];

  const sponsorshipPrograms: SponsorshipProgram[] = [
    {
      id: 1,
      title: '새끼 고양이 성장 후원',
      description: '구조된 새끼 고양이들의 건강한 성장을 위한 사료, 의료비, 사회화 교육을 지원합니다.',
      monthlyAmount: 30000,
      benefits: ['월간 성장 리포트', '사진 및 영상 제공', '입양 시 우선 연락', '후원 인증서'],
      currentSponsors: 245,
      maxSponsors: 300,
      image: 'https://readdy.ai/api/search-image?query=kitten%20growth%20sponsorship%20program%20with%20healthy%20growing%20kittens%20being%20cared%20for&width=400&height=250&seq=sponsor1&orientation=landscape'
    },
    {
      id: 2,
      title: '시니어 고양이 호스피스',
      description: '나이가 많거나 질병이 있는 고양이들의 편안한 여생을 위한 의료비와 케어 비용을 지원합니다.',
      monthlyAmount: 50000,
      benefits: ['건강 상태 리포트', '수의사 진료 내역', '케어 사진 제공', '감사 편지'],
      currentSponsors: 128,
      maxSponsors: 200,
      image: 'https://readdy.ai/api/search-image?query=senior%20cat%20hospice%20care%20program%20with%20elderly%20cats%20receiving%20gentle%20medical%20care&width=400&height=250&seq=sponsor2&orientation=landscape'
    },
    {
      id: 3,
      title: '특별 케어 고양이 지원',
      description: '장애나 특별한 질병을 가진 고양이들의 치료비와 특수 케어 비용을 지원합니다.',
      monthlyAmount: 70000,
      benefits: ['치료 경과 리포트', '수의사 소견서', '케어 영상', '후원자 방문 기회'],
      currentSponsors: 89,
      maxSponsors: 150,
      image: 'https://readdy.ai/api/search-image?query=special%20needs%20cats%20receiving%20medical%20care%20and%20rehabilitation%20support%20program&width=400&height=250&seq=sponsor3&orientation=landscape'
    },
    {
      id: 4,
      title: '임시보호 가정 지원',
      description: '임시보호 가정의 사료비, 의료비, 용품비를 지원하여 더 많은 고양이들이 보호받을 수 있도록 합니다.',
      monthlyAmount: 40000,
      benefits: ['보호 현황 리포트', '임시보호 가정 소식', '입양 성공 스토리', '감사 인증서'],
      currentSponsors: 312,
      maxSponsors: 400,
      image: 'https://readdy.ai/api/search-image?query=foster%20home%20support%20program%20with%20cats%20being%20cared%20for%20in%20temporary%20homes&width=400&height=250&seq=sponsor4&orientation=landscape'
    }
  ];

  const filteredCases = selectedFilter === '전체' 
    ? adoptionCases 
    : adoptionCases.filter(cat => {
        if (selectedFilter === '새끼고양이') return cat.age.includes('개월') || parseInt(cat.age) <= 1;
        if (selectedFilter === '성묘') return parseInt(cat.age) >= 2 && parseInt(cat.age) <= 7;
        if (selectedFilter === '시니어') return parseInt(cat.age) >= 8;
        if (selectedFilter === '특별케어') return cat.specialNeeds.length > 0;
        return true;
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Cat%20adoption%20center%20with%20happy%20cats%20waiting%20for%20families%2C%20pink%20and%20purple%20warm%20lighting%2C%20loving%20care%20environment&width=1200&height=600&seq=adoption-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>입양 후원</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              새로운 가족을 기다리는 고양이들과 그들을 돕는 다양한 후원 프로그램을 만나보세요
            </p>
            <div className="flex justify-center gap-4">
              <button
                data-cta="manual"
                className="space-button px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={goToContact('adoption')}
              >
                입양 신청하기
              </button>
              <button
                data-cta="manual"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                onClick={goToRoute('/market/sponsor')}
              >
                  후원 프로그램 보기
                </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">6,543</div>
                <div className="text-gray-600">성공한 입양</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">342</div>
                <div className="text-gray-600">입양 대기 중</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                <div className="text-gray-600">후원 가족</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">89</div>
                <div className="text-gray-600">임시보호 가정</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'adoption', label: '입양 대기', icon: 'ri-heart-line' },
                { id: 'sponsorship', label: '후원 프로그램', icon: 'ri-gift-line' },
                { id: 'success', label: '입양 성공 스토리', icon: 'ri-star-line' },
                { id: 'guide', label: '입양 가이드', icon: 'ri-book-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-pink-600 text-pink-600'
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

        {/* Adoption Cases */}
        {activeTab === 'adoption' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Adoption Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCases.map((cat) => (
                  <div key={cat.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          입양 대기
                        </span>
                      </div>
                      {cat.specialNeeds.length > 0 && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            특별케어
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{cat.name}</h3>
                        <span className="text-sm text-gray-500">{cat.age}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div>성별: {cat.gender}</div>
                        <div>품종: {cat.breed}</div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="text-sm text-gray-600 mb-1">성격</div>
                        <div className="flex flex-wrap gap-1">
                          {cat.personality.slice(0, 2).map((trait) => (
                            <span key={trait} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                              {trait}
                            </span>
                          ))}
                          {cat.personality.length > 2 && (
                            <span className="text-pink-600 text-xs">+{cat.personality.length - 2}</span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {cat.story}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`flex items-center gap-1 ${cat.isSpayedNeutered ? 'text-green-600' : 'text-orange-600'}`}>
                            <i className="ri-scissors-line"></i>
                            {cat.isSpayedNeutered ? '중성화 완료' : '중성화 예정'}
                          </span>
                          <span className={`flex items-center gap-1 ${cat.isVaccinated ? 'text-green-600' : 'text-orange-600'}`}>
                            <i className="ri-shield-check-line"></i>
                            {cat.isVaccinated ? '접종 완료' : '접종 예정'}
                          </span>
                        </div>
                      </div>
                      
                      {cat.specialNeeds.length > 0 && (
                        <div className="mb-3">
                          <div className="text-xs text-gray-600 mb-1">특별 케어</div>
                          <div className="text-xs text-orange-600">
                            {cat.specialNeeds.join(', ')}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="text-gray-600">{cat.location}</span>
                        <span className="font-medium text-pink-600">
                          입양비: {cat.adoptionFee.toLocaleString()}원
                        </span>
                      </div>
                      
                        <button
                          data-cta="manual"
                          className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
                          onClick={goToContact('adoption')}
                        >
                          입양 문의하기
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sponsorship Programs */}
        {activeTab === 'sponsorship' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">후원 프로그램</h2>
                <p className="text-lg text-gray-600">
                  직접 입양이 어려우시다면 후원을 통해 고양이들을 도와주세요
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sponsorshipPrograms.map((program) => (
                  <div key={program.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {program.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-pink-600">
                          월 {program.monthlyAmount.toLocaleString()}원
                        </div>
                        <div className="text-sm text-gray-500">
                          {program.currentSponsors}/{program.maxSponsors}명 참여
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>참여율</span>
                          <span>{Math.round((program.currentSponsors / program.maxSponsors) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-pink-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(program.currentSponsors / program.maxSponsors) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">후원 혜택</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <i className="ri-check-line text-pink-600 mr-2"></i>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                        <button
                          className="w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                          onClick={goToRoute('/market/sponsor')}
                        >
                          후원 시작하기
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Success Stories */}
        {activeTab === 'success' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">입양 성공 스토리</h2>
                <p className="text-lg text-gray-600">
                  새로운 가족을 만난 고양이들의 행복한 이야기를 들어보세요
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    catName: '미미',
                    familyName: '김가족',
                    story: '길에서 구조된 미미가 이제는 김가족의 소중한 막내가 되었습니다. 처음엔 숨어만 있던 미미가 이제는 가족들 무릎에서 잠들어요.',
                    image: 'https://readdy.ai/api/search-image?query=happy%20adopted%20cat%20named%20Mimi%20with%20loving%20family%20in%20cozy%20home%20environment%20success%20story&width=400&height=250&seq=success1&orientation=landscape',
                    adoptionDate: '2023-12-15'
                  },
                  {
                    catName: '초코',
                    familyName: '이가족',
                    story: '교통사고로 다리를 다쳤던 초코가 이가족의 사랑으로 완전히 회복되었습니다. 이제는 집 안을 자유롭게 뛰어다녀요.',
                    image: 'https://readdy.ai/api/search-image?query=recovered%20cat%20named%20Choco%20playing%20happily%20with%20family%20after%20injury%20healing%20success%20story&width=400&height=250&seq=success2&orientation=landscape',
                    adoptionDate: '2023-11-20'
                  },
                  {
                    catName: '별님이',
                    familyName: '박가족',
                    story: '시니어 고양이 별님이가 박가족과 함께 편안한 노년을 보내고 있습니다. 매일 햇볕 아래서 낮잠을 자는 것이 일과예요.',
                    image: 'https://readdy.ai/api/search-image?query=senior%20cat%20named%20Byeolnim%20enjoying%20peaceful%20retirement%20with%20caring%20family%20in%20sunny%20spot&width=400&height=250&seq=success3&orientation=landscape',
                    adoptionDate: '2023-10-08'
                  },
                  {
                    catName: '구름이',
                    familyName: '최가족',
                    story: '새끼 때 구조된 구름이가 최가족의 첫째 아이와 함께 자라며 최고의 친구가 되었습니다. 함께 놀고 함께 잠들어요.',
                    image: 'https://readdy.ai/api/search-image?query=cat%20named%20Gureum%20growing%20up%20with%20child%20best%20friends%20playing%20together%20heartwarming%20adoption%20story&width=400&height=250&seq=success4&orientation=landscape',
                    adoptionDate: '2023-09-12'
                  },
                  {
                    catName: '호랑이',
                    familyName: '정가족',
                    story: '활발한 성격의 호랑이가 정가족과 함께 매일 새로운 모험을 즐기고 있습니다. 집 안 곳곳이 호랑이의 놀이터가 되었어요.',
                    image: 'https://readdy.ai/api/search-image?query=playful%20cat%20named%20Horangi%20having%20adventures%20with%20family%20exploring%20house%20active%20lifestyle&width=400&height=250&seq=success5&orientation=landscape',
                    adoptionDate: '2023-08-25'
                  },
                  {
                    catName: '공주',
                    familyName: '한가족',
                    story: '우아한 성격의 공주가 한가족의 집에서 진짜 공주님 대접을 받으며 살고 있습니다. 매일 브러싱과 마사지를 받아요.',
                    image: 'https://readdy.ai/api/search-image?query=elegant%20cat%20named%20Gongju%20being%20pampered%20like%20princess%20with%20grooming%20and%20massage%20royal%20treatment&width=400&height=250&seq=success6&orientation=landscape',
                    adoptionDate: '2023-07-30'
                  }
                ].map((story, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={story.image} 
                      alt={`${story.catName} 입양 성공 스토리`}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {story.catName} ❤️ {story.familyName}
                        </h3>
                        <span className="text-sm text-gray-500">{story.adoptionDate}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {story.story}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Adoption Guide */}
        {activeTab === 'guide' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">입양 가이드</h2>
                <p className="text-lg text-gray-600">
                  고양이 입양을 위한 준비사항과 절차를 안내해드립니다
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: '입양 전 준비사항',
                    content: [
                      '가족 구성원 모두의 동의 확인',
                      '충분한 시간과 경제적 여유 확보',
                      '고양이용 용품 준비 (사료, 화장실, 캐리어 등)',
                      '동물병원 알아보기',
                      '주거 환경 안전 점검'
                    ]
                  },
                  {
                    step: 2,
                    title: '입양 신청 절차',
                    content: [
                      '원하는 고양이 선택 및 입양 문의',
                      '입양 신청서 작성',
                      '전화 또는 화상 상담',
                      '필요시 가정 방문 상담',
                      '입양 계약서 작성'
                    ]
                  },
                  {
                    step: 3,
                    title: '입양 후 적응 기간',
                    content: [
                      '처음 1-2주는 조용한 환경 제공',
                      '충분한 시간을 두고 천천히 적응',
                      '정기적인 사료 급여와 화장실 관리',
                      '스트레스 신호 관찰',
                      '필요시 전문가 상담'
                    ]
                  },
                  {
                    step: 4,
                    title: '건강 관리',
                    content: [
                      '입양 후 1주일 내 건강검진',
                      '정기적인 예방접종',
                      '중성화 수술 (미완료 시)',
                      '정기적인 건강검진',
                      '응급상황 대비책 마련'
                    ]
                  }
                ].map((guide) => (
                  <div key={guide.step} className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {guide.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {guide.content.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="ri-check-line text-pink-600 mr-3 mt-0.5"></i>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">입양 상담 신청</h3>
                <p className="text-gray-600 mb-6">
                  궁금한 점이 있으시거나 입양을 원하시면 언제든 연락주세요
                </p>
                <div className="flex justify-center gap-4">
                    <button
                      className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                      onClick={goToContact('adoption')}
                    >
                      전화 상담 신청
                    </button>
                  <button className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-pink-600">
                    온라인 상담 신청
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


