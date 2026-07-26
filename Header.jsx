import { useState } from 'react';
import { useWindowScroll } from '../hooks/useScrollProgress';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useWindowScroll();
  const scrolled = scrollY > 60;

  const headerClass = [
    'site-header',
    scrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} id="site-header">
      <div className="header-inner">
        <a href="#" className="logo">NERD</a>

        <nav className="main-nav">
          <a href="#rooms" className="nav-link" onClick={() => setMenuOpen(false)}>Rooms</a>
          <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</a>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn btn-signup">Sign up</a>
          <a href="#" className="btn btn-login">Log in</a>
        </div>

        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
