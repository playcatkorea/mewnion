
import { useState } from 'react';
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function CreatorsSection() {
  const [activeTab, setActiveTab] = useState('art');

  const artworks = [
    {
      title: '고양이의 꿈',
      artist: '김아트',
      price: '0.5 ETH',
      likes: 234,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20digital%20art%20of%20a%20dreaming%20cat%20surrounded%20by%20colorful%20dreams%20and%20fantasy%20elements%2C%20artistic%20and%20whimsical%20style%2C%20vibrant%20colors%2C%20professional%20digital%20artwork%2C%20gallery%20quality%20illustration&width=300&height=300&seq=art1&orientation=squarish'
    },
    {
      title: '우주 속의 반려동물',
      artist: '박우주',
      price: '0.8 ETH',
      likes: 456,
      image: 'https://readdy.ai/api/search-image?query=Cosmic%20themed%20digital%20art%20featuring%20pets%20floating%20in%20space%20with%20stars%20and%20galaxies%2C%20magical%20and%20ethereal%20atmosphere%2C%20space%20art%20style%2C%20professional%20digital%20illustration&width=300&height=300&seq=art2&orientation=squarish'
    },
    {
      title: '생명의 나무',
      artist: '이자연',
      price: '1.2 ETH',
      likes: 789,
      image: 'https://readdy.ai/api/search-image?query=Tree%20of%20life%20artwork%20with%20various%20animals%20and%20pets%20integrated%20into%20the%20branches%2C%20nature%20themed%20digital%20art%2C%20warm%20and%20organic%20colors%2C%20spiritual%20and%20meaningful%20composition&width=300&height=300&seq=art3&orientation=squarish'
    }
  ];

  const courses = [
    {
      title: '반려동물 행동학 기초',
      instructor: '수의사 최동물',
      students: 1247,
      rating: 4.9,
      price: '무료',
      image: 'https://readdy.ai/api/search-image?query=Professional%20veterinarian%20teaching%20about%20pet%20behavior%2C%20educational%20setting%2C%20friendly%20and%20approachable%20instructor%2C%20modern%20classroom%20environment%2C%20educational%20content%20photography&width=300&height=200&seq=course1&orientation=landscape'
    },
    {
      title: '펫 포토그래피 마스터클래스',
      instructor: '사진작가 김셔터',
      students: 892,
      rating: 4.8,
      price: '49,000원',
      image: 'https://readdy.ai/api/search-image?query=Pet%20photography%20workshop%20with%20professional%20photographer%20teaching%20camera%20techniques%2C%20studio%20setting%20with%20cute%20animals%20as%20models%2C%20educational%20and%20creative%20atmosphere&width=300&height=200&seq=course2&orientation=landscape'
    },
    {
      title: '반려동물 응급처치',
      instructor: '응급의학과 박응급',
      students: 2156,
      rating: 5.0,
      price: '무료',
      image: 'https://readdy.ai/api/search-image?query=Pet%20first%20aid%20training%20session%2C%20medical%20professional%20demonstrating%20emergency%20care%20techniques%2C%20educational%20and%20serious%20atmosphere%2C%20veterinary%20training%20environment&width=300&height=200&seq=course3&orientation=landscape'
    }
  ];

  const news = [
    {
      title: 'AI 기반 반려동물 건강 모니터링 기술의 미래',
      category: 'AI 기술',
      date: '2024.12.15',
      author: '테크 에디터 김기술',
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20for%20pet%20health%20monitoring%2C%20futuristic%20medical%20devices%2C%20high-tech%20veterinary%20equipment%2C%20professional%20technology%20journalism%20photography&width=400&height=250&seq=news1&orientation=landscape'
    },
    {
      title: '전국 동물보호소 현황과 개선 방안',
      category: '동물복지',
      date: '2024.12.14',
      author: '복지 전문가 이보호',
      image: 'https://readdy.ai/api/search-image?query=Modern%20animal%20shelter%20facility%20with%20happy%20animals%2C%20clean%20and%20well-maintained%20environment%2C%20animal%20welfare%20focused%20photography%2C%20hopeful%20and%20positive%20atmosphere&width=400&height=250&seq=news2&orientation=landscape'
    },
    {
      title: '반려동물 예술 작품이 NFT 시장에 미치는 영향',
      category: '예술',
      date: '2024.12.13',
      author: '아트 크리틱 박예술',
      image: 'https://readdy.ai/api/search-image?query=Digital%20pet%20art%20NFT%20collection%20display%2C%20modern%20gallery%20setting%2C%20blockchain%20and%20crypto%20art%20themed%2C%20professional%20art%20market%20photography&width=400&height=250&seq=news3&orientation=landscape'
    }
  ];

  const tabs = {
    art: { label: 'Art Platform', content: artworks },
    education: { label: '평생교육원', content: courses },
    news: { label: '묘연뉴스', content: news }
  };

  return (
    <section id="creators" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6">
            <i className="ri-palette-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-purple-600 font-semibold">예술 · 교육 · 뉴스</span><br />
            재능기부 기반의 창작자 생태계
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 inline-flex shadow-lg">
            {Object.entries(tabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Art Platform */}
        {activeTab === 'art' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                묘연 Art Platform
              </h3>
              <p className="text-gray-600 text-lg">
                반려동물을 주제로 한 창작 활동을 지원하고 전시합니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1">
                      <i className="ri-heart-line text-red-500"></i>
                      <span className="text-sm font-medium">{artwork.likes}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-2">{artwork.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">by {artwork.artist}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-semibold">{artwork.price}</span>
                      <Button size="sm" onClick={() => navigateTo('/market/art')}>
                        <i className="ri-shopping-cart-line mr-1"></i>
                        구매
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Platform */}
        {activeTab === 'education' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                묘연 평생교육원
              </h3>
              <p className="text-gray-600 text-lg">
                재능기부 기반의 반려동물 관련 교육 플랫폼
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {course.price === '무료' && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        무료
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-800 mb-2">{course.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="ri-user-line mr-1"></i>
                        <span>{course.students.toLocaleString()}명</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-semibold">{course.price}</span>
                      <Button size="sm" onClick={() => navigateTo('/academy')}>
                        <i className="ri-play-circle-line mr-1"></i>
                        수강하기
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News Platform */}
        {activeTab === 'news' && (
          <div className="space-y-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                묘연뉴스
              </h3>
              <p className="text-gray-600 text-lg">
                AI, 복지, 예술 분야의 최신 뉴스와 인사이트
              </p>
            </div>

            <div className="space-y-8">
              {news.map((article, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">by {article.author}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="self-start"
                        onClick={() => navigateTo('/news')}
                      >
                        <i className="ri-arrow-right-line mr-1"></i>
                        자세히 보기
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl p-8 md:p-12 text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            창작자가 되어보세요
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            당신의 재능을 나누고, 반려동물을 사랑하는 사람들과 함께 
            더 나은 세상을 만들어가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigateTo('/market/art')}>
              <i className="ri-upload-line mr-2"></i>
              작품 등록하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo('/academy/create')}
            >
              <i className="ri-presentation-line mr-2"></i>
              강의 개설하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo('/news')}
            >
              <i className="ri-article-line mr-2"></i>
              기사 제보하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
