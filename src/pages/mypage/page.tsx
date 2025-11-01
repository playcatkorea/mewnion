import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';
import { navigateTo } from '../../router/navigator';
import { showFeedback } from '../../utils/navigation';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import AvatarUpload from '../../components/feature/AvatarUpload';
import FriendsSection from '../../components/feature/FriendsSection';
import ChatSection from '../../components/feature/ChatSection';
import { usePresence } from '../../hooks/usePresence';

interface UserProfile {
  username: string;
  email: string;
  display_name: string;
  bio: string;
  avatar_url: string;
  gender: string;
  birth_date: string;
  created_at: string;
}

interface UserSettings {
  coins: number;
  total_activity: number;
  mining_rate: number;
}

interface Cat {
  id: string;
  name: string;
  breed: string;
  gender: string;
  birth_date: string;
  photo_url: string;
  is_primary: boolean;
}

interface UserPreferences {
  email_notifications: boolean;
  push_notifications: boolean;
  marketing_emails: boolean;
  theme: string;
}

export default function MyPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'cats' | 'friends' | 'messages' | 'settings'>('profile');
  usePresence('/mypage'); // Track user presence on mypage

  // 데이터 상태
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [cats, setCats] = useState<Cat[]>([]);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  // 편집 모드
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<UserProfile>>({});

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo('/login');
      return;
    }
    loadUserData();
  }, [isAuthenticated, user]);

  const loadUserData = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // 프로필 정보
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileData) {
        setProfile(profileData);
        setEditData(profileData);
      }

      // 게임 설정 (코인, 활동)
      const { data: settingsData } = await supabase
        .from('user_settings')
        .select('coins, total_activity, mining_rate')
        .eq('user_id', user.id)
        .single();

      if (settingsData) {
        setSettings(settingsData);
      }

      // 고양이 정보
      const { data: catsData } = await supabase
        .from('cats')
        .select('*')
        .eq('owner_id', user.id)
        .order('is_primary', { ascending: false });

      if (catsData) {
        setCats(catsData);
      }

      // 사용자 선호도
      const { data: preferencesData } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (preferencesData) {
        setPreferences(preferencesData);
      }
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: editData.display_name,
          bio: editData.bio,
          gender: editData.gender,
          birth_date: editData.birth_date,
        })
        .eq('id', user.id);

      if (error) throw error;

      showFeedback('프로필이 저장되었습니다!');
      setIsEditing(false);
      loadUserData();
    } catch (error) {
      console.error('프로필 저장 실패:', error);
      showFeedback('프로필 저장에 실패했습니다', 'error');
    }
  };

  const handleLogout = async () => {
    await logout();
    navigateTo('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center space-bg">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🐱</div>
          <p className="text-purple-200">데이터 로딩 중...</p>
        </div>
      </div>
    );
  }

  const accountAge = profile?.created_at
    ? Math.floor((Date.now() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="min-h-screen w-full space-bg">
      <Header />
      <main className="pt-16 lg:pt-20 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                마이 페이지
              </span>
            </h1>
            <p className="text-purple-200">
              뮤니언 플랫폼에서의 나의 활동과 정보를 관리하세요
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 사이드바 */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-6 border border-purple-500/30 sticky top-24">
                {/* 프로필 요약 */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    {profile?.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <i className="ri-user-line text-white text-4xl"></i>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {profile?.display_name || profile?.username}
                  </h2>
                  <p className="text-purple-300 text-sm">@{profile?.username}</p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-purple-900/30 rounded-full border border-purple-500/30">
                    <i className="ri-vip-crown-line text-yellow-400 mr-2 text-sm"></i>
                    <span className="text-purple-200 text-xs">
                      {accountAge}일차 멤버
                    </span>
                  </div>
                </div>

                {/* 탭 메뉴 */}
                <nav className="space-y-2">
                  {[
                    { id: 'profile', icon: 'ri-user-line', label: '프로필' },
                    { id: 'stats', icon: 'ri-bar-chart-line', label: '통계 & 코인' },
                    { id: 'cats', icon: 'ri-heart-line', label: '내 고양이' },
                    { id: 'friends', icon: 'ri-team-line', label: '친구' },
                    { id: 'messages', icon: 'ri-message-3-line', label: '메시지' },
                    { id: 'settings', icon: 'ri-settings-3-line', label: '설정' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'text-purple-200 hover:bg-purple-900/30'
                      }`}
                    >
                      <i className={`${tab.icon} mr-3`}></i>
                      {tab.label}
                    </button>
                  ))}
                </nav>

                {/* 로그아웃 */}
                <button
                  onClick={handleLogout}
                  className="w-full mt-6 px-4 py-3 bg-red-900/30 hover:bg-red-900/50 text-red-300 hover:text-red-200 rounded-lg transition-all border border-red-500/30"
                >
                  <i className="ri-logout-circle-line mr-3"></i>
                  로그아웃
                </button>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 프로필 탭 */}
              {activeTab === 'profile' && (
                <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">프로필 정보</h2>
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        className="space-button"
                      >
                        <i className="ri-edit-line mr-2"></i>
                        수정
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            setIsEditing(false);
                            setEditData(profile || {});
                          }}
                          className="bg-gray-600 hover:bg-gray-700"
                        >
                          취소
                        </Button>
                        <Button
                          onClick={handleSaveProfile}
                          className="space-button"
                        >
                          <i className="ri-save-line mr-2"></i>
                          저장
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* 아바타 업로드 */}
                    {isEditing && (
                      <div className="pb-6 border-b border-purple-500/30">
                        <label className="block text-sm font-medium text-purple-200 mb-4">
                          프로필 이미지
                        </label>
                        <AvatarUpload
                          currentAvatarUrl={profile?.avatar_url}
                          onUploadComplete={(url) => {
                            setProfile({ ...profile!, avatar_url: url });
                            showFeedback('프로필 이미지가 업데이트되었습니다!');
                          }}
                        />
                      </div>
                    )}

                    {/* 이메일 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        value={profile?.email || ''}
                        disabled
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-purple-300 cursor-not-allowed"
                      />
                      <p className="mt-1 text-xs text-purple-300">이메일은 변경할 수 없습니다</p>
                    </div>

                    {/* 사용자명 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        사용자명 (닉네임)
                      </label>
                      <input
                        type="text"
                        value={profile?.username || ''}
                        disabled
                        className="w-full px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-purple-300 cursor-not-allowed"
                      />
                      <p className="mt-1 text-xs text-purple-300">사용자명은 변경할 수 없습니다</p>
                    </div>

                    {/* 표시 이름 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        표시 이름
                      </label>
                      <input
                        type="text"
                        value={isEditing ? editData.display_name : profile?.display_name || ''}
                        onChange={(e) => setEditData({ ...editData, display_name: e.target.value })}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing
                            ? 'bg-purple-900/30 border-purple-500/50 text-white'
                            : 'bg-purple-900/20 border-purple-500/30 text-purple-300'
                        }`}
                        placeholder="홍길동"
                      />
                    </div>

                    {/* 성별 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        성별
                      </label>
                      <select
                        value={isEditing ? editData.gender : profile?.gender || ''}
                        onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing
                            ? 'bg-purple-900/30 border-purple-500/50 text-white'
                            : 'bg-purple-900/20 border-purple-500/30 text-purple-300'
                        }`}
                      >
                        <option value="">선택 안함</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                        <option value="other">기타</option>
                        <option value="prefer_not_to_say">비공개</option>
                      </select>
                    </div>

                    {/* 생년월일 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        생년월일
                      </label>
                      <input
                        type="date"
                        value={isEditing ? editData.birth_date : profile?.birth_date || ''}
                        onChange={(e) => setEditData({ ...editData, birth_date: e.target.value })}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          isEditing
                            ? 'bg-purple-900/30 border-purple-500/50 text-white'
                            : 'bg-purple-900/20 border-purple-500/30 text-purple-300'
                        }`}
                      />
                    </div>

                    {/* 자기소개 */}
                    <div>
                      <label className="block text-sm font-medium text-purple-200 mb-2">
                        자기소개
                      </label>
                      <textarea
                        value={isEditing ? editData.bio : profile?.bio || ''}
                        onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                        disabled={!isEditing}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border resize-none ${
                          isEditing
                            ? 'bg-purple-900/30 border-purple-500/50 text-white'
                            : 'bg-purple-900/20 border-purple-500/30 text-purple-300'
                        }`}
                        placeholder="자신을 소개해주세요..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 통계 & 코인 탭 */}
              {activeTab === 'stats' && (
                <div className="space-y-6">
                  {/* 코인 통계 */}
                  <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <i className="ri-coin-line text-yellow-400 mr-3"></i>
                      코인 & 활동
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-900/10 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <i className="ri-coin-line text-yellow-400 text-3xl"></i>
                          <span className="text-yellow-200 text-sm">COIN</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{settings?.coins || 0}</p>
                        <p className="text-yellow-300 text-sm mt-1">보유 코인</p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <i className="ri-pulse-line text-blue-400 text-3xl"></i>
                          <span className="text-blue-200 text-sm">ACTIVITY</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{settings?.total_activity || 0}</p>
                        <p className="text-blue-300 text-sm mt-1">총 활동</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <i className="ri-speed-line text-green-400 text-3xl"></i>
                          <span className="text-green-200 text-sm">RATE</span>
                        </div>
                        <p className="text-3xl font-bold text-white">{settings?.mining_rate || 1.0}x</p>
                        <p className="text-green-300 text-sm mt-1">채굴 속도</p>
                      </div>
                    </div>
                  </div>

                  {/* 플랫폼 활동 */}
                  <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-6">플랫폼 활동</h2>
                    <div className="space-y-4">
                      {[
                        { icon: 'ri-home-heart-line', label: '캣룸 방문', value: '127회', color: 'purple' },
                        { icon: 'ri-shopping-bag-3-line', label: '퍼니버스 구매', value: '15개', color: 'pink' },
                        { icon: 'ri-chat-3-line', label: '뮤틀러 채팅', value: '89회', color: 'blue' },
                        { icon: 'ri-heart-line', label: '후원 활동', value: '3회', color: 'red' },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-4 rounded-lg bg-${item.color}-900/20 border border-${item.color}-500/30`}
                        >
                          <div className="flex items-center">
                            <i className={`${item.icon} text-${item.color}-400 text-2xl mr-4`}></i>
                            <span className="text-white font-medium">{item.label}</span>
                          </div>
                          <span className={`text-${item.color}-300 font-bold`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 내 고양이 탭 */}
              {activeTab === 'cats' && (
                <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">내 고양이</h2>
                    <Button
                      onClick={() => navigateTo('/onboarding')}
                      className="space-button"
                    >
                      <i className="ri-add-line mr-2"></i>
                      고양이 추가
                    </Button>
                  </div>

                  {cats.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">🐱</div>
                      <p className="text-purple-200 mb-4">아직 등록된 고양이가 없습니다</p>
                      <Button
                        onClick={() => navigateTo('/onboarding')}
                        className="space-button"
                      >
                        첫 고양이 등록하기
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cats.map((cat) => (
                        <div
                          key={cat.id}
                          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 relative"
                        >
                          {cat.is_primary && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full">
                              <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
                              <span className="text-yellow-300 text-xs font-medium">대표</span>
                            </div>
                          )}
                          <div className="flex items-start gap-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                              {cat.photo_url ? (
                                <img
                                  src={cat.photo_url}
                                  alt={cat.name}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              ) : (
                                <i className="ri-cat-line text-white text-3xl"></i>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                              <p className="text-purple-300 text-sm mb-3">{cat.breed || '품종 미상'}</p>
                              <div className="space-y-1 text-sm">
                                <div className="flex items-center text-purple-200">
                                  <i className="ri-calendar-line mr-2 text-purple-400"></i>
                                  {cat.birth_date || '생일 미등록'}
                                </div>
                                <div className="flex items-center text-purple-200">
                                  <i className={`${cat.gender === 'male' ? 'ri-men-line' : cat.gender === 'female' ? 'ri-women-line' : 'ri-question-line'} mr-2 text-purple-400`}></i>
                                  {cat.gender === 'male' ? '수컷' : cat.gender === 'female' ? '암컷' : '성별 미상'}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 친구 탭 */}
              {activeTab === 'friends' && <FriendsSection />}

              {/* 메시지 탭 */}
              {activeTab === 'messages' && <ChatSection />}

              {/* 설정 탭 */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  {/* 알림 설정 */}
                  <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-6">알림 설정</h2>
                    <div className="space-y-4">
                      {[
                        { key: 'email_notifications', label: '이메일 알림', desc: '중요한 소식을 이메일로 받습니다' },
                        { key: 'push_notifications', label: '푸시 알림', desc: '실시간 알림을 받습니다' },
                        { key: 'marketing_emails', label: '마케팅 이메일', desc: '프로모션 및 이벤트 소식을 받습니다' },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className="flex items-center justify-between p-4 rounded-lg bg-purple-900/20 border border-purple-500/20"
                        >
                          <div>
                            <p className="text-white font-medium">{item.label}</p>
                            <p className="text-purple-300 text-sm">{item.desc}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences?.[item.key as keyof UserPreferences] as boolean || false}
                              onChange={async (e) => {
                                if (!user) return;
                                const { error } = await supabase
                                  .from('user_preferences')
                                  .update({ [item.key]: e.target.checked })
                                  .eq('user_id', user.id);
                                if (!error) {
                                  loadUserData();
                                  showFeedback('설정이 저장되었습니다');
                                }
                              }}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 계정 연결 */}
                  <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-6">소셜 계정 연결</h2>
                    <div className="space-y-3">
                      {[
                        { provider: 'google', name: 'Google', icon: 'ri-google-fill', connected: true },
                        { provider: 'apple', name: 'Apple', icon: 'ri-apple-fill', connected: false },
                        { provider: 'github', name: 'GitHub', icon: 'ri-github-fill', connected: false },
                        { provider: 'facebook', name: 'Facebook', icon: 'ri-facebook-fill', connected: false },
                      ].map((social) => (
                        <div
                          key={social.provider}
                          className="flex items-center justify-between p-4 rounded-lg bg-purple-900/20 border border-purple-500/20"
                        >
                          <div className="flex items-center">
                            <i className={`${social.icon} text-2xl mr-3 ${social.connected ? 'text-green-400' : 'text-gray-400'}`}></i>
                            <div>
                              <p className="text-white font-medium">{social.name}</p>
                              <p className="text-purple-300 text-sm">
                                {social.connected ? '연결됨' : '연결되지 않음'}
                              </p>
                            </div>
                          </div>
                          <Button
                            className={social.connected ? 'bg-red-600 hover:bg-red-700' : 'space-button'}
                            onClick={() => {
                              if (social.connected) {
                                showFeedback('소셜 계정 연결 해제는 설정 페이지에서 가능합니다', 'error');
                              } else {
                                showFeedback('소셜 로그인 연동 준비 중입니다', 'error');
                              }
                            }}
                          >
                            {social.connected ? '연결 해제' : '연결하기'}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 보안 */}
                  <div className="glass-effect rounded-2xl p-8 border border-purple-500/30">
                    <h2 className="text-2xl font-bold text-white mb-6">보안</h2>
                    <div className="space-y-3">
                      <button className="w-full text-left p-4 rounded-lg bg-purple-900/20 border border-purple-500/20 hover:bg-purple-900/30 transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="ri-lock-password-line text-purple-400 text-2xl mr-3"></i>
                            <div>
                              <p className="text-white font-medium">비밀번호 변경</p>
                              <p className="text-purple-300 text-sm">비밀번호를 재설정합니다</p>
                            </div>
                          </div>
                          <i className="ri-arrow-right-s-line text-purple-400"></i>
                        </div>
                      </button>

                      <button className="w-full text-left p-4 rounded-lg bg-purple-900/20 border border-purple-500/20 hover:bg-purple-900/30 transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <i className="ri-shield-check-line text-green-400 text-2xl mr-3"></i>
                            <div>
                              <p className="text-white font-medium">2단계 인증</p>
                              <p className="text-purple-300 text-sm">추가 보안 설정 (준비 중)</p>
                            </div>
                          </div>
                          <i className="ri-arrow-right-s-line text-purple-400"></i>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 위험 구역 */}
                  <div className="glass-effect rounded-2xl p-8 border border-red-500/30 bg-red-900/10">
                    <h2 className="text-2xl font-bold text-red-300 mb-6">위험 구역</h2>
                    <button className="w-full p-4 rounded-lg bg-red-900/30 border border-red-500/50 hover:bg-red-900/50 transition-all text-red-200">
                      <i className="ri-delete-bin-line mr-2"></i>
                      계정 삭제
                    </button>
                    <p className="text-red-300 text-sm mt-2">
                      계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
