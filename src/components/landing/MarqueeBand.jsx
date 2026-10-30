import React from 'react';

const DEFAULT_ITEMS = [
  '🍼 Nhắc mua sữa đúng chu kỳ',
  '👶 Bỉm size S · M · L · XL',
  '💬 Zalo ZNS tích vàng',
  '🔗 Kết nối KiotViet 30 giây',
  '🤰 Chăm sóc từ mẹ bầu đến bé 36 tháng',
  '🎁 Voucher sinh nhật & ngày hội thành viên',
  '📈 Tăng khách quay lại +42%',
];

const OUTLINE_ITEMS = [
  'MOBYFLOW',
  'NHẮC ĐÚNG LÚC',
  'MẸ BỈM YÊN TÂM',
  'TỰ ĐỘNG 24/7',
  'ZALO ZNS',
  'KIOTVIET',
];

/**
 * Dải chữ chạy ngang vô tận (marquee), dừng khi di chuột vào.
 * variant="solid": chữ đặc có emoji; variant="outline": chữ rỗng viền lớn như các dải của dabilux.com.
 */
const MarqueeBand = ({ items, reverse = false, variant = 'solid' }) => {
  const outline = variant === 'outline';
  const list = items || (outline ? OUTLINE_ITEMS : DEFAULT_ITEMS);

  const row = (suffix) => (
    <div key={suffix} aria-hidden={suffix === 'b'} className="flex shrink-0 items-center gap-10 pr-10">
      {list.map((t) => (
        <span key={`${suffix}-${t}`} className="flex items-center gap-10 whitespace-nowrap">
          <span className={outline ? 'marquee-outline-text' : ''}>{t}</span>
          <span className="text-amber-300">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee-band overflow-hidden bg-gradient-to-r from-teal-900 via-[#139091] to-teal-800 text-white ${
        outline ? 'py-5 text-3xl sm:text-5xl' : 'py-3.5 text-sm sm:text-base font-semibold'
      }`}
    >
      <div className={`marquee-track flex w-max ${reverse ? 'marquee-reverse' : ''}`}>
        {row('a')}
        {row('b')}
      </div>
    </div>
  );
};

export default MarqueeBand;
