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
    pillarTag: 'Chức năng 1',
    pillarTagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    badge: 'Quên chu kỳ bỉm sữa',
    title: 'Không nhớ chu kỳ hết bỉm sữa',
    desc: 'Hộp sữa, bịch bỉm dùng hết sau 10 - 15 ngày. Không nhắc trước 2-3 ngày, mẹ bỉm tiện tay mua nơi khác làm shop mất khách quen.',
    highlight: 'Mất tới 65% khách quen vì quên nhắc mua lại',
    bg: 'bg-blue-50/40',
    border: 'border-blue-200/80',
    iconBg: 'bg-blue-100/80',
  },
  {
    icon: <Baby className="w-5 h-5 text-purple-600" strokeWidth={2.2} />,
    pillarTag: 'Chức năng 2',
    pillarTagColor: 'bg-purple-100 text-purple-700 border-purple-200',
    badge: 'Bỏ quên mốc Mẹ Bầu & Bé',
    title: 'Bỏ lỡ vòng đời Mẹ Bầu & Bé',
    desc: 'Không biết tuần thai mẹ bầu để tư vấn vitamin bầu, combo giỏ đồ đi sinh; bỏ quên mốc bé đổi số sữa (6-12m) và thời điểm ăn dặm.',
    highlight: 'Bỏ lỡ doanh thu vàng từ thai kỳ đến 3 tuổi',
    bg: 'bg-purple-50/40',
    border: 'border-purple-200/80',
    iconBg: 'bg-purple-100/80',
  },
  {
    icon: <Gift className="w-5 h-5 text-pink-600" strokeWidth={2.2} />,
    pillarTag: 'Chức năng 3',
    pillarTagColor: 'bg-pink-100 text-pink-700 border-pink-200',
    badge: 'Bỏ lỡ sự kiện tháng',
    title: 'Thiếu chiến dịch định kỳ hàng tháng',
    desc: 'Quên ngày sinh nhật bé, không có Ngày hội thành viên. Khách cũ sau 60-90 ngày dần "ngủ quên" và không quay lại.',
    highlight: 'Hơn 40% khách cũ rơi vào trạng thái "ngủ quên"',
    bg: 'bg-pink-50/40',
    border: 'border-pink-200/80',
    iconBg: 'bg-pink-100/80',
  },
  {
    icon: <Coins className="w-5 h-5 text-rose-600" strokeWidth={2.2} />,
    pillarTag: 'Chi phí & Lợi nhuận',
    pillarTagColor: 'bg-rose-100 text-rose-700 border-rose-200',
    badge: 'Lãi mỏng & Đốt tiền Ads',
    title: 'Khách mua 1 lần rồi rời đi',
    desc: 'Biên lãi sữa bỉm chỉ 5 - 10%. Đốt tiền chạy quảng cáo tìm khách mới nhưng khách không quay lại khiến shop cầm chắc lỗ.',
    highlight: 'Tìm khách mới đắt gấp 7 lần giữ khách cũ',
    bg: 'bg-rose-50/40',
    border: 'border-rose-200/80',
    iconBg: 'bg-rose-100/80',
  },
  {
    icon: <Database className="w-5 h-5 text-indigo-600" strokeWidth={2.2} />,
    pillarTag: 'Dữ liệu POS',
    pillarTagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    badge: 'Lãng phí tài nguyên',
    title: 'Data KiotViet bị "bỏ xó", lãng phí',
    desc: 'Hàng ngàn SĐT khách hàng trên KiotViet chỉ dùng để in hóa đơn, không có công cụ tự động phân nhóm và remarketing.',
    highlight: 'Lãng phí kho tài sản khách hàng cũ sẵn có',
    bg: 'bg-indigo-50/40',
    border: 'border-indigo-200/80',
    iconBg: 'bg-indigo-100/80',
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-600" strokeWidth={2.2} />,
    pillarTag: 'Kênh gửi tin',
    pillarTagColor: 'bg-amber-100 text-amber-700 border-amber-200',
    badge: 'Quá tải & Bị khóa Zalo',
    title: 'Nhắn tin thủ công, dễ bị khóa Zalo',
    desc: 'Nhân viên dò bill nhắn Zalo cá nhân vừa tốn công, dễ sót khách, vừa có nguy cơ bị Zalo quét khóa tài khoản do spam.',
    highlight: 'Tốn chi phí nhân sự mà hiệu quả rất thấp',
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
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-rose-100/80 text-rose-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 border border-rose-200">
              <WarningFilled className="text-rose-500" />
              <span>Nỗi Đau Nan Giải Của Hơn 90% Chủ Shop Mẹ &amp; Bé</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug mb-4">
              <span className="block">Tại sao doanh thu Shop Mẹ &amp; Bé mãi dậm chân tại chỗ</span>
              <span className="block mt-1 sm:mt-2">dù bán cả ngàn đơn?</span>
            </h2>
            <p className="mt-0 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Chăm sóc khách hàng mẹ &amp; bé đòi hỏi 3 điểm chạm: <strong>(1) Chu kỳ cạn bỉm sữa 12-18 ngày</strong>, <strong>(2) Cột mốc phát triển 0-36 tháng của bé</strong>, và <strong>(3) Sự kiện định kỳ theo tháng &amp; sinh nhật</strong>. Thiếu 1 trong 3, khách hàng sẽ lập tức chuyển sang chuỗi siêu thị đối thủ!
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Cards Nỗi Đau Gắn Liền Với 3 Chức Năng Chủ Đạo & Vận Hành */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {painPoints.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                className={`p-5 sm:p-6 rounded-2xl border ${item.border} ${item.bg} hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 leading-snug mb-2 min-h-[2.5rem] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 min-h-[4.25rem] flex items-start">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-gray-200/50 text-xs sm:text-[13px] font-semibold text-rose-600 flex items-center gap-1.5 min-h-[2.25rem]">
                  <CloseCircleFilled className="shrink-0 text-sm" />
                  <span className="truncate">{item.highlight}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bảng So Sánh Trước vs Sau Khi Dùng MobyFlow Với 3 Chức Năng Chủ Đạo */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl overflow-hidden">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 tracking-tight mb-3">
              Sự Khác Biệt Khi Áp Dụng <span className="text-[#139091]">MobyFlow</span> Cho Shop Mẹ &amp; Bé
            </h3>
            <p className="text-center text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Chuyển đổi từ cách quản lý bị động sang tự động hóa toàn diện,{' '}
              <br className="hidden md:inline" />
              chuyên sâu với <strong>3 chức năng chăm sóc chủ đạo</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Cột Cách Làm Cũ */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80">
                <div className="flex items-center space-x-2 text-rose-600 font-bold text-base mb-2 pb-2 border-b border-gray-200">
                  <CloseCircleFilled className="text-lg" />
                  <span>Cách Quản Trị Cũ (Thủ Công & Bị Động)</span>
                </div>
                <ul className="space-y-0 list-none p-0 m-0 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-rose-500 font-bold shrink-0 text-base">✕</span>
                    <div>
                      <strong className="text-gray-900 block font-semibold text-sm sm:text-base">1. Không theo dõi được chu kỳ tiêu dùng</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-rose-500 font-bold shrink-0 text-base">✕</span>
                    <div>
                      <strong className="text-gray-900 block font-semibold text-sm sm:text-base">2. Bỏ quên các mốc vòng đời Mẹ Bầu & Bé</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-rose-500 font-bold shrink-0 text-base">✕</span>
                    <div>
                      <strong className="text-gray-900 block font-semibold text-sm sm:text-base">3. Bỏ lỡ sự kiện định kỳ trong tháng</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-rose-500 font-bold shrink-0 text-base">✕</span>
                    <div>
                      <strong className="text-gray-900 block font-semibold text-sm sm:text-base">Quản trị thủ công, tốn nhân lực</strong>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Cột Giải Pháp MobyFlow với 3 Chức Năng Chủ Đạo */}
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50/70 p-6 rounded-2xl border-2 border-[#139091] shadow-xs">
                <div className="flex items-center space-x-2 text-[#139091] font-bold text-base mb-2 pb-2 border-b border-teal-200">
                  <CheckCircleFilled className="text-lg text-emerald-500" />
                  <span>Giải Pháp MobyFlow (Tự Động & Đột Phá)</span>
                </div>
                <ul className="space-y-0 list-none p-0 m-0 text-sm sm:text-base text-gray-800">
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-emerald-500 font-bold shrink-0 text-base">✓</span>
                    <div>
                      <strong className="text-teal-950 block font-semibold text-sm sm:text-base">1. Nhắc mua hàng theo chu kỳ</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-emerald-500 font-bold shrink-0 text-base">✓</span>
                    <div>
                      <strong className="text-purple-900 block font-semibold text-sm sm:text-base">2. Chăm sóc theo vòng đời Mẹ Bầu & Bé toàn diện</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-emerald-500 font-bold shrink-0 text-base">✓</span>
                    <div>
                      <strong className="text-amber-900 block font-semibold text-sm sm:text-base">3. Chiến dịch gửi tin nhắn theo sự kiện tháng</strong>
                    </div>
                  </li>
                  <li className="flex items-center gap-2.5 min-h-[2.5rem] sm:min-h-[2.75rem]">
                    <span className="text-emerald-500 font-bold shrink-0 text-base">✓</span>
                    <div>
                      <strong className="text-emerald-900 block font-semibold text-sm sm:text-base">Hệ thống tự động vận hành 24/7 qua KiotViet</strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 Chức Năng Chủ Đạo Dạng Thẻ Trực Quan */}
            <div className="pt-8 border-t border-gray-100">
              <div className="text-center mb-7">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200 shadow-2xs inline-block">
                  3 Chức Năng Chăm Sóc Chủ Đạo Trên MobyFlow
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Chức năng 1 */}
                <div className="bg-gradient-to-br from-teal-50/70 via-white to-white p-6 sm:p-7 rounded-3xl border border-teal-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#139091] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-teal-600/25">
                        <SyncOutlined />
                      </div>
                      <span className="text-xs font-bold text-[#139091] bg-teal-100/90 px-3 py-1 rounded-full">
                        Chức năng 1
                      </span>
                    </div>
                    <h4 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug min-h-[3.25rem] flex items-center">
                      Nhắc mua hàng theo chu kỳ
                    </h4>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed m-0 mb-4 min-h-[4.5rem] sm:min-h-[4.75rem] flex items-start">
                      Tự động tính toán lượng sữa bột, miếng bỉm còn lại và gửi ZNS trước 2-3 ngày, ngăn khách mua nơi khác khi cạn hàng.
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-teal-100/80 text-xs sm:text-sm font-semibold text-[#139091] flex items-center gap-1.5">
                    <CheckCircleFilled className="text-[#139091] shrink-0" /> <span>Giữ chân 85% khách hàng cũ</span>
                  </div>
                </div>

                {/* Chức năng 2 */}
                <div className="bg-gradient-to-br from-purple-50/70 via-white to-white p-6 sm:p-7 rounded-3xl border border-purple-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-purple-500/25">
                        <HeartOutlined />
                      </div>
                      <span className="text-xs font-bold text-purple-700 bg-purple-100/90 px-3 py-1 rounded-full">
                        Chức năng 2
                      </span>
                    </div>
                    <h4 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug min-h-[3.25rem] flex items-center">
                      Chăm sóc vòng đời Mẹ Bầu & Bé
                    </h4>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed m-0 mb-4 min-h-[4.5rem] sm:min-h-[4.75rem] flex items-start">
                      Bao trọn 2 giai đoạn: Thai kỳ 9 tháng (vitamin bầu, giỏ đồ đi sinh) và Bé 0 - 36 tháng (đổi số sữa, ăn dặm & vi chất).
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-purple-100/80 text-xs sm:text-sm font-semibold text-purple-700 flex items-center gap-1.5">
                    <CheckCircleFilled className="text-purple-600 shrink-0" /> <span>Đồng hành từ thai kỳ đến 3 tuổi</span>
                  </div>
                </div>

                {/* Chức năng 3 */}
                <div className="bg-gradient-to-br from-amber-50/70 via-white to-white p-6 sm:p-7 rounded-3xl border border-amber-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-amber-500/25">
                        <GiftOutlined />
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full">
                        Chức năng 3
                      </span>
                    </div>
                    <h4 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug min-h-[3.25rem] flex items-center">
                      Chiến dịch tin nhắn theo sự kiện tháng
                    </h4>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed m-0 mb-4 min-h-[4.5rem] sm:min-h-[4.75rem] flex items-start">
                      Kích hoạt ngày hội thành viên định kỳ, chúc mừng sinh nhật mẹ & bé, siêu sale ngày đôi kéo khách ngủ quên quay lại.
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-amber-100/80 text-xs sm:text-sm font-semibold text-amber-700 flex items-center gap-1.5">
                    <CheckCircleFilled className="text-amber-600 shrink-0" /> <span>Tăng 40% doanh số từ khách quen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPointsSection;
