import { useRef, useEffect, useCallback } from 'react';
import spaPoolImg from '../assets/images/spa-pool.jpg';
import './SpaBleed.css';

export default function SpaBleed() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const animate = useCallback(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only animate when in viewport
    if (rect.bottom < 0 || rect.top > windowHeight) return;

    const sectionHeight = rect.height;
    const scrolled = windowHeight - rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / (windowHeight + sectionHeight)));

    // Subtle zoom: 1.08 down to 1.0
    const scale = 1.08 - progress * 0.08;
    // Parallax vertical shift
    const translateY = (progress - 0.5) * 30;

    imageRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          animate();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animate();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  return (
    <section className="spa-bleed" id="about" ref={sectionRef}>
      <img
        ref={imageRef}
        src={spaPoolImg}
        alt="Infinity pool with snow covered mountains in the background"
        className="spa-bleed-image"
      />
    </section>
  );
}
