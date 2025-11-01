import { useRef, useState } from 'react';
import { useImageUpload } from '../../hooks/useImageUpload';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../context/AuthContext';
import Button from '../base/Button';

interface AvatarUploadProps {
  currentAvatarUrl?: string;
  onUploadComplete?: (url: string) => void;
}

export default function AvatarUpload({ currentAvatarUrl, onUploadComplete }: AvatarUploadProps) {
  const { user } = useAuth();
  const { uploadImage, deleteImage, uploading, progress, error } = useImageUpload();
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentAvatarUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    try {
      // Show preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      // Upload image
      const result = await uploadImage(file, {
        bucket: 'avatars',
        folder: user.id,
        maxSizeMB: 5,
      });

      // Update profile
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: result.url })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // Delete old avatar if exists
      if (currentAvatarUrl) {
        try {
          const oldPath = currentAvatarUrl.split('/').slice(-2).join('/');
          await deleteImage('avatars', oldPath);
        } catch (err) {
          console.error('Failed to delete old avatar:', err);
        }
      }

      onUploadComplete?.(result.url);
      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error('Avatar upload failed:', err);
      setPreviewUrl(currentAvatarUrl || null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Avatar Preview */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-purple-500">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
              <i className="ri-user-line text-white text-5xl"></i>
            </div>
          )}
        </div>

        {/* Upload Progress Overlay */}
        {uploading && (
          <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-white text-sm font-medium">{progress}%</p>
            </div>
          </div>
        )}

        {/* Camera Icon Button */}
        <button
          onClick={handleButtonClick}
          disabled={uploading}
          className="absolute bottom-0 right-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 disabled:bg-gray-400 transition-colors shadow-lg"
        >
          <i className="ri-camera-line text-xl"></i>
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm text-center bg-red-50 px-4 py-2 rounded-lg">
          {error}
        </div>
      )}

      {/* Upload Instructions */}
      <div className="text-center text-sm text-gray-600">
        <p>JPG, PNG, GIF, WEBP</p>
        <p>최대 5MB</p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif,image/webp"
        onChange={handleFileSelect}
        className="hidden"
        disabled={uploading}
      />
    </div>
  );
}
