import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import {
  ThunderboltFilled,
  PlayCircleOutlined,
  StarFilled,
  ArrowDownOutlined,
} from '@ant-design/icons';
import TechGridBackground from './TechGridBackground';

/**
 * Con trỏ lang thang riêng cho Statement Hero (phong cách Dabilux)
 * Lướt nhẹ nhàng giữa các điểm nhấn của dòng Statement, click nháy vòng tròn
 */
const StatementCursor = () => {
  const [pos, setPos] = useState({ x: 50, y: 46 });
  const [clicking, setClicking] = useState(false);
  const [label, setLabel] = useState('MOBYFLOW');

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const waypoints = [
      { x: 48, y: 38, text: 'MOBYFLOW' },
      { x: 30, y: 48, text: 'CHU KỲ BỈM SỮA' },
      { x: 68, y: 56, text: 'ZALO ZNS TÍCH VÀNG' },
      { x: 52, y: 70, text: 'ĐỒNG BỘ KIOTVIET' },
    ];

    let step = 0;
    let clickTimer;
    let holdTimer;

    const interval = setInterval(() => {
      step = (step + 1) % waypoints.length;
      const target = waypoints[step];
      setPos({ x: target.x, y: target.y });
      setLabel(target.text);

      clickTimer = setTimeout(() => {
        setClicking(true);
        holdTimer = setTimeout(() => setClicking(false), 500);
      }, 1600);
    }, 4200);

    return () => {
      clearInterval(interval);
      clearTimeout(clickTimer);
      clearTimeout(holdTimer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="wandering-cursor hidden md:block"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        transition: 'left 2.4s cubic-bezier(0.45, 0, 0.2, 1), top 2.4s cubic-bezier(0.45, 0, 0.2, 1)',
      }}
    >
      <div className={`cursor-inner ${clicking ? 'clicking' : ''}`}>
        <span className="cursor-click-ring" />
        <svg
          className="cursor-icon"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          style={{ transform: clicking ? 'scale(0.88) translate(-2px, -2px)' : 'none' }}
        >
          <path
            d="M4 2l16 9.2-7 1.8-3.6 6.6L4 2z"
            fill="#139091"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        <span className="cursor-label !bg-gradient-to-r !from-[#139091] !to-teal-500 !text-white !font-black !tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
};

/**
 * Hiệu ứng từng ký tự trượt lên (letter-rise) từ mờ về nét chuẩn Dabilux
 */
const LetterRiseLine = ({ text, startIdx = 0, isAccent = false }) => {
  const chars = Array.from(text);
  return (
    <span className="statement-line">
      <span className="reveal-line load">
        {chars.map((ch, i) => (
          <span
            key={i}
            className={`letter ${isAccent ? 'accent text-[#F06430]' : 'text-white'}`}
            style={{ '--i': startIdx + i }}
          >
            <span className="glyph">{ch === ' ' ? '\u00A0' : ch}</span>
          </span>
        ))}
      </span>
    </span>
  );
};

/**
 * StatementHeroSection - Hero landing page phong cách Dabilux.com
 * Thiết kế nền tối sang trọng, typography statement khổ lớn, công nghệ lưới hạt ánh sáng và con trỏ ảo.
 */
const StatementHeroSection = ({ onOpenTrial }) => {
  const handleScrollToDemo = () => {
    const el = document.getElementById('interactive-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="statement-hero" className="statement-section relative overflow-hidden">
      {/* 1. Lưới công nghệ Tech-grid + Hạt sáng chạy + Vầng sáng mờ lớn */}
      <TechGridBackground variant="dark" />

      {/* 2. Con trỏ lang thang Statement */}
      <StatementCursor />

      {/* 3. Nội dung trung tâm Statement khổ lớn */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="statement-inner mx-auto flex flex-col items-center text-center">
          
          {/* Tagline định vị nhỏ phía trên */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-300">
              Giải Pháp Tự Động Hóa Chăm Sóc Chu Kỳ Tiêu Dùng
            </span>
          </div>

          {/* Dòng tiêu đề STATEMENT Khổng Lồ 3 Dòng */}
          <h1 className="statement-title mb-4 sm:mb-6 font-black tracking-tight text-white uppercase transition-colors duration-500">
            <LetterRiseLine text="MOBYFLOW LÀ CÁCH" startIdx={0} />
            <LetterRiseLine text="SHOP MẸ & BÉ GIỮ CHÂN KHÁCH HÀNG" startIdx={17} />
            <LetterRiseLine text="TỰ ĐỘNG HƠN, BỀN VỮNG HƠN" startIdx={52} isAccent />
          </h1>

          {/* Subtitle in hoa với chip-highlight */}
          <p className="statement-sub mb-4 font-bold text-white/90 uppercase tracking-wide sm:mb-6">
            Ứng dụng{' '}
            <span className="chip-highlight mx-1">
              Công nghệ Chu kỳ Bỉm Sữa
            </span>{' '}
            vào Tự động hóa Zalo ZNS và kết nối KiotViet
          </p>

          {/* Đoạn mô tả Lead ngắn gọn */}
          <p className="statement-lead mb-8 leading-relaxed text-white/75 sm:mb-10 sm:max-w-3xl">
            <span className="statement-lead-line">
              MobyFlow là hệ sinh thái giải pháp tự động hóa chuyên sâu cho ngành Mẹ & Bé,
            </span>{' '}
            <span className="statement-lead-line">
              giúp cửa hàng gia tăng tỷ lệ khách quen tái mua hàng đột phá mà không tốn công nhân sự gọi điện nhắn tin.
            </span>
          </p>

          {/* Cụm 2 nút Kêu gọi hành động (CTA kép cao cấp) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-9 w-full sm:w-auto">
            <Button
              id="btn-statement-trial"
              type="primary"
              size="large"
              icon={<ThunderboltFilled />}
              onClick={onOpenTrial}
              className="btn-shine w-full sm:w-auto h-13 sm:h-14 px-8 text-base sm:text-lg font-bold bg-gradient-to-r from-[#139091] via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-[#0f766e] border-0 rounded-2xl shadow-xl shadow-teal-700/30 text-white flex items-center justify-center"
            >
              Trải nghiệm 14 ngày miễn phí
            </Button>

            <button
              id="btn-statement-scroll-demo"
              type="button"
              onClick={handleScrollToDemo}
              className="w-full sm:w-auto h-13 sm:h-14 px-7 text-base font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <PlayCircleOutlined className="text-teal-300 text-lg" />
              <span>Xem Demo tương tác ZNS</span>
              <ArrowDownOutlined className="text-xs text-white/60 animate-bounce" />
            </button>
          </div>

          {/* Đánh giá Social Proof 4.9 Sao */}
          <div className="mb-6 flex flex-col items-center gap-1.5 sm:mb-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-[0.85rem] text-[#FFB800] sm:text-[1.15rem]">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <span className="text-[0.95rem] font-bold text-white sm:text-[1.2rem]">
                4.9 / 5.0
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 m-0">
              Đánh giá tin cậy từ 500+ chủ Shop Mẹ & Bé và chuỗi sữa bỉm toàn quốc
            </p>
          </div>

          {/* Dải Badge đối tác tích hợp (Zalo OA, KiotViet, ZNS, AI, POS) */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pr-4 pl-2 backdrop-blur-md sm:gap-3 sm:py-2 sm:pr-5 sm:pl-2.5 shadow-lg">
            <div className="flex -space-x-2">
              {/* Zalo Icon Badge */}
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-[#0b0f0a] bg-[#0068ff] text-white text-[10px] font-black">
                Zalo
              </span>
              {/* KiotViet Icon Badge */}
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-[#0b0f0a] bg-blue-600 text-white text-[10px] font-black">
                KV
              </span>
              {/* ZNS Gold Badge */}
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-[#0b0f0a] bg-amber-500 text-white text-[10px] font-bold">
                ZNS
              </span>
              {/* MobyFlow Teal Badge */}
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-[#0b0f0a] bg-[#139091] text-white text-[10px] font-bold">
                AUTO
              </span>
              {/* Orange Accent */}
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-[#0b0f0a] bg-[#F06430] text-white text-[10px] font-bold">
                24/7
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white/85">
              Đã kích hoạt 1.200.000+ lượt chăm sóc chu kỳ tự động
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatementHeroSection;

