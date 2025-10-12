
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  category: string;
  author: string;
  views: number;
  likes: number;
  image: string;
  tags: string[];
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '서비스 업데이트', '파트너십', '수상 소식', '사회공헌', '기술 혁신', '커뮤니티'];
  
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: '묘연, 2024년 펫테크 혁신상 대상 수상',
      summary: '묘연이 한국펫산업협회에서 주최하는 2024년 펫테크 혁신상 대상을 수상했습니다.',
      content: '묘연의 AI 기반 고양이 케어 플랫폼이 업계에서 인정받아 펫테크 혁신상 대상을 수상했습니다.',
      publishDate: '2024-01-15',
      category: '수상 소식',
      author: '묘연 PR팀',
      views: 15420,
      likes: 892,
      image: 'https://readdy.ai/api/search-image?query=award%20ceremony%20with%20trophy%20for%20pet%20technology%20innovation%20professional%20business%20setting%20celebration&width=600&height=300&seq=news1&orientation=landscape',
      tags: ['수상', '펫테크', '혁신', 'AI']
    },
    {
      id: 2,
      title: '전국 동물병원 네트워크와 전략적 파트너십 체결',
      summary: '묘연이 전국 500여 개 동물병원과 파트너십을 체결하여 통합 헬스케어 서비스를 제공합니다.',
      content: '이번 파트너십을 통해 집사들은 더욱 편리하고 전문적인 반려동물 헬스케어 서비스를 이용할 수 있게 됩니다.',
      publishDate: '2024-01-14',
      category: '파트너십',
      author: '사업개발팀',
      views: 12350,
      likes: 567,
      image: 'https://readdy.ai/api/search-image?query=veterinary%20hospital%20partnership%20signing%20ceremony%20with%20doctors%20and%20business%20executives%20professional%20handshake&width=600&height=300&seq=news2&orientation=landscape',
      tags: ['파트너십', '동물병원', '헬스케어', '서비스']
    },
    {
      id: 3,
      title: '퍼니버스 메타버스, 글로벌 진출 본격화',
      summary: '묘연의 퍼니버스 메타버스가 일본, 대만 등 아시아 시장 진출을 시작합니다.',
      content: '현지 파트너사와의 협력을 통해 아시아 집사들에게 퍼니버스의 매력을 전파할 예정입니다.',
      publishDate: '2024-01-13',
      category: '서비스 업데이트',
      author: '글로벌사업팀',
      views: 18750,
      likes: 1234,
      image: 'https://readdy.ai/api/search-image?query=global%20expansion%20map%20with%20Asian%20countries%20highlighted%20business%20growth%20international%20market&width=600&height=300&seq=news3&orientation=landscape',
      tags: ['글로벌', '메타버스', '확장', '아시아']
    },
    {
      id: 4,
      title: '길고양이 구조 캠페인, 1만 마리 구조 달성',
      summary: '묘연의 길고양이 구조 네트워크가 설립 이후 누적 1만 마리 구조를 달성했습니다.',
      content: '전국 집사들과 봉사자들의 노력으로 이룬 뜻깊은 성과입니다. 앞으로도 더 많은 생명을 구하겠습니다.',
      publishDate: '2024-01-12',
      category: '사회공헌',
      author: '길구넷팀',
      views: 25680,
      likes: 2847,
      image: 'https://readdy.ai/api/search-image?query=rescued%20cats%20celebration%20milestone%2010000%20cats%20saved%20heartwarming%20rescue%20story%20with%20volunteers&width=600&height=300&seq=news4&orientation=landscape',
      tags: ['구조', '사회공헌', '마일스톤', '봉사']
    },
    {
      id: 5,
      title: '뮤틀러 AI, 고양이 질병 조기 발견 정확도 98% 달성',
      summary: '뮤틀러 AI의 고양이 건강 분석 알고리즘이 질병 조기 발견 정확도 98%를 기록했습니다.',
      content: '딥러닝 기술의 발전으로 고양이의 미세한 행동 변화까지 감지할 수 있게 되었습니다.',
      publishDate: '2024-01-11',
      category: '기술 혁신',
      author: 'AI연구팀',
      views: 9870,
      likes: 445,
      image: 'https://readdy.ai/api/search-image?query=AI%20technology%20analyzing%20cat%20health%20with%20advanced%20algorithms%20medical%20technology%20innovation%20dashboard&width=600&height=300&seq=news5&orientation=landscape',
      tags: ['AI', '건강', '기술', '정확도']
    },
    {
      id: 6,
      title: '묘연 커뮤니티 회원 100만 명 돌파',
      summary: '묘연 플랫폼의 누적 회원 수가 100만 명을 돌파하며 국내 최대 고양이 커뮤니티로 성장했습니다.',
      content: '다양한 서비스와 콘텐츠로 집사들의 사랑을 받으며 빠른 성장을 이어가고 있습니다.',
      publishDate: '2024-01-10',
      category: '커뮤니티',
      author: '커뮤니티팀',
      views: 32100,
      likes: 3456,
      image: 'https://readdy.ai/api/search-image?query=community%20milestone%20celebration%201%20million%20members%20with%20happy%20cat%20owners%20diverse%20people%20celebrating&width=600&height=300&seq=news6&orientation=landscape',
      tags: ['커뮤니티', '회원', '성장', '마일스톤']
    },
    {
      id: 7,
      title: 'PLAYCAT 제품군, 해외 수출 본격 시작',
      summary: 'PLAYCAT 스마트 펫 제품들이 미국과 유럽 시장에 본격 진출합니다.',
      content: '글로벌 펫 시장에서 K-펫테크의 우수성을 알리는 계기가 될 것으로 기대됩니다.',
      publishDate: '2024-01-09',
      category: '파트너십',
      author: '해외사업팀',
      views: 7650,
      likes: 234,
      image: 'https://readdy.ai/api/search-image?query=smart%20pet%20products%20export%20to%20global%20market%20with%20shipping%20containers%20and%20world%20map%20business%20expansion&width=600&height=300&seq=news7&orientation=landscape',
      tags: ['수출', 'PLAYCAT', '글로벌', '제품']
    },
    {
      id: 8,
      title: '블록체인 후원 시스템, 투명성 인증 획득',
      summary: '묘연의 블록체인 기반 후원 시스템이 국제 투명성 기구로부터 인증을 받았습니다.',
      content: '후원금 사용 내역의 완전한 투명성을 보장하는 시스템으로 인정받았습니다.',
      publishDate: '2024-01-08',
      category: '기술 혁신',
      author: '블록체인팀',
      views: 5430,
      likes: 189,
      image: 'https://readdy.ai/api/search-image?query=blockchain%20transparency%20certification%20with%20digital%20certificates%20and%20secure%20donation%20system%20technology&width=600&height=300&seq=news8&orientation=landscape',
      tags: ['블록체인', '투명성', '인증', '후원']
    },
    {
      id: 9,
      title: '묘연 아카데미, 온라인 교육 플랫폼 정식 오픈',
      summary: '고양이 관련 전문 교육을 제공하는 묘연 아카데미가 정식 서비스를 시작합니다.',
      content: '수의사, 행동학자 등 전문가들이 참여하는 체계적인 교육 프로그램을 제공합니다.',
      publishDate: '2024-01-07',
      category: '서비스 업데이트',
      author: '아카데미팀',
      views: 8920,
      likes: 567,
      image: 'https://readdy.ai/api/search-image?query=online%20education%20platform%20launch%20with%20cat%20care%20courses%20professional%20learning%20environment&width=600&height=300&seq=news9&orientation=landscape',
      tags: ['교육', '아카데미', '온라인', '전문가']
    },
    {
      id: 10,
      title: '환경부와 길고양이 TNR 사업 협약 체결',
      summary: '묘연이 환경부와 함께 전국 단위 길고양이 TNR 사업을 추진합니다.',
      content: '체계적이고 과학적인 길고양이 개체수 관리를 통해 생태계 균형을 맞춰나갈 예정입니다.',
      publishDate: '2024-01-06',
      category: '파트너십',
      author: '정책협력팀',
      views: 11200,
      likes: 678,
      image: 'https://readdy.ai/api/search-image?query=government%20partnership%20signing%20ceremony%20for%20TNR%20program%20with%20officials%20and%20environmental%20protection&width=600&height=300&seq=news10&orientation=landscape',
      tags: ['정부협력', 'TNR', '환경', '정책']
    },
    {
      id: 11,
      title: '묘연 창작자 지원 프로그램 확대',
      summary: '창작자들을 위한 지원 프로그램이 대폭 확대되어 더 많은 혜택을 제공합니다.',
      content: '창작 지원금, 교육 프로그램, 마케팅 지원 등 다양한 혜택이 추가됩니다.',
      publishDate: '2024-01-05',
      category: '서비스 업데이트',
      author: '창작자지원팀',
      views: 6840,
      likes: 345,
      image: 'https://readdy.ai/api/search-image?query=creator%20support%20program%20with%20artists%20and%20content%20creators%20working%20on%20cat%20themed%20projects%20creative%20workspace&width=600&height=300&seq=news11&orientation=landscape',
      tags: ['창작자', '지원', '프로그램', '혜택']
    },
    {
      id: 12,
      title: 'IoT 기반 스마트 캣타워 출시',
      summary: '뮤틀러 IoT 기술이 적용된 스마트 캣타워가 새롭게 출시됩니다.',
      content: '고양이의 활동량, 수면 패턴 등을 자동으로 모니터링하는 혁신적인 제품입니다.',
      publishDate: '2024-01-04',
      category: '기술 혁신',
      author: 'IoT개발팀',
      views: 9650,
      likes: 456,
      image: 'https://readdy.ai/api/search-image?query=smart%20cat%20tower%20with%20IoT%20sensors%20modern%20pet%20furniture%20technology%20integration%20sleek%20design&width=600&height=300&seq=news12&orientation=landscape',
      tags: ['IoT', '스마트', '캣타워', '모니터링']
    },
    {
      id: 13,
      title: '묘연 글로벌 컨퍼런스 2024 개최 확정',
      summary: '세계 각국의 펫테크 전문가들이 모이는 글로벌 컨퍼런스가 서울에서 개최됩니다.',
      content: '펫테크의 미래와 혁신 기술에 대한 심도 있는 논의가 이뤄질 예정입니다.',
      publishDate: '2024-01-03',
      category: '커뮤니티',
      author: '이벤트기획팀',
      views: 4520,
      likes: 234,
      image: 'https://readdy.ai/api/search-image?query=global%20conference%20venue%20with%20international%20speakers%20pet%20technology%20summit%20professional%20event&width=600&height=300&seq=news13&orientation=landscape',
      tags: ['컨퍼런스', '글로벌', '펫테크', '전문가']
    },
    {
      id: 14,
      title: '묘연 사회공헌 재단 설립',
      summary: '체계적인 사회공헌 활동을 위한 묘연 사회공헌 재단이 설립되었습니다.',
      content: '길고양이 구조, 반려동물 복지 향상 등 다양한 사회공헌 활동을 전개할 예정입니다.',
      publishDate: '2024-01-02',
      category: '사회공헌',
      author: '사회공헌팀',
      views: 7890,
      likes: 567,
      image: 'https://readdy.ai/api/search-image?query=foundation%20establishment%20ceremony%20for%20social%20contribution%20with%20charity%20work%20and%20animal%20welfare&width=600&height=300&seq=news14&orientation=landscape',
      tags: ['재단', '사회공헌', '복지', '설립']
    },
    {
      id: 15,
      title: '2024년 묘연 비전 및 로드맵 발표',
      summary: '묘연의 2024년 비전과 주요 사업 계획이 공개되었습니다.',
      content: '글로벌 진출, 기술 혁신, 사회적 가치 창출을 핵심으로 하는 야심찬 계획입니다.',
      publishDate: '2024-01-01',
      category: '서비스 업데이트',
      author: '경영기획팀',
      views: 28900,
      likes: 2345,
      image: 'https://readdy.ai/api/search-image?query=business%20vision%20presentation%20with%20roadmap%20charts%20and%20future%20plans%20corporate%20strategy%20meeting&width=600&height=300&seq=news15&orientation=landscape',
      tags: ['비전', '로드맵', '계획', '미래']
    }
  ];

  const filteredNews = selectedCategory === '전체' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen space-bg">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Breaking%20news%20and%20media%20center%20with%20holographic%20displays%2C%20blue%20lighting%2C%20futuristic%20news%20broadcasting%20environment%20with%20cats&width=1200&height=600&seq=news-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(96, 165, 250, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>묘연 뉴스</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>묘연의 최신 소식과 업계 동향을 확인하세요</p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#f6b73c] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        {filteredNews.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="bg-[#f6b73c] text-white text-xs font-medium px-2 py-1 rounded-full mb-2 inline-block">
                      {filteredNews[0].category}
                    </span>
                    <h2 className="text-2xl font-bold mb-2">{filteredNews[0].title}</h2>
                    <p className="text-white/90 mb-3">{filteredNews[0].summary}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>{filteredNews[0].author}</span>
                      <span>{filteredNews[0].publishDate}</span>
                      <span className="flex items-center gap-1">
                        <i className="ri-eye-line"></i>
                        {filteredNews[0].views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredNews.slice(1, 4).map((article) => (
                    <div key={article.id} className="flex gap-4 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full mb-2 inline-block">
                          {article.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 mb-1 hover:text-[#f6b73c] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {article.summary}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{article.publishDate}</span>
                          <span className="flex items-center gap-1">
                            <i className="ri-eye-line"></i>
                            {article.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="ri-heart-line"></i>
                            {article.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.slice(4).map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.publishDate}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#f6b73c] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag) => (
                        <span key={tag} className="bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <i className="ri-eye-line"></i>
                          {article.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="ri-heart-line"></i>
                          {article.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
