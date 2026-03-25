import { useState, useEffect, useRef } from 'react';

function pad(n) { return String(n).padStart(2, '0'); }

const TARGET = new Date('2025-04-18T09:00:00+05:30');

function calcTime() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { d: '00', h: '00', m: '00', s: '00' };
  return {
    d: pad(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000)),
  };
}

function CountCard({ id, value, label }) {
  const [tick, setTick] = useState(false);
  const prev = useRef(value);

  useEffect(() => {
    if (prev.current !== value) {
      setTick(true);
      const t = setTimeout(() => setTick(false), 300);
      prev.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className={`countdown-card${tick ? ' tick' : ''}`} id={id}>
      <div className="countdown-num">{value}</div>
      <div className="countdown-lbl">{label}</div>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(calcTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown-section">
      <div className="countdown-inner reveal">
        <p className="section-label">Event Countdown</p>
        <h2 className="section-title">Mark Your Calendar</h2>
        <p className="section-sub">The clock is ticking. Are you ready?</p>

        <div className="countdown-grid">
          <CountCard id="cd-days"  value={time.d} label="Days"    />
          <CountCard id="cd-hours" value={time.h} label="Hours"   />
          <CountCard id="cd-mins"  value={time.m} label="Minutes" />
          <CountCard id="cd-secs"  value={time.s} label="Seconds" />
        </div>

        <div className="event-date-badge">
          📅 &nbsp; April 18–19, 2025 &nbsp;·&nbsp; TKM College of Engineering, Kollam
        </div>
      </div>
    </section>
  );
}
