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
    <div className="min-h-screen w-full space-bg">
      <Header />
      <main className="pt-16 lg:pt-20 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden glass-effect rounded-3xl">
          <div className="hidden lg:flex relative p-12 flex-col justify-between" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-8xl mb-8 float-animation">🐱</div>
              <h2 className="text-4xl font-bold mb-4 space-font" style={{color: '#ffffff'}}>MEWNION</h2>
              <div className="w-24 h-1 bg-white/30 rounded-full mb-4"></div>
              <p className="text-lg" style={{color: 'rgba(255,255,255,0.9)'}}>생명공감의 우주로 돌아오신 것을 환영합니다</p>
            </div>
            <div className="p-6 rounded-2xl" style={{background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
              <h3 className="text-lg font-bold mb-2" style={{color: '#ffffff'}}>로그인하고 경험하세요</h3>
              <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.8)'}}>
                • 활동 기록 및 후원 내역 관리<br/>
                • 뮤틀러 AI 맞춤 콘텐츠<br/>
                • 커뮤니티 참여 및 리워드
              </p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold mb-2 space-font gradient-text">로그인</h1>
            <p className="mb-8" style={{color: '#94a3b8'}}>
              아직 계정이 없다면{' '}
              <button
                type="button"
                className="underline neon-text font-semibold"
                onClick={() => navigateTo('/signup')}
              >
                회원가입
              </button>
              을 진행해주세요.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Google 로그인 */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full px-6 py-4 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center font-semibold"
                style={{background: '#fff', color: '#000', border: '2px solid #4285f4'}}
              >
                <i className="ri-google-fill mr-2 text-lg" style={{color: '#4285f4'}}></i>
                Google로 로그인
              </button>

              <div className="flex items-center my-4">
                <div className="flex-1 border-t" style={{borderColor: 'rgba(167, 139, 250, 0.3)'}}></div>
                <span className="px-4 text-sm" style={{color: '#94a3b8'}}>OR</span>
                <div className="flex-1 border-t" style={{borderColor: 'rgba(167, 139, 250, 0.3)'}}></div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#cbd5e1'}}>이메일</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{background: 'rgba(26, 31, 58, 0.5)', border: '1px solid rgba(167, 139, 250, 0.3)', color: '#e2e8f0'}}
                  placeholder="hello@mewnion.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#cbd5e1'}}>비밀번호</label>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                  style={{background: 'rgba(26, 31, 58, 0.5)', border: '1px solid rgba(167, 139, 250, 0.3)', color: '#e2e8f0'}}
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm" style={{color: '#cbd5e1'}}>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded"
                    style={{accentColor: '#667eea'}}
                  />
                  로그인 상태 유지
                </label>
                <button
                  type="button"
                  className="text-sm neon-text hover:underline"
                  onClick={() => navigateTo('/community')}
                >
                  비밀번호 찾기
                </button>
              </div>
              <button type="submit" disabled={loading} className="w-full space-button px-6 py-4 text-base font-semibold">
                <i className="ri-login-circle-line mr-2"></i>
                {loading ? '로그인 중...' : '로그인'}
              </button>
            </form>
            <div className="mt-8 p-4 rounded-2xl" style={{background: 'rgba(26, 31, 58, 0.3)', border: '1px solid rgba(167, 139, 250, 0.2)'}}>
              <p className="text-xs leading-relaxed" style={{color: '#94a3b8'}}>
                로그인함으로써{' '}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline neon-text hover:opacity-80"
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
                  className="underline neon-text hover:opacity-80"
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
