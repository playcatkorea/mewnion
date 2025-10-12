
import { useState } from 'react';
import Button from '../../../components/base/Button';

interface CreatePostModalProps {
  onClose: () => void;
}

export default function CreatePostModal({ onClose }: CreatePostModalProps) {
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [postType, setPostType] = useState('general');

  const postTypes = [
    { id: 'general', label: '일반', icon: 'ri-chat-3-line' },
    { id: 'photo', label: '사진', icon: 'ri-image-line' },
    { id: 'question', label: '질문', icon: 'ri-question-line' },
    { id: 'tip', label: '팁', icon: 'ri-lightbulb-line' },
    { id: 'urgent', label: '긴급', icon: 'ri-alarm-warning-line' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you would upload these files and get URLs
      // For demo purposes, we'll use placeholder URLs
      const newImages = Array.from(files).map((_, index) => 
        `https://readdy.ai/api/search-image?query=User%20uploaded%20pet%20photo%20placeholder%2C%20cute%20cat%20or%20dog%2C%20warm%20lighting&width=400&height=300&seq=upload-${Date.now()}-${index}&orientation=landscape`
      );
      setSelectedImages(prev => [...prev, ...newImages].slice(0, 4)); // Max 4 images
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (postContent.trim()) {
      // In a real app, you would submit the post to your backend
      console.log('Submitting post:', { postContent, selectedImages, postType });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">새 게시물 작성</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <i className="ri-close-line text-xl text-gray-500"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-140px)] overflow-y-auto">
          {/* Post Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">게시물 유형</label>
            <div className="flex flex-wrap gap-2">
              {postTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setPostType(type.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    postType === type.id
                      ? 'bg-[#f6b73c] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${type.icon} mr-2`}></i>
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">내용</label>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="무엇을 공유하고 싶으신가요? 반려동물과의 소중한 순간, 유용한 팁, 궁금한 점 등을 자유롭게 작성해보세요!"
              className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent resize-none"
              maxLength={1000}
            />
            <div className="text-right text-sm text-gray-500 mt-2">
              {postContent.length}/1000
            </div>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">사진 (최대 4장)</label>
            
            {/* Upload Button */}
            <div className="mb-4">
              <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#f6b73c] hover:bg-[#f6b73c]/5 transition-colors">
                <div className="text-center">
                  <i className="ri-image-add-line text-3xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-600">클릭하여 사진 업로드</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Selected Images */}
            {selectedImages.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">태그 (선택사항)</label>
            <input
              type="text"
              placeholder="#집사일상 #고양이 #강아지 (스페이스로 구분)"
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent"
            />
          </div>

          {/* Privacy Settings */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">공개 설정</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="privacy" value="public" defaultChecked className="mr-2" />
                <span className="text-sm">전체 공개</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="privacy" value="followers" className="mr-2" />
                <span className="text-sm">팔로워만</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <button className="flex items-center hover:text-[#f6b73c] transition-colors">
              <i className="ri-emotion-line mr-1"></i>
              이모지
            </button>
            <button className="flex items-center hover:text-[#f6b73c] transition-colors">
              <i className="ri-map-pin-line mr-1"></i>
              위치
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!postContent.trim()}
              className={postContent.trim() ? '' : 'opacity-50 cursor-not-allowed'}
            >
              <i className="ri-send-plane-line mr-2"></i>
              게시하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
