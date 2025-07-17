// Image compression and optimization utilities

export interface CompressionOptions {
  quality: number;
  maxWidth: number;
  maxHeight: number;
  format: 'jpeg' | 'webp' | 'avif';
}

export const compressImage = async (
  file: File,
  options: Partial<CompressionOptions> = {}
): Promise<Blob> => {
  const {
    quality = 0.8,
    maxWidth = 1920,
    maxHeight = 1080,
    format = 'webp'
  } = options;

  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx?.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        `image/${format}`,
        quality
      );
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

// Generate responsive image sizes
export const generateResponsiveImages = async (
  originalFile: File,
  sizes: number[] = [400, 800, 1200, 1600]
): Promise<{ [key: string]: Blob }> => {
  const results: { [key: string]: Blob } = {};

  for (const size of sizes) {
    const compressed = await compressImage(originalFile, {
      maxWidth: size,
      maxHeight: Math.round(size * 0.75), // 4:3 aspect ratio
      quality: size <= 800 ? 0.85 : 0.8,
      format: 'webp'
    });
    
    results[`${size}w`] = compressed;
  }

  return results;
};

// Image format detection and conversion
export const convertToModernFormats = async (
  file: File
): Promise<{ webp: Blob; avif?: Blob; original: File }> => {
  const webp = await compressImage(file, { format: 'webp', quality: 0.8 });
  
  let avif: Blob | undefined;
  try {
    // AVIF support check
    const canvas = document.createElement('canvas');
    const supportsAVIF = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    
    if (supportsAVIF) {
      avif = await compressImage(file, { format: 'avif', quality: 0.7 });
    }
  } catch (error) {
    console.warn('AVIF conversion not supported:', error);
  }

  return { webp, avif, original: file };
};