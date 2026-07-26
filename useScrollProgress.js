import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for scroll-driven values.
 * Returns a normalized progress value (0–1) based on how far
 * the element has scrolled through the viewport.
 */
export function useScrollProgress(options = {}) {
  const { start = 0, end = 1 } = options;
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Element top relative to viewport
    const elementTop = rect.top;
    const elementHeight = rect.height;

    // Progress: 0 when element top enters viewport bottom,
    // 1 when element bottom leaves viewport top
    const total = windowHeight + elementHeight;
    const scrolled = windowHeight - elementTop;
    const raw = Math.max(0, Math.min(1, scrolled / total));

    // Map to caller's desired range
    const mapped = start + raw * (end - start);
    setProgress(mapped);
  }, [start, end]);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(update);
    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [update]);

  return [ref, progress];
}

/**
 * Custom hook that returns the raw window scroll position.
 */
export function useWindowScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
