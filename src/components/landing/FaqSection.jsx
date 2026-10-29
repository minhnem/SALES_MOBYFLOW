import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Collapse } from 'antd';

const faqs = [
  {
    key: '1',
    label: 'Shop tôi đang dùng phần mềm KiotViet thì kết nối với MobyFlow như thế nào?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Chỉ mất đúng 30 giây! Bạn chỉ cần vào mục Cài đặt trên MobyFlow, nhập Client ID & Secret từ KiotViet.
        Toàn bộ danh sách khách hàng, lịch sử hóa đơn mua bỉm sữa và danh mục sản phẩm sẽ tự động đồng bộ sang
        MobyFlow theo thời gian thực mà bạn không cần phải xuất nhập file thủ công.
      </p>
    ),
  },
  {
    key: '2',
    label: 'Gửi tin nhắn Zalo ZNS có bị khóa nick hay báo spam như Zalo cá nhân không?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Tuyệt đối KHÔNG! ZNS (Zalo Notification Service) là giải pháp tin nhắn chăm sóc khách hàng chính thức từ
        Zalo Doanh Nghiệp (Zalo OA có tích vàng). Mọi tin nhắn đều được Zalo phê duyệt trước, gửi thẳng đến hộp thư
        Zalo cá nhân của mẹ bỉm với tỷ lệ mở đọc lên tới 98.5%, bảo mật tuyệt đối và không bao giờ lo bị khóa tài khoản.
      </p>
    ),
  },
  {
    key: '3',
    label: 'MobyFlow tính toán chu kỳ tiêu dùng sữa bỉm của bé như thế nào?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Bạn chỉ cần thiết lập số ngày tiêu hao trong mục "Sản phẩm & Chu kỳ": Ví dụ lon sữa 800g bé dùng trong 12-14 ngày,
        bịch bỉm 64 miếng dùng trong 18 ngày. Khi có đơn hàng từ KiotViet, MobyFlow tự động kích hoạt bộ đếm ngược.
        Trước khi bé hết hàng 2-3 ngày, hệ thống sẽ tự động gửi tin nhắc mẹ đặt hàng để kịp nhận sữa mới cho con.
      </p>
    ),
  },
  {
    key: '4',
    label: 'Bé lớn lên cần đổi size bỉm hoặc đổi số sữa, MobyFlow có tự nhận diện được không?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Có! MobyFlow có tính năng theo dõi tháng tuổi của bé. Khi bé đạt mốc 6 tháng tuổi, hệ thống sẽ tự động nhắc
        mẹ đổi từ sữa số 1 sang số 2, hoặc khi bé đạt cân nặng tương ứng sẽ nhắc mẹ tăng từ bỉm size S lên size M.
        Điều này giúp shop chăm sóc khách hàng cực kỳ tinh tế và chuyên nghiệp.
      </p>
    ),
  },
  {
    key: '5',
    label: 'Nếu shop tôi đang lưu data khách hàng trên file Excel thì có dùng được không?',
    children: (
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed m-0">
        Hoàn toàn được! MobyFlow trang bị sẵn tính năng nhập file Excel (.xlsx, .xls) không giới hạn số lượng dòng.
        Bạn có thể tải file danh sách khách hàng lên hệ thống trong 1 phút, MobyFlow sẽ tự động phân loại và đưa vào
        các chiến dịch chăm sóc tự động ngay lập tức.
      </p>
    ),
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Giải Đáp Thắc Mắc Cho Shop Mẹ & Bé
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Câu hỏi thường gặp
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Mọi điều bạn cần biết về giải pháp tự động hóa chu kỳ chăm sóc khách hàng MobyFlow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-slate-50/70 p-4 sm:p-6 rounded-3xl border border-gray-100">
            <Collapse
              items={faqs}
              defaultActiveKey={['1', '3']}
              expandIconPosition="end"
              bordered={false}
              className="bg-transparent [&_.ant-collapse-item]:bg-white [&_.ant-collapse-item]:mb-3 [&_.ant-collapse-item]:rounded-2xl! [&_.ant-collapse-item]:border [&_.ant-collapse-item]:border-gray-100 [&_.ant-collapse-header]:font-bold [&_.ant-collapse-header]:text-gray-900 [&_.ant-collapse-header]:text-base sm:[&_.ant-collapse-header]:text-[17px] [&_.ant-collapse-header]:py-4!"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FaqSection;
