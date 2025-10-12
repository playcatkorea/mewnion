import { useState } from 'react';

interface GuestEntry {
  id: number;
  username: string;
  message: string;
  timestamp: string;
  avatar: string;
}

export default function GuestBook() {
  const [entries, setEntries] = useState<GuestEntry[]>([
    {
      id: 1,
      username: '냥집사123',
      message: '고양이들 너무 귀여워요! 🐱',
      timestamp: '10분 전',
      avatar: '🎨'
    },
    {
      id: 2,
      username: '길냥이사랑',
      message: '방 꾸미기 진짜 잘하셨네요 ✨',
      timestamp: '25분 전',
      avatar: '🌟'
    },
    {
      id: 3,
      username: '픽셀캣',
      message: '우리 고양이도 이렇게 키우고 싶어요',
      timestamp: '1시간 전',
      avatar: '💝'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newEntry: GuestEntry = {
      id: entries.length + 1,
      username: '나',
      message: newMessage,
      timestamp: '방금',
      avatar: '😺'
    };

    setEntries([newEntry, ...entries]);
    setNewMessage('');
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30 shadow-lg">
      {/* 일촌평 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
            <i className="ri-quill-pen-fill text-white text-sm"></i>
          </div>
          <span className="text-white font-bold text-sm">💬 일촌평</span>
        </div>
        <span className="text-purple-300 text-xs">{entries.length}개</span>
      </div>

      {/* 일촌평 작성 */}
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="bg-black/30 rounded-lg p-2">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="따뜻한 말 한마디 남겨주세요 💕"
            className="w-full bg-transparent text-white placeholder-purple-400 text-xs resize-none outline-none"
            rows={2}
            maxLength={100}
          />
          <div className="flex items-center justify-between mt-2">
            <span className="text-purple-400 text-xs">
              {newMessage.length}/100
            </span>
            <button
              type="submit"
              className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg text-xs font-medium transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!newMessage.trim()}
            >
              작성
            </button>
          </div>
        </div>
      </form>

      {/* 일촌평 목록 */}
      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-black/30 rounded-lg p-2 hover:bg-black/40 transition-colors"
          >
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                {entry.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-medium text-xs">
                    {entry.username}
                  </span>
                  <span className="text-purple-400 text-xs">
                    {entry.timestamp}
                  </span>
                </div>
                <p className="text-purple-100 text-xs leading-relaxed break-words">
                  {entry.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 더보기 버튼 */}
      {entries.length > 5 && (
        <button className="w-full mt-2 py-1.5 bg-purple-800/30 hover:bg-purple-700/40 text-purple-300 rounded-lg text-xs transition-colors">
          일촌평 더보기 ({entries.length})
        </button>
      )}
    </div>
  );
}
