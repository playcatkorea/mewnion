import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const { login, loginWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: true
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login({
        email: formData.email,
        password: formData.password,
      });
      navigateTo('/');
    } catch (error) {
      console.error('로그인 실패:', error);
    } finally {
      setLoading(false);
      setFormData((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Google 로그인 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a]">
      <Header />

      {/* Pixel Art Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Pixel%20art%20style%20cute%20cat%20universe%20with%20floating%20cat%20planets%2C%208-bit%20retro%20gaming%20aesthetic%2C%20colorful%20space%20cats%20floating%20among%20pixelated%20stars%20and%20planets%2C%20purple%20and%20golden%20cosmic%20background%2C%20low%20resolution%20pixel%20graphics%2C%20nostalgic%20arcade%20game%20style%2C%20kawaii%20space%20cats%2C%20minimalist%20pixel%20design%2C%20vibrant%20colors%2C%20retro%20gaming%20atmosphere&width=1920&height=1080&seq=pixel-universe&orientation=landscape')`
        }}
      />

      {/* Pixel Stars Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-yellow-300 opacity-60" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
          </div>
        ))}
      </div>

      <main className="relative pt-20 lg:pt-24 flex items-center justify-center px-4 py-12 min-h-screen">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl shadow-2xl">

          {/* Left Side - Welcome Section */}
          <div className="relative p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-purple-900/50 to-pink-900/50">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              {/* Animated Cat Icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl flex items-center justify-center shadow-2xl animate-bounce border-4 border-white/20">
                  <i className="ri-heart-3-fill text-white text-4xl"></i>
                </div>
                <div className="absolute -inset-3 bg-gradient-to-br from-[#f6b73c]/20 to-[#7e5bef]/20 rounded-2xl animate-ping"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-4 pixel-font">
                <span className="bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] bg-clip-text text-transparent">
                  FURNIVERSE
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] rounded-full mb-4"></div>
              <p className="text-lg text-purple-100 leading-relaxed">
                우주 고양이들의 세계로<br />돌아오신 것을 환영합니다
              </p>
            </div>

            {/* Features Box */}
            <div className="mt-8 p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-purple-400/30">
              <h3 className="text-lg font-bold mb-3 text-white flex items-center">
                <i className="ri-star-fill text-yellow-400 mr-2"></i>
                로그인하고 경험하세요
              </h3>
              <div className="space-y-2 text-sm text-purple-200">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  나만의 우주 고양이별 캣룸
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  NFT 아트 & 크리에이터 마켓
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  뮤틀러 AI 맞춤 콘텐츠
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-2"></i>
                  커뮤니티 & 리워드 시스템
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="p-8 lg:p-12 bg-[#1a1a3a]/80">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-white">
                로그인
              </h1>
              <p className="text-purple-300">
                아직 계정이 없다면{' '}
                <button
                  type="button"
                  className="text-[#f6b73c] hover:text-[#e5a635] font-semibold underline transition-colors"
                  onClick={() => navigateTo('/signup')}
                >
                  회원가입
                </button>
                을 진행해주세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center font-semibold shadow-lg bg-white text-gray-800 border-2 border-transparent hover:border-purple-400"
              >
                <i className="ri-google-fill mr-2 text-xl text-[#4285f4]"></i>
                Google로 로그인
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-purple-500/30"></div>
                <span className="px-4 text-sm text-purple-400">OR</span>
                <div className="flex-1 border-t border-purple-500/30"></div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-200">
                  이메일
                </label>
                <div className="relative">
                  <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg"></i>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="hello@mewnion.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-200">
                  비밀번호
                </label>
                <div className="relative">
                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg"></i>
                  <input
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-purple-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded accent-purple-500"
                  />
                  로그인 상태 유지
                </label>
                <button
                  type="button"
                  className="text-sm text-[#f6b73c] hover:text-[#e5a635] hover:underline transition-colors"
                  onClick={() => navigateTo('/community')}
                >
                  비밀번호 찾기
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] hover:from-[#e5a635] hover:to-[#6d4fd6] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <i className="ri-login-circle-line mr-2"></i>
                {loading ? '로그인 중...' : '로그인'}
              </Button>
            </form>

            {/* Terms Notice */}
            <div className="mt-6 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20">
              <p className="text-xs leading-relaxed text-purple-300">
                로그인함으로써{' '}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f6b73c] hover:text-[#e5a635] underline transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/terms', '_blank', 'noopener,noreferrer');
                  }}
                >
                  이용약관
                </a>
                과{' '}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f6b73c] hover:text-[#e5a635] underline transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/privacy', '_blank', 'noopener,noreferrer');
                  }}
                >
                  개인정보 처리방침
                </a>
                에 동의하는 것으로 간주돼요.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
