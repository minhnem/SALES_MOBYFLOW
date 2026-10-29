import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Tag } from 'antd';
import {
  CheckCircleFilled,
} from '@ant-design/icons';
import {
  Store,
  MessageSquareCheck,
  FileSpreadsheet,
  ShieldCheck,
} from 'lucide-react';

const mainIntegrations = [
  {
    name: 'Kết Nối KiotViet',
    type: 'Nguồn Đơn Hàng & Khách Hàng',
    desc: 'Đồng bộ tự động dữ liệu khách hàng, hóa đơn và sản phẩm từ KiotViet sang MobyFlow theo thời gian thực.',
    badge: 'Kết nối API 30s',
    badgeColor: 'cyan',
    iconBg: 'bg-[#139091]',
    icon: <Store className="w-6 h-6 text-white" strokeWidth={2.2} />,
    features: ['Đồng bộ hóa đơn tự động', 'Cập nhật SĐT'],
  },
  {
    name: 'Zalo OA Tích Vàng',
    type: 'Kênh Tin Nhắn Thương Hiệu',
    desc: 'Gửi tin nhắn ZNS chính chủ mang tên shop. Tỷ lệ đọc 98.5%, an toàn tuyệt đối không lo bị chặn nick.',
    badge: 'Tỷ lệ mở 98.5%',
    badgeColor: 'cyan',
    iconBg: 'bg-sky-500',
    icon: <MessageSquareCheck className="w-6 h-6 text-white" strokeWidth={2.2} />,
    features: ['Thương hiệu tích vàng uy tín', 'Chi phí chỉ vài trăm đồng'],
  },
  {
    name: 'Nhập & Xuất Excel',
    type: 'Quản Lý File Dữ Liệu',
    desc: 'Dễ dàng tải lên danh sách khách hàng từ POS cũ, Sapo, Fanpage để kích hoạt luồng chăm sóc ngay.',
    badge: 'Hỗ trợ .xlsx, .xls',
    badgeColor: 'green',
    iconBg: 'bg-emerald-600',
    icon: <FileSpreadsheet className="w-6 h-6 text-white" strokeWidth={2.2} />,
    features: ['Nhập hàng ngàn dòng trong 1 phút', 'Tự động lọc trùng số điện thoại'],
  },
  {
    name: 'Phân Quyền & Bảo Mật',
    type: 'Bảo Mật & Quản Trị Nội Bộ',
    desc: 'Phân quyền chặt chẽ cho từng nhân viên, theo dõi nhật ký thao tác và bảo mật tuyệt đối dữ liệu khách.',
    badge: 'An toàn dữ liệu',
    badgeColor: 'purple',
    iconBg: 'bg-purple-600',
    icon: <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.2} />,
    features: ['Phân quyền theo vai trò', 'Bảo vệ dữ liệu khách hàng'],
  },
];

const ChannelIntegration = () => {
  return (
    <section id="integrations" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Tích Hợp Sâu Rộng
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Kết nối liền mạch với các nền tảng bạn đang sử dụng
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
              Bạn vẫn dùng KiotViet bán hàng tại quầy bình thường, MobyFlow sẽ tự động chăm sóc và nhắc mẹ mua lại đúng chu kỳ.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainIntegrations.map((item, idx) => (
            <ScrollReveal key={item.name} direction="up" delay={idx * 0.08}>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs hover:shadow-lg hover:border-teal-300 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center mb-2 gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg m-0 leading-snug min-h-[2.5rem] flex items-center">{item.name}</h3>
                    </div>
                  </div>
                  {/* <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 min-h-[40px]">{item.desc}</p> */}
                </div>

                <div className="pt-3.5 border-t border-gray-100 space-y-2 text-xs sm:text-sm text-gray-700">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 min-h-[1.5rem]">
                      <CheckCircleFilled className="text-emerald-500 text-xs shrink-0" />
                      <span>{feat}</span>
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

export default ChannelIntegration;
