import { useRef, useEffect, useState, useCallback } from 'react';
import heroImg from '../assets/images/hero.jpg';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const animate = useCallback(() => {
    if (!sectionRef.current) return;

    const scrollY = window.scrollY;
    const sectionHeight = sectionRef.current.offsetHeight;
    const progress = Math.min(1, Math.max(0, scrollY / sectionHeight));

    // Zoom: starts at scale 1.15, zooms out to 1.0 as you scroll past
    const scale = 1.15 - progress * 0.15;
    // Parallax: subtle upward drift
    const translateY = progress * sectionHeight * 0.12;
    // Content fade: fades out as you scroll
    const contentOpacity = 1 - progress * 1.5;
    const contentTranslate = progress * 40;

    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    }

    if (contentRef.current) {
      contentRef.current.style.opacity = Math.max(0, contentOpacity);
      contentRef.current.style.transform = `translateY(${contentTranslate}px)`;
    }
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
    <section className={`hero ${loaded ? 'hero--loaded' : ''}`} id="hero" ref={sectionRef}>
      <div className="hero-image-wrapper">
        <img
          ref={imageRef}
          src={heroImg}
          alt="Curved organic architecture nestled in alpine mountains at golden hour"
          className="hero-image"
          onLoad={() => setLoaded(true)}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content" ref={contentRef}>
        <h1 className="hero-headline">Find out the best stay.</h1>
        <p className="hero-subtext">
          NERD is a contemporary mountain retreat crafted for the ones who seek stillness.
        </p>
        <a href="#rooms" className="btn btn-hero">Choose a room</a>
      </div>
    </section>
  );
}
