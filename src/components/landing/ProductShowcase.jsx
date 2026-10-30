import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import {
  PlayCircleFilled,
  CheckCircleOutlined,
  ThunderboltOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const ProductShowcase = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState('cycle');

  const tabs = [
    { key: 'cycle', label: 'Cấu hình Chu kỳ Sữa Bỉm', badge: 'Thuật toán tự động' },
    { key: 'zns', label: 'Kịch bản Zalo ZNS Thông Minh', badge: 'Tỷ lệ mở 98.5%' },
    { key: 'kiotviet', label: 'Đồng bộ KiotViet & Báo cáo', badge: 'Thời gian thực' },
  ];

  return (
    <section id="showcase" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#139091]/25 via-teal-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-3.5 py-1 rounded-full inline-block">
              Giao Diện Thực Tế MobyFlow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Trực quan hóa quy trình chăm sóc chu kỳ khách hàng
            </h2>
            <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Thiết kế tinh gọn cho chủ shop Mẹ &amp; Bé, làm quen và sử dụng thành thạo sau 15 phút.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Selection Switcher */}
        {/* <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center space-x-2 border cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#139091] text-white border-teal-500 shadow-lg shadow-teal-500/30'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                    activeTab === tab.key ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal> */}

        {/* Visual Mockup Container */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900/80 shadow-2xl shadow-blue-900/40 group">
            {/* Window Top Bar */}
            <div className="bg-slate-900/90 border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-gray-400 font-mono ml-2 hidden sm:inline">
                  https://mobyflow.vn/automation/consumption-cycle
                </span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  KiotViet Connected (Live Webhook)
                </span>
              </div>
            </div>

            {/* Main Showcase Image Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src="/images/demo-showcase.jpg"
                alt="MobyFlow Mom and Baby Cycle Automation System Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Overlay Play / Demo CTA */}
              <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6">
                <button
                  onClick={onOpenTrial}
                  className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#139091] to-teal-500 flex items-center justify-center text-white text-3xl sm:text-4xl shadow-2xl shadow-teal-500/50 hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-white/20 cursor-pointer group/btn"
                  aria-label="Xem video hướng dẫn trực tiếp"
                >
                  <PlayCircleFilled className="group-hover/btn:scale-110 transition-transform" />
                </button>
                <div className="mt-4 font-bold text-base sm:text-lg text-white">
                  Xem Hướng Dẫn Vận Hành MobyFlow Cho Shop Mẹ & Bé (4 phút)
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1">
                  Khám phá cách đồng bộ KiotViet và kích hoạt tin nhắn Zalo ZNS nhắc chu kỳ sữa bỉm
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Value Pillars under Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3.5">
            <SyncOutlined className="text-xl text-emerald-400 mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-bold text-base sm:text-lg text-white mb-1">
                Đồng bộ KiotViet tự động 100%
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Tự động chuyển hóa đơn tại quầy thành lịch chăm sóc chu kỳ, không cần nhập tay.
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3.5">
            <ThunderboltOutlined className="text-xl text-teal-400 mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-bold text-base sm:text-lg text-white mb-1">
                Đếm ngược chu kỳ chuẩn xác
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Tự tính ngày bé hết sữa bỉm, gửi tin nhắc mẹ trước 2-3 ngày đúng điểm chạm.
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-3.5">
            <CheckCircleOutlined className="text-xl text-purple-400 mt-1 shrink-0" />
            <div className="flex-1">
              <div className="font-bold text-base sm:text-lg text-white mb-1">
                Zalo ZNS Tích Vàng Chính Hãng
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Tỷ lệ mở 98.5%, tin nhắn thương hiệu uy tín chính chủ, không bao giờ lo bị khóa nick.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
