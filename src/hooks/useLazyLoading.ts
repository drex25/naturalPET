import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadingOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useLazyLoading = (options: UseLazyLoadingOptions = {}) => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    triggerOnce = true
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, threshold, triggerOnce]);

  return {
    elementRef,
    isIntersecting: triggerOnce ? hasTriggered : isIntersecting
  };
};

// Hook for preloading critical images
export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src));
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(imageSources.map(preloadImage));
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (imageSources.length > 0) {
      preloadAllImages();
    } else {
      setIsLoading(false);
    }
  }, [imageSources]);

  return { loadedImages, isLoading };
};