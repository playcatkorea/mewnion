
export default function CommunityStats() {
  const stats = [
    {
      label: '오늘 새 게시물',
      value: '1,247',
      change: '+12%',
      icon: 'ri-file-text-line',
      color: 'text-blue-500'
    },
    {
      label: '활성 사용자',
      value: '24,789',
      change: '+8%',
      icon: 'ri-user-line',
      color: 'text-green-500'
    },
    {
      label: '구조된 동물',
      value: '156',
      change: '+23%',
      icon: 'ri-heart-line',
      color: 'text-red-500'
    },
    {
      label: '후원 금액',
      value: '₩2.4M',
      change: '+15%',
      icon: 'ri-coins-line',
      color: 'text-yellow-500'
    }
  ];

  const recentActivities = [
    {
      type: 'rescue',
      message: '새끼 고양이 3마리가 구조되었습니다',
      time: '5분 전',
      icon: 'ri-heart-add-line',
      color: 'text-red-500'
    },
    {
      type: 'adoption',
      message: '골든리트리버 "골디"가 새 가족을 찾았습니다',
      time: '12분 전',
      icon: 'ri-home-heart-line',
      color: 'text-green-500'
    },
    {
      type: 'donation',
      message: '김민수님이 50,000원을 후원했습니다',
      time: '18분 전',
      icon: 'ri-hand-heart-line',
      color: 'text-blue-500'
    },
    {
      type: 'milestone',
      message: '커뮤니티 회원 25,000명 달성!',
      time: '1시간 전',
      icon: 'ri-trophy-line',
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Daily Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-bar-chart-line text-[#f6b73c] mr-2"></i>
          오늘의 통계
        </h3>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                  <i className={`${stat.icon} ${stat.color} text-lg`}></i>
                </div>
                <div>
                  <div className="font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
              <div className="text-xs text-green-500 font-medium">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-notification-line text-[#f6b73c] mr-2"></i>
          실시간 활동
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                <i className={`${activity.icon} ${activity.color} text-sm`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 leading-relaxed">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 text-[#f6b73c] text-sm font-medium hover:underline">
          모든 활동 보기 →
        </button>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4">빠른 액션</h3>
        <div className="space-y-3">
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
            <div className="flex items-center">
              <i className="ri-alarm-warning-line mr-3"></i>
              <div>
                <div className="font-medium">긴급 구조 신고</div>
                <div className="text-xs opacity-80">위험에 처한 동물 신고</div>
              </div>
            </div>
          </button>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
            <div className="flex items-center">
              <i className="ri-heart-add-line mr-3"></i>
              <div>
                <div className="font-medium">입양 신청</div>
                <div className="text-xs opacity-80">새 가족 찾기</div>
              </div>
            </div>
          </button>
          <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
            <div className="flex items-center">
              <i className="ri-hand-heart-line mr-3"></i>
              <div>
                <div className="font-medium">후원하기</div>
                <div className="text-xs opacity-80">동물 보호 후원</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
