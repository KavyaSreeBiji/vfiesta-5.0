const features = [
  { icon: '💡', title: 'Innovation Hub',       desc: 'Ideate, prototype, and pitch breakthrough solutions' },
  { icon: '🚀', title: 'Entrepreneurship Drive', desc: 'Turn ideas into scalable ventures under expert mentorship' },
  { icon: '🏆', title: 'Competitive Edge',     desc: 'Technical competitions with ₹15K+ in prizes' },
  { icon: '🌐', title: 'IEEE Network',          desc: 'Connect with IEEE members, leaders & industry experts' },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-visual reveal">
        <div className="about-card-main">
          <div className="pie-logo-large">
            <h2 className="vfiesta-text-logo" style={{ fontSize: '2.5rem', fontWeight: '800', background: 'linear-gradient(90deg, #ff8a00, #e52e71)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: 0 }}>V-Fiesta 5.0</h2>
          </div>
          <div className="feature-row">
            {features.map(f => (
              <div className="feature-item" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-text">
                  <div className="title">{f.title}</div>
                  <div className="desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-content reveal">
        <p className="section-label">About V-Fiesta 5.0</p>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          Where Creativity<br />Meets Technology
        </h2>
        <p>
          <strong>V-Fiesta 5.0</strong> is the flagship annual tech-fest organized by the{' '}
          <strong>IEEE Promotion of Innovation and Entrepreneurship (PIE) Kerala Section</strong>.
          Now in its fifth edition, V-Fiesta has grown into one of Kerala's most anticipated inter-collegiate
          events, drawing participants from across the state.
        </p>
        <p>
          From hands-on technical competitions and creative challenges to business idea battles and fun
          events — V-Fiesta 5.0 is a celebration of the complete engineer. Whether you code, design, build,
          or pitch, there's a stage here for you.
        </p>
        <p>
          Hosted at <strong>TKM College of Engineering, Kollam</strong>, the 2025 edition promises bigger
          prizes, star judges, inspiring talks, and a vibrant atmosphere that you'll remember long after
          the last line of code is written.
        </p>
        <div className="highlight-box">
          ⚡ &nbsp; IEEE membership not required — <strong>open to all students</strong> from any college
          across Kerala.
        </div>
      </div>
    </section>
  );
}
