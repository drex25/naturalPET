// Image optimization utilities for NaturalPET website
export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
}

// Generate responsive image srcset
export const generateSrcSet = (basePath: string, sizes: number[]): string => {
  return sizes
    .map(size => `${basePath.replace('.', `-${size}w.`)} ${size}w`)
    .join(', ');
};

// Generate sizes attribute for responsive images
export const generateSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([media, size]) => `${media} ${size}`)
    .join(', ');
};

// Image compression and format optimization
export const getOptimizedImageUrl = (
  originalUrl: string, 
  width: number, 
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string => {
  // This would integrate with a service like Cloudinary or ImageKit
  return `${originalUrl}?w=${width}&f=${format}&q=auto`;
};

// Lazy loading intersection observer
export const createLazyLoadObserver = (): IntersectionObserver => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          const srcset = img.dataset.srcset;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          if (srcset) {
            img.srcset = srcset;
            img.removeAttribute('data-srcset');
          }
          
          img.classList.remove('lazy');
          img.classList.add('loaded');
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );
};