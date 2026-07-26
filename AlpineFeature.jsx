import { useReveal } from '../hooks/useReveal';
import roomLakeImg from '../assets/images/room-lake.jpg';
import './AlpineFeature.css';

export default function AlpineFeature() {
  const labelRef = useReveal();
  const headlineRef = useReveal();
  const ctaRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="alpine-feature" id="services">
      <div className="alpine-feature-inner">
        <div className="alpine-left">
          <span className="alpine-label reveal" ref={labelRef}>
            Alpine mornings, reimagined
          </span>
          <h2 className="alpine-headline reveal reveal-delay-1" ref={headlineRef}>
            Wake up to the Alps<br />like never before
          </h2>
          <div className="alpine-cta reveal reveal-delay-2" ref={ctaRef}>
            <a href="#rooms" className="icon-btn" aria-label="Explore rooms">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="alpine-cta-text">Choose a room</span>
          </div>
        </div>
        <div className="alpine-right reveal reveal-delay-1" ref={imageRef}>
          <img
            src={roomLakeImg}
            alt="Luxury room interior with floor to ceiling windows overlooking lake and mountains"
            className="alpine-image"
          />
        </div>
      </div>
    </section>
  );
}
