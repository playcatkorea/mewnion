import { useState, useRef, useEffect } from 'react';
import { useMessages } from '../../hooks/useMessages';
import { useFriends } from '../../hooks/useFriends';
import { useAuth } from '../../context/AuthContext';
import { showFeedback } from '../../utils/navigation';
import Button from '../base/Button';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function ChatSection() {
  const { user } = useAuth();
  const { friends } = useFriends();
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null);
  const { messages, loading, sending, sendMessage, getConversations } =
    useMessages(selectedFriendId || undefined);
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversations = getConversations();

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const selectedFriend = friends.find((f) => f.id === selectedFriendId);
  const selectedConversation = conversations.find((c) => c.userId === selectedFriendId);

  const handleSendMessage = async () => {
    if (!messageText.trim() || !selectedFriendId || sending) return;

    try {
      await sendMessage(selectedFriendId, messageText);
      setMessageText('');
    } catch (error: any) {
      showFeedback(error.message || '메시지 전송 실패', 'error');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-purple-300">채팅 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <div className="lg:col-span-1 glass-effect rounded-2xl border border-purple-500/30 overflow-hidden flex flex-col">
        <div className="px-4 py-3 border-b border-purple-500/30">
          <h3 className="text-white font-bold flex items-center">
            <i className="ri-message-3-line mr-2 text-purple-400"></i>
            대화 목록
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="p-6 text-center">
              <i className="ri-chat-3-line text-4xl text-purple-400 mb-2"></i>
              <p className="text-purple-300 text-sm">
                친구와 대화를 시작해보세요!
              </p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <button
                key={conversation.userId}
                onClick={() => setSelectedFriendId(conversation.userId)}
                className={`w-full p-4 border-b border-purple-500/20 hover:bg-purple-900/20 transition-colors text-left ${
                  selectedFriendId === conversation.userId
                    ? 'bg-purple-900/30'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                      {conversation.avatar_url ? (
                        <img
                          src={conversation.avatar_url}
                          alt={conversation.username || ''}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-xl"></i>
                        </div>
                      )}
                    </div>
                    {conversation.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                        {conversation.unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-white truncate">
                        {conversation.username}
                      </h4>
                      <span className="text-xs text-purple-400">
                        {formatDistanceToNow(
                          new Date(conversation.lastMessage.created_at),
                          { locale: ko }
                        )}
                      </span>
                    </div>
                    <p
                      className={`text-sm truncate ${
                        conversation.unreadCount > 0
                          ? 'text-white font-medium'
                          : 'text-purple-300'
                      }`}
                    >
                      {conversation.lastMessage.sender_id === user?.id && '나: '}
                      {conversation.lastMessage.content}
                    </p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        {/* New Chat Button */}
        {friends.length > 0 && (
          <div className="p-4 border-t border-purple-500/30">
            <select
              onChange={(e) => setSelectedFriendId(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/50 text-white text-sm"
            >
              <option value="">친구 선택...</option>
              {friends
                .filter((f) => !conversations.some((c) => c.userId === f.id))
                .map((friend) => (
                  <option key={friend.id} value={friend.id}>
                    {friend.username}
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>

      {/* Chat Messages */}
      <div className="lg:col-span-2 glass-effect rounded-2xl border border-purple-500/30 overflow-hidden flex flex-col">
        {selectedFriendId ? (
          <>
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                  {selectedFriend?.avatar_url ? (
                    <img
                      src={selectedFriend.avatar_url}
                      alt={selectedFriend.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <i className="ri-user-line text-white text-lg"></i>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold">
                    {selectedFriend?.username}
                  </h3>
                  {selectedFriend?.online && (
                    <p className="text-xs text-green-400">
                      <i className="ri-circle-fill mr-1"></i>
                      온라인
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => {
                const isMe = message.sender_id === user?.id;
                return (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      isMe ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
                      {(isMe
                        ? message.sender_avatar_url
                        : message.recipient_avatar_url) ? (
                        <img
                          src={
                            isMe
                              ? message.sender_avatar_url
                              : message.recipient_avatar_url
                          }
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-sm"></i>
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex-1 max-w-[70%] ${isMe ? 'items-end' : ''}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          isMe
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-purple-900/30 text-purple-100'
                        }`}
                      >
                        <p className="text-sm break-words">{message.content}</p>
                      </div>
                      <p
                        className={`text-xs text-purple-400 mt-1 ${
                          isMe ? 'text-right' : ''
                        }`}
                      >
                        {formatDistanceToNow(new Date(message.created_at), {
                          addSuffix: true,
                          locale: ko,
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-purple-500/30">
              <div className="flex gap-2">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요... (Shift+Enter로 줄바꿈)"
                  className="flex-1 px-4 py-3 rounded-lg bg-purple-900/30 border border-purple-500/50 text-white placeholder-purple-400 resize-none"
                  rows={2}
                  maxLength={2000}
                  disabled={sending}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={sending || !messageText.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 self-end"
                >
                  {sending ? (
                    <i className="ri-loader-4-line animate-spin"></i>
                  ) : (
                    <i className="ri-send-plane-fill"></i>
                  )}
                </Button>
              </div>
              <p className="text-xs text-purple-400 mt-2">
                {messageText.length} / 2000
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <i className="ri-chat-smile-3-line text-6xl text-purple-400 mb-4"></i>
              <p className="text-purple-300 mb-2">대화를 선택하세요</p>
              <p className="text-purple-400 text-sm">
                친구와 실시간으로 대화해보세요!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
