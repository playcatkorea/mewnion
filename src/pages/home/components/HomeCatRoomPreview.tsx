import { useState, useEffect } from 'react';
import CatRoomScene from '../../catroom/components/CatRoomScene';
import CharacterStats from '../../catroom/components/CharacterStats';
import RoomControls from '../../catroom/components/RoomControls';
import ChatSystem from '../../catroom/components/ChatSystem';
import MinimiPlayer from '../../catroom/components/MinimiPlayer';
import GuestBook from '../../catroom/components/GuestBook';
import ProfileSticker from '../../catroom/components/ProfileSticker';
import VisitorList from '../../catroom/components/VisitorList';
import { useAuth } from '../../../context/AuthContext';
import { navigateTo } from '../../../router/navigator';

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

export default function HomeCatRoomPreview() {
  const { user } = useAuth();
  const [coins, setCoins] = useState(2450);
  const [totalActivity, setTotalActivity] = useState(0);
  const [miningRate, setMiningRate] = useState(1);
  const [notification, setNotification] = useState<string | null>(null);

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

  // 알림 표시
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // 가구 추가
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

  // 고양이 상호작용
  const handleCatInteraction = (catId: number, action: string) => {
    const getCatName = (id: number) => {
      const names: { [key: number]: string } = { 1: '먼지', 2: '호랑이', 3: '눈송이' };
      return names[id];
    };

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

  // 자동 업데이트 효과들
  useEffect(() => {
    const miningInterval = setInterval(() => {
      const earnedCoins = Math.round(miningRate * 10) / 10;
      setCoins(prev => Math.round((prev + earnedCoins) * 10) / 10);
    }, 60000);

    return () => clearInterval(miningInterval);
  }, [miningRate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoomData(prev => ({
        ...prev,
        cats: prev.cats.map(cat => {
          let updatedCat = { ...cat };
          updatedCat.hunger = Math.min(100, cat.hunger + Math.random() * 2);
          updatedCat.energy = Math.max(0, cat.energy - Math.random() * 1);
          if (updatedCat.hunger > 80) {
            updatedCat.mood = 'hungry';
            updatedCat.happiness = Math.max(0, updatedCat.happiness - 1);
          }
          if (updatedCat.energy < 30) {
            updatedCat.mood = 'sleepy';
            updatedCat.activity = 'sitting';
          }
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

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#1a1a3a] to-[#2a1a4a] py-6">
      {/* 알림 */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 bg-[#f6b73c] text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {notification}
        </div>
      )}

      {/* 컴팩트 헤더 */}
      <div className="bg-black/40 backdrop-blur-sm border-b border-purple-500/30">
        <div className="max-w-[1600px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-bold flex items-center">
              <i className="ri-home-heart-fill text-[#f6b73c] mr-2"></i>
              내 캣룸 - 로그인한 사용자에게 표시
            </h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDecorating(!isDecorating)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors text-sm ${
                  isDecorating
                    ? 'bg-[#f6b73c] text-white shadow-lg'
                    : 'bg-purple-800/50 text-purple-200 hover:bg-purple-700/50'
                }`}
              >
                <i className="ri-hammer-line mr-1.5"></i>
                {isDecorating ? '완료' : '꾸미기'}
              </button>
              <button
                onClick={() => navigateTo('/catroom')}
                className="px-4 py-2 bg-gradient-to-r from-[#f6b73c] to-[#ff6b6b] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm"
              >
                <i className="ri-fullscreen-line mr-2"></i>
                전체화면
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-3 py-3">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-3">
          {/* Left Sidebar */}
          <div className="xl:col-span-3 space-y-3">
            <ProfileSticker />
            <CharacterStats
              cats={roomData.cats}
              selectedCat={selectedCat}
              onInteraction={handleCatInteraction}
            />
            <MinimiPlayer />
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
          </div>

          {/* Main Cat Room */}
          <div className="xl:col-span-6 flex flex-col">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30 flex-1 flex flex-col">
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

              <div className="flex-1 flex items-center justify-center">
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
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-3 space-y-3">
            <VisitorList />
            <GuestBook />
            <RoomControls
              isDecorating={isDecorating}
              onAddFurniture={handleAddFurniture}
              onRemoveFurniture={handleRemoveFurniture}
              coins={coins}
              isVisitor={false}
            />
            <ChatSystem onlineUsers={onlineUsers} />
          </div>
        </div>
      </div>
    </section>
  );
}
