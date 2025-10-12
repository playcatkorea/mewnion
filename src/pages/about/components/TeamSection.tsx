
import { goToRoute, openExternal } from '../../../utils/navigation';

export default function TeamSection() {
  const leadership = [
    {
      name: '고등어',
      position: 'CEO & Founder',
      bio: '길고양이 출신으로 구조된 후 묘연의 비전을 제시한 전설적인 고양이. 뛰어난 리더십과 카리스마로 팀을 이끌며, 모든 고양이의 행복을 위해 노력합니다.',
      expertise: ['리더십', '전략 기획', '네트워킹'],
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=400&fit=crop&q=80'
    },
    {
      name: '올블랙',
      position: 'CTO',
      bio: '신비로운 흑묘로 Mewtler AI의 핵심 기술을 개발한 천재 고양이. 밤낮없이 연구에 몰두하며 혁신적인 AI 기술을 선보입니다.',
      expertise: ['AI 기술', '시스템 설계', '코딩'],
      image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=300&h=400&fit=crop&q=80'
    },
    {
      name: '치즈',
      position: 'CPO (Chief Product Officer)',
      bio: '사랑스러운 치즈 태비 고양이로 사용자 경험의 달인. 직관적인 서비스 디자인으로 모든 집사들의 마음을 사로잡는 매력쟁이입니다.',
      expertise: ['UX 디자인', '제품 기획', '사용자 조사'],
      image: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=300&h=400&fit=crop&q=80'
    }
  ];

  const departments = [
    {
      name: 'AI Research Team',
      description: '차세대 반려동물 AI 기술 개발',
      members: 12,
      icon: 'ri-robot-line',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Product Development',
      description: '사용자 중심의 제품 설계 및 개발',
      members: 8,
      icon: 'ri-tools-line',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Community & Partnership',
      description: '글로벌 커뮤니티 및 파트너십 관리',
      members: 6,
      icon: 'ri-team-line',
      color: 'from-purple-400 to-violet-500'
    },
    {
      name: 'Animal Welfare',
      description: '동물복지 및 구조 활동 전담',
      members: 10,
      icon: 'ri-heart-3-line',
      color: 'from-red-400 to-pink-500'
    },
    {
      name: 'Blockchain & Security',
      description: '블록체인 기술 및 보안 시스템',
      members: 5,
      icon: 'ri-shield-check-line',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Global Operations',
      description: '해외 진출 및 글로벌 운영',
      members: 7,
      icon: 'ri-global-line',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const advisors = [
    {
      name: '최영수 교수',
      position: '서울대학교 수의과대학',
      specialty: '동물행동학 및 복지학'
    },
    {
      name: '김태현 박사',
      position: '전 삼성전자 AI센터장',
      specialty: 'AI 기술 및 전략'
    },
    {
      name: 'Sarah Johnson',
      position: '전 Google Ventures 파트너',
      specialty: '글로벌 투자 및 확장'
    },
    {
      name: '박민정 변호사',
      position: '동물권 전문 변호사',
      specialty: '동물권 및 법률 자문'
    }
  ];

  return (
    <section id="about-team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#f6b73c]/10 rounded-full text-[#f6b73c] text-sm font-medium mb-6">
            <i className="ri-team-line mr-2"></i>
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            함께 꿈을 만들어가는
            <br />
            <span className="text-[#f6b73c]">묘연 패밀리</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 배경과 전문성을 가진 사람들이 하나의 목표를 향해 
            함께 달려가고 있습니다.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            리더십 팀
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#f6b73c] text-white text-xs font-bold rounded-full">
                      {leader.position.split(' ')[0]}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-[#f6b73c] font-medium mb-4">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {leader.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            부서별 팀 구성
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${dept.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {dept.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {dept.description}
                  </p>
                  <div className="flex items-center text-[#f6b73c] text-sm font-medium">
                    <i className="ri-user-line mr-1"></i>
                    {dept.members}명
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            자문위원회
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-star-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    {advisor.name}
                  </h4>
                  <p className="text-[#f6b73c] text-sm font-medium mb-2">
                    {advisor.position}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {advisor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            함께 세상을 바꿀 동료를 찾습니다
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            생명을 사랑하고 기술로 세상을 더 나은 곳으로 만들고 싶은 분들을 기다립니다. 
            묘연과 함께 의미 있는 변화를 만들어보세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">혁신적 사고</h4>
              <p className="text-sm opacity-80">새로운 아이디어로 문제를 해결</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">생명에 대한 사랑</h4>
              <p className="text-sm opacity-80">모든 생명을 소중히 여기는 마음</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2">협업 정신</h4>
              <p className="text-sm opacity-80">함께 성장하고 발전하는 문화</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cta="manual"
              className="px-8 py-3 bg-white text-[#f6b73c] rounded-full font-bold hover:bg-gray-100 transition-colors"
              onClick={goToRoute('/community')}
            >
              <i className="ri-briefcase-line mr-2"></i>
              채용 정보 보기
            </button>
            <button
              data-cta="manual"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#f6b73c] transition-colors"
              onClick={openExternal('mailto:hello@mewnion.com')}
            >
              <i className="ri-mail-line mr-2"></i>
              이력서 보내기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
