import { useReveal } from '../hooks/useReveal';
import './Footer.css';

export default function Footer() {
  const taglineRef = useReveal();
  const col1Ref = useReveal();
  const col2Ref = useReveal();
  const col3Ref = useReveal();
  const wordmarkRef = useReveal();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-tagline reveal" ref={taglineRef}>
            <p>Refined interiors, peaceful surroundings,<br />and a panorama that inspires every day.</p>
          </div>
          <div className="footer-columns">
            <div className="footer-col reveal reveal-delay-1" ref={col1Ref}>
              <h3 className="footer-col-title">Explore</h3>
              <ul className="footer-col-links">
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col reveal reveal-delay-2" ref={col2Ref}>
              <h3 className="footer-col-title">Follow us</h3>
              <ul className="footer-col-links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
            <div className="footer-col reveal reveal-delay-3" ref={col3Ref}>
              <h3 className="footer-col-title">Contact us</h3>
              <ul className="footer-col-links">
                <li><a href="mailto:stay@nerd.com">stay@nerd.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-credit">Made by VELURYN AGNECY</span>
        </div>
      </div>
      <div className="footer-wordmark reveal" ref={wordmarkRef}>
        <span>NERD</span>
      </div>
    </footer>
  );
}
