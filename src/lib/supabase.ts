import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Profile {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface UserSettings {
  user_id: string;
  coins: number;
  total_activity: number;
  mining_rate: number;
  room_data: any;
  furniture: any[];
}

export interface Friendship {
  id: string;
  user_id: string;
  friend_id: string;
  status: 'pending' | 'accepted' | 'blocked';
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  read: boolean;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: 'visitor' | 'friend_request' | 'message' | 'system' | 'achievement';
  title: string;
  content?: string;
  link?: string;
  read: boolean;
  created_at: string;
}

// Re-declare Notification to avoid conflict with DOM Notification
export type NotificationData = Notification;

export interface UserPresence {
  user_id: string;
  online: boolean;
  last_seen: string;
  current_page?: string;
  updated_at: string;
}
