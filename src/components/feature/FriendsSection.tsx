import { useState } from 'react';
import { useFriends } from '../../hooks/useFriends';
import { navigateTo } from '../../router/navigator';
import { showFeedback } from '../../utils/navigation';
import Button from '../base/Button';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function FriendsSection() {
  const {
    friends,
    pendingRequests,
    sentRequests,
    loading,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
  } = useFriends();

  const [activeTab, setActiveTab] = useState<'friends' | 'requests' | 'sent'>('friends');
  const [searchUsername, setSearchUsername] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSendRequest = async () => {
    if (!searchUsername.trim()) {
      showFeedback('사용자명을 입력해주세요', 'error');
      return;
    }

    setSearching(true);
    try {
      await sendFriendRequest(searchUsername.trim());
      showFeedback('친구 요청을 보냈습니다!');
      setSearchUsername('');
    } catch (error: any) {
      showFeedback(error.message || '친구 요청 실패', 'error');
    } finally {
      setSearching(false);
    }
  };

  const handleAcceptRequest = async (friendshipId: string) => {
    try {
      await acceptFriendRequest(friendshipId);
      showFeedback('친구 요청을 수락했습니다!');
    } catch (error) {
      showFeedback('요청 수락 실패', 'error');
    }
  };

  const handleRejectRequest = async (friendshipId: string) => {
    try {
      await rejectFriendRequest(friendshipId);
      showFeedback('친구 요청을 거절했습니다');
    } catch (error) {
      showFeedback('요청 거절 실패', 'error');
    }
  };

  const handleRemoveFriend = async (friendshipId: string, username: string) => {
    if (!confirm(`${username}님을 친구 목록에서 삭제하시겠습니까?`)) {
      return;
    }

    try {
      await removeFriend(friendshipId);
      showFeedback('친구를 삭제했습니다');
    } catch (error) {
      showFeedback('친구 삭제 실패', 'error');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-purple-300">친구 목록 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Friend Search */}
      <div className="glass-effect rounded-2xl p-6 border border-purple-500/30">
        <h3 className="text-white font-bold mb-4 flex items-center">
          <i className="ri-user-add-line mr-2 text-purple-400"></i>
          친구 추가
        </h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendRequest()}
            placeholder="사용자명 입력..."
            className="flex-1 px-4 py-3 rounded-lg bg-purple-900/30 border border-purple-500/50 text-white placeholder-purple-400"
            disabled={searching}
          />
          <Button
            onClick={handleSendRequest}
            disabled={searching || !searchUsername.trim()}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6"
          >
            {searching ? (
              <i className="ri-loader-4-line animate-spin"></i>
            ) : (
              <>
                <i className="ri-send-plane-line mr-2"></i>
                요청
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-purple-500/30">
        <button
          onClick={() => setActiveTab('friends')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'friends'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-purple-300 hover:text-purple-200'
          }`}
        >
          <i className="ri-team-line mr-2"></i>
          친구 ({friends.length})
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`px-6 py-3 font-medium transition-all relative ${
            activeTab === 'requests'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-purple-300 hover:text-purple-200'
          }`}
        >
          <i className="ri-user-received-line mr-2"></i>
          받은 요청 ({pendingRequests.length})
          {pendingRequests.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {pendingRequests.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('sent')}
          className={`px-6 py-3 font-medium transition-all ${
            activeTab === 'sent'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-purple-300 hover:text-purple-200'
          }`}
        >
          <i className="ri-user-shared-line mr-2"></i>
          보낸 요청 ({sentRequests.length})
        </button>
      </div>

      {/* Friends List */}
      {activeTab === 'friends' && (
        <div className="glass-effect rounded-2xl p-6 border border-purple-500/30">
          {friends.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-user-heart-line text-6xl text-purple-400 mb-4"></i>
              <p className="text-purple-300 mb-4">아직 친구가 없습니다</p>
              <p className="text-purple-400 text-sm">
                위에서 사용자명으로 친구를 추가해보세요!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 border border-purple-500/30 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                        {friend.avatar_url ? (
                          <img
                            src={friend.avatar_url}
                            alt={friend.username}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <i className="ri-user-line text-white text-2xl"></i>
                          </div>
                        )}
                      </div>
                      {friend.online && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-1">{friend.username}</h4>
                      <p className="text-xs text-purple-300 mb-2">
                        {friend.online ? (
                          <span className="text-green-400">
                            <i className="ri-circle-fill mr-1 text-xs"></i>
                            온라인
                          </span>
                        ) : friend.last_seen ? (
                          <>
                            <i className="ri-time-line mr-1"></i>
                            {formatDistanceToNow(new Date(friend.last_seen), {
                              addSuffix: true,
                              locale: ko,
                            })}
                          </>
                        ) : (
                          '오프라인'
                        )}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigateTo(`/${friend.username}`)}
                          className="text-xs px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                          <i className="ri-home-line mr-1"></i>
                          캣룸
                        </button>
                        <button
                          onClick={() => handleRemoveFriend(friend.friendship_id, friend.username)}
                          className="text-xs px-3 py-1 bg-red-900/50 hover:bg-red-900/70 text-red-300 rounded-lg transition-colors"
                        >
                          <i className="ri-user-unfollow-line mr-1"></i>
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pending Requests */}
      {activeTab === 'requests' && (
        <div className="glass-effect rounded-2xl p-6 border border-purple-500/30">
          {pendingRequests.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-mail-open-line text-6xl text-purple-400 mb-4"></i>
              <p className="text-purple-300">받은 친구 요청이 없습니다</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.friendship_id}
                  className="bg-purple-900/20 rounded-xl p-4 border border-purple-500/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                      {request.avatar_url ? (
                        <img
                          src={request.avatar_url}
                          alt={request.username}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-xl"></i>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{request.username}</h4>
                      <p className="text-xs text-purple-300">친구 요청을 보냈습니다</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAcceptRequest(request.friendship_id)}
                      className="bg-green-600 hover:bg-green-700 text-sm px-4"
                    >
                      <i className="ri-check-line mr-1"></i>
                      수락
                    </Button>
                    <Button
                      onClick={() => handleRejectRequest(request.friendship_id)}
                      className="bg-red-600 hover:bg-red-700 text-sm px-4"
                    >
                      <i className="ri-close-line mr-1"></i>
                      거절
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sent Requests */}
      {activeTab === 'sent' && (
        <div className="glass-effect rounded-2xl p-6 border border-purple-500/30">
          {sentRequests.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-mail-send-line text-6xl text-purple-400 mb-4"></i>
              <p className="text-purple-300">보낸 친구 요청이 없습니다</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sentRequests.map((request) => (
                <div
                  key={request.friendship_id}
                  className="bg-purple-900/20 rounded-xl p-4 border border-purple-500/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                      {request.avatar_url ? (
                        <img
                          src={request.avatar_url}
                          alt={request.username}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <i className="ri-user-line text-white text-xl"></i>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{request.username}</h4>
                      <p className="text-xs text-purple-300">대기 중...</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => removeFriend(request.friendship_id)}
                    className="bg-gray-600 hover:bg-gray-700 text-sm px-4"
                  >
                    <i className="ri-close-line mr-1"></i>
                    취소
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
