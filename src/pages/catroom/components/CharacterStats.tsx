
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

interface CharacterStatsProps {
  cats: Cat[];
  selectedCat: number | null;
  onInteraction: (catId: number, action: string) => void;
}

export default function CharacterStats({ cats, selectedCat, onInteraction }: CharacterStatsProps) {
  const selectedCatData = cats.find(cat => cat.id === selectedCat);

  const catNames: { [key: number]: string } = {
    1: '먼지',
    2: '호랑이',
    3: '눈송이'
  };

  const moodDescriptions: { [key: string]: { text: string; color: string } } = {
    happy: { text: '행복해요', color: 'text-green-400' },
    playful: { text: '놀고 싶어해요', color: 'text-blue-400' },
    sleepy: { text: '졸려해요', color: 'text-purple-400' },
    hungry: { text: '배고파해요', color: 'text-orange-400' }
  };

  const activityDescriptions: { [key: string]: string } = {
    sitting: '앉아있어요',
    walking: '돌아다니고 있어요',
    sleeping: '자고 있어요',
    playing: '놀고 있어요'
  };

  const handleInteraction = (action: string) => {
    if (selectedCat) {
      onInteraction(selectedCat, action);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30 h-full flex flex-col">
      <h3 className="text-white font-bold mb-2 text-xs flex items-center">
        <i className="ri-heart-3-line text-[#f6b73c] mr-1.5"></i>
        고양이 상태
      </h3>

      {selectedCatData ? (
        <div className="space-y-2 flex-1 flex flex-col min-h-0">
          {/* 선택된 고양이 정보 */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-lg p-2 border border-purple-500/20">
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-white font-medium text-sm">
                {catNames[selectedCatData.id]}
              </h4>
              <div className="text-base">
                {selectedCatData.type === 'black' && '🐱'}
                {selectedCatData.type === 'orange' && '🐱'}
                {selectedCatData.type === 'white' && '🤍'}
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <div className="bg-purple-800/30 rounded px-1.5 py-1">
                  <div className="text-purple-400 text-xs">기분</div>
                  <div className={`font-medium text-xs ${moodDescriptions[selectedCatData.mood].color}`}>
                    {moodDescriptions[selectedCatData.mood].text}
                  </div>
                </div>
                <div className="bg-purple-800/30 rounded px-1.5 py-1">
                  <div className="text-purple-400 text-xs">활동</div>
                  <div className="text-purple-100 font-medium text-xs">
                    {activityDescriptions[selectedCatData.activity]}
                  </div>
                </div>
              </div>

              {/* 상태 바들 - 더 컴팩트 */}
              <div className="space-y-1">
                <div>
                  <div className="flex justify-between text-xs text-purple-300 mb-0.5">
                    <span className="flex items-center text-xs"><i className="ri-heart-pulse-line mr-0.5 text-xs"></i>건강</span>
                    <span className="font-bold text-xs">{selectedCatData.health}%</span>
                  </div>
                  <div className="w-full bg-purple-800/50 rounded-full h-1">
                    <div className="bg-green-400 h-1 rounded-full transition-all duration-500" style={{ width: `${selectedCatData.health}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-purple-300 mb-0.5">
                    <span className="flex items-center text-xs"><i className="ri-emotion-happy-line mr-0.5 text-xs"></i>행복</span>
                    <span className="font-bold text-xs">{selectedCatData.happiness}%</span>
                  </div>
                  <div className="w-full bg-purple-800/50 rounded-full h-1">
                    <div className="bg-yellow-400 h-1 rounded-full transition-all duration-500" style={{ width: `${selectedCatData.happiness}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-purple-300 mb-0.5">
                    <span className="flex items-center text-xs"><i className="ri-restaurant-line mr-0.5 text-xs"></i>포만감</span>
                    <span className="font-bold text-xs">{100 - selectedCatData.hunger}%</span>
                  </div>
                  <div className="w-full bg-purple-800/50 rounded-full h-1">
                    <div className="bg-orange-400 h-1 rounded-full transition-all duration-500" style={{ width: `${100 - selectedCatData.hunger}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-purple-300 mb-0.5">
                    <span className="flex items-center text-xs"><i className="ri-flashlight-line mr-0.5 text-xs"></i>에너지</span>
                    <span className="font-bold text-xs">{selectedCatData.energy}%</span>
                  </div>
                  <div className="w-full bg-purple-800/50 rounded-full h-1">
                    <div className="bg-blue-400 h-1 rounded-full transition-all duration-500" style={{ width: `${selectedCatData.energy}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 상호작용 버튼들 - 더 컴팩트하게 */}
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => handleInteraction('feed')}
              className="flex items-center justify-center px-1.5 py-1 bg-green-600/50 rounded text-green-200 hover:bg-green-600/70 transition-colors text-xs cursor-pointer"
            >
              <i className="ri-restaurant-line mr-1 text-xs"></i>
              밥
            </button>
            <button
              onClick={() => handleInteraction('play')}
              className="flex items-center justify-center px-1.5 py-1 bg-blue-600/50 rounded text-blue-200 hover:bg-blue-600/70 transition-colors text-xs cursor-pointer"
            >
              <i className="ri-gamepad-line mr-1 text-xs"></i>
              놀기
            </button>
            <button
              onClick={() => handleInteraction('pet')}
              className="flex items-center justify-center px-1.5 py-1 bg-pink-600/50 rounded text-pink-200 hover:bg-pink-600/70 transition-colors text-xs cursor-pointer"
            >
              <i className="ri-heart-line mr-1 text-xs"></i>
              쓰담
            </button>
            <button
              onClick={() => handleInteraction('sleep')}
              className="flex items-center justify-center px-1.5 py-1 bg-purple-600/50 rounded text-purple-200 hover:bg-purple-600/70 transition-colors text-xs cursor-pointer"
            >
              <i className="ri-zzz-line mr-1 text-xs"></i>
              자기
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="text-2xl mb-1">🐱</div>
          <p className="text-purple-300 text-xs">고양이 선택</p>
        </div>
      )}

      {/* 전체 고양이 목록 - 더 컴팩트 */}
      <div className="mt-2 pt-2 border-t border-purple-500/30">
        <h4 className="text-purple-200 text-xs font-medium mb-1.5 flex items-center">
          <i className="ri-list-check mr-1 text-xs"></i>
          내 고양이들
        </h4>
        <div className="space-y-1">
          {cats.map(cat => (
            <div
              key={cat.id}
              className={`flex items-center justify-between p-1.5 rounded cursor-pointer transition-all ${
                selectedCat === cat.id
                  ? 'bg-[#f6b73c]/20 border border-[#f6b73c]/50'
                  : 'bg-purple-900/30 hover:bg-purple-900/50 border border-transparent'
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <div className="text-sm">
                  {cat.type === 'black' && '🐱'}
                  {cat.type === 'orange' && '🐱'}
                  {cat.type === 'white' && '🤍'}
                </div>
                <div>
                  <div className="text-white text-xs font-medium">{catNames[cat.id]}</div>
                  <div className={`text-xs ${moodDescriptions[cat.mood].color}`}>
                    {moodDescriptions[cat.mood].text}
                  </div>
                </div>
              </div>
              <div className="text-purple-400 text-xs">Lv.{5 + cat.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
