
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface RescueCase {
  id: number;
  title: string;
  location: string;
  description: string;
  urgency: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  reportDate: string;
  image: string;
  reporter: string;
  volunteers: number;
  donationGoal: number;
  donationCurrent: number;
}

interface RescueStats {
  totalRescued: number;
  activeVolunteers: number;
  partneredShelters: number;
  monthlyRescues: number;
}

export default function RescuePage() {
  const [activeTab, setActiveTab] = useState('cases');
  const [selectedUrgency, setSelectedUrgency] = useState('전체');
  
  const urgencyFilters = ['전체', '긴급', '보통', '낮음'];
  
  const rescueStats: RescueStats = {
    totalRescued: 12847,
    activeVolunteers: 2456,
    partneredShelters: 89,
    monthlyRescues: 342
  };

  const rescueCases: RescueCase[] = [
    {
      id: 1,
      title: '새끼 고양이 3마리 긴급 구조 요청',
      location: '서울시 강남구 역삼동',
      description: '어미 고양이가 사라진 새끼 고양이 3마리가 추위에 떨고 있습니다. 생후 2개월 정도로 추정되며 즉시 구조가 필요한 상황입니다.',
      urgency: 'high',
      status: 'pending',
      reportDate: '2024-01-15',
      image: 'https://readdy.ai/api/search-image?query=three%20small%20kittens%20in%20cold%20weather%20needing%20rescue%20help%20abandoned%20baby%20cats%20outdoors&width=400&height=250&seq=rescue1&orientation=landscape',
      reporter: '김집사',
      volunteers: 0,
      donationGoal: 500000,
      donationCurrent: 125000
    },
    {
      id: 2,
      title: '부상당한 길고양이 치료 지원',
      location: '부산시 해운대구 우동',
      description: '교통사고로 다리를 다친 길고양이입니다. 현재 임시보호 중이며 수술비 지원이 필요합니다.',
      urgency: 'high',
      status: 'in-progress',
      reportDate: '2024-01-14',
      image: 'https://readdy.ai/api/search-image?query=injured%20street%20cat%20with%20bandaged%20leg%20receiving%20medical%20care%20at%20veterinary%20clinic&width=400&height=250&seq=rescue2&orientation=landscape',
      reporter: '이냥이',
      volunteers: 3,
      donationGoal: 800000,
      donationCurrent: 650000
    },
    {
      id: 3,
      title: '임신한 길고양이 안전한 출산 지원',
      location: '대구시 중구 동성로',
      description: '임신 말기의 길고양이가 안전한 출산 장소를 찾고 있습니다. 임시보호와 출산 후 중성화 수술이 필요합니다.',
      urgency: 'medium',
      status: 'in-progress',
      reportDate: '2024-01-13',
      image: 'https://readdy.ai/api/search-image?query=pregnant%20street%20cat%20in%20safe%20shelter%20environment%20preparing%20for%20birth%20with%20caring%20volunteers&width=400&height=250&seq=rescue3&orientation=landscape',
      reporter: '박구조',
      volunteers: 5,
      donationGoal: 600000,
      donationCurrent: 420000
    },
    {
      id: 4,
      title: '고양이 집단 서식지 TNR 프로젝트',
      location: '인천시 연수구 송도동',
      description: '약 15마리의 길고양이가 서식하는 지역의 TNR(중성화 후 방사) 프로젝트입니다. 체계적인 개체수 관리가 필요합니다.',
      urgency: 'medium',
      status: 'pending',
      reportDate: '2024-01-12',
      image: 'https://readdy.ai/api/search-image?query=TNR%20project%20with%20multiple%20street%20cats%20being%20cared%20for%20by%20volunteers%20in%20organized%20rescue%20operation&width=400&height=250&seq=rescue4&orientation=landscape',
      reporter: '최봉사',
      volunteers: 8,
      donationGoal: 1200000,
      donationCurrent: 890000
    },
    {
      id: 5,
      title: '겨울철 급식소 운영 지원',
      location: '광주시 북구 용봉동',
      description: '추운 겨울을 나는 길고양이들을 위한 급식소 운영 지원이 필요합니다. 사료와 보온용품 지원을 요청합니다.',
      urgency: 'low',
      status: 'completed',
      reportDate: '2024-01-11',
      image: 'https://readdy.ai/api/search-image?query=winter%20feeding%20station%20for%20street%20cats%20with%20warm%20shelter%20and%20food%20bowls%20snow%20environment&width=400&height=250&seq=rescue5&orientation=landscape',
      reporter: '정급식',
      volunteers: 12,
      donationGoal: 300000,
      donationCurrent: 300000
    },
    {
      id: 6,
      title: '새끼 고양이 사회화 프로그램',
      location: '대전시 유성구 궁동',
      description: '구조된 새끼 고양이들의 사회화 훈련과 입양 준비를 위한 프로그램입니다. 임시보호 가정을 찾고 있습니다.',
      urgency: 'low',
      status: 'in-progress',
      reportDate: '2024-01-10',
      image: 'https://readdy.ai/api/search-image?query=kitten%20socialization%20program%20with%20volunteers%20training%20young%20cats%20for%20adoption%20in%20warm%20environment&width=400&height=250&seq=rescue6&orientation=landscape',
      reporter: '김사회화',
      volunteers: 6,
      donationGoal: 400000,
      donationCurrent: 280000
    },
    {
      id: 7,
      title: '노령 길고양이 호스피스 케어',
      location: '울산시 남구 삼산동',
      description: '나이가 많은 길고양이의 마지막 시간을 편안하게 보낼 수 있도록 호스피스 케어를 제공합니다.',
      urgency: 'medium',
      status: 'in-progress',
      reportDate: '2024-01-09',
      image: 'https://readdy.ai/api/search-image?query=elderly%20street%20cat%20receiving%20gentle%20hospice%20care%20in%20comfortable%20environment%20with%20loving%20caregiver&width=400&height=250&seq=rescue7&orientation=landscape',
      reporter: '이호스피스',
      volunteers: 4,
      donationGoal: 350000,
      donationCurrent: 200000
    },
    {
      id: 8,
      title: '길고양이 건강검진 캠페인',
      location: '경기도 성남시 분당구',
      description: '지역 길고양이들의 건강상태 점검과 예방접종을 위한 무료 건강검진 캠페인입니다.',
      urgency: 'low',
      status: 'pending',
      reportDate: '2024-01-08',
      image: 'https://readdy.ai/api/search-image?query=veterinary%20health%20checkup%20campaign%20for%20street%20cats%20with%20mobile%20clinic%20and%20professional%20vets&width=400&height=250&seq=rescue8&orientation=landscape',
      reporter: '박건강',
      volunteers: 10,
      donationGoal: 700000,
      donationCurrent: 450000
    },
    {
      id: 9,
      title: '고양이 급식소 설치 프로젝트',
      location: '제주시 일도이동',
      description: '길고양이들이 안전하게 식사할 수 있는 급식소 설치 프로젝트입니다. 지속적인 관리와 사료 공급이 필요합니다.',
      urgency: 'low',
      status: 'completed',
      reportDate: '2024-01-07',
      image: 'https://readdy.ai/api/search-image?query=newly%20installed%20cat%20feeding%20station%20with%20multiple%20cats%20eating%20safely%20in%20organized%20feeding%20area&width=400&height=250&seq=rescue9&orientation=landscape',
      reporter: '강급식소',
      volunteers: 7,
      donationGoal: 250000,
      donationCurrent: 250000
    },
    {
      id: 10,
      title: '길고양이 겨울 보온 쉼터 제작',
      location: '강원도 춘천시 효자동',
      description: '추운 겨울을 나기 위한 길고양이 전용 보온 쉼터 제작 및 설치 프로젝트입니다.',
      urgency: 'medium',
      status: 'in-progress',
      reportDate: '2024-01-06',
      image: 'https://readdy.ai/api/search-image?query=winter%20shelter%20construction%20for%20street%20cats%20warm%20insulated%20cat%20houses%20being%20built%20by%20volunteers&width=400&height=250&seq=rescue10&orientation=landscape',
      reporter: '윤쉼터',
      volunteers: 9,
      donationGoal: 500000,
      donationCurrent: 380000
    },
    {
      id: 11,
      title: '고양이 중성화 수술 지원',
      location: '충북 청주시 상당구',
      description: '지역 길고양이들의 중성화 수술을 위한 의료비 지원 프로그램입니다.',
      urgency: 'medium',
      status: 'pending',
      reportDate: '2024-01-05',
      image: 'https://readdy.ai/api/search-image?query=spay%20neuter%20surgery%20support%20program%20for%20street%20cats%20at%20veterinary%20clinic%20professional%20medical%20care&width=400&height=250&seq=rescue11&orientation=landscape',
      reporter: '조중성화',
      volunteers: 5,
      donationGoal: 900000,
      donationCurrent: 560000
    },
    {
      id: 12,
      title: '길고양이 입양 박람회 개최',
      location: '경남 창원시 의창구',
      description: '구조된 길고양이들의 새로운 가족을 찾기 위한 입양 박람회를 개최합니다.',
      urgency: 'low',
      status: 'completed',
      reportDate: '2024-01-04',
      image: 'https://readdy.ai/api/search-image?query=cat%20adoption%20fair%20event%20with%20rescued%20cats%20meeting%20potential%20families%20happy%20adoption%20ceremony&width=400&height=250&seq=rescue12&orientation=landscape',
      reporter: '한입양',
      volunteers: 15,
      donationGoal: 200000,
      donationCurrent: 200000
    },
    {
      id: 13,
      title: '길고양이 응급처치 교육',
      location: '전북 전주시 완산구',
      description: '시민들을 대상으로 한 길고양이 응급처치 교육 프로그램입니다.',
      urgency: 'low',
      status: 'in-progress',
      reportDate: '2024-01-03',
      image: 'https://readdy.ai/api/search-image?query=first%20aid%20training%20for%20street%20cats%20with%20instructor%20teaching%20volunteers%20emergency%20care%20techniques&width=400&height=250&seq=rescue13&orientation=landscape',
      reporter: '임응급',
      volunteers: 8,
      donationGoal: 150000,
      donationCurrent: 120000
    },
    {
      id: 14,
      title: '고양이 구조 장비 구입',
      location: '전남 목포시 용해동',
      description: '안전한 고양이 구조를 위한 전문 장비 구입이 필요합니다.',
      urgency: 'medium',
      status: 'pending',
      reportDate: '2024-01-02',
      image: 'https://readdy.ai/api/search-image?query=professional%20cat%20rescue%20equipment%20and%20tools%20for%20safe%20animal%20rescue%20operations%20organized%20display&width=400&height=250&seq=rescue14&orientation=landscape',
      reporter: '서장비',
      volunteers: 3,
      donationGoal: 800000,
      donationCurrent: 320000
    },
    {
      id: 15,
      title: '길고양이 보호소 운영 지원',
      location: '경북 포항시 북구',
      description: '지역 길고양이 보호소의 운영비 지원과 시설 개선이 필요합니다.',
      urgency: 'high',
      status: 'in-progress',
      reportDate: '2024-01-01',
      image: 'https://readdy.ai/api/search-image?query=cat%20shelter%20facility%20with%20rescued%20cats%20being%20cared%20for%20by%20staff%20modern%20animal%20care%20center&width=400&height=250&seq=rescue15&orientation=landscape',
      reporter: '노보호소',
      volunteers: 20,
      donationGoal: 1500000,
      donationCurrent: 1200000
    }
  ];

  const filteredCases = selectedUrgency === '전체' 
    ? rescueCases 
    : rescueCases.filter(case_ => {
        if (selectedUrgency === '긴급') return case_.urgency === 'high';
        if (selectedUrgency === '보통') return case_.urgency === 'medium';
        if (selectedUrgency === '낮음') return case_.urgency === 'low';
        return true;
      });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'high': return '긴급';
      case 'medium': return '보통';
      case 'low': return '낮음';
      default: return '알 수 없음';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-orange-100 text-orange-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return '대기중';
      case 'in-progress': return '진행중';
      case 'completed': return '완료';
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Cat%20rescue%20operation%20with%20volunteers%20helping%20stray%20cats%2C%20green%20and%20emerald%20lighting%2C%20compassionate%20care%20environment&width=1200&height=600&seq=rescue-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(52, 211, 153, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>길고양이 구조</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              도움이 필요한 길고양이들을 함께 구조해주세요. 여러분의 작은 관심이 큰 변화를 만듭니다.
            </p>
            <div className="flex justify-center gap-4">
              <button className="space-button px-8 py-3 rounded-lg font-medium transition-colors">
                구조 신고하기
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                봉사자 신청
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {rescueStats.totalRescued.toLocaleString()}
                </div>
                <div className="text-gray-600">총 구조된 고양이</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {rescueStats.activeVolunteers.toLocaleString()}
                </div>
                <div className="text-gray-600">활동 봉사자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {rescueStats.partneredShelters}
                </div>
                <div className="text-gray-600">파트너 보호소</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {rescueStats.monthlyRescues}
                </div>
                <div className="text-gray-600">이달의 구조</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'cases', label: '구조 사례', icon: 'ri-heart-line' },
                { id: 'report', label: '구조 신고', icon: 'ri-alarm-line' },
                { id: 'volunteer', label: '봉사 참여', icon: 'ri-hand-heart-line' },
                { id: 'donate', label: '후원하기', icon: 'ri-gift-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600'
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

        {/* Rescue Cases */}
        {activeTab === 'cases' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {urgencyFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedUrgency(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedUrgency === filter
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCases.map((case_) => (
                  <div key={case_.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={case_.image} 
                        alt={case_.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(case_.urgency)}`}>
                          {getUrgencyText(case_.urgency)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                          {getStatusText(case_.status)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                        {case_.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <i className="ri-map-pin-line"></i>
                        <span>{case_.location}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {case_.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>후원 진행률</span>
                          <span>{Math.round((case_.donationCurrent / case_.donationGoal) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((case_.donationCurrent / case_.donationGoal) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{case_.donationCurrent.toLocaleString()}원</span>
                          <span>{case_.donationGoal.toLocaleString()}원</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <i className="ri-user-line"></i>
                          <span>{case_.reporter}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="ri-team-line"></i>
                          <span>{case_.volunteers}명 참여</span>
                        </div>
                        <span>{case_.reportDate}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                          후원하기
                        </button>
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          참여하기
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Report Form */}
        {activeTab === 'report' && (
          <section className="py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">구조 신고하기</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="구조가 필요한 상황을 간단히 설명해주세요"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      위치 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="구체적인 주소나 위치를 알려주세요"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      긴급도 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8">
                      <option>긴급 - 즉시 구조 필요</option>
                      <option>보통 - 며칠 내 구조 필요</option>
                      <option>낮음 - 장기적 관찰 필요</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      상세 설명 *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="고양이의 상태, 주변 환경, 접근 방법 등을 자세히 설명해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      사진 첨부
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <i className="ri-image-line text-3xl text-gray-400 mb-2"></i>
                      <p className="text-gray-600">사진을 드래그하거나 클릭하여 업로드</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="연락 가능한 전화번호를 입력해주세요"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    구조 신고 접수
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Volunteer Section */}
        {activeTab === 'volunteer' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">봉사 참여하기</h2>
                <p className="text-lg text-gray-600">
                  다양한 방법으로 길고양이 구조 활동에 참여할 수 있습니다
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: '현장 구조 봉사',
                    description: '직접 현장에서 고양이 구조 활동에 참여합니다',
                    icon: 'ri-hand-heart-line',
                    requirements: ['성인', '기본 교육 이수', '주말 활동 가능'],
                    time: '주말 4시간'
                  },
                  {
                    title: '임시보호 가정',
                    description: '구조된 고양이를 임시로 보호해주는 가정입니다',
                    icon: 'ri-home-heart-line',
                    requirements: ['반려동물 경험', '안전한 환경', '1개월 이상'],
                    time: '1-3개월'
                  },
                  {
                    title: '이송 봉사',
                    description: '고양이를 병원이나 보호소로 이송하는 봉사입니다',
                    icon: 'ri-car-line',
                    requirements: ['운전 가능', '차량 보유', '유연한 시간'],
                    time: '필요시'
                  },
                  {
                    title: '의료 봉사',
                    description: '수의사나 의료진으로서 전문적인 도움을 제공합니다',
                    icon: 'ri-stethoscope-line',
                    requirements: ['수의사 자격증', '의료 경험', '주말 가능'],
                    time: '주말 2-4시간'
                  },
                  {
                    title: '사료 배급 봉사',
                    description: '정기적으로 길고양이 급식소에 사료를 배급합니다',
                    icon: 'ri-bowl-line',
                    requirements: ['성실함', '정기적 참여', '체력'],
                    time: '주 2-3회'
                  },
                  {
                    title: '홍보 봉사',
                    description: '구조 활동을 알리고 입양을 도와주는 홍보 활동입니다',
                    icon: 'ri-megaphone-line',
                    requirements: ['SNS 활용', '소통 능력', '창의성'],
                    time: '자유시간'
                  }
                ].map((volunteer, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <i className={`${volunteer.icon} text-green-600 text-xl`}></i>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {volunteer.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {volunteer.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">참여 조건</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {volunteer.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center">
                            <i className="ri-check-line text-green-600 mr-2"></i>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">소요 시간</span>
                      <span className="text-sm font-medium text-gray-900">{volunteer.time}</span>
                    </div>
                    
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      신청하기
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Donation Section */}
        {activeTab === 'donate' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">후원하기</h2>
                <p className="text-lg text-gray-600">
                  여러분의 후원이 길고양이들의 생명을 구합니다
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Donation Options */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">후원 방법</h3>
                  
                  <div className="space-y-4 mb-6">
                    {[
                      { amount: '10,000원', description: '한 마리 고양이 한 달 사료비' },
                      { amount: '30,000원', description: '기본 건강검진 및 예방접종' },
                      { amount: '50,000원', description: '중성화 수술비' },
                      { amount: '100,000원', description: '응급 치료비' },
                      { amount: '직접 입력', description: '원하는 금액으로 후원' }
                    ].map((option, index) => (
                      <label key={index} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="donation" className="mr-3" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{option.amount}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      후원자 정보
                    </label>
                    <input
                      type="text"
                      placeholder="이름"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
                    />
                    <input
                      type="email"
                      placeholder="이메일"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    후원하기
                  </button>
                </div>

                {/* Impact Stats */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">후원 효과</h3>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">12,847</div>
                      <div className="text-gray-600">구조된 고양이</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">8,920</div>
                        <div className="text-sm text-gray-600">중성화 완료</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">6,543</div>
                        <div className="text-sm text-gray-600">입양 성공</div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">이달의 성과</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 342마리 구조 완료</li>
                        <li>• 189마리 중성화 수술</li>
                        <li>• 156마리 새 가족 찾기</li>
                        <li>• 23개 급식소 운영</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-4">
                        여러분의 후원으로 더 많은 생명을 구할 수 있습니다
                      </p>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        자세한 활동 보고서 보기 →
                      </button>
                    </div>
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
