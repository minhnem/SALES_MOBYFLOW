import React, { useState, useRef } from 'react';
import { Button, Tag, Avatar } from 'antd';
import {
  ThunderboltOutlined,
  PlayCircleOutlined,
  SafetyCertificateFilled,
  SyncOutlined,
  GiftOutlined,
  BellFilled,
  HeartOutlined,
} from '@ant-design/icons';
import ScrollReveal from './ScrollReveal';
import RevealText from './RevealText';
import TechGridBackground from './TechGridBackground';
import WanderingCursor from './WanderingCursor';

const CORE_FEATURES = [
  {
    id: 'cycle',
    number: '01',
    badge: 'Chu kỳ bỉm sữa',
    title: 'Nhắc mua hàng theo chu kỳ',
    shortDesc: 'Tự đếm ngược ngày hết bỉm sữa, kích hoạt ZNS nhắc mẹ trước 2-3 ngày chốt đơn.',
    icon: <SyncOutlined />,
    accent: 'teal',
    cardBorder: 'border-[#139091] bg-teal-50/50 shadow-teal-600/10',
    znsData: {
      tag: 'ZNS Chu Kỳ Tự Động',
      tagColor: 'cyan',
      syncStatus: 'Chu kỳ còn 2 ngày',
      syncColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      headerTitle: 'Thông báo chu kỳ tiêu dùng bỉm sữa',
      time: 'Hôm nay 09:30',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, bé Bon sắp dùng hết lon Sữa Meiji số 1 (800g) đã mua ngày 15/10. Theo chu kỳ tiêu dùng tự động, bé dự kiến còn sữa dùng trong 2 ngày tới ạ.',
      suggestionLabel: 'Sản phẩm bổ sung kịp thời:',
      suggestionValue: 'Sữa A2 số 1 (800g) - Lon mới',
      offerLabel: 'Ưu đãi mẹ bỉm đặt sớm:',
      offerValue: 'Giảm 40.000₫',
      voucherDuration: 'Áp dụng đặt lại trong 48h tới',
      primaryBtnText: 'Đặt lại sữa ngay',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
      resultText: 'Mẹ Thảo đã bấm đặt lại đơn!',
      resultSub: 'Đơn hàng #KV-98432 đã tự động tạo trên KiotViet',
      resultAmount: '+520.000₫',
    },
  },
  {
    id: 'lifecycle',
    number: '02',
    badge: 'Vòng đời Mẹ Bầu & Bé',
    title: 'Chăm sóc theo vòng đời Mẹ Bầu & Bé',
    shortDesc: 'Bao trọn từ thai kỳ (vitamin, đồ đi sinh) đến bé 0-36m (đổi số sữa, ăn dặm).',
    icon: <HeartOutlined />,
    accent: 'purple',
    cardBorder: 'border-purple-500 bg-purple-50/50 shadow-purple-500/10',
    tagColor: 'purple',
    znsData: {
      tag: 'ZNS Vòng Đời Mẹ Bầu & Bé',
      tagColor: 'purple',
      syncStatus: 'Bé tròn 6 tháng tuổi',
      syncColor: 'bg-purple-50 text-purple-700 border-purple-200',
      headerTitle: 'Đồng hành cột mốc: Bé tròn 6 tháng tuổi',
      time: 'Hôm nay 08:30',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, hôm nay bé Bon đã được tròn 6 tháng tuổi rồi đấy ạ! Ở mốc này, con đã sẵn sàng bước vào giai đoạn ăn dặm đầu đời và cần đổi sang sữa số 2 cũng như bổ sung thêm Vitamin D3K2 & Sắt vi chất. Shop gửi tặng mẹ cẩm nang ăn dặm khởi đầu và mã giảm 35.000₫ khi mua Combo ăn dặm cho bé nhé!',
      suggestionLabel: 'Gợi ý theo mốc 6 tháng:',
      suggestionValue: 'Combo Bột ăn dặm + Đổi sữa số 2 + D3K2',
      offerLabel: 'Quà tặng cột mốc độc quyền:',
      offerValue: 'Tặng Bát thìa ăn dặm + Voucher giảm 35.000₫',
      voucherDuration: 'Áp dụng trong 7 ngày tới',
      primaryBtnText: 'Đặt hàng trên website',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
      resultText: 'Mẹ Thảo đã bấm chọn Combo ăn dặm!',
      resultSub: 'Đơn hàng combo ăn dặm #KV-99214 đã tạo trên KiotViet',
      resultAmount: '+480.000₫',
    },
  },
  {
    id: 'monthly',
    number: '03',
    badge: 'Chiến dịch tháng',
    title: 'Chiến dịch gửi tin nhắn theo sự kiện tháng',
    shortDesc: 'Kích hoạt ưu đãi ngày hội thành viên, sinh nhật mẹ & bé, kéo khách cũ quay lại.',
    icon: <GiftOutlined />,
    accent: 'amber',
    cardBorder: 'border-amber-500 bg-amber-50/50 shadow-amber-500/10',
    tagColor: 'gold',
    znsData: {
      tag: 'ZNS Sự Kiện & Hội Viên',
      tagColor: 'gold',
      syncStatus: 'Ngày Hội Thành Viên 15 Hàng Tháng',
      syncColor: 'bg-amber-50 text-amber-700 border-amber-200',
      headerTitle: 'Tri ân Ngày Hội Thành Viên & Sinh Nhật',
      time: '15/11 10:00',
      customer: 'mẹ Nguyễn Thu Thảo',
      body: 'Mẹ Thảo ơi, nhân dịp Ngày Hội Thành Viên tháng này và mừng sinh nhật mẹ bỉm, shop gửi tặng riêng mẹ voucher VIP giảm 15% cho tất cả đơn hàng bỉm sữa và đồ dùng ăn dặm cho bé.',
      suggestionLabel: 'Quyền lợi hội viên Kim Cương:',
      suggestionValue: 'Voucher VIP giảm 15% toàn bộ giỏ hàng',
      offerLabel: 'Mã ưu đãi sinh nhật độc quyền:',
      offerValue: 'Mã: VIPMOM15 (Giảm tối đa 120.000₫)',
      voucherDuration: 'Áp dụng từ 15/11 đến hết 18/11',
      primaryBtnText: 'Đặt hàng trên website',
      secondaryBtnText: 'Nhắn tin cho Mobyflow',
      resultText: 'Mẹ Thảo đã kích hoạt voucher thành công!',
      resultSub: 'Đơn hàng ưu đãi hội viên #KV-99120 đã xác nhận',
      resultAmount: '+1.150.000₫',
    },
  },
];

const HeroSection = ({ onOpenTrial }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const heroContainerRef = useRef(null);

  const currentFeature = CORE_FEATURES[activeFeature];
  const currentZns = currentFeature.znsData;

  return (
    <section
      id="interactive-demo"
      ref={heroContainerRef}
      className="relative isolate pt-2 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50"
    >
      {/* Nền kiểu dabilux: lưới tech + hạt sáng chạy + glow, và con trỏ tự động bấm tuần tự 4 nút */}
      <TechGridBackground variant="light" />
      <WanderingCursor containerRef={heroContainerRef} />
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-300/20 via-sky-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      {/* Aurora chuyển động */}
      <div className="animate-aurora absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-teal-300/30 blur-3xl pointer-events-none -z-10" />
      <div className="animate-aurora-slow absolute top-1/3 -right-24 w-[380px] h-[380px] rounded-full bg-amber-200/30 blur-3xl pointer-events-none -z-10" />
      <div className="animate-float absolute top-24 right-[6%] hidden xl:block text-4xl pointer-events-none select-none" aria-hidden="true">🍼</div>
      <div className="animate-float-delay absolute bottom-24 left-[3%] hidden xl:block text-4xl pointer-events-none select-none" aria-hidden="true">👶</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-[5] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle & 3 Core Features */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full px-4 py-1.5 mb-5 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-[#139091] animate-ping" />
                <span className="text-xs sm:text-sm font-semibold text-[#139091]">
                  Giải Pháp Tự Động Hóa Đột Phá Dành Riêng Cho Shop Mẹ & Bé
                </span>
              </div>
            </ScrollReveal>

            <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-black tracking-tight text-gray-900 leading-[1.18] mb-5">
              <RevealText text="Tự động hóa chăm sóc khách hàng theo" startDelay={0.2} immediate />{' '}
              <span className="text-[#139091]">
                <RevealText text="chu kỳ sữa bỉm" startDelay={0.9} immediate flash />
              </span>{' '}
              <RevealText text="qua Zalo ZNS" startDelay={1.3} immediate />
            </h1>

            <ScrollReveal direction="up" delay={0.25}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                Đồng bộ <strong>KiotViet</strong> trong 30s, tự động đếm chu kỳ và kích hoạt Zalo ZNS tích vàng theo <strong>3 kịch bản trọng tâm</strong>:
              </p>
            </ScrollReveal>

            {/* 3 Chức Năng Trọng Tâm (Interactive 3 Pillars Cards) */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {CORE_FEATURES.map((item, index) => {
                  const isSelected = activeFeature === index;
                  return (
                    <div
                      key={item.id}
                      id={`hero-card-${index}`}
                      onClick={() => setActiveFeature(index)}
                      className={`cursor-pointer rounded-2xl p-3.5 transition-all duration-200 border text-left relative active:scale-[0.98] ${isSelected
                        ? `${item.cardBorder} shadow-md ring-2 ring-offset-1 ${item.accent === 'teal' || item.accent === 'blue'
                          ? 'ring-[#139091] border-[#139091]'
                          : item.accent === 'purple'
                            ? 'ring-purple-500 border-purple-500'
                            : 'ring-amber-500 border-amber-500'
                        }`
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xs'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${isSelected
                            ? item.accent === 'teal' || item.accent === 'blue'
                              ? 'bg-[#139091] text-white'
                              : item.accent === 'purple'
                                ? 'bg-purple-600 text-white'
                                : 'bg-amber-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                            }`}
                        >
                          {item.number}
                        </span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isSelected
                            ? item.accent === 'teal' || item.accent === 'blue'
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
                      <h2 className="text-sm sm:text-[15px] font-bold text-gray-900 mb-1 leading-snug min-h-[2.5rem] flex items-center">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-[13px] text-gray-500 m-0 line-clamp-2 leading-relaxed min-h-[2.5rem] flex items-start">
                        {item.shortDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
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
                    const el = document.getElementById('showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto h-12 px-6 text-base font-semibold border-gray-200 hover:border-teal-400 hover:text-[#139091] rounded-2xl flex items-center justify-center bg-white shadow-xs"
                >
                  Xem cách thức hoạt động
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
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
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 tracking-tight">
                    +35%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Tăng khách mua lại</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Simulated Zalo ZNS & KiotViet Auto Cycle Mockup */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.3}>
              <div className="relative">
                {/* Tab Switcher at the top of Mockup */}
                <div className="flex items-center bg-gray-100/90 p-1 rounded-2xl mb-3 border border-gray-200/70">
                  {CORE_FEATURES.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveFeature(index)}
                      className={`flex-1 text-xs py-1.5 px-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border-0 ${activeFeature === index
                        ? 'bg-white text-[#139091] shadow-xs'
                        : 'bg-transparent text-gray-500 hover:text-gray-800'
                        }`}
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span className="truncate">{item.badge}</span>
                    </button>
                  ))}
                </div>

                {/* Main Mockup Box */}
                <div className="bg-white rounded-3xl shadow-xl shadow-teal-700/10 border border-gray-100 overflow-hidden">
                  {/* Mockup Header: Zalo Official Account */}
                  <div className="bg-gradient-to-r from-[#139091] to-teal-700 p-3.5 sm:p-4 text-white flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-white p-1 border-2 border-white/50 shadow-xs flex items-center justify-center overflow-hidden">
                          <img
                            src="/images/logo mobyflow2-01.png"
                            alt="MobyFlow"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-slate-900">
                          ✓
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-sm tracking-tight">MobyFlow • Hệ Thống Mẹ & Bé</span>
                          <SafetyCertificateFilled className="text-amber-300 text-xs" />
                        </div>
                        <span className="text-[11px] text-teal-100 flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                          Zalo Doanh Nghiệp (OA Tích Vàng)
                        </span>
                      </div>
                    </div>
                    <Tag color={currentZns.tagColor} className="m-0 font-bold text-xs rounded-full px-2.5 py-0.5">
                      {currentZns.tag}
                    </Tag>
                  </div>

                  {/* Zalo ZNS Message Content */}
                  <div className="p-4 sm:p-5 bg-slate-50/60 space-y-3.5 text-xs sm:text-sm">
                    {/* Simulated ZNS Message Card */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 overflow-hidden">
                      {/* Brand Logo Header: MobyFlow */}
                      <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                        <img
                          src="/images/logo mobyflow2-01.png"
                          alt="MobyFlow Automation"
                          className="h-7 sm:h-8 w-auto object-contain"
                        />
                        <span className="text-[11px] text-gray-400 font-medium">{currentZns.time}</span>
                      </div>

                      <div className="flex items-center justify-between pb-2 mb-2">
                        <span className="font-bold text-gray-900 text-sm sm:text-[15px] leading-snug flex items-center gap-1.5">
                          {currentZns.headerTitle}
                        </span>
                      </div>

                      <div className="text-gray-700 leading-relaxed space-y-2 mb-3.5">
                        {currentZns.customer && (
                          <p className="m-0">
                            Xin chào <strong>{currentZns.customer}</strong>,
                          </p>
                        )}
                        <p className="m-0 text-gray-600 leading-relaxed">
                          {currentZns.body}
                        </p>
                      </div>

                      {/* Product & Promotion Offer Box */}
                      <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100/80 mb-3.5 space-y-1.5 text-xs">
                        <div className="flex justify-between items-center text-gray-800">
                          <span className="font-semibold text-gray-600">{currentZns.suggestionLabel}</span>
                          <span className="font-bold text-blue-700">{currentZns.suggestionValue}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-800">
                          <span className="font-semibold text-gray-600">{currentZns.offerLabel}</span>
                          <span className="text-rose-600 font-bold">{currentZns.offerValue}</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-500 text-[11px]">
                          <span>Thời hạn ưu đãi:</span>
                          <span className="font-medium text-gray-700">{currentZns.voucherDuration}</span>
                        </div>
                      </div>

                      {/* ZNS Action Button - Authentic Zalo Blue Style */}
                      <div className="space-y-2">
                        <Button
                          id="hero-zns-action-btn"
                          block
                          type="primary"
                          className="bg-[#0068ff] hover:bg-blue-600 active:scale-95 transition-all duration-150 font-bold rounded-xl h-10 shadow-xs border-0 text-white flex items-center justify-center text-sm cursor-pointer"
                        >
                          {currentZns.primaryBtnText}
                        </Button>
                        <Button
                          id="hero-zns-secondary-btn"
                          block
                          className="font-semibold text-xs sm:text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all rounded-xl h-9 border-0 cursor-pointer"
                        >
                          {currentZns.secondaryBtnText}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Mockup Footer */}
                  <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Được bảo trợ bởi Zalo ZNS & MobyFlow Automation</span>
                    <span className="text-[#139091] font-semibold cursor-pointer">Xem demo chi tiết</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
