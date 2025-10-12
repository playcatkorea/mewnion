
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function BrandSection() {
  const brands = [
    {
      name: 'PetCare Plus',
      category: '펫케어',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20pet%20care%20brand%20logo%20design%2C%20clean%20and%20professional%2C%20veterinary%20themed%2C%20blue%20and%20green%20colors%2C%20minimalist%20style%2C%20trustworthy%20appearance&width=200&height=100&seq=brand1&orientation=landscape',
      description: '프리미엄 펫케어 브랜드'
    },
    {
      name: 'Natural Paws',
      category: '자연식품',
      logo: 'https://readdy.ai/api/search-image?query=Natural%20pet%20food%20brand%20logo%2C%20organic%20and%20eco-friendly%20design%2C%20green%20and%20brown%20earth%20tones%2C%20leaf%20motifs%2C%20healthy%20and%20natural%20appearance&width=200&height=100&seq=brand2&orientation=landscape',
      description: '천연 반려동물 식품'
    },
    {
      name: 'PlayTime Co.',
      category: '장난감',
      logo: 'https://readdy.ai/api/search-image?query=Playful%20pet%20toy%20brand%20logo%2C%20colorful%20and%20fun%20design%2C%20toy-themed%20graphics%2C%20bright%20colors%2C%20cheerful%20and%20energetic%20appearance&width=200&height=100&seq=brand3&orientation=landscape',
      description: '혁신적인 펫토이 브랜드'
    },
    {
      name: 'Cozy Home',
      category: '펫가구',
      logo: 'https://readdy.ai/api/search-image?query=Premium%20pet%20furniture%20brand%20logo%2C%20elegant%20and%20sophisticated%20design%2C%20home%20and%20comfort%20themed%2C%20warm%20colors%2C%20luxury%20appearance&width=200&height=100&seq=brand4&orientation=landscape',
      description: '럭셔리 펫가구 전문'
    }
  ];

  const products = [
    {
      name: '묘연 에코백',
      price: '25,000원',
      creator: '아티스트 김민수',
      donation: '30%',
      image: 'https://readdy.ai/api/search-image?query=Eco-friendly%20tote%20bag%20with%20cute%20cat%20illustration%2C%20artistic%20design%2C%20sustainable%20materials%2C%20modern%20and%20stylish%20appearance%2C%20product%20photography%20with%20clean%20background&width=300&height=300&seq=product1&orientation=squarish'
    },
    {
      name: '고양이 일러스트 포스터',
      price: '15,000원',
      creator: '일러스트레이터 박지영',
      donation: '25%',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20cat%20illustration%20poster%2C%20artistic%20and%20colorful%20design%2C%20modern%20art%20style%2C%20framed%20artwork%2C%20gallery%20quality%20print%2C%20home%20decor%20photography&width=300&height=300&seq=product2&orientation=squarish'
    },
    {
      name: '반려동물 캘린더 2025',
      price: '18,000원',
      creator: '사진작가 이수진',
      donation: '40%',
      image: 'https://readdy.ai/api/search-image?query=Premium%20pet%20calendar%20with%20beautiful%20animal%20photography%2C%20high%20quality%20printing%2C%20desk%20calendar%20design%2C%20professional%20product%20photography%20with%20clean%20background&width=300&height=300&seq=product3&orientation=squarish'
    }
  ];

  return (
    <section id="brand" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6">
            <i className="ri-store-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Brand & Commerce
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-amber-600 font-semibold">No Cat No Life / No Dog No Life</span><br />
            브랜드와 창작자가 함께 만드는 의미있는 커머스
          </p>
        </div>

        {/* Brand Partners */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            파트너 브랜드
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="w-full h-20 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{brand.name}</h4>
                  <p className="text-sm text-amber-600 font-medium mb-2">{brand.category}</p>
                  <p className="text-gray-600 text-sm">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creator Collaboration Products */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              창작자 협업 굿즈
            </h3>
            <p className="text-gray-600 text-lg">
              수익의 일부가 자동으로 동물 보호에 기부됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      기부 {product.donation}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-amber-600 font-semibold text-lg mb-2">{product.price}</p>
                    <p className="text-gray-600 text-sm mb-4">by {product.creator}</p>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => navigateTo('/market/goods')}
                    >
                      <i className="ri-shopping-cart-line mr-2"></i>
                      구매하기
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigateTo('/market/goods')}>
              <i className="ri-store-2-line mr-2"></i>
              전체 상품 보기
            </Button>
          </div>
        </div>

        {/* NFT Marketplace */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              NFT 마켓플레이스
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              반려동물을 주제로 한 디지털 아트 NFT를 거래하고, 창작자를 후원하세요. 
              모든 거래 수수료의 일부는 동물 보호 활동에 사용됩니다.
            </p>
            <div className="space-y-4 mb-8">
              {[
                '큐레이션된 고품질 펫 아트',
                '창작자 직접 후원 시스템',
                '거래 수수료 자동 기부',
                '커뮤니티 투표 기반 선정'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" onClick={() => navigateTo('/market/art')}>
              <i className="ri-image-line mr-2"></i>
              NFT 마켓 둘러보기
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=NFT%20marketplace%20interface%20showing%20digital%20pet%20art%20collections%2C%20modern%20UI%20design%2C%20colorful%20pet%20illustrations%20and%20digital%20artwork%2C%20blockchain%20and%20crypto%20themed%2C%20professional%20marketplace%20design%20with%20clean%20layout&width=600&height=500&seq=nft-marketplace&orientation=squarish"
              alt="NFT Marketplace"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Brand Partnership CTA */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            브랜드 파트너십
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            묘연과 함께 의미있는 비즈니스를 만들어보세요. 
            반려동물을 사랑하는 브랜드들과 함께 더 나은 세상을 만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigateTo('/brand')}>
              <i className="ri-handshake-line mr-2"></i>
              브랜드 제휴 문의
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo('/oem')}
            >
              <i className="ri-palette-line mr-2"></i>
              굿즈 만들기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
