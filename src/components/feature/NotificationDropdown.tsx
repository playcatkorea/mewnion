import { useState, useRef, useEffect } from 'react';
import { useNotifications } from '../../hooks/useNotifications';
import { navigateTo } from '../../router/navigator';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    requestPermission,
  } = useNotifications();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNotificationClick = (notification: any) => {
    markAsRead(notification.id);
    if (notification.link) {
      navigateTo(notification.link);
    }
    setIsOpen(false);
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'visitor':
        return 'ri-user-line';
      case 'friend_request':
        return 'ri-user-add-line';
      case 'message':
        return 'ri-message-3-line';
      case 'achievement':
        return 'ri-trophy-line';
      case 'system':
        return 'ri-notification-3-line';
      default:
        return 'ri-notification-line';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'visitor':
        return 'text-blue-400 bg-blue-900/30';
      case 'friend_request':
        return 'text-green-400 bg-green-900/30';
      case 'message':
        return 'text-purple-400 bg-purple-900/30';
      case 'achievement':
        return 'text-yellow-400 bg-yellow-900/30';
      case 'system':
        return 'text-pink-400 bg-pink-900/30';
      default:
        return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          requestPermission();
        }}
        className="relative p-2 rounded-lg hover:bg-purple-800/50 transition-colors"
      >
        <i className="ri-notification-3-line text-xl text-purple-200"></i>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 max-h-[600px] bg-gray-900/95 backdrop-blur-lg rounded-xl border border-purple-500/30 shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-purple-500/30 flex items-center justify-between">
            <h3 className="text-white font-bold flex items-center">
              <i className="ri-notification-3-line mr-2"></i>
              알림
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-purple-400 hover:text-purple-300"
              >
                모두 읽음
              </button>
            )}
          </div>

          {/* Notifications List */}
          <div className="max-h-[500px] overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-purple-300 text-sm">알림 불러오는 중...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <i className="ri-notification-off-line text-4xl text-purple-400 mb-2"></i>
                <p className="text-purple-300 text-sm">알림이 없습니다</p>
              </div>
            ) : (
              <div className="divide-y divide-purple-500/20">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-purple-900/20 transition-colors cursor-pointer ${
                      !notification.read ? 'bg-purple-900/10' : ''
                    }`}
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(
                          notification.type
                        )}`}
                      >
                        <i className={`${getNotificationIcon(notification.type)} text-lg`}></i>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            className={`font-medium text-sm ${
                              !notification.read ? 'text-white' : 'text-purple-200'
                            }`}
                          >
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                          )}
                        </div>
                        {notification.content && (
                          <p className="text-purple-300 text-xs mt-1 line-clamp-2">
                            {notification.content}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-purple-400 text-xs">
                            {formatDistanceToNow(new Date(notification.created_at), {
                              addSuffix: true,
                              locale: ko,
                            })}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNotification(notification.id);
                            }}
                            className="text-purple-400 hover:text-red-400 transition-colors"
                          >
                            <i className="ri-close-line text-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="px-4 py-3 border-t border-purple-500/30 text-center">
              <button
                onClick={() => {
                  navigateTo('/mypage');
                  setIsOpen(false);
                }}
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                모든 알림 보기
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
