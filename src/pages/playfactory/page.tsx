import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';

export default function PlayFactoryPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
          <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Luxury%20cat%20play%20studio%20with%20custom%20wooden%20structures%20modern%20interior%20design%20sunlight&width=1600&height=900&seq=playfactory-hero&orientation=landscape')] opacity-30 bg-cover bg-center"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-white/15 backdrop-blur text-sm font-medium">
                맞춤형 반려동물 생활 환경 디자인
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                PLAYFACTORY
                <br />
                프리미엄 환경 컨설팅 스튜디오
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">
                고양이의 습성과 행동 데이터를 기반으로 한 공간 설계, 주문 제작 가구, 스마트 케어 시스템을
                한 번에 경험해보세요. 글로벌 프로젝트 경험을 가진 디자이너와 수의사가 함께합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-gray-100"
                  onClick={() => navigateTo('/playfactory#consulting')}
                >
                  <i className="ri-calendar-check-line mr-2"></i>
                  무료 컨설팅 신청
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

        <section className="py-20 bg-white" id="consulting">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                반려동물과 사람 모두를 위한 공간 컨설팅
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                PLAYFACTORY는 고양이 행동 전문가, 수의사, 공간 디자이너가 함께하는 맞춤 설계 서비스입니다.
                디지털 트윈 시뮬레이션으로 레이아웃을 제안하고, 제작부터 시공까지 원스톱으로 제공해요.
              </p>
              <div className="space-y-4">
                {[
                  'AI 행동 분석 데이터를 활용한 동선 설계',
                  '고양이 스트레스 지수 기반 휴식/놀이 구역 분리',
                  '내추럴 우드 & 친환경 마감재 셀렉션',
                  '케어 동선과 수납 솔루션까지 고려한 시공'
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="w-10 h-10 flex-shrink-0 mr-3 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-lg"></i>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Button size="lg" onClick={() => navigateTo('/#contact')}>
                  <i className="ri-customer-service-2-line mr-2"></i>
                  1:1 상담 연결
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigateTo('/mewtler')}
                >
                  <i className="ri-smartphone-line mr-2"></i>
                  뮤틀러 AI 연동
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                프로젝트 프로세스
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: '1. 데이터 수집',
                    desc: '뮤틀러 AI, 생활 패턴 설문, 공간 도면을 기반으로 고양이 행동 데이터를 수집합니다.'
                  },
                  {
                    title: '2. 디지털 트윈 설계',
                    desc: '3D 시뮬레이션으로 동선/동작을 체크하고, 구조물 위치를 최적화합니다.'
                  },
                  {
                    title: '3. 제작 및 시공',
                    desc: '친환경 소재와 안전 인증 자재로 맞춤 제작 후, 전문 시공팀이 설치합니다.'
                  },
                  {
                    title: '4. 사후 케어',
                    desc: '1:1 유지보수, A/S, 행동 변화에 따른 재컨설팅까지 제공해요.'
                  }
                ].map((step, index) => (
                  <div key={step.title} className="flex">
                    <div className="mr-4">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-orange-500 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" id="portfolio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  시그니처 포트폴리오
                </h2>
                <p className="text-gray-600 text-lg">
                  국내외 200여 개의 공간을 설계한 경험을 바탕으로, 고양이와 사람이 모두 행복한 공간을 만들어갑니다.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigateTo('/playfactory#consulting')}
              >
                <i className="ri-clipboard-line mr-2"></i>
                프로젝트 상담 예약
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: '도심형 펜트하우스 캣룸',
                  desc: '5마리 다묘 가정 맞춤형 설계, 수직 동선 강화와 은폐형 휴식 공간 구성.',
                  image:
                    'https://readdy.ai/api/search-image?query=Modern%20cat%20friendly%20penthouse%20interior%20with%20custom%20wooden%20cat%20walkways%20and%20furniture&width=600&height=600&seq=playfactory-1&orientation=squarish'
                },
                {
                  title: '복층형 북유럽 스타일 하우스',
                  desc: '거실 전체를 활용한 캣워크 시스템과 벽면 놀이존, 플랜테리어 조합.',
                  image:
                    'https://readdy.ai/api/search-image?query=Scandinavian%20style%20cat%20friendly%20duplex%20home%20with%20light%20wood%20cat%20furniture&width=600&height=600&seq=playfactory-2&orientation=squarish'
                },
                {
                  title: '뮤틀러 AI 스마트 하우스',
                  desc: 'IoT 센서, 자동 급식, 공기질 관리 시스템까지 통합한 스마트 홈 프로젝트.',
                  image:
                    'https://readdy.ai/api/search-image?query=Smart%20home%20for%20cats%20with%20integrated%20technology%20screens%20and%20wooden%20furniture&width=600&height=600&seq=playfactory-3&orientation=squarish'
                }
              ].map((project) => (
                <div key={project.title} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" id="consulting-form">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">프로젝트 브리핑 요청</h2>
              <p className="text-white/80 mb-8">
                아래 정보를 남겨주시면, 전담 플래너가 24시간 이내에 연락드려요.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="이름"
                />
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="연락처"
                />
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="이메일"
                />
                <input
                  className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="반려동물 수 / 품종"
                />
              </div>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6"
                placeholder="원하는 공간 분위기, 시공 범위, 예산 등을 자유롭게 적어주세요."
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => navigateTo('/#contact')}
                >
                  <i className="ri-send-plane-fill mr-2"></i>
                  문의 전송
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigateTo('/catroom')}
                >
                  <i className="ri-door-open-line mr-2"></i>
                  쇼룸 미리보기
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
