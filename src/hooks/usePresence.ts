import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { UserPresence } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export function usePresence(currentPage?: string) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Set user as online when component mounts
    const setOnline = async () => {
      await supabase.from('user_presence').upsert({
        user_id: user.id,
        online: true,
        current_page: currentPage,
        last_seen: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    };

    // Set user as offline when component unmounts
    const setOffline = async () => {
      await supabase.from('user_presence').upsert({
        user_id: user.id,
        online: false,
        last_seen: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    };

    // Update presence periodically
    const updatePresence = async () => {
      await supabase.from('user_presence').upsert({
        user_id: user.id,
        online: true,
        current_page: currentPage,
        last_seen: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    };

    setOnline();

    // Update presence every 30 seconds
    const interval = setInterval(updatePresence, 30000);

    // Handle page visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setOffline();
      } else {
        setOnline();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      setOffline();
    };
  }, [user, currentPage]);
}

export function useRoomVisitors(roomOwnerId: string) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user || !roomOwnerId || user.id === roomOwnerId) return;

    // Record visit
    const recordVisit = async () => {
      await supabase.from('visitors').insert({
        visited_user_id: roomOwnerId,
        visitor_user_id: user.id,
      });
    };

    recordVisit();
  }, [user, roomOwnerId]);
}
