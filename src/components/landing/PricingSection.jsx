import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from 'antd';
import { CheckOutlined, CrownOutlined } from '@ant-design/icons';

const PricingSection = ({ onOpenTrial }) => {
  const plans = [
    {
      name: 'Gói Dùng Thử',
      tagline: 'Phù hợp cho shop mẹ & bé trải nghiệm tính năng nhắc chu kỳ tiêu dùng',
      price: 'XXX.XXX',
      billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
      popular: false,
      features: [
        'Chỉ có Chức năng 1: Nhắc mua hàng theo chu kỳ bỉm sữa',
        'Tự động đếm ngày hết bỉm, sữa & kích hoạt ZNS nhắc mẹ',
        'Quản lý không giới hạn sản phẩm & cài đặt chu kỳ dùng',
        'Kết nối và đồng bộ dữ liệu với KiotViet',
        'Hỗ trợ nhập danh sách khách hàng từ file Excel',
        'Phân quyền nhân viên',
        'Báo cáo thống kê gửi tin',
      ],
      ctaText: 'Đăng ký dùng thử 14 ngày miễn phí',
      btnType: 'default',
    },
    {
      name: 'Gói Phát Triển',
      tagline: 'Tăng tốc doanh số và chăm sóc trọn vẹn: Thai kỳ ➔ Mẹ bầu ➔ Bé lớn',
      price: 'XXX.XXX',
      billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
      popular: true,
      badge: 'Khuyên Dùng Cho Shop Mẹ & Bé',
      features: [
        'Bao gồm Chức năng 1. Nhắc mua hàng theo chu kỳ tiêu dùng bỉm sữa',
        'Thêm Chức năng 2: Chăm sóc theo vòng đời Mẹ Bầu (thai kỳ, giỏ đồ đi sinh) & Bé (0 - 36 tháng)',
        'Tự động đếm ngày hết bỉm, sữa & kích hoạt ZNS nhắc mẹ',
        'Tự động nhắc tuần thai mẹ bầu, giỏ đồ đi sinh, đổi số sữa, ăn dặm & vi chất',
        'Tự động phân nhóm khách theo độ tuổi bé & chu kỳ mua',
        'Quản lý không giới hạn sản phẩm & cài đặt chu kỳ dùng',
        'Kết nối và đồng bộ dữ liệu với KiotViet',
        'Hỗ trợ nhập danh sách khách hàng từ file Excel',
        'Phân quyền nhân viên',
        'Báo cáo chi tiết tỷ lệ gửi tin',
      ],
      ctaText: 'Đăng ký nhận tư vấn',
      btnType: 'primary',
    },
    {
      name: 'Gói Pro',
      tagline: 'Giải pháp cao cấp nhất với trọn bộ cả 3 tính năng chăm sóc chủ đạo',
      price: 'X.XXX.XXX',
      billing: 'Thanh toán trọn gói theo năm (Tiết kiệm 20%)',
      popular: false,
      features: [
        'Bao gồm Chức năng 1. Nhắc mua hàng theo chu kỳ tiêu dùng bỉm sữa',
        'Bao gồm Chức năng 2. Chăm sóc theo vòng đời Mẹ Bầu (thai kỳ, giỏ đồ đi sinh) & Bé (0 - 36 tháng)',
        'Bao gồm Chức năng 3. Chiến dịch gửi tin nhắn theo sự kiện tháng',
        'Tự động đếm ngày hết bỉm, sữa & kích hoạt ZNS nhắc mẹ',
        'Tự động nhắc tuần thai mẹ bầu, giỏ đồ đi sinh, đổi số sữa, ăn dặm & vi chất',
        'Tự động phân nhóm khách theo độ tuổi bé & chu kỳ mua',
        'Quản lý không giới hạn sản phẩm & cài đặt chu kỳ dùng',
        'Kết nối và đồng bộ dữ liệu với KiotViet',
        'Hỗ trợ nhập danh sách khách hàng từ file Excel',
        'Phân quyền nhân viên',
        'Báo cáo chi tiết tỷ lệ gửi tin',
      ],
      ctaText: 'Đăng ký nhận tư vấn',
      btnType: 'default',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Bảng Giá Đầu Tư Hiệu Quả
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Chi phí cực nhỏ - Giữ chân trọn đời mẹ bỉm sữa
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Chỉ từ vài ngàn đồng một ngày để sở hữu hệ thống tự động hóa,{' '}
              <br className="hidden md:inline" />
              mang lại hàng chục triệu doanh số tái mua mỗi tháng.
            </p>

            {/* Badge thông báo gói thanh toán năm ưu đãi */}
            <div className="mt-7 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-200/90 shadow-2xs">
              <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                TIẾT KIỆM 20%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">
                Bảng giá áp dụng thanh toán trọn gói theo năm
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} direction="up" delay={idx * 0.1}>
              <div
                className={`relative h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${plan.popular
                  ? 'bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white shadow-2xl shadow-teal-700/25 border-2 border-[#139091] scale-100 lg:-translate-y-2'
                  : 'bg-white text-gray-900 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-teal-300'
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-xs font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <CrownOutlined /> {plan.badge}
                  </div>
                )}

                <div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed mb-6 min-h-[2.75rem] sm:min-h-[3rem] flex items-start ${plan.popular ? 'text-teal-200' : 'text-gray-600'
                      }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mb-6 pb-6 border-b border-gray-200/20">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl sm:text-5xl font-black font-outfit tracking-tight">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm font-semibold ${plan.popular ? 'text-teal-200' : 'text-gray-500'
                          }`}
                      >
                        ₫ / tháng
                      </span>
                    </div>
                    <span
                      className={`text-xs mt-1 block ${plan.popular ? 'text-teal-300' : 'text-gray-400'
                        }`}
                    >
                      {plan.billing}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider mb-2 ${plan.popular ? 'text-teal-300' : 'text-gray-500'
                        }`}
                    >
                      Quyền lợi bao gồm:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-sm sm:text-[15px] leading-snug min-h-[1.5rem]">
                        <CheckOutlined
                          className={`mr-2.5 mt-0.5 shrink-0 ${plan.popular ? 'text-teal-400 font-bold' : 'text-[#139091]'
                            }`}
                        />
                        <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  size="large"
                  type={plan.popular ? 'primary' : 'default'}
                  onClick={() => onOpenTrial && onOpenTrial(plan.name)}
                  className={`w-full h-12 rounded-2xl font-bold text-sm sm:text-base ${plan.popular
                    ? 'bg-gradient-to-r from-[#139091] to-teal-700 hover:from-teal-700 hover:to-[#0f766e] border-0 shadow-lg shadow-teal-600/40 text-white'
                    : 'border-gray-300 hover:border-[#139091] hover:text-[#139091]'
                    }`}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footnote about 1 Zalo OA */}
        {/* <div className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          💡 <strong>Quy chuẩn kết nối:</strong> Mỗi cửa hàng / chuỗi kết nối với <strong>1 tài khoản Zalo OA Tích Vàng duy nhất</strong> để tập trung thương hiệu và tối ưu tỷ lệ đọc tin 98.5%.
        </div> */}
      </div>
    </section>
  );
};

export default PricingSection;
