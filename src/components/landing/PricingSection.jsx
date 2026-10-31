import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import {
  Send,
  Crown,
  Gem,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Store,
} from 'lucide-react';

/**
 * 1. 3D Golden Crown (Vương miện vàng hoàng gia 3 đỉnh trên Gói Phát Triển)
 */
const Crown3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="crGoldGrad" x1="10" y1="10" x2="90" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="30%" stopColor="#fde047" />
        <stop offset="70%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#ca8a04" />
      </linearGradient>
      <linearGradient id="crPearlGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#fde047" />
      </linearGradient>
      <filter id="crShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#ca8a04" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#crShadow)">
      {/* Thân vương miện hoàng gia 3 đỉnh */}
      <path
        d="M18 64 L12 28 L36 44 L50 18 L64 44 L88 28 L82 64 Z"
        fill="url(#crGoldGrad)"
      />
      {/* Đế vương miện */}
      <path
        d="M16 62 Q50 72 84 62 L82 68 Q50 78 18 68 Z"
        fill="#b45309"
      />
      {/* 3 Viên ngọc châu trên 3 đỉnh */}
      <circle cx="12" cy="26" r="6" fill="url(#crPearlGrad)" stroke="#ca8a04" strokeWidth="1.5" />
      <circle cx="50" cy="16" r="7.5" fill="url(#crPearlGrad)" stroke="#ca8a04" strokeWidth="1.5" />
      <circle cx="88" cy="26" r="6" fill="url(#crPearlGrad)" stroke="#ca8a04" strokeWidth="1.5" />
      {/* Điểm nhấn lấp lánh */}
      <circle cx="50" cy="16" r="2.5" fill="#ffffff" />
      <path d="M38 52 Q50 58 62 52" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </g>
  </svg>
);

/**
 * 2. 3D Percent Badge (Huy hiệu % xanh mint 3D góc phải Gói Phát Triển)
 */
const PercentBadge3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pctGrad" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="50%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
      <filter id="pctShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#042f2e" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#pctShadow)">
      <rect x="12" y="12" width="56" height="56" rx="18" fill="url(#pctGrad)" transform="rotate(8 40 40)" />
      <rect x="14" y="14" width="52" height="52" rx="16" stroke="#99f6e4" strokeWidth="2" opacity="0.6" transform="rotate(8 40 40)" />
      <text
        x="40"
        y="50"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="30"
        fontWeight="900"
        fontFamily="sans-serif"
        transform="rotate(8 40 40)"
      >
        %
      </text>
    </g>
  </svg>
);

/**
 * 3. Nét vẽ uốn lượn vàng bên trái và phải của Tiết kiệm 20%
 */
const GoldenDoodleLeft = () => (
  <svg width="24" height="18" viewBox="0 0 32 24" fill="none" className="shrink-0">
    <path
      d="M28 20 C20 18 10 16 6 10 C3 5 8 2 12 5 C15 7 13 14 6 18"
      stroke="#f59e0b"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GoldenDoodleRight = () => (
  <svg width="24" height="18" viewBox="0 0 32 24" fill="none" className="shrink-0">
    <path
      d="M4 20 C12 18 22 16 26 10 C29 5 24 2 20 5 C17 7 19 14 26 18"
      stroke="#f59e0b"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Dữ liệu 3 Gói Bảng Giá Chuẩn 100% Theo Mockup
 */
const plansData = [
  {
    id: 'trial',
    name: 'Gói Dùng Thử',
    badgeTop: 'Dành cho shop mới',
    desc: 'Phù hợp cho shop mẹ & bé trải nghiệm tính năng nhắc chu kỳ tiêu dùng',
    price: 'XXX.XXX',
    billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
    popular: false,
    icon: Send,
    iconBg: 'bg-[#e6fffa] border-[#ccfbf1] text-[#0d9488]',
    ctaText: 'Đăng ký dùng thử 14 ngày miễn phí',
    features: [
      'Nhắc mua hàng theo chu kỳ bỉm sữa',
      'Tự động gửi ZNS nhắc mẹ',
      'Quản lý không giới hạn sản phẩm & cài đặt chu kỳ dùng',
      'Kết nối và đồng bộ dữ liệu với KiotViet',
      'Hỗ trợ nhập danh sách khách hàng từ file Excel',
      'Phân quyền nhân viên',
      'Báo cáo thống kê gửi tin',
    ],
  },
  {
    id: 'growth',
    name: 'Gói Phát Triển',
    badgeTop: 'KHUYÊN DÙNG CHO SHOP MẸ & BÉ',
    desc: 'Tăng tốc doanh số và chăm sóc trọn vẹn: Thai kỳ ➔ Mẹ bầu ➔ Bé lớn',
    price: 'XXX.XXX',
    billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
    popular: true,
    icon: Crown,
    iconBg: 'bg-amber-400 text-amber-950',
    ctaText: 'Đăng ký nhận tư vấn',
    highlightBox: 'Đầy đủ tính năng – Phù hợp cho 80% shop mẹ & bé',
    features: [
      'Tất cả tính năng của gói Dùng Thử',
      'Chăm sóc theo vòng đời Mẹ Bầu - Bé (0 - 36 tháng)',
      'Tự động đếm ngày hết bỉm, sữa & kích hoạt ZNS',
      'Nhắc mua thai sản theo độ tuổi & chu kỳ mua',
      'Quản lý không giới hạn sản phẩm & chu kỳ dùng',
      'Kết nối và đồng bộ dữ liệu với KiotViet',
      'Hỗ trợ nhập danh sách khách hàng từ file Excel',
      'Phân quyền nhân viên',
      'Báo cáo chi tiết tỷ lệ gửi tin',
    ],
  },
  {
    id: 'pro',
    name: 'Gói Pro',
    badgeTop: 'Cho shop quy mô lớn',
    desc: 'Giải pháp cao cấp nhất với trọn bộ 3 tính năng chăm sóc chủ đạo',
    price: 'X.XXX.XXX',
    billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
    popular: false,
    icon: Gem,
    iconBg: 'bg-[#f0f9ff] border-[#e0f2fe] text-[#0284c7]',
    ctaText: 'Đăng ký nhận tư vấn',
    features: [
      'Tất cả tính năng của gói Phát Triển',
      'Chiến dịch gửi tin nhắn theo sự kiện tháng',
      'Tự động phân nhóm khách theo độ tuổi bé & chu kỳ mua',
      'Quản lý không giới hạn sản phẩm & cài đặt chu kỳ dùng',
      'Kết nối và đồng bộ dữ liệu với KiotViet',
      'Hỗ trợ nhập danh sách khách hàng từ file Excel',
      'Phân quyền nhân viên',
      'Báo cáo chi tiết tỷ lệ gửi tin',
    ],
  },
];

const PricingSection = ({ onOpenTrial }) => {
  // Trạng thái mở accordion trên Mobile (mặc định mở Gói Phát Triển)
  const [activeMobilePlan, setActiveMobilePlan] = useState('growth');

  const handleToggleMobile = (id) => {
    setActiveMobilePlan((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="pricing"
      className="scroll-mt-20 py-10 sm:py-14 bg-gradient-to-b from-[#e6fbf7]/80 via-[#f0fdfa]/40 to-white relative overflow-hidden"
    >
      {/* Làn sóng hữu cơ Xanh Xanh Trắng Trắng góc trên bên trái */}
      <div className="hidden lg:block absolute -top-14 -left-14 w-[420px] h-[360px] pointer-events-none z-0">
        <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 H280 C240 70 250 140 190 210 C130 270 60 290 0 300 V0 Z" fill="url(#prMintGrad)" />
          <defs>
            <linearGradient id="prMintGrad" x1="0" y1="0" x2="280" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#99f6e4" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Làn sóng hữu cơ Xanh Cyan góc dưới bên phải */}
      <div className="hidden lg:block absolute -bottom-14 -right-14 w-[420px] h-[360px] pointer-events-none z-0">
        <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M400 340 H120 C160 270 150 200 210 130 C270 70 340 50 400 40 V340 Z" fill="url(#prCyanGrad)" />
          <defs>
            <linearGradient id="prCyanGrad" x1="400" y1="340" x2="120" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#cffafe" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a5f3fc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f0fdfa" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tiêu đề Bảng Giá Đầu Tư Hiệu Quả */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ccfbf1]/80 text-[#0f766e] font-extrabold text-xs uppercase tracking-wider mb-3 border border-teal-200/80 shadow-2xs">
              Bảng Giá Đầu Tư Hiệu Quả
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[38px] font-black text-slate-900 tracking-tight leading-tight mb-3 lg:whitespace-nowrap">
              <span className="block sm:inline">Chi phí cực nhỏ</span>
              <span className="hidden sm:inline"> - </span>
              <span className="text-[#0d9488] block sm:inline">
                Giữ chân trọn đời <span className="whitespace-nowrap">mẹ bỉm sữa</span>
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
              Chỉ từ vài ngàn đồng một ngày để sở hữu hệ thống tự động hóa, mang lại hàng chục triệu doanh số tái mua mỗi tháng.
            </p>

            {/* Dải thông báo Tiết kiệm 20% kèm 2 nét vẽ Doodle vàng */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5">
              <GoldenDoodleLeft />
              <span className="bg-[#fef08a] text-amber-950 font-black text-xs px-2.5 py-1 rounded-full shadow-2xs uppercase tracking-wider inline-flex items-center gap-1">
                % Tiết Kiệm 20%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                Bảng giá áp dụng thanh toán trọn gói theo năm
              </span>
              <GoldenDoodleRight />
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: 3 Thẻ bảng giá nằm ngang đúng 100% Mockup Ảnh                */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-stretch pt-4">
          
          {/* Card 1: Gói Dùng Thử */}
          <ScrollReveal direction="up" delay={0.05}>
            <div className="h-full bg-white rounded-[32px] p-6 sm:p-7 border border-slate-100 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top header: Icon + Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#e6fffa] border border-[#ccfbf1] flex items-center justify-center text-[#0d9488] shadow-2xs group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5 -rotate-45" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#e6fffa] text-[#0d9488] border border-[#ccfbf1]">
                    Dành cho shop mới
                  </span>
                </div>

                {/* Tên gói & mô tả */}
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Gói Dùng Thử
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed min-h-[34px] mb-4">
                  Phù hợp cho shop mẹ &amp; bé trải nghiệm tính năng nhắc chu kỳ tiêu dùng
                </p>

                {/* Giá gói */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl xl:text-[34px] font-black text-slate-900 tracking-tight font-outfit">
                      XXX.XXX
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      đ / tháng
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Thanh toán trọn gói theo năm (Tiết kiệm 20%)
                  </div>
                </div>

                {/* Danh sách quyền lợi với dấu tích xanh tròn đặc */}
                <div className="space-y-3 mb-6">
                  {plansData[0].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-700 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#14b8a6] flex items-center justify-center shrink-0 mr-2.5 mt-0.5 text-white text-[10px] font-black shadow-2xs">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nút hành động chuẩn trắng viền mảnh theo Mockup */}
              <button
                type="button"
                onClick={() => onOpenTrial && onOpenTrial('Gói Dùng Thử')}
                className="btn-shine w-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0d9488] text-slate-800 font-bold rounded-2xl py-3 px-4 text-xs sm:text-sm flex items-center justify-center gap-1 shadow-2xs hover:shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <span>Đăng ký dùng thử 14 ngày miễn phí</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </ScrollReveal>

          {/* Card 2: Gói Phát Triển (Ngôi sao chủ đạo - Nền Xanh Teal Đậm) */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="relative h-full rounded-[32px] p-6 sm:p-7 bg-gradient-to-b from-[#0d9488] via-[#0f766e] to-[#0a4642] text-white shadow-2xl shadow-teal-800/35 border border-teal-300/30 flex flex-col justify-between overflow-visible group lg:-translate-y-2">
              
              {/* Cụm Vương Miện Vàng 3D + Banner Khuyên Dùng liền mạch đúng Mockup */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center z-30 select-none pointer-events-none">
                <div className="w-11 h-9 -mr-3.5 -mt-2.5 z-10 anim-crown drop-shadow-md">
                  <Crown3D className="w-full h-full" />
                </div>
                <div className="bg-[#fef08a] border border-amber-300 text-amber-950 text-[11px] sm:text-xs font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider pl-4 whitespace-nowrap">
                  KHUYÊN DÙNG CHO SHOP MẸ &amp; BÉ
                </div>
              </div>

              {/* Huy hiệu % 3D lơ lửng góc trên bên phải */}
              <div className="absolute top-4 right-4 w-11 h-11 pointer-events-none z-20 anim-badge-percent opacity-95 drop-shadow-md">
                <PercentBadge3D className="w-full h-full" />
              </div>

              <div>
                {/* Tên gói & mô tả */}
                <div className="pt-2">
                  <h3 className="text-2xl font-black text-white mb-1">
                    Gói Phát Triển
                  </h3>
                  <p className="text-xs text-teal-100 leading-relaxed min-h-[34px] mb-4">
                    Tăng tốc doanh số và chăm sóc trọn vẹn: Thai kỳ ➔ Mẹ bầu ➔ Bé lớn
                  </p>
                </div>

                {/* Giá gói */}
                <div className="mb-4 pb-4 border-b border-teal-500/40">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl xl:text-[34px] font-black text-white tracking-tight font-outfit">
                      XXX.XXX
                    </span>
                    <span className="text-sm font-semibold text-teal-200">
                      đ / tháng
                    </span>
                  </div>
                  <div className="text-xs text-teal-200 mt-1">
                    Thanh toán trọn gói theo năm (Tiết kiệm 20%)
                  </div>
                </div>

                {/* Hộp nổi bật: Đầy đủ tính năng – Phù hợp cho 80% shop */}
                <div className="bg-white rounded-2xl p-2.5 mb-5 flex items-center gap-2.5 text-teal-950 shadow-xs">
                  <div className="w-7 h-7 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-[#0d9488]">
                    <Store className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black leading-tight text-teal-900">
                    Đầy đủ tính năng – Phù hợp cho 80% shop mẹ &amp; bé
                  </span>
                </div>

                {/* Danh sách quyền lợi */}
                <div className="space-y-3 mb-6">
                  {plansData[1].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-[13px] text-teal-50 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#2dd4bf] flex items-center justify-center shrink-0 mr-2.5 mt-0.5 text-teal-950 text-[10px] font-black shadow-2xs">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nút hành động Xanh Ngọc Nổi Bật Kèm Hiệu Ứng Sáng Quét Header */}
              <button
                type="button"
                onClick={() => onOpenTrial && onOpenTrial('Gói Phát Triển')}
                className="btn-shine w-full bg-[#0d9488] hover:bg-[#0f766e] text-white font-black rounded-2xl py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-1 shadow-lg shadow-teal-950/40 hover:scale-105 transition-all cursor-pointer border-0"
              >
                <span>Đăng ký nhận tư vấn</span>
                <ChevronRight className="w-4 h-4 text-teal-100" />
              </button>
            </div>
          </ScrollReveal>

          {/* Card 3: Gói Pro */}
          <ScrollReveal direction="up" delay={0.18}>
            <div className="h-full bg-white rounded-[32px] p-6 sm:p-7 border border-slate-100 shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Top header: Icon + Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#f0f9ff] border border-[#e0f2fe] flex items-center justify-center text-[#0284c7] shadow-2xs group-hover:scale-105 transition-transform">
                    <Gem className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#f0f9ff] text-[#0284c7] border border-[#e0f2fe]">
                    Cho shop quy mô lớn
                  </span>
                </div>

                {/* Tên gói & mô tả */}
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Gói Pro
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed min-h-[34px] mb-4">
                  Giải pháp cao cấp nhất với trọn bộ 3 tính năng chăm sóc chủ đạo
                </p>

                {/* Giá gói */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl xl:text-[34px] font-black text-slate-900 tracking-tight font-outfit">
                      X.XXX.XXX
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      đ / tháng
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Thanh toán trọn gói theo năm (Tiết kiệm 20%)
                  </div>
                </div>

                {/* Danh sách quyền lợi */}
                <div className="space-y-3 mb-6">
                  {plansData[2].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-700 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#14b8a6] flex items-center justify-center shrink-0 mr-2.5 mt-0.5 text-white text-[10px] font-black shadow-2xs">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nút hành động chuẩn trắng viền mảnh theo Mockup */}
              <button
                type="button"
                onClick={() => onOpenTrial && onOpenTrial('Gói Pro')}
                className="btn-shine w-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0d9488] text-slate-800 font-bold rounded-2xl py-3 px-4 text-xs sm:text-sm flex items-center justify-center gap-1 shadow-2xs hover:shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                <span>Đăng ký nhận tư vấn</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Dạng thẻ Accordion Thu Gọn & Mở Rộng đúng 100% Mockup Ảnh     */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col space-y-3.5 pt-2">
          
          {/* Card 1 Mobile: Gói Dùng Thử */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all">
            <div
              onClick={() => handleToggleMobile('trial')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#e6fffa] border border-[#ccfbf1] flex items-center justify-center text-[#0d9488] shrink-0">
                  <Send className="w-4 h-4 -rotate-45" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Gói Dùng Thử
                  </h4>
                  <p className="text-xs text-slate-500 leading-tight">
                    Phù hợp cho shop mới trải nghiệm
                  </p>
                  <div className="text-xs font-black text-slate-900 mt-0.5">
                    XXX.XXX <span className="font-normal text-[11px] text-slate-500">đ / tháng</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 text-slate-400 pl-2">
                {activeMobilePlan === 'trial' ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>

            {/* Nội dung khi mở rộng */}
            {activeMobilePlan === 'trial' && (
              <div className="px-4 pb-4 pt-1 border-t border-slate-100 animate-fadeIn bg-white">
                <div className="space-y-2 mb-4 mt-2">
                  {plansData[0].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <span className="text-[#0d9488] font-black mr-2 shrink-0">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onOpenTrial && onOpenTrial('Gói Dùng Thử')}
                  className="btn-shine w-full bg-[#0d9488] text-white font-bold rounded-xl py-3 text-xs flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <span>Đăng ký dùng thử 14 ngày miễn phí</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>

          {/* Card 2 Mobile: Gói Phát Triển (Toàn bộ thẻ nền Xanh Teal đậm đồng nhất chuẩn Mockup) */}
          <div className="bg-[#0f766e] rounded-2xl shadow-lg border border-teal-500/40 overflow-hidden text-white transition-all">
            <div
              onClick={() => handleToggleMobile('growth')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer bg-transparent"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
                  <Crown className="w-4 h-4 fill-amber-950" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-white leading-snug">
                      Gói Phát Triển
                    </h4>
                    <span className="bg-[#fef08a] text-amber-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Phổ biến nhất
                    </span>
                  </div>
                  <p className="text-xs text-teal-100 leading-tight mt-0.5">
                    Tăng tốc doanh số và chăm sóc trọn vẹn: Thai kỳ ➔ Mẹ bầu ➔ Bé lớn
                  </p>
                  <div className="text-xs font-black text-white mt-1">
                    XXX.XXX <span className="font-normal text-[11px] text-teal-200">đ / tháng</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 text-teal-200 pl-2">
                {activeMobilePlan === 'growth' ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>

            {/* Nội dung khi mở rộng: Nút trắng chữ xanh chuẩn Mockup */}
            {activeMobilePlan === 'growth' && (
              <div className="px-4 pb-4 pt-0 border-t border-teal-600/50 animate-fadeIn bg-transparent">
                <button
                  type="button"
                  onClick={() => onOpenTrial && onOpenTrial('Gói Phát Triển')}
                  className="btn-shine w-full bg-white hover:bg-slate-50 text-[#0f766e] font-extrabold rounded-xl py-3 text-xs sm:text-sm flex items-center justify-center gap-1 shadow-md my-3 cursor-pointer"
                >
                  <span>Đăng ký nhận tư vấn</span>
                  <ChevronRight className="w-4 h-4 text-[#0f766e]" />
                </button>

                <div className="space-y-2">
                  {plansData[1].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-teal-50">
                      <span className="text-teal-200 font-black mr-2 shrink-0">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Card 3 Mobile: Gói Pro */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all">
            <div
              onClick={() => handleToggleMobile('pro')}
              className="w-full p-4 flex items-center justify-between text-left cursor-pointer bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] flex items-center justify-center text-[#0284c7] shrink-0">
                  <Gem className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Gói Pro
                  </h4>
                  <p className="text-xs text-slate-500 leading-tight">
                    Giải pháp cao cấp với trọn bộ 3 tính năng
                  </p>
                  <div className="text-xs font-black text-slate-900 mt-0.5">
                    X.XXX.XXX <span className="font-normal text-[11px] text-slate-500">đ / tháng</span>
                  </div>
                </div>
              </div>
              <div className="shrink-0 text-slate-400 pl-2">
                {activeMobilePlan === 'pro' ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>

            {/* Nội dung khi mở rộng */}
            {activeMobilePlan === 'pro' && (
              <div className="px-4 pb-4 pt-1 border-t border-slate-100 animate-fadeIn bg-white">
                <div className="space-y-2 mb-4 mt-2">
                  {plansData[2].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <span className="text-[#0d9488] font-black mr-2 shrink-0">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onOpenTrial && onOpenTrial('Gói Pro')}
                  className="btn-shine w-full bg-[#0d9488] text-white font-bold rounded-xl py-3 text-xs flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <span>Đăng ký nhận tư vấn</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
