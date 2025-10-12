
import { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { navigateTo } from '../../../router/navigator';

interface Cat {
  id: number;
  name: string;
  type: 'black' | 'orange' | 'white';
  mood: 'happy' | 'playful' | 'sleepy' | 'hungry';
  happiness: number;
}

export default function MyCatRoomSection() {
  const { isAuthenticated } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  // 샘플 고양이 데이터 (실제로는 API에서 가져와야 함)
  const myCats: Cat[] = [
    { id: 1, name: '먼지', type: 'black', mood: 'happy', happiness: 88 },
    { id: 2, name: '호랑이', type: 'orange', mood: 'playful', happiness: 92 },
    { id: 3, name: '눈송이', type: 'white', mood: 'sleepy', happiness: 70 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return '좋은 아침이에요';
    if (hour < 18) return '좋은 오후예요';
    return '좋은 저녁이에요';
  };

  const getMoodEmoji = (mood: string) => {
    const emojis: { [key: string]: string } = {
      happy: '😸',
      playful: '😺',
      sleepy: '😴',
      hungry: '🍽️'
    };
    return emojis[mood] || '🐱';
  };

  const getCatEmoji = (type: string) => {
    const emojis: { [key: string]: string } = {
      black: '🐱',
      orange: '🐱',
      white: '🤍'
    };
    return emojis[type] || '🐱';
  };

  if (!isAuthenticated) {
    return null; // 로그인하지 않은 경우 표시 안 함
  }

  const avgHappiness = Math.round(
    myCats.reduce((sum, cat) => sum + cat.happiness, 0) / myCats.length
  );

  return (
    <section className="relative bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a] py-12">
      {/* 배경 별 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* 인사말 헤더 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {getGreeting()}! 🌟
          </h2>
          <p className="text-purple-300 text-lg">
            우리 고양이들이 기다리고 있어요
          </p>
        </div>

        {/* 캣룸 미리보기 카드 */}
        <div className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 왼쪽: 캣룸 정보 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="ri-home-heart-fill text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">내 캣룸</h3>
                    <p className="text-purple-300 text-sm">
                      <i className="ri-map-pin-line mr-1"></i>
                      우주 고양이별
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigateTo('/catroom')}
                  className="px-6 py-3 bg-gradient-to-r from-[#f6b73c] to-[#e5a635] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <i className="ri-arrow-right-line mr-2"></i>
                  입장하기
                </button>
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-purple-900/50 rounded-xl p-3 text-center border border-purple-500/20">
                  <div className="text-2xl font-bold text-[#f6b73c]">{myCats.length}</div>
                  <div className="text-purple-300 text-xs mt-1">고양이</div>
                </div>
                <div className="bg-purple-900/50 rounded-xl p-3 text-center border border-purple-500/20">
                  <div className="text-2xl font-bold text-yellow-400">{avgHappiness}%</div>
                  <div className="text-purple-300 text-xs mt-1">평균 행복도</div>
                </div>
                <div className="bg-purple-900/50 rounded-xl p-3 text-center border border-purple-500/20">
                  <div className="text-2xl font-bold text-green-400">Lv.15</div>
                  <div className="text-purple-300 text-xs mt-1">레벨</div>
                </div>
              </div>

              {/* 내 고양이들 */}
              <div className="space-y-2">
                <h4 className="text-white font-bold text-sm flex items-center">
                  <i className="ri-heart-3-line text-[#f6b73c] mr-2"></i>
                  내 고양이들
                </h4>
                <div className="space-y-2">
                  {myCats.map((cat) => (
                    <div
                      key={cat.id}
                      className="bg-purple-900/30 rounded-lg p-3 flex items-center justify-between hover:bg-purple-900/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{getCatEmoji(cat.type)}</div>
                        <div>
                          <div className="text-white font-medium text-sm">{cat.name}</div>
                          <div className="text-purple-300 text-xs">
                            {getMoodEmoji(cat.mood)} 행복도 {cat.happiness}%
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <button className="p-1.5 bg-green-600/50 rounded-lg hover:bg-green-600/70 transition-colors">
                          <i className="ri-restaurant-line text-white text-sm"></i>
                        </button>
                        <button className="p-1.5 bg-blue-600/50 rounded-lg hover:bg-blue-600/70 transition-colors">
                          <i className="ri-gamepad-line text-white text-sm"></i>
                        </button>
                        <button className="p-1.5 bg-pink-600/50 rounded-lg hover:bg-pink-600/70 transition-colors">
                          <i className="ri-heart-line text-white text-sm"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 오른쪽: 캣룸 미리보기 (픽셀아트 스타일 캔버스) */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-500/30">
              <div className="relative w-full aspect-[4/3] bg-[#E6E6FA] rounded-lg overflow-hidden">
                {/* 간단한 방 미리보기 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {myCats.map((cat, index) => (
                        <span
                          key={cat.id}
                          className="inline-block animate-bounce"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          {getCatEmoji(cat.type)}
                        </span>
                      ))}
                    </div>
                    <div className="text-purple-600 font-bold text-lg">
                      고양이들이 기다려요!
                    </div>
                    <div className="text-purple-500 text-sm mt-2">
                      클릭해서 놀아주세요 🎮
                    </div>
                  </div>
                </div>

                {/* 온라인 표시 */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs">온라인</span>
                </div>
              </div>

              {/* 빠른 액션 */}
              <div className="grid grid-cols-4 gap-2 mt-4 w-full">
                <button
                  onClick={() => navigateTo('/catroom')}
                  className="flex flex-col items-center justify-center p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors group"
                >
                  <i className="ri-restaurant-line text-purple-300 group-hover:text-purple-200 text-xl mb-1"></i>
                  <span className="text-purple-300 group-hover:text-purple-200 text-xs">밥주기</span>
                </button>
                <button
                  onClick={() => navigateTo('/catroom')}
                  className="flex flex-col items-center justify-center p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors group"
                >
                  <i className="ri-gamepad-line text-purple-300 group-hover:text-purple-200 text-xl mb-1"></i>
                  <span className="text-purple-300 group-hover:text-purple-200 text-xs">놀기</span>
                </button>
                <button
                  onClick={() => navigateTo('/catroom')}
                  className="flex flex-col items-center justify-center p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors group"
                >
                  <i className="ri-camera-line text-purple-300 group-hover:text-purple-200 text-xl mb-1"></i>
                  <span className="text-purple-300 group-hover:text-purple-200 text-xs">사진</span>
                </button>
                <button
                  onClick={() => navigateTo('/catroom')}
                  className="flex flex-col items-center justify-center p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors group"
                >
                  <i className="ri-settings-3-line text-purple-300 group-hover:text-purple-200 text-xl mb-1"></i>
                  <span className="text-purple-300 group-hover:text-purple-200 text-xs">설정</span>
                </button>
              </div>
            </div>
          </div>

          {/* 하단 알림 */}
          <div className="mt-6 pt-4 border-t border-purple-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-purple-300 text-sm">
                <i className="ri-time-line"></i>
                <span>마지막 방문: 방금 전</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300 text-sm">
                <i className="ri-user-line"></i>
                <span>오늘 방문자 12명</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
