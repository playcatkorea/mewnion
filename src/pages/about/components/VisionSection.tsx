
export default function VisionSection() {
  const visions = [
    {
      icon: 'ri-global-line',
      title: '글로벌 생명공감 네트워크',
      description: '전 세계 모든 생명이 사랑받고 보호받는 연결된 세상을 만듭니다.',
      image: 'https://readdy.ai/api/search-image?query=A%20beautiful%20global%20network%20visualization%20showing%20interconnected%20nodes%20of%20light%20representing%20different%20countries%20and%20communities%2C%20with%20cats%20and%20other%20animals%20at%20each%20connection%20point.%20The%20image%20should%20have%20a%20cosmic%2C%20ethereal%20quality%20with%20golden%20and%20purple%20light%20connections%20spanning%20across%20a%20stylized%20world%20map.%20Include%20elements%20of%20care%2C%20protection%2C%20and%20unity%20with%20a%20futuristic%20yet%20warm%20aesthetic.&width=400&height=300&seq=vision-global&orientation=landscape'
    },
    {
      icon: 'ri-robot-line',
      title: 'AI 기반 생명 케어',
      description: '인공지능이 반려동물의 건강과 행복을 24시간 지켜보고 돌봅니다.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20AI%20technology%20caring%20for%20pets%2C%20showing%20a%20futuristic%20home%20environment%20where%20artificial%20intelligence%20monitors%20and%20cares%20for%20cats%20and%20dogs.%20Include%20holographic%20displays%2C%20gentle%20robotic%20assistance%2C%20health%20monitoring%20systems%2C%20and%20a%20warm%2C%20safe%20atmosphere.%20The%20technology%20should%20feel%20caring%20and%20non-intrusive%2C%20with%20soft%20blue%20and%20white%20lighting.&width=400&height=300&seq=vision-ai&orientation=landscape'
    },
    {
      icon: 'ri-earth-line',
      title: '지속가능한 생태계',
      description: '경제적 가치와 사회적 가치가 선순환하는 지속가능한 생태계를 구축합니다.',
      image: 'https://readdy.ai/api/search-image?query=A%20sustainable%20ecosystem%20showing%20the%20circular%20economy%20of%20care%2C%20featuring%20renewable%20energy%2C%20green%20technology%2C%20and%20animals%20living%20in%20harmony%20with%20nature.%20Include%20elements%20of%20blockchain%2C%20digital%20tokens%2C%20and%20community%20collaboration%2C%20all%20integrated%20into%20a%20lush%2C%20green%20environment%20that%20represents%20sustainability%20and%20growth.&width=400&height=300&seq=vision-eco&orientation=landscape'
    }
  ];

  return (
    <section id="about-vision" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#7e5bef]/10 rounded-full text-[#7e5bef] text-sm font-medium mb-6">
            <i className="ri-telescope-line mr-2"></i>
            Our Vision
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            우리가 꿈꾸는
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6b73c] to-[#7e5bef]">
              미래의 모습
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            기술과 사랑이 만나 모든 생명이 존중받는 세상, 
            그것이 묘연이 그리는 미래입니다.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visions.map((vision, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Vision Image */}
                <div className="relative mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={vision.image}
                    alt={vision.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className={`${vision.icon} text-[#f6b73c] text-xl`}></i>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {vision.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {vision.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            "No Life Left Behind"
          </h3>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            어떤 생명도 혼자 남겨두지 않겠다는 약속으로, 
            우리는 기술과 사랑을 통해 모든 생명이 행복할 수 있는 세상을 만들어갑니다.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-80">무한한 사랑</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🌍</div>
              <div className="text-sm opacity-80">글로벌 연결</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">🤖</div>
              <div className="text-sm opacity-80">AI 기술</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">💚</div>
              <div className="text-sm opacity-80">지속가능성</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
