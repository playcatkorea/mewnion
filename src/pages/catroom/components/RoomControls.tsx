
import { useState } from 'react';

interface Furniture {
  id: number;
  type: string;
  x: number;
  y: number;
}

interface RoomControlsProps {
  isDecorating: boolean;
  onAddFurniture: (furniture: Furniture) => void;
  onRemoveFurniture?: (id: number) => void;
  coins: number;
  isVisitor?: boolean;
}

export default function RoomControls({
  isDecorating,
  onAddFurniture,
  onRemoveFurniture,
  coins,
  isVisitor = false
}: RoomControlsProps) {
  const [selectedFurnitureType, setSelectedFurnitureType] = useState<string>('');

  const furnitureTypes = [
    { type: 'cat_tower', name: '캣타워', icon: 'ri-building-line', price: 500, activity: 15 },
    { type: 'cat_wheel', name: '캣휠', icon: 'ri-refresh-line', price: 1200, activity: 30 },
    { type: 'sofa', name: '소파', icon: 'ri-sofa-line', price: 800, activity: 5 },
    { type: 'bookshelf', name: '책장', icon: 'ri-book-shelf-line', price: 300, activity: 3 },
    { type: 'plant', name: '화분', icon: 'ri-plant-line', price: 200, activity: 2 },
    { type: 'lamp', name: '조명', icon: 'ri-lightbulb-line', price: 150, activity: 0 },
    { type: 'cat_bed', name: '고양이 침대', icon: 'ri-hotel-bed-line', price: 400, activity: 8 },
    { type: 'scratching_post', name: '스크래처', icon: 'ri-scissors-line', price: 250, activity: 12 },
    { type: 'food_bowl', name: '밥그릇', icon: 'ri-bowl-line', price: 100, activity: 5 },
    { type: 'toy_ball', name: '공놀이', icon: 'ri-basketball-line', price: 150, activity: 20 },
    { type: 'tunnel', name: '터널', icon: 'ri-road-map-line', price: 350, activity: 18 }
  ];

  const handleAddFurniture = (type: string, price: number) => {
    if (coins < price) {
      alert('코인이 부족합니다!');
      return;
    }
    const newFurniture: Furniture = {
      id: Date.now(),
      type,
      x: Math.random() * 400 + 100,
      y: Math.random() * 250 + 100
    };
    onAddFurniture(newFurniture);
  };

  if (isVisitor) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30">
        <h3 className="text-white font-bold mb-2 text-xs flex items-center">
          <i className="ri-eye-line text-[#f6b73c] mr-1.5"></i>
          방문 모드
        </h3>
        <div className="text-center py-3">
          <div className="text-xl mb-1">👀</div>
          <p className="text-purple-300 text-xs">다른 사람의 캣룸을 구경하고 있어요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30">
      <h3 className="text-white font-bold mb-2 text-xs flex items-center">
        <i className="ri-hammer-line text-[#f6b73c] mr-1.5"></i>
        방 꾸미기
      </h3>

      {isDecorating ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-purple-300 text-xs">가구 배치</span>
            <div className="flex items-center space-x-1">
              <i className="ri-copper-coin-line text-yellow-400 text-xs"></i>
              <span className="text-yellow-400 font-bold text-xs">{coins}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 max-h-40 overflow-y-auto pr-1">
            {furnitureTypes.map((furniture) => {
              const canBuy = coins >= furniture.price;
              return (
                <button
                  key={furniture.type}
                  onClick={() => handleAddFurniture(furniture.type, furniture.price)}
                  disabled={!canBuy}
                  className={`flex items-center justify-between p-1.5 rounded transition-colors ${
                    canBuy
                      ? 'bg-purple-900/50 hover:bg-purple-800/50 cursor-pointer'
                      : 'bg-gray-800/30 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 flex-1 min-w-0">
                    <i className={`${furniture.icon} text-[#f6b73c] text-xs flex-shrink-0`}></i>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">{furniture.name}</div>
                      <div className="text-green-400 text-xs">+{furniture.activity} 활동량</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    <i className="ri-copper-coin-line text-yellow-400 text-xs"></i>
                    <span className={`text-xs font-bold ${canBuy ? 'text-yellow-400' : 'text-gray-500'}`}>
                      {furniture.price}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-1.5 border-t border-purple-500/30 text-xs text-purple-300">
            <p className="flex items-center">
              <i className="ri-information-line mr-1"></i>
              클릭해서 가구를 드래그하세요
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-3">
          <div className="text-xl mb-1">🏠</div>
          <p className="text-purple-300 text-xs">꾸미기 모드 OFF</p>
          <p className="text-purple-400 text-xs mt-1">상단 버튼으로 ON</p>
        </div>
      )}

      {/* 테마 선택 - 더 컴팩트 */}
      <div className="mt-2 pt-2 border-t border-purple-500/30">
        <h4 className="text-purple-200 text-xs font-medium mb-1.5 flex items-center">
          <i className="ri-palette-line mr-1 text-xs"></i>
          테마
        </h4>
        <div className="grid grid-cols-2 gap-1">
          {[
            { name: '우주', color: 'from-purple-600 to-blue-600', icon: 'ri-planet-line' },
            { name: '숲', color: 'from-green-600 to-emerald-600', icon: 'ri-tree-line' },
            { name: '바다', color: 'from-blue-600 to-cyan-600', icon: 'ri-water-line' },
            { name: '도시', color: 'from-gray-600 to-slate-600', icon: 'ri-building-line' }
          ].map((theme) => (
            <button
              key={theme.name}
              className={`flex items-center justify-center p-1 rounded bg-gradient-to-r ${theme.color} hover:opacity-80 transition-opacity cursor-pointer`}
            >
              <i className={`${theme.icon} text-white mr-0.5 text-xs`}></i>
              <span className="text-white text-xs">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 방 설정 - 더 컴팩트 */}
      <div className="mt-2 pt-2 border-t border-purple-500/30">
        <h4 className="text-purple-200 text-xs font-medium mb-1.5 flex items-center">
          <i className="ri-settings-3-line mr-1 text-xs"></i>
          설정
        </h4>
        <div className="space-y-1">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-purple-300 text-xs">방문</span>
            <input type="checkbox" defaultChecked className="rounded w-3 h-3" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-purple-300 text-xs">자동먹이</span>
            <input type="checkbox" className="rounded w-3 h-3" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-purple-300 text-xs">BGM</span>
            <input type="checkbox" defaultChecked className="rounded w-3 h-3" />
          </label>
        </div>
      </div>
    </div>
  );
}
