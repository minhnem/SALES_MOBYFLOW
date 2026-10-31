import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Collapse } from 'antd';

const faqs = [
  {
    key: '1',
    label: 'Kết nối KiotViet với MobyFlow như thế nào?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Chỉ mất 30 giây! Nhập <strong>Client ID &amp; Secret</strong> từ KiotViet vào mục Cài đặt. Toàn bộ khách hàng, hóa đơn và sản phẩm sẽ tự động đồng bộ thời gian thực.
      </p>
    ),
  },
  {
    key: '2',
    label: 'Gửi tin Zalo ZNS có bị khóa nick hay báo spam không?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Không! Zalo ZNS là dịch vụ tin nhắn chính thức từ <strong>Zalo OA tích vàng</strong>, được Zalo kiểm duyệt trước. Tỷ lệ mở đọc đạt 98.5% và không bao giờ lo bị khóa tài khoản.
      </p>
    ),
  },
  {
    key: '3',
    label: 'MobyFlow tính toán chu kỳ tiêu dùng sữa bỉm như thế nào?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Bạn chỉ cần cài số ngày dùng (VD: lon sữa = 12-14 ngày, bịch bỉm = 18 ngày). Hệ thống tự động đếm ngược từ ngày mua và gửi tin nhắc mẹ trước 2-3 ngày khi sắp hết hàng.
      </p>
    ),
  },
  {
    key: '4',
    label: 'Bé lớn lên đổi số sữa hoặc tăng size bỉm thì sao?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Hệ thống tự nhận diện theo tháng tuổi của bé: tự động nhắc mẹ đổi sữa số 2 khi bé tròn 6 tháng, gợi ý combo ăn dặm hoặc đổi size bỉm dán sang bỉm quần đúng lúc.
      </p>
    ),
  },
  {
    key: '5',
    label: 'Shop đang quản lý data trên file Excel có dùng được không?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Hoàn toàn được! MobyFlow hỗ trợ nhập file Excel (.xlsx, .xls) không giới hạn dòng, tự động phân nhóm và kích hoạt lịch chăm sóc tự động ngay trong 1 phút.
      </p>
    ),
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="moby-light-grid-bg scroll-mt-20 py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 border border-teal-200/80 px-3.5 py-1 rounded-full inline-block mb-3.5 shadow-2xs">
              Giải Đáp Thắc Mắc Cho Shop Mẹ & Bé
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-[1.35] sm:leading-[1.42] mb-3">
              Câu hỏi thường gặp
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed m-0">
              Mọi điều bạn cần biết về giải pháp tự động hóa chu kỳ chăm sóc khách hàng MobyFlow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-teal-100/80 shadow-sm">
            <Collapse
              items={faqs}
              defaultActiveKey={['1', '3']}
              expandIconPosition="end"
              bordered={false}
              className="bg-transparent [&_.ant-collapse-item]:bg-white/95 [&_.ant-collapse-item]:mb-3 [&_.ant-collapse-item]:rounded-2xl! [&_.ant-collapse-item]:border [&_.ant-collapse-item]:border-teal-100/70 [&_.ant-collapse-item]:shadow-xs [&_.ant-collapse-header]:font-bold [&_.ant-collapse-header]:text-gray-900 [&_.ant-collapse-header]:text-base sm:[&_.ant-collapse-header]:text-[17px] [&_.ant-collapse-header]:py-4!"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
