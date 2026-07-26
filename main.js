/* ========================================
   NERD — Main JavaScript
   Header scroll, reveal animations, mobile menu
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll state ──
  const header = document.getElementById('site-header');

  const updateHeader = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();


  // ── Mobile menu toggle ──
  const menuToggle = document.getElementById('mobile-menu-toggle');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
      });
    });
  }


  // ── Scroll reveal ──
  const revealTargets = [
    { selector: '.alpine-label', delay: 0 },
    { selector: '.alpine-headline', delay: 1 },
    { selector: '.alpine-cta', delay: 2 },
    { selector: '.alpine-right', delay: 1 },
    { selector: '.room-card', delay: -1 },  // -1 means stagger by index
    { selector: '.footer-tagline', delay: 0 },
    { selector: '.footer-col', delay: -1 },
    { selector: '.footer-wordmark', delay: 0 },
  ];

  const revealElements = [];

  revealTargets.forEach(({ selector, delay }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      el.classList.add('reveal');
      if (delay === -1) {
        el.classList.add(`reveal-delay-${index + 1}`);
      } else if (delay > 0) {
        el.classList.add(`reveal-delay-${delay}`);
      }
      revealElements.push(el);
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));


  // ── Smooth parallax on hero image ──
  const heroImage = document.querySelector('.hero-image');

  if (heroImage) {
    let ticking = false;

    const parallaxHero = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;

      if (scrollY < heroHeight) {
        const translate = scrollY * 0.15;
        heroImage.style.transform = `translateY(${translate}px) scale(1.02)`;
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(parallaxHero);
        ticking = true;
      }
    }, { passive: true });
  }

});
