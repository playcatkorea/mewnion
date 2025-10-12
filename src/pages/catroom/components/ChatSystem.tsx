
import { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  color: string;
}

interface OnlineUser {
  id: string;
  username: string;
  color: string;
  x: number;
  y: number;
}

interface ChatSystemProps {
  onlineUsers: OnlineUser[];
}

export default function ChatSystem({ onlineUsers }: ChatSystemProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      username: '냥집사123',
      message: '안녕하세요! 귀여운 고양이들이네요 🐱',
      timestamp: new Date(Date.now() - 300000),
      color: '#FF6B6B'
    },
    {
      id: '2',
      username: '길냥이사랑',
      message: '우와 방 꾸미기 정말 잘하셨어요!',
      timestamp: new Date(Date.now() - 180000),
      color: '#4ECDC4'
    },
    {
      id: '3',
      username: '픽셀캣',
      message: '같이 놀아요~ ㅎㅎ',
      timestamp: new Date(Date.now() - 60000),
      color: '#45B7D1'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const userColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen && chatInputRef.current) {
      chatInputRef.current.focus();
    }
  }, [isChatOpen]);

  const generateRandomUsername = () => {
    const adjectives = ['귀여운', '멋진', '행복한', '즐거운', '사랑스러운', '활발한', '조용한', '친근한'];
    const nouns = ['고양이', '냥이', '집사', '친구', '동반자', '캣맘', '캣대디', '냥집사'];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = Math.floor(Math.random() * 999) + 1;
    return `${randomAdj}${randomNoun}${randomNum}`;
  };

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
      setIsChatOpen(true);
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && isUsernameSet) {
      const userColor = userColors[Math.floor(Math.random() * userColors.length)];
      const message: ChatMessage = {
        id: Date.now().toString(),
        username,
        message: newMessage.trim(),
        timestamp: new Date(),
        color: userColor
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const handleQuickUsername = () => {
    const randomName = generateRandomUsername();
    setUsername(randomName);
    setIsUsernameSet(true);
    setIsChatOpen(true);
  };

  if (!isUsernameSet) {
    return (
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/30">
        <h3 className="text-white font-bold mb-2 text-xs flex items-center">
          <i className="ri-chat-3-line text-[#f6b73c] mr-1.5"></i>
          실시간 채팅
        </h3>

        <div className="text-center py-2">
          <div className="text-xl mb-1">💬</div>
          <p className="text-purple-300 text-xs mb-2">채팅 참여</p>

          <form onSubmit={handleUsernameSubmit} className="space-y-1.5">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="닉네임"
              className="w-full px-2 py-1 bg-purple-900/50 border border-purple-500/30 rounded text-white placeholder-purple-400 text-xs focus:outline-none focus:border-[#f6b73c]"
              maxLength={20}
            />
            <div className="flex gap-1">
              <button
                type="submit"
                className="flex-1 px-2 py-1 bg-[#f6b73c] text-white rounded hover:bg-[#e5a635] transition-colors text-xs font-medium cursor-pointer"
              >
                시작
              </button>
              <button
                type="button"
                onClick={handleQuickUsername}
                className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded hover:bg-purple-600/70 transition-colors text-xs cursor-pointer"
              >
                랜덤
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/30 overflow-hidden">
      {/* 채팅 헤더 */}
      <div
        className="p-2 border-b border-purple-500/30 cursor-pointer hover:bg-purple-900/20 transition-colors"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-xs flex items-center">
            <i className="ri-chat-3-line text-[#f6b73c] mr-1.5"></i>
            채팅
          </h3>
          <div className="flex items-center space-x-1.5">
            <div className="flex items-center text-purple-300 text-xs">
              <div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
              {onlineUsers.length}
            </div>
            <i className={`ri-arrow-${isChatOpen ? 'up' : 'down'}-s-line text-purple-300 text-xs`}></i>
          </div>
        </div>
      </div>

      {isChatOpen && (
        <>
          {/* 온라인 유저 목록 - 더 컴팩트 */}
          <div className="p-1.5 border-b border-purple-500/30 bg-purple-900/20">
            <div className="flex items-center space-x-1 text-xs">
              <span className="text-purple-400 text-xs">접속</span>
              <div className="flex flex-wrap gap-0.5">
                {onlineUsers.slice(0, 2).map((user) => (
                  <span
                    key={user.id}
                    className="px-1 py-0.5 bg-purple-800/50 rounded text-purple-200 text-xs"
                    style={{ color: user.color }}
                  >
                    {user.username}
                  </span>
                ))}
                {onlineUsers.length > 2 && (
                  <span className="px-1 py-0.5 bg-purple-800/50 rounded text-purple-300 text-xs">
                    +{onlineUsers.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 채팅 메시지 영역 - 높이 더 줄임 */}
          <div className="h-32 overflow-y-auto p-1.5 space-y-1 bg-gradient-to-b from-transparent to-purple-900/10">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col space-y-0.5">
                <div className="flex items-center space-x-1">
                  <span
                    className="text-xs font-medium"
                    style={{ color: msg.color }}
                  >
                    {msg.username}
                  </span>
                  <span className="text-xs text-purple-400 opacity-70">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <div className="text-xs text-purple-100 bg-purple-900/30 rounded px-1.5 py-0.5 ml-0.5">
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 메시지 입력 영역 - 더 컴팩트 */}
          <div className="p-1.5 border-t border-purple-500/30">
            <form onSubmit={handleMessageSubmit} className="flex space-x-1">
              <input
                ref={chatInputRef}
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="메시지..."
                className="flex-1 px-2 py-1 bg-purple-900/50 border border-purple-500/30 rounded text-white placeholder-purple-400 text-xs focus:outline-none focus:border-[#f6b73c]"
                maxLength={200}
              />
              <button
                type="submit"
                className="px-2 py-1 bg-[#f6b73c] text-white rounded hover:bg-[#e5a635] transition-colors cursor-pointer"
              >
                <i className="ri-send-plane-line text-xs"></i>
              </button>
            </form>
            <div className="text-xs text-purple-400 mt-0.5 opacity-70">
              {username} • {newMessage.length}/200
            </div>
          </div>
        </>
      )}
    </div>
  );
}
