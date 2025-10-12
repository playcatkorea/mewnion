
import { useState, useEffect } from 'react';
import CatRoomScene from './components/CatRoomScene';
import RoomControls from './components/RoomControls';
import CharacterStats from './components/CharacterStats';
import ChatSystem from './components/ChatSystem';
import MinimiPlayer from './components/MinimiPlayer';
import GuestBook from './components/GuestBook';
import ProfileSticker from './components/ProfileSticker';
import VisitorList from './components/VisitorList';
import { navigateTo } from '../../router/navigator';
import Button from '../../components/base/Button';
import { useAuth } from '../../context/AuthContext';

interface Cat {
  id: number;
  x: number;
  y: number;
  type: 'black' | 'orange' | 'white';
  mood: 'happy' | 'playful' | 'sleepy' | 'hungry';
  activity: 'sitting' | 'walking' | 'sleeping' | 'playing';
  health: number;
  happiness: number;
  hunger: number;
  energy: number;
}

interface OnlineUser {
  id: string;
  username: string;
  color: string;
  x: number;
  y: number;
}

export default function CatRoomPage() {
  const { isAuthenticated, user } = useAuth();

  // URL에서 username 확인 (/:username 경로)
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const usernameFromPath = pathParts.length > 0 && !['catroom'].includes(pathParts[0]) ? pathParts[0] : null;

  // 방문 중인 유저
  const visitingUsername = usernameFromPath;
  const isVisitor = visitingUsername !== null && visitingUsername !== user?.username;

  const [coins, setCoins] = useState(2450);
  const [totalActivity, setTotalActivity] = useState(0);
  const [miningRate, setMiningRate] = useState(1);

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
  const [isDecorating, setIsDecorating] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([
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
    },
    {
      id: '3',
      username: '픽셀캣',
      color: '#45B7D1',
      x: 250,
      y: 280
    }
  ]);
  // 알림 표시 함수
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // 가구 추가 시 활동량 계산 및 코인 차감
  const handleAddFurniture = (furniture: { id: number; type: string; x: number; y: number }) => {
    const furnitureActivity: { [key: string]: number } = {
      cat_tower: 15,
      cat_wheel: 30,
      sofa: 5,
      bookshelf: 3,
      plant: 2,
      lamp: 0,
      cat_bed: 8,
      scratching_post: 12,
      food_bowl: 5,
      toy_ball: 20,
      tunnel: 18
    };

    const furniturePrice: { [key: string]: number } = {
      cat_tower: 500,
      cat_wheel: 1200,
      sofa: 800,
      bookshelf: 300,
      plant: 200,
      lamp: 150,
      cat_bed: 400,
      scratching_post: 250,
      food_bowl: 100,
      toy_ball: 150,
      tunnel: 350
    };

    const price = furniturePrice[furniture.type] || 0;
    const activity = furnitureActivity[furniture.type] || 0;

    setCoins(prev => prev - price);
    setTotalActivity(prev => prev + activity);
    setMiningRate(prev => Math.round((prev + activity * 0.1) * 10) / 10);

    setRoomData(prev => ({
      ...prev,
      furniture: [...prev.furniture, furniture]
    }));

    showNotification(`${furniture.type} 추가! 채굴 속도 +${(activity * 0.1).toFixed(1)}/분`);
  };

  // 가구 제거
  const handleRemoveFurniture = (id: number) => {
    const furniture = roomData.furniture.find(f => f.id === id);
    if (!furniture) return;

    const furnitureActivity: { [key: string]: number } = {
      cat_tower: 15,
      cat_wheel: 30,
      sofa: 5,
      bookshelf: 3,
      plant: 2,
      lamp: 0,
      cat_bed: 8,
      scratching_post: 12,
      food_bowl: 5,
      toy_ball: 20,
      tunnel: 18
    };

    const activity = furnitureActivity[furniture.type] || 0;

    setTotalActivity(prev => prev - activity);
    setMiningRate(prev => Math.max(1, Math.round((prev - activity * 0.1) * 10) / 10));

    setRoomData(prev => ({
      ...prev,
      furniture: prev.furniture.filter(f => f.id !== id)
    }));

    showNotification(`${furniture.type} 제거됨`);
  };

  // 고양이 상호작용 처리
  const handleCatInteraction = (catId: number, action: string) => {
    setRoomData(prev => ({
      ...prev,
      cats: prev.cats.map(cat => {
        if (cat.id === catId) {
          let updatedCat = { ...cat };
          
          switch (action) {
            case 'feed':
              if (cat.hunger > 10) {
                updatedCat.hunger = Math.max(0, cat.hunger - 30);
                updatedCat.happiness = Math.min(100, cat.happiness + 10);
                updatedCat.health = Math.min(100, cat.health + 5);
                updatedCat.mood = 'happy';
                updatedCat.activity = 'sitting';
                showNotification(`${getCatName(catId)}에게 밥을 줬어요! 🍽️`);
              } else {
                showNotification(`${getCatName(catId)}는 배가 부른 것 같아요 😸`);
              }
              break;
              
            case 'play':
              if (cat.energy > 20) {
                updatedCat.energy = Math.max(0, cat.energy - 20);
                updatedCat.happiness = Math.min(100, cat.happiness + 15);
                updatedCat.hunger = Math.min(100, cat.hunger + 10);
                updatedCat.mood = 'playful';
                updatedCat.activity = 'playing';
                showNotification(`${getCatName(catId)}와 함께 놀았어요! 🎾`);
              } else {
                showNotification(`${getCatName(catId)}는 너무 피곤해 보여요 😴`);
              }
              break;
              
            case 'pet':
              updatedCat.happiness = Math.min(100, cat.happiness + 8);
              updatedCat.health = Math.min(100, cat.health + 3);
              updatedCat.mood = 'happy';
              showNotification(`${getCatName(catId)}를 쓰다듬었어요! ❤️`);
              break;
              
            case 'sleep':
              if (cat.energy < 80) {
                updatedCat.energy = Math.min(100, cat.energy + 25);
                updatedCat.health = Math.min(100, cat.health + 5);
                updatedCat.mood = 'sleepy';
                updatedCat.activity = 'sleeping';
                showNotification(`${getCatName(catId)}가 잠들었어요! 💤`);
              } else {
                showNotification(`${getCatName(catId)}는 아직 잠들고 싶지 않은 것 같아요 😺`);
              }
              break;
          }
          
          return updatedCat;
        }
        return cat;
      })
    }));
  };

  // 빠른 액션 처리
  const handleQuickAction = (action: string) => {
    if (selectedCat) {
      handleCatInteraction(selectedCat, action);
    } else {
      // 선택된 고양이가 없으면 모든 고양이에게 적용
      roomData.cats.forEach(cat => {
        handleCatInteraction(cat.id, action);
      });
    }
  };

  const getCatName = (catId: number) => {
    const names: { [key: number]: string } = {
      1: '먼지',
      2: '호랑이',
      3: '눈송이'
    };
    return names[catId];
  };

  // 코인 채굴 시스템
  useEffect(() => {
    const miningInterval = setInterval(() => {
      const earnedCoins = Math.round(miningRate * 10) / 10;
      setCoins(prev => Math.round((prev + earnedCoins) * 10) / 10);
    }, 60000); // 1분마다

    return () => clearInterval(miningInterval);
  }, [miningRate]);

  // 고양이 상태 자동 변화
  useEffect(() => {
    const interval = setInterval(() => {
      setRoomData(prev => ({
        ...prev,
        cats: prev.cats.map(cat => {
          let updatedCat = { ...cat };
          
          // 시간에 따른 자연스러운 상태 변화
          updatedCat.hunger = Math.min(100, cat.hunger + Math.random() * 2);
          updatedCat.energy = Math.max(0, cat.energy - Math.random() * 1);
          
          // 배고프면 기분이 나빠짐
          if (updatedCat.hunger > 80) {
            updatedCat.mood = 'hungry';
            updatedCat.happiness = Math.max(0, updatedCat.happiness - 1);
          }
          
          // 에너지가 낮으면 졸려함
          if (updatedCat.energy < 30) {
            updatedCat.mood = 'sleepy';
            updatedCat.activity = 'sitting';
          }
          
          // 행복도가 높으면 활발해짐
          if (updatedCat.happiness > 80 && updatedCat.energy > 50) {
            updatedCat.mood = 'playful';
            if (Math.random() > 0.7) {
              updatedCat.activity = 'walking';
            }
          }
          
          return updatedCat;
        })
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 온라인 유저 움직임 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => prev.map(user => ({
        ...user,
        x: Math.max(20, Math.min(580, user.x + (Math.random() - 0.5) * 30)),
        y: Math.max(50, Math.min(350, user.y + (Math.random() - 0.5) * 20))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a] flex items-center justify-center px-6">
        <div className="max-w-lg w-full bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-3xl p-10 text-center text-purple-100 space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl flex items-center justify-center shadow-2xl">
            <i className="ri-lock-2-line text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-white">캣룸은 로그인 후 이용할 수 있어요</h1>
          <p className="text-sm leading-relaxed text-purple-200">
            나만의 캣룸, 실시간 방문자 로그, 고양이 케어 퀘스트를 확인하려면 먼저 로그인해주세요.
            테스트 회원가입을 통해 즉시 체험할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              data-cta="manual"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigateTo('/login')}
            >
              로그인하기
            </Button>
            <Button
              data-cta="manual"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigateTo('/signup')}
            >
              테스트 회원가입
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a]">
      {/* 알림 */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-[#f6b73c] text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {notification}
        </div>
      )}

      {/* Header - 컴팩트 */}
      <div className="bg-black/40 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-[1600px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigateTo('/')}
                className="flex items-center text-purple-300 hover:text-white transition-colors cursor-pointer text-sm"
              >
                <i className="ri-arrow-left-line mr-1.5"></i>
                <span className="hidden sm:inline">퍼니버스로 돌아가기</span>
                <span className="sm:hidden">돌아가기</span>
              </button>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center text-yellow-400 font-bold text-xs sm:text-sm">
                <i className="ri-vip-crown-line mr-1"></i>
                Lv.15
              </div>
              <div className="hidden sm:flex items-center text-purple-300 text-xs sm:text-sm">
                <i className="ri-emotion-happy-line mr-1"></i>
                행복도 {Math.round(roomData.cats.reduce((sum, cat) => sum + cat.happiness, 0) / roomData.cats.length)}%
              </div>
              <button
                onClick={() => setIsDecorating(!isDecorating)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer text-xs sm:text-sm ${
                  isDecorating
                    ? 'bg-[#f6b73c] text-white shadow-lg'
                    : 'bg-purple-800/50 text-purple-200 hover:bg-purple-700/50'
                }`}
              >
                <i className="ri-hammer-line mr-1.5"></i>
                {isDecorating ? '완료' : '꾸미기'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-60px)] max-w-[1800px] mx-auto px-3 py-3 overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 h-full">
          {/* Left Sidebar - Character Stats & Cyworld Style */}
          <div className="xl:col-span-3 h-full overflow-y-auto space-y-3">
            {!isVisitor && <ProfileSticker />}
            {isVisitor && (
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 backdrop-blur-sm rounded-2xl p-3 border border-blue-500/30">
                <h3 className="text-white font-bold text-sm mb-2 flex items-center">
                  <i className="ri-user-line text-blue-400 mr-2"></i>
                  {visitingUsername}님의 캣룸
                </h3>
                <p className="text-blue-200 text-xs">방문자로 구경하고 있습니다</p>
                <div className="text-xs text-blue-300 mt-2 p-2 bg-blue-900/30 rounded">
                  🔗 mewnion.io/{visitingUsername}
                </div>
                <button
                  onClick={() => navigateTo(user?.username ? `/${user.username}` : '/catroom')}
                  className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition-colors"
                >
                  내 캣룸으로 돌아가기
                </button>
              </div>
            )}
            <CharacterStats
              cats={roomData.cats}
              selectedCat={selectedCat}
              onInteraction={isVisitor ? () => {} : handleCatInteraction}
            />
            <MinimiPlayer />
            {!isVisitor && (
              <div className="bg-gradient-to-br from-yellow-900/60 to-orange-900/60 backdrop-blur-sm rounded-2xl p-3 border border-yellow-500/30">
                <h3 className="text-white font-bold mb-2 text-xs flex items-center">
                  <i className="ri-copper-coin-line text-yellow-400 mr-1.5"></i>
                  코인 채굴
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-200 text-xs">보유 코인</span>
                    <span className="text-yellow-400 font-bold text-sm">{coins.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-200 text-xs">채굴 속도</span>
                    <span className="text-green-400 font-bold text-xs">{miningRate.toFixed(1)}/분</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-200 text-xs">총 활동량</span>
                    <span className="text-purple-400 font-bold text-xs">{totalActivity}</span>
                  </div>
                  <div className="w-full h-2 bg-yellow-900/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((totalActivity / 200) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-yellow-300 text-xs mt-1">
                    💡 가구를 추가하면 활동량이 증가하고 코인 채굴 속도가 빨라져요!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Main Cat Room */}
          <div className="xl:col-span-6 flex flex-col h-full">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30 flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-lg font-bold text-white flex items-center">
                  <i className="ri-home-heart-fill text-[#f6b73c] mr-2"></i>
                  내 캣룸
                </h1>
                <div className="text-purple-300 text-xs">
                  <i className="ri-map-pin-line mr-1"></i>
                  우주 고양이별
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center min-h-0">
                <CatRoomScene
                  roomData={roomData}
                  setRoomData={setRoomData}
                  selectedCat={selectedCat}
                  setSelectedCat={setSelectedCat}
                  isDecorating={isDecorating}
                  onlineUsers={onlineUsers}
                  onRemoveFurniture={handleRemoveFurniture}
                />
              </div>
            </div>

            {/* Quick Actions - 모바일에서만 표시 */}
            <div className="xl:hidden bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30 mt-2">
              <div className="grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => handleQuickAction('feed')}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-purple-800/50 rounded-lg text-purple-200 hover:bg-purple-700/50 transition-colors text-xs"
                >
                  <i className="ri-restaurant-line text-base mb-0.5"></i>
                  밥
                </button>
                <button
                  onClick={() => handleQuickAction('play')}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-purple-800/50 rounded-lg text-purple-200 hover:bg-purple-700/50 transition-colors text-xs"
                >
                  <i className="ri-gamepad-line text-base mb-0.5"></i>
                  놀기
                </button>
                <button
                  onClick={() => handleQuickAction('pet')}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-purple-800/50 rounded-lg text-purple-200 hover:bg-purple-700/50 transition-colors text-xs"
                >
                  <i className="ri-heart-line text-base mb-0.5"></i>
                  쓰담
                </button>
                <button
                  onClick={() => {
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                      canvas.style.filter = 'brightness(1.5)';
                      setTimeout(() => {
                        canvas.style.filter = 'none';
                      }, 200);
                      showNotification('📸 사진을 찍었어요!');
                    }
                  }}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-purple-800/50 rounded-lg text-purple-200 hover:bg-purple-700/50 transition-colors text-xs"
                >
                  <i className="ri-camera-line text-base mb-0.5"></i>
                  사진
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Cyworld Style */}
          <div className="xl:col-span-3 h-full overflow-y-auto space-y-3">
            {/* Visitor List */}
            <VisitorList />

            {/* Guest Book - 일촌평 */}
            <GuestBook />

            {/* Room Controls */}
            <RoomControls
              isDecorating={isDecorating}
              onAddFurniture={handleAddFurniture}
              onRemoveFurniture={handleRemoveFurniture}
              coins={coins}
              isVisitor={isVisitor}
            />

            {/* Chat System */}
            <ChatSystem onlineUsers={onlineUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
