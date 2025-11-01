import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Friendship, Profile } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export interface FriendProfile extends Profile {
  friendship_id: string;
  friendship_status: 'pending' | 'accepted' | 'blocked';
  is_requester: boolean;
  online?: boolean;
  last_seen?: string;
}

export function useFriends() {
  const { user } = useAuth();
  const [friends, setFriends] = useState<FriendProfile[]>([]);
  const [pendingRequests, setPendingRequests] = useState<FriendProfile[]>([]);
  const [sentRequests, setSentRequests] = useState<FriendProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFriends([]);
      setPendingRequests([]);
      setSentRequests([]);
      setLoading(false);
      return;
    }

    loadFriends();
    subscribeToFriendships();
  }, [user]);

  const loadFriends = async () => {
    if (!user) return;

    try {
      // Get all friendships where user is involved
      const { data: friendships, error } = await supabase
        .from('friendships')
        .select(`
          *,
          user_profile:user_id(id, username, avatar_url, email, created_at, updated_at),
          friend_profile:friend_id(id, username, avatar_url, email, created_at, updated_at)
        `)
        .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const acceptedFriends: FriendProfile[] = [];
      const incoming: FriendProfile[] = [];
      const outgoing: FriendProfile[] = [];

      for (const friendship of friendships || []) {
        const isRequester = friendship.user_id === user.id;
        const friendData = isRequester
          ? friendship.friend_profile
          : friendship.user_profile;

        const friendProfile: FriendProfile = {
          ...friendData,
          friendship_id: friendship.id,
          friendship_status: friendship.status,
          is_requester: isRequester,
        };

        if (friendship.status === 'accepted') {
          acceptedFriends.push(friendProfile);
        } else if (friendship.status === 'pending') {
          if (isRequester) {
            outgoing.push(friendProfile);
          } else {
            incoming.push(friendProfile);
          }
        }
      }

      // Get presence info for accepted friends
      if (acceptedFriends.length > 0) {
        const friendIds = acceptedFriends.map((f) => f.id);
        const { data: presenceData } = await supabase
          .from('user_presence')
          .select('*')
          .in('user_id', friendIds);

        acceptedFriends.forEach((friend) => {
          const presence = presenceData?.find((p) => p.user_id === friend.id);
          if (presence) {
            friend.online = presence.online;
            friend.last_seen = presence.last_seen;
          }
        });
      }

      setFriends(acceptedFriends);
      setPendingRequests(incoming);
      setSentRequests(outgoing);
    } catch (error) {
      console.error('Failed to load friends:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToFriendships = () => {
    if (!user) return;

    const channel = supabase
      .channel(`friendships:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'friendships',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          loadFriends();
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'friendships',
          filter: `friend_id=eq.${user.id}`,
        },
        () => {
          loadFriends();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  const sendFriendRequest = async (friendUsername: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    // Get friend's profile by username
    const { data: friendProfile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', friendUsername)
      .single();

    if (profileError) throw new Error('User not found');
    if (friendProfile.id === user.id) throw new Error('Cannot send friend request to yourself');

    // Check if friendship already exists
    const { data: existing } = await supabase
      .from('friendships')
      .select('id, status')
      .or(
        `and(user_id.eq.${user.id},friend_id.eq.${friendProfile.id}),and(user_id.eq.${friendProfile.id},friend_id.eq.${user.id})`
      )
      .maybeSingle();

    if (existing) {
      if (existing.status === 'accepted') {
        throw new Error('Already friends');
      } else if (existing.status === 'pending') {
        throw new Error('Friend request already sent');
      } else if (existing.status === 'blocked') {
        throw new Error('Cannot send friend request');
      }
    }

    // Create friend request
    const { error } = await supabase.from('friendships').insert({
      user_id: user.id,
      friend_id: friendProfile.id,
      status: 'pending',
    });

    if (error) throw error;

    await loadFriends();
  };

  const acceptFriendRequest = async (friendshipId: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('friendships')
      .update({ status: 'accepted' })
      .eq('id', friendshipId)
      .eq('friend_id', user.id);

    if (error) throw error;

    await loadFriends();
  };

  const rejectFriendRequest = async (friendshipId: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('friendships')
      .delete()
      .eq('id', friendshipId)
      .eq('friend_id', user.id);

    if (error) throw error;

    await loadFriends();
  };

  const removeFriend = async (friendshipId: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('friendships')
      .delete()
      .eq('id', friendshipId)
      .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`);

    if (error) throw error;

    await loadFriends();
  };

  const blockUser = async (friendshipId: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('friendships')
      .update({ status: 'blocked' })
      .eq('id', friendshipId)
      .eq('user_id', user.id);

    if (error) throw error;

    await loadFriends();
  };

  return {
    friends,
    pendingRequests,
    sentRequests,
    loading,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
    blockUser,
    refresh: loadFriends,
  };
}
