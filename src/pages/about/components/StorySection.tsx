
export default function StorySection() {
  return (
    <section id="about-story" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#f6b73c]/10 rounded-full text-[#f6b73c] text-sm font-medium mb-6">
                <i className="ri-book-open-line mr-2"></i>
                창립자 이야기
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                모든 것은 한 마리의
                <br />
                <span className="text-[#f6b73c]">하얀 고양이</span>에서 시작되었습니다
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                저는 원래 고양이를 좋아하는 사람이 아니었습니다. 맨날 만나면 도망가고 숨는 아이들이 
                애교 많은 강아지처럼 눈에 들어오지 않더라구요.
              </p>
              <p className="text-lg">
                그러던 중 길에서 털이 하얗고 긴 아이를 만났습니다. 멀리 있는 아이를 강아지 부르듯이 부르니 
                신기하게 강아지처럼 다가왔어요. 너무 신기해서 그 자리에서 10분은 쓰다듬은 것 같아요.
              </p>
              <p className="text-lg">
                이 아이로 인해 고양이에 대한 생각이 바뀌었고, 우연히 SNS에서 해외 디자이너가 
                자신의 고양이에게 벽에 구름다리를 해준 사진을 보게 되었습니다.
              </p>
              <p className="text-lg">
                평소라면 그냥 지나쳤을 사진을 유심히 보았고, 만드는 게 어려워 보이지 않아 실제로 만들어 
                SNS에 올리자 많은 관심과 댓글을 받았습니다.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#f6b73c]/10 to-[#7e5bef]/10 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">플레이캣에서 묘연으로</h3>
              <p className="text-gray-600 leading-relaxed">
                그렇게 고양이 카페에서 분양을 하던 때에 품종이 섞여 버려지듯 무료분양하던 
                첫 고양이 '쫑이'를 만나게 됩니다. 제가 할 수 있는 일이 생겼고, 
                이 일이 고양이와 고양이를 키우는 사람까지 행복하게 한다는 것을 직접 느끼며 
                본격적으로 시작하게 되었습니다.
              </p>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=A%20heartwarming%20story%20of%20a%20person%20meeting%20a%20beautiful%20white%20long-haired%20cat%20on%20the%20street%20for%20the%20first%20time.%20The%20scene%20shows%20a%20gentle%20moment%20of%20connection%20between%20human%20and%20cat%2C%20with%20the%20white%20cat%20approaching%20trustingly.%20The%20background%20should%20be%20a%20quiet%20street%20or%20park%20setting%20with%20warm%2C%20soft%20lighting%20that%20captures%20the%20emotional%20significance%20of%20this%20life-changing%20encounter.%20The%20image%20should%20convey%20hope%2C%20new%20beginnings%2C%20and%20the%20special%20bond%20between%20humans%20and%20cats.&width=600&height=800&seq=founder-story&orientation=portrait"
                alt="창립자와 하얀 고양이의 첫 만남"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#7e5bef] rounded-full flex items-center justify-center shadow-xl">
              <i className="ri-heart-3-fill text-white text-2xl"></i>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f6b73c]">첫 만남</div>
                <div className="text-xs text-gray-600">운명의 시작</div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">깨달음의 여정</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              새벽 4시부터 11시까지 김치배송을 하며, 이후에 설치를 다녔습니다. 
              한 집 두 집 설치를 다니고 시공사진이 모여 홍보를 하게 되어 수입이 조금씩 늘어났습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 깨달음 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">첫 번째 깨달음</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                분양샵과 고양이 카페의 안 좋은 점들을 보며, 아이들을 물건처럼 다루는 현실에 
                마음이 아팠습니다. 돈은 벌어야 하지만 양심에 어긋나는 일은 할 수 없었습니다.
              </p>
            </div>

            {/* 깨달음 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-heart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">따뜻한 만남들</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                카페나 분양샵을 거절한 이후로는 정말 따뜻한 분들을 많이 만났습니다. 
                본인의 사비와 시간을 들여 아이들을 지키고 있는 분들이었습니다.
              </p>
            </div>

            {/* 깨달음 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">결정적 깨달음</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                한 통의 전화로 들은 눈물의 이야기. 고양이를 구조하며 생기는 빚과 가족과의 단절. 
                근본적인 문제 해결이 필요하다는 것을 깨달았습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-gradient-to-br from-[#f6b73c]/5 to-[#7e5bef]/5 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">묘연의 비전</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              도움이 필요한 쉼터와 쉼터를 돕고 싶은 후원자분들을 이어주는 서비스를 만들고 싶습니다. 
              혼자서는 힘들고 지칠 수 있지만, 뜻이 맞는 사람들과 함께 한다면 분명 해낼 수 있다고 믿습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-car-line', title: '이동봉사', desc: '차량이 있으면 이동봉사' },
              { icon: 'ri-home-heart-line', title: '임시보호', desc: '임보할 공간이 있으면 임시보호' },
              { icon: 'ri-palette-line', title: '굿즈제작', desc: '그림을 잘 그리면 굿즈제작 판매' },
              { icon: 'ri-tools-line', title: '시설수리', desc: '공구를 잘 다룬다면 쉼터 수리' },
              { icon: 'ri-scales-3-line', title: '법적지원', desc: '변호사분은 법적문제를 도움' },
              { icon: 'ri-scissors-cut-line', title: '미용봉사', desc: '미용실 하시는 분은 염색봉사' },
              { icon: 'ri-computer-line', title: '웹디자인', desc: '입양홍보 이미지 및 사이트 디자인' },
              { icon: 'ri-heart-3-line', title: '함께하기', desc: '각자의 재능으로 함께 도움' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-white text-lg`}></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">함께 하실 분들을 찾습니다</h4>
              <p className="text-gray-600 mb-6">
                묘생역전을 꿈꾸며 "이 모든게 묘연"<br />
                뜻이 맞는 분들과 함께 더 나은 세상을 만들어가고 싶습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center space-x-2 text-[#f6b73c]">
                  <i className="ri-phone-line"></i>
                  <span className="font-medium">010-5676-8282</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[#7e5bef]">
                  <i className="ri-mail-line"></i>
                  <span className="font-medium">thebloomkr@naver.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f6b73c] mb-2">2019</div>
            <div className="text-sm text-gray-600">시작의 해</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f6b73c] mb-2">1000+</div>
            <div className="text-sm text-gray-600">도움받은 고양이</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f6b73c] mb-2">500+</div>
            <div className="text-sm text-gray-600">함께하는 사람들</div>
          </div>
        </div>
      </div>
    </section>
  );
}
