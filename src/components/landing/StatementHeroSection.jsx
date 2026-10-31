import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import {
  ThunderboltFilled,
  PlayCircleOutlined,
  ArrowDownOutlined,
  SyncOutlined,
  HeartOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import TechGridBackground from './TechGridBackground';

/**
 * Con trỏ lang thang riêng cho Statement Hero (phong cách Dabilux)
 * Lướt nhẹ nhàng giữa các điểm nhấn của dòng Statement, click nháy vòng tròn
 */
const StatementCursor = () => {
  const [pos, setPos] = useState({ x: 50, y: 46 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const waypoints = [
      { x: 50, y: 36 },
      { x: 28, y: 48 },
      { x: 50, y: 49 },
      { x: 72, y: 48 },
      { x: 64, y: 64 },
      { x: 36, y: 64 },
    ];

    let step = 0;
    let clickTimer;
    let holdTimer;

    const interval = setInterval(() => {
      step = (step + 1) % waypoints.length;
      const target = waypoints[step];
      setPos({ x: target.x, y: target.y });

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
          MobyFlow
        </span>
      </div>
    </div>
  );
};

/**
 * Hiệu ứng từng ký tự trượt lên (letter-rise) từ mờ về nét chuẩn Dabilux
 */
const LetterRiseLine = ({ text, startIdx = 0, isAccent = false, className = '' }) => {
  const chars = Array.from(text);
  return (
    <span className={`statement-line ${className}`}>
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
    const el =
      document.getElementById('video') ||
      document.getElementById('showcase');
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="statement-hero" className="statement-section relative overflow-hidden" style={{ paddingTop: '6rem' }}>
      {/* 1. Lưới công nghệ Tech-grid + Hạt sáng chạy + Vầng sáng mờ lớn */}
      <TechGridBackground variant="dark" />

      {/* 2. Con trỏ lang thang Statement */}
      <StatementCursor />

      {/* 3. Nội dung trung tâm Statement khổ lớn */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="statement-inner mx-auto flex flex-col items-center text-center">

          {/* Tagline định vị nhỏ phía trên */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-teal-300">
              Giải Pháp Tự Động Hóa Chăm Sóc Chu Kỳ Tiêu Dùng
            </span>
          </div>

          {/* Dòng tiêu đề STATEMENT Chuẩn 3 Dòng Cả Desktop & Mobile */}
          <h1 className="statement-title mb-3 sm:mb-4 font-black tracking-tight text-white uppercase transition-colors duration-500 w-full">
            <LetterRiseLine text="MOBYFLOW LÀ CÁCH" startIdx={0} />
            <LetterRiseLine text="SHOP MẸ & BÉ GIỮ CHÂN KHÁCH HÀNG" startIdx={17} />
            <LetterRiseLine text="TỰ ĐỘNG HƠN, BỀN VỮNG HƠN" startIdx={52} isAccent />
          </h1>

          {/* Subtitle 3 chức năng chủ đạo kết hợp Zalo ZNS & KiotViet */}
          <div className="mb-3.5 sm:mb-4 max-w-4xl">
            <p className="statement-sub mb-2.5 sm:mb-3 font-bold text-white/90 uppercase tracking-wide">
              Bộ 3 kịch bản tự động hóa qua{' '}
              <span className="whitespace-nowrap">
                <span className="text-teal-300 font-extrabold">Zalo ZNS</span> &amp;{' '}
                <span className="text-sky-300 font-extrabold">KiotViet</span>:
              </span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              <span className="chip-highlight text-xs sm:text-sm tracking-wide">
                <SyncOutlined className="mr-1.5 text-xs text-[#F06430]" />
                1. Chu kỳ bỉm sữa
              </span>
              <span className="chip-highlight text-xs sm:text-sm tracking-wide">
                <HeartOutlined className="mr-1.5 text-xs text-[#F06430]" />
                2. Vòng đời Mẹ Bầu &amp; Bé
              </span>
              <span className="chip-highlight text-xs sm:text-sm tracking-wide">
                <GiftOutlined className="mr-1.5 text-xs text-[#F06430]" />
                3. Chiến dịch tháng
              </span>
            </div>
          </div>

          {/* Đoạn mô tả Lead ngắn gọn súc tích bao hàm 3 chức năng */}
          <p className="statement-lead mb-6 sm:mb-7 leading-relaxed text-white/80 sm:max-w-2xl">
            Tự động tính chu kỳ hết bỉm sữa, đồng hành từng cột mốc bé 0-36 tháng và kích hoạt ưu đãi tháng - giúp Shop Mẹ &amp; Bé giữ chân khách hàng và nhân đôi doanh thu tái mua.
          </p>

          {/* Cụm 2 nút Kêu gọi hành động (CTA kép cao cấp) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 sm:mb-3 w-full sm:w-auto">
            <Button
              id="btn-statement-trial"
              type="primary"
              size="large"
              icon={<ThunderboltFilled />}
              onClick={onOpenTrial}
              className="btn-shine w-full sm:w-auto h-12 sm:h-14 py-3 sm:py-3.5 px-8 text-base sm:text-lg font-bold bg-gradient-to-r from-[#139091] via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-[#0f766e] border-0 rounded-2xl shadow-xl shadow-teal-700/30 text-white flex items-center justify-center whitespace-nowrap shrink-0 hover:scale-105 transition-all"
            >
              Trải nghiệm 14 ngày miễn phí
            </Button>

            <button
              id="btn-statement-scroll-demo"
              type="button"
              onClick={handleScrollToDemo}
              className="w-full sm:w-auto h-12 sm:h-14 py-3 sm:py-3.5 px-7 text-base font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg whitespace-nowrap shrink-0 hover:scale-105"
            >
              <PlayCircleOutlined className="text-teal-300 text-lg" />
              <span>Xem cách thức hoạt động</span>
              <ArrowDownOutlined className="text-xs text-white/60 animate-bounce" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatementHeroSection;

