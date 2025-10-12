
import Button from '../../../components/base/Button';

interface CommunityHeroProps {
  onCreatePost: () => void;
}

export default function CommunityHero({ onCreatePost }: CommunityHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 text-center space-bg">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Pet%20community%20gathering%20people%20sharing%20stories%20cats%20friendly%20social%20connections%20warm%20atmosphere&width=1200&height=600&seq=community-hero&orientation=landscape')`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-white text-sm font-medium mb-6">
          <i className="ri-community-line mr-2"></i>
          Mewnion Community
        </div>

        <h1 className="text-5xl font-bold text-white mb-6 leading-tight" style={{textShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(126, 91, 239, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
          집사들의 특별한
          <br />
          <span className="neon-text">소통 공간</span>
        </h1>


        <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
          전 세계 집사들과 함께 반려동물 이야기를 나누고,
          <br />
          소중한 순간들을 공유해보세요
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className="space-button px-8 py-3 whitespace-nowrap"
            onClick={onCreatePost}
          >
            <i className="ri-add-circle-line mr-2"></i>
            새 게시물 작성
          </button>
          <button className="border-2 border-white/60 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm whitespace-nowrap">
            <i className="ri-live-line mr-2"></i>
            라이브 방송 보기
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1" style={{textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'}}>24.7K</div>
            <div className="text-sm text-white/80">활성 집사</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1" style={{textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'}}>156K</div>
            <div className="text-sm text-white/80">게시물</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1" style={{textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'}}>89K</div>
            <div className="text-sm text-white/80">반려동물</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1" style={{textShadow: '0 0 10px rgba(245, 158, 11, 0.6)'}}>2.1M</div>
            <div className="text-sm text-white/80">좋아요</div>
          </div>
        </div>
      </div>
    </section>
  );
}
