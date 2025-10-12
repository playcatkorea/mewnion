
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function FurniverseSection() {
  const features = [
    {
      icon: 'ri-home-line',
      title: '랜드 NFT',
      description: '나만의 집과 놀이터를 건설하세요',
      color: 'from-[#f6b73c] to-[#e5a632]'
    },
    {
      icon: 'ri-user-heart-line',
      title: '캣룸',
      description: 'AI 미니홈피로 고양이와 소통하세요',
      color: 'from-[#7e5bef] to-[#6d4ce0]'
    },
    {
      icon: 'ri-store-line',
      title: '브랜드존',
      description: '다양한 브랜드가 입점한 쇼핑 공간',
      color: 'from-[#c6a776] to-[#b8956a]'
    },
    {
      icon: 'ri-heart-3-line',
      title: '쉼터존',
      description: '입양 대기 고양이들을 만나보세요',
      color: 'from-[#ff6b9d] to-[#e55a87]'
    }
  ];

  return (
    <section id="furniverse" className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full mb-6">
            <i className="ri-global-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Furniverse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            퍼니버스는 모든 집사와 고양이가 함께 살아가는<br />
            <span className="text-[#f6b73c] font-semibold">평평한 지구</span>입니다
          </p>
        </div>

        {/* Main Visual */}
        <div className="relative mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://readdy.ai/api/search-image?query=A%20beautiful%20flat%20earth%20metaverse%20landscape%20viewed%20from%20above%20like%20a%20drone%20shot%2C%20featuring%20cute%20cat%20houses%2C%20playgrounds%2C%20and%20virtual%20spaces%20scattered%20across%20a%20peaceful%20terrain%2C%20soft%20pastel%20colors%2C%20magical%20lighting%2C%20floating%20islands%20connected%20by%20bridges%2C%20cats%20and%20people%20living%20together%20harmoniously%2C%20digital%20art%20style%20with%20warm%20golden%20and%20purple%20tones%2C%20futuristic%20yet%20cozy%20atmosphere&width=1200&height=600&seq=furniverse-main&orientation=landscape"
              alt="Furniverse Metaverse"
              className="w-full h-96 md:h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">평평한 지구의 퍼니버스</h3>
              <p className="text-lg opacity-90">드론 뷰로 보는 메타버스 공간</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Preview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                3D 인터랙티브 맵
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                실시간으로 업데이트되는 퍼니버스 맵에서 다른 집사들과 고양이들의 활동을 확인하고, 
                새로운 친구들을 만나보세요. 각 구역을 클릭하면 상세 정보를 볼 수 있습니다.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  '실시간 활동 현황 확인',
                  '친구 초대 및 방문 기능',
                  '이벤트 및 축제 알림',
                  '커뮤니티 활동 참여'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#f6b73c] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" onClick={() => navigateTo('/furniverse')}>
                <i className="ri-map-line mr-2"></i>
                퍼니버스 탐험하기
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=A%203D%20interactive%20map%20interface%20showing%20a%20cute%20metaverse%20world%20with%20cat%20houses%2C%20playgrounds%2C%20and%20various%20zones%2C%20isometric%20view%2C%20colorful%20and%20friendly%20design%2C%20UI%20elements%20and%20tooltips%20visible%2C%20modern%20interface%20design%20with%20soft%20shadows%20and%20gradients%2C%20cats%20and%20people%20icons%20scattered%20across%20the%20map%2C%20warm%20lighting%20and%20inviting%20atmosphere&width=600&height=500&seq=interactive-map&orientation=squarish"
                alt="3D Interactive Map"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-700">
                <i className="ri-user-line mr-1"></i>
                1,247명 온라인
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
