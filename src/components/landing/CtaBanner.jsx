import React from 'react';
import ScrollReveal from './ScrollReveal';
import RevealText from './RevealText';
import TechGridBackground from './TechGridBackground';
import OrbitRings from './OrbitRings';
import { Button } from 'antd';
import { ThunderboltOutlined, CheckCircleFilled, PhoneFilled } from '@ant-design/icons';
import { CONTACT } from '@/utils/contact';

const CtaBanner = ({ onOpenTrial }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-[#139091] to-teal-800 p-8 sm:p-14 text-center text-white shadow-2xl shadow-teal-700/25">
            {/* Background geometric shapes */}
            {/* Nền kiểu dabilux: tech grid tối + vòng quỹ đạo xoay */}
            <TechGridBackground variant="dark" />
            <OrbitRings />
            <div className="animate-aurora absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="animate-aurora-slow absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/20 text-white px-3.5 py-1 rounded-full">
                🚀 Bứt Phá Doanh Số Tái Mua
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                <RevealText text="Sẵn sàng nhân đôi tỷ lệ mẹ bỉm" />{' '}
                <RevealText text="quay lại mua hàng?" startDelay={0.5} flash />
              </h2>

              <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                Đừng để khách hàng thân thiết tiện tay mua sữa bỉm ở nơi khác,{' '}
                <br className="hidden md:inline" />
                kết nối KiotViet và tự động chăm sóc qua Zalo ZNS ngay hôm nay!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  id="btn-cta-banner-trial"
                  size="large"
                  icon={<ThunderboltOutlined />}
                  onClick={onOpenTrial}
                  className="w-full sm:w-auto h-14 px-9 text-base sm:text-lg font-bold bg-white text-[#139091] hover:bg-teal-50 border-0 rounded-2xl shadow-xl btn-shine animate-glow-pulse hover:scale-105 transition-all duration-200"
                >
                  Bắt đầu dùng thử miễn phí 14 ngày
                </Button>
                <a
                  id="btn-cta-zalo"
                  href={CONTACT.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0068ff] hover:bg-[#0057d6] text-white text-base font-bold shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Chat Zalo tư vấn
                </a>
                <a
                  id="btn-cta-call"
                  href={CONTACT.hotlineHref}
                  className="w-full sm:w-auto h-14 px-8 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/60 hover:bg-white/10 text-white text-base font-bold transition-all duration-200"
                >
                  <PhoneFilled /> {CONTACT.hotlineDisplay}
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-teal-100">
                <span className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-emerald-400" /> Miễn phí 100% trong 14 ngày
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-emerald-400" /> Kết nối KiotViet trong 30 giây
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-emerald-400" /> Đội ngũ kỹ thuật hỗ trợ 1 - 1
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaBanner;
