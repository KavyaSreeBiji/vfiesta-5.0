import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    let rafId;
    const animate = () => {
      const { mx, my } = pos.current;
      let { rx, ry } = pos.current;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      pos.current.rx = rx;
      pos.current.ry = ry;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const interactables = document.querySelectorAll('a,button,[class*="card"],[class*="btn"]');
    const enterHandler = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--accent2)';
    };
    const leaveHandler = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'var(--accent1)';
    };
    interactables.forEach(el => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
