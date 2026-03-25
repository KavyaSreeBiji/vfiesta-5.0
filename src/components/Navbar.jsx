import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="navbar">
        <a href="#hero" className="nav-logo">
          <img src="/logo.png" alt="V-Fiesta 5.0" className="brand-logo" />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#register" className="nav-cta">Register</a></li>
        </ul>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setMobileOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#events" onClick={closeMobile}>Events</a>
        <a href="#schedule" onClick={closeMobile}>Schedule</a>
        <a href="#sponsors" onClick={closeMobile}>Sponsors</a>
        <a href="#register" onClick={closeMobile}>Register Now →</a>
      </div>
    </>
  );
}
