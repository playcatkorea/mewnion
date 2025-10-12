
import { useRef, useState } from 'react';
import { goToRoute } from '../../utils/navigation';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

interface AnalysisResult {
  success: boolean;
  tool: string;
  data: {
    score: number;
    result: string;
    details: string[];
    recommendations: string[];
  };
}

const AIAnalysisPage = () => {
  const [selectedTool, setSelectedTool] = useState('health');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }
    const fileArray = Array.from(files);
    setUploadedFiles(prev => [...prev, ...fileArray]);
  };

  // AI 분석 시뮬레이션
  const performAnalysis = async () => {
    if (uploadedFiles.length === 0) {
      alert('분석할 파일을 먼저 업로드해주세요!');
      return;
    }

    setAnalyzing(true);

    // 시뮬레이션: 2-3초 대기
    await new Promise(resolve => setTimeout(resolve, 2500));

    // 선택된 도구에 따라 다른 분석 결과 생성
    const results: Record<string, AnalysisResult> = {
      health: {
        success: true,
        tool: '건강 상태 분석',
        data: {
          score: 92,
          result: '양호',
          details: [
            '눈이 맑고 깨끗합니다',
            '털에 윤기가 있고 건강해 보입니다',
            '체형이 적절하며 비만이나 저체중이 아닙니다',
            '호흡이 규칙적이고 안정적입니다'
          ],
          recommendations: [
            '정기적인 건강 검진을 권장합니다',
            '현재 식단을 유지하세요',
            '충분한 물 섭취를 확인해주세요'
          ]
        }
      },
      emotion: {
        success: true,
        tool: '감정 상태 분석',
        data: {
          score: 88,
          result: '행복',
          details: [
            '귀가 앞쪽을 향하고 있어 긍정적인 상태입니다',
            '꼬리가 편안하게 위로 올라가 있습니다',
            '눈이 반쯤 감겨있어 편안함을 나타냅니다',
            '전체적으로 이완된 자세입니다'
          ],
          recommendations: [
            '현재 환경이 고양이에게 편안합니다',
            '스트레스 요인이 거의 없습니다',
            '충분한 놀이 시간을 제공하세요'
          ]
        }
      },
      breed: {
        success: true,
        tool: '품종 식별',
        data: {
          score: 95,
          result: '코리안 숏헤어',
          details: [
            '한국 토종 고양이의 전형적인 특징',
            '중간 크기의 체형',
            '짧고 부드러운 털',
            '둥근 얼굴형과 큰 눈'
          ],
          recommendations: [
            '한국 기후에 잘 적응된 품종입니다',
            '특별한 관리가 필요하지 않습니다',
            '일반적인 고양이 케어를 따르세요'
          ]
        }
      },
      age: {
        success: true,
        tool: '나이 추정',
        data: {
          score: 87,
          result: '3세 (성묘)',
          details: [
            '이빨 상태가 건강합니다',
            '눈이 맑고 투명합니다',
            '근육 발달이 양호합니다',
            '털 상태가 윤기있습니다'
          ],
          recommendations: [
            '성묘 전용 사료를 급여하세요',
            '활발한 놀이를 즐길 나이입니다',
            '연 1-2회 건강 검진을 권장합니다'
          ]
        }
      },
      behavior: {
        success: true,
        tool: '행동 패턴 분석',
        data: {
          score: 90,
          result: '정상',
          details: [
            '활동량이 적절합니다',
            '수면 패턴이 규칙적입니다',
            '식사 시간이 일정합니다',
            '사회성이 양호합니다'
          ],
          recommendations: [
            '현재 생활 패턴을 유지하세요',
            '규칙적인 놀이 시간을 가지세요',
            '충분한 휴식 공간을 제공하세요'
          ]
        }
      },
      nutrition: {
        success: true,
        tool: '영양 상태 분석',
        data: {
          score: 85,
          result: '양호',
          details: [
            '체형이 표준 범위입니다',
            '털 상태가 건강합니다',
            '활동성이 양호합니다',
            '피부 상태가 좋습니다'
          ],
          recommendations: [
            '현재 식단을 유지하세요',
            '간식은 하루 칼로리의 10% 이내로',
            '신선한 물을 항상 제공하세요'
          ]
        }
      }
    };

    setAnalysisResult(results[selectedTool]);
    setAnalyzing(false);
    setShowResultModal(true);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const triggerImageSelect = () => {
    imageInputRef.current?.click();
  };

  const triggerVideoSelect = () => {
    videoInputRef.current?.click();
  };

  const analysisTools = [
    {
      id: 'health',
      title: '건강 상태 분석',
      description: '고양이의 눈, 코, 털 상태를 분석하여 건강 상태를 진단합니다',
      icon: 'ri-heart-pulse-line',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'emotion',
      title: '감정 상태 분석',
      description: '표정과 자세를 통해 고양이의 현재 감정 상태를 파악합니다',
      icon: 'ri-emotion-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'breed',
      title: '품종 식별',
      description: '고양이의 외형적 특징을 분석하여 품종을 식별합니다',
      icon: 'ri-search-eye-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'age',
      title: '나이 추정',
      description: '얼굴과 몸의 특징을 통해 고양이의 나이를 추정합니다',
      icon: 'ri-time-line',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'behavior',
      title: '행동 패턴 분석',
      description: '영상을 통해 고양이의 행동 패턴과 습관을 분석합니다',
      icon: 'ri-play-circle-line',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'nutrition',
      title: '영양 상태 분석',
      description: '체형과 털 상태를 통해 영양 상태와 식단을 분석합니다',
      icon: 'ri-restaurant-line',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const recentAnalyses = [
    {
      id: 1,
      catName: '나비',
      owner: '김집사',
      type: '건강 상태',
      result: '양호',
      score: 92,
      date: '2024-01-15 14:30',
      details: '전반적으로 건강한 상태입니다. 눈이 맑고 털에 윤기가 있어요.'
    },
    {
      id: 2,
      catName: '호랑이',
      owner: '이집사',
      type: '감정 상태',
      result: '행복',
      score: 88,
      date: '2024-01-15 13:45',
      details: '매우 편안하고 행복한 상태입니다. 스트레스 지수가 낮아요.'
    },
    {
      id: 3,
      catName: '까망이',
      owner: '박집사',
      type: '품종 식별',
      result: '코리안 숏헤어',
      score: 95,
      date: '2024-01-15 12:20',
      details: '한국 토종 고양이의 특징을 잘 보여주고 있습니다.'
    },
    {
      id: 4,
      catName: '루나',
      owner: '최집사',
      type: '나이 추정',
      result: '3세',
      score: 87,
      date: '2024-01-15 11:15',
      details: '성묘 초기 단계로 추정됩니다. 활발한 시기예요.'
    },
    {
      id: 5,
      catName: '모모',
      owner: '정집사',
      type: '행동 패턴',
      result: '정상',
      score: 90,
      date: '2024-01-15 10:30',
      details: '건강한 행동 패턴을 보이고 있습니다. 충분한 활동량이에요.'
    }
  ];

  const tips = [
    {
      category: '건강 관리',
      title: '정기적인 건강 체크',
      content: 'AI 분석을 통해 주 1회 이상 건강 상태를 확인해보세요.',
      icon: 'ri-heart-line'
    },
    {
      category: '감정 케어',
      title: '스트레스 관리',
      content: '고양이의 감정 변화를 주의 깊게 관찰하고 스트레스 요인을 제거해주세요.',
      icon: 'ri-emotion-happy-line'
    },
    {
      category: '영양 관리',
      title: '적절한 식단',
      content: '나이와 건강 상태에 맞는 적절한 사료와 간식을 제공해주세요.',
      icon: 'ri-restaurant-2-line'
    },
    {
      category: '운동 관리',
      title: '충분한 활동',
      content: '매일 충분한 놀이 시간을 통해 건강한 활동량을 유지해주세요.',
      icon: 'ri-run-line'
    }
  ];

  return (
    <div className="min-h-screen space-bg">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Advanced%20AI%20analysis%20interface%20with%20cat%20health%20scanning%20technology%2C%20holographic%20displays%20showing%20medical%20data%2C%20futuristic%20laboratory%20with%20blue%20and%20purple%20lighting%2C%20high-tech%20equipment%20analyzing%20cute%20cats&width=1200&height=600&seq=ai-analysis-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(96, 165, 250, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>
            AI 분석 툴
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            첨단 인공지능 기술로 고양이의 건강과 행복을 분석합니다
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
            onClick={goToRoute('/login?next=ai-analysis')}
          >
            분석 시작하기
          </button>
        </div>
      </section>

      {/* Analysis Tools Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            AI 분석 도구
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analysisTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${
                  selectedTool === tool.id ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mb-4`}>
                  <i className={`${tool.icon} text-2xl text-white`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                <button
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
                  onClick={goToRoute(`/login?next=ai-analysis&tool=${tool.id}`)}
                >
                  분석하기 →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            사진/영상 업로드
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-dashed border-blue-300">
            <div className="text-center">
              <i className="ri-upload-cloud-2-line text-6xl text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                고양이 사진이나 영상을 업로드하세요
              </h3>
              <p className="text-gray-600 mb-6">
                JPG, PNG, MP4 파일을 지원합니다 (최대 10MB)
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  onClick={triggerImageSelect}
                >
                  <i className="ri-image-line mr-2" />
                  사진 선택
                </button>
                <button
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"
                  onClick={triggerVideoSelect}
                >
                  <i className="ri-video-line mr-2" />
                  영상 선택
                </button>
                <button
                  className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                  onClick={goToRoute('/mewtler')}
                >
                  <i className="ri-camera-line mr-2" />
                  카메라 촬영
                </button>
              </div>
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(event) => handleFileSelect(event.target.files)}
              />
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={(event) => handleFileSelect(event.target.files)}
              />
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <p className="font-medium mb-3 text-gray-800">선택한 파일 ({uploadedFiles.length})</p>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border">
                        <div className="flex items-center gap-2">
                          <i className={`${file.type.startsWith('image') ? 'ri-image-line' : 'ri-video-line'} text-blue-500 text-xl`} />
                          <span className="text-sm text-gray-800">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <i className="ri-close-line text-xl"></i>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* 분석 버튼 */}
                  <button
                    onClick={performAnalysis}
                    disabled={analyzing}
                    className={`mt-4 w-full py-4 rounded-lg font-bold text-lg transition-all ${
                      analyzing
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                  >
                    {analyzing ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        AI 분석 중...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-flashlight-line"></i>
                        {analysisTools.find(t => t.id === selectedTool)?.title} 시작
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 분석 결과 모달 */}
      {showResultModal && analysisResult && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <i className="ri-sparkling-line"></i>
                  AI 분석 완료
                </h2>
                <button
                  onClick={() => setShowResultModal(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-white/90 text-sm mb-2">분석 도구</p>
                  <p className="text-xl font-bold">{analysisResult.tool}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/90 text-sm mb-2">정확도</p>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold">{analysisResult.data.score}</div>
                    <div className="text-lg">%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 분석 결과 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* 주요 결과 */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-check-double-line text-green-600"></i>
                  분석 결과
                </h3>
                <p className="text-2xl font-bold text-blue-600">{analysisResult.data.result}</p>
              </div>

              {/* 상세 분석 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-file-list-3-line text-blue-600"></i>
                  상세 분석
                </h3>
                <div className="space-y-3">
                  {analysisResult.data.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 권장사항 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-yellow-500"></i>
                  권장사항
                </h3>
                <div className="space-y-3">
                  {analysisResult.data.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <i className="ri-arrow-right-circle-fill text-yellow-600 text-xl flex-shrink-0"></i>
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 액션 버튼 */}
            <div className="border-t p-6 bg-gray-50">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowResultModal(false);
                    setUploadedFiles([]);
                    setAnalysisResult(null);
                  }}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  새로운 분석하기
                </button>
                <button
                  onClick={() => {
                    alert('분석 결과가 저장되었습니다!');
                    setShowResultModal(false);
                  }}
                  className="flex-1 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  결과 저장하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Analyses */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            최근 분석 결과
          </h2>
          <div className="space-y-4">
            {recentAnalyses.map((analysis) => (
              <div key={analysis.id} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{analysis.catName[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{analysis.catName}</h3>
                      <p className="text-sm text-gray-500">{analysis.owner}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">{analysis.date}</span>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-600 mr-2">정확도</span>
                      <span className="text-lg font-bold text-blue-600">{analysis.score}%</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">분석 유형</span>
                    <p className="font-medium text-gray-800">{analysis.type}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">결과</span>
                    <p className="font-medium text-green-600">{analysis.result}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">상세 내용</span>
                    <p className="text-sm text-gray-600">{analysis.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            AI 분석 활용 팁
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className={`${tip.icon} text-xl text-white`} />
                </div>
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                  {tip.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAnalysisPage;



