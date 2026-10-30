import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * Đếm số tăng dần khi cuộn tới. Nhận chuỗi như "+42%", "98.5%", "-80%", "100%".
 * Giữ nguyên tiền tố/hậu tố và số chữ số thập phân.
 */
const CountUp = ({ value, duration = 1.6 }) => {
  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(match ? '0' : value);

  useEffect(() => {
    if (!match || !inView) return undefined;
    const target = parseFloat(match[2]);
    const decimals = (match[2].split('.')[1] || '').length;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {display}
      {match[3]}
    </span>
  );
};

export default CountUp;

