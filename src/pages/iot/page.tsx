
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface DeviceControl {
  power: boolean;
  mode: string;
  value: number;
}

interface Notification {
  id: number;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  time: string;
  device: string;
}

const IoTPage = () => {
  const [activeDevice, setActiveDevice] = useState('feeder');
  const [showControlModal, setShowControlModal] = useState(false);
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [deviceControls, setDeviceControls] = useState<Record<string, DeviceControl>>({
    feeder: { power: true, mode: 'auto', value: 100 },
    litter: { power: true, mode: 'auto', value: 80 },
    climate: { power: true, mode: 'cool', value: 22 },
    tracker: { power: true, mode: 'active', value: 50 },
    camera: { power: true, mode: 'record', value: 100 },
    toy: { power: false, mode: 'manual', value: 30 }
  });
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'info',
      title: '급식 완료',
      message: '루나가 저녁 식사를 완료했습니다.',
      time: '5분 전',
      device: 'feeder'
    },
    {
      id: 2,
      type: 'warning',
      title: '화장실 청소 필요',
      message: '자동 화장실이 70% 차있습니다.',
      time: '15분 전',
      device: 'litter'
    },
    {
      id: 3,
      type: 'success',
      title: '온도 조절 완료',
      message: '실내 온도가 22°C로 조정되었습니다.',
      time: '30분 전',
      device: 'climate'
    }
  ]);
  const [currentTemp, setCurrentTemp] = useState(22);
  const [humidity, setHumidity] = useState(55);
  const [airQuality, setAirQuality] = useState(85);

  const iotDevices = [
    {
      id: 'feeder',
      name: '스마트 급식기',
      description: '자동 급식 및 식사량 관리',
      icon: 'ri-restaurant-line',
      status: 'online',
      features: ['자동 급식', '식사량 측정', '스케줄 관리', '원격 제어']
    },
    {
      id: 'litter',
      name: '자동 화장실',
      description: '자동 청소 및 건강 모니터링',
      icon: 'ri-home-4-line',
      status: 'online',
      features: ['자동 청소', '건강 분석', '냄새 제거', '사용량 추적']
    },
    {
      id: 'climate',
      name: '온도 조절기',
      description: '최적 환경 온도 자동 조절',
      icon: 'ri-temp-hot-line',
      status: 'online',
      features: ['온도 조절', '습도 관리', '공기질 측정', '에너지 절약']
    },
    {
      id: 'tracker',
      name: '활동량 측정기',
      description: '일일 활동량 및 운동량 추적',
      icon: 'ri-run-line',
      status: 'online',
      features: ['활동량 측정', '수면 패턴', '칼로리 소모', '건강 리포트']
    },
    {
      id: 'camera',
      name: '모니터링 카메라',
      description: '24시간 실시간 모니터링',
      icon: 'ri-camera-line',
      status: 'online',
      features: ['실시간 스트리밍', '움직임 감지', '양방향 음성', '클라우드 저장']
    },
    {
      id: 'toy',
      name: '스마트 장난감',
      description: '자동 놀이 및 스트레스 해소',
      icon: 'ri-gamepad-line',
      status: 'online',
      features: ['자동 놀이', '레이저 포인터', '소리 자극', '원격 조작']
    }
  ];

  const rankings = [
    { rank: 1, catName: '루나', owner: '최집사', activity: 2847, health: 95, devices: 6 },
    { rank: 2, catName: '모모', owner: '정집사', activity: 2756, health: 93, devices: 5 },
    { rank: 3, catName: '코코', owner: '강집사', activity: 2689, health: 91, devices: 6 },
    { rank: 4, catName: '치즈', owner: '윤집사', activity: 2634, health: 89, devices: 4 },
    { rank: 5, catName: '망고', owner: '임집사', activity: 2578, health: 87, devices: 5 },
    { rank: 6, catName: '나비', owner: '김집사', activity: 2523, health: 85, devices: 3 },
    { rank: 7, catName: '호랑이', owner: '이집사', activity: 2467, health: 83, devices: 4 },
    { rank: 8, catName: '까망이', owner: '박집사', activity: 2412, health: 81, devices: 3 },
    { rank: 9, catName: '하양이', owner: '송집사', activity: 2356, health: 79, devices: 4 },
    { rank: 10, catName: '회색이', owner: '조집사', activity: 2301, health: 77, devices: 3 }
  ];

  const deviceData = [
    { device: '급식기', usage: 95, efficiency: 98 },
    { device: '화장실', usage: 87, efficiency: 94 },
    { device: '온도조절', usage: 92, efficiency: 96 },
    { device: '활동측정', usage: 89, efficiency: 91 },
    { device: '카메라', usage: 96, efficiency: 99 },
    { device: '장난감', usage: 78, efficiency: 85 }
  ];

  const weeklyStats = [
    { day: '월', activity: 2400, health: 88 },
    { day: '화', activity: 2650, health: 90 },
    { day: '수', activity: 2800, health: 92 },
    { day: '목', activity: 2550, health: 89 },
    { day: '금', activity: 2750, health: 91 },
    { day: '토', activity: 2900, health: 94 },
    { day: '일', activity: 2600, health: 87 }
  ];

  // 실시간 환경 데이터 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemp(prev => Math.min(30, Math.max(18, prev + (Math.random() - 0.5) * 0.5)));
      setHumidity(prev => Math.min(80, Math.max(30, prev + (Math.random() - 0.5) * 2)));
      setAirQuality(prev => Math.min(100, Math.max(40, prev + (Math.random() - 0.5) * 3)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 디바이스 제어 함수
  const toggleDevicePower = (deviceId: string) => {
    setDeviceControls(prev => ({
      ...prev,
      [deviceId]: { ...prev[deviceId], power: !prev[deviceId].power }
    }));

    const device = iotDevices.find(d => d.id === deviceId);
    const newNotification: Notification = {
      id: Date.now(),
      type: 'success',
      title: `${device?.name} ${deviceControls[deviceId].power ? '꺼짐' : '켜짐'}`,
      message: `${device?.name}이(가) ${deviceControls[deviceId].power ? '비활성화' : '활성화'}되었습니다.`,
      time: '방금 전',
      device: deviceId
    };
    setNotifications(prev => [newNotification, ...prev].slice(0, 10));
  };

  const updateDeviceValue = (deviceId: string, value: number) => {
    setDeviceControls(prev => ({
      ...prev,
      [deviceId]: { ...prev[deviceId], value }
    }));
  };

  const updateDeviceMode = (deviceId: string, mode: string) => {
    setDeviceControls(prev => ({
      ...prev,
      [deviceId]: { ...prev[deviceId], mode }
    }));
  };

  const openDeviceControl = (deviceId: string) => {
    setActiveDevice(deviceId);
    setShowControlModal(true);
  };

  const getDeviceModes = (deviceId: string) => {
    const modes: Record<string, string[]> = {
      feeder: ['auto', 'manual', 'schedule'],
      litter: ['auto', 'manual'],
      climate: ['cool', 'heat', 'auto'],
      tracker: ['active', 'sleep', 'play'],
      camera: ['record', 'live', 'motion'],
      toy: ['manual', 'auto', 'random']
    };
    return modes[deviceId] || ['auto', 'manual'];
  };

  const getNotificationColor = (type: string) => {
    const colors = {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    };
    return colors[type as keyof typeof colors] || colors.info;
  };

  const getNotificationIcon = (type: string) => {
    const icons = {
      info: 'ri-information-line',
      warning: 'ri-error-warning-line',
      success: 'ri-checkbox-circle-line',
      error: 'ri-close-circle-line'
    };
    return icons[type as keyof typeof icons] || icons.info;
  };

  return (
    <div className="min-h-screen space-bg">
      <Header />

      {/* 알림 버튼 (고정) */}
      <button
        onClick={() => setShowNotifications(true)}
        className="fixed top-24 right-8 bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-green-700 transition-all z-40 flex items-center justify-center"
      >
        <i className="ri-notification-3-line text-2xl"></i>
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
            {notifications.length}
          </span>
        )}
      </button>

      {/* 실시간 환경 모니터 (고정) */}
      <div className="fixed bottom-8 left-8 bg-white rounded-2xl shadow-2xl p-4 z-40 min-w-[200px]">
        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i className="ri-dashboard-line text-green-600"></i>
          실시간 환경
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">온도</span>
            <span className="text-sm font-bold text-gray-900">{currentTemp.toFixed(1)}°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">습도</span>
            <span className="text-sm font-bold text-gray-900">{humidity.toFixed(0)}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">공기질</span>
            <span className="text-sm font-bold text-green-600">{airQuality.toFixed(0)}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Smart%20home%20IoT%20devices%20for%20cats%2C%20futuristic%20pet%20care%20technology%2C%20connected%20smart%20feeders%20and%20litter%20boxes%2C%20modern%20home%20automation%20with%20green%20and%20blue%20lighting%2C%20high-tech%20pet%20monitoring%20systems&width=1200&height=600&seq=iot-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
            뮤틀러 IoT
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            스마트 가구와 연결된 종합 고양이 케어 시스템
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors whitespace-nowrap">
            IoT 연결하기
          </button>
        </div>
      </section>

      {/* IoT Devices Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            스마트 IoT 기기
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iotDevices.map((device) => (
              <div
                key={device.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 ${
                  activeDevice === device.id ? 'border-green-500' : 'border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    deviceControls[device.id]?.power ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    <i className={`${device.icon} text-xl text-white`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      deviceControls[device.id]?.power ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {deviceControls[device.id]?.power ? '켜짐' : '꺼짐'}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{device.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{device.description}</p>
                <div className="space-y-2 mb-4">
                  {device.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <i className="ri-check-line text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 제어 버튼들 */}
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleDevicePower(device.id)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                      deviceControls[device.id]?.power
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    <i className={`ri-${deviceControls[device.id]?.power ? 'stop' : 'play'}-line mr-1`}></i>
                    {deviceControls[device.id]?.power ? '끄기' : '켜기'}
                  </button>
                  <button
                    onClick={() => openDeviceControl(device.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <i className="ri-settings-3-line"></i>
                  </button>
                  {device.id === 'camera' && (
                    <button
                      onClick={() => {
                        setActiveDevice(device.id);
                        setShowCameraModal(true);
                      }}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      <i className="ri-eye-line"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings Dashboard */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            IoT 랭킹 대시보드
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Top Rankings */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">이번 주 활동량 랭킹</h3>
              <div className="space-y-4">
                {rankings.slice(0, 5).map((cat) => (
                  <div key={cat.rank} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 ${
                        cat.rank === 1 ? 'bg-yellow-500' : 
                        cat.rank === 2 ? 'bg-gray-400' : 
                        cat.rank === 3 ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {cat.rank}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{cat.catName}</h4>
                        <p className="text-xs text-gray-500">{cat.owner} • {cat.devices}개 기기</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{cat.activity.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">건강도 {cat.health}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Usage Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">기기별 사용률</h3>
              <div className="space-y-4">
                {deviceData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.device}</span>
                      <span className="text-gray-800 font-medium">{item.usage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${item.usage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Activity Chart */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            주간 활동 통계
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-end justify-between h-64 mb-4">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="bg-gradient-to-t from-green-500 to-blue-500 rounded-t w-12 mb-2"
                    style={{ height: `${(stat.activity / 3000) * 200}px` }}
                  />
                  <span className="text-sm font-medium text-gray-600">{stat.day}</span>
                  <span className="text-xs text-gray-500">{stat.activity}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600">일일 평균 활동량</p>
              <p className="text-2xl font-bold text-green-600">2,664점</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Rankings Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            전체 랭킹
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">순위</th>
                    <th className="px-6 py-4 text-left">고양이</th>
                    <th className="px-6 py-4 text-left">집사</th>
                    <th className="px-6 py-4 text-center">활동량</th>
                    <th className="px-6 py-4 text-center">건강도</th>
                    <th className="px-6 py-4 text-center">연결기기</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((cat) => (
                    <tr key={cat.rank} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          cat.rank === 1 ? 'bg-yellow-500' : 
                          cat.rank === 2 ? 'bg-gray-400' : 
                          cat.rank === 3 ? 'bg-orange-500' : 'bg-green-500'
                        }`}>
                          {cat.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800">{cat.catName}</td>
                      <td className="px-6 py-4 text-gray-600">{cat.owner}</td>
                      <td className="px-6 py-4 text-center font-bold text-green-600">
                        {cat.activity.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                              style={{ width: `${cat.health}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{cat.health}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{cat.devices}개</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 디바이스 제어 모달 */}
      {showControlModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <i className={`${iotDevices.find(d => d.id === activeDevice)?.icon}`}></i>
                {iotDevices.find(d => d.id === activeDevice)?.name} 제어
              </h2>
              <button
                onClick={() => setShowControlModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="space-y-6">
              {/* 전원 스위치 */}
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">전원</span>
                <button
                  onClick={() => toggleDevicePower(activeDevice)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    deviceControls[activeDevice]?.power ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    deviceControls[activeDevice]?.power ? 'translate-x-7' : 'translate-x-1'
                  }`}></div>
                </button>
              </div>

              {/* 모드 선택 */}
              <div>
                <label className="text-gray-700 font-medium mb-2 block">작동 모드</label>
                <div className="grid grid-cols-3 gap-2">
                  {getDeviceModes(activeDevice).map(mode => (
                    <button
                      key={mode}
                      onClick={() => updateDeviceMode(activeDevice, mode)}
                      className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                        deviceControls[activeDevice]?.mode === mode
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* 강도/레벨 조절 */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-gray-700 font-medium">
                    {activeDevice === 'climate' ? '온도' : activeDevice === 'feeder' ? '급식량' : '강도'}
                  </label>
                  <span className="text-green-600 font-bold">
                    {deviceControls[activeDevice]?.value}
                    {activeDevice === 'climate' ? '°C' : '%'}
                  </span>
                </div>
                <input
                  type="range"
                  min={activeDevice === 'climate' ? '18' : '0'}
                  max={activeDevice === 'climate' ? '30' : '100'}
                  value={deviceControls[activeDevice]?.value || 0}
                  onChange={(e) => updateDeviceValue(activeDevice, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>

              {/* 상태 정보 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-green-800">
                  <i className="ri-information-line"></i>
                  <span>
                    현재 {iotDevices.find(d => d.id === activeDevice)?.name}이(가)
                    {deviceControls[activeDevice]?.mode} 모드로 작동중입니다.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowControlModal(false)}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                저장 및 닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 알림 센터 모달 */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <i className="ri-notification-3-line"></i>
                알림 센터
              </h2>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {notifications.length === 0 ? (
                <div className="text-center py-12">
                  <i className="ri-notification-off-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 text-lg">새로운 알림이 없습니다</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {notifications.map(notif => (
                    <div
                      key={notif.id}
                      className={`border rounded-lg p-4 ${getNotificationColor(notif.type)}`}
                    >
                      <div className="flex items-start gap-3">
                        <i className={`${getNotificationIcon(notif.type)} text-2xl`}></i>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold">{notif.title}</h3>
                            <span className="text-xs opacity-75">{notif.time}</span>
                          </div>
                          <p className="text-sm">{notif.message}</p>
                          <div className="mt-2 text-xs opacity-75 flex items-center gap-1">
                            <i className="ri-device-line"></i>
                            {iotDevices.find(d => d.id === notif.device)?.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {notifications.length > 0 && (
              <div className="border-t p-4">
                <button
                  onClick={() => setNotifications([])}
                  className="w-full py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  모든 알림 지우기
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 라이브 카메라 모달 */}
      {showCameraModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-5xl w-full overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-800">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <i className="ri-camera-line text-green-500"></i>
                라이브 카메라
                <span className="text-xs bg-red-500 px-2 py-1 rounded-full animate-pulse">LIVE</span>
              </h2>
              <button
                onClick={() => setShowCameraModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* 카메라 뷰 */}
            <div className="relative aspect-video bg-gray-800">
              <img
                src="https://readdy.ai/api/search-image?query=cute%20cat%20sleeping%20on%20cozy%20bed%20home%20security%20camera%20view%20night%20vision%20green%20tint&width=1280&height=720&seq=cam-live&orientation=landscape"
                alt="Live Camera Feed"
                className="w-full h-full object-cover"
              />

              {/* 오버레이 정보 */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  REC {new Date().toLocaleTimeString('ko-KR')}
                </div>
              </div>

              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                  고양이 감지: 1마리
                </div>
                <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                  활동 상태: 수면
                </div>
              </div>
            </div>

            {/* 제어 패널 */}
            <div className="bg-gray-800 p-4">
              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2">
                  <i className="ri-camera-line"></i>
                  스냅샷
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center gap-2">
                  <i className="ri-record-circle-line"></i>
                  녹화 시작
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2">
                  <i className="ri-volume-up-line"></i>
                  음성 전달
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
                  <i className="ri-gamepad-line"></i>
                  장난감 작동
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default IoTPage;
