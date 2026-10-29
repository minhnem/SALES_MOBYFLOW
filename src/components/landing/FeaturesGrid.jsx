import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  CheckOutlined,
} from '@ant-design/icons';
import {
  CalendarClock,
  Zap,
  MessageSquareCheck,
  Send,
  Users,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    icon: <CalendarClock className="w-6 h-6 text-purple-600" strokeWidth={2.2} />,
    title: 'Cấu Hình Chu Kỳ Sản Phẩm',
    desc: 'Cài đặt số ngày sử dụng cho bỉm, sữa bột, vitamin. Hệ thống tự động theo dõi chu kỳ từng khách.',
    points: ['Tính chính xác ngày sắp hết hàng', 'Cảnh báo mốc bé cần đổi số sữa'],
    badge: 'Cốt Lõi Hệ Thống',
    borderHover: 'hover:border-purple-400',
    iconBg: 'bg-purple-50',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#139091]" strokeWidth={2.2} />,
    title: 'Tự Động Hóa Chăm Sóc',
    desc: 'Tự động kích hoạt tin nhắn trước 2-3 ngày khi khách sắp hết hàng, hoàn toàn rảnh tay quanh năm.',
    points: ['Tự động gửi trước 2-3 ngày', 'Không bao giờ quên hoặc sót khách'],
    badge: 'Rảnh tay 100%',
    borderHover: 'hover:border-teal-400',
    iconBg: 'bg-teal-50',
  },
  {
    icon: <MessageSquareCheck className="w-6 h-6 text-sky-600" strokeWidth={2.2} />,
    title: 'Kho Mẫu Zalo ZNS',
    desc: 'Mẫu tin ZNS chính chủ tích vàng, tự động chèn tên mẹ, tên bé và voucher giảm giá riêng biệt.',
    points: ['Cá nhân hóa nội dung tin 100%', 'Nút đặt hàng nhanh 1 chạm'],
    badge: 'Tỷ lệ mở 98.5%',
    borderHover: 'hover:border-sky-400',
    iconBg: 'bg-sky-50',
  },
  {
    icon: <Send className="w-6 h-6 text-indigo-600" strokeWidth={2.2} />,
    title: '3 Mô Hình Chiến Dịch',
    desc: 'Quy chuẩn 3 kịch bản: Nhắc mua lại bỉm sữa, Chăm sóc vòng đời Mẹ Bầu (thai kỳ, giỏ đồ đi sinh) & Bé (0-36m), và Ưu đãi định kỳ tháng.',
    points: ['Đồng hành từ tuần thai đến 3 tuổi', 'Kéo khách cũ quay lại tự nhiên'],
    badge: '3 Loại Chiến Dịch',
    borderHover: 'hover:border-indigo-400',
    iconBg: 'bg-indigo-50',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" strokeWidth={2.2} />,
    title: 'Quản Lý Khách Hàng',
    desc: 'Bộ lọc thông minh theo ngày mua, sản phẩm và chu kỳ. Hỗ trợ nhập và xuất file Excel tức thì.',
    points: ['Lọc nhanh theo chu kỳ & độ tuổi bé', 'Nhập/xuất file Excel trong 1 click'],
    badge: 'Dữ liệu chuẩn xác',
    borderHover: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-600" strokeWidth={2.2} />,
    title: 'Báo Cáo & Thống Kê',
    desc: 'Theo dõi chi tiết số lượng tin nhắn đã gửi, tỷ lệ gửi thành công và ngân sách ZNS theo từng chiến dịch.',
    points: ['Thống kê số lượng tin theo tháng', 'Kiểm soát chi phí gửi tin ZNS'],
    badge: 'Minh bạch 100%',
    borderHover: 'hover:border-amber-400',
    iconBg: 'bg-amber-50',
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Tính Năng Đã Hoàn Thiện 100%
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Đầy đủ công cụ chuyên sâu cho ngành Mẹ &amp; Bé
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Mọi tính năng đều được tối ưu hóa theo quy trình thực tế,{' '}
              <br className="hidden md:inline" />
              từ quản lý chu kỳ bỉm sữa đến tự động gửi Zalo ZNS và thống kê.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={feature.title} direction="up" delay={idx * 0.08}>
              <div
                className={`group h-full bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-2xs hover:shadow-xl ${feature.borderHover} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.iconBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-200 shadow-2xs`}
                    >
                      {feature.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] font-bold text-gray-900 group-hover:text-[#139091] transition-colors m-0 leading-snug min-h-[2.75rem] flex items-center">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  {/* <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 min-h-[40px]">
                    {feature.desc}
                  </p> */}
                </div>

                <div className="pt-3.5 border-t border-gray-100 space-y-2.5">
                  {feature.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center text-sm sm:text-[15px] text-gray-700 font-medium min-h-[1.75rem]">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs mr-2.5 shrink-0">
                        <CheckOutlined />
                      </span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
