import React, { useState, useRef, useEffect } from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  blurDataURL?: string;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder,
  blurDataURL,
  priority = false,
  sizes,
  srcSet
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { elementRef, isIntersecting } = useLazyLoading({
    rootMargin: '50px',
    triggerOnce: true
  });

  const shouldLoad = priority || isIntersecting;

  // Generate blur placeholder from base64
  const blurStyle = blurDataURL ? {
    backgroundImage: `url(${blurDataURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(10px)',
    transform: 'scale(1.1)'
  } : {};

  return (
    <div 
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {!isLoaded && blurDataURL && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={blurStyle}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {shouldLoad && (
        <picture>
          {/* Modern formats */}
          <source
            srcSet={srcSet?.replace(/\.(jpg|jpeg|png)/g, '.avif')}
            sizes={sizes}
            type="image/avif"
          />
          <source
            srcSet={srcSet?.replace(/\.(jpg|jpeg|png)/g, '.webp')}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback */}
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Error al cargar imagen</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;