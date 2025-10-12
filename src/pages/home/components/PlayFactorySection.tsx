
import { useState } from 'react';
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function PlayFactorySection() {
  const [activeCategory, setActiveCategory] = useState('playcat');

  const categories = [
    {
      id: 'playcat',
      name: 'PLAYCAT',
      description: '고양이를 위한 원목 놀이터',
      icon: 'ri-heart-3-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'playdog',
      name: 'PLAYDOG',
      description: '반려견을 위한 행동풍부화 가구',
      icon: 'ri-heart-2-line',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'playzoo',
      name: 'PLAYZOO',
      description: '동물원 동물복지 시설',
      icon: 'ri-leaf-line',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const installationCases = {
    playcat: [
      {
        title: '강남구 펜트하우스 캣타워',
        location: '서울 강남구',
        description: '3층 높이의 대형 캣타워로 고양이 5마리가 함께 사용',
        image: 'https://readdy.ai/api/search-image?query=Luxury%20wooden%20cat%20tower%20in%20modern%20penthouse%20apartment%2C%20multi-level%20cat%20furniture%2C%20elegant%20design%20with%20natural%20wood%20finish%2C%20cats%20playing%20on%20different%20levels%2C%20premium%20interior%20design&width=400&height=300&seq=playcat1&orientation=squarish'
      },
      {
        title: '홍대 카페 벽면 캣워크',
        location: '서울 마포구',
        description: '벽면을 활용한 캣워크로 고객들에게 인기',
        image: 'https://readdy.ai/api/search-image?query=Modern%20cat%20cafe%20with%20wooden%20wall-mounted%20cat%20walkways%2C%20cats%20walking%20on%20elevated%20wooden%20platforms%2C%20cozy%20cafe%20interior%20with%20customers%20enjoying%20coffee%2C%20innovative%20cat%20furniture%20design&width=400&height=300&seq=playcat2&orientation=squarish'
      },
      {
        title: '판교 신혼집 맞춤 캣룸',
        location: '경기 성남시',
        description: '작은 공간을 최대한 활용한 맞춤형 캣룸',
        image: 'https://readdy.ai/api/search-image?query=Compact%20custom%20cat%20room%20in%20small%20apartment%2C%20space-efficient%20wooden%20cat%20furniture%2C%20modern%20minimalist%20design%2C%20cats%20using%20vertical%20space%20effectively%2C%20smart%20storage%20solutions&width=400&height=300&seq=playcat3&orientation=squarish'
      },
      {
        title: '부산 해변가 펜션 캣하우스',
        location: '부산 해운대구',
        description: '바다 전망을 즐길 수 있는 대형 캣하우스',
        image: 'https://readdy.ai/api/search-image?query=Large%20wooden%20cat%20house%20at%20beachside%20pension%2C%20cats%20enjoying%20ocean%20view%20through%20windows%2C%20natural%20wood%20construction%2C%20seaside%20vacation%20rental%20with%20pet-friendly%20amenities&width=400&height=300&seq=playcat4&orientation=squarish'
      },
      {
        title: '대구 동물병원 대기실',
        location: '대구 중구',
        description: '스트레스 완화를 위한 치료용 캣타워',
        image: 'https://readdy.ai/api/search-image?query=Therapeutic%20cat%20tower%20in%20veterinary%20clinic%20waiting%20room%2C%20calming%20wooden%20cat%20furniture%2C%20cats%20relaxing%20in%20medical%20environment%2C%20stress-reducing%20pet%20furniture%20design&width=400&height=300&seq=playcat5&orientation=squarish'
      },
      {
        title: '제주도 펜션 야외 캣가든',
        location: '제주 서귀포시',
        description: '자연과 함께하는 야외 캣가든 시설',
        image: 'https://readdy.ai/api/search-image?query=Outdoor%20cat%20garden%20at%20Jeju%20Island%20pension%2C%20wooden%20cat%20playground%20in%20natural%20setting%2C%20cats%20playing%20among%20trees%20and%20plants%2C%20eco-friendly%20pet%20furniture%20in%20garden&width=400&height=300&seq=playcat6&orientation=squarish'
      },
      {
        title: '인천공항 반려동물 휴게실',
        location: '인천 중구',
        description: '여행 중 반려동물을 위한 휴식 공간',
        image: 'https://readdy.ai/api/search-image?query=Airport%20pet%20rest%20area%20with%20wooden%20cat%20furniture%2C%20modern%20travel-friendly%20pet%20facilities%2C%20cats%20resting%20during%20travel%2C%20clean%20and%20comfortable%20pet%20lounge%20design&width=400&height=300&seq=playcat7&orientation=squarish'
      },
      {
        title: '광주 대학교 기숙사 공용 캣룸',
        location: '광주 북구',
        description: '학생들이 공유하는 힐링 캣룸',
        image: 'https://readdy.ai/api/search-image?query=University%20dormitory%20shared%20cat%20room%2C%20students%20interacting%20with%20cats%2C%20wooden%20cat%20furniture%20in%20communal%20space%2C%20stress%20relief%20facility%20for%20college%20students&width=400&height=300&seq=playcat8&orientation=squarish'
      },
      {
        title: '울산 산업단지 사무실',
        location: '울산 남구',
        description: '직장인 스트레스 해소를 위한 오피스 캣룸',
        image: 'https://readdy.ai/api/search-image?query=Office%20cat%20room%20in%20industrial%20complex%2C%20workplace%20stress%20relief%20with%20cats%2C%20wooden%20cat%20furniture%20in%20corporate%20environment%2C%20employees%20relaxing%20with%20cats%20during%20break&width=400&height=300&seq=playcat9&orientation=squarish'
      },
      {
        title: '전주 한옥마을 전통 캣하우스',
        location: '전북 전주시',
        description: '한국 전통 건축과 조화된 캣하우스',
        image: 'https://readdy.ai/api/search-image?query=Traditional%20Korean%20hanok-style%20cat%20house%2C%20wooden%20cat%20furniture%20with%20traditional%20architecture%20elements%2C%20cats%20in%20cultural%20heritage%20setting%2C%20fusion%20of%20modern%20pet%20furniture%20and%20traditional%20design&width=400&height=300&seq=playcat10&orientation=squarish'
      },
      {
        title: '춘천 펜션 레이크뷰 캣타워',
        location: '강원 춘천시',
        description: '호수 전망을 감상할 수 있는 캣타워',
        image: 'https://readdy.ai/api/search-image?query=Lake%20view%20cat%20tower%20at%20Chuncheon%20pension%2C%20cats%20enjoying%20scenic%20lake%20view%2C%20wooden%20cat%20furniture%20with%20panoramic%20windows%2C%20vacation%20rental%20with%20premium%20pet%20amenities&width=400&height=300&seq=playcat11&orientation=squarish'
      },
      {
        title: '청주 아파트 베란다 캣가든',
        location: '충북 청주시',
        description: '베란다를 활용한 실내 캣가든',
        image: 'https://readdy.ai/api/search-image?query=Apartment%20balcony%20cat%20garden%2C%20enclosed%20wooden%20cat%20playground%2C%20cats%20enjoying%20sunlight%20in%20safe%20indoor-outdoor%20space%2C%20urban%20pet%20furniture%20solution&width=400&height=300&seq=playcat12&orientation=squarish'
      }
    ],
    playdog: [
      {
        title: '서울숲 대형견 놀이터',
        location: '서울 성동구',
        description: '대형견을 위한 종합 놀이 시설',
        image: 'https://readdy.ai/api/search-image?query=Large%20dog%20playground%20in%20Seoul%20Forest%2C%20wooden%20dog%20agility%20equipment%2C%20big%20dogs%20playing%20on%20various%20obstacles%2C%20natural%20park%20setting%20with%20professional%20dog%20furniture&width=400&height=300&seq=playdog1&orientation=squarish'
      },
      {
        title: '부산 해변 도그런',
        location: '부산 기장군',
        description: '바다를 바라보며 뛰어놀 수 있는 도그런',
        image: 'https://readdy.ai/api/search-image?query=Beachside%20dog%20run%20with%20wooden%20play%20equipment%2C%20dogs%20playing%20near%20ocean%2C%20coastal%20dog%20park%20with%20natural%20wood%20obstacles%2C%20seaside%20pet%20recreation%20facility&width=400&height=300&seq=playdog2&orientation=squarish'
      },
      {
        title: '경기도 펜션 도그파크',
        location: '경기 가평군',
        description: '펜션 내 전용 도그파크 시설',
        image: 'https://readdy.ai/api/search-image?query=Private%20dog%20park%20at%20pension%20resort%2C%20wooden%20dog%20playground%20equipment%2C%20dogs%20enjoying%20vacation%20with%20families%2C%20pet-friendly%20accommodation%20facilities&width=400&height=300&seq=playdog3&orientation=squarish'
      },
      {
        title: '대전 동물병원 재활센터',
        location: '대전 유성구',
        description: '반려견 재활을 위한 치료용 기구',
        image: 'https://readdy.ai/api/search-image?query=Dog%20rehabilitation%20center%20with%20therapeutic%20wooden%20equipment%2C%20dogs%20doing%20physical%20therapy%2C%20veterinary%20rehabilitation%20facility%2C%20medical-grade%20pet%20exercise%20equipment&width=400&height=300&seq=playdog4&orientation=squarish'
      },
      {
        title: '인천 도그카페 실내놀이터',
        location: '인천 연수구',
        description: '실내에서도 충분히 뛰어놀 수 있는 공간',
        image: 'https://readdy.ai/api/search-image?query=Indoor%20dog%20cafe%20playground%2C%20wooden%20dog%20play%20equipment%20inside%20cafe%2C%20dogs%20and%20customers%20enjoying%20together%2C%20modern%20pet-friendly%20cafe%20interior&width=400&height=300&seq=playdog5&orientation=squarish'
      },
      {
        title: '광주 아파트 단지 도그런',
        location: '광주 서구',
        description: '아파트 단지 내 주민 전용 도그런',
        image: 'https://readdy.ai/api/search-image?query=Apartment%20complex%20dog%20run%2C%20residential%20dog%20playground%20with%20wooden%20equipment%2C%20community%20pet%20facility%2C%20dogs%20playing%20in%20apartment%20courtyard&width=400&height=300&seq=playdog6&orientation=squarish'
      },
      {
        title: '제주 올레길 도그스테이션',
        location: '제주 제주시',
        description: '올레길 중간 휴식을 위한 도그스테이션',
        image: 'https://readdy.ai/api/search-image?query=Jeju%20Olle%20trail%20dog%20station%2C%20wooden%20rest%20area%20for%20hiking%20dogs%2C%20dogs%20resting%20during%20nature%20walk%2C%20trail-side%20pet%20facility%20with%20mountain%20view&width=400&height=300&seq=playdog7&orientation=squarish'
      },
      {
        title: '울산 공업단지 직장 도그데이케어',
        location: '울산 동구',
        description: '직장인을 위한 도그데이케어 시설',
        image: 'https://readdy.ai/api/search-image?query=Workplace%20dog%20daycare%20facility%2C%20wooden%20dog%20play%20equipment%20in%20industrial%20area%2C%20working%20dogs%20during%20office%20hours%2C%20corporate%20pet%20care%20service&width=400&height=300&seq=playdog8&orientation=squarish'
      },
      {
        title: '강릉 펜션 해변 도그런',
        location: '강원 강릉시',
        description: '해변가 펜션의 전용 도그런',
        image: 'https://readdy.ai/api/search-image?query=Beachfront%20pension%20dog%20run%2C%20wooden%20dog%20playground%20near%20ocean%2C%20dogs%20playing%20with%20beach%20view%2C%20coastal%20vacation%20rental%20pet%20facility&width=400&height=300&seq=playdog9&orientation=squarish'
      },
      {
        title: '천안 대학교 반려동물학과',
        location: '충남 천안시',
        description: '수의학과 실습을 위한 도그트레이닝장',
        image: 'https://readdy.ai/api/search-image?query=University%20veterinary%20school%20dog%20training%20facility%2C%20wooden%20dog%20training%20equipment%2C%20students%20learning%20with%20dogs%2C%20educational%20pet%20facility&width=400&height=300&seq=playdog10&orientation=squarish'
      },
      {
        title: '포항 해안도로 도그카페',
        location: '경북 포항시',
        description: '바다 전망이 있는 대형 도그카페',
        image: 'https://readdy.ai/api/search-image?query=Coastal%20highway%20dog%20cafe%20with%20ocean%20view%2C%20large%20wooden%20dog%20playground%2C%20dogs%20enjoying%20seaside%20atmosphere%2C%20scenic%20pet-friendly%20cafe&width=400&height=300&seq=playdog11&orientation=squarish'
      },
      {
        title: '목포 항구 도그워크',
        location: '전남 목포시',
        description: '항구를 바라보는 도그워킹 코스',
        image: 'https://readdy.ai/api/search-image?query=Harbor%20dog%20walking%20course%20with%20wooden%20exercise%20equipment%2C%20dogs%20walking%20near%20port%2C%20maritime%20dog%20park%20facility%2C%20coastal%20city%20pet%20recreation%20area&width=400&height=300&seq=playdog12&orientation=squarish'
      }
    ],
    playzoo: [
      {
        title: '서울대공원 호랑이 행동풍부화',
        location: '경기 과천시',
        description: '호랑이의 자연스러운 행동을 유도하는 시설',
        image: 'https://readdy.ai/api/search-image?query=Tiger%20behavioral%20enrichment%20facility%20at%20Seoul%20Zoo%2C%20large%20wooden%20climbing%20structures%20for%20tigers%2C%20natural%20habitat%20simulation%2C%20professional%20zoo%20animal%20welfare%20equipment&width=400&height=300&seq=playzoo1&orientation=squarish'
      },
      {
        title: '에버랜드 판다월드',
        location: '경기 용인시',
        description: '판다를 위한 특별 설계된 놀이 시설',
        image: 'https://readdy.ai/api/search-image?query=Panda%20habitat%20with%20wooden%20climbing%20structures%20at%20Everland%2C%20pandas%20playing%20on%20custom-built%20equipment%2C%20bamboo-themed%20zoo%20enclosure%2C%20specialized%20panda%20enrichment%20facility&width=400&height=300&seq=playzoo2&orientation=squarish'
      },
      {
        title: '부산 아쿠아리움 물개 쇼장',
        location: '부산 해운대구',
        description: '물개 공연을 위한 다목적 시설',
        image: 'https://readdy.ai/api/search-image?query=Sea%20lion%20show%20facility%20at%20Busan%20Aquarium%2C%20wooden%20platforms%20and%20equipment%20for%20marine%20mammals%2C%20aquatic%20animal%20performance%20area%2C%20professional%20marine%20park%20infrastructure&width=400&height=300&seq=playzoo3&orientation=squarish'
      },
      {
        title: '대전 동물원 원숭이섬',
        location: '대전 서구',
        description: '원숭이들의 사회적 행동을 위한 복합 시설',
        image: 'https://readdy.ai/api/search-image?query=Monkey%20island%20at%20Daejeon%20Zoo%2C%20wooden%20climbing%20structures%20for%20primates%2C%20monkeys%20playing%20on%20multi-level%20platforms%2C%20primate%20behavioral%20enrichment%20facility&width=400&height=300&seq=playzoo4&orientation=squarish'
      },
      {
        title: '청주동물원 곰사 리모델링',
        location: '충북 청주시',
        description: '곰의 복지를 위한 현대적 서식지',
        image: 'https://readdy.ai/api/search-image?query=Modern%20bear%20habitat%20at%20Cheongju%20Zoo%2C%20wooden%20den%20structures%20and%20climbing%20equipment%20for%20bears%2C%20naturalistic%20zoo%20enclosure%2C%20bear%20welfare%20facility%20renovation&width=400&height=300&seq=playzoo5&orientation=squarish'
      },
      {
        title: '광주 우치동물원 사자 방사장',
        location: '광주 북구',
        description: '사자 가족을 위한 넓은 방사장 시설',
        image: 'https://readdy.ai/api/search-image?query=Lion%20enclosure%20at%20Gwangju%20Zoo%2C%20wooden%20shade%20structures%20and%20platforms%20for%20lions%2C%20spacious%20big%20cat%20habitat%2C%20professional%20zoo%20lion%20facility&width=400&height=300&seq=playzoo6&orientation=squarish'
      },
      {
        title: '전주동물원 코끼리사',
        location: '전북 전주시',
        description: '코끼리의 지능 발달을 위한 퍼즐 시설',
        image: 'https://readdy.ai/api/search-image?query=Elephant%20enclosure%20with%20wooden%20puzzle%20feeders%20at%20Jeonju%20Zoo%2C%20elephants%20using%20enrichment%20devices%2C%20intelligent%20animal%20welfare%20equipment%2C%20large%20mammal%20behavioral%20facility&width=400&height=300&seq=playzoo7&orientation=squarish'
      },
      {
        title: '창원 진해루 동물원 펭귄관',
        location: '경남 창원시',
        description: '펭귄의 수영과 휴식을 위한 복합 시설',
        image: 'https://readdy.ai/api/search-image?query=Penguin%20habitat%20at%20Changwon%20Zoo%2C%20wooden%20resting%20platforms%20and%20swimming%20areas%20for%20penguins%2C%20arctic-themed%20zoo%20enclosure%2C%20penguin%20behavioral%20enrichment%20facility&width=400&height=300&seq=playzoo8&orientation=squarish'
      },
      {
        title: '포항 환호공원 동물원',
        location: '경북 포항시',
        description: '다양한 조류를 위한 대형 비행장',
        image: 'https://readdy.ai/api/search-image?query=Large%20bird%20aviary%20at%20Pohang%20Zoo%2C%20wooden%20perching%20structures%20for%20various%20birds%2C%20spacious%20flight%20enclosure%2C%20avian%20behavioral%20enrichment%20facility&width=400&height=300&seq=playzoo9&orientation=squarish'
      },
      {
        title: '제주 한라산 생태공원',
        location: '제주 서귀포시',
        description: '제주 고유종 보호를 위한 생태 시설',
        image: 'https://readdy.ai/api/search-image?query=Jeju%20endemic%20species%20conservation%20facility%2C%20wooden%20habitat%20structures%20for%20native%20animals%2C%20ecological%20park%20with%20natural%20materials%2C%20wildlife%20preservation%20infrastructure&width=400&height=300&seq=playzoo10&orientation=squarish'
      },
      {
        title: '인천 송도 센트럴파크 동물원',
        location: '인천 연수구',
        description: '도심 속 동물원의 현대적 시설',
        image: 'https://readdy.ai/api/search-image?query=Modern%20urban%20zoo%20at%20Songdo%20Central%20Park%2C%20contemporary%20wooden%20animal%20habitats%2C%20city%20zoo%20with%20innovative%20design%2C%20urban%20wildlife%20facility&width=400&height=300&seq=playzoo11&orientation=squarish'
      },
      {
        title: '여수 아쿠아플라넷 돌고래관',
        location: '전남 여수시',
        description: '돌고래 치료와 재활을 위한 특수 시설',
        image: 'https://readdy.ai/api/search-image?query=Dolphin%20therapy%20and%20rehabilitation%20facility%20at%20Yeosu%20Aqua%20Planet%2C%20specialized%20marine%20mammal%20care%20equipment%2C%20dolphin%20medical%20facility%2C%20aquatic%20animal%20welfare%20center&width=400&height=300&seq=playzoo12&orientation=squarish'
      }
    ]
  };

  const currentCases = installationCases[activeCategory as keyof typeof installationCases];

  return (
    <section id="play-factory" className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
            <i className="ri-hammer-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Play Factory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            우리가 만드는 가구는 단순한 놀이터가 아니라<br />
            <span className="text-orange-500 font-semibold">동물의 언어</span>입니다
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-16 bg-white rounded-2xl p-2 shadow-lg max-w-2xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-1 min-w-0 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <i className={`${category.icon} text-2xl`}></i>
                <span className="text-sm font-bold">{category.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h3>
            <p className="text-gray-600 text-lg">
              {categories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        </div>

        {/* Installation Cases Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            설치 사례
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCases.map((case_item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={case_item.image}
                    alt={case_item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-gray-700">{case_item.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{case_item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{case_item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              왜 Play Factory인가?
            </h3>
            <p className="text-gray-600 text-lg">
              단순한 가구가 아닌, 동물의 본능과 행복을 위한 과학적 설계
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-leaf-line',
                title: '친환경 원목',
                description: '100% 천연 원목으로 제작하여 안전하고 건강합니다'
              },
              {
                icon: 'ri-tools-line',
                title: '맞춤 제작',
                description: '공간과 동물의 특성에 맞춘 완전 맞춤 설계'
              },
              {
                icon: 'ri-heart-pulse-line',
                title: '행동풍부화',
                description: '동물의 자연스러운 행동을 유도하는 과학적 설계'
              },
              {
                icon: 'ri-shield-check-line',
                title: '안전 보장',
                description: '모든 제품은 안전성 테스트를 통과한 인증 제품'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              제작 과정
            </h3>
            <p className="text-gray-600 text-lg">
              상담부터 설치까지, 전문가가 함께합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '상담 & 측정',
                description: '공간과 동물의 특성을 파악합니다',
                icon: 'ri-ruler-line'
              },
              {
                step: '02',
                title: '설계 & 제안',
                description: '3D 설계도와 견적을 제공합니다',
                icon: 'ri-draft-line'
              },
              {
                step: '03',
                title: '제작 & 품질검사',
                description: '숙련된 장인이 직접 제작합니다',
                icon: 'ri-hammer-line'
              },
              {
                step: '04',
                title: '설치 & A/S',
                description: '전문 설치팀이 완벽하게 설치합니다',
                icon: 'ri-tools-fill'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="text-center">
                    <i className={`${process.icon} text-orange-500 text-2xl mb-1`}></i>
                    <div className="text-xs font-bold text-gray-500">{process.step}</div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            나만의 행동풍부화 공간 만들기
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            우리 아이에게 맞는 특별한 공간을 만들어보세요. 
            전문 상담부터 설치까지 모든 과정을 함께합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
              onClick={() => navigateTo('/playfactory#consulting')}
            >
              <i className="ri-phone-line mr-2"></i>
              무료 상담 신청
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigateTo('/playfactory#portfolio')}
            >
              <i className="ri-gallery-line mr-2"></i>
              포트폴리오 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
