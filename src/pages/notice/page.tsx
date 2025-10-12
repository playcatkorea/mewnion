
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  isImportant: boolean;
  views: number;
  author: string;
}

export default function NoticePage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '서비스', '이벤트', '업데이트', '공지', '정책'];

  const notices: Notice[] = [
    {
      id: 1,
      title: '퍼니버스 메타버스 정식 오픈 안내',
      content: '드디어 퍼니버스 메타버스가 정식 오픈합니다! 여러분만의 고양이별장에서 여러분의 캣룸을 꾸며보세요',
      date: '2024-01-15',
      category: '서비스',
      isImportant: true,
      views: 15420,
      author: '묘연팀'
    },
    {
      id: 2,
      title: '길고양이 구조 네트워크 확장 공식',
      content: '전국 50개 지역으로 길고양이 구조 네트워크가 확장되었습니다. 더 많은 길고양이들을 도울 수 있게 되었어요.',
      date: '2024-01-14',
      category: '서비스',
      isImportant: true,
      views: 12350,
      author: '길구넷팀'
    },
    {
      id: 3,
      title: '뮤틀러 AI 홈캠 2.0 업데이트',
      content: '고양이 행동 분석 정확도가 95%로 향상되었습니다. 새로운 건강 모니터링 기능도 추가되었어요.',
      date: '2024-01-13',
      category: '업데이트',
      isImportant: false,
      views: 8920,
      author: '뮤틀러팀'
    },
    {
      id: 4,
      title: '신년 특별 이벤트 - 캣룸 꾸미기 대회',
      content: '가장 창의적인 캣룸을 꾸민 집사님께 특별 상품을 드립니다. 참여 기간: 1월 15일 ~ 2월 14일',
      date: '2024-01-12',
      category: '이벤트',
      isImportant: false,
      views: 18750,
      author: '이벤트팀'
    },
    {
      id: 5,
      title: '마켓 플레이스 수수료 인하 안내',
      content: '창작자 지원을 위해 마켓 플레이스 판매 수수료를 5%에서 3%로 인하합니다',
      date: '2024-01-11',
      category: '정책',
      isImportant: false,
      views: 6840,
      author: '마켓팀'
    },
    {
      id: 6,
      title: '아카데미 신규 강의 오픈',
      content: '고양이 행동학 전문가와 함께하는 온라인 강의가 새롭게 오픈되었습니다',
      date: '2024-01-10',
      category: '서비스',
      isImportant: false,
      views: 4520,
      author: '아카데미팀'
    },
    {
      id: 7,
      title: '서버 정기 점검 안내 (1월 16일)',
      content: '서비스 품질 향상을 위한 정기 점검을 진행합니다. 점검 시간: 오전 2시 ~ 6시',
      date: '2024-01-09',
      category: '공지',
      isImportant: true,
      views: 3210,
      author: '기술팀'
    },
    {
      id: 8,
      title: 'PLAYCAT 제품군 출시',
      content: '고양이를 위한 스마트 급식기 PLAYCAT-F200이 출시되었습니다. 사전 예약 시 30% 할인!',
      date: '2024-01-08',
      category: '서비스',
      isImportant: false,
      views: 9870,
      author: '브랜드팀'
    },
    {
      id: 9,
      title: '커뮤니티 가이드라인 업데이트',
      content: '더 건전한 커뮤니티 환경 조성을 위해 가이드라인을 업데이트했습니다',
      date: '2024-01-07',
      category: '정책',
      isImportant: false,
      views: 2150,
      author: '운영팀'
    },
    {
      id: 10,
      title: '블록체인 회원 증명서 대시보드 오픈',
      content: '회원님의 활동 내역을 실시간으로 확인할 수 있는 증명서 대시보드가 오픈되었습니다',
      date: '2024-01-06',
      category: '서비스',
      isImportant: true,
      views: 11200,
      author: '블록체인팀'
    },
    {
      id: 11,
      title: '겨울철 길고양이 보온용품 지원 캠페인',
      content: '추운 겨울을 나는 길고양이들을 위한 보온용품 지원 캠페인이 시작됩니다',
      date: '2024-01-05',
      category: '이벤트',
      isImportant: false,
      views: 7650,
      author: '길구넷팀'
    },
    {
      id: 12,
      title: '모바일 앱 성능 개선 업데이트',
      content: '페이지 로딩 속도가 40% 향상되고 배터리 사용량이 20% 감소되었습니다',
      date: '2024-01-04',
      category: '업데이트',
      isImportant: false,
      views: 5430,
      author: '개발팀'
    },
    {
      id: 13,
      title: '신규 파트너십 체결 안내',
      content: '전국 동물병원 네트워크와 파트너십을 체결하여 더 나은 서비스를 제공합니다',
      date: '2024-01-03',
      category: '서비스',
      isImportant: false,
      views: 8920,
      author: '사업개발팀'
    },
    {
      id: 14,
      title: '연말연시 고객센터 운영 안내',
      content: '연말연시 기간 중 고객센터 운영 시간이 단축됩니다. 양해 부탁드립니다',
      date: '2024-01-02',
      category: '공지',
      isImportant: false,
      views: 1890,
      author: '고객지원팀'
    },
    {
      id: 15,
      title: '2024년 신년 인사 및 로드맵 공개',
      content: '묘연의 2024년 비전과 주요 계획을 공개합니다. 함께 만들어갈 한 해를 기대해주세요!',
      date: '2024-01-01',
      category: '서비스',
      isImportant: true,
      views: 22100,
      author: '대표이사'
    }
  ];

  const filteredNotices = selectedCategory === '전체'
    ? notices
    : notices.filter(notice => notice.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://readdy.ai/api/search-image?query=Company announcements and official news with futuristic digital displays, purple and pink neon lights, modern corporate communication environment&width=1920&height=600&seq=notice-hero&orientation=landscape')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl font-bold text-white mb-4" style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(236, 72, 153, 0.6)'
            }}>공지사항</h1>
            <p className="text-xl text-white" style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
            }}>묘연의 최신 소식과 중요한 안내사항을 확인하세요</p>
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

        {/* Notice List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="divide-y divide-gray-200">
                {filteredNotices.map((notice) => (
                  <div key={notice.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {notice.isImportant && (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                              중요
                            </span>
                          )}
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                            {notice.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#f6b73c] transition-colors">
                          {notice.title}
                        </h3>
                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {notice.content}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{notice.author}</span>
                          <span>{notice.date}</span>
                          <span className="flex items-center gap-1">
                            <i className="ri-eye-line"></i>
                            {notice.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <i className="ri-arrow-right-s-line text-gray-400 text-xl"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="ri-arrow-left-s-line"></i>
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      page === 1
                        ? 'bg-[#f6b73c] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <i className="ri-arrow-right-s-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
