# Supabase 설정 가이드

이 가이드는 Mewnion 프로젝트의 Supabase 설정을 처음부터 끝까지 안내합니다.

## 1단계: Supabase 프로젝트 생성

### 1.1 Supabase 회원가입 및 로그인
1. https://supabase.com 접속
2. "Start your project" 클릭
3. GitHub 계정으로 로그인 (또는 이메일로 가입)

### 1.2 새 프로젝트 생성
1. 대시보드에서 "New Project" 클릭
2. 프로젝트 정보 입력:
   - **Organization**: 기존 조직 선택 또는 새로 생성
   - **Name**: `mewnion` (또는 원하는 이름)
   - **Database Password**: 강력한 비밀번호 생성 (저장 필수!)
   - **Region**: `Northeast Asia (Seoul)` 선택 (한국)
   - **Pricing Plan**: Free 선택
3. "Create new project" 클릭
4. 프로젝트 생성 완료까지 약 2분 대기

---

## 2단계: API 키 및 URL 확인

### 2.1 프로젝트 설정 페이지 접속
1. 왼쪽 사이드바에서 **⚙️ Settings** 클릭
2. **API** 탭 클릭

### 2.2 필요한 정보 복사
다음 정보를 복사하여 메모장에 저장:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

- **Project URL**: `URL` 섹션에 있음
- **anon public**: `Project API keys` 섹션의 `anon` `public` 키

---

## 3단계: 환경 변수 설정

### 3.1 로컬 개발 환경 설정

프로젝트 루트에 `.env.local` 파일 생성 (이미 있음):

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**위의 값들을 2단계에서 복사한 실제 값으로 교체하세요!**

### 3.2 Cloudflare Pages 환경 변수 설정

⚠️ **중요**: 배포 후에 프로덕션 환경에서도 작동하려면 이 설정이 필요합니다!

1. **Cloudflare Dashboard 접속**
   - https://dash.cloudflare.com 접속
   - **Workers & Pages** 메뉴 클릭
   - `mewnion` 프로젝트 선택

2. **Settings 탭 클릭**

3. **Environment variables** 섹션 찾기
   - 페이지를 아래로 스크롤

4. **Production** 탭에서 환경 변수 추가:

   **첫 번째 변수:**
   - **Variable name**: `VITE_SUPABASE_URL`
   - **Value**: `https://xxxxxxxxxxxxx.supabase.co` (본인의 Supabase URL로 교체)
   - **Add variable** 클릭

   **두 번째 변수:**
   - **Variable name**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: `eyJhbGciOi...` (본인의 Supabase anon key로 교체)
   - **Add variable** 클릭

5. **Save** 버튼 클릭

6. **재배포 필요!**
   ```bash
   npm run deploy
   ```
   환경 변수 추가 후 반드시 다시 배포해야 적용됩니다!

---

## 4단계: 데이터베이스 스키마 생성

### 4.1 SQL Editor 접속
1. Supabase 대시보드 왼쪽 사이드바에서 **🗄️ SQL Editor** 클릭
2. **New query** 클릭

### 4.2 스키마 SQL 실행
1. 프로젝트의 `supabase-schema.sql` 파일 열기
2. 전체 내용 복사
3. SQL Editor에 붙여넣기
4. **Run** 버튼 클릭 (또는 Ctrl/Cmd + Enter)
5. "Success. No rows returned" 메시지 확인

### 4.3 테이블 생성 확인
1. 왼쪽 사이드바에서 **🗂️ Table Editor** 클릭
2. 다음 테이블들이 생성되었는지 확인:
   - ✅ `profiles`
   - ✅ `user_settings`
   - ✅ `visitors`

---

## 5단계: Google OAuth 설정

### 5.1 Google Cloud Console에서 OAuth 클라이언트 생성

#### 5.1.1 Google Cloud Console 접속
1. https://console.cloud.google.com 접속
2. 구글 계정으로 로그인

#### 5.1.2 새 프로젝트 생성 (또는 기존 프로젝트 선택)
1. 상단의 프로젝트 선택 드롭다운 클릭
2. "새 프로젝트" 클릭
3. 프로젝트 이름: `Mewnion` 입력
4. "만들기" 클릭

#### 5.1.3 OAuth 동의 화면 구성
1. 왼쪽 메뉴에서 **APIs & Services** → **OAuth consent screen** 클릭
2. User Type 선택:
   - **External** 선택 (일반 사용자용)
   - "만들기" 클릭

3. **OAuth 동의 화면** 정보 입력:
   - **App name**: `Mewnion`
   - **User support email**: 본인 이메일
   - **Developer contact information**: 본인 이메일
   - "저장 후 계속" 클릭

4. **Scopes** 단계:
   - "저장 후 계속" 클릭 (기본값 사용)

5. **Test users** 단계:
   - 개발 중이라면 테스트 유저 추가 가능
   - "저장 후 계속" 클릭

6. **요약** 확인 후 "대시보드로 돌아가기" 클릭

#### 5.1.4 OAuth 클라이언트 ID 생성
1. 왼쪽 메뉴에서 **APIs & Services** → **Credentials** 클릭
2. 상단의 **+ CREATE CREDENTIALS** 클릭
3. **OAuth client ID** 선택
4. 정보 입력:
   - **Application type**: `Web application`
   - **Name**: `Mewnion Web App`

5. **Authorized JavaScript origins** 추가:
   ```
   http://localhost:5173
   https://mewnion.pages.dev
   https://your-custom-domain.com (커스텀 도메인이 있다면)
   ```

6. **Authorized redirect URIs** 추가:
   ```
   https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
   ```
   ⚠️ **중요**: `xxxxxxxxxxxxx`를 본인의 Supabase 프로젝트 URL로 교체!

7. "만들기" 클릭

8. 생성된 **Client ID**와 **Client Secret** 복사 (메모장에 저장)

### 5.2 Supabase에 Google OAuth 설정

#### 5.2.1 Authentication 설정 페이지 접속
1. Supabase 대시보드 왼쪽 사이드바에서 **🔐 Authentication** 클릭
2. **Providers** 탭 클릭

#### 5.2.2 Google Provider 활성화
1. Provider 목록에서 **Google** 찾기
2. **Enabled** 토글 켜기
3. 정보 입력:
   - **Client ID**: Google Cloud Console에서 복사한 Client ID 붙여넣기
   - **Client Secret**: Google Cloud Console에서 복사한 Client Secret 붙여넣기
4. **Save** 클릭

#### 5.2.3 Redirect URL 확인
- Google OAuth 설정 화면에 표시된 **Callback URL (for OAuth)** 확인:
  ```
  https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
  ```
- 이 URL이 Google Cloud Console의 Authorized redirect URIs에 추가되어 있는지 재확인

---

## 6단계: Site URL 및 Redirect URLs 설정

### 6.1 Authentication URL Configuration
1. Supabase 대시보드 → **Authentication** → **URL Configuration**
2. 다음 URL들을 추가:

   **Site URL:**
   ```
   https://mewnion.pages.dev
   ```

   **Redirect URLs:**
   ```
   http://localhost:5173/**
   https://mewnion.pages.dev/**
   https://your-custom-domain.com/** (커스텀 도메인이 있다면)
   ```

3. **Save** 클릭

---

## 7단계: 테스트

### 7.1 로컬 개발 서버 실행
```bash
npm run dev
```

### 7.2 회원가입 테스트
1. http://localhost:5173/signup 접속
2. **Google로 회원가입** 버튼 클릭
3. Google 계정 선택
4. 닉네임 입력 (영어, 3자 이상)
5. 중복확인 클릭
6. 완료 클릭

### 7.3 닉네임 기반 라우팅 테스트
1. 닉네임 설정 완료 후 URL 확인:
   ```
   http://localhost:5173/your_nickname
   ```
2. 다른 브라우저/시크릿 모드에서 위 URL 접속
3. 방문자 모드로 보이는지 확인

---

## 8단계: 배포 및 최종 확인

### 8.1 프로덕션 빌드 및 배포
```bash
npm run build
npx wrangler pages deploy out
```

### 8.2 프로덕션 환경 테스트
1. 배포된 URL 접속 (https://mewnion.pages.dev)
2. Google 로그인 테스트
3. 닉네임 설정 테스트
4. `https://mewnion.pages.dev/your_nickname` 접속 테스트

---

## 트러블슈팅

### 문제 1: "Invalid login credentials"
**원인**: 환경 변수가 제대로 설정되지 않음

**해결**:
1. `.env.local` 파일 내용 확인
2. `VITE_SUPABASE_URL`과 `VITE_SUPABASE_ANON_KEY`가 올바른지 확인
3. 개발 서버 재시작 (`npm run dev`)

### 문제 2: Google 로그인 시 "Error 400: redirect_uri_mismatch"
**원인**: Google Cloud Console의 Redirect URI 설정이 잘못됨

**해결**:
1. Google Cloud Console → Credentials → OAuth 2.0 Client IDs
2. Authorized redirect URIs에 다음이 포함되어 있는지 확인:
   ```
   https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
   ```
3. 저장 후 5분 정도 대기 (Google 설정 반영 시간)

### 문제 3: "Failed to fetch"
**원인**: CORS 또는 네트워크 문제

**해결**:
1. Supabase Dashboard → Settings → API 확인
2. URL이 정확한지 확인
3. 브라우저 콘솔에서 에러 메시지 확인

### 문제 4: 닉네임 중복 확인이 작동하지 않음
**원인**: 데이터베이스 스키마가 제대로 적용되지 않음

**해결**:
1. Supabase Dashboard → SQL Editor
2. `supabase-schema.sql` 내용을 다시 실행
3. Table Editor에서 `profiles` 테이블 확인

### 문제 5: Cloudflare Pages 배포 후 환경 변수가 적용되지 않음
**원인**: 환경 변수 설정 후 재배포 필요

**해결**:
1. Cloudflare Dashboard → Pages → mewnion → Settings
2. Environment variables 확인
3. 새로운 배포 트리거:
   ```bash
   npm run deploy
   ```

---

## 보안 체크리스트

- ✅ `.env.local` 파일이 `.gitignore`에 포함되어 있는지 확인
- ✅ Supabase anon key는 공개 저장소에 커밋되지 않도록 주의
- ✅ Google OAuth Client Secret은 절대 공개하지 않음
- ✅ RLS (Row Level Security) 정책이 활성화되어 있는지 확인
- ✅ Production 환경에서는 HTTPS만 사용

---

## 다음 단계

인증 시스템이 작동하면:

1. **프로필 이미지 업로드** 기능 추가
2. **방문자 기록** Supabase에 저장
3. **캣룸 데이터** 실시간 동기화
4. **친구 시스템** 구현
5. **알림** 기능 추가

---

## 유용한 링크

- [Supabase 공식 문서](https://supabase.com/docs)
- [Supabase Auth 가이드](https://supabase.com/docs/guides/auth)
- [Google OAuth 설정 가이드](https://support.google.com/cloud/answer/6158849)
- [Cloudflare Pages 문서](https://developers.cloudflare.com/pages/)

---

문제가 발생하면 Supabase Dashboard의 **Logs** 섹션에서 에러 로그를 확인하세요!
