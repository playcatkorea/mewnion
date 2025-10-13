import { useEffect } from 'react';
import { navigateTo } from '../../../router/navigator';
import { supabase } from '../../../lib/supabase';
import { showFeedback } from '../../../utils/navigation';

export default function AuthCallbackPage() {
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL에서 토큰 추출
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (data.session) {
          // 프로필 확인과 동시에 처리
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('username, onboarding_completed')
            .eq('id', data.session.user.id)
            .maybeSingle();

          // 프로필이 없으면 생성 후 바로 온보딩으로 (Google OAuth로 처음 로그인)
          if (!profile && !profileError) {
            // 프로필 생성은 백그라운드로 (await 제거)
            supabase
              .from('profiles')
              .insert({
                id: data.session.user.id,
                email: data.session.user.email,
                username: null,
                onboarding_completed: false,
              })
              .then(({ error: insertError }) => {
                if (insertError && insertError.code !== '23505') {
                  console.error('프로필 생성 실패:', insertError);
                }
              });

            // 즉시 온보딩으로 이동
            showFeedback('환영합니다! 프로필을 설정해주세요');
            navigateTo('/onboarding');
            return;
          }

          // 온보딩 미완료 시
          if (!profile?.username || !profile?.onboarding_completed) {
            showFeedback('프로필 설정을 완료해주세요');
            navigateTo('/onboarding');
            return;
          }

          // 모든 설정 완료
          showFeedback('로그인 성공!');
          navigateTo('/');
        } else {
          showFeedback('인증 실패', 'error');
          navigateTo('/login');
        }
      } catch (error: any) {
        console.error('Auth callback error:', error);
        showFeedback(error.message || '인증 실패', 'error');
        navigateTo('/login');
      }
    };

    handleAuthCallback();
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{background: '#000033'}}>
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">🐱</div>
        <h1 className="text-2xl font-bold terminal-text mb-2" style={{color: '#00ff00'}}>
          인증 처리 중...
        </h1>
        <p className="terminal-text" style={{color: '#00ffff'}}>
          잠시만 기다려주세요
        </p>
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
}
