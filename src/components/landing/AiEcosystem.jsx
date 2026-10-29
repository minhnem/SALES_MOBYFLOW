import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  CheckCircleOutlined,
  ApiOutlined,
} from '@ant-design/icons';
import {
  Store,
  Timer,
  MessageSquareCheck,
  Workflow,
  Target,
  BarChart3,
} from 'lucide-react';

const pillars = [
  {
    name: 'Kết Nối KiotViet 30 Giây',
    category: 'Tích Hợp Dữ Liệu',
    desc: 'Tự động đồng bộ hóa đơn, khách hàng và danh mục sản phẩm từ KiotViet sang MobyFlow theo thời gian thực.',
    highlight: 'Đồng bộ tự động thời gian thực',
    metric: '30s kết nối',
    iconBg: 'bg-[#139091]/10 text-[#139091]',
    icon: <Store className="w-5 h-5" strokeWidth={2.2} />,
  },
  {
    name: 'Cấu Hình Chu Kỳ Tiêu Dùng',
    category: 'Thuật Toán Độc Quyền',
    desc: 'Cài đặt số ngày dùng cho từng loại bỉm, sữa, vitamin. Hệ thống tự động đếm ngược ngày hết hàng cho từng mẹ.',
    highlight: 'Tự động tính ngày hết hàng',
    metric: 'Chính xác 100%',
    iconBg: 'bg-purple-600/10 text-purple-600',
    icon: <Timer className="w-5 h-5" strokeWidth={2.2} />,
  },
  {
    name: 'Gửi Zalo ZNS Chính Chủ',
    category: 'Kênh Chăm Sóc Khách',
    desc: 'Gửi tin nhắn thương hiệu Zalo OA tích vàng kèm tên bé và voucher. Tỷ lệ đọc 98.5%, không lo bị khóa nick.',
    highlight: 'Chi phí chỉ vài trăm đồng/tin',
    metric: 'Tích Vàng OA',
    iconBg: 'bg-sky-600/10 text-sky-600',
    icon: <MessageSquareCheck className="w-5 h-5" strokeWidth={2.2} />,
  },
  {
    name: 'Động Cơ Tự Động Hóa 24/7',
    category: 'Vận Hành Rảnh Tay',
    desc: 'Kịch bản tự động chạy quanh năm: nhắc mua lại trước 2-3 ngày, mừng sinh nhật bé, nhắc đổi số sữa theo tuổi.',
    highlight: 'Không bỏ sót bất kỳ khách nào',
    metric: 'Chạy ngầm 24/7',
    iconBg: 'bg-indigo-600/10 text-indigo-600',
    icon: <Workflow className="w-5 h-5" strokeWidth={2.2} />,
  },
  {
    name: '3 Mô Hình Chiến Dịch',
    category: 'Marketing Trúng Đích',
    desc: 'Bao trọn 3 kịch bản: Nhắc mua lại bỉm sữa, Chăm sóc vòng đời Mẹ Bầu & Bé (thai kỳ - 36m), và Ưu đãi tháng.',
    highlight: 'Đúng mẹ - Đúng bé - Đúng lúc',
    metric: '3 Loại Camp',
    iconBg: 'bg-pink-600/10 text-pink-600',
    icon: <Target className="w-5 h-5" strokeWidth={2.2} />,
  },
  {
    name: 'Báo Cáo & Thống Kê Gửi Tin',
    category: 'Thống Kê Chiến Dịch',
    desc: 'Thống kê số lượng tin nhắn đã gửi, tỷ lệ gửi thành công và chi phí ZNS tiêu hao theo từng chiến dịch.',
    highlight: 'Thống kê tỷ lệ gửi tin nhắn rõ ràng',
    metric: 'Báo cáo trực quan',
    iconBg: 'bg-amber-600/10 text-amber-600',
    icon: <BarChart3 className="w-5 h-5" strokeWidth={2.2} />,
  },
];

const AiEcosystem = () => {
  return (
    <section id="ai-models" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Kiến Trúc Tính Năng Toàn Diện
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              6 Trụ cột đột phá giúp Shop Mẹ & Bé tự động hóa tăng trưởng
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Được thiết kế chuyên biệt dựa trên báo cáo thực tế quy trình vận hành của hàng trăm chuỗi cửa hàng mẹ và bé trên khắp Việt Nam.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <ScrollReveal key={item.name} direction="up" delay={idx * 0.08}>
              <div className="group h-full bg-slate-50/70 hover:bg-white p-6 rounded-2xl border border-gray-100 hover:border-teal-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} shadow-xs group-hover:scale-110 transition-transform duration-200`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg m-0 group-hover:text-[#139091] transition-colors min-h-[1.75rem] flex items-center">
                          {item.name}
                        </h3>
                        <span className="text-xs text-gray-500 font-medium">{item.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4 min-h-[4.25rem] flex items-start">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs sm:text-[13px]">
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircleOutlined /> {item.highlight}
                  </span>
                  <span className="text-gray-500 font-medium bg-white px-2 py-0.5 rounded border border-gray-100">
                    {item.metric}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom banner for KiotViet & Excel sync */}
        {/* <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-sky-50/80 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg">
                <ApiOutlined />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm sm:text-base">
                  Bạn đang có sẵn danh sách khách hàng trong file Excel hoặc KiotViet?
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  MobyFlow hỗ trợ nhập trực tiếp hàng chục ngàn khách hàng trong 1 click, tự động phân nhóm và kích hoạt chăm sóc ngay.
                </div>
              </div>
            </div>
            <span className="text-xs font-bold bg-white text-blue-700 px-3.5 py-1.5 rounded-lg shadow-2xs border border-blue-100 whitespace-nowrap">
              Nhập Excel & KiotViet Sẵn Sàng
            </span>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default AiEcosystem;
