import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  Store,
  Timer,
  MessageSquareCheck,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Khách mua bỉm sữa',
    desc: 'Hóa đơn phát sinh trên KiotViet hoặc Excel. MobyFlow tự động đồng bộ khách và sản phẩm.',
    icon: <Store className="w-6 h-6 text-[#139091]" strokeWidth={2.2} />,
    iconBg: 'bg-teal-50',
  },
  {
    step: '02',
    title: 'Tự động đếm chu kỳ',
    desc: 'Hệ thống tự đếm ngược theo định mức tiêu dùng của bé (VD: lon sữa 800g = 12 ngày).',
    icon: <Timer className="w-6 h-6 text-purple-600" strokeWidth={2.2} />,
    iconBg: 'bg-purple-50',
  },
  {
    step: '03',
    title: 'Gửi ZNS trước 2-3 ngày',
    desc: 'Tự động bắn tin ZNS tích vàng nhắc mẹ mua lại kèm mã voucher ưu đãi riêng.',
    icon: <MessageSquareCheck className="w-6 h-6 text-sky-600" strokeWidth={2.2} />,
    iconBg: 'bg-sky-50',
  },
  {
    step: '04',
    title: 'Mẹ 1-chạm đặt lại đơn',
    desc: 'Mẹ bấm đặt hàng ngay trên Zalo. Đơn tự động tạo trên KiotViet, không tốn 1 đồng tiền Ads.',
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" strokeWidth={2.2} />,
    iconBg: 'bg-emerald-50',
  },
];

const WorkflowSteps = () => {
  return (
    <section id="workflow" className="py-20 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
              Quy Trình 4 Bước Tự Động
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2 mb-3">
              Tự động hóa từ lúc mua đến khi khách quay lại
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Chăm sóc hàng ngàn mẹ bỉm cùng lúc, đúng thời điểm cạn hàng mà không cần ghi sổ thủ công.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <ScrollReveal key={item.step} direction="up" delay={idx * 0.1}>
              <div className="group relative bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 hover:border-teal-300 shadow-2xs hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                      BƯỚC {item.step}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#139091] transition-colors mb-2.5 leading-snug min-h-[3rem] lg:min-h-[3.5rem] flex items-start">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed m-0 min-h-[6.5rem] sm:min-h-[7rem] flex items-start">
                    {item.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-200 shadow-2xs items-center justify-center text-gray-400 text-xs">
                    <ArrowRightOutlined />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
