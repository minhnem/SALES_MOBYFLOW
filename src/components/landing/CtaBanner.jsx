import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from 'antd';
import { ThunderboltOutlined, CheckCircleFilled } from '@ant-design/icons';

const CtaBanner = ({ onOpenTrial }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-[#139091] to-teal-800 p-8 sm:p-14 text-center text-white shadow-2xl shadow-teal-700/25">
            {/* Background geometric shapes */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/20 text-white px-3.5 py-1 rounded-full">
                🚀 Bứt Phá Doanh Số Tái Mua
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                Sẵn sàng nhân đôi tỷ lệ mẹ bỉm quay lại mua hàng?
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
                  className="w-full sm:w-auto h-14 px-9 text-base sm:text-lg font-bold bg-white text-[#139091] hover:bg-teal-50 border-0 rounded-2xl shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Bắt đầu dùng thử miễn phí 14 ngày
                </Button>
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
