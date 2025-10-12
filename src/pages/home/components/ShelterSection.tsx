
import { useState } from 'react';
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function ShelterSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const features = [
    {
      icon: 'ri-heart-line',
      title: '투명한 후원',
      description: '블록체인 기반으로 후원금 사용 내역을 실시간으로 추적할 수 있습니다',
      stats: '누적 후원금 2.4억원'
    },
    {
      icon: 'ri-home-heart-line',
      title: '입양 연결',
      description: 'AI 매칭 시스템으로 최적의 입양 가정을 찾아드립니다',
      stats: '성공 입양 1,247마리'
    },
    {
      icon: 'ri-hand-heart-line',
      title: '봉사 참여',
      description: '지역별 봉사 활동에 참여하고 의미있는 시간을 보내세요',
      stats: '활동 봉사자 3,892명'
    },
    {
      icon: 'ri-map-pin-line',
      title: '구조 네트워크',
      description: '길고양이 발견 시 자동으로 인근 구조팀에 알림이 전송됩니다',
      stats: '구조 완료 892마리'
    }
  ];

  const rescueCases = [
    {
      name: '나비',
      age: '2개월',
      location: '서울 강남구',
      status: '입양 완료',
      image: 'https://readdy.ai/api/search-image?query=Adorable%20rescued%20kitten%20with%20bright%20eyes%2C%20healthy%20and%20happy%20appearance%2C%20sitting%20in%20a%20cozy%20shelter%20environment%2C%20warm%20lighting%2C%20heartwarming%20rescue%20story%20photo%2C%20professional%20pet%20photography%20style%20with%20soft%20background&width=300&height=300&seq=rescue1&orientation=squarish'
    },
    {
      name: '구름이',
      age: '1살',
      location: '경기 성남시',
      status: '치료 중',
      image: 'https://readdy.ai/api/search-image?query=White%20fluffy%20cat%20recovering%20in%20a%20veterinary%20clinic%2C%20gentle%20and%20calm%20expression%2C%20medical%20care%20environment%2C%20hopeful%20atmosphere%2C%20professional%20animal%20care%20photography%20with%20clean%20background&width=300&height=300&seq=rescue2&orientation=squarish'
    },
    {
      name: '별이',
      age: '6개월',
      location: '인천 부평구',
      status: '입양 대기',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20cat%20waiting%20for%20adoption%2C%20sitting%20in%20a%20comfortable%20shelter%20space%2C%20hopeful%20expression%2C%20warm%20and%20inviting%20atmosphere%2C%20adoption%20center%20photography%20style%20with%20soft%20lighting&width=300&height=300&seq=rescue3&orientation=squarish'
    }
  ];

  const myDonations = [
    {
      date: '2025-01-15',
      amount: 50000,
      type: '정기후원',
      recipient: '서울 강남 길고양이 쉼터',
      impact: '나비, 구름이 사료비 지원',
      status: '전달완료'
    },
    {
      date: '2025-01-10',
      amount: 30000,
      type: '의료비 후원',
      recipient: '부산 동래구 동물병원',
      impact: '별이 중성화 수술 완료',
      status: '전달완료'
    },
    {
      date: '2025-01-05',
      amount: 20000,
      type: '긴급구조',
      recipient: '인천 구조팀',
      impact: '교통사고 고양이 응급치료',
      status: '치료중'
    }
  ];

  const crewStats = [
    {
      name: '강남구 집사들',
      members: 24,
      totalDonation: 1250000,
      rank: 1,
      badge: '🏆'
    },
    {
      name: '홍대 냥이사랑',
      members: 18,
      totalDonation: 980000,
      rank: 2,
      badge: '🥈'
    },
    {
      name: '판교 테크집사',
      members: 31,
      totalDonation: 850000,
      rank: 3,
      badge: '🥉'
    }
  ];

  const donationStats = {
    totalAmount: 2400000000,
    totalCats: 1247,
    activeDonors: 15432,
    shelters: 89,
    monthlyGrowth: 23.5
  };

  return (
    <section id="shelter" className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
            <i className="ri-heart-3-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            길고양이 구조 네트워크
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-pink-500 font-semibold">돈이 없어도 구조할 수 있게</span><br />
            모든 생명이 사랑받을 수 있는 세상을 만듭니다
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-sm font-semibold text-pink-500">{feature.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Dashboard */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              블록체인 후원 투명성 대시보드
            </h3>
            <p className="text-gray-600 text-lg">
              내 후원이 어떻게 사용되고 있는지 실시간으로 확인하세요
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-full p-1">
            {[
              { id: 'dashboard', label: '내 후원 현황', icon: 'ri-dashboard-line' },
              { id: 'crew', label: '크루 활동', icon: 'ri-team-line' },
              { id: 'stats', label: '전체 통계', icon: 'ri-bar-chart-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">₩100,000</div>
                  <div className="text-sm text-pink-700">총 후원금액</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">7마리</div>
                  <div className="text-sm text-purple-700">도움받은 고양이</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3개</div>
                  <div className="text-sm text-green-700">지원한 쉼터</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15일</div>
                  <div className="text-sm text-blue-700">연속 후원일</div>
                </div>
              </div>

              {/* Recent Donations */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">최근 후원 내역</h4>
                <div className="space-y-4">
                  {myDonations.map((donation, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-lg font-semibold text-gray-800">
                            ₩{donation.amount.toLocaleString()}
                          </span>
                          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                            {donation.type}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            donation.status === '전달완료' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {donation.status}
                          </span>
                        </div>
                        <div className="text-gray-600 text-sm mb-1">
                          <i className="ri-calendar-line mr-2"></i>
                          {donation.date}
                        </div>
                        <div className="text-gray-600 text-sm mb-1">
                          <i className="ri-building-line mr-2"></i>
                          {donation.recipient}
                        </div>
                        <div className="text-gray-800 font-medium">
                          <i className="ri-heart-fill mr-2 text-pink-500"></i>
                          {donation.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Crew Activity Tab */}
          {activeTab === 'crew' && (
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">크루 기부 배틀</h4>
                <p className="text-gray-600">동네 집사들과 함께 기부 활동에 참여하세요</p>
              </div>

              {/* Crew Rankings */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {crewStats.map((crew, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border-2 border-gray-100 hover:border-pink-200 transition-colors">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{crew.badge}</div>
                      <h5 className="font-bold text-gray-800 mb-2">{crew.name}</h5>
                      <div className="text-2xl font-bold text-pink-500 mb-2">
                        ₩{crew.totalDonation.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {crew.members}명 참여 • {crew.rank}위
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Join Crew CTA */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 text-center text-white">
                <h4 className="text-2xl font-bold mb-4">우리 동네 크루에 참여하세요!</h4>
                <p className="mb-6">함께 기부하면 더 큰 변화를 만들 수 있습니다</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-pink-500 border-white hover:bg-gray-50"
                    onClick={() => navigateTo('/community')}
                  >
                    <i className="ri-add-line mr-2"></i>
                    크루 만들기
                  </Button>
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => navigateTo('/community')}
                  >
                    <i className="ri-search-line mr-2"></i>
                    크루 찾기
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">전체 기부 통계</h4>
                <p className="text-gray-600">묘연 커뮤니티의 기부 현황을 한눈에 확인하세요</p>
              </div>

              {/* Global Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                  <i className="ri-money-dollar-circle-line text-3xl text-pink-600 mb-3"></i>
                  <div className="text-2xl font-bold text-pink-600 mb-2">
                    ₩{(donationStats.totalAmount / 100000000).toFixed(1)}억
                  </div>
                  <div className="text-sm text-pink-700">총 후원금액</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
                  <i className="ri-heart-3-line text-3xl text-purple-600 mb-3"></i>
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {donationStats.totalCats.toLocaleString()}
                  </div>
                  <div className="text-sm text-purple-700">구조된 고양이</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center">
                  <i className="ri-user-heart-line text-3xl text-green-600 mb-3"></i>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {donationStats.activeDonors.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-700">활성 후원자</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
                  <i className="ri-building-2-line text-3xl text-blue-600 mb-3"></i>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {donationStats.shelters}
                  </div>
                  <div className="text-sm text-blue-700">협력 쉼터</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 text-center">
                  <i className="ri-arrow-up-line text-3xl text-orange-600 mb-3"></i>
                  <div className="text-2xl font-bold text-orange-600 mb-2">
                    +{donationStats.monthlyGrowth}%
                  </div>
                  <div className="text-sm text-orange-700">월간 성장률</div>
                </div>
              </div>

              {/* Impact Stories */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
                <h5 className="text-xl font-bold text-gray-800 mb-6 text-center">이달의 임팩트 스토리</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-hospital-line text-white text-2xl"></i>
                    </div>
                    <h6 className="font-bold text-gray-800 mb-2">응급 수술 성공</h6>
                    <p className="text-sm text-gray-600">교통사고로 다친 고양이 12마리가 여러분의 후원으로 건강을 되찾았습니다</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-home-heart-line text-white text-2xl"></i>
                    </div>
                    <h6 className="font-bold text-gray-800 mb-2">새로운 쉼터 개소</h6>
                    <p className="text-sm text-gray-600">부산 해운대구에 새로운 임시보호소가 문을 열어 50마리를 보호하고 있습니다</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-graduation-cap-line text-white text-2xl"></i>
                    </div>
                    <h6 className="font-bold text-gray-800 mb-2">교육 프로그램 확대</h6>
                    <p className="text-sm text-gray-600">올바른 반려동물 문화 교육을 통해 유기동물 발생을 예방하고 있습니다</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rescue Cases */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            최근 구조 사례
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rescueCases.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    cat.status === '입양 완료' ? 'bg-green-100 text-green-800' :
                    cat.status === '치료 중' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {cat.status}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{cat.name}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-time-line mr-2"></i>
                      <span>{cat.age}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-map-pin-line mr-2"></i>
                      <span>{cat.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map-based Rescue Network */}
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              지도 기반 구조 알림 시스템
            </h3>
            <p className="text-gray-600 text-lg">
              길고양이 발견 시 GPS 기반으로 인근 구조팀에 자동 알림이 전송됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '01',
                title: '발견 신고',
                description: '앱에서 위치와 사진을 업로드합니다'
              },
              {
                step: '02',
                title: '자동 매칭',
                description: 'AI가 인근 구조팀을 자동으로 찾아 알림을 보냅니다'
              },
              {
                step: '03',
                title: '신속 구조',
                description: '전문 구조팀이 현장에 출동하여 안전하게 구조합니다'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-pink-500">{step.step}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigateTo('/market/sponsor')}>
                <i className="ri-heart-fill mr-2"></i>
                후원하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigateTo('/rescue')}
              >
                <i className="ri-alarm-line mr-2"></i>
                구조 요청하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
