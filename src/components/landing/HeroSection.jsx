import React, { useState, useEffect, useRef } from 'react';
import { Button, Tag } from 'antd';
import {
  ThunderboltOutlined,
  PlayCircleOutlined,
  SyncOutlined,
  GiftOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import {
  Package,
  MessageSquare,
  Users,
  BarChart2,
  Link2,
  ShieldCheck,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import WanderingCursor from './WanderingCursor';
import TechGridBackground from './TechGridBackground';

/**
 * 3D Clipboard Illustration (Bảng kẹp hồ sơ với dấu ❌ 3D nổi bật)
 */
const Clipboard3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="clipBoardGrad" x1="20" y1="10" x2="140" y2="160" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fecdd3" />
        <stop offset="50%" stopColor="#fda4af" />
        <stop offset="100%" stopColor="#fb7185" />
      </linearGradient>
      <linearGradient id="clipPaperGrad" x1="30" y1="20" x2="120" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <linearGradient id="crossBadgeGrad" x1="90" y1="100" x2="145" y2="155" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb7185" />
        <stop offset="50%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
      <filter id="cbShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="2" dy="10" stdDeviation="10" floodColor="#f43f5e" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#cbShadow)">
      {/* Thân bảng kẹp */}
      <rect x="22" y="16" width="104" height="138" rx="14" fill="url(#clipBoardGrad)" />
      {/* Kẹp kim loại hồng trên cùng */}
      <rect x="52" y="8" width="44" height="18" rx="6" fill="#f43f5e" />
      <circle cx="74" cy="17" r="4" fill="#ffffff" opacity="0.8" />
      {/* Tờ giấy kiểm tra trắng */}
      <rect x="32" y="28" width="84" height="116" rx="8" fill="url(#clipPaperGrad)" />

      {/* 4 dòng gạch đầu dòng có dấu x */}
      <rect x="42" y="44" width="12" height="12" rx="3" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1.5" />
      <path d="M45 47 L51 53 M51 47 L45 53" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="50" x2="104" y2="50" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />

      <rect x="42" y="66" width="12" height="12" rx="3" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1.5" />
      <path d="M45 69 L51 75 M51 69 L45 75" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="72" x2="98" y2="72" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />

      <rect x="42" y="88" width="12" height="12" rx="3" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1.5" />
      <path d="M45 91 L51 97 M51 91 L45 97" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="94" x2="102" y2="94" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />

      <rect x="42" y="110" width="12" height="12" rx="3" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1.5" />
      <path d="M45 113 L51 119 M51 113 L45 119" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="116" x2="92" y2="116" stroke="#fda4af" strokeWidth="3" strokeLinecap="round" />

      {/* Huy hiệu 3D Tròn Đỏ có chữ X Trắng nổi bật */}
      <circle cx="120" cy="128" r="24" fill="url(#crossBadgeGrad)" />
      <circle cx="120" cy="128" r="22" stroke="#ffffff" strokeWidth="2" opacity="0.6" fill="none" />
      <path d="M110 118 L130 138 M130 118 L110 138" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    </g>
  </svg>
);

/**
 * 3D Laptop Illustration (Laptop công nghệ biểu đồ với dấu ✔ 3D & sao lấp lánh)
 */
const Laptop3D = ({ className = '' }) => (
  <svg
    viewBox="0 0 180 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="laptopScreenGrad" x1="30" y1="20" x2="150" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <linearGradient id="laptopBodyGrad" x1="10" y1="110" x2="170" y2="135" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <linearGradient id="checkBadgeGrad" x1="120" y1="110" x2="170" y2="160" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="lpShadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="2" dy="10" stdDeviation="12" floodColor="#10b981" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#lpShadow)">
      {/* Khung màn hình Laptop */}
      <rect x="30" y="24" width="118" height="82" rx="8" fill="#1e293b" />
      {/* Màn hình hiển thị sáng */}
      <rect x="34" y="28" width="110" height="74" rx="5" fill="url(#laptopScreenGrad)" />

      {/* Biểu đồ cột phân tích tăng trưởng */}
      <rect x="42" y="36" width="34" height="12" rx="3" fill="#bae6fd" />
      <rect x="80" y="36" width="28" height="12" rx="3" fill="#a7f3d0" />
      <circle cx="132" cy="42" r="4" fill="#38bdf8" />

      <rect x="94" y="68" width="7" height="24" rx="2" fill="#0ea5e9" />
      <rect x="105" y="60" width="7" height="32" rx="2" fill="#0284c7" />
      <rect x="116" y="52" width="7" height="40" rx="2" fill="#0369a1" />
      <rect x="127" y="56" width="7" height="36" rx="2" fill="#38bdf8" />

      {/* Thẻ đồ thị đường cong xanh */}
      <rect x="42" y="56" width="44" height="36" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <path d="M46 80 Q56 68, 66 74 T82 62" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Bàn phím & Thân máy dưới */}
      <path d="M18 106 L160 106 L172 122 C172 125, 168 127, 162 127 L16 127 C10 127, 6 125, 6 122 L18 106 Z" fill="url(#laptopBodyGrad)" />
      <rect x="74" y="107" width="30" height="4" rx="2" fill="#cbd5e1" />

      {/* Ngôi sao lấp lánh vàng cam */}
      <path d="M152 20 Q152 28, 160 28 Q152 28, 152 36 Q152 28, 144 28 Q152 28, 152 20 Z" fill="#f59e0b" />
      <circle cx="166" cy="44" r="2.5" fill="#fbbf24" />

      {/* Huy hiệu 3D Tròn Xanh có dấu Check Trắng */}
      <circle cx="145" cy="132" r="22" fill="url(#checkBadgeGrad)" />
      <circle cx="145" cy="132" r="20" stroke="#ffffff" strokeWidth="2" opacity="0.6" fill="none" />
      <path d="M136 132 L143 139 L155 125" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const CORE_FEATURES = [
  {
    id: 'cycle',
    number: '01',
    badge: 'Chu kỳ bỉm sữa',
    title: 'Nhắc mua hàng theo chu kỳ',
    shortDesc: 'Tự đếm ngược ngày hết bỉm sữa, kích hoạt ZNS nhắc mẹ trước 2-3 ngày chốt đơn.',
    benefit: 'Giữ chân 85% khách cũ',
    icon: <SyncOutlined />,
    accent: 'teal',
    cardBorder: 'border-[#139091] bg-teal-50/60 shadow-teal-600/10 ring-2 ring-[#139091]',
    znsData: {
      tag: 'ZNS Chu Kỳ',
      tagColor: 'cyan',
      headerTitle: 'Thông báo chu kỳ tiêu dùng bỉm sữa',
      time: 'Hôm nay 09:30',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, bé Bon sắp dùng hết lon Sữa Meiji số 1 (800g) đã mua ngày 15/10. Theo chu kỳ tiêu dùng tự động, bé dự kiến còn sữa dùng trong 2 ngày tới ạ.',
      suggestionLabel: 'Sản phẩm gợi ý:',
      suggestionValue: 'Sữa A2 số 1 (800g)',
      offerLabel: 'Ưu đãi đặt sớm:',
      offerValue: 'Giảm 40.000₫',
      voucherDuration: 'Áp dụng trong 48h tới',
      primaryBtnText: 'Đặt lại sữa ngay',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
    },
  },
  {
    id: 'lifecycle',
    number: '02',
    badge: 'Vòng đời Mẹ & Bé',
    title: 'Chăm sóc vòng đời Mẹ & Bé',
    shortDesc: 'Bao trọn từ thai kỳ đến bé 0-36m, tự động nhắc đổi số sữa và ăn dặm.',
    benefit: 'Đồng hành 0 - 3 tuổi',
    icon: <HeartOutlined />,
    accent: 'purple',
    cardBorder: 'border-purple-500 bg-purple-50/60 shadow-purple-500/10 ring-2 ring-purple-500',
    tagColor: 'purple',
    znsData: {
      tag: 'ZNS Vòng Đời',
      tagColor: 'purple',
      headerTitle: 'Đồng hành: Bé tròn 6 tháng tuổi',
      time: 'Hôm nay 08:30',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, hôm nay bé Bon đã tròn 6 tháng tuổi rồi! Ở mốc này, bé bắt đầu ăn dặm và đổi sang sữa số 2. Shop tặng mẹ voucher giảm 35k khi mua Combo ăn dặm đầu đời nhé!',
      suggestionLabel: 'Gợi ý mốc 6 tháng:',
      suggestionValue: 'Combo Ăn dặm & Sữa số 2',
      offerLabel: 'Quà tặng cột mốc:',
      offerValue: 'Tặng Bát thìa + Giảm 35.000₫',
      voucherDuration: 'Áp dụng trong 7 ngày tới',
      primaryBtnText: 'Đặt hàng trên website',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
    },
  },
  {
    id: 'monthly',
    number: '03',
    badge: 'Chiến dịch tháng',
    title: 'Chiến dịch gửi tin theo tháng',
    shortDesc: 'Kích hoạt ưu đãi ngày hội thành viên, sinh nhật mẹ & bé kéo khách cũ quay lại.',
    benefit: 'Tăng 35% doanh số',
    icon: <GiftOutlined />,
    accent: 'amber',
    cardBorder: 'border-amber-500 bg-amber-50/60 shadow-amber-500/10 ring-2 ring-amber-500',
    tagColor: 'gold',
    znsData: {
      tag: 'ZNS Sự Kiện',
      tagColor: 'gold',
      headerTitle: 'Tri ân Ngày Hội Thành Viên & Sinh Nhật',
      time: '15/11 10:00',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, nhân dịp Ngày Hội Thành Viên tháng này và mừng sinh nhật mẹ bỉm, shop gửi tặng riêng mẹ voucher VIP giảm 15% cho tất cả đơn hàng bỉm sữa nhé!',
      suggestionLabel: 'Hạng thành viên:',
      suggestionValue: 'Hội viên VIP Kim Cương',
      offerLabel: 'Mã ưu đãi độc quyền:',
      offerValue: 'VIPMOM15 (Giảm 15%)',
      voucherDuration: 'Áp dụng đến hết 18/11',
      primaryBtnText: 'Đặt hàng trên website',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
    },
  },
];

const MANAGEMENT_TOOLS = [
  {
    icon: <Link2 className="w-5 h-5 text-[#139091]" />,
    iconBg: 'bg-teal-100/90 text-[#139091]',
    badge: 'Realtime',
    badgeColor: 'bg-teal-50 text-[#139091] border-teal-200/60',
    title: 'Kết nối KiotViet & Zalo OA',
    desc: 'Đồng bộ hóa đơn tự động 30s, kích hoạt OA tích vàng',
    borderHover: 'hover:border-teal-300 hover:shadow-teal-500/10 hover:bg-white',
  },
  {
    icon: <Users className="w-5 h-5 text-purple-600" />,
    iconBg: 'bg-purple-100/90 text-purple-600',
    badge: '1-Click',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/60',
    title: 'Quản lý dữ liệu (Excel)',
    desc: 'Thêm, sửa, tìm kiếm, lọc thông minh, nhập file Excel',
    borderHover: 'hover:border-purple-300 hover:shadow-purple-500/10 hover:bg-white',
  },
  {
    icon: <Package className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-100/90 text-blue-600',
    badge: 'AI Chu kỳ',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
    title: 'Sản phẩm & Chu kỳ',
    desc: 'Cài đặt số ngày dùng từng lon sữa, size bỉm',
    borderHover: 'hover:border-blue-300 hover:shadow-blue-500/10 hover:bg-white',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-pink-600" />,
    iconBg: 'bg-pink-100/90 text-pink-600',
    badge: 'Zalo duyệt',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200/60',
    title: 'Quản lý Template ZNS',
    desc: 'Kho mẫu tin được Zalo duyệt, thêm & tìm kiếm dễ',
    borderHover: 'hover:border-pink-300 hover:shadow-pink-500/10 hover:bg-white',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
    iconBg: 'bg-amber-100/90 text-amber-600',
    badge: 'Bảo mật',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
    title: 'Phân quyền & Nhật ký',
    desc: 'Phân quyền nhân viên, bảo mật & xem lịch sử gửi tin',
    borderHover: 'hover:border-amber-300 hover:shadow-amber-500/10 hover:bg-white',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-sky-600" />,
    iconBg: 'bg-sky-100/90 text-sky-600',
    badge: 'Trực quan',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/60',
    title: 'Báo cáo & Thống kê',
    desc: 'Thống kê biến động số tin, tỷ lệ mở và chi phí',
    borderHover: 'hover:border-sky-300 hover:shadow-sky-500/10 hover:bg-white',
  },
];

const HeroSection = ({ onOpenTrial }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const heroContainerRef = useRef(null);

  // Auto-play timer chuyển đổi kịch bản mượt mà mỗi 5.5 giây, tạm dừng khi người dùng hover/tương tác
  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveFeature((cur) => (cur + 1) % CORE_FEATURES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentFeature = CORE_FEATURES[activeFeature];
  const currentZns = currentFeature.znsData;

  return (
    <section
      id="solution"
      data-section="interactive-demo"
      ref={heroContainerRef}
      className="scroll-mt-20 py-12 sm:py-16 bg-gradient-to-b from-[#e6fbf7]/70 via-[#f0fdfa]/50 to-white relative overflow-hidden"
    >
      {/* 1. NỀN TECH-GRID MÀU MÈ DẠNG LƯỚI VỚI HẠT SÁNG CHẠY VÀ VẦNG GLOW TOÀN SECTION */}
      <TechGridBackground variant="light" />
      <WanderingCursor containerRef={heroContainerRef} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* PHẦN SỰ KHÁC BIỆT KHI ÁP DỤNG MOBYFLOW CHO SHOP MẸ & BÉ                  */}
        {/* Giữ nguyên Tiêu Đề + Mô Tả + 3D Icons, Bê toàn bộ phần Zalo ZNS Demo lên  */}
        {/* ========================================================================= */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-white/85 backdrop-blur-xl rounded-[32px] sm:rounded-[44px] p-5 sm:p-8 lg:p-10 border border-teal-100/90 shadow-[0_20px_70px_-15px_rgba(19,144,145,0.12)] relative overflow-hidden">

            {/* LƯỚI TECH-GRID MÀU MÈ CHẠY BÊN TRONG KHUNG KÈM HẠT SÁNG & VẦNG GLOW */}
            <TechGridBackground variant="light" />

            {/* Hạt sao lấp lánh màu mè phát sáng nhẹ */}
            <div className="absolute top-1/4 right-1/4 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-ping opacity-75 pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/6 w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_#139091] animate-pulse opacity-80 pointer-events-none" />
            <div className="absolute top-2/3 right-1/6 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899] animate-pulse opacity-70 pointer-events-none" />

            {/* Icon bình sữa 3D pastel lơ lửng góc trên bên phải */}
            {/* <div className="hidden lg:flex items-center justify-center absolute top-10 right-10 w-11 h-11 rounded-2xl bg-white/90 shadow-md border border-teal-100 text-xl anim-baby-bottle pointer-events-none z-10" title="Chu kỳ bỉm sữa">
              🍼
            </div> */}

            {/* Icon em bé 3D pastel lơ lửng góc dưới bên trái */}
            {/* <div className="hidden lg:flex items-center justify-center absolute bottom-28 left-8 w-11 h-11 rounded-full bg-amber-100/90 shadow-md border border-amber-200 text-xl anim-moon-star pointer-events-none z-10" title="Mẹ bầu và bé">
              👶
            </div> */}

            {/* Làn sóng hữu cơ Mint góc trên bên trái khung */}
            <div className="hidden md:block absolute -top-12 -left-12 w-80 lg:w-96 h-72 lg:h-80 pointer-events-none z-0">
              <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0 0 H260 C230 70 240 130 180 190 C120 250 60 270 0 280 V0 Z" fill="url(#cmpMintGradHero)" />
                <defs>
                  <linearGradient id="cmpMintGradHero" x1="0" y1="0" x2="260" y2="280" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#99f6e4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Bảng kẹp 3D Clipboard với dấu ❌ tròn nổi bật */}
            <div className="hidden md:block absolute top-8 lg:top-10 left-3 lg:left-6 w-24 lg:w-32 pointer-events-none z-10 anim-clipboard drop-shadow-lg">
              <Clipboard3D className="w-full h-auto" />
            </div>

            {/* Làn sóng hữu cơ Cyan/Teal góc trên bên phải khung */}
            <div className="hidden md:block absolute -top-10 -right-10 w-80 lg:w-96 h-72 lg:h-80 pointer-events-none z-0">
              <svg viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M380 0 H120 C150 70 140 140 190 200 C240 250 310 270 380 270 V0 Z" fill="url(#cmpCyanGradHero)" />
                <defs>
                  <linearGradient id="cmpCyanGradHero" x1="380" y1="0" x2="120" y2="270" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#cffafe" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#a5f3fc" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Laptop 3D biểu đồ với dấu ✔ tròn nổi bật */}
            <div className="hidden md:block absolute top-6 lg:top-8 right-3 lg:right-6 w-30 lg:w-40 pointer-events-none z-10 anim-laptop drop-shadow-lg">
              <Laptop3D className="w-full h-auto" />
            </div>

            {/* Header Mục Sự Khác Biệt (GIỮ NGUYÊN TIÊU ĐỀ & MÔ TẢ THEO YÊU CẦU CỦA BẠN) */}
            <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 relative z-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan-50 border border-teal-200/60 text-[#139091] text-xs font-black uppercase tracking-wider mb-3.5 shadow-2xs">
                Sự Khác Biệt
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-[1.38] sm:leading-[1.46] mb-3.5 sm:mb-4">
                Sự Khác Biệt Khi Áp Dụng <span className="text-[#139091]">MobyFlow</span> Cho{' '}
                <span className="whitespace-nowrap">Shop Mẹ &amp; Bé</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto m-0">
                Chuyển đổi từ cách quản lý bị động sang tự động hóa toàn diện, chuyên sâu với <strong>3 chức năng chăm sóc chủ đạo</strong>.
              </p>
            </div>

            {/* ========================================================================= */}
            {/* NỘI DUNG ĐƯỢC BÊ LÊN: MÔ PHỎNG ZALO ZNS & 3 CHỨC NĂNG CHỦ ĐẠO TƯƠNG TÁC */}
            {/* ========================================================================= */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start pt-2">

              {/* Cột Trái (Col-span-7): Lời dẫn, 3 Cards Chức Năng, CTAs & Stats */}
              <div className="lg:col-span-7 text-center lg:text-left">
                {/* Lời dẫn kèm chỉ báo tự động trình diễn kịch bản */}
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 m-0">
                      Đồng bộ <strong>KiotViet</strong> trong 30s, tự động đếm chu kỳ và kích hoạt Zalo ZNS tích vàng:
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/70 text-[11px] font-bold text-slate-600 shadow-2xs">
                      <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
                      <span>{isPaused ? 'Tạm dừng demo' : 'Đang tự động demo'}</span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* 3 Chức Năng Trọng Tâm Tương Tác có thanh tiến trình tự động & hover tạm dừng */}
                <ScrollReveal direction="up" delay={0.25}>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 items-stretch"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {CORE_FEATURES.map((item, index) => {
                      const isSelected = activeFeature === index;
                      return (
                        <div
                          key={item.id}
                          id={`hero-card-${index}`}
                          onClick={() => {
                            setActiveFeature(index);
                          }}
                          className={`cursor-pointer rounded-2xl p-3.5 sm:p-4 transition-all duration-200 border text-left relative flex flex-col justify-between h-full select-none overflow-hidden ${isSelected
                            ? `${item.cardBorder} shadow-md`
                            : 'border-gray-200 bg-white/95 hover:border-teal-200 hover:shadow-md hover:-translate-y-1'
                            }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${isSelected
                                  ? item.accent === 'teal'
                                    ? 'bg-[#139091] text-white shadow-xs'
                                    : item.accent === 'purple'
                                      ? 'bg-purple-600 text-white shadow-xs'
                                      : 'bg-amber-600 text-white shadow-xs'
                                  : 'bg-gray-100 text-gray-600'
                                  }`}
                              >
                                {item.number}
                              </span>
                              <div className="flex items-center gap-1">
                                {isSelected && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                                )}
                                <span
                                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isSelected
                                    ? item.accent === 'teal'
                                      ? 'bg-teal-100 text-[#139091]'
                                      : item.accent === 'purple'
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'bg-amber-100 text-amber-700'
                                    : 'bg-gray-100 text-gray-500'
                                    }`}
                                >
                                  {item.badge}
                                </span>
                              </div>
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug flex items-center min-h-[40px]">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-500 m-0 leading-relaxed mb-3">
                              {item.shortDesc}
                            </p>
                          </div>

                          {/* Tag cam kết kết quả ở đáy card */}
                          <div className="pt-2 border-t border-gray-100 flex items-center justify-between overflow-hidden">
                            <span
                              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${isSelected
                                ? item.accent === 'teal'
                                  ? 'bg-teal-100/90 text-[#0f766e]'
                                  : item.accent === 'purple'
                                    ? 'bg-purple-100/90 text-purple-700'
                                    : 'bg-amber-100/90 text-amber-700'
                                : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                              {index === 0 && <span className="text-emerald-500 font-black text-xs shrink-0">✓</span>}
                              {index === 1 && <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />}
                              {index === 2 && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />}
                              <span className="whitespace-nowrap">{item.benefit}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollReveal>

                {/* Cụm Nút Kêu Gọi Hành Động (CTA kép) */}
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
                    <Button
                      id="btn-hero-trial"
                      type="primary"
                      size="large"
                      icon={<ThunderboltOutlined />}
                      onClick={onOpenTrial}
                      className="btn-shine w-full sm:w-auto h-12 px-8 text-base font-bold bg-gradient-to-r from-[#139091] via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-[#0f766e] border-0 rounded-2xl shadow-lg shadow-teal-600/30 flex items-center justify-center text-white hover:scale-105 transition-all cursor-pointer"
                    >
                      Dùng thử miễn phí 14 ngày
                    </Button>
                    <Button
                      id="btn-hero-demo"
                      size="large"
                      icon={<PlayCircleOutlined className="text-[#139091] text-lg" />}
                      onClick={() => {
                        const el = document.getElementById('video') || document.getElementById('showcase');
                        if (el) {
                          const headerOffset = 76;
                          const elementPosition = el.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className="w-full sm:w-auto h-12 px-6 text-base font-semibold border-gray-200 hover:border-teal-400 hover:text-[#139091] rounded-2xl flex items-center justify-center bg-white shadow-xs cursor-pointer"
                    >
                      Xem cách thức hoạt động
                    </Button>
                  </div>
                </ScrollReveal>

                {/* 3 Chỉ Số Uy Tín (Trust Indicators) */}
                <ScrollReveal direction="up" delay={0.35}>
                  <div className="pt-5 border-t border-gray-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        500+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Shop Mẹ Bé tin dùng</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#139091] tracking-tight">
                        98.5%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Tỷ lệ mở tin Zalo ZNS</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                        +35%
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Tăng khách mua lại</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Cột Phải (Col-span-5): Mô Phỏng Điện Thoại Zalo ZNS Tương Tác Trực Quan */}
              <div
                className="lg:col-span-5 flex flex-col items-center relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <ScrollReveal direction="up" delay={0.3}>

                  {/* Tab Selector phía trên điện thoại (Segmented Control phong cách iOS hiện đại) */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-xs mb-3 text-xs w-full max-w-[360px] sm:max-w-[375px] justify-between">
                    {CORE_FEATURES.map((item, idx) => {
                      const isSelected = activeFeature === idx;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setActiveFeature(idx);
                          }}
                          className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] transition-all duration-150 whitespace-nowrap text-center cursor-pointer border-0 outline-none focus:outline-none select-none ${isSelected
                            ? idx === 0
                              ? 'bg-white text-[#139091] shadow-xs ring-1 ring-teal-400/30 font-black'
                              : idx === 1
                                ? 'bg-white text-purple-700 shadow-xs ring-1 ring-purple-400/30 font-black'
                                : 'bg-white text-amber-700 shadow-xs ring-1 ring-amber-400/30 font-black'
                            : 'bg-transparent text-slate-500 hover:text-slate-800 hover:bg-white/60 font-semibold'
                            }`}
                        >
                          {item.badge}
                        </button>
                      );
                    })}
                  </div>

                  {/* Phone Mockup Zalo ZNS kèm 2 Thẻ Nổi Động */}
                  <div className="relative w-full max-w-[360px] sm:max-w-[375px]">

                    {/* Thẻ nổi động 1: ZNS đã gửi tự động (Góc trên trái) */}
                    {/* <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl shadow-teal-900/10 border border-teal-100 text-xs text-slate-800 absolute -top-4 -left-6 z-30 animate-float pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                      <div>
                        <span className="font-extrabold text-[11px] text-slate-900 block leading-tight">⚡ ZNS tự động</span>
                        <span className="text-[10px] text-teal-700 font-semibold">Tự đếm &amp; gửi trước 3 ngày</span>
                      </div>
                    </div> */}

                    {/* Thẻ nổi động 2: Khách đặt lại thành công (Góc dưới phải) */}
                    {/* <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl shadow-amber-900/10 border border-amber-100 text-xs text-slate-800 absolute -bottom-3 -right-6 z-30 animate-float-delay pointer-events-none">
                      <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-sm shrink-0">
                        🛒
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-[11px] text-slate-900">Mẹ Bon đặt lại đơn</span>
                          <span className="text-[9px] font-black text-white bg-emerald-500 px-1.5 py-0.2 rounded-full">+420k</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block leading-tight">Đồng bộ KiotViet thành công</span>
                      </div>
                    </div> */}

                    {/* Khung điện thoại */}
                    <div className="relative bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-4 border-slate-700/60 transition-transform duration-300">
                      <div className="bg-white rounded-[30px] overflow-hidden flex flex-col border border-gray-100">

                        {/* Zalo OA Header */}
                        <div className="bg-gradient-to-r from-teal-900 via-[#139091] to-teal-800 text-white p-3 sm:p-3.5 flex items-center justify-between gap-2">
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#139091] font-black text-xs shadow-xs shrink-0">
                              M
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-xs sm:text-[13px] leading-tight text-white truncate">
                                  MobyFlow • Mẹ &amp; Bé
                                </span>
                                <span
                                  className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center text-[10px] font-black shrink-0 shadow-xs"
                                  title="Tài khoản Doanh Nghiệp Tích Vàng"
                                >
                                  ✓
                                </span>
                              </div>
                              <div className="text-[10px] text-teal-100 flex items-center gap-1 font-medium leading-tight mt-0.5 truncate">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shrink-0 animate-pulse" />
                                <span>OA Doanh Nghiệp (Tích Vàng)</span>
                              </div>
                            </div>
                          </div>
                          <Tag color={currentZns.tagColor} className="m-0 font-bold text-[10px] rounded-full px-2 py-0.5 shrink-0 whitespace-nowrap">
                            {currentZns.tag}
                          </Tag>
                        </div>

                        {/* Zalo ZNS Message Content có animation mượt mà khi đổi kịch bản */}
                        <div key={activeFeature} className="animate-fadeIn p-3.5 sm:p-4 bg-slate-50/60 space-y-3 text-xs">
                          <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200/80 overflow-hidden">
                            {/* Brand Logo Header: MobyFlow */}
                            <div className="pb-2.5 mb-2.5 border-b border-gray-100 flex items-center justify-between">
                              <img
                                src="/images/logo mobyflow2-01.png"
                                alt="MobyFlow Automation"
                                className="h-6 sm:h-7 w-auto object-contain"
                              />
                              <span className="text-[10px] text-gray-400 font-medium">{currentZns.time}</span>
                            </div>

                            <div className="pb-1.5 mb-1.5 min-h-[22px]">
                              <span className="font-bold text-gray-900 text-xs sm:text-[13px] leading-snug">
                                {currentZns.headerTitle}
                              </span>
                            </div>

                            <div className="text-gray-700 leading-relaxed space-y-1.5 mb-3 text-xs min-h-[84px] sm:min-h-[76px]">
                              {currentZns.customer && (
                                <p className="m-0">
                                  Xin chào <strong>{currentZns.customer}</strong>,
                                </p>
                              )}
                              <p className="m-0 text-gray-600 leading-relaxed text-[11px] sm:text-xs">
                                {currentZns.body}
                              </p>
                            </div>

                            {/* Product & Promotion Offer Box */}
                            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100/90 mb-3 space-y-2 text-[11px]">
                              <div className="flex items-start justify-between gap-2.5 text-gray-800">
                                <span className="font-semibold text-gray-500 shrink-0">{currentZns.suggestionLabel}</span>
                                <span className="font-bold text-blue-700 text-right leading-tight">{currentZns.suggestionValue}</span>
                              </div>
                              <div className="flex items-start justify-between gap-2.5 text-gray-800">
                                <span className="font-semibold text-gray-500 shrink-0">{currentZns.offerLabel}</span>
                                <span className="font-bold text-rose-600 text-right leading-tight">{currentZns.offerValue}</span>
                              </div>
                              <div className="flex items-center justify-between gap-2.5 text-gray-500 text-[10px] pt-1.5 border-t border-blue-100">
                                <span className="shrink-0 font-medium">Thời hạn ưu đãi:</span>
                                <span className="font-semibold text-gray-700 text-right">{currentZns.voucherDuration}</span>
                              </div>
                            </div>

                            {/* ZNS Action Buttons */}
                            <div className="space-y-1.5">
                              <Button
                                id="hero-zns-action-btn"
                                block
                                type="primary"
                                onClick={() => onOpenTrial && onOpenTrial('Đặt lại đơn hàng')}
                                className="btn-shine bg-[#0068ff] hover:bg-blue-600 active:scale-95 transition-all duration-150 font-bold rounded-xl h-9 shadow-md shadow-blue-500/20 border-0 text-white flex items-center justify-center text-xs cursor-pointer"
                              >
                                {currentZns.primaryBtnText}
                              </Button>
                              <Button
                                id="hero-zns-secondary-btn"
                                block
                                onClick={() => onOpenTrial && onOpenTrial('Tư vấn Zalo')}
                                className="font-semibold text-[11px] text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all rounded-xl h-8 border-0 cursor-pointer"
                              >
                                {currentZns.secondaryBtnText}
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Mockup Footer */}
                        <div className="p-2.5 bg-white border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                          <span>Được bảo trợ bởi Zalo ZNS &amp; MobyFlow</span>
                          <span className="text-[#139091] font-semibold cursor-pointer">Xem demo chi tiết</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* DẢI CÔNG CỤ VẬN HÀNH TINH GỌN (6 MODULE CHUYÊN SÂU CHO SHOP MẸ & BÉ)      */}
            {/* ========================================================================= */}
            <div id="features" className="scroll-mt-24 pt-7 sm:pt-9 mt-7 sm:mt-9 border-t border-teal-100/60 relative z-20">
              <div className="text-center mb-6 sm:mb-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-[#139091] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-2xs">
                  <span>⚙️</span>
                  <span>Hệ Thống Vận Hành Toàn Diện</span>
                </span>
                <h3 className="text-base sm:text-lg lg:text-[19px] font-black text-slate-900 tracking-tight leading-snug sm:leading-normal m-0">
                  <span className="block sm:inline">Đầy đủ công cụ quản trị chuyên sâu</span>{' '}
                  <span className="block sm:inline whitespace-nowrap">cho Shop Mẹ &amp; Bé</span>
                </h3>
              </div>

              {/* Lưới 6 module công cụ compact với hiệu ứng hover sinh động & mini badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
                {MANAGEMENT_TOOLS.map((tool, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-slate-200/70 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.06)] hover:bg-white relative overflow-hidden ${tool.borderHover}`}
                  >
                    {/* Mini badge trạng thái góc trên */}
                    <div className="w-full flex justify-end mb-1">
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md border ${tool.badgeColor}`}>
                        {tool.badge}
                      </span>
                    </div>

                    {/* Icon xoay & phóng to nhẹ khi hover */}
                    <div className={`w-11 h-11 rounded-2xl ${tool.iconBg} flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-2xs`}>
                      {tool.icon}
                    </div>

                    <h4 className="text-xs sm:text-[13px] font-black text-slate-900 mb-1 leading-snug group-hover:text-[#139091] transition-colors">
                      {tool.title}
                    </h4>

                    <p className="text-[11px] text-slate-500 leading-relaxed m-0 hidden sm:block">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default HeroSection;
