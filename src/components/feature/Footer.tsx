import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const footerLinks = {
    '플랫폼': [
      { label: '퍼니버스', href: '/furniverse' },
      { label: '플레이팩토리', href: '/playfactory' },
      { label: '뮤틀러 AI', href: '/mewtler' },
      { label: '길구넷', href: '/rescue' }
    ],
    '서비스': [
      { label: '브랜드존', href: '/brand' },
      { label: '크리에이터', href: '/market/art' },
      { label: '생애보호', href: '/memorial' },
      { label: 'DAO', href: '/web3' }
    ],
    '지원': [
      { label: '고객센터', href: '/support' },
      { label: '파트너십', href: '/partnership' },
      { label: '개발자', href: '/developers' },
      { label: 'API', href: '/api' }
    ],
    '회사': [
      { label: '소개', href: '/about' },
      { label: '채용', href: '/careers' },
      { label: '뉴스', href: '/news' },
      { label: '투자자', href: '/investors' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f6b73c] to-[#7e5bef] rounded-full flex items-center justify-center">
                <i className="ri-heart-3-fill text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  Mewnion
                </h3>
                <p className="text-sm text-gray-400">묘연</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              반려동물과 사람이 함께 만드는<br />
              생명공감의 우주입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f6b73c] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f6b73c] transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f6b73c] transition-colors cursor-pointer">
                <i className="ri-youtube-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#f6b73c] transition-colors cursor-pointer">
                <i className="ri-discord-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.href)}
                      className="text-gray-400 hover:text-[#f6b73c] transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Mewnion Ecosystem | No Cat No Life
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={() => navigate('/privacy')}
              className="text-gray-400 hover:text-[#f6b73c] transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="text-gray-400 hover:text-[#f6b73c] transition-colors cursor-pointer"
            >
              이용약관
            </button>
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#f6b73c] transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
