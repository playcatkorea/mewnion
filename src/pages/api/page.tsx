import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function API() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative space-bg pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">API 문서</h1>
            <p className="text-xl text-white">뮤니온 API로 강력한 펫테크 서비스를 구축하세요</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* API Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">API 개요</h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Base URL</h3>
                  <code className="block bg-gray-100 p-4 rounded text-purple-600">
                    https://api.mewnion.com/v1
                  </code>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">인증</h3>
                  <p className="text-gray-600 mb-2">모든 API 요청은 Bearer 토큰 인증이 필요합니다:</p>
                  <code className="block bg-gray-100 p-4 rounded text-purple-600">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rate Limiting</h3>
                  <p className="text-gray-600">API 호출은 시간당 1,000회로 제한됩니다.</p>
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">주요 엔드포인트</h2>
              <div className="space-y-6">
                {/* Pet Profile */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded font-semibold text-sm">GET</span>
                    <code className="text-lg text-gray-700">/pets/:id</code>
                  </div>
                  <p className="text-gray-600 mb-4">반려동물 프로필 정보를 조회합니다.</p>
                  <div className="bg-gray-900 rounded p-4 text-white overflow-x-auto">
                    <pre>{`{
  "id": "pet123",
  "name": "나비",
  "species": "cat",
  "breed": "코리안숏헤어",
  "age": 3,
  "weight": 4.2,
  "owner_id": "user456"
}`}</pre>
                  </div>
                </div>

                {/* Health Records */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-semibold text-sm">POST</span>
                    <code className="text-lg text-gray-700">/pets/:id/health-records</code>
                  </div>
                  <p className="text-gray-600 mb-4">건강 기록을 추가합니다.</p>
                  <div className="bg-gray-900 rounded p-4 text-white overflow-x-auto">
                    <pre>{`{
  "type": "vaccination",
  "date": "2025-10-12",
  "description": "광견병 예방접종",
  "veterinarian": "김동물 수의사",
  "notes": "다음 접종일: 2026-10-12"
}`}</pre>
                  </div>
                </div>

                {/* IoT Data */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded font-semibold text-sm">GET</span>
                    <code className="text-lg text-gray-700">/iot/devices/:deviceId/data</code>
                  </div>
                  <p className="text-gray-600 mb-4">IoT 기기의 실시간 데이터를 조회합니다.</p>
                  <div className="bg-gray-900 rounded p-4 text-white overflow-x-auto">
                    <pre>{`{
  "device_id": "device789",
  "timestamp": "2025-10-12T10:30:00Z",
  "temperature": 22.5,
  "humidity": 45,
  "activity_level": "moderate",
  "location": { "lat": 37.5665, "lng": 126.9780 }
}`}</pre>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-semibold text-sm">POST</span>
                    <code className="text-lg text-gray-700">/ai/analyze-behavior</code>
                  </div>
                  <p className="text-gray-600 mb-4">AI 기반 행동 분석을 요청합니다.</p>
                  <div className="bg-gray-900 rounded p-4 text-white overflow-x-auto">
                    <pre>{`{
  "pet_id": "pet123",
  "video_url": "https://...",
  "analysis_type": "behavior",
  "options": {
    "detect_anomalies": true,
    "generate_insights": true
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Codes */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">에러 코드</h2>
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">코드</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">400</td>
                    <td className="px-6 py-4 text-sm text-gray-600">잘못된 요청</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">401</td>
                    <td className="px-6 py-4 text-sm text-gray-600">인증 실패</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">403</td>
                    <td className="px-6 py-4 text-sm text-gray-600">권한 없음</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">404</td>
                    <td className="px-6 py-4 text-sm text-gray-600">리소스를 찾을 수 없음</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">429</td>
                    <td className="px-6 py-4 text-sm text-gray-600">요청 한도 초과</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">500</td>
                    <td className="px-6 py-4 text-sm text-gray-600">서버 오류</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Support */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">API 지원</h2>
              <p className="text-xl mb-8">API 사용에 도움이 필요하신가요?</p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                개발자 포럼 방문
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
