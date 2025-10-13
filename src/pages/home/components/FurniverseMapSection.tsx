
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function FurniverseMapSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
      <div className="container mx-auto px-6">
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
