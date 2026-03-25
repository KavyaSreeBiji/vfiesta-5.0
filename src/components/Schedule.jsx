const day1 = [
  { time: '08:30 AM', title: 'Registration & Check-in',      note: 'Collect kits, badge & goodies' },
  { time: '09:30 AM', title: 'Inauguration Ceremony',        note: 'Chief guest address & lamp lighting' },
  { time: '10:30 AM', title: 'Round 1 — Technical Events',   note: 'Code Blitz, Circuit Quest begin' },
  { time: '01:00 PM', title: 'Lunch Break',                  note: 'Networking lunch provided' },
  { time: '02:00 PM', title: 'Design & Business Tracks',     note: 'UI/UX Arena, Startup Pitch Round 1' },
  { time: '05:00 PM', title: 'AI Bootcamp',                  note: 'Hands-on ML session with IEEE experts' },
  { time: '07:00 PM', title: 'Cultural Night',               note: 'Music, fun games & networking' },
];

const day2 = [
  { time: '09:00 AM', title: 'Finals — Technical Tracks',   note: 'Code Blitz & Circuit Quest finals' },
  { time: '10:00 AM', title: 'Techno Trivia Quiz',          note: 'Buzzer rounds, all colleges' },
  { time: '11:00 AM', title: 'Startup Pitch Finals',        note: 'Top 5 teams pitch to jury' },
  { time: '01:00 PM', title: 'Lunch & E-Sports Semis',      note: 'Semi-final brackets play out' },
  { time: '02:30 PM', title: 'Ad-Mad Show & Poster Pixel',  note: 'Fun events, open to all' },
  { time: '04:30 PM', title: 'Valedictory & Prize Distribution', note: 'Winners crowned, certificates awarded' },
  { time: '05:30 PM', title: '🎉 Festival Ends',            note: 'Memories last forever' },
];

function TimelineItem({ time, title, note, cyan }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot${cyan ? ' cyan' : ''}`} />
      <div className="timeline-content">
        <div className={`timeline-time${cyan ? ' cyan' : ''}`}>{time}</div>
        <div className="timeline-title">{title}</div>
        <div className="timeline-note">{note}</div>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule">
      <div className="schedule-header reveal">
        <p className="section-label">Event Schedule</p>
        <h2 className="section-title">Two Days of Action</h2>
        <p className="section-sub">April 18–19, 2025 · TKM College of Engineering</p>
      </div>

      <div className="schedule-days">
        <div>
          <h3 className="day-label" style={{ color: 'var(--accent1)' }}>Day 01 — April 18</h3>
          <div className="timeline reveal">
            {day1.map(item => <TimelineItem key={item.time} {...item} />)}
          </div>
        </div>
        <div>
          <h3 className="day-label" style={{ color: 'var(--accent3)' }}>Day 02 — April 19</h3>
          <div className="timeline day2 reveal">
            {day2.map(item => <TimelineItem key={item.time} {...item} cyan />)}
          </div>
        </div>
      </div>
    </section>
  );
}
