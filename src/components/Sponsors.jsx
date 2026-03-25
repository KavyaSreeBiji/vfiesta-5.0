const slots = ['Title Sponsor', 'Gold Partner', 'Gold Partner', 'Silver Partner', 'Silver Partner', 'Media Partner', 'Tech Partner', 'Your Logo Here'];

export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="reveal">
        <p className="section-label">Our Partners</p>
        <h2 className="section-title">Backed by the Best</h2>
        <p className="section-sub" style={{ marginTop: '.4rem' }}>
          Interested in sponsoring V-Fiesta 5.0?{' '}
          <a href="mailto:pie@ieee-kerala.org" style={{ color: 'var(--accent1)', textDecoration: 'none' }}>
            Get in touch →
          </a>
        </p>
        <div className="sponsors-grid">
          {slots.map(s => (
            <div className="sponsor-slot" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
