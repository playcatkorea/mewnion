import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { UserSettings } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export function useRoomSync() {
  const { user } = useAuth();
  const [roomData, setRoomData] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    if (!user) {
      setRoomData(null);
      setLoading(false);
      return;
    }

    loadRoomData();
    subscribeToRoomChanges();
  }, [user]);

  const loadRoomData = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) {
        // If no settings exist, create default
        if (error.code === 'PGRST116') {
          const { data: newData, error: insertError } = await supabase
            .from('user_settings')
            .insert({
              user_id: user.id,
              coins: 0,
              total_activity: 0,
              mining_rate: 1.0,
              room_data: {},
              furniture: [],
            })
            .select()
            .single();

          if (insertError) throw insertError;
          setRoomData(newData);
        } else {
          throw error;
        }
      } else {
        setRoomData(data);
      }
    } catch (error) {
      console.error('Failed to load room data:', error);
    } finally {
      setLoading(false);
    }
  };

  const subscribeToRoomChanges = () => {
    if (!user) return;

    const channel = supabase
      .channel(`room:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_settings',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setRoomData(payload.new as UserSettings);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  const updateRoomData = async (updates: Partial<UserSettings>): Promise<void> => {
    if (!user) throw new Error('User not authenticated');

    setSyncing(true);
    try {
      const { error } = await supabase
        .from('user_settings')
        .update(updates)
        .eq('user_id', user.id);

      if (error) throw error;

      // Update local state immediately
      setRoomData((prev) => (prev ? { ...prev, ...updates } : null));
    } catch (error) {
      console.error('Failed to update room data:', error);
      throw error;
    } finally {
      setSyncing(false);
    }
  };

  const addFurniture = async (furnitureItem: any): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    const updatedFurniture = [...(roomData.furniture || []), furnitureItem];
    await updateRoomData({ furniture: updatedFurniture });
  };

  const removeFurniture = async (furnitureId: string): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    const updatedFurniture = (roomData.furniture || []).filter(
      (item: any) => item.id !== furnitureId
    );
    await updateRoomData({ furniture: updatedFurniture });
  };

  const updateFurniturePosition = async (
    furnitureId: string,
    position: { x: number; y: number }
  ): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    const updatedFurniture = (roomData.furniture || []).map((item: any) =>
      item.id === furnitureId ? { ...item, position } : item
    );
    await updateRoomData({ furniture: updatedFurniture });
  };

  const addCoins = async (amount: number): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    const newCoins = roomData.coins + amount;
    await updateRoomData({ coins: newCoins });
  };

  const spendCoins = async (amount: number): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    if (roomData.coins < amount) {
      throw new Error('Insufficient coins');
    }

    const newCoins = roomData.coins - amount;
    await updateRoomData({ coins: newCoins });
  };

  const incrementActivity = async (): Promise<void> => {
    if (!roomData) throw new Error('Room data not loaded');

    const newActivity = roomData.total_activity + 1;
    await updateRoomData({ total_activity: newActivity });
  };

  return {
    roomData,
    loading,
    syncing,
    updateRoomData,
    addFurniture,
    removeFurniture,
    updateFurniturePosition,
    addCoins,
    spendCoins,
    incrementActivity,
    refresh: loadRoomData,
  };
}
