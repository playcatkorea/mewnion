import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Message } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export interface MessageWithProfile extends Message {
  sender_username?: string;
  sender_avatar_url?: string;
  recipient_username?: string;
  recipient_avatar_url?: string;
}

export function useMessages(recipientId?: string) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<MessageWithProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!user) {
      setMessages([]);
      setLoading(false);
      return;
    }

    loadMessages();
    subscribeToMessages();
  }, [user, recipientId]);

  const loadMessages = async () => {
    if (!user) return;

    try {
      let query = supabase
        .from('messages')
        .select(`
          *,
          sender:sender_id(username, avatar_url),
          recipient:recipient_id(username, avatar_url)
        `)
        .order('created_at', { ascending: true });

      if (recipientId) {
        // Get messages between user and specific recipient
        query = query.or(
          `and(sender_id.eq.${user.id},recipient_id.eq.${recipientId}),and(sender_id.eq.${recipientId},recipient_id.eq.${user.id})`
        );
      } else {
        // Get all messages involving user
        query = query.or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`);
      }

      const { data, error } = await query;

      if (error) throw error;

      const messagesWithProfiles: MessageWithProfile[] = (data || []).map((msg) => ({
        ...msg,
        sender_username: msg.sender?.username,
        sender_avatar_url: msg.sender?.avatar_url,
        recipient_username: msg.recipient?.username,
        recipient_avatar_url: msg.recipient?.avatar_url,
      }));

      setMessages(messagesWithProfiles);

      // Mark received messages as read
      if (recipientId) {
        const unreadMessages = messagesWithProfiles
          .filter((msg) => msg.recipient_id === user.id && !msg.read)
          .map((msg) => msg.id);

        if (unreadMessages.length > 0) {
          await supabase
            .from('messages')
            .update({ read: true })
            .in('id', unreadMessages);
        }
      }
    } catch (error) {
      console.error('Failed to load messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToMessages = () => {
    if (!user) return;

    const channel = supabase
      .channel(`messages:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `sender_id=eq.${user.id}`,
        },
        async (payload) => {
          const newMessage = payload.new as Message;

          // Fetch sender and recipient profiles
          const { data: sender } = await supabase
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', newMessage.sender_id)
            .single();

          const { data: recipient } = await supabase
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', newMessage.recipient_id)
            .single();

          setMessages((prev) => [
            ...prev,
            {
              ...newMessage,
              sender_username: sender?.username,
              sender_avatar_url: sender?.avatar_url,
              recipient_username: recipient?.username,
              recipient_avatar_url: recipient?.avatar_url,
            },
          ]);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `recipient_id=eq.${user.id}`,
        },
        async (payload) => {
          const newMessage = payload.new as Message;

          // Fetch sender and recipient profiles
          const { data: sender } = await supabase
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', newMessage.sender_id)
            .single();

          const { data: recipient } = await supabase
            .from('profiles')
            .select('username, avatar_url')
            .eq('id', newMessage.recipient_id)
            .single();

          setMessages((prev) => [
            ...prev,
            {
              ...newMessage,
              sender_username: sender?.username,
              sender_avatar_url: sender?.avatar_url,
              recipient_username: recipient?.username,
              recipient_avatar_url: recipient?.avatar_url,
            },
          ]);

          // Auto-mark as read if viewing conversation
          if (recipientId === newMessage.sender_id) {
            await supabase
              .from('messages')
              .update({ read: true })
              .eq('id', newMessage.id);
          }
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  const sendMessage = async (recipientUserId: string, content: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');
    if (!content.trim()) throw new Error('Message cannot be empty');
    if (content.length > 2000) throw new Error('Message too long (max 2000 characters)');

    setSending(true);
    try {
      const { error } = await supabase.from('messages').insert({
        sender_id: user.id,
        recipient_id: recipientUserId,
        content: content.trim(),
      });

      if (error) throw error;
    } catch (error) {
      console.error('Failed to send message:', error);
      throw error;
    } finally {
      setSending(false);
    }
  };

  const deleteMessage = async (messageId: string): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    try {
      const { error } = await supabase
        .from('messages')
        .delete()
        .eq('id', messageId)
        .eq('sender_id', user.id);

      if (error) throw error;

      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    } catch (error) {
      console.error('Failed to delete message:', error);
      throw error;
    }
  };

  const getConversations = () => {
    const conversationMap = new Map<string, MessageWithProfile[]>();

    messages.forEach((msg) => {
      const otherUserId =
        msg.sender_id === user?.id ? msg.recipient_id : msg.sender_id;

      if (!conversationMap.has(otherUserId)) {
        conversationMap.set(otherUserId, []);
      }
      conversationMap.get(otherUserId)!.push(msg);
    });

    return Array.from(conversationMap.entries()).map(([userId, msgs]) => {
      const latestMsg = msgs[msgs.length - 1];
      const unreadCount = msgs.filter(
        (m) => m.recipient_id === user?.id && !m.read
      ).length;

      return {
        userId,
        username:
          latestMsg.sender_id === userId
            ? latestMsg.sender_username
            : latestMsg.recipient_username,
        avatar_url:
          latestMsg.sender_id === userId
            ? latestMsg.sender_avatar_url
            : latestMsg.recipient_avatar_url,
        lastMessage: latestMsg,
        unreadCount,
        messages: msgs,
      };
    }).sort((a, b) =>
      new Date(b.lastMessage.created_at).getTime() -
      new Date(a.lastMessage.created_at).getTime()
    );
  };

  return {
    messages,
    loading,
    sending,
    sendMessage,
    deleteMessage,
    getConversations,
    refresh: loadMessages,
  };
}
