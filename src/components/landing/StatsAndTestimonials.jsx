import React from 'react';
import ScrollReveal from './ScrollReveal';
import CountUp from './CountUp';
import RevealText from './RevealText';
import { Avatar } from 'antd';
import {
  CheckCircleFilled,
  StarFilled,
} from '@ant-design/icons';

const stats = [
  { value: '+42%', label: 'Tăng trưởng doanh thu tái mua', sub: 'Nhờ nhắc đúng chu kỳ sắp hết sữa bỉm' },
  { value: '98.5%', label: 'Tỷ lệ mở tin nhắn Zalo ZNS', sub: 'Thương hiệu tích vàng chính chủ' },
  { value: '-80%', label: 'Thời gian chăm sóc thủ công', sub: 'Hệ thống tự động hóa hoàn toàn' },
  { value: '100%', label: 'Đồng bộ tự động KiotViet', sub: 'Không cần nhập liệu thủ công' },
];

const testimonials = [
  {
    name: 'Chị Lan Hương',
    role: 'Chủ chuỗi Mẹ & Bé BabyMom (Hà Nội)',
    avatar: 'LH',
    avatarBg: 'bg-pink-600',
    stars: 5,
    quote:
      'Từ khi kết nối KiotViet với MobyFlow, hệ thống tự động đếm ngày gửi ZNS trước 2 ngày khi bé sắp hết sữa. Doanh thu khách quen quay lại tăng 45%, nhân viên đỡ cực hẳn!',
    verified: 'Đã dùng 10 tháng • Quản lý 8.500 khách',
  },
  {
    name: 'Anh Tuấn Dũng',
    role: 'Founder Hệ thống BiBo Store (Đà Nẵng)',
    avatar: 'TD',
    avatarBg: 'bg-[#139091]',
    stars: 5,
    quote:
      'Đắt giá nhất là thuật toán chu kỳ theo độ tuổi bé. Hệ thống tự động gợi ý đổi size bỉm và đổi số sữa rất tinh tế, khách hàng ai cũng khen shop chăm sóc chu đáo.',
    verified: 'Đã gửi 25.000+ tin ZNS thành công',
  },
  {
    name: 'Chị Mai Trang',
    role: 'Chủ Shop Sữa Bỉm MinCare (TP.HCM)',
    avatar: 'MT',
    avatarBg: 'bg-purple-600',
    stars: 5,
    quote:
      'Tin nhắn ZNS từ Zalo OA có tích vàng kèm nút đặt hàng 1 chạm cực kỳ uy tín. Tỷ lệ mẹ bấm mua lại đạt trên 35%, chi phí mỗi tin rẻ bèo mà không lo khóa nick.',
    verified: 'Tăng 3.5 lần tỷ lệ khách quay lại',
  },
];

const categories = [
  '🍼 Sữa bột & Sữa công thức',
  '👶 Bỉm dán & Bỉm quần các size',
  '🥣 Bột ăn dặm & Bánh ăn dặm',
  '💊 Vitamin, D3K2 & Men vi sinh',
  '🧴 Sữa tắm, Dầu massage & Kem chống hăm',
];

const StatsAndTestimonials = () => {
  return (
    <section id="testimonials" className="moby-light-grid-bg relative py-12 sm:py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Statistics 4 Numbers */}
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-teal-100/80 shadow-sm mb-10 sm:mb-12">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-black bg-gradient-to-r from-[#139091] to-teal-700 bg-clip-text text-transparent font-outfit leading-none">
                  <CountUp value={s.value} />
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 mt-2.5 sm:whitespace-nowrap">
                  {s.label}
                </div>
                <div className="text-xs sm:text-[13px] text-gray-500 mt-1 sm:whitespace-nowrap">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full inline-block mb-3 shadow-2xs">
              Chia Sẻ Thực Tế
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.38] sm:leading-[1.45] mb-3 sm:mb-4 max-w-3xl mx-auto">
              <RevealText text="Hàng trăm chủ Shop Mẹ & Bé" />{' '}
              <br className="hidden md:inline" />
              <RevealText text="tăng trưởng doanh thu cùng MobyFlow" startDelay={0.35} flash />
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto m-0">
              Chia sẻ thực tế từ các cửa hàng sữa bỉm sau khi tự động hóa chu kỳ chăm sóc.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-14">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={t.name} direction="up" delay={idx * 0.1} className="h-full">
              <div
                className="note-card h-full"
                style={{
                  '--rotate': `${[-1.6, 1.2, -0.9][idx % 3]}deg`,
                  '--offset': `${[0, 6, -4][idx % 3]}px`,
                  '--duration': `${[3.6, 4.2, 3.9][idx % 3]}s`,
                  '--delay': `${idx * 0.4}s`,
                }}
              >
                <span className="note-pin" aria-hidden="true" />
                <div className="h-full bg-white/90 backdrop-blur-xs p-7 rounded-3xl border border-teal-100/70 shadow-md shadow-teal-900/5 hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-400 mb-4 text-sm">
                      {[...Array(t.stars)].map((_, i) => (
                        <StarFilled key={i} />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6 min-h-[6.5rem] sm:min-h-[7rem] flex items-start">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
                    <div
                      className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full shrink-0 aspect-square ${t.avatarBg} text-white font-black flex items-center justify-center text-sm shadow-xs ring-2 ring-white`}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg m-0 leading-tight">{t.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 m-0 mt-0.5 truncate">{t.role}</p>
                      <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                        <CheckCircleFilled className="text-xs shrink-0" /> <span className="truncate">{t.verified}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Industry Fit Pills */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center pt-8 border-t border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5 max-w-xl mx-auto leading-snug px-2">
              Áp dụng hiệu quả cho mọi nhóm <span className="whitespace-nowrap">sản phẩm tiêu hao</span> trong ngành Mẹ &amp; Bé
            </h3>

            {/* Desktop View: Hiển thị dàn hàng ngang mượt mà */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="bg-gray-50 hover:bg-teal-50 text-gray-700 hover:text-[#139091] hover:border-teal-300 font-medium text-xs sm:text-sm px-4 py-2 rounded-xl border border-gray-200/80 transition-colors shadow-2xs"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Mobile View: Chia đúng 3 dòng cân đối tuyệt đối */}
            <div className="flex sm:hidden flex-col items-center gap-2 w-full px-1">
              {/* Dòng 1: Sữa & Bỉm */}
              <div className="flex items-center justify-center gap-1.5 w-full">
                <span className="bg-gray-50 text-gray-700 font-medium text-[11px] px-2.5 py-1.5 rounded-xl border border-gray-200/80 whitespace-nowrap shadow-2xs">
                  {categories[0]}
                </span>
                <span className="bg-gray-50 text-gray-700 font-medium text-[11px] px-2.5 py-1.5 rounded-xl border border-gray-200/80 whitespace-nowrap shadow-2xs">
                  {categories[1]}
                </span>
              </div>

              {/* Dòng 2: Ăn dặm & Vitamin */}
              <div className="flex items-center justify-center gap-1.5 w-full">
                <span className="bg-gray-50 text-gray-700 font-medium text-[11px] px-2.5 py-1.5 rounded-xl border border-gray-200/80 whitespace-nowrap shadow-2xs">
                  {categories[2]}
                </span>
                <span className="bg-gray-50 text-gray-700 font-medium text-[11px] px-2.5 py-1.5 rounded-xl border border-gray-200/80 whitespace-nowrap shadow-2xs">
                  {categories[3]}
                </span>
              </div>

              {/* Dòng 3: Sữa tắm, Dầu massage & Kem chống hăm */}
              <div className="flex items-center justify-center w-full">
                <span className="bg-gray-50 text-gray-700 font-medium text-[11px] px-3.5 py-1.5 rounded-xl border border-gray-200/80 whitespace-nowrap shadow-2xs">
                  {categories[4]}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsAndTestimonials;
