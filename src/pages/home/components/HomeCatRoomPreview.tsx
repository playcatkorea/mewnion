import { useState, useEffect } from 'react';
import { navigateTo } from '../../../router/navigator';
import { useAuth } from '../../../context/AuthContext';
import CatRoomScene from '../../catroom/components/CatRoomScene';

export default function HomeCatRoomPreview() {
  const { user } = useAuth();

  const [roomData, setRoomData] = useState({
    playerPosition: { x: 200, y: 300 },
    cats: [
      {
        id: 1,
        x: 350,
        y: 280,
        type: 'black' as const,
        mood: 'happy' as const,
        activity: 'sitting' as const,
        health: 95,
        happiness: 88,
        hunger: 25,
        energy: 75
      },
      {
        id: 2,
        x: 150,
        y: 200,
        type: 'orange' as const,
        mood: 'playful' as const,
        activity: 'walking' as const,
        health: 90,
        happiness: 92,
        hunger: 40,
        energy: 85
      },
      {
        id: 3,
        x: 500,
        y: 250,
        type: 'white' as const,
        mood: 'sleepy' as const,
        activity: 'sleeping' as const,
        health: 88,
        happiness: 70,
        hunger: 60,
        energy: 30
      }
    ],
    furniture: [
      { id: 1, type: 'cat_tower', x: 100, y: 150 },
      { id: 2, type: 'sofa', x: 300, y: 320 },
      { id: 3, type: 'bookshelf', x: 50, y: 200 },
      { id: 4, type: 'plant', x: 450, y: 300 },
      { id: 5, type: 'lamp', x: 550, y: 180 }
    ]
  });

  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [onlineUsers] = useState([
    {
      id: '1',
      username: '냥집사123',
      color: '#FF6B6B',
      x: 100,
      y: 200
    },
    {
      id: '2',
      username: '길냥이사랑',
      color: '#4ECDC4',
      x: 400,
      y: 150
    }
  ]);

  // 고양이 상태 자동 변화
  useEffect(() => {
    const interval = setInterval(() => {
      setRoomData(prev => ({
        ...prev,
        cats: prev.cats.map(cat => {
          let updatedCat = { ...cat };

          // 랜덤하게 위치 변경 (천천히)
          if (Math.random() > 0.7) {
            updatedCat.x = Math.max(20, Math.min(580, cat.x + (Math.random() - 0.5) * 20));
            updatedCat.y = Math.max(50, Math.min(350, cat.y + (Math.random() - 0.5) * 15));
          }

          // 활동 상태 변경
          if (Math.random() > 0.8) {
            const activities = ['sitting', 'walking', 'sleeping', 'playing'] as const;
            updatedCat.activity = activities[Math.floor(Math.random() * activities.length)];
          }

          return updatedCat;
        })
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const averageHappiness = Math.round(
    roomData.cats.reduce((sum, cat) => sum + cat.happiness, 0) / roomData.cats.length
  );

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a]">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 mb-4">
            <i className="ri-home-heart-fill text-purple-400 mr-2"></i>
            <span className="text-purple-200 text-sm font-medium">나만의 캣룸</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              내 고양이들이 기다리고 있어요! 🐱
            </span>
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            실시간으로 움직이는 고양이들과 함께하는 나만의 공간
          </p>
        </div>

        {/* 캣룸 프리뷰 */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl">
            {/* 캣룸 헤더 */}
            <div className="bg-gradient-to-r from-purple-900/60 to-pink-900/60 backdrop-blur-sm px-6 py-4 border-b border-purple-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <i className="ri-user-smile-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{user?.username || '나'}의 캣룸</h3>
                    <p className="text-purple-200 text-sm">mewnion.io/{user?.username || 'myroom'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:flex items-center bg-purple-900/50 px-4 py-2 rounded-lg">
                    <i className="ri-emotion-happy-line text-yellow-400 mr-2"></i>
                    <span className="text-white font-medium">행복도 {averageHappiness}%</span>
                  </div>
                  <button
                    onClick={() => navigateTo('/catroom')}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    <i className="ri-arrow-right-line mr-2"></i>
                    전체화면으로 보기
                  </button>
                </div>
              </div>
            </div>

            {/* 캣룸 씬 */}
            <div className="relative bg-gradient-to-br from-indigo-950/50 to-purple-950/50 p-4 sm:p-6">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black/20 rounded-2xl overflow-hidden border border-purple-500/20">
                <CatRoomScene
                  roomData={roomData}
                  setRoomData={setRoomData}
                  selectedCat={selectedCat}
                  setSelectedCat={setSelectedCat}
                  isDecorating={false}
                  onlineUsers={onlineUsers}
                  onRemoveFurniture={() => {}}
                />
              </div>

              {/* 미니 통계 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <i className="ri-user-heart-line text-purple-400"></i>
                    <span className="text-white font-bold text-lg">{roomData.cats.length}</span>
                  </div>
                  <p className="text-purple-200 text-xs">고양이</p>
                </div>
                <div className="bg-pink-900/30 backdrop-blur-sm rounded-lg p-3 border border-pink-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <i className="ri-shopping-bag-3-line text-pink-400"></i>
                    <span className="text-white font-bold text-lg">{roomData.furniture.length}</span>
                  </div>
                  <p className="text-pink-200 text-xs">가구</p>
                </div>
                <div className="bg-blue-900/30 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <i className="ri-team-line text-blue-400"></i>
                    <span className="text-white font-bold text-lg">{onlineUsers.length}</span>
                  </div>
                  <p className="text-blue-200 text-xs">방문자</p>
                </div>
                <div className="bg-yellow-900/30 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <i className="ri-emotion-happy-line text-yellow-400"></i>
                    <span className="text-white font-bold text-lg">{averageHappiness}%</span>
                  </div>
                  <p className="text-yellow-200 text-xs">평균 행복도</p>
                </div>
              </div>
            </div>

            {/* 캣룸 푸터 */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm px-6 py-4 border-t border-purple-500/30">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-sm text-purple-200">
                  <i className="ri-information-line"></i>
                  <span>고양이들이 실시간으로 움직이고 있어요!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => navigateTo('/catroom')}
                    className="px-4 py-2 bg-purple-800/50 hover:bg-purple-700/50 text-purple-200 hover:text-white rounded-lg transition-all text-sm"
                  >
                    <i className="ri-hammer-line mr-2"></i>
                    꾸미기
                  </button>
                  <button
                    onClick={() => navigateTo('/catroom')}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all text-sm font-medium"
                  >
                    <i className="ri-play-circle-line mr-2"></i>
                    고양이와 놀기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mb-4">
              <i className="ri-gift-line text-purple-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">가구 꾸미기</h3>
            <p className="text-purple-200 text-sm">
              다양한 가구로 캣룸을 꾸미고 고양이들의 행복도를 높여보세요
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-pink-900/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20">
            <div className="w-12 h-12 bg-pink-600/30 rounded-full flex items-center justify-center mb-4">
              <i className="ri-heart-line text-pink-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">고양이 케어</h3>
            <p className="text-pink-200 text-sm">
              밥주기, 놀아주기, 쓰다듬기로 고양이들과 교감하세요
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
            <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mb-4">
              <i className="ri-team-line text-blue-400 text-2xl"></i>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">방문자 교류</h3>
            <p className="text-blue-200 text-sm">
              친구들이 방문하면 방명록을 남기고 채팅할 수 있어요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
