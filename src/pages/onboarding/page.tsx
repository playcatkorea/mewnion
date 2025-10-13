import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { navigateTo } from '../../router/navigator';
import { useAuth } from '../../context/AuthContext';
import { showFeedback } from '../../utils/navigation';
import { supabase } from '../../lib/supabase';

type OnboardingStep = 'username' | 'profile' | 'cat' | 'preferences' | 'complete';

interface ProfileData {
  display_name: string;
  bio: string;
  gender: string;
  birth_date: string;
}

interface CatData {
  name: string;
  breed: string;
  gender: string;
  birth_date: string;
  bio: string;
  photo_url: string;
}

interface PreferencesData {
  email_notifications: boolean;
  push_notifications: boolean;
  marketing_emails: boolean;
  interests: string[];
  theme: string;
}

export default function OnboardingPage() {
  const { user, setUsername, checkUsernameAvailability } = useAuth();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('username');
  const [loading, setLoading] = useState(false);

  // 닉네임 설정 상태
  const [username, setUsernameInput] = useState('');
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  // 프로필 정보 상태
  const [profileData, setProfileData] = useState<ProfileData>({
    display_name: '', // username으로 자동 설정됨
    bio: '',
    gender: '',
    birth_date: '',
  });

  // 고양이 정보 상태
  const [catData, setCatData] = useState<CatData>({
    name: '',
    breed: '',
    gender: '',
    birth_date: '',
    bio: '',
    photo_url: '',
  });

  // 선호도 설정 상태
  const [preferencesData, setPreferencesData] = useState<PreferencesData>({
    email_notifications: true,
    push_notifications: true,
    marketing_emails: false,
    interests: [],
    theme: 'retro',
  });

  // 페이지 로드 시 현재 사용자 프로필 확인
  useEffect(() => {
    checkCurrentProfile();
  }, [user]);

  const checkCurrentProfile = async () => {
    if (!user) return;

    const { data: profile } = await supabase
      .from('profiles')
      .select('username, onboarding_completed')
      .eq('id', user.id)
      .single();

    if (profile?.username) {
      if (profile.onboarding_completed) {
        // 온보딩 이미 완료됨
        navigateTo('/');
        return;
      }
      // 닉네임은 있지만 온보딩 미완료
      setCurrentStep('profile');
    }
  };

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

  const handleUsernameSubmit = async () => {
    if (!available) {
      showFeedback('닉네임 중복 확인을 먼저 해주세요', 'error');
      return;
    }

    setLoading(true);
    try {
      await setUsername(username);
      // 닉네임을 display_name으로도 설정
      setProfileData(prev => ({ ...prev, display_name: username }));
      setCurrentStep('profile');
      showFeedback('닉네임이 설정되었습니다!');
    } catch (error) {
      console.error('닉네임 설정 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          bio: profileData.bio,
          gender: profileData.gender || null,
          birth_date: profileData.birth_date || null,
        })
        .eq('id', user?.id);

      if (error) throw error;

      setCurrentStep('cat');
      showFeedback('프로필이 저장되었습니다!');
    } catch (error) {
      console.error('프로필 저장 실패:', error);
      showFeedback('프로필 저장에 실패했습니다', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCatSubmit = async () => {
    // 고양이 정보는 선택사항
    if (catData.name) {
      setLoading(true);
      try {
        const { error } = await supabase
          .from('cats')
          .insert({
            owner_id: user?.id,
            name: catData.name,
            breed: catData.breed || null,
            gender: catData.gender || 'unknown',
            birth_date: catData.birth_date || null,
            bio: catData.bio || null,
            photo_url: catData.photo_url || null,
          });

        if (error) throw error;
        showFeedback('고양이 정보가 저장되었습니다!');
      } catch (error) {
        console.error('고양이 정보 저장 실패:', error);
        showFeedback('고양이 정보 저장에 실패했습니다', 'error');
      } finally {
        setLoading(false);
      }
    }

    setCurrentStep('preferences');
  };

  const handleSkipCat = () => {
    setCurrentStep('preferences');
  };

  const handlePreferencesSubmit = async () => {
    setLoading(true);
    try {
      // 선호도 저장
      const { error: prefError } = await supabase
        .from('user_preferences')
        .insert({
          user_id: user?.id,
          email_notifications: preferencesData.email_notifications,
          push_notifications: preferencesData.push_notifications,
          marketing_emails: preferencesData.marketing_emails,
          interests: preferencesData.interests,
          theme: preferencesData.theme,
        });

      if (prefError) throw prefError;

      // 온보딩 완료 표시
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ onboarding_completed: true })
        .eq('id', user?.id);

      if (profileError) throw profileError;

      setCurrentStep('complete');
    } catch (error) {
      console.error('선호도 저장 실패:', error);
      showFeedback('설정 저장에 실패했습니다', 'error');
    } finally {
      setLoading(false);
    }
  };

  const progressPercentage = {
    username: 0,
    profile: 25,
    cat: 50,
    preferences: 75,
    complete: 100,
  }[currentStep];

  return (
    <div className="min-h-screen w-full crt-effect" style={{ background: '#000033' }}>
      <Header />
      <main className="pt-16 lg:pt-20 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-4 border-2" style={{ borderColor: '#00ff00', background: '#000033' }}>
              <div
                className="h-full transition-all duration-500"
                style={{
                  width: `${progressPercentage}%`,
                  background: '#00ff00',
                  boxShadow: '0 0 10px #00ff00',
                }}
              />
            </div>
            <p className="mt-2 text-center terminal-text" style={{ color: '#00ffff' }}>
              LOADING... {progressPercentage}%
            </p>
          </div>

          <div
            className="rounded-none shadow-2xl overflow-hidden"
            style={{ background: '#001133', border: '4px solid #00ff00' }}
          >
            {/* Step 1: Username */}
            {currentStep === 'username' && (
              <div className="p-10" style={{ background: '#0000aa' }}>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 20px #00ff00)' }}>
                    🐱
                  </div>
                  <h1 className="text-3xl font-bold mb-2 terminal-text blink">STEP 1: USERNAME</h1>
                  <p className="terminal-text" style={{ color: '#00ffff' }}>
                    당신만의 미니홈피 주소를 만들어보세요
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="border-2 p-6" style={{ borderColor: '#ffff00', background: '#000033' }}>
                    <h3 className="text-lg font-bold mb-3 terminal-text" style={{ color: '#ffff00' }}>
                      {'>>>'} 닉네임 규칙
                    </h3>
                    <ul className="space-y-2 text-sm" style={{ color: '#00ffff' }}>
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
                        style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
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
                      <p
                        className={`mt-2 text-sm terminal-text ${
                          available ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {available ? '✓ 사용 가능한 닉네임입니다' : '✗ 이미 사용 중인 닉네임입니다'}
                      </p>
                    )}
                  </div>

                  {username && (
                    <div className="border-2 p-4" style={{ borderColor: '#00ff00', background: '#000033' }}>
                      <p className="text-sm terminal-text mb-2" style={{ color: '#00ffff' }}>
                        미니홈피 주소:
                      </p>
                      <p className="text-lg font-bold terminal-text blink" style={{ color: '#ffff00' }}>
                        mewnion.io/{username}
                      </p>
                    </div>
                  )}

                  <Button
                    size="lg"
                    onClick={handleUsernameSubmit}
                    className="w-full retro-button"
                    disabled={loading || !available}
                  >
                    <i className="ri-arrow-right-line mr-2"></i>
                    {loading ? 'PROCESSING...' : '[ENTER] 다음 단계'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Profile */}
            {currentStep === 'profile' && (
              <div className="p-10" style={{ background: '#0000aa' }}>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 20px #00ff00)' }}>
                    👤
                  </div>
                  <h1 className="text-3xl font-bold mb-2 terminal-text blink">STEP 2: PROFILE</h1>
                  <p className="terminal-text" style={{ color: '#00ffff' }}>
                    당신에 대해 알려주세요
                  </p>
                </div>

                <div className="space-y-5">
                  {/* 닉네임 표시 (읽기 전용) */}
                  <div className="border-2 p-4" style={{ borderColor: '#00ff00', background: '#000033' }}>
                    <label className="block text-sm font-bold mb-2 terminal-text" style={{ color: '#00ffff' }}>
                      닉네임 (캣룸에서 표시될 이름)
                    </label>
                    <p className="text-lg font-bold terminal-text blink" style={{ color: '#ffff00' }}>
                      {profileData.display_name || username}
                    </p>
                    <p className="text-xs terminal-text mt-1" style={{ color: '#00ffff' }}>
                      * 닉네임은 변경할 수 없습니다
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">성별</label>
                    <select
                      value={profileData.gender}
                      onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                    >
                      <option value="">선택 안함</option>
                      <option value="male">남성</option>
                      <option value="female">여성</option>
                      <option value="other">기타</option>
                      <option value="prefer_not_to_say">비공개</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">생년월일</label>
                    <input
                      type="date"
                      value={profileData.birth_date}
                      onChange={(e) => setProfileData({ ...profileData, birth_date: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">자기소개</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text resize-none"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                      placeholder="나를 소개해주세요..."
                    />
                  </div>

                  <Button
                    size="lg"
                    onClick={handleProfileSubmit}
                    className="w-full retro-button"
                    disabled={loading}
                  >
                    <i className="ri-arrow-right-line mr-2"></i>
                    {loading ? 'SAVING...' : '[ENTER] 다음 단계'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Cat Info */}
            {currentStep === 'cat' && (
              <div className="p-10" style={{ background: '#0000aa' }}>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 20px #00ff00)' }}>
                    🐈
                  </div>
                  <h1 className="text-3xl font-bold mb-2 terminal-text blink">STEP 3: YOUR CAT</h1>
                  <p className="terminal-text" style={{ color: '#00ffff' }}>
                    소중한 고양이를 소개해주세요 (선택사항)
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">고양이 이름</label>
                    <input
                      type="text"
                      value={catData.name}
                      onChange={(e) => setCatData({ ...catData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                      placeholder="나비"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">품종</label>
                    <input
                      type="text"
                      value={catData.breed}
                      onChange={(e) => setCatData({ ...catData, breed: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                      placeholder="코리안 숏헤어"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">성별</label>
                    <select
                      value={catData.gender}
                      onChange={(e) => setCatData({ ...catData, gender: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                    >
                      <option value="">선택</option>
                      <option value="male">수컷</option>
                      <option value="female">암컷</option>
                      <option value="unknown">모름</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">생년월일</label>
                    <input
                      type="date"
                      value={catData.birth_date}
                      onChange={(e) => setCatData({ ...catData, birth_date: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 terminal-text">소개</label>
                    <textarea
                      value={catData.bio}
                      onChange={(e) => setCatData({ ...catData, bio: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border-2 rounded-none focus:outline-none terminal-text resize-none"
                      style={{ background: '#000033', borderColor: '#00ff00', color: '#00ff00' }}
                      placeholder="우리 고양이는..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="lg"
                      onClick={handleSkipCat}
                      className="flex-1 border-2"
                      style={{ borderColor: '#ffff00', background: 'transparent', color: '#ffff00' }}
                    >
                      건너뛰기
                    </Button>
                    <Button
                      size="lg"
                      onClick={handleCatSubmit}
                      className="flex-1 retro-button"
                      disabled={loading}
                    >
                      <i className="ri-arrow-right-line mr-2"></i>
                      {loading ? 'SAVING...' : '다음 단계'}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 'preferences' && (
              <div className="p-10" style={{ background: '#0000aa' }}>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4" style={{ filter: 'drop-shadow(0 0 20px #00ff00)' }}>
                    ⚙️
                  </div>
                  <h1 className="text-3xl font-bold mb-2 terminal-text blink">STEP 4: PREFERENCES</h1>
                  <p className="terminal-text" style={{ color: '#00ffff' }}>
                    서비스 설정을 선택해주세요
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="border-2 p-6 space-y-4" style={{ borderColor: '#00ff00', background: '#000033' }}>
                    <h3 className="text-lg font-bold terminal-text" style={{ color: '#ffff00' }}>
                      알림 설정
                    </h3>
                    <label className="flex items-center text-sm" style={{ color: '#00ffff' }}>
                      <input
                        type="checkbox"
                        checked={preferencesData.email_notifications}
                        onChange={(e) =>
                          setPreferencesData({
                            ...preferencesData,
                            email_notifications: e.target.checked,
                          })
                        }
                        className="mr-3"
                        style={{ accentColor: '#00ff00' }}
                      />
                      <span className="terminal-text">이메일 알림 받기</span>
                    </label>
                    <label className="flex items-center text-sm" style={{ color: '#00ffff' }}>
                      <input
                        type="checkbox"
                        checked={preferencesData.push_notifications}
                        onChange={(e) =>
                          setPreferencesData({
                            ...preferencesData,
                            push_notifications: e.target.checked,
                          })
                        }
                        className="mr-3"
                        style={{ accentColor: '#00ff00' }}
                      />
                      <span className="terminal-text">푸시 알림 받기</span>
                    </label>
                    <label className="flex items-center text-sm" style={{ color: '#00ffff' }}>
                      <input
                        type="checkbox"
                        checked={preferencesData.marketing_emails}
                        onChange={(e) =>
                          setPreferencesData({
                            ...preferencesData,
                            marketing_emails: e.target.checked,
                          })
                        }
                        className="mr-3"
                        style={{ accentColor: '#00ff00' }}
                      />
                      <span className="terminal-text">마케팅 이메일 수신 (선택)</span>
                    </label>
                  </div>

                  <div className="border-2 p-6" style={{ borderColor: '#00ff00', background: '#000033' }}>
                    <h3 className="text-lg font-bold mb-4 terminal-text" style={{ color: '#ffff00' }}>
                      테마 선택
                    </h3>
                    <div className="flex gap-3">
                      {[
                        { value: 'retro', label: '레트로', emoji: '🕹️' },
                        { value: 'modern', label: '모던', emoji: '✨' },
                        { value: 'dark', label: '다크', emoji: '🌙' },
                      ].map((theme) => (
                        <button
                          key={theme.value}
                          onClick={() => setPreferencesData({ ...preferencesData, theme: theme.value })}
                          className={`flex-1 p-4 border-2 rounded-none transition-all ${
                            preferencesData.theme === theme.value ? 'scale-105' : ''
                          }`}
                          style={{
                            borderColor:
                              preferencesData.theme === theme.value ? '#ffff00' : '#00ff00',
                            background: preferencesData.theme === theme.value ? '#001133' : '#000033',
                          }}
                        >
                          <div className="text-3xl mb-2">{theme.emoji}</div>
                          <div className="terminal-text text-sm" style={{ color: '#00ffff' }}>
                            {theme.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    onClick={handlePreferencesSubmit}
                    className="w-full retro-button"
                    disabled={loading}
                  >
                    <i className="ri-check-line mr-2"></i>
                    {loading ? 'SAVING...' : '[ENTER] 완료하기'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Complete */}
            {currentStep === 'complete' && (
              <div className="p-10 text-center" style={{ background: '#0000aa' }}>
                <div className="text-8xl mb-6 animate-bounce" style={{ filter: 'drop-shadow(0 0 30px #00ff00)' }}>
                  🎉
                </div>
                <h1 className="text-4xl font-bold mb-4 terminal-text blink" style={{ color: '#ffff00' }}>
                  WELCOME TO MEWNION!
                </h1>
                <p className="text-xl mb-8 terminal-text" style={{ color: '#00ffff' }}>
                  온보딩이 완료되었습니다!
                </p>
                <div className="border-2 p-6 mb-8" style={{ borderColor: '#00ff00', background: '#000033' }}>
                  <p className="terminal-text mb-4" style={{ color: '#00ffff' }}>
                    이제 뮤니언의 모든 서비스를 이용하실 수 있습니다:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: '#00ff00' }}>
                    <li className="terminal-text">✓ 미니홈피 꾸미기</li>
                    <li className="terminal-text">✓ 뮤틀러 AI 채팅</li>
                    <li className="terminal-text">✓ 커뮤니티 활동</li>
                    <li className="terminal-text">✓ 크리에이터 마켓</li>
                  </ul>
                </div>
                <Button
                  size="lg"
                  onClick={() => navigateTo('/')}
                  className="retro-button"
                >
                  <i className="ri-home-line mr-2"></i>
                  홈으로 이동
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
