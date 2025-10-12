
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const About = lazy(() => import('../pages/about/page'));
const Community = lazy(() => import('../pages/community/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

// 묘연 페이지들
const Notice = lazy(() => import('../pages/notice/page'));
const Events = lazy(() => import('../pages/events/page'));
const News = lazy(() => import('../pages/news/page'));

// 퍼니버스 페이지들
const Furniverse = lazy(() => import('../pages/furniverse/page'));
const Web3 = lazy(() => import('../pages/web3/page'));
const Games = lazy(() => import('../pages/games/page'));
const PlayFactory = lazy(() => import('../pages/playfactory/page'));

// 길구넷 페이지들
const Rescue = lazy(() => import('../pages/rescue/page'));
const Adoption = lazy(() => import('../pages/adoption/page'));
const Volunteer = lazy(() => import('../pages/volunteer/page'));

// 브랜드 페이지들
const Brand = lazy(() => import('../pages/brand/page'));
const OEM = lazy(() => import('../pages/oem/page'));
const Memorial = lazy(() => import('../pages/memorial/page'));

// 마켓 페이지들
const MarketLanding = lazy(() => import('../pages/market/page'));
const MarketGoods = lazy(() => import('../pages/market/goods/page'));
const MarketArt = lazy(() => import('../pages/market/art/page'));
const MarketSponsor = lazy(() => import('../pages/market/sponsor/page'));

// 아카데미 페이지들
const Academy = lazy(() => import('../pages/academy/page'));
const Workshop = lazy(() => import('../pages/workshop/page'));
const AcademyCreate = lazy(() => import('../pages/academy/create/page'));

// 뮤틀러AI 페이지들
const Mewtler = lazy(() => import('../pages/mewtler/page'));
const AIAnalysis = lazy(() => import('../pages/ai-analysis/page'));
const IoT = lazy(() => import('../pages/iot/page'));

// 인증 페이지들
const Login = lazy(() => import('../pages/login/page'));
const Signup = lazy(() => import('../pages/signup/page'));
const AuthCallback = lazy(() => import('../pages/auth/callback/page'));
const UsernameSetup = lazy(() => import('../pages/username-setup/page'));
const Onboarding = lazy(() => import('../pages/onboarding/page'));
const MyPage = lazy(() => import('../pages/mypage/page'));

// 지원 페이지들
const Support = lazy(() => import('../pages/support/page'));
const Partnership = lazy(() => import('../pages/partnership/page'));
const Developers = lazy(() => import('../pages/developers/page'));
const API = lazy(() => import('../pages/api/page'));

// 회사 페이지들
const Careers = lazy(() => import('../pages/careers/page'));
const Investors = lazy(() => import('../pages/investors/page'));
const Privacy = lazy(() => import('../pages/privacy/page'));
const Terms = lazy(() => import('../pages/terms/page'));

import CatRoomPage from '../pages/catroom/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/community',
    element: <Community />
  },
  // 묘연
  {
    path: '/notice',
    element: <Notice />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/news',
    element: <News />
  },
  // 퍼니버스
  {
    path: '/furniverse',
    element: <Furniverse />
  },
  {
    path: '/web3',
    element: <Web3 />
  },
  {
    path: '/games',
    element: <Games />
  },
  {
    path: '/playfactory',
    element: <PlayFactory />
  },
  // 길구넷
  {
    path: '/rescue',
    element: <Rescue />
  },
  {
    path: '/adoption',
    element: <Adoption />
  },
  {
    path: '/volunteer',
    element: <Volunteer />
  },
  // 브랜드
  {
    path: '/brand',
    element: <Brand />
  },
  {
    path: '/oem',
    element: <OEM />
  },
  {
    path: '/memorial',
    element: <Memorial />
  },
  // 마켓
  {
    path: '/market',
    element: <MarketLanding />
  },
  {
    path: '/market/goods',
    element: <MarketGoods />
  },
  {
    path: '/market/art',
    element: <MarketArt />
  },
  {
    path: '/market/sponsor',
    element: <MarketSponsor />
  },
  // 아카데미
  {
    path: '/academy',
    element: <Academy />
  },
  {
    path: '/workshop',
    element: <Workshop />
  },
  {
    path: '/academy/create',
    element: <AcademyCreate />
  },
  // 뮤틀러AI
  {
    path: '/mewtler',
    element: <Mewtler />
  },
  {
    path: '/ai-analysis',
    element: <AIAnalysis />
  },
  {
    path: '/iot',
    element: <IoT />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/auth/callback',
    element: <AuthCallback />
  },
  {
    path: '/username-setup',
    element: <UsernameSetup />
  },
  {
    path: '/onboarding',
    element: <Onboarding />
  },
  {
    path: '/mypage',
    element: <MyPage />
  },
  {
    path: '/catroom',
    element: <CatRoomPage />
  },
  {
    path: '/:username',
    element: <CatRoomPage />
  },
  // 지원
  {
    path: '/support',
    element: <Support />
  },
  {
    path: '/partnership',
    element: <Partnership />
  },
  {
    path: '/developers',
    element: <Developers />
  },
  {
    path: '/api',
    element: <API />
  },
  // 회사
  {
    path: '/careers',
    element: <Careers />
  },
  {
    path: '/investors',
    element: <Investors />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
