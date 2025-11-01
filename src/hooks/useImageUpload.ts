import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface UploadOptions {
  bucket: string;
  folder?: string;
  maxSizeMB?: number;
  allowedTypes?: string[];
}

interface UploadResult {
  url: string;
  path: string;
}

export function useImageUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File, options: UploadOptions): string | null => {
    // Check file type
    const allowedTypes = options.allowedTypes || ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return '지원하지 않는 이미지 형식입니다. (JPG, PNG, GIF, WEBP만 가능)';
    }

    // Check file size
    const maxSize = (options.maxSizeMB || 5) * 1024 * 1024;
    if (file.size > maxSize) {
      return `파일 크기가 너무 큽니다. (최대 ${options.maxSizeMB || 5}MB)`;
    }

    return null;
  };

  const uploadImage = async (
    file: File,
    options: UploadOptions
  ): Promise<UploadResult> => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      // Validate file
      const validationError = validateFile(file, options);
      if (validationError) {
        throw new Error(validationError);
      }

      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const folder = options.folder || '';
      const filePath = folder ? `${folder}/${fileName}` : fileName;

      setProgress(30);

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from(options.bucket)
        .upload(filePath, file, {
          contentType: file.type,
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      setProgress(70);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(options.bucket)
        .getPublicUrl(filePath);

      setProgress(100);
      setUploading(false);

      return {
        url: urlData.publicUrl,
        path: data.path,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '이미지 업로드에 실패했습니다.';
      setError(errorMessage);
      setUploading(false);
      throw new Error(errorMessage);
    }
  };

  const deleteImage = async (bucket: string, path: string): Promise<void> => {
    try {
      const { error } = await supabase.storage.from(bucket).remove([path]);
      if (error) throw error;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '이미지 삭제에 실패했습니다.';
      throw new Error(errorMessage);
    }
  };

  return {
    uploadImage,
    deleteImage,
    uploading,
    progress,
    error,
  };
}
