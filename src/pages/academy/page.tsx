
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { goToRoute, scrollToElement } from '../../utils/navigation';

interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  image: string;
  description: string;
  tags: string[];
  type: 'online' | 'offline' | 'hybrid';
  isPopular?: boolean;
  isNew?: boolean;
}

const Academy = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedLevel, setSelectedLevel] = useState('전체');
  const [selectedType, setSelectedType] = useState('전체');

  const categories = ['전체', '고양이 행동학', '건강관리', '그루밍', '사진촬영', '창작활동', '사업운영'];
  const levels = ['전체', '초급', '중급', '고급', '전문가'];
  const types = ['전체', '온라인', '오프라인', '하이브리드'];

  const courses: Course[] = [
    {
      id: 1,
      title: '고양이 행동 심리학 마스터 클래스',
      instructor: '김행동 박사',
      category: '고양이 행동학',
      level: '중급',
      duration: '8주',
      price: 180000,
      originalPrice: 220000,
      rating: 4.9,
      students: 1247,
      image: 'https://readdy.ai/api/search-image?query=cat%20behavior%20psychology%20class%2C%20professional%20veterinarian%20teaching%20about%20cat%20psychology%2C%20educational%20setting%20with%20cats&width=400&height=250&seq=1&orientation=landscape',
      description: '고양이의 행동을 과학적으로 분석하고 이해하는 전문 과정',
      tags: ['행동분석', '심리학', '전문과정'],
      type: 'hybrid',
      isPopular: true
    },
    {
      id: 2,
      title: '반려묘 건강관리 완전정복',
      instructor: '박건강 수의사',
      category: '건강관리',
      level: '초급',
      duration: '6주',
      price: 120000,
      rating: 4.8,
      students: 892,
      image: 'https://readdy.ai/api/search-image?query=cat%20health%20care%20course%2C%20veterinarian%20examining%20healthy%20cat%2C%20medical%20education%20for%20pet%20owners&width=400&height=250&seq=2&orientation=landscape',
      description: '집에서 할 수 있는 기본적인 고양이 건강관리 방법',
      tags: ['건강관리', '예방의학', '기초과정'],
      type: 'online',
      isNew: true
    },
    {
      id: 3,
      title: '프로페셔널 고양이 그루밍',
      instructor: '이미용 그루머',
      category: '그루밍',
      level: '고급',
      duration: '12주',
      price: 350000,
      originalPrice: 420000,
      rating: 4.7,
      students: 234,
      image: 'https://readdy.ai/api/search-image?query=professional%20cat%20grooming%20class%2C%20expert%20groomer%20styling%20beautiful%20cat%2C%20salon%20training%20environment&width=400&height=250&seq=3&orientation=landscape',
      description: '전문 그루머가 되기 위한 실무 중심 교육과정',
      tags: ['그루밍', '전문기술', '실무교육'],
      type: 'offline'
    },
    {
      id: 4,
      title: '고양이 사진 촬영의 모든 것',
      instructor: '최사진 작가',
      category: '사진촬영',
      level: '초급',
      duration: '4주',
      price: 89000,
      rating: 4.6,
      students: 567,
      image: 'https://readdy.ai/api/search-image?query=cat%20photography%20workshop%2C%20photographer%20taking%20beautiful%20pictures%20of%20cats%2C%20studio%20lighting%20setup&width=400&height=250&seq=4&orientation=landscape',
      description: '고양이의 매력을 담는 사진 촬영 기법과 편집',
      tags: ['사진촬영', '편집', '창작'],
      type: 'hybrid',
      isPopular: true
    },
    {
      id: 5,
      title: '고양이 캐릭터 일러스트 그리기',
      instructor: '정그림 일러스트레이터',
      category: '창작활동',
      level: '초급',
      duration: '6주',
      price: 95000,
      rating: 4.8,
      students: 743,
      image: 'https://readdy.ai/api/search-image?query=cat%20character%20illustration%20class%2C%20artist%20drawing%20cute%20cat%20characters%2C%20digital%20art%20tutorial&width=400&height=250&seq=5&orientation=landscape',
      description: '귀여운 고양이 캐릭터를 그리는 디지털 일러스트',
      tags: ['일러스트', '디지털아트', '캐릭터'],
      type: 'online'
    },
    {
      id: 6,
      title: '고양이 카페 창업 실무',
      instructor: '강사업 대표',
      category: '사업운영',
      level: '고급',
      duration: '10주',
      price: 280000,
      originalPrice: 350000,
      rating: 4.5,
      students: 156,
      image: 'https://readdy.ai/api/search-image?query=cat%20cafe%20business%20startup%20course%2C%20successful%20cat%20cafe%20interior%20with%20customers%20and%20cats&width=400&height=250&seq=6&orientation=landscape',
      description: '성공적인 고양이 카페 운영을 위한 실무 노하우',
      tags: ['창업', '사업운영', '실무'],
      type: 'offline',
      isNew: true
    },
    {
      id: 7,
      title: '고양이 응급처치 및 간호',
      instructor: '윤응급 수의사',
      category: '건강관리',
      level: '중급',
      duration: '5주',
      price: 150000,
      rating: 4.9,
      students: 445,
      image: 'https://readdy.ai/api/search-image?query=cat%20emergency%20care%20training%2C%20veterinarian%20teaching%20first%20aid%20for%20cats%2C%20medical%20training%20session&width=400&height=250&seq=7&orientation=landscape',
      description: '응급상황에서 고양이를 도울 수 있는 실용적 지식',
      tags: ['응급처치', '간호', '의료'],
      type: 'hybrid'
    },
    {
      id: 8,
      title: '고양이 행동 교정 트레이닝',
      instructor: '조교정 트레이너',
      category: '고양이 행동학',
      level: '중급',
      duration: '8주',
      price: 200000,
      rating: 4.7,
      students: 328,
      image: 'https://readdy.ai/api/search-image?query=cat%20behavior%20training%20session%2C%20professional%20trainer%20working%20with%20cats%2C%20positive%20reinforcement%20training&width=400&height=250&seq=8&orientation=landscape',
      description: '문제 행동을 교정하는 과학적 트레이닝 방법',
      tags: ['행동교정', '트레이닝', '문제해결'],
      type: 'offline'
    },
    {
      id: 9,
      title: '고양이 영양학과 사료 제조',
      instructor: '한영양 박사',
      category: '건강관리',
      level: '고급',
      duration: '12주',
      price: 320000,
      originalPrice: 400000,
      rating: 4.6,
      students: 189,
      image: 'https://readdy.ai/api/search-image?query=cat%20nutrition%20science%20course%2C%20laboratory%20setting%20with%20cat%20food%20analysis%2C%20nutritionist%20teaching&width=400&height=250&seq=9&orientation=landscape',
      description: '고양이 영양학 이론과 건강한 사료 제조법',
      tags: ['영양학', '사료제조', '과학'],
      type: 'hybrid'
    },
    {
      id: 10,
      title: '고양이 동영상 제작 마스터',
      instructor: '유튜브 크리에이터',
      category: '창작활동',
      level: '중급',
      duration: '7주',
      price: 135000,
      rating: 4.8,
      students: 612,
      image: 'https://readdy.ai/api/search-image?query=cat%20video%20production%20course%2C%20content%20creator%20filming%20cats%2C%20professional%20video%20equipment%20setup&width=400&height=250&seq=10&orientation=landscape',
      description: '바이럴 고양이 콘텐츠 제작의 모든 것',
      tags: ['동영상제작', '콘텐츠', '유튜브'],
      type: 'online',
      isPopular: true
    },
    {
      id: 11,
      title: '고양이 마사지 테라피',
      instructor: '마테라피 전문가',
      category: '건강관리',
      level: '초급',
      duration: '4주',
      price: 85000,
      rating: 4.7,
      students: 398,
      image: 'https://readdy.ai/api/search-image?query=cat%20massage%20therapy%20class%2C%20gentle%20hands%20massaging%20relaxed%20cat%2C%20therapeutic%20healing%20session&width=400&height=250&seq=11&orientation=landscape',
      description: '고양이의 스트레스 완화를 위한 마사지 기법',
      tags: ['마사지', '테라피', '힐링'],
      type: 'offline'
    },
    {
      id: 12,
      title: '고양이 용품 DIY 제작',
      instructor: '손만들기 공예가',
      category: '창작활동',
      level: '초급',
      duration: '6주',
      price: 75000,
      rating: 4.5,
      students: 523,
      image: 'https://readdy.ai/api/search-image?query=DIY%20cat%20toys%20and%20accessories%20workshop%2C%20crafting%20handmade%20cat%20items%2C%20creative%20workshop%20setting&width=400&height=250&seq=12&orientation=landscape',
      description: '직접 만드는 고양이 장난감과 용품',
      tags: ['DIY', '수공예', '창작'],
      type: 'hybrid'
    },
    {
      id: 13,
      title: '고양이 품종학과 유전학',
      instructor: '김품종 연구원',
      category: '고양이 행동학',
      level: '전문가',
      duration: '16주',
      price: 450000,
      originalPrice: 550000,
      rating: 4.9,
      students: 87,
      image: 'https://readdy.ai/api/search-image?query=cat%20breed%20genetics%20course%2C%20scientist%20studying%20different%20cat%20breeds%2C%20research%20laboratory%20setting&width=400&height=250&seq=13&orientation=landscape',
      description: '고양이 품종의 특성과 유전학적 이해',
      tags: ['품종학', '유전학', '연구'],
      type: 'online'
    },
    {
      id: 14,
      title: '펫샵 운영 및 관리',
      instructor: '박펫샵 사장',
      category: '사업운영',
      level: '중급',
      duration: '8주',
      price: 220000,
      rating: 4.4,
      students: 267,
      image: 'https://readdy.ai/api/search-image?query=pet%20shop%20management%20course%2C%20successful%20pet%20store%20with%20cat%20supplies%2C%20business%20training%20environment&width=400&height=250&seq=14&orientation=landscape',
      description: '성공적인 펫샵 운영을 위한 실무 가이드',
      tags: ['펫샵운영', '관리', '사업'],
      type: 'offline'
    },
    {
      id: 15,
      title: '고양이 아로마테라피',
      instructor: '향아로마 테라피스트',
      category: '건강관리',
      level: '초급',
      duration: '5주',
      price: 110000,
      rating: 4.6,
      students: 334,
      image: 'https://readdy.ai/api/search-image?query=cat%20aromatherapy%20course%2C%20peaceful%20cat%20enjoying%20natural%20scents%2C%20wellness%20therapy%20session&width=400&height=250&seq=15&orientation=landscape',
      description: '고양이를 위한 안전한 아로마테라피',
      tags: ['아로마테라피', '자연치료', '웰니스'],
      type: 'hybrid'
    },
    {
      id: 16,
      title: '고양이 웹툰 그리기',
      instructor: '툰그리기 작가',
      category: '창작활동',
      level: '중급',
      duration: '10주',
      price: 165000,
      rating: 4.8,
      students: 456,
      image: 'https://readdy.ai/api/search-image?query=cat%20webtoon%20drawing%20course%2C%20artist%20creating%20cute%20cat%20comic%20strips%2C%20digital%20drawing%20tablet&width=400&height=250&seq=16&orientation=landscape',
      description: '고양이를 주인공으로 한 웹툰 제작',
      tags: ['웹툰', '만화', '스토리텔링'],
      type: 'online'
    },
    {
      id: 17,
      title: '고양이 호텔 운영 실무',
      instructor: '호텔운영 전문가',
      category: '사업운영',
      level: '고급',
      duration: '12주',
      price: 380000,
      originalPrice: 450000,
      rating: 4.7,
      students: 123,
      image: 'https://readdy.ai/api/search-image?query=cat%20hotel%20management%20course%2C%20luxury%20pet%20hotel%20facility%20with%20comfortable%20cat%20rooms&width=400&height=250&seq=17&orientation=landscape',
      description: '프리미엄 고양이 호텔 운영의 모든 것',
      tags: ['호텔운영', '서비스', '고급'],
      type: 'offline'
    },
    {
      id: 18,
      title: '고양이 음악 치료',
      instructor: '음악치료 전문가',
      category: '건강관리',
      level: '중급',
      duration: '6주',
      price: 125000,
      rating: 4.5,
      students: 278,
      image: 'https://readdy.ai/api/search-image?query=cat%20music%20therapy%20session%2C%20peaceful%20cats%20listening%20to%20calming%20music%2C%20therapeutic%20environment&width=400&height=250&seq=18&orientation=landscape',
      description: '음악을 통한 고양이 심리 치료',
      tags: ['음악치료', '심리치료', '힐링'],
      type: 'hybrid'
    },
    {
      id: 19,
      title: '고양이 패션 디자인',
      instructor: '펫패션 디자이너',
      category: '창작활동',
      level: '중급',
      duration: '8주',
      price: 185000,
      rating: 4.6,
      students: 189,
      image: 'https://readdy.ai/api/search-image?query=cat%20fashion%20design%20course%2C%20designer%20creating%20stylish%20cat%20clothing%2C%20fashion%20studio%20setting&width=400&height=250&seq=19&orientation=landscape',
      description: '고양이를 위한 패셔너블한 의류 디자인',
      tags: ['패션디자인', '의류', '스타일'],
      type: 'offline'
    },
    {
      id: 20,
      title: '고양이 블로그 운영 마스터',
      instructor: '블로거 전문가',
      category: '창작활동',
      level: '초급',
      duration: '5주',
      price: 95000,
      rating: 4.7,
      students: 634,
      image: 'https://readdy.ai/api/search-image?query=cat%20blogging%20course%2C%20blogger%20writing%20about%20cats%20on%20laptop%2C%20cozy%20home%20office%20with%20cats&width=400&height=250&seq=20&orientation=landscape',
      description: '고양이 블로그로 수익 창출하는 방법',
      tags: ['블로그', '글쓰기', '수익화'],
      type: 'online',
      isNew: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      (selectedCategory === '전체' || course.category === selectedCategory) &&
      (selectedLevel === '전체' || course.level === selectedLevel) &&
      (selectedType === '전체' || 
       (selectedType === '온라인' && course.type === 'online') ||
       (selectedType === '오프라인' && course.type === 'offline') ||
       (selectedType === '하이브리드' && course.type === 'hybrid'))
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20online%20education%20platform%20for%20cat%20training%2C%20digital%20classroom%20with%20holographic%20cat%20displays%2C%20futuristic%20learning%20environment%20with%20purple%20and%20blue%20lighting%2C%20professional%20education%20technology&width=1200&height=600&seq=academy-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white" style={{textShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>묘연 아카데미</h1>
          <p className="text-xl mb-8 leading-relaxed text-white" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            고양이와 함께하는 삶을 더욱 풍요롭게 만드는 전문 교육
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-graduation-cap-fill mr-2"></i>
              전문가 강의
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-certificate-fill mr-2"></i>
              수료증 발급
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <i className="ri-group-fill mr-2"></i>
              커뮤니티 활동
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="space-button px-8 py-3 rounded-full font-medium transition-colors"
              onClick={scrollToElement('academy-courses')}
            >
              <i className="ri-play-circle-line mr-2"></i>
              인기 강의 살펴보기
            </button>
            <button
              className="px-8 py-3 border-2 glass-effect text-white rounded-full font-medium hover:bg-white/10 transition-colors"
              onClick={goToRoute('/academy/create')}
            >
              <i className="ri-lightbulb-line mr-2"></i>
              강의 개설 제안하기
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">카테고리</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">난이도</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap cursor-pointer ${
                        selectedLevel === level
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">수업 형태</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap cursor-pointer ${
                        selectedType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="academy-courses" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.isPopular && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        인기
                      </span>
                    )}
                    {course.isNew && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        신규
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {course.type === 'online' ? '온라인' : course.type === 'offline' ? '오프라인' : '하이브리드'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-600 font-medium">{course.category}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{course.level}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <i className="ri-time-line mr-1"></i>
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <i className="ri-user-line mr-1"></i>
                      {course.students}명
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-${i < Math.floor(course.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {course.originalPrice ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            {course.price.toLocaleString()}원
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {course.originalPrice.toLocaleString()}원
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          {course.price.toLocaleString()}원
                        </span>
                      )}
                    </div>
                    <button
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all whitespace-nowrap cursor-pointer"
                      onClick={goToRoute(`/signup?course=${course.id}`)}
                    >
                      수강신청
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">나만의 강의를 개설해보세요</h2>
          <p className="text-lg mb-8 opacity-90">
            고양이 관련 전문 지식을 가지고 계신가요? 묘연 아카데미에서 강의를 개설하고 수익을 창출하세요.
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer"
            onClick={goToRoute('/academy/create')}
          >
            강의 개설 신청하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;




