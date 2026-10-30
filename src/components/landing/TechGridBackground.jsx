import React from 'react';

const PARTICLES = [
  // Chạy ngang (h) và dọc (v) dọc theo lưới, màu & tốc độ khác nhau – giống hero dabilux.com
  { dir: 'h', pos: '12%', duration: 7, delay: 0, color: '#139091' },
  { dir: 'h', pos: '28%', duration: 9, delay: 1.5, color: '#f59e0b' },
  { dir: 'h', pos: '46%', duration: 6.5, delay: 3, color: '#2dd4bf' },
  { dir: 'h', pos: '64%', duration: 8.5, delay: 0.8, color: '#139091' },
  { dir: 'h', pos: '82%', duration: 7.5, delay: 2.2, color: '#f59e0b' },
  { dir: 'v', pos: '10%', duration: 8, delay: 0.4, color: '#2dd4bf' },
  { dir: 'v', pos: '30%', duration: 10, delay: 2.5, color: '#139091' },
  { dir: 'v', pos: '55%', duration: 7, delay: 1.2, color: '#f59e0b' },
  { dir: 'v', pos: '78%', duration: 9, delay: 3.4, color: '#2dd4bf' },
  { dir: 'v', pos: '92%', duration: 8, delay: 0.1, color: '#139091' },
];

/**
 * Nền "tech grid": lưới mờ có mặt nạ radial + hạt sáng chạy dọc/ngang + 2 vầng sáng blur.
 * variant="light" cho nền sáng, "dark" cho nền tối. Tự ẩn hạt & glow trên mobile (như dabilux).
 */
const TechGridBackground = ({ variant = 'light' }) => {
  const dark = variant === 'dark';
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`tech-grid ${dark ? 'tech-grid-dark' : ''}`} />
      <div className="tg-glow tg-glow-1 hidden sm:block" />
      <div className="tg-glow tg-glow-2 hidden sm:block" />
      <div className="hidden sm:block">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`tg-particle ${p.dir === 'h' ? 'tg-particle-h' : 'tg-particle-v'}`}
            style={{
              [p.dir === 'h' ? 'top' : 'left']: p.pos,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
              '--glow': p.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGridBackground;

