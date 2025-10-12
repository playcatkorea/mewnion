
import Button from '../../../components/base/Button';
import { scrollToElement } from '../../../utils/navigation';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20heartwarming%20scene%20showing%20the%20journey%20from%20a%20small%20idea%20to%20a%20global%20movement%2C%20featuring%20cats%2C%20humans%2C%20and%20technology%20working%20together%20in%20harmony.%20The%20image%20shows%20a%20path%20leading%20from%20a%20cozy%20home%20with%20a%20single%20cat%20to%20a%20vast%20digital%20landscape%20filled%20with%20connected%20communities%2C%20AI%20technology%2C%20and%20caring%20hands%20reaching%20out%20to%20help%20animals.%20Soft%20golden%20lighting%20creates%20an%20inspiring%20atmosphere%20with%20elements%20of%20nature%2C%20technology%2C%20and%20love%20blending%20seamlessly.%20The%20background%20should%20be%20warm%20and%20inviting%20with%20plenty%20of%20space%20for%20text%20overlay%20on%20the%20left%20side.&width=1920&height=1080&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <i className="ri-heart-3-fill mr-2 text-[#f6b73c]"></i>
              About Mewnion
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              생명공감의
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6b73c] to-[#7e5bef]">
                새로운 시작
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              한 마리의 고양이에서 시작된 작은 사랑이
              <br />
              전 세계 생명을 보호하는 거대한 움직임이 되기까지의 이야기
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              data-cta="manual"
              size="lg"
              className="bg-[#f6b73c] hover:bg-[#e5a632] text-white"
              onClick={scrollToElement('about-story')}
            >
              <i className="ri-play-circle-line mr-2"></i>
              우리의 여정 보기
            </Button>
            <Button
              data-cta="manual"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-800"
              onClick={scrollToElement('about-team')}
            >
              <i className="ri-team-line mr-2"></i>
              팀 만나기
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
