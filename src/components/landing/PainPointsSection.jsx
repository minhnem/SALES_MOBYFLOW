import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Timer,
  Baby,
  Gift,
  Link2,
  Database,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';

/**
 * 3D Baby Bottle SVG Illustration (Chỉ hiện trên Desktop)
 */
const BabyBottle3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bbNippleGrad" x1="50" y1="20" x2="110" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="50%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="bbCapRingGrad" x1="30" y1="70" x2="130" y2="105" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffe4e6" />
        <stop offset="40%" stopColor="#fb7185" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="bbBodyGrad" x1="30" y1="100" x2="130" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#f8fafc" />
        <stop offset="85%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="bbHighlight" x1="42" y1="110" x2="58" y2="235" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
      </linearGradient>
      <filter id="bbShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="2" dy="12" stdDeviation="14" floodColor="#f43f5e" floodOpacity="0.22" />
      </filter>
    </defs>
    <g filter="url(#bbShadow)">
      <path
        d="M62 48 C62 30, 70 20, 80 20 C90 20, 98 30, 98 48 C98 56, 108 62, 108 72 L52 72 C52 62, 62 56, 62 48 Z"
        fill="url(#bbNippleGrad)"
      />
      <rect x="42" y="70" width="76" height="24" rx="10" fill="url(#bbCapRingGrad)" />
      <rect x="40" y="86" width="80" height="8" rx="4" fill="#fda4af" />
      <path
        d="M48 94 L112 94 C120 94, 126 102, 124 114 L116 230 C114 242, 104 250, 92 250 L68 250 C56 250, 46 242, 44 230 L36 114 C34 102, 40 94, 48 94 Z"
        fill="url(#bbBodyGrad)"
      />
      <path
        d="M46 104 L52 104 C55 104, 57 106, 56 112 L50 228 C49 232, 46 235, 43 235 L40 235 C37 235, 36 232, 37 228 L43 112 C44 106, 45 104, 46 104 Z"
        fill="url(#bbHighlight)"
      />
      <line x1="58" y1="130" x2="74" y2="130" stroke="#fb7185" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="150" x2="82" y2="150" stroke="#fb7185" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="58" y1="170" x2="74" y2="170" stroke="#fb7185" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="190" x2="82" y2="190" stroke="#fb7185" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="58" y1="210" x2="74" y2="210" stroke="#fb7185" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

/**
 * 3D Crescent Moon & Star SVG Illustration (Chỉ hiện trên Desktop)
 */
const MoonAndStar3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="msMoonGrad" x1="30" y1="20" x2="130" y2="130" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="45%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <linearGradient id="msStarGrad" x1="105" y1="95" x2="140" y2="130" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fffbeb" />
        <stop offset="50%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <filter id="msShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="12" floodColor="#eab308" floodOpacity="0.32" />
      </filter>
    </defs>
    <g filter="url(#msShadow)">
      <path
        d="M105 25 C65 30, 35 65, 40 108 C44 140, 75 160, 105 150 C75 140, 65 105, 78 72 C87 48, 105 35, 105 25 Z"
        fill="url(#msMoonGrad)"
      />
      <path
        d="M95 38 C68 45, 48 72, 52 105 C55 125, 70 140, 85 145 C65 135, 58 105, 68 78 C76 58, 90 46, 95 38 Z"
        fill="#ffffff"
        opacity="0.45"
      />
      <path
        d="M125 100 C125 110, 135 115, 135 115 C135 115, 125 120, 125 130 C125 120, 115 115, 115 115 C115 115, 125 110, 125 100 Z"
        fill="url(#msStarGrad)"
      />
    </g>
  </svg>
);

const painPoints = [
  {
    icon: <Timer className="w-6 h-6 text-blue-500" strokeWidth={2.2} />,
    title: 'Không nhớ chu kỳ hết bỉm sữa',
    desc: 'Hộp sữa, bỉm thường hết sau 10 - 15 ngày. Không nhắc trước 2-3 ngày, mẹ bỉm tiện tay mua nơi khác làm shop mất khách quen.',
    highlight: 'Mất tới 65% khách quen',
    cardBg: 'bg-[#f0f6ff]',
    cardBorder: 'border-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    icon: <Baby className="w-6 h-6 text-purple-500" strokeWidth={2.2} />,
    title: 'Bỏ lỡ vòng đời Mẹ Bầu & Bé',
    desc: 'Không biết tuần thai mẹ bầu để tư vấn vitamin, combo gói đồ đi sinh; bỏ quên mốc bé đổi số sữa (6-12m) và thời điểm ăn dặm.',
    highlight: 'Bỏ lỡ doanh thu vàng',
    cardBg: 'bg-[#faf5ff]',
    cardBorder: 'border-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    icon: <Gift className="w-6 h-6 text-pink-500" strokeWidth={2.2} />,
    title: 'Thiếu chiến dịch định kỳ tháng',
    desc: 'Quên ngày sinh nhật bé, không có Ngày hội thành viên. Khách cũ sau 60-90 ngày dần "ngủ quên" và không quay lại.',
    highlight: 'Hơn 40% khách rời đi',
    cardBg: 'bg-[#fff0f6]',
    cardBorder: 'border-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    icon: <Link2 className="w-6 h-6 text-rose-500" strokeWidth={2.2} />,
    title: 'Khách mua 1 lần rồi rời đi',
    desc: 'Biên lãi sữa bỉm chỉ 5 - 10%. Đốt tiền chạy quảng cáo tìm khách mới nhưng khách không quay lại khiến shop cầm chắc lỗ.',
    highlight: '7 lần chi phí tìm khách mới',
    cardBg: 'bg-[#fff2f2]',
    cardBorder: 'border-rose-100',
    iconColor: 'text-rose-500',
  },
  {
    icon: <Database className="w-6 h-6 text-sky-500" strokeWidth={2.2} />,
    title: 'Data KiotViet bị "bỏ xó"',
    desc: 'Hàng ngàn SĐT khách hàng trên KiotViet chỉ dùng để in hóa đơn, không có công cụ tự động phân nhóm và remarketing.',
    highlight: 'Lãng phí kho tài sản khách hàng',
    cardBg: 'bg-[#f0f9ff]',
    cardBorder: 'border-sky-100',
    iconColor: 'text-sky-500',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-amber-500" strokeWidth={2.2} />,
    title: 'Nhắn thủ công, dễ bị khóa Zalo',
    desc: 'Nhân viên tự nhắn Zalo cá nhân vừa tốn công, dễ sót khách, vừa có nguy cơ bị Zalo quét khóa tài khoản do spam.',
    highlight: 'Tốn chi phí nhân sự',
    cardBg: 'bg-[#fffdf0]',
    cardBorder: 'border-amber-100',
    iconColor: 'text-amber-500',
  },
];

// PainPointsSection - 6 Nỗi đau thực tế khiến shop mẹ & bé hụt 30-50% doanh thu
const PainPointsSection = () => {
  // Quản lý accordion bung mở mô tả 6 thẻ nỗi đau trên điện thoại
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section
      id="pain-points"
      className="scroll-mt-20 py-10 sm:py-14 bg-gradient-to-b from-[#f8fafc] via-[#f0fdfa]/40 to-white relative overflow-hidden"
    >
      {/* ================= 1. NỀN PASTEL ĐA SẮC ĐẬM CHẤT THIẾT KẾ (HIỆN TRÊN DESKTOP & TABLET) ================= */}

      {/* Làn sóng cong Xanh Ngọc / Mint lớn góc trên bên trái */}
      <div className="hidden md:block absolute -top-8 -left-8 w-[360px] lg:w-[480px] h-[300px] lg:h-[390px] pointer-events-none z-0">
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 0 H360 C320 80 340 160 270 230 C200 300 120 330 0 340 V0 Z"
            fill="url(#mintWaveGrad)"
          />
          <defs>
            <linearGradient id="mintWaveGrad" x1="0" y1="0" x2="380" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bình sữa 3D pastel lơ lửng góc trên trái */}
      <div className="hidden md:block absolute top-4 lg:top-8 left-4 lg:left-12 w-28 lg:w-40 pointer-events-none z-10 anim-baby-bottle drop-shadow-xl">
        <BabyBottle3D className="w-full h-auto" />
      </div>

      {/* Làn sóng cong Vàng Nắng / Kem lớn góc trên bên phải */}
      <div className="hidden md:block absolute -top-8 -right-8 w-[340px] lg:w-[450px] h-[280px] lg:h-[370px] pointer-events-none z-0">
        <svg viewBox="0 0 460 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M460 0 H140 C170 90 140 180 210 250 C270 310 370 330 460 330 V0 Z"
            fill="url(#yellowWaveGrad)"
          />
          <defs>
            <linearGradient id="yellowWaveGrad" x1="460" y1="0" x2="150" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fde047" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#fef9c3" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Mặt trăng & Ngôi sao 3D lơ lửng góc trên phải */}
      <div className="hidden md:block absolute top-4 lg:top-10 right-4 lg:right-14 w-26 lg:w-34 pointer-events-none z-10 anim-moon-star drop-shadow-xl">
        <MoonAndStar3D className="w-full h-auto" />
      </div>

      {/* ================= 2. NỘI DUNG CHÍNH (CONTAINER) ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Header Tiêu Đề Nỗi Đau */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-8 sm:mb-10">

            {/* Tag Cảnh Báo Nổi Bật Dành Cho Shop Mẹ & Bé */}
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3.5 sm:mb-4 border border-rose-200/80 shadow-xs">
              {/* <span className="text-sm">⚠️</span> */}
              <span className="hidden sm:inline">Nỗi Đau Nan Giải Của Hơn 90% Chủ Shop Mẹ &amp; Bé</span>
              <span className="sm:hidden">Hơn 90% Chủ Shop Mẹ &amp; Bé đang gặp những vấn đề này</span>
            </div>

            {/* Tiêu đề chính H2: Desktop hiển thị đúng 2 dòng thoáng đãng, Mobile hiển thị 3 dòng súc tích */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.4] sm:leading-[1.48] mb-4 sm:mb-5">
              <span>Tại sao doanh thu <span className="whitespace-nowrap">Shop Mẹ &amp; Bé</span></span>
              <br className="hidden sm:inline" />
              <span className="sm:hidden"><br /></span>
              <span className="text-[#139091]">mãi dậm chân tại chỗ</span>{' '}
              <br className="sm:hidden" />
              <span className="whitespace-nowrap">dù bán cả ngàn đơn?</span>
            </h2>

            {/* Đoạn mô tả 3 điểm chạm then chốt */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto m-0">
              Chăm sóc khách hàng mẹ &amp; bé đòi hỏi 3 điểm chạm: <strong>(1) Chu kỳ cạn bỉm sữa 12-18 ngày</strong>, <strong>(2) Cột mốc phát triển 0-36 tháng của bé</strong>, và <strong>(3) Sự kiện định kỳ theo tháng &amp; sinh nhật</strong>. Thiếu 1 trong 3, khách hàng sẽ lập tức chuyển sang chuỗi siêu thị đối thủ!
            </p>
          </div>
        </ScrollReveal>

        {/* ================= 3. DESKTOP VIEW: LƯỚI 6 CARDS ĐA SẮC PASTEL (GRID 3 CỘT X 2 HÀNG) ================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-12">
          {painPoints.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                className={`rounded-3xl p-5 sm:p-6 border ${item.cardBorder} ${item.cardBg} shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group`}
              >
                <div>
                  {/* Icon tròn trắng nổi trên nền thẻ pastel (kích thước cố định tròn xoe không bị dãn ngang) */}
                  <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Tiêu đề nỗi đau - Khóa chặt trên 1 dòng duy nhất */}
                  <h3
                    className="text-[15px] sm:text-base lg:text-[16px] xl:text-[17px] font-black text-slate-900 tracking-tight leading-snug mb-2.5 whitespace-nowrap overflow-hidden text-ellipsis"
                    title={item.title}
                  >
                    {item.title}
                  </h3>

                  {/* Mô tả chi tiết */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Hậu quả / Tag cảnh báo viền đỏ mềm kèm icon X vector sắc nét chuẩn thiết kế */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50/90 text-rose-600 text-xs font-bold border border-rose-200/80 shadow-2xs">
                    <span className="w-4 h-4 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" />
                      </svg>
                    </span>
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= 4. MOBILE VIEW: DANH SÁCH COMPACT ĐA SẮC PASTEL (KHÔNG RÁC HÌNH VẼ) ================= */}
        <div className="block md:hidden space-y-3 mb-14">
          {painPoints.map((item, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className={`${item.cardBg} rounded-2xl p-4 border ${item.cardBorder} shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.99]`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-slate-900 truncate mb-1">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-600 bg-rose-50/90 px-2.5 py-0.5 rounded-full border border-rose-200/70 shadow-2xs">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <svg className="w-2 h-2" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" />
                          </svg>
                        </span>
                        <span>{item.highlight}</span>
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 text-slate-400 pl-1">
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-[#139091]' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                    {item.desc}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PainPointsSection;
