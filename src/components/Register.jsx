import { useState } from 'react';

const pricing = [
  { amount: '₹150', label: 'Per Event', color: 'var(--accent1)', featured: false },
  { amount: '₹400', label: 'Combo Pack (3+)', color: 'var(--accent2)', featured: false },
  { amount: '₹600', label: 'All-Access Pass', color: 'var(--accent3)', featured: true },
];

export default function Register() {
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    alert(`🎉 Thanks! We'll notify ${email} when registration opens for V-Fiesta 5.0.`);
    setEmail('');
  };

  return (
    <section id="register">
      <div className="register-bg" />
      <div className="register-inner reveal">
        <p className="section-label">Ready to Compete?</p>
        <h2>Join V-Fiesta <span style={{ color: 'var(--accent1)' }}>5.0</span></h2>
        <p>
          Enter your email to get registration updates, event details,
          and an early-bird reminder. Limited spots available per event.
        </p>
        <div className="register-form">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="btn-primary" onClick={handleRegister} style={{ cursor: 'none', whiteSpace: 'nowrap' }}>
            Notify Me
          </button>
        </div>
        <p className="register-note">Full registration opens soon · No spam · Unsubscribe anytime</p>

        <div className="pricing-grid">
          {pricing.map(p => (
            <div className={`price-card${p.featured ? ' featured' : ''}`} key={p.label}>
              <div className="amount" style={{ color: p.color }}>{p.amount}</div>
              <div className="label">{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
