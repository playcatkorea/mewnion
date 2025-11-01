# 🔄 무료 자동 Keep-Alive 설정 가이드

Supabase와 Render.com 무료 플랜의 자동 슬립을 방지하기 위한 GitHub Actions 설정입니다.

## 📋 목차
- [왜 필요한가요?](#왜-필요한가요)
- [설정 방법](#설정-방법)
- [동작 방식](#동작-방식)
- [모니터링](#모니터링)

---

## 왜 필요한가요?

### Supabase 무료 플랜
- ⚠️ **7일간 비활성** 시 자동 일시 중지
- ✅ **해결책**: 매일 자동으로 API 요청 전송

### Render.com 무료 플랜
- ⚠️ **15분간 비활성** 시 슬립 모드 진입
- ✅ **해결책**: 10분마다 자동으로 핑 전송

---

## 🚀 설정 방법

### 1단계: GitHub Secrets 추가

GitHub 저장소에 다음 Secrets를 추가하세요:

**방법:**
1. GitHub 저장소 페이지 이동
2. `Settings` > `Secrets and variables` > `Actions` 클릭
3. `New repository secret` 버튼 클릭

**추가할 Secrets:**

#### SUPABASE_ANON_KEY (필수)
```
Name: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlseXlwc2Vxamx3c2Zha2FnYnBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyNjQxOTgsImV4cCI6MjA3NTg0MDE5OH0.ntprqBhhQvokLao9EHllN-Wr2ymVbFMpE6ueadNNSXM
```
> 📝 `.env.local` 파일의 `VITE_SUPABASE_ANON_KEY` 값을 복사하세요

#### RENDER_URL (선택 - Render 배포 후)
```
Name: RENDER_URL
Value: https://your-app-name.onrender.com
```
> 📝 Render에 배포한 후 추가하세요

---

### 2단계: GitHub에 Push

```bash
# 변경사항 커밋
git add .github/workflows/

git commit -m "feat: Add keep-alive workflows for Supabase and Render"

git push origin main
```

---

### 3단계: GitHub Actions 활성화 확인

1. GitHub 저장소에서 `Actions` 탭 클릭
2. 다음 워크플로우가 표시되는지 확인:
   - ✅ Supabase Keep Alive
   - ✅ Render Keep Alive
   - ✅ Keep Services Alive

3. 수동 실행 테스트:
   - 워크플로우 선택
   - `Run workflow` 버튼 클릭
   - 실행 로그 확인

---

## ⚙️ 동작 방식

### 📅 Supabase Keep Alive
- **실행 주기**: 매일 1회 (한국시간 오전 9시)
- **동작**:
  1. Supabase Health API 체크
  2. 데이터베이스 연결 테스트
  3. 활동 로그 기록

### 🌐 Render Keep Alive
- **실행 주기**: 10분마다
- **동작**:
  1. 배포된 사이트에 HTTP 요청
  2. Health 엔드포인트 체크
  3. 슬립 모드 방지

### 🔄 통합 Keep Alive
- **실행 주기**: 6시간마다
- **동작**:
  1. Supabase + Render 모두 핑
  2. 종합 상태 리포트

---

## 📊 모니터링

### GitHub Actions 실행 확인

1. **GitHub 저장소** → `Actions` 탭
2. 최근 실행 내역 확인
3. 실패 시 알림 받기:
   - `Settings` > `Notifications`
   - "Actions" 섹션에서 알림 활성화

### 실행 로그 확인

```
✅ Project is ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Summary:
   • Health API: 200
   • Database: 200
   • Status: ✅ Project is ACTIVE
```

### 문제 발생 시

**로그에 "Project might be PAUSED" 표시:**
1. https://supabase.com/dashboard 접속
2. `mewnion` 프로젝트 찾기
3. `Resume project` 버튼 클릭

---

## 💰 비용

**완전 무료!**
- ✅ GitHub Actions: 월 2,000분 무료 (충분함)
- ✅ 이 설정으로 사용하는 시간: **월 ~30분**
- ✅ 추가 비용 없음

---

## 🎯 예상 효과

### Before (설정 전)
- ❌ Supabase: 7일마다 수동으로 Resume 필요
- ❌ Render: 매번 1분 대기 (콜드 스타트)
- ❌ 사용자 경험 나쁨

### After (설정 후)
- ✅ Supabase: 항상 활성 상태
- ✅ Render: 즉시 응답 (슬립 없음)
- ✅ 사용자 경험 개선
- ✅ 완전 자동화

---

## 🔧 고급 설정

### 실행 주기 변경

**Supabase를 더 자주 핑하려면:**
```yaml
# .github/workflows/supabase-keep-alive.yml
schedule:
  - cron: '0 */6 * * *'  # 6시간마다
```

**Render 핑 주기 조정:**
```yaml
# .github/workflows/render-keep-alive.yml
schedule:
  - cron: '*/15 * * * *'  # 15분마다 (더 여유있게)
```

### 알림 추가

Slack이나 Discord로 알림을 받고 싶다면:
1. Webhook URL 생성
2. GitHub Secrets에 추가
3. 워크플로우에 알림 단계 추가

---

## ❓ FAQ

### Q: GitHub Actions 크레딧을 초과할까요?
**A:** 아니요. 이 설정은 월 ~30분만 사용하며, GitHub은 월 2,000분을 무료로 제공합니다.

### Q: Private 저장소에서도 작동하나요?
**A:** 네! Private 저장소도 동일하게 월 2,000분 무료입니다.

### Q: Render를 사용하지 않는다면?
**A:** `render-keep-alive.yml`만 삭제하시면 됩니다.

### Q: 더 간단한 방법은 없나요?
**A:** 외부 서비스(UptimeRobot, Cron-job.org)를 사용할 수 있지만, GitHub Actions가 가장 신뢰성이 높고 무료입니다.

---

## 📚 참고 자료

- [GitHub Actions 문서](https://docs.github.com/en/actions)
- [Supabase 가격 정책](https://supabase.com/pricing)
- [Render 무료 플랜](https://render.com/docs/free)

---

## ✅ 체크리스트

설정이 완료되었는지 확인하세요:

- [ ] GitHub Secrets에 `SUPABASE_ANON_KEY` 추가
- [ ] 워크플로우 파일 3개 커밋 및 푸시
- [ ] GitHub Actions 탭에서 워크플로우 확인
- [ ] 수동으로 한 번 실행해서 테스트
- [ ] (배포 후) `RENDER_URL` Secret 추가

---

**🎉 설정 완료!** 이제 서비스가 자동으로 활성 상태를 유지합니다.
