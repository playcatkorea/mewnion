#!/bin/bash

# Keep-Alive 자동 설정 스크립트
# 사용법: ./setup-keep-alive.sh

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 Mewnion Keep-Alive 자동 설정 스크립트"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 1. 환경 변수 파일 확인
echo "1️⃣ 환경 변수 확인 중..."
if [ ! -f ".env.local" ]; then
    echo "   ❌ .env.local 파일을 찾을 수 없습니다!"
    echo "   먼저 .env.local 파일을 생성하세요."
    exit 1
fi

# Supabase Anon Key 추출
SUPABASE_ANON_KEY=$(grep VITE_SUPABASE_ANON_KEY .env.local | cut -d '=' -f2)

if [ -z "$SUPABASE_ANON_KEY" ]; then
    echo "   ❌ SUPABASE_ANON_KEY를 찾을 수 없습니다!"
    exit 1
fi

echo "   ✅ Supabase Anon Key 확인"
echo ""

# 2. 워크플로우 파일 확인
echo "2️⃣ GitHub Actions 워크플로우 확인 중..."
WORKFLOWS=(
    ".github/workflows/keep-alive.yml"
    ".github/workflows/supabase-keep-alive.yml"
    ".github/workflows/render-keep-alive.yml"
)

for workflow in "${WORKFLOWS[@]}"; do
    if [ -f "$workflow" ]; then
        echo "   ✅ $workflow"
    else
        echo "   ❌ $workflow 파일이 없습니다!"
    fi
done
echo ""

# 3. Git 상태 확인
echo "3️⃣ Git 저장소 확인 중..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "   ❌ Git 저장소가 아닙니다!"
    echo "   먼저 'git init'을 실행하세요."
    exit 1
fi

REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [ -z "$REMOTE_URL" ]; then
    echo "   ⚠️ Git remote가 설정되지 않았습니다."
    echo "   GitHub에 저장소를 생성하고 다음 명령어를 실행하세요:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/mewnion.git"
    echo ""
else
    echo "   ✅ Remote: $REMOTE_URL"
fi
echo ""

# 4. GitHub Secrets 설정 안내
echo "4️⃣ GitHub Secrets 설정 안내"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "다음 단계를 따라 GitHub Secrets를 설정하세요:"
echo ""
echo "📍 설정 경로:"
echo "   GitHub 저장소 → Settings → Secrets and variables → Actions"
echo ""
echo "🔑 추가할 Secret:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Name:  SUPABASE_ANON_KEY"
echo "Value: $SUPABASE_ANON_KEY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "ℹ️ 위 값을 복사해서 GitHub Secret으로 추가하세요!"
echo ""

# 5. Git 커밋 및 푸시 제안
echo "5️⃣ Git 커밋 및 푸시"
echo ""

# 변경사항 확인
if ! git diff --quiet .github/ 2>/dev/null; then
    echo "변경된 파일이 있습니다. 커밋하시겠습니까? (y/n)"
    read -r response

    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo ""
        echo "커밋 중..."
        git add .github/workflows/
        git add KEEP_ALIVE_SETUP.md
        git add setup-keep-alive.sh
        git commit -m "feat: Add keep-alive workflows for Supabase and Render

- Add GitHub Actions workflows to prevent service sleep
- Supabase: Daily ping to prevent 7-day pause
- Render: 10-minute ping to prevent 15-minute sleep
- Add setup guide and automated setup script"

        echo "   ✅ 커밋 완료"
        echo ""

        if [ -n "$REMOTE_URL" ]; then
            echo "GitHub에 푸시하시겠습니까? (y/n)"
            read -r push_response

            if [[ "$push_response" =~ ^[Yy]$ ]]; then
                git push origin main || git push origin master
                echo "   ✅ 푸시 완료"
            else
                echo "   ⏭️ 푸시 건너뜀"
                echo "   나중에 수동으로 푸시하세요: git push origin main"
            fi
        fi
    else
        echo "   ⏭️ 커밋 건너뜀"
    fi
else
    echo "   ℹ️ 커밋할 변경사항이 없습니다."
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Keep-Alive 설정 완료!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 다음 단계:"
echo "   1. GitHub Secrets에 SUPABASE_ANON_KEY 추가"
echo "   2. GitHub Actions 탭에서 워크플로우 확인"
echo "   3. 수동으로 한 번 실행해서 테스트"
echo ""
echo "📚 자세한 설명: KEEP_ALIVE_SETUP.md 참고"
echo ""
