
import { useState } from 'react';
import Button from '../../../components/base/Button';
import { navigateTo } from '../../../router/navigator';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubscribe = () => {
    if (!newsletterEmail.trim()) {
      setNewsletterMessage({ type: 'error', text: '이메일을 입력해주세요.' });
      return;
    }
    setNewsletterMessage({ type: 'success', text: '뉴스레터 구독이 완료되었습니다!' });
    setNewsletterEmail('');
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: '이메일',
      content: 'hello@mewnion.com',
      description: '일반 문의 및 파트너십'
    },
    {
      icon: 'ri-phone-line',
      title: '전화',
      content: '02-1234-5678',
      description: '긴급 상황 및 기술 지원'
    },
    {
      icon: 'ri-map-pin-line',
      title: '주소',
      content: '서울시 강남구 테헤란로 123',
      description: '묘연 본사'
    },
    {
      icon: 'ri-time-line',
      title: '운영시간',
      content: '평일 09:00 - 18:00',
      description: '주말 및 공휴일 휴무'
    }
  ];

  const socialLinks = [
    { icon: 'ri-instagram-line', name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: 'ri-twitter-x-line', name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: 'ri-youtube-line', name: 'YouTube', url: '#', color: 'hover:text-red-500' },
    { icon: 'ri-discord-line', name: 'Discord', url: '#', color: 'hover:text-indigo-500' },
    { icon: 'ri-telegram-line', name: 'Telegram', url: '#', color: 'hover:text-blue-500' },
    { icon: 'ri-kakao-talk-line', name: 'KakaoTalk', url: '#', color: 'hover:text-yellow-500' }
  ];

  const communityStats = [
    { label: '커뮤니티 멤버', value: '12,847', icon: 'ri-user-line' },
    { label: '등록된 고양이', value: '3,492', icon: 'ri-heart-line' },
    { label: '성공 입양', value: '1,247', icon: 'ri-home-heart-line' },
    { label: '후원 금액', value: '2.4억원', icon: 'ri-coins-line' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mb-6">
            <i className="ri-community-line text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact & Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-gray-800 font-semibold">함께 만들어가는 생명공감 커뮤니티</span><br />
            언제든지 연락주세요. 묘연이 함께합니다.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f6b73c] to-[#e5a632] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              문의하기
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent transition-all duration-300"
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent transition-all duration-300"
                    placeholder="이메일을 입력하세요"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">문의 유형</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="general">일반 문의</option>
                  <option value="partnership">파트너십</option>
                  <option value="technical">기술 지원</option>
                  <option value="investment">투자 문의</option>
                  <option value="media">언론 문의</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">메시지</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="문의 내용을 입력하세요 (최대 500자)"
                  required
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                <i className="ri-send-plane-line mr-2"></i>
                메시지 보내기
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                연락처 정보
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f6b73c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-[#f6b73c] text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                소셜 미디어
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${social.color}`}
                  >
                    <i className={`${social.icon} text-2xl text-gray-600 group-hover:scale-110 transition-transform duration-300`}></i>
                    <span className="text-sm font-medium text-gray-700 mt-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-[#f6b73c]/10 to-[#7e5bef]/10 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">
                <i className="ri-mail-line mr-2"></i>
                뉴스레터 구독
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                묘연의 최신 소식과 업데이트를 가장 먼저 받아보세요
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f6b73c] focus:border-transparent text-sm"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <Button size="sm" type="button" onClick={handleNewsletterSubscribe}>
                  구독
                </Button>
              </div>
              {newsletterMessage && (
                <p
                  className={`mt-3 text-sm ${
                    newsletterMessage.type === 'success' ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {newsletterMessage.text}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Organization Info */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            묘연 생태계 파트너
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: '묘연 재단',
                description: '동물 복지 및 생명 보호 활동을 위한 비영리 재단',
                icon: 'ri-building-line'
              },
              {
                title: '묘연 박람회',
                description: '연례 반려동물 산업 박람회 및 컨퍼런스',
                icon: 'ri-calendar-event-line'
              },
              {
                title: '파트너스 협회',
                description: '브랜드 및 창작자들의 협력 네트워크',
                icon: 'ri-handshake-line'
              }
            ].map((org, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className={`${org.icon} text-2xl text-[#f6b73c]`}></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{org.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-lg mb-6">
            함께 만들어가는 더 나은 세상을 위해 언제나 열려있습니다
          </p>
          <Button size="lg" onClick={() => navigateTo('/brand')}>
            <i className="ri-team-line mr-2"></i>
            파트너 되기
          </Button>
        </div>
      </div>
    </section>
  );
}
