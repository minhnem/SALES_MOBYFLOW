import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Package,
  Cpu,
  MessageSquare,
  Megaphone,
  Users,
  BarChart2,
} from 'lucide-react';

/**
 * 3D Baby Bottle With Glowing Star (Hiển thị từ màn hình Tablet/Laptop md trở lên)
 */
const BabyBottleWithStar3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bbsNippleGrad" x1="50" y1="20" x2="110" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="50%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="bbsCapRingGrad" x1="30" y1="70" x2="130" y2="105" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffe4e6" />
        <stop offset="40%" stopColor="#fb7185" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="bbsBodyGrad" x1="30" y1="100" x2="130" y2="250" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#f8fafc" />
        <stop offset="85%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="bbsStarGrad" x1="110" y1="170" x2="165" y2="225" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="bbsShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="2" dy="12" stdDeviation="14" floodColor="#f43f5e" floodOpacity="0.2" />
      </filter>
    </defs>
    <g filter="url(#bbsShadow)">
      {/* 3 Tia sáng cam nhỏ phía trên */}
      <line x1="80" y1="6" x2="80" y2="14" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <line x1="94" y1="10" x2="100" y2="17" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      <line x1="66" y1="10" x2="60" y2="17" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

      {/* Núm ti silicon hồng */}
      <path
        d="M62 48 C62 30, 70 20, 80 20 C90 20, 98 30, 98 48 C98 56, 108 62, 108 72 L52 72 C52 62, 62 56, 62 48 Z"
        fill="url(#bbsNippleGrad)"
      />
      <rect x="42" y="70" width="76" height="24" rx="10" fill="url(#bbsCapRingGrad)" />
      <rect x="40" y="86" width="80" height="8" rx="4" fill="#fda4af" />
      <path
        d="M48 94 L112 94 C120 94, 126 102, 124 114 L116 230 C114 242, 104 250, 92 250 L68 250 C56 250, 46 242, 44 230 L36 114 C34 102, 40 94, 48 94 Z"
        fill="url(#bbsBodyGrad)"
      />
      <line x1="58" y1="130" x2="74" y2="130" stroke="#fb7185" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="150" x2="82" y2="150" stroke="#fb7185" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="58" y1="170" x2="74" y2="170" stroke="#fb7185" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="190" x2="82" y2="190" stroke="#fb7185" strokeWidth="3.5" strokeLinecap="round" />

      {/* Ngôi sao vàng 3D lơ lửng bên phải bình sữa */}
      <path
        d="M135 175 L141 192 L159 193 L145 204 L150 221 L135 211 L120 221 L125 204 L111 193 L129 192 Z"
        fill="url(#bbsStarGrad)"
      />
      <circle cx="135" cy="198" r="4" fill="#ffffff" opacity="0.6" />
    </g>
  </svg>
);

/**
 * 3D Browser Dashboard Window With Heart Message Bubble (Hiển thị từ md trở lên)
 */
const BrowserDashboard3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 190 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bdwWindowGrad" x1="20" y1="30" x2="160" y2="170" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f0f9ff" />
      </linearGradient>
      <linearGradient id="bdwHeartGrad" x1="120" y1="10" x2="165" y2="55" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="40%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="bdwPieGrad1" x1="30" y1="110" x2="70" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="bdwShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="2" dy="12" stdDeviation="14" floodColor="#0284c7" floodOpacity="0.22" />
      </filter>
    </defs>
    <g filter="url(#bdwShadow)">
      {/* Khung cửa sổ Browser 3D */}
      <rect x="20" y="36" width="145" height="115" rx="14" fill="url(#bdwWindowGrad)" stroke="#38bdf8" strokeWidth="2.5" />
      <path d="M22 48 C22 40, 28 38, 34 38 L152 38 C158 38, 163 40, 163 48 L163 52 L22 52 Z" fill="#e0f2fe" />
      <circle cx="34" cy="45" r="3" fill="#f43f5e" />
      <circle cx="43" cy="45" r="3" fill="#f59e0b" />
      <circle cx="52" cy="45" r="3" fill="#10b981" />

      {/* Thẻ nhỏ bên trái */}
      <rect x="32" y="60" width="38" height="24" rx="4" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
      <rect x="36" y="66" width="18" height="4" rx="2" fill="#0284c7" />
      <rect x="36" y="73" width="28" height="4" rx="2" fill="#93c5fd" />

      {/* Biểu đồ tròn vàng cam góc dưới */}
      <circle cx="50" cy="116" r="16" fill="url(#bdwPieGrad1)" />
      <path d="M50 116 L50 100 A16 16 0 0 1 66 116 Z" fill="#f97316" />

      {/* Biểu đồ cột xanh bên phải */}
      <rect x="80" y="60" width="75" height="75" rx="6" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" />
      <rect x="90" y="102" width="8" height="25" rx="2" fill="#38bdf8" />
      <rect x="103" y="88" width="8" height="39" rx="2" fill="#0ea5e9" />
      <rect x="116" y="76" width="8" height="51" rx="2" fill="#0284c7" />
      <rect x="129" y="84" width="8" height="43" rx="2" fill="#0369a1" />

      {/* Bóng thoại 3D trái tim hồng nổi bật góc trên phải */}
      <circle cx="145" cy="30" r="18" fill="url(#bdwHeartGrad)" />
      <circle cx="145" cy="30" r="16" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" fill="none" />
      <path
        d="M145 36 C145 36, 137 31, 137 26.5 C137 24, 139 22, 141.5 22 C143 22, 144.5 23, 145 24 C145.5 23, 147 22, 148.5 22 C151 22, 153 24, 153 26.5 C153 31, 145 36, 145 36 Z"
        fill="#ffffff"
      />
    </g>
  </svg>
);

// 6 Đồ họa minh họa trung tâm cho 6 thẻ Desktop
const ProductBox3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <path d="M20 50 C20 40, 25 30, 40 22 C55 14, 80 18, 90 28 C100 38, 105 55, 95 70 C85 85, 60 90, 45 85 C30 80, 20 60, 20 50 Z" fill="#f3e8ff" />
    <path d="M35 55 L35 30 L55 20 L55 45 Z" fill="#a855f7" />
    <path d="M55 20 L75 30 L55 42 L35 30 Z" fill="#c084fc" />
    <path d="M55 42 L75 30 L75 55 L55 67 Z" fill="#9333ea" />
    <rect x="75" y="44" width="38" height="24" rx="4" fill="#ffffff" stroke="#e9d5ff" strokeWidth="1.5" />
    <line x1="82" y1="50" x2="82" y2="62" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />
    <line x1="87" y1="50" x2="87" y2="62" stroke="#9333ea" strokeWidth="1" strokeLinecap="round" />
    <line x1="91" y1="50" x2="91" y2="62" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" />
    <line x1="97" y1="50" x2="97" y2="62" stroke="#9333ea" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="102" y1="50" x2="102" y2="62" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AutomationGears3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <circle cx="70" cy="50" r="38" fill="#ccfbf1" opacity="0.6" />
    <path d="M70 24 A26 26 0 1 1 44 50" stroke="#0f766e" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
    <path d="M44 44 L44 52 L52 52" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="70" cy="50" r="16" fill="#14b8a6" />
    <circle cx="70" cy="50" r="8" fill="#ffffff" />
    <path d="M70 30 L70 34 M70 66 L70 70 M50 50 L54 50 M86 50 L90 50 M56 36 L59 39 M81 61 L84 64 M56 64 L59 61 M81 39 L84 36" stroke="#0f766e" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const ZaloPhone3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <rect x="52" y="16" width="36" height="66" rx="8" fill="#3b82f6" />
    <rect x="55" y="20" width="30" height="58" rx="6" fill="#eff6ff" />
    <circle cx="70" cy="46" r="10" fill="#0068ff" />
    <text x="70" y="49" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="900" fontFamily="sans-serif">Zalo</text>
    <circle cx="38" cy="42" r="11" fill="#bfdbfe" />
    <path d="M34 40 C34 38, 36 36, 40 36 C44 36, 46 38, 46 40 C46 44, 40 47, 36 47 Z" fill="#ffffff" />
    <path d="M102 44 C102 38, 98 34, 98 34 L94 48 L106 48 Z" fill="#f59e0b" />
    <circle cx="100" cy="50" r="2.5" fill="#f59e0b" />
    <path d="M96 32 Q98 28 100 32" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
  </svg>
);

const MegaphoneHeart3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <path d="M42 66 L52 46 L40 46 L40 66 Z" fill="#fb7185" />
    <path d="M50 46 L82 30 L82 66 L50 54 Z" fill="#f43f5e" />
    <ellipse cx="82" cy="48" rx="5" ry="18" fill="#fda4af" />
    <circle cx="102" cy="40" r="14" fill="#ffe4e6" />
    <circle cx="102" cy="40" r="11" fill="#f43f5e" />
    <path d="M102 44 C102 44, 97 41, 97 38 C97 36, 98.5 34.5, 100.5 34.5 C101.5 34.5, 102 35, 102 35.5 C102 35, 102.5 34.5, 103.5 34.5 C105.5 34.5, 107 36, 107 38 C107 41, 102 44, 102 44 Z" fill="#ffffff" />
  </svg>
);

const UsersCrown3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <circle cx="46" cy="48" r="10" fill="#fef3c7" />
    <path d="M34 68 C34 60, 40 56, 46 56 C52 56, 58 60, 58 68 Z" fill="#fde68a" />
    <circle cx="94" cy="48" r="10" fill="#fef3c7" />
    <path d="M82 68 C82 60, 88 56, 94 56 C100 56, 106 60, 106 68 Z" fill="#fde68a" />
    <circle cx="70" cy="44" r="13" fill="#f59e0b" />
    <path d="M54 70 C54 60, 62 56, 70 56 C78 56, 86 60, 86 70 Z" fill="#d97706" />
    <path d="M62 30 L65 37 L70 33 L75 37 L78 30 L76 40 L64 40 Z" fill="#fef08a" stroke="#d97706" strokeWidth="1" />
  </svg>
);

const ReportChart3D = () => (
  <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-18">
    <rect x="46" y="20" width="46" height="60" rx="6" fill="#f8fafc" stroke="#bae6fd" strokeWidth="1.5" />
    <rect x="54" y="58" width="6" height="16" rx="1.5" fill="#38bdf8" />
    <rect x="63" y="48" width="6" height="26" rx="1.5" fill="#0284c7" />
    <rect x="72" y="38" width="6" height="36" rx="1.5" fill="#0369a1" />
    <circle cx="96" cy="66" r="13" fill="#10b981" />
    <circle cx="96" cy="66" r="10" fill="#ffffff" />
    <line x1="96" y1="66" x2="96" y2="60" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
    <line x1="96" y1="66" x2="100" y2="66" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const featureList = [
  {
    num: '01',
    numColor: 'bg-purple-100 text-purple-700',
    title: 'Cấu hình chu kỳ sản phẩm',
    points: [
      'Tùy chỉnh theo ngày sắp hết hàng',
      'Cảnh báo mốc bé cần đổi số sữa',
    ],
    checkColor: 'bg-purple-500',
    cardBg: 'bg-[#faf5ff]',
    cardBorder: 'border-purple-100/90',
    illustration: <ProductBox3D />,
    mobileIcon: <Package className="w-5 h-5 text-purple-600" />,
    mobileIconBg: 'bg-purple-50',
  },
  {
    num: '02',
    numColor: 'bg-teal-100 text-teal-700',
    title: 'Tự động hóa chăm sóc',
    points: [
      'Tự động gửi trước 2-3 ngày',
      'Không bao giờ quên hoặc sót khách',
    ],
    checkColor: 'bg-[#139091]',
    cardBg: 'bg-[#f0fdf9]',
    cardBorder: 'border-teal-100/90',
    illustration: <AutomationGears3D />,
    mobileIcon: <Cpu className="w-5 h-5 text-teal-600" />,
    mobileIconBg: 'bg-teal-50',
  },
  {
    num: '03',
    numColor: 'bg-blue-100 text-blue-700',
    title: 'Kho mẫu Zalo ZNS',
    points: [
      'Cá nhân hóa nội dung tin 100%',
      'Nút đặt hàng nhanh 1 chạm',
    ],
    checkColor: 'bg-blue-500',
    cardBg: 'bg-[#f0f9ff]',
    cardBorder: 'border-blue-100/90',
    illustration: <ZaloPhone3D />,
    mobileIcon: <MessageSquare className="w-5 h-5 text-blue-600" />,
    mobileIconBg: 'bg-blue-50',
  },
  {
    num: '04',
    numColor: 'bg-rose-100 text-rose-700',
    title: '3 mô hình chiến dịch',
    points: [
      'Đồng hành từ tuần thai đến 3 tuổi',
      'Kéo khách cũ quay lại tự nhiên',
    ],
    checkColor: 'bg-rose-500',
    cardBg: 'bg-[#fff5f5]',
    cardBorder: 'border-rose-100/90',
    illustration: <MegaphoneHeart3D />,
    mobileIcon: <Megaphone className="w-5 h-5 text-rose-600" />,
    mobileIconBg: 'bg-rose-50',
  },
  {
    num: '05',
    numColor: 'bg-amber-100 text-amber-700',
    title: 'Quản lý khách hàng',
    points: [
      'Lọc nhanh theo chu kỳ & độ tuổi bé',
      'Nhập/xuất file Excel trong 1 click',
    ],
    checkColor: 'bg-amber-500',
    cardBg: 'bg-[#fffdf0]',
    cardBorder: 'border-amber-100/90',
    illustration: <UsersCrown3D />,
    mobileIcon: <Users className="w-5 h-5 text-amber-600" />,
    mobileIconBg: 'bg-amber-50',
  },
  {
    num: '06',
    numColor: 'bg-sky-100 text-sky-700',
    title: 'Báo cáo & thống kê',
    points: [
      'Thống kê số lượng tin theo tháng',
      'Kiểm soát chi phí gửi tin ZNS',
    ],
    checkColor: 'bg-sky-500',
    cardBg: 'bg-[#f8fafc]',
    cardBorder: 'border-slate-200/80',
    illustration: <ReportChart3D />,
    mobileIcon: <BarChart2 className="w-5 h-5 text-sky-600" />,
    mobileIconBg: 'bg-sky-50',
  },
];

const FeaturesGrid = () => {
  return (
    <section
      id="features"
      className="scroll-mt-20 py-10 sm:py-14 bg-gradient-to-b from-white via-[#f0fdfa]/30 to-white relative overflow-hidden"
    >
      {/* ================= 1. NỀN PASTEL ĐA SẮC ĐẬM CHẤT THIẾT KẾ (HIỆN TRÊN DESKTOP & TABLET) ================= */}

      {/* Làn sóng cong Xanh Ngọc / Mint lớn góc trên bên trái */}
      <div className="hidden md:block absolute top-0 left-0 w-[340px] lg:w-[460px] h-[280px] lg:h-[380px] pointer-events-none z-0">
        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 0 H360 C320 80 340 160 270 230 C200 300 120 330 0 340 V0 Z"
            fill="url(#fgMintGrad)"
          />
          <defs>
            <linearGradient id="fgMintGrad" x1="0" y1="0" x2="380" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bình sữa 3D + Sao vàng lơ lửng góc trên trái */}
      <div className="hidden md:block absolute top-4 lg:top-8 left-4 lg:left-10 w-28 lg:w-38 pointer-events-none z-10 anim-baby-bottle drop-shadow-xl">
        <BabyBottleWithStar3D className="w-full h-auto" />
      </div>

      {/* Làn sóng cong Xanh Biển Nhạt góc trên bên phải */}
      <div className="hidden md:block absolute top-0 right-0 w-[320px] lg:w-[440px] h-[260px] lg:h-[360px] pointer-events-none z-0">
        <svg viewBox="0 0 460 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M460 0 H140 C170 90 140 180 210 250 C270 310 370 330 460 330 V0 Z"
            fill="url(#fgCyanGrad)"
          />
          <defs>
            <linearGradient id="fgCyanGrad" x1="460" y1="0" x2="150" y2="330" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cửa sổ Browser Dashboard 3D + Trái tim lơ lửng góc trên phải */}
      <div className="hidden md:block absolute top-4 lg:top-8 right-4 lg:right-10 w-32 lg:w-44 pointer-events-none z-10 anim-dashboard-window drop-shadow-xl">
        <BrowserDashboard3D className="w-full h-auto" />
      </div>

      {/* ================= 2. NỘI DUNG CHÍNH (CONTAINER) ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Header Tiêu Đề - Căn chỉnh khoảng cách gọn gàng */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e6fffa] border border-teal-200/60 text-[#0f766e] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 shadow-2xs">
              Tính Năng Đã Hoàn Thiện 100%
            </div>

            {/* Tiêu đề H2 */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.25] mb-3">
              <span>Đầy đủ công cụ chuyên sâu</span>
              <br />
              <span>cho </span>
              <span className="text-[#139091]">ngành Mẹ &amp; Bé</span>
            </h2>

            {/* Mô tả phụ */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto m-0">
              Mọi tính năng đều được tối ưu hóa theo quy trình thực tế, từ quản lý chu kỳ bỉm sữa đến tự động gửi Zalo ZNS và thống kê.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= 3. DESKTOP VIEW: LƯỚI 6 CARDS 3D (GRID 3 CỘT X 2 HÀNG) ================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featureList.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                className={`rounded-3xl p-5 sm:p-6 border ${item.cardBorder} ${item.cardBg} shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Badge số thứ tự ở góc trên trái */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${item.numColor} shadow-2xs`}>
                      {item.num}
                    </span>
                  </div>

                  {/* Đồ họa minh họa 3D trung tâm */}
                  <div className="flex justify-center items-center h-20 my-1 group-hover:scale-105 transition-transform duration-300">
                    {item.illustration}
                  </div>

                  {/* Tiêu đề tính năng */}
                  <h3 className="text-base sm:text-[18px] font-black text-slate-900 tracking-tight leading-snug mb-3 text-left">
                    {item.title}
                  </h3>
                </div>

                {/* 2 Gạch đầu dòng checkmark */}
                <div className="pt-3 border-t border-slate-200/60 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className={`w-4 h-4 rounded-full ${item.checkColor} text-white flex items-center justify-center text-[9px] font-black shrink-0 shadow-2xs`}>
                        ✓
                      </span>
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= 4. MOBILE VIEW: DANH SÁCH COMPACT (CHUẨN MOCKUP IPHONE) ================= */}
        <div className="block md:hidden space-y-3">
          {featureList.map((item, idx) => (
            <div
              key={idx}
              className={`${item.cardBg} rounded-2xl p-4 border ${item.cardBorder} shadow-xs flex items-center gap-3.5`}
            >
              {/* Badge số thứ tự tròn */}
              <div className={`w-10 h-10 rounded-full ${item.numColor} flex items-center justify-center font-black text-xs shrink-0 shadow-2xs`}>
                {item.num}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-black text-slate-900 mb-1">
                  {item.title}
                </h4>
                <div className="space-y-1">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                      <span className={`w-3.5 h-3.5 rounded-full ${item.checkColor} text-white flex items-center justify-center text-[8px] font-black shrink-0`}>
                        ✓
                      </span>
                      <span className="truncate">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
