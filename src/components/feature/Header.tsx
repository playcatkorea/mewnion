
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../base/Button';
import { useAuth } from '../../context/AuthContext';
import NotificationDropdown from './NotificationDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const menuItems = [
    { 
      name: 'Mewnion', 
      label: '묘연',
      dropdown: [
        { name: 'About', href: '/about', label: '묘연소개' },
        { name: 'Notice', href: '/notice', label: '공지사항' },
        { name: 'Events', href: '/events', label: '이벤트' },
        { name: 'News', href: '/news', label: '묘연뉴스' }
      ]
    },
    {
      name: 'Furniverse',
      label: '퍼니버스',
      dropdown: [
        { name: 'Universe', href: '/furniverse', label: '퍼니버스 세계관' },
        { name: 'Web3', href: '/web3', label: 'WEB3 DAO' },
        { name: 'Games', href: '/games', label: '게임 컨텐츠' }
      ]
    },
    {
      name: 'Gilgunet',
      label: '길구넷',
      dropdown: [
        { name: 'Rescue', href: '/rescue', label: '길고양이 구조' },
        { name: 'Adoption', href: '/adoption', label: '입양 후원' },
        { name: 'Community', href: '/community', label: '집사게시판' },
        { name: 'Volunteer', href: '/volunteer', label: '봉사활동' }
      ]
    },
    {
      name: 'Brand',
      label: '브랜드',
      dropdown: [
        { name: 'Products', href: '/brand', label: '착한 브랜드' },
        { name: 'OEM', href: '/oem', label: 'OEM/ODM' },
        { name: 'Memorial', href: '/memorial', label: '추모 서비스' }
      ]
    },
    {
      name: 'Market',
      label: '마켓',
      dropdown: [
        { name: 'Goods', href: '/market/goods', label: '고양이용품' },
        { name: 'Art', href: '/market/art', label: '창작물 판매' },
        { name: 'Sponsor', href: '/market/sponsor', label: '후원기업 제품' }
      ]
    },
    {
      name: 'Academy',
      label: '아카데미',
      dropdown: [
        { name: 'Courses', href: '/academy', label: '강의' },
        { name: 'Workshop', href: '/workshop', label: '원데이클래스' },
        { name: 'Create', href: '/academy/create', label: '강의 개설' }
      ]
    },
    {
      name: 'MewtlerAI',
      label: '뮤틀러AI',
      dropdown: [
        { name: 'HomeCam', href: '/mewtler', label: 'AI 홈캠' },
        { name: 'Analysis', href: '/ai-analysis', label: 'AI 분석 툴' },
        { name: 'IoT', href: '/iot', label: '뮤틀러 IoT' }
      ]
    }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms 딜레이
    setCloseTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b" style={{borderColor: 'rgba(167, 139, 250, 0.3)'}}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 flex-shrink-0 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)'}}>
              <span className="text-2xl">🐱</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-xl lg:text-2xl font-bold truncate space-font gradient-text">
                MEWNION
              </h1>
              <p className="text-xs" style={{color: '#a78bfa'}}>생명공감의 우주</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center flex-1 max-w-6xl mx-6">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="transition-all duration-300 text-sm font-semibold cursor-pointer whitespace-nowrap flex items-center px-3 py-2 rounded-lg" style={{color: activeDropdown === item.name ? '#f093fb' : '#cbd5e1'}}>
                      {item.label}
                      <i className="ri-arrow-down-s-line ml-1 text-xs"></i>
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 shadow-2xl py-2 z-50 glass-effect rounded-2xl"
                        style={{border: '1px solid rgba(167, 139, 250, 0.3)'}}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavigation(subItem.href)}
                            className="w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5 rounded-lg mx-1"
                            style={{color: '#cbd5e1'}}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            {isAuthenticated ? (
              <>
                <NotificationDropdown />
                <button
                  className="flex items-center px-4 py-2 rounded-full text-sm glass-effect hover:bg-white/5 transition-all cursor-pointer"
                  style={{border: '1px solid rgba(167, 139, 250, 0.3)', color: '#cbd5e1'}}
                  onClick={() => navigate('/mypage')}
                >
                  <i className="ri-user-smile-line mr-2 neon-text"></i>
                  {user?.username ?? '묘연 집사'}
                </button>
                <button
                  data-cta="manual"
                  className="space-button text-sm px-4 py-2"
                  onClick={() => navigate('/catroom')}
                >
                  캣룸 바로가기
                </button>
              </>
            ) : (
              <>
                <button
                  data-cta="manual"
                  className="text-sm px-4 py-2 rounded-lg transition-all hover:bg-white/5"
                  style={{color: '#cbd5e1'}}
                  onClick={() => navigate('/login')}
                >
                  로그인
                </button>
                <button
                  data-cta="manual"
                  className="space-button text-sm px-5 py-2"
                  onClick={() => navigate('/signup')}
                >
                  시작하기
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:bg-white/5"
            style={{border: '1px solid rgba(167, 139, 250, 0.3)'}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl neon-text`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden border-t glass-effect" style={{borderColor: 'rgba(167, 139, 250, 0.3)'}}>
            <div className="py-4 max-h-96 overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <div className="font-bold py-2 px-4 text-sm gradient-text">
                      {item.label}
                    </div>
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.href)}
                        className="w-full text-left transition-all duration-300 py-3 px-6 text-sm hover:bg-white/5 rounded-lg mx-2"
                        style={{color: '#cbd5e1'}}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col space-y-3 mt-4 px-4">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center justify-center mb-2">
                      <NotificationDropdown />
                    </div>
                    <button
                      className="flex items-center gap-2 text-sm px-4 py-3 rounded-lg glass-effect hover:bg-white/5 transition-all cursor-pointer"
                      style={{border: '1px solid rgba(167, 139, 250, 0.3)', color: '#cbd5e1'}}
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/mypage');
                      }}
                    >
                      <i className="ri-user-smile-line neon-text"></i>
                      {user?.username ?? '묘연 집사'}
                    </button>
                    <button
                      data-cta="manual"
                      className="space-button text-sm px-4 py-3"
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/catroom');
                      }}
                    >
                      캣룸 바로가기
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      data-cta="manual"
                      className="text-sm px-4 py-3 rounded-lg transition-all hover:bg-white/5"
                      style={{color: '#cbd5e1', border: '1px solid rgba(167, 139, 250, 0.3)'}}
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/login');
                      }}
                    >
                      로그인
                    </button>
                    <button
                      data-cta="manual"
                      className="space-button text-sm px-4 py-3"
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate('/signup');
                      }}
                    >
                      시작하기
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
