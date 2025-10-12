
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface TokenomicsData {
  name: string;
  symbol: string;
  totalSupply: string;
  currentPrice: string;
  marketCap: string;
  holders: number;
}

interface RoadmapItem {
  quarter: string;
  year: string;
  title: string;
  items: string[];
  status: 'completed' | 'in-progress' | 'planned';
}

interface DAOMember {
  id: number;
  name: string;
  role: string;
  votingPower: number;
  proposals: number;
  avatar: string;
}

interface ProposalVote {
  proposalId: number;
  hasVoted: boolean;
  votedFor?: boolean;
}

export default function Web3Page() {
  const [activeTab, setActiveTab] = useState('dao');
  const [userVotes, setUserVotes] = useState<ProposalVote[]>([]);
  const [walletConnected, setWalletConnected] = useState(false);
  const [userAddress, setUserAddress] = useState<string>('');
  const [proposalsState, setProposalsState] = useState([
    {
      id: 1,
      title: '길고양이 구조 기금 확대 제안',
      description: '월간 구조 기금을 현재 1000 MEOW에서 2000 MEOW로 확대',
      status: '투표중',
      votes: { for: 85420, against: 12350 },
      endDate: '2024-01-25'
    },
    {
      id: 2,
      title: '새로운 NFT 컬렉션 출시',
      description: '한국 전통 고양이를 테마로 한 NFT 컬렉션 제작',
      status: '통과',
      votes: { for: 92340, against: 5680 },
      endDate: '2024-01-20'
    },
    {
      id: 3,
      title: '스테이킹 보상률 조정',
      description: '연간 스테이킹 보상률을 12%에서 15%로 상향 조정',
      status: '검토중',
      votes: { for: 0, against: 0 },
      endDate: '2024-01-30'
    }
  ]);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [newProposal, setNewProposal] = useState({
    title: '',
    description: '',
    endDate: ''
  });

  const tokenomics: TokenomicsData = {
    name: 'Mewnion Token',
    symbol: 'MEOW',
    totalSupply: '1,000,000,000',
    currentPrice: '$0.0245',
    marketCap: '$24,500,000',
    holders: 15420
  };

  const roadmapData: RoadmapItem[] = [
    {
      quarter: 'Q1',
      year: '2024',
      title: 'DAO 거버넌스 런칭',
      items: [
        'MEOW 토큰 정식 출시',
        'DAO 투표 시스템 구축',
        '커뮤니티 거버넌스 시작',
        '스테이킹 프로그램 런칭'
      ],
      status: 'completed'
    },
    {
      quarter: 'Q2',
      year: '2024',
      title: 'DeFi 생태계 확장',
      items: [
        'DEX 유동성 풀 생성',
        'NFT 마켓플레이스 통합',
        '크로스체인 브릿지 구축',
        'DeFi 파밍 프로그램'
      ],
      status: 'in-progress'
    },
    {
      quarter: 'Q3',
      year: '2024',
      title: '메타버스 통합',
      items: [
        '퍼니버스 토큰 경제 연동',
        'P2E 게임 메커니즘 도입',
        'NFT 랜드 거래 시스템',
        '가상 자산 관리 도구'
      ],
      status: 'planned'
    },
    {
      quarter: 'Q4',
      year: '2024',
      title: '글로벌 확장',
      items: [
        '해외 거래소 상장',
        '다국가 규제 준수',
        '파트너십 확대',
        '기관 투자자 유치'
      ],
      status: 'planned'
    }
  ];

  const daoMembers: DAOMember[] = [
    {
      id: 1,
      name: '김집사',
      role: 'Core Contributor',
      votingPower: 15420,
      proposals: 12,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20avatar%20of%20Korean%20person%20with%20cat%20themed%20background%20digital%20art%20style&width=100&height=100&seq=dao1&orientation=squarish'
    },
    {
      id: 2,
      name: '이냥이',
      role: 'Community Manager',
      votingPower: 12350,
      proposals: 8,
      avatar: 'https://readdy.ai/api/search-image?query=friendly%20community%20manager%20avatar%20with%20cat%20ears%20digital%20art%20style%20professional&width=100&height=100&seq=dao2&orientation=squarish'
    },
    {
      id: 3,
      name: '박개발',
      role: 'Tech Lead',
      votingPower: 18750,
      proposals: 15,
      avatar: 'https://readdy.ai/api/search-image?query=tech%20developer%20avatar%20with%20coding%20background%20and%20cat%20themed%20elements%20digital%20art&width=100&height=100&seq=dao3&orientation=squarish'
    },
    {
      id: 4,
      name: '최디자인',
      role: 'Creative Director',
      votingPower: 9870,
      proposals: 6,
      avatar: 'https://readdy.ai/api/search-image?query=creative%20designer%20avatar%20with%20artistic%20background%20and%20cat%20inspiration%20digital%20art&width=100&height=100&seq=dao4&orientation=squarish'
    },
    {
      id: 5,
      name: '정마케팅',
      role: 'Growth Hacker',
      votingPower: 11200,
      proposals: 9,
      avatar: 'https://readdy.ai/api/search-image?query=marketing%20professional%20avatar%20with%20growth%20charts%20and%20cat%20themed%20branding%20digital%20art&width=100&height=100&seq=dao5&orientation=squarish'
    }
  ];

  // 지갑 연결 함수
  const connectWallet = async () => {
    try {
      // 실제 Web3 연동 시 MetaMask 등 사용
      const mockAddress = '0x' + Math.random().toString(16).substring(2, 42);
      setUserAddress(mockAddress);
      setWalletConnected(true);
      alert('지갑이 연결되었습니다!');
    } catch (error) {
      console.error('지갑 연결 실패:', error);
      alert('지갑 연결에 실패했습니다.');
    }
  };

  // 투표 함수
  const handleVote = (proposalId: number, voteFor: boolean) => {
    if (!walletConnected) {
      alert('먼저 지갑을 연결해주세요!');
      return;
    }

    // 이미 투표했는지 확인
    const existingVote = userVotes.find(v => v.proposalId === proposalId);
    if (existingVote) {
      alert('이미 이 제안에 투표하셨습니다!');
      return;
    }

    // 투표 처리
    const voteAmount = 100; // 사용자의 투표권 (실제로는 지갑의 MEOW 토큰 양)

    setProposalsState(prev => prev.map(p => {
      if (p.id === proposalId) {
        return {
          ...p,
          votes: voteFor
            ? { ...p.votes, for: p.votes.for + voteAmount }
            : { ...p.votes, against: p.votes.against + voteAmount }
        };
      }
      return p;
    }));

    setUserVotes(prev => [...prev, { proposalId, hasVoted: true, votedFor: voteFor }]);

    alert(`${voteFor ? '찬성' : '반대'} 투표가 완료되었습니다!`);
  };

  // 새 제안 생성
  const handleCreateProposal = () => {
    if (!walletConnected) {
      alert('먼저 지갑을 연결해주세요!');
      return;
    }

    if (!newProposal.title || !newProposal.description || !newProposal.endDate) {
      alert('모든 필드를 입력해주세요!');
      return;
    }

    const proposal = {
      id: proposalsState.length + 1,
      title: newProposal.title,
      description: newProposal.description,
      status: '검토중' as const,
      votes: { for: 0, against: 0 },
      endDate: newProposal.endDate
    };

    setProposalsState(prev => [...prev, proposal]);
    setShowProposalModal(false);
    setNewProposal({ title: '', description: '', endDate: '' });
    alert('새 제안이 생성되었습니다!');
  };

  // 사용자가 이미 투표했는지 확인
  const hasUserVoted = (proposalId: number) => {
    return userVotes.some(v => v.proposalId === proposalId);
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
              backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20blockchain%20and%20cryptocurrency%20background%20with%20cat%20themed%20elements%20digital%20finance%20technology&width=1200&height=600&seq=web3-hero&orientation=landscape')`
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>WEB3 DAO</h1>
            <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>

              탈중앙화된 자율 조직으로 묘연의 미래를 함께 만들어가세요. 
              토큰 보유자들이 직접 의사결정에 참여하는 새로운 거버넌스 시스템입니다.
            </p>
            <div className="flex justify-center gap-4">
              {!walletConnected ? (
                <button
                  onClick={connectWallet}
                  className="bg-[#7e5bef] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6d4fd6] transition-colors flex items-center gap-2"
                >
                  <i className="ri-wallet-line"></i>
                  지갑 연결하기
                </button>
              ) : (
                <div className="bg-green-500/20 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm flex items-center gap-2">
                  <i className="ri-checkbox-circle-fill text-green-400"></i>
                  연결됨: {userAddress.slice(0, 6)}...{userAddress.slice(-4)}
                </div>
              )}
              <button
                onClick={() => setActiveTab('whitepaper')}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                백서 다운로드
              </button>
            </div>
          </div>
        </section>

        {/* Token Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#7e5bef] mb-1">{tokenomics.currentPrice}</div>
                <div className="text-sm text-gray-600">현재 가격</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f6b73c] mb-1">{tokenomics.marketCap}</div>
                <div className="text-sm text-gray-600">시가총액</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-1">{tokenomics.totalSupply}</div>
                <div className="text-sm text-gray-600">총 공급량</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">{tokenomics.holders.toLocaleString()}</div>
                <div className="text-sm text-gray-600">홀더 수</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500 mb-1">+12.5%</div>
                <div className="text-sm text-gray-600">24시간 변동</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 mb-1">$2.4M</div>
                <div className="text-sm text-gray-600">24시간 거래량</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'dao', label: 'DAO 거버넌스', icon: 'ri-government-line' },
                { id: 'tokenomics', label: '토크노믹스', icon: 'ri-coin-line' },
                { id: 'roadmap', label: '로드맵', icon: 'ri-roadster-line' },
                { id: 'whitepaper', label: '백서', icon: 'ri-file-text-line' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#7e5bef] text-[#7e5bef]'
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

        {/* DAO Governance */}
        {activeTab === 'dao' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Proposals */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">진행중인 제안</h2>
                    <button
                      onClick={() => setShowProposalModal(true)}
                      className="bg-[#7e5bef] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6d4fd6] transition-colors flex items-center gap-2"
                    >
                      <i className="ri-add-line"></i>
                      새 제안 만들기
                    </button>
                  </div>
                  <div className="space-y-6">
                    {proposalsState.map((proposal) => (
                      <div key={proposal.id} className="bg-white rounded-lg shadow-sm p-6 border">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{proposal.title}</h3>
                            <p className="text-gray-600 mb-3">{proposal.description}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            proposal.status === '투표중' ? 'bg-blue-100 text-blue-800' :
                            proposal.status === '통과' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {proposal.status}
                          </span>
                        </div>
                        
                        {proposal.votes.for > 0 || proposal.votes.against > 0 ? (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>찬성: {proposal.votes.for.toLocaleString()} MEOW</span>
                              <span>반대: {proposal.votes.against.toLocaleString()} MEOW</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full"
                                style={{ 
                                  width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%` 
                                }}
                              ></div>
                            </div>
                          </div>
                        ) : null}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">마감: {proposal.endDate}</span>
                          {proposal.status === '투표중' ? (
                            <div className="flex gap-2">
                              {hasUserVoted(proposal.id) ? (
                                <span className="text-sm text-gray-600 px-4 py-2 bg-gray-100 rounded-lg">
                                  <i className="ri-check-line"></i> 투표 완료
                                </span>
                              ) : (
                                <>
                                  <button
                                    onClick={() => handleVote(proposal.id, true)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center gap-1"
                                  >
                                    <i className="ri-thumb-up-line"></i>
                                    찬성
                                  </button>
                                  <button
                                    onClick={() => handleVote(proposal.id, false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors flex items-center gap-1"
                                  >
                                    <i className="ri-thumb-down-line"></i>
                                    반대
                                  </button>
                                </>
                              )}
                            </div>
                          ) : (
                            <span className="text-sm text-gray-600">투표 불가</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DAO Members */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 기여자</h2>
                  <div className="space-y-4">
                    {daoMembers.map((member) => (
                      <div key={member.id} className="bg-white rounded-lg shadow-sm p-4 border">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={member.avatar} 
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-gray-500">투표권</div>
                            <div className="font-medium">{member.votingPower.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">제안 수</div>
                            <div className="font-medium">{member.proposals}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tokenomics */}
        {activeTab === 'tokenomics' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">토크노믹스</h2>
                <p className="text-lg text-gray-600">MEOW 토큰의 경제 모델과 분배 구조</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Token Distribution */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">토큰 분배</h3>
                  <div className="space-y-4">
                    {[
                      { label: '커뮤니티 보상', percentage: 40, color: 'bg-[#7e5bef]' },
                      { label: '개발팀', percentage: 20, color: 'bg-[#f6b73c]' },
                      { label: '생태계 발전', percentage: 15, color: 'bg-green-500' },
                      { label: '파트너십', percentage: 10, color: 'bg-blue-500' },
                      { label: '마케팅', percentage: 10, color: 'bg-purple-500' },
                      { label: '예비금', percentage: 5, color: 'bg-gray-400' }
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded ${item.color}`}></div>
                          <span className="text-gray-700">{item.label}</span>
                        </div>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Token Utility */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">토큰 활용</h3>
                  <div className="space-y-4">
                    {[
                      { icon: 'ri-government-line', title: '거버넌스 투표', desc: 'DAO 제안에 대한 투표권' },
                      { icon: 'ri-coin-line', title: '스테이킹 보상', desc: '토큰 스테이킹으로 추가 보상' },
                      { icon: 'ri-shopping-cart-line', title: '마켓플레이스', desc: 'NFT 및 굿즈 구매' },
                      { icon: 'ri-gamepad-line', title: '게임 내 화폐', desc: '퍼니버스 게임 내 결제' },
                      { icon: 'ri-heart-line', title: '후원 기부', desc: '길고양이 구조 후원' }
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#7e5bef]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-[#7e5bef]`}></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Staking Info */}
              <div className="bg-gradient-to-r from-[#7e5bef]/10 to-[#f6b73c]/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">스테이킹 프로그램</h3>
                  <p className="text-gray-600">MEOW 토큰을 스테이킹하고 추가 보상을 받으세요</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-[#7e5bef] mb-2">15%</div>
                    <div className="text-gray-600">연간 수익률</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-[#f6b73c] mb-2">30일</div>
                    <div className="text-gray-600">최소 락업 기간</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">24시간</div>
                    <div className="text-gray-600">보상 지급 주기</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Roadmap */}
        {activeTab === 'roadmap' && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">로드맵</h2>
                <p className="text-lg text-gray-600">묘연 WEB3 생태계의 발전 계획</p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                
                <div className="space-y-12">
                  {roadmapData.map((item, index) => (
                    <div key={`${item.year}-${item.quarter}`} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                        <div className="bg-white rounded-lg shadow-sm p-6 border">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.status === 'completed' ? 'bg-green-100 text-green-800' :
                              item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {item.year} {item.quarter}
                            </span>
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === 'completed' ? 'bg-green-500' :
                              item.status === 'in-progress' ? 'bg-blue-500' :
                              'bg-gray-400'
                            }`}></div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                          <ul className="space-y-2">
                            {item.items.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <i className={`ri-${item.status === 'completed' ? 'check' : item.status === 'in-progress' ? 'time' : 'circle'}-line text-${
                                  item.status === 'completed' ? 'green' : item.status === 'in-progress' ? 'blue' : 'gray'
                                }-500`}></i>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className={`w-8 h-8 rounded-full border-4 border-white ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'in-progress' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Whitepaper */}
        {activeTab === 'whitepaper' && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">백서</h2>
                <p className="text-lg text-gray-600">묘연 WEB3 생태계의 기술적 세부사항과 비전</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. 개요</h3>
                  <p className="text-gray-600 mb-6">
                    묘연은 블록체인 기술을 활용하여 고양이와 집사들을 위한 탈중앙화된 생태계를 구축합니다. 
                    MEOW 토큰을 중심으로 한 경제 시스템을 통해 커뮤니티 거버넌스, 사회적 가치 창출, 
                    그리고 지속 가능한 성장을 추구합니다.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. 기술 아키텍처</h3>
                  <p className="text-gray-600 mb-6">
                    이더리움 기반의 ERC-20 토큰으로 시작하여, 향후 멀티체인 환경으로 확장할 예정입니다. 
                    스마트 컨트랙트를 통한 자동화된 거버넌스와 투명한 자금 관리 시스템을 구현합니다.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. 토크노믹스</h3>
                  <p className="text-gray-600 mb-6">
                    총 10억 개의 MEOW 토큰이 발행되며, 40%는 커뮤니티 보상, 20%는 개발팀, 
                    나머지는 생태계 발전과 파트너십을 위해 할당됩니다. 디플레이션 메커니즘을 통해 
                    장기적인 가치 상승을 도모합니다.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">4. DAO 거버넌스</h3>
                  <p className="text-gray-600 mb-6">
                    토큰 홀더들이 직접 의사결정에 참여하는 탈중앙화된 자율 조직을 운영합니다. 
                    제안, 투표, 실행의 전 과정이 블록체인 상에서 투명하게 진행됩니다.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">5. 사회적 임팩트</h3>
                  <p className="text-gray-600 mb-6">
                    블록체인의 투명성을 활용하여 길고양이 구조 활동의 모든 과정을 추적 가능하게 합니다. 
                    후원금의 사용 내역부터 구조된 고양이들의 근황까지 실시간으로 확인할 수 있습니다.
                  </p>

                  <div className="bg-gradient-to-r from-[#7e5bef]/10 to-[#f6b73c]/10 rounded-lg p-6 mt-8">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">전체 백서 다운로드</h4>
                      <p className="text-gray-600 mb-4">
                        더 자세한 기술적 세부사항과 로드맵을 확인하세요
                      </p>
                      <button className="bg-[#7e5bef] text-white px-6 py-3 rounded-lg hover:bg-[#6d4fd6] transition-colors">
                        PDF 다운로드
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 새 제안 생성 모달 */}
        {showProposalModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">새 제안 만들기</h2>
                <button
                  onClick={() => setShowProposalModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제안 제목 *
                  </label>
                  <input
                    type="text"
                    value={newProposal.title}
                    onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
                    placeholder="제안의 제목을 입력하세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7e5bef] focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제안 내용 *
                  </label>
                  <textarea
                    value={newProposal.description}
                    onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
                    placeholder="제안의 상세 내용을 입력하세요"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7e5bef] focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    투표 마감일 *
                  </label>
                  <input
                    type="date"
                    value={newProposal.endDate}
                    onChange={(e) => setNewProposal({ ...newProposal, endDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7e5bef] focus:border-transparent outline-none"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <i className="ri-information-line text-blue-500 text-xl flex-shrink-0"></i>
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">제안 생성 안내</p>
                      <ul className="list-disc list-inside space-y-1 text-blue-700">
                        <li>제안은 검토 후 투표가 시작됩니다</li>
                        <li>최소 100 MEOW 토큰이 필요합니다</li>
                        <li>제안은 수정할 수 없으니 신중히 작성해주세요</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowProposalModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleCreateProposal}
                    className="flex-1 px-6 py-3 bg-[#7e5bef] text-white rounded-lg hover:bg-[#6d4fd6] transition-colors font-medium"
                  >
                    제안 생성
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
