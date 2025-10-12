
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const AcademyCreate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // 기본 정보
    title: '',
    category: '',
    level: '',
    type: '',
    duration: '',
    price: '',
    description: '',
    
    // 강사 정보
    instructorName: '',
    instructorBio: '',
    instructorExperience: '',
    instructorCertification: '',
    
    // 커리큘럼
    curriculum: [{ week: 1, title: '', content: '', duration: '' }],
    
    // 추가 정보
    materials: '',
    requirements: '',
    targetAudience: '',
    learningOutcomes: ''
  });

  const categories = [
    '고양이 행동학', '건강관리', '그루밍', '사진촬영', 
    '창작활동', '사업운영', '영양학', '의료', '교육'
  ];
  
  const levels = ['초급', '중급', '고급', '전문가'];
  const types = ['온라인', '오프라인', '하이브리드'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addCurriculumWeek = () => {
    setFormData(prev => ({
      ...prev,
      curriculum: [...prev.curriculum, { 
        week: prev.curriculum.length + 1, 
        title: '', 
        content: '', 
        duration: '' 
      }]
    }));
  };

  const updateCurriculum = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('강의 개설 신청:', formData);
    alert('강의 개설 신청이 완료되었습니다. 검토 후 연락드리겠습니다.');
  };

  return (
    <div className="min-h-screen space-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20content%20creator%20preparing%20online%20course%2C%20modern%20studio%20setup%20for%20recording%20educational%20videos%2C%20futuristic%20teaching%20environment%20with%20purple%20lighting%2C%20digital%20education%20platform&width=1200&height=600&seq=create-course-hero&orientation=landscape')`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white" style={{textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3)'}}>강의 개설 신청</h1>
          <p className="text-xl mb-8 leading-relaxed text-white" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>
            고양이 관련 전문 지식을 많은 집사들과 나누어보세요
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-600">
              {currentStep === 1 && '기본 정보'}
              {currentStep === 2 && '강사 정보'}
              {currentStep === 3 && '커리큘럼'}
              {currentStep === 4 && '추가 정보'}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Step 1: 기본 정보 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">기본 정보</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    강의 제목 *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="예: 고양이 행동 심리학 마스터 클래스"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      카테고리 *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    >
                      <option value="">선택하세요</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      난이도 *
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => handleInputChange('level', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    >
                      <option value="">선택하세요</option>
                      {levels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      수업 형태 *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                    >
                      <option value="">선택하세요</option>
                      {types.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      수업 기간 *
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="예: 8주, 12시간"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      수강료 (원) *
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="예: 180000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    강의 설명 *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="강의의 목적, 내용, 특징 등을 자세히 설명해주세요"
                    maxLength={500}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.description.length}/500자
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: 강사 정보 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">강사 정보</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    강사명 *
                  </label>
                  <input
                    type="text"
                    value={formData.instructorName}
                    onChange={(e) => handleInputChange('instructorName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="실명 또는 활동명"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    강사 소개 *
                  </label>
                  <textarea
                    value={formData.instructorBio}
                    onChange={(e) => handleInputChange('instructorBio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="강사의 배경, 전문 분야, 특징 등을 소개해주세요"
                    maxLength={500}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.instructorBio.length}/500자
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    경력 사항 *
                  </label>
                  <textarea
                    value={formData.instructorExperience}
                    onChange={(e) => handleInputChange('instructorExperience', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="관련 경력, 프로젝트, 성과 등을 구체적으로 작성해주세요"
                    maxLength={500}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.instructorExperience.length}/500자
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    자격증 및 인증
                  </label>
                  <textarea
                    value={formData.instructorCertification}
                    onChange={(e) => handleInputChange('instructorCertification', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="관련 자격증, 인증서, 수상 경력 등 (선택사항)"
                    maxLength={300}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.instructorCertification.length}/300자
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: 커리큘럼 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">커리큘럼</h2>
                  <button
                    onClick={addCurriculumWeek}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-add-line mr-2"></i>
                    주차 추가
                  </button>
                </div>
                
                <div className="space-y-4">
                  {formData.curriculum.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">{week.week}주차</h3>
                        {formData.curriculum.length > 1 && (
                          <button
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                curriculum: prev.curriculum.filter((_, i) => i !== index)
                              }));
                            }}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            주제
                          </label>
                          <input
                            type="text"
                            value={week.title}
                            onChange={(e) => updateCurriculum(index, 'title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="예: 고양이 기본 행동 이해하기"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            시간
                          </label>
                          <input
                            type="text"
                            value={week.duration}
                            onChange={(e) => updateCurriculum(index, 'duration', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="예: 2시간"
                          />
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          내용
                        </label>
                        <textarea
                          value={week.content}
                          onChange={(e) => updateCurriculum(index, 'content', e.target.value)}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="해당 주차에서 다룰 구체적인 내용을 작성해주세요"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: 추가 정보 */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">추가 정보</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    준비물 및 교재
                  </label>
                  <textarea
                    value={formData.materials}
                    onChange={(e) => handleInputChange('materials', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="수강생이 준비해야 할 준비물이나 교재가 있다면 작성해주세요"
                    maxLength={300}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.materials.length}/300자
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    수강 요건
                  </label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="수강을 위한 선수 지식이나 조건이 있다면 작성해주세요"
                    maxLength={300}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.requirements.length}/300자
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    대상 수강생
                  </label>
                  <textarea
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="어떤 분들에게 추천하는 강의인지 작성해주세요"
                    maxLength={300}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.targetAudience.length}/300자
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    학습 목표 및 성과
                  </label>
                  <textarea
                    value={formData.learningOutcomes}
                    onChange={(e) => handleInputChange('learningOutcomes', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="수강 후 얻을 수 있는 지식, 기술, 성과 등을 구체적으로 작성해주세요"
                    maxLength={500}
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {formData.learningOutcomes.length}/500자
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                이전 단계
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all whitespace-nowrap cursor-pointer"
                >
                  다음 단계
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all whitespace-nowrap cursor-pointer"
                >
                  신청 완료
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademyCreate;
