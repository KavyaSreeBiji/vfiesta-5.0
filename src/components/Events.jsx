const events = [
  {
    color: 'c1', cat: 'cat-tech', catLabel: 'Technical',
    name: 'Code Blitz',
    desc: 'High-intensity competitive programming. Solve algorithmic challenges under the clock — fastest and most optimal wins.',
    chips: ['⏱ 2 hrs', '👤 Solo', '🏆 ₹5,000'],
  },
  {
    color: 'c2', cat: 'cat-design', catLabel: 'Design',
    name: 'UI/UX Arena',
    desc: 'Design intuitive, beautiful interfaces for a given problem statement. Judged on usability, aesthetics and innovation.',
    chips: ['⏱ 3 hrs', '👥 Duo', '🏆 ₹4,000'],
  },
  {
    color: 'c3', cat: 'cat-biz', catLabel: 'Business',
    name: 'Startup Pitch',
    desc: 'Pitch your startup idea to a panel of investors and entrepreneurs. Compete for seed funding and mentorship.',
    chips: ['⏱ 5 min', '👥 Team 3', '🏆 ₹8,000'],
  },
  {
    color: 'c1', cat: 'cat-tech', catLabel: 'Technical',
    name: 'Circuit Quest',
    desc: 'Design and troubleshoot electronic circuits. Tests your hardware intuition, schematic reading, and problem-solving.',
    chips: ['⏱ 2.5 hrs', '👥 Duo', '🏆 ₹4,000'],
  },
  {
    color: 'c4', cat: 'cat-gaming', catLabel: 'Gaming',
    name: 'E-Sports Blitz',
    desc: 'Compete in mobile and PC esports tournaments. Brackets, live commentary, and glory on the big screen.',
    chips: ['⏱ All day', '👥 Squad', '🏆 ₹6,000'],
  },
  {
    color: 'c5', cat: 'cat-fun', catLabel: 'Fun',
    name: 'Techno Trivia',
    desc: 'Quiz competition spanning tech, science, pop culture, and current affairs. Fast buzzer rounds keep the energy high.',
    chips: ['⏱ 1.5 hrs', '👥 Team 3', '🏆 ₹3,000'],
  },
  {
    color: 'c2', cat: 'cat-design', catLabel: 'Design',
    name: 'Poster Pixel',
    desc: 'Digital poster design challenge with a surprise theme. Creativity, composition, and speed are the keys to victory.',
    chips: ['⏱ 2 hrs', '👤 Solo', '🏆 ₹3,000'],
  },
  {
    color: 'c3', cat: 'cat-biz', catLabel: 'Business',
    name: 'Ad-Mad Show',
    desc: 'Market a bizarre product with wit, creativity and persuasion. The most entertaining advertisement team takes the crown.',
    chips: ['⏱ 3 min', '👥 Team 4', '🏆 ₹3,500'],
  },
  {
    color: 'c6', cat: 'cat-skill', catLabel: 'Workshop',
    name: 'AI Bootcamp',
    desc: 'Hands-on workshop introducing machine learning and AI model building. Build a mini-project and get certified by IEEE PIE.',
    chips: ['⏱ 4 hrs', '👤 Solo', '📜 Certificate'],
  },
];

export default function Events() {
  return (
    <section id="events">
      <div className="events-header reveal">
        <p className="section-label">Competitions &amp; Events</p>
        <h2 className="section-title">15+ Events Across 6 Tracks</h2>
        <p className="section-sub">Choose your battlefield. Every event has a cash prize for the top 3.</p>
      </div>

      <div className="events-grid">
        {events.map((ev, i) => (
          <div
            className={`event-card ${ev.color} reveal`}
            key={ev.name}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <span className={`event-cat ${ev.cat}`}>{ev.catLabel}</span>
            <div className="event-name">{ev.name}</div>
            <p className="event-desc">{ev.desc}</p>
            <div className="event-meta">
              {ev.chips.map(chip => (
                <div className="event-chip" key={chip}>{chip}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
