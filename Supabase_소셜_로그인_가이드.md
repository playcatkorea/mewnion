# Supabase 소셜 로그인 제공자 가이드

## ✅ Supabase에서 공식 지원하는 소셜 로그인

### 1. **Google** ✅ (이미 구현됨)
- OAuth 2.0
- 이메일, 프로필 정보 제공
- 설정: Google Cloud Console

### 2. **GitHub** ✅
- OAuth 2.0
- 개발자 친화적
- 설정: GitHub Developer Settings

### 3. **Facebook** ✅
- OAuth 2.0
- 이메일, 프로필 정보
- 설정: Facebook Developers

### 4. **Twitter (X)** ✅
- OAuth 2.0
- 이메일 선택적 제공
- 설정: Twitter Developer Portal

### 5. **Apple** ✅
- Sign in with Apple
- 프라이버시 중시
- 설정: Apple Developer

### 6. **Azure (Microsoft)** ✅
- OAuth 2.0
- 기업용
- 설정: Azure Portal

### 7. **Discord** ✅
- OAuth 2.0
- 게이머/커뮤니티용
- 설정: Discord Developer Portal

### 8. **GitLab** ✅
- OAuth 2.0
- 개발자용
- 설정: GitLab

### 9. **Bitbucket** ✅
- OAuth 2.0
- 개발자용
- 설정: Bitbucket

### 10. **Slack** ✅
- OAuth 2.0
- 팀 협업용
- 설정: Slack API

### 11. **Spotify** ✅
- OAuth 2.0
- 음악 서비스용
- 설정: Spotify Developer

### 12. **Twitch** ✅
- OAuth 2.0
- 스트리머용
- 설정: Twitch Developer

### 13. **LinkedIn** ✅
- OAuth 2.0
- 비즈니스/채용용
- 설정: LinkedIn Developers

### 14. **Notion** ✅
- OAuth 2.0
- 생산성 앱용
- 설정: Notion Integrations

### 15. **WorkOS** ✅
- SSO/SAML
- 엔터프라이즈용
- 설정: WorkOS

## ❌ Supabase에서 직접 지원하지 않는 로그인

### 한국 서비스들
- **카카오톡** ❌ (직접 구현 필요)
- **네이버** ❌ (직접 구현 필요)
- **라인** ❌ (직접 구현 필요)

> **해결 방법**: Supabase Edge Functions를 사용하여 커스텀 OAuth 구현 가능

## 🎯 뮤니언 플랫폼 추천 소셜 로그인

### 우선순위 1 (필수)
1. **Google** ✅ - 가장 많이 사용
2. **Apple** - iOS 사용자
3. **Facebook** - 소셜 네트워크
4. **GitHub** - 개발자/크리에이터

### 우선순위 2 (선택)
5. **Discord** - 커뮤니티
6. **Twitter (X)** - SNS
7. **카카오톡** (커스텀) - 한국 사용자

### 우선순위 3 (향후)
8. **네이버** (커스텀) - 한국 사용자
9. **라인** (커스텀) - 일본/태국 사용자

## 🔒 2단계 인증 (2FA) 옵션

### Supabase 지원
1. **TOTP (Time-based OTP)** ✅
   - Google Authenticator
   - Authy
   - 1Password

2. **SMS** ✅
   - Twilio 연동
   - 전화번호 인증

3. **Email OTP** ✅
   - 이메일 코드 전송
   - 가장 간단

## 📋 구현 계획

### Phase 1: 기본 소셜 로그인 (이번 작업)
- [x] Google
- [ ] Apple
- [ ] GitHub
- [ ] Facebook

### Phase 2: 한국 서비스 (Edge Functions)
- [ ] 카카오톡 (커스텀)
- [ ] 네이버 (커스텀)

### Phase 3: 2단계 인증
- [ ] TOTP (Google Authenticator)
- [ ] Email OTP
- [ ] SMS (선택)

## 🛠️ Supabase 설정 방법

### 1. Supabase Dashboard
```
프로젝트 선택
  → Authentication
  → Providers
  → 원하는 제공자 Enable
  → Client ID/Secret 입력
  → Redirect URL 설정
```

### 2. Redirect URL 패턴
```
https://your-project.supabase.co/auth/v1/callback
```

### 3. 각 제공자별 설정 문서
- Google: https://supabase.com/docs/guides/auth/social-login/auth-google
- Apple: https://supabase.com/docs/guides/auth/social-login/auth-apple
- GitHub: https://supabase.com/docs/guides/auth/social-login/auth-github
- Facebook: https://supabase.com/docs/guides/auth/social-login/auth-facebook

## 💡 구현 예시

### Google (이미 구현됨)
```tsx
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`
  }
});
```

### Apple
```tsx
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'apple',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`
  }
});
```

### GitHub
```tsx
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`
  }
});
```

### 2FA - TOTP
```tsx
// 2FA 등록
const { data, error } = await supabase.auth.mfa.enroll({
  factorType: 'totp'
});

// QR 코드 표시
const qrCode = data.totp.qr_code;

// 인증 코드 검증
await supabase.auth.mfa.verify({
  factorId: data.id,
  challengeId: challenge.id,
  code: '123456'
});
```

## ⚠️ 주의사항

### 1. 프라이버시
- 각 소셜 로그인은 사용자 동의 필요
- 최소한의 권한만 요청
- 개인정보처리방침 업데이트 필요

### 2. 보안
- Redirect URL 화이트리스트 설정
- HTTPS 필수
- State 파라미터로 CSRF 방지

### 3. UX
- 너무 많은 옵션은 혼란
- 주요 3-4개만 표시 권장
- 나머지는 "더보기"로 숨김

## 📊 한국 사용자 통계
- 카카오톡: 90% 이상 사용
- 네이버: 60% 이상 사용
- 구글: 80% 이상 사용
- 애플: iPhone 사용자 (약 30%)

## 🎯 최종 권장사항

### 필수 구현
1. Google (이미 완료)
2. Apple
3. 카카오톡 (Edge Function)

### 선택 구현
4. GitHub
5. Facebook
6. 네이버 (Edge Function)

### 보안 강화
- TOTP 2단계 인증
- Email OTP

---

**작성일**: 2025-01-13
**참고**: https://supabase.com/docs/guides/auth/social-login
