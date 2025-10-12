import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';
import { useAuth } from '../../context/AuthContext';
import { showFeedback } from '../../utils/navigation';

export default function UsernameSetupPage() {
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
      navigateTo('/');
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
