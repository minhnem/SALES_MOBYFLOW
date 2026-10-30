import React from 'react';
import ScrollReveal from './ScrollReveal';
import {
  WarningFilled,
  CloseCircleFilled,
  CheckCircleFilled,
  SyncOutlined,
  HeartOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import {
  Timer,
  Baby,
  Gift,
  Coins,
  Database,
  AlertTriangle,
} from 'lucide-react';

const painPoints = [
  {
    icon: <Timer className="w-5 h-5 text-blue-600" strokeWidth={2.2} />,
    pillarTag: 'Chu kỳ',
    pillarTagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    title: 'Quên chu kỳ hết bỉm sữa',
    desc: 'Hết sau 10 - 15 ngày. Không nhắc trước 2-3 ngày, mẹ tiện tay mua tạp hóa gần nhà.',
    highlight: 'Mất 65% khách quen vì quên nhắc',
    bg: 'bg-blue-50/40',
    border: 'border-blue-200/80',
    iconBg: 'bg-blue-100/80',
  },
  {
    icon: <Baby className="w-5 h-5 text-purple-600" strokeWidth={2.2} />,
    pillarTag: 'Vòng đời',
    pillarTagColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'Bỏ lỡ mốc Mẹ Bầu & Bé',
    desc: 'Không nắm tuần thai mẹ để tư vấn đồ đi sinh; bỏ quên mốc bé đổi số sữa và ăn dặm.',
    highlight: 'Bỏ lỡ vòng đời vàng 0 - 3 tuổi',
    bg: 'bg-purple-50/40',
    border: 'border-purple-200/80',
    iconBg: 'bg-purple-100/80',
  },
  {
    icon: <Gift className="w-5 h-5 text-pink-600" strokeWidth={2.2} />,
    pillarTag: 'Sự kiện',
    pillarTagColor: 'bg-pink-100 text-pink-700 border-pink-200',
    title: 'Thiếu chăm sóc định kỳ tháng',
    desc: 'Quên sinh nhật bé, không có ngày hội thành viên. Sau 60 ngày khách dần lãng quên shop.',
    highlight: '40% khách cũ rơi vào trạng thái ngủ quên',
    bg: 'bg-pink-50/40',
    border: 'border-pink-200/80',
    iconBg: 'bg-pink-100/80',
  },
  {
    icon: <Coins className="w-5 h-5 text-rose-600" strokeWidth={2.2} />,
    pillarTag: 'Chi phí',
    pillarTagColor: 'bg-rose-100 text-rose-700 border-rose-200',
    title: 'Lãi mỏng & Đốt tiền tìm khách mới',
    desc: 'Biên lãi bỉm sữa chỉ 5 - 10%. Chạy Ads đắt đỏ nhưng khách mua 1 lần rồi không quay lại.',
    highlight: 'Chi phí tìm khách mới đắt gấp 7 lần',
    bg: 'bg-rose-50/40',
    border: 'border-rose-200/80',
    iconBg: 'bg-rose-100/80',
  },
  {
    icon: <Database className="w-5 h-5 text-indigo-600" strokeWidth={2.2} />,
    pillarTag: 'Dữ liệu',
    pillarTagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    title: 'Data KiotViet bị bỏ quên',
    desc: 'Hàng ngàn SĐT trên phần mềm chỉ dùng in bill, chưa khai thác để bán lại tự động.',
    highlight: 'Lãng phí kho khách hàng cũ sẵn có',
    bg: 'bg-indigo-50/40',
    border: 'border-indigo-200/80',
    iconBg: 'bg-indigo-100/80',
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" strokeWidth={2.2} />,
    pillarTag: 'Kênh tin',
    pillarTagColor: 'bg-amber-100 text-amber-700 border-amber-200',
    title: 'Nhắn Zalo thủ công, dễ bị khóa',
    desc: 'Nhân viên dò bill nhắn Zalo cá nhân tốn công, dễ sót và dễ bị Zalo quét chặn spam.',
    highlight: 'Tốn nhân sự mà rủi ro khóa nick cao',
    bg: 'bg-amber-50/40',
    border: 'border-amber-200/80',
    iconBg: 'bg-amber-100/80',
  },
];

const PainPointsSection = () => {
  return (
    <section id="pain-points" className="py-20 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 bg-rose-100/80 text-rose-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 border border-rose-200">
              <WarningFilled className="text-rose-500" />
              <span>Nỗi Đau Nan Giải Của Hơn 90% Shop Mẹ &amp; Bé</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug mb-3">
              Vì sao doanh thu Shop Mẹ &amp; Bé dậm chân tại chỗ?
            </h2>
            <p className="mt-0 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Bỉm sữa hết nhanh, mốc tuổi bé thay đổi liên tục. Không nhắc đúng điểm chạm trước 2-3 ngày, <strong>65% khách quen sẽ mua tạm nơi khác</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Cards Nỗi Đau Tinh Gọn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {painPoints.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                className={`p-5 sm:p-6 rounded-2xl border ${item.border} ${item.bg} hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-gray-200/60 bg-white/80 text-gray-600">
                      {item.pillarTag}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-gray-900 leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-gray-200/50 text-xs font-semibold text-rose-600 flex items-center gap-1.5">
                  <CloseCircleFilled className="shrink-0 text-xs" />
                  <span className="truncate">{item.highlight}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bảng So Sánh Trước vs Sau Khi Dùng MobyFlow Tinh Gọn */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-gray-200 shadow-xl overflow-hidden">
            <h3 className="text-xl sm:text-3xl font-extrabold text-center text-gray-900 tracking-tight mb-2">
              Sự Khác Biệt Khi Áp Dụng <span className="text-[#139091]">MobyFlow</span>
            </h3>
            <p className="text-center text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Chuyển đổi từ quản lý bị động sang tự động hóa chu kỳ 24/7
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Cột Cách Làm Cũ */}
              <div className="bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-gray-200/80">
                <div className="flex items-center space-x-2 text-rose-600 font-bold text-sm sm:text-base mb-3 pb-2.5 border-b border-gray-200">
                  <CloseCircleFilled className="text-base" />
                  <span>Cách Quản Trị Cũ (Thủ Công & Bị Động)</span>
                </div>
                <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Không nhớ ngày khách hết bỉm sữa, dễ bị đối thủ cướp khách</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Bỏ lỡ mốc thai kỳ mẹ bầu và giai đoạn bé đổi số sữa, ăn dặm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Hơn 40% khách cũ rơi vào trạng thái "ngủ quên" sau 60 ngày</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>Nhân viên nhắn Zalo cá nhân tốn công, dễ sót và dễ bị khóa nick</span>
                  </li>
                </ul>
              </div>

              {/* Cột Giải Pháp MobyFlow */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50/70 p-5 sm:p-6 rounded-2xl border-2 border-[#139091] shadow-xs">
                <div className="flex items-center space-x-2 text-[#139091] font-bold text-sm sm:text-base mb-3 pb-2.5 border-b border-teal-200">
                  <CheckCircleFilled className="text-base text-emerald-500" />
                  <span>Giải Pháp MobyFlow (Tự Động & Đột Phá)</span>
                </div>
                <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Tự đếm ngược chu kỳ:</strong> Nhắc ZNS trước 2-3 ngày, giữ chân 85% khách</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Đồng hành 4 năm:</strong> Từ tuần thai đến bé 36 tháng (giỏ đồ đi sinh, ăn dặm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Chiến dịch tháng tự động:</strong> Sinh nhật mẹ/bé, ngày hội thành viên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span><strong>Zalo ZNS tích vàng:</strong> Tỷ lệ mở 98.5%, tự tạo đơn KiotViet 1 chạm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPointsSection;
