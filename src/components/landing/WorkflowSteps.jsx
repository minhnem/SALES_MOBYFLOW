import React from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * 1. 3D Shop / Storefront Illustration
 */
const ShopStore3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ssRoofGrad" x1="20" y1="35" x2="140" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb7185" />
        <stop offset="50%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="ssBodyGrad" x1="30" y1="65" x2="130" y2="145" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="50%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="ssWindowGrad" x1="45" y1="80" x2="85" y2="125" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#cffafe" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="ssBasketGrad" x1="88" y1="95" x2="125" y2="135" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <filter id="ssShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0d9488" floodOpacity="0.22" />
      </filter>
    </defs>
    <g filter="url(#ssShadow)">
      {/* Nền bóng mờ dưới sàn shop */}
      <ellipse cx="80" cy="146" rx="55" ry="8" fill="#cbd5e1" opacity="0.4" />

      {/* Thân cửa hàng (Mint/Teal) */}
      <rect x="34" y="66" width="92" height="74" rx="14" fill="url(#ssBodyGrad)" />
      {/* Vách viền góc 3D */}
      <path d="M112 66 H126 A14 14 0 0 1 140 80 V126 A14 14 0 0 1 126 140 H112 Z" fill="#0f766e" opacity="0.25" />

      {/* Cửa sổ kính sáng */}
      <rect x="44" y="78" width="46" height="50" rx="8" fill="url(#ssWindowGrad)" />
      <path d="M48 82 L70 82 L52 106 L48 106 Z" fill="#ffffff" opacity="0.7" />
      <line x1="44" y1="102" x2="90" y2="102" stroke="#99f6e4" strokeWidth="2" />
      <line x1="67" y1="78" x2="67" y2="128" stroke="#99f6e4" strokeWidth="2" />

      {/* Mái hiên sọc đỏ hồng - trắng 3D */}
      <g>
        <path d="M22 66 C22 66, 26 40, 80 40 C134 40, 138 66, 138 66 Z" fill="url(#ssRoofGrad)" />
        <path d="M38 66 C36 50, 48 41, 56 40.5 C52 48, 48 58, 48 66 Z" fill="#ffffff" opacity="0.9" />
        <path d="M72 66 C70 47, 72 40, 88 40 C86 48, 84 58, 82 66 Z" fill="#ffffff" opacity="0.9" />
        <path d="M106 66 C104 49, 108 42, 120 44 C116 51, 114 60, 116 66 Z" fill="#ffffff" opacity="0.9" />
        <path d="M22 66 Q28 72, 34 66 Q40 72, 46 66 Q52 72, 58 66 Q64 72, 70 66 Q76 72, 82 66 Q88 72, 94 66 Q100 72, 106 66 Q112 72, 118 66 Q124 72, 130 66 Q135 72, 138 66" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>

      {/* Giỏ hàng nhỏ trước cửa shop */}
      <g>
        <rect x="94" y="96" width="28" height="24" rx="6" fill="url(#ssBasketGrad)" />
        <path d="M96 96 C96 88, 120 88, 120 96" stroke="#0284c7" strokeWidth="3" fill="none" strokeLinecap="round" />
        <line x1="98" y1="104" x2="118" y2="104" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="98" y1="110" x2="118" y2="110" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx="101" cy="122" r="3" fill="#0f172a" />
        <circle cx="115" cy="122" r="3" fill="#0f172a" />
      </g>
    </g>
  </svg>
);

/**
 * 2. 3D Alarm Clock Illustration
 */
const AlarmClock3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="acBodyGrad" x1="30" y1="30" x2="120" y2="135" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="40%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#7e22ce" />
      </linearGradient>
      <linearGradient id="acFaceGrad" x1="45" y1="45" x2="105" y2="115" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f5f3ff" />
      </linearGradient>
      <linearGradient id="acBellGrad" x1="100" y1="20" x2="140" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="50%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#9333ea" />
      </linearGradient>
      <filter id="acShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#7e22ce" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#acShadow)">
      {/* Nền bóng mờ */}
      <ellipse cx="78" cy="144" rx="46" ry="7" fill="#cbd5e1" opacity="0.38" />

      {/* 2 Chân đế đồng hồ */}
      <line x1="52" y1="126" x2="42" y2="140" stroke="#7e22ce" strokeWidth="6" strokeLinecap="round" />
      <line x1="98" y1="126" x2="108" y2="140" stroke="#7e22ce" strokeWidth="6" strokeLinecap="round" />

      {/* Chuông báo thức phía trên bên phải */}
      <g transform="rotate(18 116 46)">
        <path d="M104 46 C104 32, 126 32, 126 46 Z" fill="url(#acBellGrad)" />
        <ellipse cx="115" cy="46" rx="11" ry="3.5" fill="#7e22ce" />
        <circle cx="115" cy="51" r="3.5" fill="#f59e0b" />
        {/* Sóng rung chuông */}
        <path d="M130 30 C136 36, 136 44, 132 50" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M136 24 C144 32, 144 46, 138 56" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Nút bấm trên đỉnh */}
      <rect x="68" y="26" width="16" height="8" rx="3" fill="#c084fc" />

      {/* Vỏ tròn đồng hồ 3D */}
      <circle cx="76" cy="84" r="48" fill="url(#acBodyGrad)" />
      
      {/* Vành nổi 3D */}
      <circle cx="76" cy="84" r="44" fill="#6b21a8" opacity="0.3" />

      {/* Mặt đồng hồ trắng sáng */}
      <circle cx="76" cy="84" r="38" fill="url(#acFaceGrad)" />

      {/* Vạch số */}
      <circle cx="76" cy="54" r="2.5" fill="#a855f7" />
      <circle cx="106" cy="84" r="2.5" fill="#a855f7" />
      <circle cx="76" cy="114" r="2.5" fill="#a855f7" />
      <circle cx="46" cy="84" r="2.5" fill="#a855f7" />

      {/* Kim đồng hồ 3D */}
      <line x1="76" y1="84" x2="62" y2="64" stroke="#581c87" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="76" y1="84" x2="94" y2="74" stroke="#7e22ce" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="76" cy="84" r="4.5" fill="#581c87" />
      <circle cx="76" cy="84" r="2" fill="#f5f3ff" />
    </g>
  </svg>
);

/**
 * 3. 3D Zalo Smartphone Illustration
 */
const ZaloPhoneWorkflow3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="zpBodyGrad" x1="45" y1="25" x2="125" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="zpScreenGrad" x1="55" y1="35" x2="110" y2="130" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f0f9ff" />
      </linearGradient>
      <linearGradient id="zpZaloBadgeGrad" x1="65" y1="65" x2="105" y2="105" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <filter id="zpShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0284c7" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#zpShadow)">
      {/* Nền bóng mờ */}
      <ellipse cx="80" cy="144" rx="44" ry="7" fill="#cbd5e1" opacity="0.38" />

      {/* Thân điện thoại thông minh 3D */}
      <rect x="52" y="24" width="62" height="108" rx="16" fill="url(#zpBodyGrad)" />
      <rect x="50" y="22" width="62" height="108" rx="16" fill="#0284c7" opacity="0.3" />

      {/* Màn hình điện thoại */}
      <rect x="56" y="28" width="54" height="100" rx="12" fill="url(#zpScreenGrad)" />
      
      {/* Loa thoại / Dynamic Island */}
      <rect x="73" y="32" width="20" height="4" rx="2" fill="#cbd5e1" />

      {/* Logo Zalo tròn ở giữa màn hình */}
      <circle cx="83" cy="74" r="20" fill="url(#zpZaloBadgeGrad)" />
      <text
        x="83"
        y="78"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        Zalo
      </text>

      {/* Nút tác vụ ZNS xanh bên dưới */}
      <rect x="63" y="104" width="40" height="12" rx="6" fill="#0284c7" />
      <rect x="68" y="108" width="30" height="4" rx="2" fill="#ffffff" opacity="0.9" />

      {/* Thẻ bong bóng tin nhắn / Notification Card bay lơ lửng */}
      <g>
        <rect x="22" y="74" width="42" height="26" rx="8" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
        <rect x="28" y="80" width="24" height="4" rx="2" fill="#38bdf8" />
        <rect x="28" y="88" width="30" height="3" rx="1.5" fill="#94a3b8" />
      </g>
      <g>
        <rect x="28" y="96" width="36" height="20" rx="6" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="1" />
        <rect x="34" y="102" width="24" height="3" rx="1.5" fill="#0284c7" opacity="0.6" />
        <rect x="34" y="108" width="16" height="2.5" rx="1" fill="#94a3b8" />
      </g>
    </g>
  </svg>
);

/**
 * 4. 3D Shopping Basket With Checkmark Illustration
 */
const BasketCheck3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bcBasketGrad" x1="30" y1="60" x2="120" y2="135" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb7185" />
        <stop offset="50%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <linearGradient id="bcCheckGrad" x1="95" y1="35" x2="140" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="bcItemGrad1" x1="48" y1="40" x2="70" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="bcItemGrad2" x1="70" y1="35" x2="95" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="bcShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#f43f5e" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#bcShadow)">
      {/* Nền bóng mờ */}
      <ellipse cx="78" cy="144" rx="48" ry="7" fill="#cbd5e1" opacity="0.38" />

      {/* Sản phẩm bên trong giỏ (Hộp sữa, bình bỉm) */}
      <rect x="50" y="44" width="22" height="34" rx="6" fill="url(#bcItemGrad1)" />
      <rect x="54" y="40" width="14" height="6" rx="3" fill="#ffedd5" />

      <rect x="74" y="38" width="24" height="40" rx="7" fill="url(#bcItemGrad2)" />
      <rect x="78" y="34" width="16" height="6" rx="3" fill="#fef9c3" />

      {/* Quai giỏ hàng uốn cong */}
      <path
        d="M38 75 C38 32, 110 32, 110 75"
        stroke="#fda4af"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Thân giỏ hàng hồng san hô 3D */}
      <path
        d="M32 72 H116 L106 130 C104 136, 98 140, 92 140 H56 C50 140, 44 136, 42 130 L32 72 Z"
        fill="url(#bcBasketGrad)"
      />

      {/* Vành trên giỏ */}
      <rect x="28" y="68" width="92" height="10" rx="5" fill="#fda4af" />

      {/* Các rãnh thông hơi sọc dọc giỏ */}
      <rect x="48" y="86" width="6" height="36" rx="3" fill="#ffffff" opacity="0.45" />
      <rect x="62" y="86" width="6" height="38" rx="3" fill="#ffffff" opacity="0.45" />
      <rect x="76" y="86" width="6" height="38" rx="3" fill="#ffffff" opacity="0.45" />
      <rect x="90" y="86" width="6" height="36" rx="3" fill="#ffffff" opacity="0.45" />

      {/* Huy hiệu tích xanh 3D nổi bật góc trên bên phải */}
      <g>
        <circle cx="118" cy="56" r="22" fill="url(#bcCheckGrad)" />
        <circle cx="118" cy="56" r="22" stroke="#ffffff" strokeWidth="3" />
        <path
          d="M109 56 L115 62 L128 49"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </g>
  </svg>
);

/**
 * Danh sách 4 bước chuẩn 100% theo Mockup ảnh
 */
const steps = [
  {
    step: '01',
    title: 'Khách mua bỉm/sữa tại shop hoặc online',
    desc: 'Hóa đơn được tạo trên phần mềm KiotViet hoặc nhập từ file Excel. MobyFlow tự động nhận diện dữ liệu khách và sản phẩm.',
    illustration: ShopStore3D,
    colorTheme: {
      badgeBg: 'bg-teal-50',
      badgeText: 'text-[#0d9488]',
      badgeBorder: 'border-teal-200/80',
      timelineBorder: 'border-teal-500',
      timelineBg: 'bg-teal-50',
      timelineText: 'text-[#0d9488]',
      lineColor: 'border-teal-300',
      chevronColor: 'text-teal-500',
      glowShadow: 'hover:shadow-teal-100/60',
    },
  },
  {
    step: '02',
    title: 'MobyFlow tự động đếm ngược chu kỳ',
    desc: 'Dựa trên cấu hình sản phẩm (Ví dụ: hộp sữa 800g = 12 ngày), hệ thống tự động kích hoạt bộ đếm ngược chu kỳ tiêu dùng của bé.',
    illustration: AlarmClock3D,
    colorTheme: {
      badgeBg: 'bg-purple-50',
      badgeText: 'text-purple-600',
      badgeBorder: 'border-purple-200/80',
      timelineBorder: 'border-purple-500',
      timelineBg: 'bg-purple-50',
      timelineText: 'text-purple-600',
      lineColor: 'border-purple-300',
      chevronColor: 'text-purple-500',
      glowShadow: 'hover:shadow-purple-100/60',
    },
  },
  {
    step: '03',
    title: 'Gửi tin Zalo ZNS nhắc mẹ trước 2 ngày',
    desc: 'Đúng ngày thứ 10, hệ thống tự động gửi tin nhắn thương hiệu tích vàng Zalo ZNS nhắc mẹ: “Sữa của bé sắp hết rồi, mẹ đặt lại để nhận quà nhé!”.',
    illustration: ZaloPhoneWorkflow3D,
    colorTheme: {
      badgeBg: 'bg-sky-50',
      badgeText: 'text-sky-600',
      badgeBorder: 'border-sky-200/80',
      timelineBorder: 'border-sky-500',
      timelineBg: 'bg-sky-50',
      timelineText: 'text-sky-600',
      lineColor: 'border-sky-300',
      chevronColor: 'text-sky-500',
      glowShadow: 'hover:shadow-sky-100/60',
    },
  },
  {
    step: '04',
    title: 'Mẹ đặt lại hàng - Tự động ghi nhận KiotViet',
    desc: 'Mẹ bỉm chỉ cần bấm nút “Đặt lại ngay” trong Zalo. Đơn hàng tự động đổ về KiotViet, doanh thu tăng mà không mất 1 đồng tiền Ads.',
    illustration: BasketCheck3D,
    colorTheme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-amber-600',
      badgeBorder: 'border-amber-200/80',
      timelineBorder: 'border-amber-500',
      timelineBg: 'bg-amber-50',
      timelineText: 'text-amber-600',
      lineColor: 'border-amber-300',
      chevronColor: 'text-amber-500',
      glowShadow: 'hover:shadow-amber-100/60',
    },
  },
];

/**
 * Curved Dashed Arrow Connector giữa các bước trên Desktop
 */
const CurvedDashedConnector = ({ direction = 'up' }) => (
  <div className="hidden lg:flex absolute top-14 -right-11 w-20 h-10 pointer-events-none z-20 items-center justify-center">
    <svg viewBox="0 0 70 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {direction === 'up' ? (
        <>
          <path
            d="M 5 26 Q 35 4 62 14"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="56,8 65,15 57,19" fill="#94a3b8" />
        </>
      ) : (
        <>
          <path
            d="M 5 10 Q 35 30 62 18"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="57,13 65,19 56,24" fill="#94a3b8" />
        </>
      )}
    </svg>
  </div>
);

const WorkflowSteps = () => {
  return (
    <section
      id="workflow"
      className="scroll-mt-20 py-10 sm:py-14 bg-gradient-to-b from-[#f8fafc]/90 via-[#f0fdfa]/20 to-white relative overflow-hidden"
    >
      {/* Làn sóng hữu cơ Pastel Mint góc trên bên trái (Desktop) */}
      <div className="hidden lg:block absolute -top-10 -left-10 w-96 h-80 pointer-events-none z-0">
        <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 H260 C230 70 240 130 180 190 C120 250 60 270 0 280 V0 Z" fill="url(#wfMintGrad)" />
          <defs>
            <linearGradient id="wfMintGrad" x1="0" y1="0" x2="260" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#99f6e4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Làn sóng hữu cơ Pastel Purple góc dưới bên phải (Desktop) */}
      <div className="hidden lg:block absolute -bottom-10 -right-10 w-96 h-80 pointer-events-none z-0">
        <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M380 320 H120 C150 250 140 190 190 130 C240 80 310 60 380 50 V320 Z" fill="url(#wfPurpleGrad)" />
          <defs>
            <linearGradient id="wfPurpleGrad" x1="380" y1="320" x2="120" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tiêu đề mục Quy Trình Khép Kín 4 Bước */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f3e8ff] border border-purple-200/80 text-[#7c3aed] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3.5 sm:mb-4 shadow-2xs">
              Quy Trình Khép Kín 4 Bước
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-900 tracking-tight leading-[1.38] sm:leading-[1.46] mb-4 sm:mb-5">
              Từ lúc khách mua đến khi{' '}
              <span className="text-[#0d9488]">tự động quay lại mua lần tiếp theo</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed m-0">
              Quy trình tự động giúp shop chăm sóc hàng ngàn mẹ bỉm cùng lúc, đúng thời điểm sắp hết sữa bỉm mà không cần nhân viên ghi sổ thủ công.
            </p>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: 4 Cột ngang kèm hình 3D và mũi tên nét đứt cong              */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-start relative">
          {steps.map((item, idx) => {
            const IllustrationComponent = item.illustration;
            const theme = item.colorTheme;
            const isLast = idx === steps.length - 1;

            return (
              <ScrollReveal key={item.step} direction="up" delay={idx * 0.1}>
                <div className="relative flex flex-col items-center">
                  {/* Khung chứa hình 3D nổi bật có hiệu ứng lơ lửng nhẹ */}
                  <div className="w-32 h-32 mb-4 relative flex items-center justify-center anim-workflow-float drop-shadow-md">
                    <IllustrationComponent className="w-full h-full object-contain" />
                    
                    {/* Mũi tên cong nét đứt sang bước tiếp theo */}
                    {!isLast && <CurvedDashedConnector direction={idx % 2 === 0 ? 'up' : 'down'} />}
                  </div>

                  {/* Thẻ Card nội dung trắng viền mềm */}
                  <div
                    className={`w-full bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] ${theme.glowShadow} transition-all duration-300 min-h-[220px] flex flex-col justify-start`}
                  >
                    {/* Badge số thứ tự 01, 02, 03, 04 */}
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Tiêu đề bước */}
                    <h3 className="text-[17px] font-black text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Đoạn mô tả chi tiết */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Dòng thời gian Timeline dọc chuẩn 100% Mockup Ảnh    */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col space-y-4 relative">
          {steps.map((item, idx) => {
            const IllustrationComponent = item.illustration;
            const theme = item.colorTheme;
            const isLast = idx === steps.length - 1;

            return (
              <div key={item.step} className="flex items-stretch gap-3 sm:gap-4 relative">
                {/* Cột Timeline bên trái: Node tròn số + Đường nối nét đứt */}
                <div className="flex flex-col items-center shrink-0 w-8">
                  {/* Nút tròn số thứ tự */}
                  <div
                    className={`w-8 h-8 rounded-full border-2 ${theme.timelineBorder} ${theme.timelineBg} ${theme.timelineText} font-black text-xs flex items-center justify-center shadow-xs z-10 shrink-0`}
                  >
                    {item.step}
                  </div>

                  {/* Đoạn nối nét đứt dọc */}
                  {!isLast && (
                    <div
                      className={`w-0 flex-1 border-l-2 border-dashed ${theme.lineColor} my-1.5`}
                      style={{ minHeight: '36px' }}
                    />
                  )}
                </div>

                {/* Thẻ Card bước bên phải */}
                <div className="flex-1 bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs relative flex items-center justify-between gap-3 overflow-hidden group">
                  {/* Nội dung bên trái */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1 group-hover:text-[#0d9488] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed m-0 line-clamp-3 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  {/* Icon 3D thu nhỏ góc phải */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center drop-shadow-sm">
                    <IllustrationComponent className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
