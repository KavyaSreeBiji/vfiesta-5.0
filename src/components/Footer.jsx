export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-wrap">
            <span className="brand-text" style={{ fontSize: '1.8rem', fontWeight: '800', background: 'linear-gradient(90deg, #ff8a00, #e52e71)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>V-Fiesta 5.0</span>
          </div>
          <p>
            IEEE PIE Kerala Section promotes innovation and entrepreneurship
            among engineering students through events, workshops, and mentorship programs.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:pie@ieee-kerala.org">pie@ieee-kerala.org</a></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><a href="#">TKM CoE, Kollam</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter / X</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 IEEE PIE Kerala Section · V-Fiesta 5.0 · All rights reserved.</p>
        <div className="social-links">
          <a className="social-link" href="#" aria-label="Instagram">📸</a>
          <a className="social-link" href="#" aria-label="LinkedIn">💼</a>
          <a className="social-link" href="#" aria-label="Twitter">🐦</a>
        </div>
      </div>
    </footer>
  );
}
