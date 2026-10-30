import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Button } from 'antd';
import { CheckOutlined, CrownOutlined } from '@ant-design/icons';

const PricingSection = ({ onOpenTrial }) => {
  const plans = [
    {
      name: 'Gói Dùng Thử',
      tagline: 'Trải nghiệm tính năng tự động đếm chu kỳ bỉm sữa cơ bản',
      price: 'XXX.XXX',
      billing: 'Thanh toán theo năm (Tiết kiệm 20%)',
      popular: false,
      features: [
        'Nhắc mua lại theo chu kỳ bỉm sữa tự động',
        'Tự đếm ngày hết hàng & kích hoạt Zalo ZNS nhắc mẹ',
        'Cài đặt không giới hạn chu kỳ sản phẩm',
        'Đồng bộ KiotViet & nhập file Excel 1-click',
        'Phân quyền nhân viên & báo cáo gửi tin',
      ],
      ctaText: 'Đăng ký dùng thử 14 ngày',
      btnType: 'default',
    },
    {
      name: 'Gói Phát Triển',
      tagline: 'Chăm sóc trọn vẹn: Thai kỳ ➔ Mẹ bầu ➔ Bé 36 tháng',
      price: 'XXX.XXX',
      billing: 'Thanh toán theo năm (Tiết kiệm 20%)',
      popular: true,
      badge: 'Khuyên Dùng Cho Shop Mẹ & Bé',
      features: [
        'Bao gồm toàn bộ tính năng Gói Dùng Thử',
        'Chăm sóc vòng đời Mẹ Bầu & Bé (0 - 36 tháng)',
        'Tự nhắc tuần thai, giỏ đồ đi sinh, đổi số sữa & ăn dặm',
        'Tự động phân nhóm khách theo tháng tuổi của bé',
        'Báo cáo chi tiết tỷ lệ chuyển đổi đơn hàng',
        'Hỗ trợ kỹ thuật 1 - 1 trực tiếp',
      ],
      ctaText: 'Đăng ký nhận tư vấn',
      btnType: 'primary',
    },
    {
      name: 'Gói Pro',
      tagline: 'Giải pháp cao cấp nhất với trọn bộ cả 3 kịch bản chăm sóc',
      price: 'X.XXX.XXX',
      billing: 'Thanh toán theo năm (Tiết kiệm 20%)',
      popular: false,
      features: [
        'Bao gồm toàn bộ tính năng Gói Phát Triển',
        'Chiến dịch ưu đãi định kỳ tháng & sinh nhật mẹ/bé',
        'Tự động kích hoạt Ngày hội thành viên, Sale ngày đôi',
        'Chiến dịch kéo khách cũ "ngủ quên" quay lại',
        'Báo cáo đối soát doanh thu & chỉ số ROI tự động',
        'Hỗ trợ setup kịch bản chuyên sâu theo yêu cầu',
      ],
      ctaText: 'Đăng ký nhận tư vấn',
      btnType: 'default',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#139091] bg-teal-50 px-3 py-1 rounded-full inline-block">
              Bảng Giá Đầu Tư
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2 mb-3">
              Gói dịch vụ phù hợp cho mọi quy mô cửa hàng
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
              Chi phí cực nhỏ, mang lại hàng chục triệu doanh số tái mua mỗi tháng.
            </p>

            {/* Badge thông báo gói thanh toán năm ưu đãi */}
            <div className="mt-5 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-200/90 shadow-2xs">
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
