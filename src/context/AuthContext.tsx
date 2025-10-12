import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';
import { showFeedback } from '../utils/navigation';

type AuthUser = {
  id: string;
  name: string;
  email: string;
  username?: string;
  avatar_url?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  signup: (payload: { email: string; password: string }) => Promise<void>;
  checkUsernameAvailability: (username: string) => Promise<boolean>;
  setUsername: (username: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Supabase 세션 초기화 및 리스너 설정
  useEffect(() => {
    // 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadUserProfile(session.user);
      } else {
        setLoading(false);
      }
    });

    // 인증 상태 변경 리스너
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        await loadUserProfile(session.user);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 유저 프로필 로드
  const loadUserProfile = async (supabaseUser: User) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      const authUser: AuthUser = {
        id: supabaseUser.id,
        name: profile?.username || supabaseUser.email?.split('@')[0] || 'User',
        email: supabaseUser.email || '',
        username: profile?.username,
        avatar_url: profile?.avatar_url || supabaseUser.user_metadata?.avatar_url,
      };

      setUser(authUser);
    } catch (error) {
      console.error('프로필 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 이메일/비밀번호 로그인
  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;

      if (data.user) {
        await loadUserProfile(data.user);
        showFeedback('로그인 완료! 맞춤 콘텐츠를 준비했어요.');
      }
    } catch (error: any) {
      showFeedback(error.message || '로그인 실패', 'error');
      throw error;
    }
  };

  // Google 로그인
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw error;
    } catch (error: any) {
      showFeedback(error.message || 'Google 로그인 실패', 'error');
      throw error;
    }
  };

  // 회원가입
  const signup = async (payload: { email: string; password: string }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;

      if (data.user) {
        // 프로필 생성 (username은 나중에 설정)
        const { error: profileError } = await supabase.from('profiles').insert({
          id: data.user.id,
          email: data.user.email,
          username: null,
        });

        if (profileError && profileError.code !== '23505') {
          throw profileError;
        }

        showFeedback('회원가입 완료! 이제 닉네임을 설정해주세요.');
      }
    } catch (error: any) {
      showFeedback(error.message || '회원가입 실패', 'error');
      throw error;
    }
  };

  // 로그아웃
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setUser(null);
      showFeedback('안전하게 로그아웃했어요. 또 만나요!', 'info');
    } catch (error: any) {
      showFeedback(error.message || '로그아웃 실패', 'error');
      throw error;
    }
  };

  // 닉네임 중복 확인
  const checkUsernameAvailability = async (username: string): Promise<boolean> => {
    try {
      // 영어만 허용 체크
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        return false;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle();

      if (error) throw error;

      return !data; // 데이터가 없으면 사용 가능
    } catch (error) {
      console.error('닉네임 확인 실패:', error);
      return false;
    }
  };

  // 닉네임 설정
  const setUsername = async (username: string) => {
    if (!user) throw new Error('로그인이 필요합니다');

    try {
      // 영어만 허용
      if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        throw new Error('닉네임은 영어와 숫자, 언더스코어(_)만 사용 가능합니다');
      }

      // 중복 확인
      const isAvailable = await checkUsernameAvailability(username);
      if (!isAvailable) {
        throw new Error('이미 사용 중인 닉네임입니다');
      }

      // 닉네임 업데이트
      const { error } = await supabase
        .from('profiles')
        .update({ username, updated_at: new Date().toISOString() })
        .eq('id', user.id);

      if (error) throw error;

      // 상태 업데이트
      setUser({ ...user, username, name: username });
      showFeedback(`닉네임이 설정되었습니다! mewnion.io/${username}`);
    } catch (error: any) {
      showFeedback(error.message || '닉네임 설정 실패', 'error');
      throw error;
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      loading,
      login,
      loginWithGoogle,
      logout,
      signup,
      checkUsernameAvailability,
      setUsername,
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
