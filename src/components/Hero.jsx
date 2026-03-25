export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-tag">🔥 5th Edition — Bigger Than Ever</div>
      <p className="hero-eyebrow">IEEE PIE Kerala Section Presents</p>

      <h1 className="hero-title">
        <span className="v">V</span><span className="fiesta">-Fiesta</span><br />
        <span className="five">5.0</span>
      </h1>

      <p className="hero-subtitle">
        The ultimate inter-collegiate tech fest celebrating innovation,
        creativity, and entrepreneurial spirit across Kerala.
      </p>

      <div className="hero-actions">
        <a href="#register" className="btn-primary">Register Now</a>
        <a href="#events" className="btn-outline">Explore Events →</a>
      </div>

      <div className="hero-stats">
        {[
          { num: '200+', lbl: 'Participants' },
          { num: '15+',  lbl: 'Events' },
          { num: '₹15K+', lbl: 'Prize Pool' },
          { num: '15+',  lbl: 'Colleges' },
        ].map(({ num, lbl }) => (
          <div className="hero-stat" key={lbl}>
            <div className="num">{num}</div>
            <div className="lbl">{lbl}</div>
          </div>
        ))}
      </div>

      <div className="hero-scroll">
        <div className="line" />
      </div>
    </section>
  );
}
