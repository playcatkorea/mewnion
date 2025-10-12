import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';

export default function MarketLandingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white">
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Mewnion Market
                <br />
                착한 소비와 창작을 위한 하이브 마켓
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                반려동물과 사람이 함께 행복해지는 제품, 크리에이터의 열정을 담은 작품,
                그리고 보호소를 응원하는 스폰서 브랜드까지. 한곳에서 만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-amber-500 hover:bg-gray-100"
                  onClick={() => navigateTo('/market/goods')}
                >
                  <i className="ri-shopping-basket-2-line mr-2"></i>
                  굿즈 스토어
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigateTo('/market/art')}
                >
                  <i className="ri-layout-masonry-fill mr-2"></i>
                  크리에이터 마켓
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-600 font-semibold text-sm">
                GOODS
              </span>
              <h2 className="text-3xl font-bold text-gray-900">No Cat No Life 굿즈 스토어</h2>
              <p className="text-gray-600 leading-relaxed">
                실사용자 후기를 바탕으로 엄선한 프리미엄 라이프스타일 제품, 수의사가 추천하는 케어템,
                친환경 사료와 간식까지 준비되어 있어요.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  '100% 파트너 인증 제품만 입점',
                  '판매 수익의 일부는 길고양이 구조 활동에 사용',
                  '뮤틀러 AI 데이터 기반 추천 큐레이션',
                  '해외 크리에이터 콜라보 굿즈'
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <i className="ri-check-line text-amber-500 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" onClick={() => navigateTo('/market/goods')}>
                <i className="ri-store-2-line mr-2"></i>
                굿즈 전체 보기
              </Button>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Premium%20cat%20products%20display%20with%20eco%20friendly%20packaging%20and%20modern%20aesthetic&width=900&height=700&seq=market-goods&orientation=landscape"
                alt="굿즈 스토어"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-3xl p-8 shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Digital%20art%20market%20showcasing%20cat%20themed%20NFT%20artworks%20vibrant%20gallery%20style&width=900&height=700&seq=market-art&orientation=landscape"
                alt="크리에이터 아트"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-semibold text-sm">
                ART MARKET
              </span>
              <h2 className="text-3xl font-bold text-gray-900">크리에이터 아트 & NFT</h2>
              <p className="text-gray-600 leading-relaxed">
                고양이와 반려동물을 주제로 활동하는 일러스트레이터, 사진작가, 3D 아티스트들의 한정판 작품을 만나보세요.
                NFT 민팅과 실물 굿즈 제작까지 연결됩니다.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  '메타버스 갤러리에서 실시간 전시',
                  'NFT + 실물 패키지 옵션 지원',
                  '수익의 10%는 보호소 운영 기금으로 기부',
                  '크리에이터 전용 커뮤니티 운영'
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <i className="ri-check-line text-purple-500 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigateTo('/market/art')}>
                  <i className="ri-brush-line mr-2"></i>
                  작품 둘러보기
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigateTo('/academy/create')}
                >
                  <i className="ri-upload-cloud-2-line mr-2"></i>
                  작가 입점 신청
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-600 font-semibold text-sm">
                SPONSOR
              </span>
              <h2 className="text-3xl font-bold text-gray-900">임팩트 스폰서 라운지</h2>
              <p className="text-gray-600 leading-relaxed">
                CSR/ESG 활동을 펼치는 브랜드와 함께 길고양이 구조, 보호소 개선 사업을 후원합니다.
                스폰서 상품을 구매하면 자동으로 기부에 참여할 수 있어요.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  '브랜드별 기부 프로젝트 스토리 공개',
                  '기부금 사용 내역 투명하게 공개',
                  '정기 후원 프로그램 및 이벤트',
                  '기업 맞춤 콜라보 상품 제작 가능'
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <i className="ri-check-line text-teal-500 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigateTo('/market/sponsor')}>
                  <i className="ri-hand-heart-line mr-2"></i>
                  스폰서 제품 보기
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigateTo('/brand')}>
                  <i className="ri-handshake-line mr-2"></i>
                  파트너십 제안하기
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Corporate%20sponsorship%20event%20supporting%20animal%20shelter%20with%20brand%20booths%20and%20donations&width=900&height=700&seq=market-sponsor&orientation=landscape"
                alt="스폰서 브랜드"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
