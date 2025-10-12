
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface VolunteerActivity {
  id: number;
  title: string;
  type: string;
  location: string;
  date: string;
  time: string;
  participants: number;
  maxParticipants: number;
  description: string;
  requirements: string[];
  benefits: string[];
  image: string;
  organizer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface VolunteerStats {
  totalVolunteers: number;
  activeActivities: number;
  hoursContributed: number;
  catsHelped: number;
}

export default function VolunteerPage() {
  const [activeTab, setActiveTab] = useState('activities');
  const [selectedType, setSelectedType] = useState('전체');
  
  const activityTypes = ['전체', '구조 활동', '보호소 봉사', '의료 지원', '교육 프로그램', '행사 도움', '온라인 봉사'];
  
  const volunteerStats: VolunteerStats = {
    totalVolunteers: 2456,
    activeActivities: 48,
    hoursContributed: 15420,
    catsHelped: 3247
  };

  const volunteerActivities: VolunteerActivity[] = [
    {
      id: 1,
      title: '주말 길고양이 급식 봉사',
      type: '구조 활동',
      location: '서울시 강남구 역삼동 일대',
      date: '2024-01-20',
      time: '09:00 - 12:00',
      participants: 8,
      maxParticipants: 12,
      description: '매주 주말마다 진행되는 길고양이 급식 봉사활동입니다. 정해진 급식소를 돌며 사료와 물을 제공하고 고양이들의 건강상태를 체크합니다.',
      requirements: ['성인', '체력 양호', '정기 참여 가능'],
      benefits: ['봉사시간 인증', '교통비 지원', '간식 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20feeding%20street%20cats%20at%20feeding%20stations%20weekend%20morning%20activity%20caring%20for%20animals&width=400&height=250&seq=volunteer1&orientation=landscape',
      organizer: '강남구 길고양이 보호단체',
      difficulty: 'easy'
    },
    {
      id: 2,
      title: '보호소 청소 및 고양이 돌봄',
      type: '보호소 봉사',
      location: '경기도 성남시 분당구 보호소',
      date: '2024-01-21',
      time: '14:00 - 17:00',
      participants: 15,
      maxParticipants: 20,
      description: '보호소 내 청소, 고양이 케이지 정리, 사료 급여, 놀아주기 등의 활동을 합니다. 고양이들과 직접 교감할 수 있는 의미있는 봉사입니다.',
      requirements: ['동물 알레르기 없음', '체력 양호', '동물 경험 선호'],
      benefits: ['봉사시간 인증', '중식 제공', '보호소 견학'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20cleaning%20cat%20shelter%20and%20caring%20for%20cats%20playing%20with%20rescued%20animals%20shelter%20work&width=400&height=250&seq=volunteer2&orientation=landscape',
      organizer: '분당 동물보호센터',
      difficulty: 'medium'
    },
    {
      id: 3,
      title: '길고양이 중성화 수술 지원',
      type: '의료 지원',
      location: '부산시 해운대구 동물병원',
      date: '2024-01-22',
      time: '10:00 - 16:00',
      participants: 5,
      maxParticipants: 8,
      description: 'TNR 프로그램의 일환으로 길고양이 포획, 병원 이송, 수술 후 회복 관리를 도와주는 봉사활동입니다.',
      requirements: ['성인', '차량 운전 가능', '의료진 보조 경험 우대'],
      benefits: ['봉사시간 인증', '전문 교육 제공', '식사 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20assisting%20with%20TNR%20program%20cat%20spay%20neuter%20surgery%20support%20medical%20volunteer%20work&width=400&height=250&seq=volunteer3&orientation=landscape',
      organizer: '부산 TNR 네트워크',
      difficulty: 'hard'
    },
    {
      id: 4,
      title: '고양이 행동학 교육 프로그램 도우미',
      type: '교육 프로그램',
      location: '대구시 중구 커뮤니티센터',
      date: '2024-01-23',
      time: '19:00 - 21:00',
      participants: 12,
      maxParticipants: 15,
      description: '시민들을 대상으로 한 고양이 행동학 교육 프로그램에서 진행 보조, 자료 준비, 질의응답 도움 등의 역할을 합니다.',
      requirements: ['고등학생 이상', '고양이 기본 지식', '소통 능력'],
      benefits: ['봉사시간 인증', '교육 자료 제공', '수료증 발급'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20helping%20with%20cat%20behavior%20education%20program%20teaching%20community%20members%20about%20cats&width=400&height=250&seq=volunteer4&orientation=landscape',
      organizer: '대구 반려동물 교육센터',
      difficulty: 'easy'
    },
    {
      id: 5,
      title: '입양 박람회 부스 운영',
      type: '행사 도움',
      location: '인천시 연수구 컨벤션센터',
      date: '2024-01-24',
      time: '10:00 - 18:00',
      participants: 25,
      maxParticipants: 30,
      description: '입양 박람회에서 부스 설치, 방문객 안내, 입양 상담 보조, 고양이 돌봄 등의 업무를 담당합니다.',
      requirements: ['성인', '하루 종일 참여 가능', '친화력'],
      benefits: ['봉사시간 인증', '중식 제공', '기념품 증정'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20running%20adoption%20fair%20booth%20helping%20visitors%20meet%20cats%20for%20adoption%20event%20management&width=400&height=250&seq=volunteer5&orientation=landscape',
      organizer: '인천 동물보호협회',
      difficulty: 'medium'
    },
    {
      id: 6,
      title: '온라인 입양 홍보 콘텐츠 제작',
      type: '온라인 봉사',
      location: '재택근무 (온라인)',
      date: '2024-01-25',
      time: '자유시간',
      participants: 18,
      maxParticipants: 25,
      description: '입양 대기 고양이들의 프로필 작성, 사진 편집, SNS 홍보 콘텐츠 제작 등 온라인에서 할 수 있는 봉사활동입니다.',
      requirements: ['컴퓨터 활용 능력', '사진 편집 가능', '창의성'],
      benefits: ['봉사시간 인증', '포트폴리오 활용 가능', '온라인 교육'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20creating%20online%20content%20for%20cat%20adoption%20social%20media%20promotion%20digital%20volunteer%20work&width=400&height=250&seq=volunteer6&orientation=landscape',
      organizer: '묘연 디지털팀',
      difficulty: 'easy'
    },
    {
      id: 7,
      title: '길고양이 겨울 보온 쉼터 제작',
      type: '구조 활동',
      location: '광주시 북구 공원 일대',
      date: '2024-01-26',
      time: '13:00 - 17:00',
      participants: 10,
      maxParticipants: 15,
      description: '추운 겨울을 나는 길고양이들을 위한 보온 쉼터를 직접 제작하고 설치하는 봉사활동입니다.',
      requirements: ['성인', '간단한 목공 작업 가능', '체력 양호'],
      benefits: ['봉사시간 인증', '목공 기술 습득', '간식 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20building%20winter%20shelters%20for%20street%20cats%20woodworking%20construction%20warm%20houses%20for%20cats&width=400&height=250&seq=volunteer7&orientation=landscape',
      organizer: '광주 길고양이 사랑회',
      difficulty: 'medium'
    },
    {
      id: 8,
      title: '보호소 고양이 사회화 훈련',
      type: '보호소 봉사',
      location: '대전시 유성구 동물보호소',
      date: '2024-01-27',
      time: '15:00 - 18:00',
      participants: 8,
      maxParticipants: 12,
      description: '보호소 고양이들의 사회화를 위해 놀아주기, 브러싱, 안아주기 등의 활동을 통해 사람에게 친숙해지도록 도와줍니다.',
      requirements: ['동물 경험', '인내심', '부드러운 성격'],
      benefits: ['봉사시간 인증', '동물 행동학 교육', '간식 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20socializing%20shelter%20cats%20playing%20and%20training%20cats%20for%20better%20adoption%20chances&width=400&height=250&seq=volunteer8&orientation=landscape',
      organizer: '대전 동물보호센터',
      difficulty: 'easy'
    },
    {
      id: 9,
      title: '응급 구조 상황 대응팀',
      type: '구조 활동',
      location: '울산시 남구 (긴급 출동)',
      date: '2024-01-28',
      time: '24시간 대기',
      participants: 3,
      maxParticipants: 6,
      description: '응급 상황의 길고양이 구조를 위한 24시간 대기팀입니다. 신고 접수 시 즉시 출동하여 구조 활동을 진행합니다.',
      requirements: ['성인', '차량 보유', '응급처치 교육 이수', '24시간 대기 가능'],
      benefits: ['봉사시간 인증', '응급처치 교육', '구조 장비 제공'],
      image: 'https://readdy.ai/api/search-image?query=emergency%20cat%20rescue%20team%20volunteers%20responding%20to%20urgent%20situations%2024%20hour%20standby%20rescue%20work&width=400&height=250&seq=volunteer9&orientation=landscape',
      organizer: '울산 응급구조단',
      difficulty: 'hard'
    },
    {
      id: 10,
      title: '고양이 사진 촬영 봉사',
      type: '온라인 봉사',
      location: '경기도 수원시 보호소',
      date: '2024-01-29',
      time: '11:00 - 15:00',
      participants: 6,
      maxParticipants: 10,
      description: '입양 홍보를 위한 고양이 프로필 사진 촬영 봉사입니다. 전문적인 사진으로 입양 성공률을 높이는데 기여합니다.',
      requirements: ['사진 촬영 기술', '카메라 장비 보유', '동물 촬영 경험 우대'],
      benefits: ['봉사시간 인증', '포트폴리오 활용', '촬영 기법 교육'],
      image: 'https://readdy.ai/api/search-image?query=volunteer%20photographers%20taking%20professional%20photos%20of%20cats%20for%20adoption%20profiles%20studio%20setup&width=400&height=250&seq=volunteer10&orientation=landscape',
      organizer: '수원 사진작가 봉사단',
      difficulty: 'medium'
    },
    {
      id: 11,
      title: '길고양이 건강검진 캠페인',
      type: '의료 지원',
      location: '제주시 이도동 공원',
      date: '2024-01-30',
      time: '09:00 - 17:00',
      participants: 20,
      maxParticipants: 25,
      description: '이동 진료소를 통한 길고양이 무료 건강검진 캠페인입니다. 수의사와 함께 고양이 포획, 검진 보조, 기록 관리 등을 담당합니다.',
      requirements: ['성인', '의료진 보조 가능', '하루 종일 참여'],
      benefits: ['봉사시간 인증', '수의학 지식 습득', '중식 제공'],
      image: 'https://readdy.ai/api/search-image?query=mobile%20veterinary%20clinic%20volunteers%20helping%20with%20street%20cat%20health%20checkup%20campaign%20medical%20examination&width=400&height=250&seq=volunteer11&orientation=landscape',
      organizer: '제주 수의사회',
      difficulty: 'medium'
    },
    {
      id: 12,
      title: '고양이 용품 기부 정리 및 배송',
      type: '보호소 봉사',
      location: '강원도 춘천시 물류센터',
      date: '2024-01-31',
      time: '10:00 - 16:00',
      participants: 12,
      maxParticipants: 18,
      description: '시민들이 기부한 고양이 용품들을 정리하고 필요한 보호소나 개인에게 배송하는 봉사활동입니다.',
      requirements: ['성인', '체력 양호', '정리 정돈 능력'],
      benefits: ['봉사시간 인증', '물류 업무 경험', '중식 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20sorting%20and%20packaging%20donated%20cat%20supplies%20for%20distribution%20to%20shelters%20logistics%20work&width=400&height=250&seq=volunteer12&orientation=landscape',
      organizer: '춘천 동물복지센터',
      difficulty: 'easy'
    },
    {
      id: 13,
      title: '고양이 행동 교정 프로그램',
      type: '교육 프로그램',
      location: '충북 청주시 훈련센터',
      date: '2024-02-01',
      time: '14:00 - 18:00',
      participants: 8,
      maxParticipants: 12,
      description: '문제 행동을 보이는 고양이들의 행동 교정을 위한 전문 프로그램에서 보조 역할을 담당합니다.',
      requirements: ['동물 행동학 기초 지식', '인내심', '관찰력'],
      benefits: ['봉사시간 인증', '행동학 교육', '전문가 멘토링'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20assisting%20with%20cat%20behavior%20modification%20program%20training%20problematic%20cats%20professional%20guidance&width=400&height=250&seq=volunteer13&orientation=landscape',
      organizer: '청주 동물행동센터',
      difficulty: 'hard'
    },
    {
      id: 14,
      title: '온라인 입양 상담 및 매칭',
      type: '온라인 봉사',
      location: '재택근무 (온라인)',
      date: '2024-02-02',
      time: '19:00 - 22:00',
      participants: 15,
      maxParticipants: 20,
      description: '온라인으로 입양 희망자들과 상담하고 적합한 고양이를 매칭해주는 봉사활동입니다.',
      requirements: ['상담 경험', '고양이 전문 지식', '소통 능력'],
      benefits: ['봉사시간 인증', '상담 기법 교육', '온라인 교육'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20conducting%20online%20adoption%20counseling%20video%20calls%20matching%20cats%20with%20families%20digital%20consultation&width=400&height=250&seq=volunteer14&orientation=landscape',
      organizer: '묘연 입양팀',
      difficulty: 'medium'
    },
    {
      id: 15,
      title: '길고양이 급식소 청소 및 관리',
      type: '구조 활동',
      location: '경남 창원시 마산구 일대',
      date: '2024-02-03',
      time: '08:00 - 11:00',
      participants: 10,
      maxParticipants: 15,
      description: '정기적으로 길고양이 급식소를 청소하고 관리하는 봉사활동입니다. 위생적인 환경 유지가 주요 목표입니다.',
      requirements: ['성인', '체력 양호', '정기 참여 가능'],
      benefits: ['봉사시간 인증', '교통비 지원', '조식 제공'],
      image: 'https://readdy.ai/api/search-image?query=volunteers%20cleaning%20and%20maintaining%20street%20cat%20feeding%20stations%20hygiene%20management%20morning%20work&width=400&height=250&seq=volunteer15&orientation=landscape',
      organizer: '창원 길고양이 관리단',
      difficulty: 'easy'
    }
  ];

  const filteredActivities = selectedType === '전체' 
    ? volunteerActivities 
    : volunteerActivities.filter(activity => activity.type === selectedType);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '쉬움';
      case 'medium': return '보통';
      case 'hard': return '어려움';
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Volunteer%20helping%20street%20cats%20community%20service%20feeding%20caring%20for%20stray%20cats%20meaningful%20activities&width=1200&height=600&seq=volunteer-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
              봉사활동
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
              길고양이들을 위한 다양한 봉사활동에 참여하여 의미있는 변화를 만들어보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="space-button px-8 py-3 whitespace-nowrap">
                봉사 신청하기
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
                봉사자 가이드
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {volunteerStats.totalVolunteers.toLocaleString()}
                </div>
                <div className="text-gray-600">총 봉사자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {volunteerStats.activeActivities}
                </div>
                <div className="text-gray-600">진행중인 활동</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {volunteerStats.hoursContributed.toLocaleString()}
                </div>
                <div className="text-gray-600">누적 봉사시간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {volunteerStats.catsHelped.toLocaleString()}
                </div>
                <div className="text-gray-600">도움받은 고양이</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'activities', label: '봉사 활동', icon: 'ri-hand-heart-line' },
                { id: 'application', label: '봉사 신청', icon: 'ri-file-text-line' },
                { id: 'guide', label: '봉사자 가이드', icon: 'ri-book-line' },
                { id: 'community', label: '봉사자 커뮤니티', icon: 'ri-team-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
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

        {/* Volunteer Activities */}
        {activeTab === 'activities' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activityTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Activities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredActivities.map((activity) => (
                  <div key={activity.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {activity.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                          {getDifficultyText(activity.difficulty)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {activity.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <i className="ri-map-pin-line"></i>
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-calendar-line"></i>
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-time-line"></i>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {activity.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>참가자</span>
                          <span>{activity.participants}/{activity.maxParticipants}명</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(activity.participants / activity.maxParticipants) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">참여 조건</h4>
                        <div className="flex flex-wrap gap-1">
                          {activity.requirements.slice(0, 2).map((req) => (
                            <span key={req} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {req}
                            </span>
                          ))}
                          {activity.requirements.length > 2 && (
                            <span className="text-blue-600 text-xs">+{activity.requirements.length - 2}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span>주최: {activity.organizer}</span>
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                        참여 신청하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Application Form */}
        {activeTab === 'application' && (
          <section className="py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">봉사 신청서</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="실명을 입력해주세요"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        나이 *
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="만 나이"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      거주 지역 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8">
                      <option>서울특별시</option>
                      <option>부산광역시</option>
                      <option>대구광역시</option>
                      <option>인천광역시</option>
                      <option>광주광역시</option>
                      <option>대전광역시</option>
                      <option>울산광역시</option>
                      <option>세종특별자치시</option>
                      <option>경기도</option>
                      <option>강원도</option>
                      <option>충청북도</option>
                      <option>충청남도</option>
                      <option>전라북도</option>
                      <option>전라남도</option>
                      <option>경상북도</option>
                      <option>경상남도</option>
                      <option>제주특별자치도</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      관심 있는 봉사 활동 (복수 선택 가능)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {activityTypes.slice(1).map((type) => (
                        <label key={type} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      가능한 시간대
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['평일 오전', '평일 오후', '평일 저녁', '주말 오전', '주말 오후', '주말 저녁'].map((time) => (
                        <label key={time} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm text-gray-700">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      동물 관련 경험
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="반려동물 양육 경험, 봉사 경험, 관련 교육 이수 등을 자유롭게 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      봉사 동기 및 각오
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="봉사활동에 참여하고자 하는 동기와 각오를 작성해주세요"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-700">
                      개인정보 수집 및 이용에 동의합니다 *
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    봉사 신청하기
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Volunteer Guide */}
        {activeTab === 'guide' && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">봉사자 가이드</h2>
                <p className="text-lg text-gray-600">
                  효과적이고 안전한 봉사활동을 위한 가이드라인입니다
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: '봉사 전 준비사항',
                    icon: 'ri-checkbox-line',
                    items: [
                      '봉사활동에 적합한 복장 착용 (편한 신발, 더러워져도 괜찮은 옷)',
                      '개인 위생용품 준비 (손소독제, 마스크 등)',
                      '봉사활동 시간 및 장소 재확인',
                      '응급상황 대비 연락처 숙지',
                      '개인 알레르기나 건강상태 사전 고지'
                    ]
                  },
                  {
                    title: '안전 수칙',
                    icon: 'ri-shield-check-line',
                    items: [
                      '고양이 접촉 전후 반드시 손 소독',
                      '물림이나 할큄 사고 시 즉시 소독 및 신고',
                      '야생 고양이는 함부로 만지지 않기',
                      '봉사 중 부상 시 즉시 담당자에게 알리기',
                      '개인 안전장비 착용 (장갑, 마스크 등)'
                    ]
                  },
                  {
                    title: '고양이 다루는 방법',
                    icon: 'ri-heart-line',
                    items: [
                      '급작스러운 움직임이나 큰 소리 피하기',
                      '고양이가 먼저 다가올 때까지 기다리기',
                      '등 뒤에서 갑자기 만지지 않기',
                      '스트레스 신호 (하악질, 털 세우기 등) 인지하기',
                      '각 고양이의 성격과 특성 파악하기'
                    ]
                  },
                  {
                    title: '봉사 에티켓',
                    icon: 'ri-team-line',
                    items: [
                      '시간 약속 철저히 지키기',
                      '다른 봉사자들과 협력하여 활동하기',
                      '담당자의 지시사항 준수하기',
                      '개인적인 판단보다는 팀워크 우선하기',
                      '봉사활동 중 사진 촬영 시 허가받기'
                    ]
                  },
                  {
                    title: '응급상황 대처법',
                    icon: 'ri-first-aid-kit-line',
                    items: [
                      '고양이 부상 발견 시 즉시 담당자에게 신고',
                      '사람 부상 시 응급처치 후 병원 이송',
                      '화재나 자연재해 시 대피 요령 숙지',
                      '응급연락처 항상 휴대하기',
                      '상황 판단 후 119 신고 여부 결정'
                    ]
                  }
                ].map((guide, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <i className={`${guide.icon} text-blue-600 text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {guide.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <i className="ri-check-line text-blue-600 mr-3 mt-0.5"></i>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Volunteer Community */}
        {activeTab === 'community' && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">봉사자 커뮤니티</h2>
                <p className="text-lg text-gray-600">
                  함께 활동하는 봉사자들과 소통하고 경험을 나누세요
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Community Posts */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">최근 게시글</h3>
                  <div className="space-y-6">
                    {[
                      {
                        author: '김봉사',
                        title: '오늘 급식 봉사 후기',
                        content: '오늘 강남구 급식소에서 봉사했는데 고양이들이 정말 건강해 보였어요. 특히 삼색이가 사람을 많이 따르더라구요.',
                        time: '2시간 전',
                        likes: 12,
                        comments: 5
                      },
                      {
                        author: '이구조',
                        title: '응급구조 상황 공유',
                        content: '어제 밤 응급구조 출동했던 새끼 고양이가 수술 잘 마쳤다는 소식입니다. 모두 수고하셨어요!',
                        time: '5시간 전',
                        likes: 28,
                        comments: 15
                      },
                      {
                        author: '박사진',
                        title: '입양 사진 촬영 팁',
                        content: '입양 홍보용 사진 촬영할 때 자연광을 활용하면 훨씬 예쁘게 나와요. 몇 가지 팁 공유드립니다.',
                        time: '1일 전',
                        likes: 45,
                        comments: 23
                      }
                    ].map((post, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-bold">
                                {post.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{post.author}</div>
                              <div className="text-sm text-gray-500">{post.time}</div>
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-blue-600">
                            <i className="ri-heart-line"></i>
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-blue-600">
                            <i className="ri-chat-3-line"></i>
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-blue-600">
                            <i className="ri-share-line"></i>
                            <span>공유</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Top Volunteers */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">이달의 봉사자</h3>
                    <div className="space-y-3">
                      {[
                        { name: '최열정', hours: 48, badge: '🏆' },
                        { name: '김성실', hours: 42, badge: '🥈' },
                        { name: '이사랑', hours: 38, badge: '🥉' }
                      ].map((volunteer, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{volunteer.badge}</span>
                            <span className="font-medium text-gray-900">{volunteer.name}</span>
                          </div>
                          <span className="text-sm text-gray-600">{volunteer.hours}시간</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">다가오는 활동</h3>
                    <div className="space-y-3">
                      {[
                        { title: '주말 급식 봉사', date: '1월 20일', participants: 8 },
                        { title: '보호소 청소', date: '1월 21일', participants: 15 },
                        { title: '입양 박람회', date: '1월 24일', participants: 25 }
                      ].map((event, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-3">
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-600">
                            {event.date} • {event.participants}명 참여
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">바로가기</h3>
                    <div className="space-y-2">
                      {[
                        { title: '봉사 일정 확인', icon: 'ri-calendar-line' },
                        { title: '봉사시간 조회', icon: 'ri-time-line' },
                        { title: '교육 자료실', icon: 'ri-book-line' },
                        { title: '문의하기', icon: 'ri-question-line' }
                      ].map((link, index) => (
                        <button key={index} className="w-full flex items-center gap-3 p-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
                          <i className={`${link.icon} text-blue-600`}></i>
                          <span className="text-gray-700">{link.title}</span>
                        </button>
                      ))}
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
