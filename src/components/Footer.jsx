import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter
      id="site-footer"
      component="footer"
      className="text-center text-gray-500 bg-white border-t border-gray-100 py-8 mt-auto"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 mb-3">
          <p className="m-0 font-semibold text-gray-700">
            MOBYFLOW © {new Date().getFullYear()} - Nền Tảng Quản Trị & Bán Hàng Trực Tuyến
          </p>
          <div className="flex items-center space-x-4">
            <a
              id="link-footer-privacy"
              href="#privacy"
              className="text-gray-400 hover:text-[#139091] transition"
              title="Chính sách bảo mật thông tin"
            >
              Chính sách bảo mật
            </a>
            <span className="text-gray-300">•</span>
            <a
              id="link-footer-terms"
              href="#terms"
              className="text-gray-400 hover:text-[#139091] transition"
              title="Điều khoản sử dụng dịch vụ"
            >
              Điều khoản dịch vụ
            </a>
            <span className="text-gray-300">•</span>
            <a
              id="link-footer-sitemap"
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#139091] transition"
              title="Sơ đồ trang web Sitemap XML"
            >
              Sitemap XML
            </a>
          </div>
        </div>
        <p className="text-xs text-gray-400 m-0">
          Hệ thống tối ưu hóa chuẩn SEO, xây dựng trên nền tảng MERN Stack (MongoDB, Express.js, React/Next.js, Node.js) & Ant Design.
        </p>
      </div>
    </AntFooter>
  );
};

export default Footer;
