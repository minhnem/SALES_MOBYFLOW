import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Drawer } from 'antd';
import {
  MenuOutlined,
  ThunderboltOutlined,
  DashboardOutlined,
  LoginOutlined,
} from '@ant-design/icons';

const Navbar = ({ onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giải pháp', href: '#pain-points' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Quy trình', href: '#workflow' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'Hỏi đáp', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      {/* <div className="bg-gradient-to-r from-teal-900 via-[#139091] to-teal-800 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center space-x-2">
          <span className="bg-white/20 text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Dành Riêng Cho Shop Mẹ & Bé
          </span>
          <span className="hidden sm:inline">
            Tặng 14 ngày dùng thử miễn phí Full tính năng tự động đếm chu kỳ bỉm sữa & tích hợp KiotViet!
          </span>
          <span className="sm:hidden">Dùng thử 14 ngày tự động chu kỳ bỉm sữa!</span>
          <button
            onClick={onOpenTrial}
            className="underline underline-offset-2 hover:text-amber-200 transition font-semibold ml-2 cursor-pointer bg-transparent border-0 text-white p-0"
          >
            Nhận ngay &rarr;
          </button>
        </div>
      </div> */}

      {/* Main Sticky Navbar */}
      <header
        id="landing-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
          : 'bg-[#051312]/85 backdrop-blur-md border-b border-teal-500/20 shadow-xl shadow-black/30 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            id="link-landing-logo"
            href="/"
            className="flex items-center no-underline group py-1"
          >
            <div
              className={`flex items-center transition-all duration-200 ${
                !scrolled
                  ? 'px-3.5 py-1.5 rounded-full bg-white/95 shadow-md shadow-black/30 border border-white/50 group-hover:scale-105 group-hover:bg-white'
                  : 'group-hover:scale-105'
              }`}
            >
              <img
                src="/images/logo mobyflow2-01.png"
                alt="MOBYFLOW - Mom Baby Flow"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`header-nav-link ${scrolled ? 'header-nav-link-scrolled' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              id="btn-nav-trial"
              type="primary"
              size="large"
              onClick={onOpenTrial}
              className="btn-shine bg-gradient-to-r from-[#139091] via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-[#0f766e] border-0 shadow-lg shadow-teal-600/30 font-bold text-sm sm:text-base px-6 rounded-xl h-10 flex items-center gap-2 text-white hover:scale-105 transition-all"
            >
              Đăng ký dùng thử
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              id="btn-mobile-menu-toggle"
              type="text"
              icon={<MenuOutlined className={`text-xl ${scrolled ? 'text-gray-700' : 'text-white'}`} />}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu điều hướng"
            />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center">
            <img
              src="/images/logo mobyflow2-01.png"
              alt="MOBYFLOW"
              className="h-8 w-auto object-contain"
            />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        styles={{ body: { padding: '24px 16px' } }}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setMobileMenuOpen(false);
              }}
              className="text-base font-medium text-gray-700 hover:text-[#139091] py-2 border-b border-gray-100 no-underline cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
            <Button
              block
              type="primary"
              size="large"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTrial) onOpenTrial();
              }}
              className="bg-gradient-to-r from-[#139091] to-teal-700 border-0 h-11 font-semibold flex items-center justify-center gap-2 text-white"
            >
              Đăng ký dùng thử
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
