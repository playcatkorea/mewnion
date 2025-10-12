# 🐱 Mewnion - 고양이와 함께하는 생명공감 플랫폼

> 퍼니버스, 길구넷, 크리에이터 마켓, 뮤틀러 AI를 하나로 연결하는 Web3 기반 커뮤니티

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-orange)](https://mewnion.pages.dev)
[![Built with React](https://img.shields.io/badge/Built_with-React_19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-green)](https://supabase.com)

---

## ✨ 주요 기능

### 🔐 실제 인증 시스템
- ✅ 이메일/비밀번호 회원가입 및 로그인
- ✅ **Google OAuth 소셜 로그인**
- ✅ 닉네임 기반 미니홈피 시스템
- ✅ 세션 관리 및 자동 로그인

### 🏠 미니홈피 (캣룸)
- ✅ `mewnion.io/your_nickname` 형식의 개인 URL
- ✅ 픽셀 아트 스타일의 캣룸
- ✅ 고양이 캐릭터 키우기
- ✅ 가구 배치 및 꾸미기
- ✅ 활동량 기반 코인 채굴
- ✅ 방문자 리스트 및 타 유저 방문
- ✅ 싸이월드 스타일 UI (프로필, 미니미, 일촌평)
- ✅ 배경 음악 재생

### 🌐 플랫폼 통합
- **퍼니버스**: Web3 커뮤니티 및 게임
- **길구넷**: 유기동물 구조 및 입양
- **크리에이터 마켓**: NFT 및 굿즈 판매
- **뮤틀러 AI**: AI 기반 반려동물 케어

---

## 🚀 빠른 시작

### 1. 프로젝트 클론 및 설치

```bash
git clone https://github.com/your-username/mewnion.git
cd mewnion
npm install
```

### 2. Supabase 설정 (5분)

**상세 가이드**: [`QUICK_START.md`](QUICK_START.md) 참고

간단 요약:
1. https://supabase.com 에서 프로젝트 생성
2. API 키 복사
3. `.env.local` 파일에 키 입력
4. `supabase-schema.sql` 실행
5. Google OAuth 설정

### 3. 개발 서버 실행

```bash
npm run dev
```

http://localhost:5173 접속

### 4. 빌드 및 배포

```bash
npm run build
npm run deploy
```

---

## 📁 프로젝트 구조

```
mewnion/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── base/           # 기본 UI 컴포넌트
│   │   └── feature/        # 기능별 컴포넌트
│   ├── context/            # React Context (AuthContext)
│   ├── lib/                # 외부 라이브러리 설정 (Supabase)
│   ├── pages/              # 페이지 컴포넌트
│   │   ├── auth/          # 인증 관련 페이지
│   │   ├── catroom/       # 캣룸 (미니홈피)
│   │   ├── login/         # 로그인
│   │   └── signup/        # 회원가입
│   ├── router/             # 라우팅 설정
│   └── utils/              # 유틸리티 함수
├── supabase-schema.sql     # 데이터베이스 스키마
├── QUICK_START.md          # 빠른 시작 가이드
└── SUPABASE_SETUP.md       # 상세 설정 가이드
```

---

## 🛠️ 기술 스택

### Frontend
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **React Router** - 클라이언트 사이드 라우팅

### Backend & Database
- **Supabase** - BaaS (Backend as a Service)
  - PostgreSQL 데이터베이스
  - Authentication (이메일, Google OAuth)
  - Row Level Security (RLS)
  - Real-time subscriptions

### Deployment
- **Cloudflare Pages** - 정적 사이트 호스팅
- **Wrangler** - Cloudflare CLI

---

## 📊 데이터베이스 스키마

### `profiles` 테이블
사용자 프로필 정보

| Column | Type | Description |
|--------|------|-------------|
| id | uuid | 사용자 ID (PK) |
| username | text | 고유 닉네임 |
| email | text | 이메일 |
| avatar_url | text | 프로필 이미지 URL |
| created_at | timestamp | 생성일 |
| updated_at | timestamp | 수정일 |

### `user_settings` 테이블
게임 데이터 (코인, 가구, 활동량)

### `visitors` 테이블
방문자 기록

---

## 🔒 보안

- ✅ Row Level Security (RLS) 활성화
- ✅ 환경 변수로 API 키 관리
- ✅ `.env.local` 파일 Git 제외
- ✅ Google OAuth 2.0
- ✅ Supabase Auth 세션 관리

---

## 🎨 주요 페이지

### 홈페이지 (`/`)
- 메인 랜딩 페이지
- 플랫폼 소개

### 회원가입 (`/signup`)
- 이메일/비밀번호 가입
- Google 소셜 로그인
- 닉네임 설정 (영어, 3자 이상)
- 중복 확인 기능

### 로그인 (`/login`)
- 이메일/비밀번호 로그인
- Google 소셜 로그인

### 캣룸 (`/:username`)
- 개인 미니홈피
- 픽셀 아트 캐릭터 및 고양이
- 가구 배치 시스템
- 코인 채굴
- 방문자 리스트
- 배경 음악

### 기타 페이지
- `/community` - 커뮤니티
- `/furniverse` - 퍼니버스 (Web3)
- `/rescue` - 길구넷 (구조/입양)
- `/market` - 크리에이터 마켓
- `/mewtler` - 뮤틀러 AI

---

## 📝 환경 변수

### 개발 환경 (`.env.local`)

```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

### 프로덕션 (Cloudflare Pages)

Cloudflare Dashboard → Settings → Environment variables에 동일한 변수 추가

---

## 🚧 개발 중인 기능

- [ ] 프로필 이미지 업로드 (Supabase Storage)
- [ ] 실시간 방문자 알림
- [ ] 친구 시스템
- [ ] 채팅 기능
- [ ] 캣룸 데이터 실시간 동기화
- [ ] NFT 통합
- [ ] Web3 지갑 연동

---

## 🤝 기여하기

기여는 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 📞 문의

- 이메일: contact@mewnion.com
- 웹사이트: https://mewnion.pages.dev

---

## 🙏 감사의 말

- [Supabase](https://supabase.com) - 훌륭한 BaaS 플랫폼
- [Cloudflare Pages](https://pages.cloudflare.com) - 빠른 배포
- [React](https://react.dev) - 멋진 UI 라이브러리
- [Tailwind CSS](https://tailwindcss.com) - 유틸리티 CSS

---

Made with ❤️ and 🐱 by Mewnion Team
