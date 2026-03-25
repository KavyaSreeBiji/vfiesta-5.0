import { useEffect } from 'react';
import Cursor   from './components/Cursor';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Countdown from './components/Countdown';
import About    from './components/About';
import Events   from './components/Events';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Register from './components/Register';
import Footer   from './components/Footer';

export default function App() {
  // Scroll-reveal IntersectionObserver
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Events />
      <Schedule />
      <Sponsors />
      <Register />
      <Footer />
    </>
  );
}
