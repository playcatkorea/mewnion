# 🔧 Google OAuth 자주 발생하는 문제 해결

## 문제 1: "For security purposes, you can only request this after XX seconds"

### 🔍 원인
Google의 **레이트 리미팅(Rate Limiting)** 보안 정책입니다.

- 짧은 시간(보통 1분 이내)에 **너무 많은 OAuth 요청**을 하면 발생
- Google이 봇 공격이나 남용을 방지하기 위해 일시적으로 요청을 차단
- 주로 **개발/테스트 중**에 많이 발생

### 💡 해결 방법

#### 1. 즉시 해결 (권장)
```
그냥 표시된 시간(37초 등)만큼 기다리세요!
카운트다운이 끝나면 자동으로 OAuth 창이 열립니다.
```

#### 2. 브라우저 캐시/쿠키 삭제
```
1. Chrome 설정 → 개인정보 및 보안
2. 인터넷 사용 기록 삭제
3. "쿠키 및 기타 사이트 데이터" 체크
4. "전체 기간" 선택 → 삭제
5. 브라우저 재시작
```

#### 3. 시크릿 모드 사용
```
Ctrl + Shift + N (Chrome)
Ctrl + Shift + P (Firefox)

시크릿 모드에서는 쿠키/세션이 분리되어
레이트 리미팅이 적용되지 않을 수 있습니다.
```

#### 4. 다른 브라우저 사용
```
Chrome → Firefox
Firefox → Edge
등으로 브라우저를 바꿔서 시도
```

### ⏱️ 왜 이런 제한이 있나요?

Google OAuth는 다음과 같은 제한이 있습니다:

| 제한 유형 | 허용 범위 |
|----------|-----------|
| **동일 IP에서의 요청** | 1분당 약 10-15회 |
| **동일 사용자의 요청** | 1분당 약 5-10회 |
| **동일 클라이언트 ID** | 1분당 약 20-30회 |

개발 중에는 이 제한에 쉽게 도달할 수 있습니다.

### 🚫 하지 말아야 할 것

❌ **새로고침을 반복하지 마세요**
- 상황이 더 악화되고 대기 시간이 늘어날 수 있습니다

❌ **여러 탭에서 동시에 시도하지 마세요**
- 레이트 리미팅이 더 빨리 적용됩니다

❌ **VPN을 켰다 껐다 하지 마세요**
- 일시적인 해결책일 뿐이며, Google이 감지할 수 있습니다

### ✅ 개발 중 예방 방법

#### 1. 코드에서 중복 요청 방지
```typescript
const [isLoading, setIsLoading] = useState(false);

const handleGoogleLogin = async () => {
  if (isLoading) return; // 중복 클릭 방지

  setIsLoading(true);
  try {
    await loginWithGoogle();
  } finally {
    setIsLoading(false);
  }
};
```

#### 2. 버튼 비활성화
```typescript
<button
  onClick={handleGoogleLogin}
  disabled={isLoading}  // 로딩 중에는 비활성화
>
  {isLoading ? '로딩 중...' : 'Google로 로그인'}
</button>
```

#### 3. 디버깅 시 로컬 저장소 활용
```typescript
// 개발 중에는 localStorage로 세션 테스트
if (import.meta.env.DEV) {
  // 테스트용 토큰 저장
}
```

---

## 문제 2: Google 로그인 후 닉네임 설정 화면이 안 뜸

### 🔍 원인
- OAuth 콜백 후 라우팅 문제
- 프로필이 생성되지 않음

### ✅ 해결됨!
이제 다음과 같이 작동합니다:

1. Google 로그인 클릭
2. Google 인증 완료
3. `/auth/callback`으로 리다이렉트
4. 프로필 확인
5. **닉네임 없으면 `/username-setup` 페이지로 자동 이동** ✅

### 🧪 테스트 방법
```bash
1. npm run dev
2. http://localhost:5173/login 접속
3. "Google로 로그인" 클릭
4. Google 계정 선택
5. 닉네임 설정 화면이 나타나는지 확인
```

---

## 문제 3: "redirect_uri_mismatch" 에러

### 🔍 원인
Google Cloud Console의 **Authorized redirect URIs**가 정확하지 않음

### ✅ 해결 방법

#### 1. Supabase Callback URL 확인
```
1. Supabase 대시보드 → Authentication → Providers → Google
2. "Callback URL (for OAuth)" 복사
   예: https://abcdefg.supabase.co/auth/v1/callback
```

#### 2. Google Cloud Console 설정
```
1. Google Cloud Console → Credentials
2. OAuth 2.0 Client ID 클릭
3. "Authorized redirect URIs" 섹션 확인
4. 위에서 복사한 URL이 **정확히** 있는지 확인
5. 없으면 추가 → 저장
```

#### 3. 대기
```
⏳ 5-10분 대기 (Google 설정 반영 시간)
```

### 🔍 체크리스트
- [ ] URL이 `https://`로 시작하는지
- [ ] `/auth/v1/callback`이 정확히 붙어있는지
- [ ] 공백이나 특수문자가 없는지
- [ ] Supabase URL과 정확히 일치하는지

---

## 문제 4: "invalid_client" 에러

### 🔍 원인
**Client ID** 또는 **Client Secret**이 잘못됨

### ✅ 해결 방법

#### 1. Google Cloud Console에서 다시 확인
```
1. Google Cloud Console → Credentials
2. OAuth 2.0 Client ID 클릭
3. Client ID 복사 (다시)
4. Client Secret 복사 (다시)
```

#### 2. Supabase에 다시 입력
```
1. Supabase → Authentication → Providers → Google
2. Client ID 붙여넣기 (전체 삭제 후)
3. Client Secret 붙여넣기 (전체 삭제 후)
4. Save 클릭
```

### 💡 팁
- 복사할 때 **앞뒤 공백** 주의
- **전체 삭제 후** 다시 붙여넣기
- Chrome 개발자 도구 → Network 탭에서 요청 확인

---

## 문제 5: "popup_closed_by_user"

### 🔍 원인
사용자가 OAuth 팝업을 닫음 (에러 아님)

### ✅ 해결 방법
```
다시 시도하면 됩니다.
```

---

## 문제 6: 로컬에서는 되는데 배포 후 안 됨

### 🔍 원인
**Cloudflare 환경 변수** 미설정

### ✅ 해결 방법

#### 1. Cloudflare Pages 설정
```
1. Cloudflare Dashboard → Pages
2. 프로젝트 선택 → Settings
3. Environment variables
4. Production 탭 선택
5. 변수 추가:
   - VITE_SUPABASE_URL: https://yourproject.supabase.co
   - VITE_SUPABASE_ANON_KEY: your-anon-key
6. Save
```

#### 2. 재배포
```bash
npm run deploy
```

자세한 내용: [CLOUDFLARE_ENV_GUIDE.md](./CLOUDFLARE_ENV_GUIDE.md)

---

## 문제 7: 닉네임 설정 후 홈으로 안 감

### 🔍 원인
- 네트워크 오류
- Supabase 연결 문제

### ✅ 해결 방법

#### 1. 브라우저 콘솔 확인
```
F12 → Console 탭
에러 메시지 확인
```

#### 2. 네트워크 탭 확인
```
F12 → Network 탭
Supabase 요청이 실패했는지 확인
```

#### 3. Supabase 상태 확인
```
https://status.supabase.com
서비스가 정상인지 확인
```

---

## 🆘 그래도 안 되면?

### 1. 브라우저 개발자 도구 확인
```
F12 → Console 탭
모든 에러 메시지 복사
```

### 2. 에러 로그 확인
```javascript
// AuthContext.tsx의 catch 블록에서
console.error('상세 에러:', error);
```

### 3. Supabase 로그 확인
```
Supabase Dashboard → Logs
최근 에러 확인
```

### 4. 단계별 디버깅
```
1. 이메일 회원가입은 되는가?
2. 이메일 로그인은 되는가?
3. Google 팝업은 열리는가?
4. Google 인증 후 리다이렉트는 되는가?
5. /auth/callback 페이지는 뜨는가?
6. /username-setup 페이지는 뜨는가?
```

---

## 📚 관련 문서

- [GOOGLE_OAUTH_GUIDE.md](./GOOGLE_OAUTH_GUIDE.md) - Google OAuth 설정 가이드
- [GOOGLE_OAUTH_한글메뉴_요약.md](./GOOGLE_OAUTH_한글메뉴_요약.md) - 한글 메뉴 이름 정리
- [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) - Supabase 설정 가이드
- [CLOUDFLARE_ENV_GUIDE.md](./CLOUDFLARE_ENV_GUIDE.md) - Cloudflare 환경 변수 가이드

---

**마지막 업데이트:** 2025-10-12
