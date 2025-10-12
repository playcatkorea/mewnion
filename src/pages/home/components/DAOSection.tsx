
import { useState } from 'react';
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function DAOSection() {
  const [selectedToken, setSelectedToken] = useState('MEW');

  const tokens = {
    MEW: {
      name: 'MEW Token',
      symbol: 'MEW',
      description: '묘연 생태계의 메인 거버넌스 토큰',
      totalSupply: '1,000,000,000',
      currentPrice: '₩1,250',
      change24h: '+12.5%',
      color: 'from-[#f6b73c] to-[#e5a632]'
    },
    FP: {
      name: 'FP Point',
      symbol: 'FP',
      description: '퍼니버스 내 활동 및 거래용 포인트',
      totalSupply: '무제한',
      currentPrice: '₩125',
      change24h: '+5.2%',
      color: 'from-[#7e5bef] to-[#6d4ce0]'
    }
  };

  const rewardTypes = [
    {
      type: 'PoC',
      name: 'Proof of Care',
      description: '고양이 돌봄 활동 증명',
      icon: 'ri-heart-line',
      examples: ['일일 케어 체크', '건강 모니터링', '놀이 시간 기록'],
      reward: '10-50 MEW/일'
    },
    {
      type: 'PoD',
      name: 'Proof of Data',
      description: '데이터 제공 증명',
      icon: 'ri-database-line',
      examples: ['Mewtler 데이터 업로드', '행동 패턴 공유', '건강 정보 제공'],
      reward: '5-25 MEW/업로드'
    },
    {
      type: 'PoA',
      name: 'Proof of Art',
      description: '예술 창작 활동 증명',
      icon: 'ri-palette-line',
      examples: ['NFT 아트 등록', '창작물 판매', '커뮤니티 기여'],
      reward: '50-500 MEW/작품'
    },
    {
      type: 'PoL',
      name: 'Proof of Love',
      description: '사랑 실천 활동 증명',
      icon: 'ri-gift-line',
      examples: ['후원 참여', '봉사 활동', '입양 연결'],
      reward: '20-200 MEW/활동'
    },
    {
      type: 'PoE',
      name: 'Proof of Education',
      description: '교육 참여 및 제공 증명',
      icon: 'ri-book-line',
      examples: ['강의 수강', '지식 공유', '멘토링 활동'],
      reward: '15-100 MEW/세션'
    }
  ];

  const daoProposals = [
    {
      id: '#001',
      title: '전국 보호소 지원 예산 증액 제안',
      status: '투표 중',
      votes: { for: 75, against: 25 },
      endDate: '2024.12.20',
      proposer: '집사연합회'
    },
    {
      id: '#002',
      title: 'Mewtler AI 업그레이드 로드맵 승인',
      status: '통과',
      votes: { for: 89, against: 11 },
      endDate: '2024.12.15',
      proposer: '기술위원회'
    },
    {
      id: '#003',
      title: '새로운 파트너 브랜드 승인 기준 개정',
      status: '검토 중',
      votes: { for: 0, against: 0 },
      endDate: '2024.12.25',
      proposer: '브랜드위원회'
    }
  ];

  return (
    <section id="dao" className="py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mb-6">
            <i className="ri-government-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            DAO & Tokenomics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-indigo-600 font-semibold">탈중앙화 자율조직</span>으로<br />
            모든 참여자가 함께 만들어가는 생태계
          </p>
        </div>

        {/* Token Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {Object.entries(tokens).map(([key, token]) => (
            <div
              key={key}
              className={`bg-gradient-to-br ${token.color} rounded-3xl p-8 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                selectedToken === key ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setSelectedToken(key)}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{token.name}</h3>
                  <p className="text-white/80">{token.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{token.currentPrice}</div>
                  <div className="text-green-200 font-medium">{token.change24h}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-white/60 text-sm">총 공급량</div>
                  <div className="font-semibold">{token.totalSupply}</div>
                </div>
                <div>
                  <div className="text-white/60 text-sm">심볼</div>
                  <div className="font-semibold">{token.symbol}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PoX Reward System */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              PoX 보상 시스템
            </h3>
            <p className="text-gray-600 text-lg">
              다양한 활동을 통해 토큰을 획득하고 생태계에 기여하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewardTypes.map((reward, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${reward.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold inline-block mb-2">
                    {reward.type}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{reward.name}</h4>
                  <p className="text-gray-600 text-sm">{reward.description}</p>
                </div>
                <div className="space-y-2 mb-6">
                  {reward.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                    {reward.reward}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DAO Governance */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              DAO 거버넌스
            </h3>
            <p className="text-gray-600 text-lg">
              MEW 토큰 홀더들이 직접 참여하는 민주적 의사결정
            </p>
          </div>

          <div className="space-y-6">
            {daoProposals.map((proposal, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span className="text-indigo-600 font-bold">{proposal.id}</span>
                    <h4 className="font-bold text-gray-800">{proposal.title}</h4>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      proposal.status === '투표 중' ? 'bg-yellow-100 text-yellow-800' :
                      proposal.status === '통과' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {proposal.status}
                    </span>
                    <span className="text-gray-500 text-sm">~{proposal.endDate}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="text-sm text-gray-600">
                    제안자: {proposal.proposer}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${proposal.votes.for}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      찬성 {proposal.votes.for}%
                    </span>
                  </div>
                  <div className="text-right">
                    {proposal.status === '투표 중' && (
                      <Button size="sm" onClick={() => navigateTo('/web3')}>
                        <i className="ri-vote-line mr-1"></i>
                        투표하기
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              토크노믹스 구조
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              지속가능한 생태계를 위한 균형잡힌 토큰 분배와 순환 구조를 설계했습니다. 
              모든 참여자가 공정하게 보상받을 수 있는 시스템입니다.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: '커뮤니티 보상', percentage: '40%', color: 'bg-blue-500' },
                { label: '생태계 개발', percentage: '25%', color: 'bg-green-500' },
                { label: '팀 & 어드바이저', percentage: '20%', color: 'bg-purple-500' },
                { label: '마케팅 & 파트너십', percentage: '15%', color: 'bg-orange-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 ${item.color} rounded`}></div>
                  <span className="flex-1 text-gray-700">{item.label}</span>
                  <span className="font-semibold text-gray-800">{item.percentage}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigateTo('/web3')}>
                <i className="ri-file-text-line mr-2"></i>
                Whitepaper 보기
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigateTo('/web3')}
              >
                <i className="ri-group-line mr-2"></i>
                DAO 참여하기
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20tokenomics%20diagram%20showing%20token%20distribution%20and%20ecosystem%20flow%2C%20blockchain%20and%20cryptocurrency%20themed%2C%20clean%20infographic%20design%2C%20pie%20charts%20and%20flow%20diagrams%2C%20modern%20fintech%20visualization%2C%20blue%20and%20purple%20color%20scheme&width=600&height=500&seq=tokenomics&orientation=squarish"
              alt="Tokenomics Diagram"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
