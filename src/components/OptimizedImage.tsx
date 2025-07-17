import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes,
  srcSet,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and AVIF sources for modern browsers
  const generateModernSources = (originalSrc: string) => {
    const baseName = originalSrc.split('.').slice(0, -1).join('.');
    return {
      avif: `${baseName}.avif`,
      webp: `${baseName}.webp`,
      fallback: originalSrc
    };
  };

  const sources = generateModernSources(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Structured data for images
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src,
    "description": alt,
    "width": width,
    "height": height
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Modern image formats with fallback */}
      <picture>
        {/* AVIF for maximum compression */}
        <source
          srcSet={srcSet?.replace(/\.(jpg|jpeg|png)/g, '.avif')}
          sizes={sizes}
          type="image/avif"
        />
        
        {/* WebP for good compression and wide support */}
        <source
          srcSet={srcSet?.replace(/\.(jpg|jpeg|png)/g, '.webp')}
          sizes={sizes}
          type="image/webp"
        />
        
        {/* Fallback image */}
        <img
          ref={imgRef}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${hasError ? 'hidden' : ''}`}
        />
      </picture>

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#96BE11] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Imagen no disponible</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;