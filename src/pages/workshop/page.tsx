
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Workshop {
  id: number;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  image: string;
  description: string;
  materials: string[];
  difficulty: string;
  category: string;
  isPopular?: boolean;
  isSoldOut?: boolean;
}

const Workshop = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedDate, setSelectedDate] = useState('전체');

  const categories = ['전체', '그루밍', 'DIY 제작', '사진촬영', '요리', '행동교정', '건강관리'];
  const dates = ['전체', '이번주', '다음주', '이번달', '다음달'];

  const workshops: Workshop[] = [
    {
      id: 1,
      title: '고양이 홈그루밍 마스터 클래스',
      instructor: '김그루밍 전문가',
      date: '2024-01-15',
      time: '14:00-17:00',
      duration: '3시간',
      location: '강남 묘연센터',
      price: 85000,
      maxParticipants: 12,
      currentParticipants: 8,
      image: 'https://readdy.ai/api/search-image?query=cat%20grooming%20workshop%2C%20professional%20groomer%20teaching%20cat%20care%20techniques%2C%20hands-on%20training%20session&width=400&height=250&seq=1&orientation=landscape',
      description: '집에서 할 수 있는 전문적인 고양이 그루밍 기법을 배워보세요',
      materials: ['그루밍 도구 세트', '실습용 인형', '교재'],
      difficulty: '초급',
      category: '그루밍',
      isPopular: true
    },
    {
      id: 2,
      title: '고양이 장난감 DIY 워크샵',
      instructor: '박만들기 공예가',
      date: '2024-01-18',
      time: '10:00-13:00',
      duration: '3시간',
      location: '홍대 크리에이티브 스튜디오',
      price: 45000,
      maxParticipants: 15,
      currentParticipants: 12,
      image: 'https://readdy.ai/api/search-image?query=DIY%20cat%20toy%20making%20workshop%2C%20crafting%20colorful%20handmade%20cat%20toys%2C%20creative%20workshop%20environment&width=400&height=250&seq=2&orientation=landscape',
      description: '고양이가 좋아하는 수제 장난감을 직접 만들어보는 시간',
      materials: ['천 조각', '솜', '바느질 도구', '캣닢'],
      difficulty: '초급',
      category: 'DIY 제작'
    },
    {
      id: 3,
      title: '고양이 인스타그램 사진 촬영법',
      instructor: '최사진 인플루언서',
      date: '2024-01-20',
      time: '15:00-18:00',
      duration: '3시간',
      location: '성수동 포토 스튜디오',
      price: 75000,
      maxParticipants: 10,
      currentParticipants: 10,
      image: 'https://readdy.ai/api/search-image?query=cat%20photography%20workshop%2C%20photographer%20teaching%20Instagram-worthy%20cat%20photos%2C%20studio%20lighting%20setup&width=400&height=250&seq=3&orientation=landscape',
      description: '인스타그램에서 화제가 될 고양이 사진 촬영 노하우',
      materials: ['조명 장비', '소품', '편집 프로그램'],
      difficulty: '중급',
      category: '사진촬영',
      isSoldOut: true
    },
    {
      id: 4,
      title: '고양이 수제 간식 만들기',
      instructor: '이요리 셰프',
      date: '2024-01-22',
      time: '11:00-14:00',
      duration: '3시간',
      location: '이태원 쿠킹 스튜디오',
      price: 65000,
      maxParticipants: 8,
      currentParticipants: 5,
      image: 'https://readdy.ai/api/search-image?query=cat%20treat%20cooking%20workshop%2C%20chef%20teaching%20healthy%20homemade%20cat%20food%20preparation%2C%20kitchen%20setting&width=400&height=250&seq=4&orientation=landscape',
      description: '건강하고 맛있는 고양이 수제 간식 레시피',
      materials: ['요리 재료', '조리 도구', '포장 용기'],
      difficulty: '초급',
      category: '요리',
      isPopular: true
    },
    {
      id: 5,
      title: '고양이 행동 이해하기',
      instructor: '정행동 전문가',
      date: '2024-01-25',
      time: '19:00-21:00',
      duration: '2시간',
      location: '종로 묘연 교육센터',
      price: 35000,
      maxParticipants: 20,
      currentParticipants: 16,
      image: 'https://readdy.ai/api/search-image?query=cat%20behavior%20workshop%2C%20animal%20behaviorist%20explaining%20cat%20psychology%2C%20educational%20seminar%20setting&width=400&height=250&seq=5&orientation=landscape',
      description: '고양이의 행동 언어를 이해하고 소통하는 방법',
      materials: ['교재', '행동 분석 차트'],
      difficulty: '초급',
      category: '행동교정'
    },
    {
      id: 6,
      title: '고양이 스크래처 제작 워크샵',
      instructor: '한목공 장인',
      date: '2024-01-27',
      time: '13:00-17:00',
      duration: '4시간',
      location: '마포 목공방',
      price: 95000,
      maxParticipants: 6,
      currentParticipants: 4,
      image: 'https://readdy.ai/api/search-image?query=cat%20scratcher%20making%20workshop%2C%20woodworking%20craftsman%20building%20cat%20furniture%2C%20workshop%20with%20tools&width=400&height=250&seq=6&orientation=landscape',
      description: '원목으로 만드는 튼튼하고 예쁜 고양이 스크래처',
      materials: ['원목 재료', '목공 도구', '사포', '마감재'],
      difficulty: '중급',
      category: 'DIY 제작'
    },
    {
      id: 7,
      title: '고양이 응급처치 실습',
      instructor: '윤응급 수의사',
      date: '2024-01-29',
      time: '14:00-17:00',
      duration: '3시간',
      location: '서초 동물병원',
      price: 120000,
      maxParticipants: 8,
      currentParticipants: 6,
      image: 'https://readdy.ai/api/search-image?query=cat%20first%20aid%20workshop%2C%20veterinarian%20teaching%20emergency%20care%20for%20cats%2C%20medical%20training%20session&width=400&height=250&seq=7&orientation=landscape',
      description: '응급상황에서 고양이를 도울 수 있는 실용적 기술',
      materials: ['응급처치 키트', '실습용 모형', '매뉴얼'],
      difficulty: '중급',
      category: '건강관리',
      isPopular: true
    },
    {
      id: 8,
      title: '고양이 캣타워 DIY',
      instructor: '조조립 전문가',
      date: '2024-02-01',
      time: '10:00-15:00',
      duration: '5시간',
      location: '용산 메이커스페이스',
      price: 150000,
      maxParticipants: 10,
      currentParticipants: 7,
      image: 'https://readdy.ai/api/search-image?query=cat%20tower%20DIY%20workshop%2C%20building%20custom%20cat%20furniture%2C%20assembly%20workshop%20with%20materials&width=400&height=250&seq=8&orientation=landscape',
      description: '우리 집에 딱 맞는 맞춤형 캣타워 제작',
      materials: ['목재', '조립 도구', '쿠션', '로프'],
      difficulty: '고급',
      category: 'DIY 제작'
    },
    {
      id: 9,
      title: '고양이 마사지 테라피',
      instructor: '마테라피 힐러',
      date: '2024-02-03',
      time: '16:00-18:00',
      duration: '2시간',
      location: '강남 힐링센터',
      price: 55000,
      maxParticipants: 12,
      currentParticipants: 9,
      image: 'https://readdy.ai/api/search-image?query=cat%20massage%20therapy%20workshop%2C%20gentle%20hands%20massaging%20relaxed%20cat%2C%20peaceful%20healing%20environment&width=400&height=250&seq=9&orientation=landscape',
      description: '고양이의 스트레스를 완화하는 마사지 기법',
      materials: ['마사지 오일', '수건', '가이드북'],
      difficulty: '초급',
      category: '건강관리'
    },
    {
      id: 10,
      title: '고양이 패션 액세서리 만들기',
      instructor: '스타일 디자이너',
      date: '2024-02-05',
      time: '13:00-16:00',
      duration: '3시간',
      location: '명동 패션 스튜디오',
      price: 70000,
      maxParticipants: 8,
      currentParticipants: 6,
      image: 'https://readdy.ai/api/search-image?query=cat%20fashion%20accessory%20workshop%2C%20designing%20stylish%20cat%20collars%20and%20accessories%2C%20fashion%20design%20studio&width=400&height=250&seq=10&orientation=landscape',
      description: '고양이를 위한 세련된 액세서리 디자인과 제작',
      materials: ['원단', '장식품', '재봉틀', '패턴'],
      difficulty: '중급',
      category: 'DIY 제작'
    },
    {
      id: 11,
      title: '고양이 영양 상담 워크샵',
      instructor: '김영양 박사',
      date: '2024-02-08',
      time: '19:00-21:00',
      duration: '2시간',
      location: '서울대 수의대',
      price: 40000,
      maxParticipants: 25,
      currentParticipants: 18,
      image: 'https://readdy.ai/api/search-image?query=cat%20nutrition%20workshop%2C%20veterinary%20nutritionist%20teaching%20healthy%20cat%20diet%2C%20educational%20seminar&width=400&height=250&seq=11&orientation=landscape',
      description: '고양이의 생애주기별 영양 관리 방법',
      materials: ['영양 가이드', '사료 샘플', '체크리스트'],
      difficulty: '초급',
      category: '건강관리'
    },
    {
      id: 12,
      title: '고양이 동영상 편집 클래스',
      instructor: '유편집 크리에이터',
      date: '2024-02-10',
      time: '14:00-18:00',
      duration: '4시간',
      location: '디지털미디어시티',
      price: 90000,
      maxParticipants: 12,
      currentParticipants: 10,
      image: 'https://readdy.ai/api/search-image?query=cat%20video%20editing%20workshop%2C%20content%20creator%20teaching%20video%20production%2C%20computer%20lab%20setting&width=400&height=250&seq=12&orientation=landscape',
      description: '바이럴 고양이 영상 제작과 편집 기술',
      materials: ['편집 소프트웨어', '샘플 영상', '가이드북'],
      difficulty: '중급',
      category: '사진촬영'
    },
    {
      id: 13,
      title: '고양이 행동 교정 실습',
      instructor: '트레이닝 전문가',
      date: '2024-02-12',
      time: '10:00-13:00',
      duration: '3시간',
      location: '동작구 트레이닝센터',
      price: 80000,
      maxParticipants: 6,
      currentParticipants: 4,
      image: 'https://readdy.ai/api/search-image?query=cat%20behavior%20training%20workshop%2C%20professional%20trainer%20working%20with%20cats%2C%20positive%20reinforcement%20training&width=400&height=250&seq=13&orientation=landscape',
      description: '문제 행동을 교정하는 실용적 트레이닝',
      materials: ['클리커', '간식', '훈련 도구'],
      difficulty: '고급',
      category: '행동교정'
    },
    {
      id: 14,
      title: '고양이 아로마테라피 만들기',
      instructor: '아로마 테라피스트',
      date: '2024-02-15',
      time: '15:00-17:00',
      duration: '2시간',
      location: '압구정 아로마샵',
      price: 60000,
      maxParticipants: 10,
      currentParticipants: 8,
      image: 'https://readdy.ai/api/search-image?query=cat%20aromatherapy%20workshop%2C%20making%20natural%20scents%20for%20cats%2C%20peaceful%20aromatherapy%20studio&width=400&height=250&seq=14&orientation=landscape',
      description: '고양이에게 안전한 천연 아로마 제품 만들기',
      materials: ['에센셜 오일', '캐리어 오일', '용기', '라벨'],
      difficulty: '초급',
      category: '건강관리'
    },
    {
      id: 15,
      title: '고양이 캐릭터 그리기',
      instructor: '일러스트 작가',
      date: '2024-02-17',
      time: '13:00-16:00',
      duration: '3시간',
      location: '홍대 아트센터',
      price: 65000,
      maxParticipants: 15,
      currentParticipants: 11,
      image: 'https://readdy.ai/api/search-image?query=cat%20character%20drawing%20workshop%2C%20artist%20teaching%20cute%20cat%20illustration%2C%20art%20studio%20with%20drawing%20materials&width=400&height=250&seq=15&orientation=landscape',
      description: '귀여운 고양이 캐릭터 일러스트 그리기',
      materials: ['드로잉 패드', '색연필', '마커', '스케치북'],
      difficulty: '초급',
      category: 'DIY 제작'
    },
    {
      id: 16,
      title: '고양이 건강 체크 워크샵',
      instructor: '건강관리 전문가',
      date: '2024-02-19',
      time: '18:00-20:00',
      duration: '2시간',
      location: '강서구 동물병원',
      price: 45000,
      maxParticipants: 20,
      currentParticipants: 15,
      image: 'https://readdy.ai/api/search-image?query=cat%20health%20check%20workshop%2C%20veterinarian%20teaching%20basic%20health%20examination%2C%20medical%20education%20setting&width=400&height=250&seq=16&orientation=landscape',
      description: '집에서 할 수 있는 기본적인 건강 체크 방법',
      materials: ['체크리스트', '온도계', '가이드북'],
      difficulty: '초급',
      category: '건강관리'
    },
    {
      id: 17,
      title: '고양이 놀이터 설계하기',
      instructor: '인테리어 디자이너',
      date: '2024-02-22',
      time: '14:00-17:00',
      duration: '3시간',
      location: '성동구 디자인센터',
      price: 85000,
      maxParticipants: 8,
      currentParticipants: 6,
      image: 'https://readdy.ai/api/search-image?query=cat%20playground%20design%20workshop%2C%20interior%20designer%20planning%20cat-friendly%20space%2C%20design%20studio%20setting&width=400&height=250&seq=17&orientation=landscape',
      description: '고양이 친화적인 실내 공간 설계 노하우',
      materials: ['설계 도구', '샘플 자료', '측정 도구'],
      difficulty: '중급',
      category: 'DIY 제작'
    },
    {
      id: 18,
      title: '고양이 스트레스 관리법',
      instructor: '동물심리 상담사',
      date: '2024-02-24',
      time: '16:00-18:00',
      duration: '2시간',
      location: '중구 상담센터',
      price: 50000,
      maxParticipants: 15,
      currentParticipants: 12,
      image: 'https://readdy.ai/api/search-image?query=cat%20stress%20management%20workshop%2C%20animal%20psychologist%20teaching%20stress%20relief%20techniques%2C%20calm%20counseling%20environment&width=400&height=250&seq=18&orientation=landscape',
      description: '고양이의 스트레스 신호와 관리 방법',
      materials: ['스트레스 체크표', '이완 도구', '가이드북'],
      difficulty: '초급',
      category: '건강관리'
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    const workshopDate = new Date(workshop.date);
    const now = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    let dateMatch = true;
    if (selectedDate === '이번주') {
      dateMatch = workshopDate.getTime() - now.getTime() <= oneWeek;
    } else if (selectedDate === '다음주') {
      dateMatch = workshopDate.getTime() - now.getTime() > oneWeek && workshopDate.getTime() - now.getTime() <= 2 * oneWeek;
    } else if (selectedDate === '이번달') {
      dateMatch = workshopDate.getTime() - now.getTime() <= oneMonth;
    } else if (selectedDate === '다음달') {
      dateMatch = workshopDate.getTime() - now.getTime() > oneMonth;
    }

    return (
      (selectedCategory === '전체' || workshop.category === selectedCategory) &&
      dateMatch
    );
  });

  return (
    <div className="min-h-screen space-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Hands-on%20workshop%20for%20cat%20care%20training%2C%20one-day%20class%20with%20cute%20cats%2C%20practical%20learning%20environment%20with%20green%20and%20teal%20lighting%2C%20modern%20workshop%20space%20with%20training%20equipment&width=1200&height=600&seq=workshop-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white" style={{textShadow: '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>원데이 클래스</h1>
          <p className="text-xl mb-8 leading-relaxed text-white" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            하루만에 배우는 고양이 관련 실용 기술과 지식
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-time-fill mr-2"></i>
              단기 집중 교육
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-tools-fill mr-2"></i>
              실습 중심
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-gift-fill mr-2"></i>
              재료 포함
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">카테고리</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">일정</h3>
              <div className="flex flex-wrap gap-2">
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap cursor-pointer ${
                      selectedDate === date
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {workshop.isPopular && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        인기
                      </span>
                    )}
                    {workshop.isSoldOut && (
                      <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        마감
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {workshop.difficulty}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-green-600 font-medium">{workshop.category}</span>
                    <span className="text-xs text-gray-500">{workshop.location}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{workshop.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{workshop.instructor}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-calendar-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {workshop.date} ({workshop.time})
                    </div>
                    <div className="flex items-center">
                      <i className="ri-time-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {workshop.duration}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-group-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      {workshop.currentParticipants}/{workshop.maxParticipants}명
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">포함 재료</h4>
                    <div className="flex flex-wrap gap-1">
                      {workshop.materials.map((material, index) => (
                        <span key={index} className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      {workshop.price.toLocaleString()}원
                    </span>
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                        workshop.isSoldOut
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700'
                      }`}
                      disabled={workshop.isSoldOut}
                    >
                      {workshop.isSoldOut ? '마감' : '신청하기'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">원데이 클래스를 개최해보세요</h2>
          <p className="text-lg mb-8 opacity-90">
            고양이 관련 특별한 기술이나 지식을 가지고 계신가요? 원데이 클래스로 많은 집사들과 나누어보세요.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer">
            클래스 개최 신청하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshop;
