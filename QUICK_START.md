# 🚀 빠른 시작 가이드 (5분 설정)

## 필수 준비물
- Google 계정
- Supabase 계정 (무료)

---

## 1단계: Supabase 프로젝트 생성 (2분)

1. https://supabase.com 접속 → GitHub 로그인
2. "New Project" 클릭
3. 입력:
   - Name: `mewnion`
   - Password: 아무거나 (저장 안 해도 됨)
   - Region: `Northeast Asia (Seoul)`
4. "Create new project" → 2분 대기

---

## 2단계: API 키 복사 (1분)

1. 왼쪽 **Settings** ⚙️ → **API** 클릭
2. 다음 2개 복사:
   - `URL`: `https://xxxxx.supabase.co`
   - `anon public`: `eyJhbGc...`

---

## 3단계: 환경 변수 설정 (30초)

프로젝트 폴더의 `.env.local` 파일 열어서:

```bash
VITE_SUPABASE_URL=여기에_URL_붙여넣기
VITE_SUPABASE_ANON_KEY=여기에_anon_key_붙여넣기
```

---

## 4단계: 데이터베이스 생성 (30초)

1. Supabase 대시보드 → **SQL Editor** 🗄️
2. "New query" 클릭
3. `supabase-schema.sql` 파일 열어서 **전체 복사**
4. SQL Editor에 **붙여넣기** → **Run** 클릭

---

## 5단계: Google OAuth 설정 (1분)

### Google Cloud Console
1. https://console.cloud.google.com 접속
2. 프로젝트 만들기: `Mewnion`
3. **APIs & Services** → **OAuth consent screen**
   - External 선택 → App name: `Mewnion` → 이메일 입력 → 저장
4. **Credentials** → **Create Credentials** → **OAuth client ID**
   - Type: `Web application`
   - Name: `Mewnion`
   - Authorized redirect URIs에 추가:
     ```
     https://xxxxx.supabase.co/auth/v1/callback
     ```
     (xxxxx는 본인의 Supabase URL)
5. **Client ID**와 **Client Secret** 복사

### Supabase
1. Supabase → **Authentication** 🔐 → **Providers**
2. **Google** 찾아서 켜기
3. Client ID, Client Secret 붙여넣기 → Save

---

## 6단계: 테스트! (30초)

```bash
npm run dev
```

http://localhost:5173/signup 접속 → Google로 회원가입 테스트!

---

## ✅ 완료!

이제 다음을 테스트해보세요:
- 회원가입 (이메일 또는 Google)
- 닉네임 설정 (영어, 3자 이상)
- 미니홈피 주소: `http://localhost:5173/your_nickname`

---

## 배포 (선택사항)

### Cloudflare Pages 환경 변수 추가:

1. Cloudflare Dashboard → Pages → mewnion → Settings
2. Environment variables에 추가:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. 배포:
   ```bash
   npm run deploy
   ```

---

## 문제 발생 시

**Google 로그인 에러 (redirect_uri_mismatch)**
→ Google Cloud Console → Credentials에서 Redirect URI 확인:
```
https://xxxxx.supabase.co/auth/v1/callback
```

**환경 변수 안됨**
→ 개발 서버 재시작: `Ctrl+C` 후 `npm run dev`

**더 자세한 가이드**: `SUPABASE_SETUP.md` 파일 참고

---

## 다음은?

인증이 작동하면:
1. 프로필 사진 업로드
2. 방문자 기록 저장
3. 친구 시스템
4. 실시간 채팅

Happy Coding! 🐱
