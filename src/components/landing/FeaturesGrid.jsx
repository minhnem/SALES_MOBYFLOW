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
    desc: 'Định mức số ngày dùng cho từng loại sữa bỉm, tự động kích hoạt đếm ngược.',
    points: ['Tính chính xác ngày sắp hết hàng', 'Cảnh báo mốc bé cần đổi số sữa'],
    badge: 'Cốt lõi',
    borderHover: 'hover:border-purple-400',
    iconBg: 'bg-purple-50',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#139091]" strokeWidth={2.2} />,
    title: 'Tự Động Hóa Chăm Sóc',
    desc: 'Bắn tin nhắc mẹ trước 2-3 ngày khi sắp hết hàng, hoàn toàn rảnh tay quanh năm.',
    points: ['Tự động gửi trước 2-3 ngày', 'Không bao giờ quên hoặc sót khách'],
    badge: 'Rảnh tay 100%',
    borderHover: 'hover:border-teal-400',
    iconBg: 'bg-teal-50',
  },
  {
    icon: <MessageSquareCheck className="w-6 h-6 text-sky-600" strokeWidth={2.2} />,
    title: 'Kho Mẫu Zalo ZNS',
    desc: 'Mẫu tin ZNS tích vàng thương hiệu, cá nhân hóa tên mẹ, tên bé và mã giảm giá.',
    points: ['Tỷ lệ mở đọc đạt 98.5%', 'Nút đặt lại đơn nhanh 1 chạm'],
    badge: 'Mở 98.5%',
    borderHover: 'hover:border-sky-400',
    iconBg: 'bg-sky-50',
  },
  {
    icon: <Send className="w-6 h-6 text-indigo-600" strokeWidth={2.2} />,
    title: '3 Kịch Bản Chiến Dịch',
    desc: 'Quy chuẩn 3 luồng: Chu kỳ bỉm sữa, Vòng đời mẹ bầu & bé (0-36m), và Ưu đãi tháng.',
    points: ['Đồng hành từ tuần thai đến 3 tuổi', 'Kéo khách cũ quay lại tự nhiên'],
    badge: '3 Kịch bản',
    borderHover: 'hover:border-indigo-400',
    iconBg: 'bg-indigo-50',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" strokeWidth={2.2} />,
    title: 'Quản Lý Khách Hàng',
    desc: 'Lọc thông minh theo ngày mua, chu kỳ sản phẩm và hỗ trợ đồng bộ Excel 1-click.',
    points: ['Lọc theo chu kỳ & độ tuổi bé', 'Nhập/xuất Excel trong 1 phút'],
    badge: 'Chuẩn xác',
    borderHover: 'hover:border-emerald-400',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-amber-600" strokeWidth={2.2} />,
    title: 'Báo Cáo Doanh Thu & ROI',
    desc: 'Đối soát đơn hàng phát sinh sau khi gửi tin, đo lường chính xác hiệu quả từng chiến dịch.',
    points: ['Thống kê số tin & tỷ lệ chuyển đổi', 'Đo lường doanh thu và ROI minh bạch'],
    badge: 'Minh bạch',
    borderHover: 'hover:border-amber-400',
    iconBg: 'bg-amber-50',
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Tính Năng Nền Tảng
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2 mb-3">
              Đầy đủ công cụ chuyên sâu cho Shop Mẹ &amp; Bé
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Tối ưu cho quy trình thực tế: từ đếm chu kỳ bỉm sữa đến tự động gửi ZNS và đối soát đơn KiotViet.
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
