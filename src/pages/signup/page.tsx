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
    <div className="min-h-screen w-full crt-effect" style={{background: '#000033'}}>
      <Header />
      <main className="pt-16 lg:pt-20 px-4 py-16">
        <div className="max-w-5xl mx-auto rounded-none shadow-2xl overflow-hidden" style={{background: '#001133', border: '4px solid #00ff00'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 flex flex-col justify-between" style={{background: '#0000aa', borderRight: '4px solid #00ff00'}}>
              <div>
                <div className="text-6xl mb-4" style={{filter: 'drop-shadow(0 0 20px #00ff00)'}}>🐱</div>
                <h1 className="text-4xl font-bold mb-4 terminal-text blink">MEWNION SIGNUP</h1>
                <p className="leading-relaxed" style={{color: '#00ffff'}}>
                  퍼니버스, 길구넷, 크리에이터 마켓, 뮤틀러 AI까지
                  하나의 Mewnion ID로 연결됩니다.
                </p>
              </div>
              <div className="space-y-4 mt-10 p-4 border-2" style={{borderColor: '#00ff00', background: '#000033'}}>
                {[
                  '커뮤니티 활동과 후원 내역을 한 번에 관리',
                  '뮤틀러 AI, PoD 리워드 자동 연동',
                  '굿즈 · NFT 마켓 크리에이터 온보딩',
                  'DAO 투표 및 Web3 참여 자격 부여'
                ].map((value, idx) => (
                  <div key={value} className="flex items-start">
                    <div className="mr-3 font-bold" style={{color: '#ffff00'}}>
                      [{idx + 1}]
                    </div>
                    <p className="text-sm leading-relaxed terminal-text">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-sm" style={{color: '#00ffff'}}>
                이미 계정이 있다면{' '}
                <button
                  type="button"
                  className="underline terminal-text"
                  onClick={() => navigateTo('/login')}
                >
                  로그인
                </button>
                으로 이동하세요.
              </div>
            </div>
            <div className="p-10" style={{background: '#001133'}}>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 terminal-text">{'>>>'} REGISTER</h2>

                {/* Google 회원가입 */}
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  disabled={loading}
                  className="w-full px-6 py-4 border-2 rounded-none hover:bg-opacity-80 transition-colors flex items-center justify-center"
                  style={{background: '#fff', borderColor: '#4285f4', color: '#000'}}
                >
                  <i className="ri-google-fill mr-2 text-lg"></i>
                  Google로 회원가입
                </button>

                <div className="flex items-center my-4">
                  <div className="flex-1 border-t-2" style={{borderColor: '#00ff00'}}></div>
                  <span className="px-4 terminal-text">OR</span>
                  <div className="flex-1 border-t-2" style={{borderColor: '#00ff00'}}></div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 terminal-text">EMAIL:</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                    style={{background: '#000033', borderColor: '#00ff00', color: '#00ff00'}}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 terminal-text">PASSWORD:</label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                    style={{background: '#000033', borderColor: '#00ff00', color: '#00ff00'}}
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 terminal-text">CONFIRM:</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                    style={{background: '#000033', borderColor: '#00ff00', color: '#00ff00'}}
                    placeholder="••••••••"
                  />
                </div>
                <label className="flex items-start text-sm" style={{color: '#00ffff'}}>
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                    style={{accentColor: '#00ff00'}}
                  />
                  <span>
                    묘연의{' '}
                    <a
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                      style={{color: '#ffff00'}}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('/terms', '_blank', 'noopener,noreferrer');
                      }}
                    >
                      이용 약관
                    </a>
                    과{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                      style={{color: '#ffff00'}}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('/privacy', '_blank', 'noopener,noreferrer');
                      }}
                    >
                      개인정보 처리방침
                    </a>
                    에 동의합니다.
                  </span>
                </label>

                <Button
                  data-cta="manual"
                  size="lg"
                  type="submit"
                  className="w-full retro-button"
                  disabled={loading}
                >
                  <i className="ri-user-add-line mr-2"></i>
                  {loading ? 'PROCESSING...' : '[ENTER] 회원가입하기'}
                </Button>
              </form>
            </div>
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
    <div className="min-h-screen w-full crt-effect" style={{background: '#000033'}}>
      <Header />
      <main className="pt-16 lg:pt-20 px-4 py-16">
        <div className="max-w-2xl mx-auto rounded-none shadow-2xl overflow-hidden" style={{background: '#001133', border: '4px solid #00ff00'}}>
          <div className="p-10" style={{background: '#0000aa'}}>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4" style={{filter: 'drop-shadow(0 0 20px #00ff00)'}}>🐱</div>
              <h1 className="text-3xl font-bold mb-2 terminal-text blink">SETUP USERNAME</h1>
              <p className="terminal-text" style={{color: '#00ffff'}}>
                당신만의 미니홈피 주소를 만들어보세요
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="border-2 p-6" style={{borderColor: '#ffff00', background: '#000033'}}>
                <h3 className="text-lg font-bold mb-3 terminal-text" style={{color: '#ffff00'}}>
                  {'>>>'} 닉네임 규칙
                </h3>
                <ul className="space-y-2 text-sm" style={{color: '#00ffff'}}>
                  <li className="terminal-text">• 영어, 숫자, 언더스코어(_)만 사용 가능</li>
                  <li className="terminal-text">• 3자 이상</li>
                  <li className="terminal-text">• 중복 불가</li>
                  <li className="terminal-text">• 한 번 설정하면 변경 불가</li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 terminal-text">USERNAME:</label>
                <div className="flex gap-2">
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
                    className="flex-1 px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                    style={{background: '#000033', borderColor: '#00ff00', color: '#00ff00'}}
                    placeholder="your_username"
                  />
                  <Button
                    type="button"
                    onClick={handleCheckUsername}
                    disabled={checking || !username}
                    className="retro-button px-6"
                  >
                    {checking ? '확인중...' : '중복확인'}
                  </Button>
                </div>
                {available !== null && (
                  <p className={`mt-2 text-sm terminal-text ${available ? 'text-green-400' : 'text-red-400'}`}>
                    {available ? '✓ 사용 가능한 닉네임입니다' : '✗ 이미 사용 중인 닉네임입니다'}
                  </p>
                )}
              </div>

              {username && (
                <div className="border-2 p-4" style={{borderColor: '#00ff00', background: '#000033'}}>
                  <p className="text-sm terminal-text mb-2" style={{color: '#00ffff'}}>
                    미니홈피 주소:
                  </p>
                  <p className="text-lg font-bold terminal-text blink" style={{color: '#ffff00'}}>
                    mewnion.io/{username}
                  </p>
                </div>
              )}

              <Button
                data-cta="manual"
                size="lg"
                type="submit"
                className="w-full retro-button"
                disabled={loading || !available}
              >
                <i className="ri-check-line mr-2"></i>
                {loading ? 'PROCESSING...' : '[ENTER] 완료'}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
