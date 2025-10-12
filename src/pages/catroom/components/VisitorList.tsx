import { useState } from 'react';
import { navigateTo } from '../../../router/navigator';

interface Visitor {
  id: string;
  username: string;
  timestamp: string;
  avatar: string;
}

export default function VisitorList() {
  const [visitors] = useState<Visitor[]>([
    {
      id: '1',
      username: '냥집사123',
      timestamp: '10분 전',
      avatar: '🎨'
    },
    {
      id: '2',
      username: '길냥이사랑',
      timestamp: '25분 전',
      avatar: '🌟'
    },
    {
      id: '3',
      username: '픽셀캣',
      timestamp: '1시간 전',
      avatar: '💝'
    },
    {
      id: '4',
      username: '고양이천국',
      timestamp: '2시간 전',
      avatar: '🎭'
    },
    {
      id: '5',
      username: '냥냥펀치',
      timestamp: '3시간 전',
      avatar: '🎪'
    }
  ]);

  const handleVisit = (username: string) => {
    navigateTo(`/${encodeURIComponent(username)}`);
  };

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-purple-500/20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-bold text-sm flex items-center">
          <i className="ri-footprint-line text-purple-400 mr-1.5"></i>
          최근 방문자
        </h3>
        <span className="text-purple-400 text-xs">{visitors.length}명</span>
      </div>

      <div className="space-y-1.5">
        {visitors.slice(0, 5).map((visitor) => (
          <div
            key={visitor.id}
            className="flex items-center justify-between p-2 bg-black/20 rounded-lg hover:bg-black/30 transition-colors group"
          >
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                {visitor.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-medium truncate">
                  {visitor.username}
                </div>
                <div className="text-purple-400 text-xs">
                  {visitor.timestamp}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleVisit(visitor.username)}
              className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs"
            >
              방문
            </button>
          </div>
        ))}
      </div>

      {visitors.length > 5 && (
        <button className="w-full mt-2 py-1.5 bg-purple-800/30 hover:bg-purple-700/40 text-purple-300 rounded-lg text-xs transition-colors">
          + {visitors.length - 5}명 더보기
        </button>
      )}
    </div>
  );
}
