
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

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" onClick={() => navigateTo('/furniverse')}>
            <i className="ri-rocket-line mr-2"></i>
            퍼니버스 입장하기
          </Button>
        </div>
      </div>
    </section>
  );
}
