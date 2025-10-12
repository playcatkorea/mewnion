
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const MewtlerPage = () => {
  const [activeTab, setActiveTab] = useState('homecam');

  const aiServices = [
    {
      id: 'homecam',
      title: '뮤틀러 홈캠',
      description: '24시간 고양이 모니터링 및 행동 분석',
      icon: 'ri-camera-line',
      features: ['실시간 스트리밍', '행동 패턴 분석', '이상 행동 알림', '건강 상태 체크']
    },
    {
      id: 'analysis',
      title: 'AI 분석 툴',
      description: '고양이 사진/영상 분석 및 건강 진단',
      icon: 'ri-brain-line',
      features: ['표정 분석', '건강 상태 진단', '품종 식별', '나이 추정']
    },
    {
      id: 'psychology',
      title: '심리 테스트',
      description: '고양이와 집사의 심리 상태 분석',
      icon: 'ri-heart-pulse-line',
      features: ['성격 분석', '스트레스 측정', '호환성 테스트', '행복도 측정']
    },
    {
      id: 'generator',
      title: '이미지 생성',
      description: 'AI로 고양이 이미지 및 아바타 생성',
      icon: 'ri-image-add-line',
      features: ['고양이 아바타', '캐릭터 생성', '스티커 제작', '프로필 이미지']
    },
    {
      id: 'chatbot',
      title: '챗봇 상담',
      description: '고양이 전문 AI 상담사와 대화',
      icon: 'ri-chat-3-line',
      features: ['24시간 상담', '행동 문제 해결', '건강 조언', '양육 팁']
    },
    {
      id: 'iot',
      title: '뮤틀러 IoT',
      description: '스마트 가구와 연결된 종합 관리 시스템',
      icon: 'ri-home-wifi-line',
      features: ['스마트 급식기', '자동 화장실', '온도 조절', '활동량 측정']
    }
  ];

  const analysisResults = [
    {
      catName: '나비',
      owner: '김집사',
      result: '건강 상태 양호, 약간의 스트레스 감지',
      score: 85,
      date: '2024-01-15'
    },
    {
      catName: '호랑이',
      owner: '이집사',
      result: '매우 활발한 성격, 사회성 우수',
      score: 92,
      date: '2024-01-14'
    },
    {
      catName: '까망이',
      owner: '박집사',
      result: '조용한 성격, 충분한 휴식 필요',
      score: 78,
      date: '2024-01-13'
    }
  ];

  const iotRankings = [
    { rank: 1, catName: '루나', owner: '최집사', activity: 2847, health: 95 },
    { rank: 2, catName: '모모', owner: '정집사', activity: 2756, health: 93 },
    { rank: 3, catName: '코코', owner: '강집사', activity: 2689, health: 91 },
    { rank: 4, catName: '치즈', owner: '윤집사', activity: 2634, health: 89 },
    { rank: 5, catName: '망고', owner: '임집사', activity: 2578, health: 87 }
  ];

  return (
    <div className="min-h-screen space-bg">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20AI%20laboratory%20with%20cute%20cats%20and%20holographic%20displays%2C%20purple%20and%20blue%20neon%20lights%2C%20high-tech%20equipment%2C%20digital%20interfaces%2C%20cyberpunk%20aesthetic%2C%20clean%20modern%20design&width=1200&height=600&seq=mewtler-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4" style={{textShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 40px rgba(167, 139, 250, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
            뮤틀러 AI
          </h1>
          <p className="text-2xl neon-text mb-6 font-medium">
            집사들의 집사
          </p>
          <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            인공지능으로 고양이와 집사의 더 나은 삶을 만들어갑니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap">
              무료 체험하기
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors whitespace-nowrap">
              서비스 둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {aiServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                  activeTab === service.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50'
                }`}
              >
                <i className={`${service.icon} mr-2`} />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {aiServices.map((service) => (
            <div
              key={service.id}
              className={`${activeTab === service.id ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
                      자세히 보기
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src={`https://readdy.ai/api/search-image?query=AI%20technology%20interface%20for%20cat%20monitoring%20and%20analysis%2C%20holographic%20displays%20showing%20cat%20health%20data%2C%20futuristic%20dashboard%20with%20purple%20and%20blue%20colors%2C%20modern%20UI%20design%2C%20cute%20cat%20silhouettes&width=500&height=400&seq=mewtler-${service.id}&orientation=landscape`}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Analysis Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            최근 AI 분석 결과
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {analysisResults.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{result.catName}</h3>
                  <span className="text-sm text-gray-500">{result.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{result.result}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">건강 점수</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 rounded-full mr-2">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-purple-600">{result.score}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">분석자: {result.owner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Rankings */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            뮤틀러 IoT 랭킹 대시보드
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
              <h3 className="text-xl font-bold">이번 주 활동량 랭킹</h3>
              <p className="text-purple-100">스마트 가구 연동 데이터 기반</p>
            </div>
            <div className="p-6">
              {iotRankings.map((cat) => (
                <div key={cat.rank} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                      cat.rank === 1 ? 'bg-yellow-500' : 
                      cat.rank === 2 ? 'bg-gray-400' : 
                      cat.rank === 3 ? 'bg-orange-500' : 'bg-purple-500'
                    }`}>
                      {cat.rank}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{cat.catName}</h4>
                      <p className="text-sm text-gray-500">{cat.owner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-600">{cat.activity.toLocaleString()}점</p>
                    <p className="text-sm text-gray-500">건강도 {cat.health}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            지금 뮤틀러 AI와 함께하세요
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            집사들의 집사가 되어 더 스마트한 고양이 케어를 경험해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-bold whitespace-nowrap">
              무료 체험 시작
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap">
              요금제 보기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MewtlerPage;
