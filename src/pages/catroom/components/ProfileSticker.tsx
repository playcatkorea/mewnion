import { useState } from 'react';

interface ProfileData {
  nickname: string;
  level: number;
  mood: string;
  statusMessage: string;
  todayVisitors: number;
  totalVisitors: number;
}

export default function ProfileSticker() {
  const [profile] = useState<ProfileData>({
    nickname: '냥집사',
    level: 15,
    mood: '행복함 😊',
    statusMessage: '고양이들과 함께하는 행복한 하루 🐱✨',
    todayVisitors: 42,
    totalVisitors: 1337
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30 shadow-lg">
      {/* 프로필 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
            <i className="ri-user-star-fill text-white text-sm"></i>
          </div>
          <span className="text-white font-bold text-sm">👤 프로필</span>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-purple-300 hover:text-white transition-colors text-xs"
        >
          <i className="ri-edit-line"></i>
        </button>
      </div>

      {/* 프로필 카드 */}
      <div className="bg-black/30 rounded-lg p-3 mb-2">
        {/* 닉네임 & 레벨 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-lg shadow-md">
              🐱
            </div>
            <div>
              <div className="text-white font-bold text-sm">{profile.nickname}</div>
              <div className="flex items-center space-x-1">
                <i className="ri-vip-crown-fill text-yellow-400 text-xs"></i>
                <span className="text-yellow-400 text-xs font-medium">Lv.{profile.level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 기분 */}
        <div className="flex items-center space-x-2 mb-2 p-2 bg-purple-800/30 rounded">
          <i className="ri-emotion-happy-line text-pink-400 text-xs"></i>
          <span className="text-purple-200 text-xs">{profile.mood}</span>
        </div>

        {/* 상태 메시지 */}
        <div className="bg-purple-900/40 rounded p-2 border border-purple-500/20">
          <div className="flex items-start space-x-1.5">
            <i className="ri-chat-quote-line text-purple-400 text-xs mt-0.5"></i>
            <p className="text-purple-100 text-xs leading-relaxed flex-1">
              {profile.statusMessage}
            </p>
          </div>
        </div>
      </div>

      {/* 방문자 통계 */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-black/30 rounded-lg p-2">
          <div className="text-purple-400 text-xs mb-1">TODAY</div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">{profile.todayVisitors}</span>
            <i className="ri-user-add-line text-green-400 text-xs"></i>
          </div>
        </div>
        <div className="bg-black/30 rounded-lg p-2">
          <div className="text-purple-400 text-xs mb-1">TOTAL</div>
          <div className="flex items-center justify-between">
            <span className="text-white font-bold text-sm">{profile.totalVisitors}</span>
            <i className="ri-team-line text-blue-400 text-xs"></i>
          </div>
        </div>
      </div>

      {/* 소셜 링크 */}
      <div className="mt-3 pt-3 border-t border-purple-500/30">
        <div className="grid grid-cols-4 gap-2">
          <button className="flex flex-col items-center p-2 bg-purple-800/30 hover:bg-purple-700/40 rounded-lg transition-colors">
            <i className="ri-image-line text-pink-400 text-sm mb-1"></i>
            <span className="text-purple-300 text-xs">사진첩</span>
          </button>
          <button className="flex flex-col items-center p-2 bg-purple-800/30 hover:bg-purple-700/40 rounded-lg transition-colors">
            <i className="ri-book-2-line text-blue-400 text-sm mb-1"></i>
            <span className="text-purple-300 text-xs">다이어리</span>
          </button>
          <button className="flex flex-col items-center p-2 bg-purple-800/30 hover:bg-purple-700/40 rounded-lg transition-colors">
            <i className="ri-video-line text-purple-400 text-sm mb-1"></i>
            <span className="text-purple-300 text-xs">동영상</span>
          </button>
          <button className="flex flex-col items-center p-2 bg-purple-800/30 hover:bg-purple-700/40 rounded-lg transition-colors">
            <i className="ri-message-3-line text-yellow-400 text-sm mb-1"></i>
            <span className="text-purple-300 text-xs">쪽지</span>
          </button>
        </div>
      </div>

      {/* 일촌 신청 버튼 */}
      <button className="w-full mt-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1">
        <i className="ri-user-add-line"></i>
        <span>일촌 신청하기</span>
      </button>
    </div>
  );
}
