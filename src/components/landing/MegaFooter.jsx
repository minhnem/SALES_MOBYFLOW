import React from 'react';
import Link from 'next/link';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  FacebookFilled,
  YoutubeFilled,
  TikTokFilled,
} from '@ant-design/icons';

const MegaFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b4849] via-[#083839] to-[#052627] text-teal-100 text-xs sm:text-sm border-t-2 border-[#139091] pt-16 pb-12 overflow-hidden">
      {/* Brand Teal Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-[#139091]/25 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group text-decoration-none">
              <div className="bg-white hover:bg-white/95 transition-all px-4 py-2 rounded-2xl inline-flex items-center shadow-lg shadow-teal-950/30">
                <img
                  src="/images/logo mobyflow2-01.png"
                  alt="MOBYFLOW - Mom Baby Flow"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-teal-100/80 text-xs sm:text-[13px] leading-relaxed mb-6 max-w-sm">
              Hệ thống tự động hóa chăm sóc khách hàng theo chu kỳ tiêu dùng bỉm sữa chuyên biệt cho Shop Mẹ &amp; Bé.
              Đồng bộ dữ liệu trực tiếp từ KiotViet và kích hoạt tin nhắn thương hiệu Zalo ZNS giữ chân khách hàng trọn đời.
            </p>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-teal-100/90">
              <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-teal-300" />
                <span>Hotline hỗ trợ: <strong>094 1234 116</strong> (8:00 - 22:00)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailOutlined className="text-teal-300" />
                <span>Email: truebrand@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <EnvironmentOutlined className="text-teal-300 mt-0.5" />
                <span>1770 Hùng Vương, P.Nông Trang, Phú Thọ</span>
              </div>
            </div>
          </div>

          {/* Column 1: Chức năng hệ thống */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
              Chức Năng Chính
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-[13px]">
              <li>
                <a href="#features" className="text-teal-100/75 hover:text-white transition inline-block">
                  Sản phẩm &amp; Chu kỳ tiêu dùng
                </a>
              </li>
              <li>
                <a href="#features" className="text-teal-100/75 hover:text-white transition inline-block">
                  Tự động hóa chăm sóc (Automation)
                </a>
              </li>
              <li>
                <a href="#features" className="text-teal-100/75 hover:text-white transition inline-block">
                  Quản lý Template Zalo ZNS
                </a>
              </li>
              <li>
                <a href="#features" className="text-teal-100/75 hover:text-white transition inline-block">
                  Quản lý Chiến dịch Remarketing
                </a>
              </li>
              <li>
                <a href="#features" className="text-teal-100/75 hover:text-white transition inline-block">
                  Báo cáo doanh số tái mua
                </a>
              </li>
              <li className="pt-1">
                <Link href="/dashboard" className="text-teal-300 hover:text-white font-semibold inline-flex items-center gap-1">
                  Bảng điều khiển quản trị &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Tích hợp & Kết nối */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
              Tích Hợp
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-[13px]">
              <li>
                <a href="#integrations" className="text-teal-100/75 hover:text-white transition inline-block">
                  Kết nối KiotViet Store
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-teal-100/75 hover:text-white transition inline-block">
                  Zalo Official Account (OA)
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-teal-100/75 hover:text-white transition inline-block">
                  Dịch vụ Zalo ZNS Tích Vàng
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-teal-100/75 hover:text-white transition inline-block">
                  Nhập &amp; Xuất Dữ liệu Excel
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-teal-100/75 hover:text-white transition inline-block">
                  Phân quyền &amp; Nhật ký hệ thống
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hỗ trợ & Pháp lý */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
              Hỗ Trợ &amp; Pháp Lý
            </h4>
            <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-[13px]">
              <li>
                <a href="#faq" className="text-teal-100/75 hover:text-white transition inline-block">
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
              <li>
                <a href="#terms" className="text-teal-100/75 hover:text-white transition inline-block">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-teal-100/75 hover:text-white transition inline-block">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-teal-100/75 hover:text-white transition inline-block">
                  Sơ đồ website (Sitemap XML)
                </a>
              </li>
              <li>
                <Link href="/settings" className="text-teal-100/75 hover:text-white transition inline-block">
                  Cài đặt hệ thống
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-teal-500/20">
              <span className="text-[11px] font-semibold text-teal-200/80 block mb-2">
                Bảo Mật Dữ Liệu:
              </span>
              <div className="inline-flex items-center space-x-1.5 text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-xl shadow-xs">
                <SafetyCertificateOutlined className="text-emerald-400" />
                <span>Bảo Mật Dữ Liệu Khách Hàng ISO 27001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-teal-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-200/60 gap-4">
          <p className="m-0">
            © {new Date().getFullYear()} MOBYFLOW.VN - Hệ Thống Tự Động Hóa Chăm Sóc Khách Hàng Chu Kỳ Dành Cho Shop Mẹ &amp; Bé.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-teal-200/80">Kênh hỗ trợ:</span>
            <a href="#facebook" className="text-teal-200/80 hover:text-white text-base transition">
              <FacebookFilled />
            </a>
            <a href="#youtube" className="text-teal-200/80 hover:text-white text-base transition">
              <YoutubeFilled />
            </a>
            <a href="#tiktok" className="text-teal-200/80 hover:text-white text-base transition">
              <TikTokFilled />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MegaFooter;
