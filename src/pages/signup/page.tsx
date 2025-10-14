import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';
import { useAuth } from '../../context/AuthContext';
import { showFeedback } from '../../utils/navigation';

interface SignupForm {
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

export default function SignupPage() {
  const { signup, loginWithGoogle } = useAuth();
  const [step, setStep] = useState<'signup' | 'username'>('signup');
  const [formData, setFormData] = useState<SignupForm>({
    email: '',
    password: '',
    confirmPassword: '',
    agree: true
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

    if (!formData.agree) {
      showFeedback('이용약관에 동의해주세요', 'error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showFeedback('비밀번호가 일치하지 않습니다', 'error');
      return;
    }

    if (formData.password.length < 6) {
      showFeedback('비밀번호는 6자 이상이어야 합니다', 'error');
      return;
    }

    setLoading(true);
    try {
      await signup({
        email: formData.email,
        password: formData.password,
      });
      setStep('username');
    } catch (error) {
      console.error('회원가입 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Google 회원가입 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  if (step === 'username') {
    return <UsernameSetupPage />;
  }

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
              <p className="text-lg text-purple-100 leading-relaxed mb-4">
                우주 고양이들의 세계에<br />오신 것을 환영합니다
              </p>
              <p className="text-sm text-purple-300">
                하나의 Mewnion ID로<br />모든 서비스를 이용하세요
              </p>
            </div>

            {/* Benefits Box */}
            <div className="mt-8 space-y-3">
              {[
                { icon: 'ri-home-heart-line', text: '나만의 우주 고양이별 캣룸' },
                { icon: 'ri-palette-line', text: 'NFT 아트 & 크리에이터 마켓' },
                { icon: 'ri-robot-line', text: '뮤틀러 AI 맞춤 콘텐츠' },
                { icon: 'ri-trophy-line', text: 'DAO 투표 & 리워드 시스템' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-3 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-400/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] flex items-center justify-center mr-3">
                    <i className={`${item.icon} text-white text-lg`}></i>
                  </div>
                  <span className="text-sm text-purple-100">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-sm text-purple-300">
              이미 계정이 있다면{' '}
              <button
                type="button"
                className="text-[#f6b73c] hover:text-[#e5a635] font-semibold underline transition-colors"
                onClick={() => navigateTo('/login')}
              >
                로그인
              </button>
              하세요
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="p-8 lg:p-12 bg-[#1a1a3a]/80">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 text-white">
                회원가입
              </h1>
              <p className="text-purple-300">
                지금 가입하고 퍼니버스를 경험하세요
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Google Signup Button */}
              <button
                type="button"
                onClick={handleGoogleSignup}
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center font-semibold shadow-lg bg-white text-gray-800 border-2 border-transparent hover:border-purple-400"
              >
                <i className="ri-google-fill mr-2 text-xl text-[#4285f4]"></i>
                Google로 회원가입
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
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-200">
                  비밀번호 (6자 이상)
                </label>
                <div className="relative">
                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg"></i>
                  <input
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-200">
                  비밀번호 확인
                </label>
                <div className="relative">
                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg"></i>
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    minLength={6}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <label className="flex items-start text-sm text-purple-300 cursor-pointer p-4 rounded-xl bg-purple-900/20 border border-purple-500/20">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-4 h-4 rounded accent-purple-500"
                />
                <span>
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
                  에 동의합니다
                </span>
              </label>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] hover:from-[#e5a635] hover:to-[#6d4fd6] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <i className="ri-user-add-line mr-2"></i>
                {loading ? '처리 중...' : '회원가입'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// 닉네임 설정 페이지 컴포넌트
function UsernameSetupPage() {
  const { setUsername, checkUsernameAvailability } = useAuth();
  const [username, setUsernameInput] = useState('');
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheckUsername = async () => {
    if (!username) {
      showFeedback('닉네임을 입력해주세요', 'error');
      return;
    }

    if (username.length < 3) {
      showFeedback('닉네임은 3자 이상이어야 합니다', 'error');
      return;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      showFeedback('닉네임은 영어, 숫자, 언더스코어(_)만 사용 가능합니다', 'error');
      return;
    }

    setChecking(true);
    try {
      const isAvailable = await checkUsernameAvailability(username);
      setAvailable(isAvailable);
      if (isAvailable) {
        showFeedback('사용 가능한 닉네임입니다!');
      } else {
        showFeedback('이미 사용 중인 닉네임입니다', 'error');
      }
    } catch (error) {
      console.error('닉네임 확인 실패:', error);
    } finally {
      setChecking(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!available) {
      showFeedback('닉네임 중복 확인을 먼저 해주세요', 'error');
      return;
    }

    setLoading(true);
    try {
      await setUsername(username);
      showFeedback('닉네임이 설정되었습니다!');
      navigateTo('/onboarding');
    } catch (error) {
      console.error('닉네임 설정 실패:', error);
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
        <div className="w-full max-w-2xl bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-8">
              {/* Animated Cat Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl flex items-center justify-center shadow-2xl animate-bounce border-4 border-white/20">
                  <i className="ri-user-star-fill text-white text-3xl"></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#f6b73c]/20 to-[#7e5bef]/20 rounded-2xl animate-ping"></div>
              </div>

              <h1 className="text-3xl font-bold mb-2 text-white pixel-font">
                닉네임 설정
              </h1>
              <p className="text-purple-300">
                당신만의 미니홈피 주소를 만들어보세요
              </p>
            </div>

            {/* Rules Box */}
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-400/30">
              <h3 className="text-lg font-bold mb-3 text-white flex items-center">
                <i className="ri-information-line text-yellow-400 mr-2"></i>
                닉네임 규칙
              </h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#f6b73c] mr-2"></i>
                  영어, 숫자, 언더스코어(_)만 사용 가능
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#f6b73c] mr-2"></i>
                  3자 이상
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#f6b73c] mr-2"></i>
                  중복 불가
                </li>
                <li className="flex items-center">
                  <i className="ri-arrow-right-s-line text-red-400 mr-2"></i>
                  한 번 설정하면 변경 불가
                </li>
              </ul>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-200">
                  닉네임
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 text-lg"></i>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsernameInput(e.target.value);
                        setAvailable(null);
                      }}
                      required
                      minLength={3}
                      pattern="[a-zA-Z0-9_]+"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/30 border border-purple-500/30 text-white placeholder-purple-400/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="your_username"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={handleCheckUsername}
                    disabled={checking || !username}
                    className="px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                  >
                    {checking ? '확인중...' : '중복확인'}
                  </Button>
                </div>
                {available !== null && (
                  <p className={`mt-2 text-sm flex items-center ${available ? 'text-green-400' : 'text-red-400'}`}>
                    <i className={`${available ? 'ri-checkbox-circle-fill' : 'ri-close-circle-fill'} mr-1`}></i>
                    {available ? '사용 가능한 닉네임입니다' : '이미 사용 중인 닉네임입니다'}
                  </p>
                )}
              </div>

              {/* Preview URL */}
              {username && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#f6b73c]/10 to-[#7e5bef]/10 border border-purple-400/30">
                  <p className="text-sm text-purple-300 mb-2">
                    미니홈피 주소
                  </p>
                  <p className="text-lg font-bold text-white flex items-center">
                    <i className="ri-link mr-2 text-[#f6b73c]"></i>
                    mewnion.io/{username}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || !available}
                size="lg"
                className="w-full bg-gradient-to-r from-[#f6b73c] to-[#7e5bef] hover:from-[#e5a635] hover:to-[#6d4fd6] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <i className="ri-check-line mr-2"></i>
                {loading ? '처리 중...' : '완료'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
