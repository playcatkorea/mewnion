# 🌐 Cloudflare Pages 환경 변수 설정 가이드

## 왜 필요한가요?

- ✅ 로컬 개발(`npm run dev`)에서는 `.env.local` 파일 사용
- ✅ 프로덕션 배포에서는 Cloudflare에 직접 환경 변수 설정 필요
- ✅ 이 설정이 없으면 배포 후 로그인/회원가입이 작동하지 않습니다!

---

## 📋 준비물

Supabase 대시보드에서 미리 복사해둔 값들:
- `VITE_SUPABASE_URL`: `https://xxxxx.supabase.co`
- `VITE_SUPABASE_ANON_KEY`: `eyJhbGc...` (긴 문자열)

---

## 🚀 단계별 설정

### 1️⃣ Cloudflare Dashboard 접속

```
https://dash.cloudflare.com
```

로그인 → 왼쪽 메뉴에서 **Workers & Pages** 클릭

---

### 2️⃣ 프로젝트 선택

프로젝트 목록에서 **mewnion** 클릭

(없다면 먼저 `npm run deploy` 실행해서 배포하세요)

---

### 3️⃣ Settings 탭

상단 메뉴에서 **Settings** 탭 클릭

```
Overview | Deployments | Settings | Custom domains | ...
           ↑ 여기!
```

---

### 4️⃣ Environment Variables 찾기

Settings 페이지를 **아래로 스크롤**

다음 섹션을 찾으세요:
```
┌──────────────────────────────────────┐
│ Environment Variables                 │
│ ────────────────────────────────────  │
│ Production  |  Preview                │
│   ↑ 여기 클릭!                        │
└──────────────────────────────────────┘
```

---

### 5️⃣ Production 탭에서 변수 추가

#### 첫 번째 변수 추가

1. **Add variable** 버튼 클릭

2. 다음 입력:
   ```
   Variable name: VITE_SUPABASE_URL
   Value: https://xxxxx.supabase.co
   ```
   ⚠️ `xxxxx`를 본인의 실제 Supabase URL로 교체!

3. **Add variable** 클릭 (또는 엔터)

#### 두 번째 변수 추가

1. 다시 **Add variable** 버튼 클릭

2. 다음 입력:
   ```
   Variable name: VITE_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
   ```
   ⚠️ 전체 키를 복사해서 붙여넣으세요! (매우 긴 문자열)

3. **Add variable** 클릭

---

### 6️⃣ 저장 확인

페이지 상단 또는 하단의 **Save** 버튼 클릭

✅ 성공 메시지가 나타나면 완료!

---

### 7️⃣ 재배포 (필수!)

환경 변수는 **새 배포부터 적용**됩니다.

터미널에서 다시 배포:
```bash
npm run deploy
```

또는 Cloudflare Dashboard에서:
1. **Deployments** 탭 클릭
2. 최신 배포 옆 **···** 클릭
3. **Retry deployment** 선택

---

## ✅ 확인 방법

### 배포 완료 후 테스트:

1. 배포된 URL 접속 (예: `https://mewnion.pages.dev`)

2. `/signup` 페이지 접속

3. Google로 회원가입 클릭

4. 에러 없이 작동하면 성공! 🎉

---

## 🔍 환경 변수 확인

설정한 변수가 맞는지 확인하려면:

1. Settings → Environment Variables
2. Production 탭에서 변수 목록 확인:
   ```
   ✓ VITE_SUPABASE_URL
   ✓ VITE_SUPABASE_ANON_KEY
   ```

3. **Edit** 버튼으로 값 수정 가능

---

## ⚠️ 주의사항

### DO ✅
- ✅ 환경 변수 추가 후 **반드시 재배포**
- ✅ Production과 Preview 탭 구분
- ✅ 변수 이름 정확히 입력 (`VITE_` 접두사 필수)
- ✅ 값 복사할 때 **공백 없이** 복사

### DON'T ❌
- ❌ Preview 탭에만 추가하고 Production은 비워두기
- ❌ 변수 이름 오타 (`VITE_SUPABASE_ANON_KEY` ≠ `SUPABASE_ANON_KEY`)
- ❌ 값 앞뒤에 따옴표 추가 (`"https://..."`는 ❌)
- ❌ 환경 변수 추가 후 재배포 안 하기

---

## 🐛 트러블슈팅

### 문제 1: 배포 후 "Invalid login credentials" 에러

**원인**: 환경 변수가 적용되지 않음

**해결**:
1. Cloudflare Dashboard → Settings → Environment Variables 확인
2. Production 탭에 2개 변수 있는지 확인
3. 값이 정확한지 확인 (Supabase에서 다시 복사)
4. **재배포**: `npm run deploy`

---

### 문제 2: 변수가 추가되지 않음

**해결**:
1. **Save** 버튼 클릭했는지 확인
2. 브라우저 새로고침
3. 다시 Settings → Environment Variables 확인

---

### 문제 3: Preview 배포에서 작동 안 함

**설명**: Preview는 Pull Request 배포용입니다.

**해결**: Production 탭에도 동일하게 추가

---

## 📊 변수 구조 요약

```
Cloudflare Pages Environment Variables
├── Production (프로덕션 배포용) ← 이거!
│   ├── VITE_SUPABASE_URL
│   └── VITE_SUPABASE_ANON_KEY
│
└── Preview (Pull Request용)
    ├── VITE_SUPABASE_URL (선택사항)
    └── VITE_SUPABASE_ANON_KEY (선택사항)
```

---

## 🎯 빠른 체크리스트

- [ ] Cloudflare Dashboard 접속
- [ ] Workers & Pages → mewnion 선택
- [ ] Settings 탭 클릭
- [ ] Environment Variables 섹션 찾기
- [ ] Production 탭 선택
- [ ] `VITE_SUPABASE_URL` 추가
- [ ] `VITE_SUPABASE_ANON_KEY` 추가
- [ ] Save 클릭
- [ ] `npm run deploy` 재배포
- [ ] 배포 URL에서 회원가입 테스트

---

## 🆘 여전히 안 되나요?

1. **브라우저 콘솔 확인** (F12)
   - 에러 메시지 확인
   - "Failed to fetch" → URL 확인
   - "Invalid API key" → Key 확인

2. **Supabase 값 재확인**
   - Settings → API 에서 다시 복사
   - 공백 없이 정확히 복사

3. **Cloudflare 빌드 로그 확인**
   - Deployments → 최신 배포 클릭
   - Build logs에서 에러 확인

---

완료! 🎉 이제 프로덕션 환경에서도 로그인/회원가입이 작동합니다!
