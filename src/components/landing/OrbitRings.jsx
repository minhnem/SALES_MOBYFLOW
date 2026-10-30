import React from 'react';

/**
 * Các vòng quỹ đạo xoay chậm kèm chấm sáng (mô phỏng orbit-wrap ở khối CTA cuối của dabilux.com).
 * Đặt trong phần tử `relative overflow-hidden`.
 */
const OrbitRings = () => {
  const rings = [
    { size: 340, duration: 28, reverse: false },
    { size: 560, duration: 40, reverse: true },
    { size: 780, duration: 56, reverse: false },
  ];
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {rings.map((r) => (
        <div
          key={r.size}
          className={`orbit-wrap ${r.reverse ? 'orbit-reverse' : ''}`}
          style={{ width: r.size, height: r.size, animationDuration: `${r.duration}s` }}
        >
          <span className="orbit-dot" />
        </div>
      ))}
    </div>
  );
};

export default OrbitRings;

