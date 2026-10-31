import React, { useState } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/landing/Navbar';
import StatementHeroSection from '@/components/landing/StatementHeroSection';
import HeroSection from '@/components/landing/HeroSection';
import PainPointsSection from '@/components/landing/PainPointsSection';
// import AiEcosystem from '@/components/landing/AiEcosystem';
// import ChannelIntegration from '@/components/landing/ChannelIntegration';
// import FeaturesGrid from '@/components/landing/FeaturesGrid';
import WorkflowSteps from '@/components/landing/WorkflowSteps';
import ProductShowcase from '@/components/landing/ProductShowcase';
import StatsAndTestimonials from '@/components/landing/StatsAndTestimonials';
import PricingSection from '@/components/landing/PricingSection';
import FaqSection from '@/components/landing/FaqSection';
import CtaBanner from '@/components/landing/CtaBanner';
import MegaFooter from '@/components/landing/MegaFooter';
import TrialModal from '@/components/landing/TrialModal';
import FloatingContact from '@/components/landing/FloatingContact';
import MobileStickyCta from '@/components/landing/MobileStickyCta';
import ScrollProgress from '@/components/landing/ScrollProgress';
import MarqueeBand from '@/components/landing/MarqueeBand';

export default function LandingPage() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  React.useEffect(() => {
    // Nếu trên URL đang dính đuôi anchor (#workflow...) do trước đó bấm xem, tự động dọn sạch và cuộn về đầu trang
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleOpenTrial = (planName) => {
    setSelectedPlan(typeof planName === 'string' ? planName : 'Gói Dùng Thử 14 Ngày');
    setTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#139091] selection:text-white">
      {/* Search Engine Optimization */}
      <SEO
        title="Phần Mềm Tự Động Hóa Chăm Sóc Khách Hàng Chu Kỳ Bỉm Sữa Cho Shop Mẹ & Bé"
        description="MobyFlow - Hệ thống tự động chăm sóc khách hàng theo chu kỳ tiêu dùng bỉm sữa dành riêng cho Shop Mẹ & Bé. Kết nối KiotViet trong 30s, đếm ngược ngày hết bỉm sữa và gửi tin Zalo ZNS nhắc mẹ mua lại tự động."
        keywords="mobyflow, phần mềm mẹ và bé, chăm sóc khách hàng chu kỳ bỉm sữa, tự động hóa zalo zns, kết nối kiotviet, quản lý shop mẹ bé, tăng tỷ lệ khách quay lại"
        canonical="https://mobyflow.vn"
        ogType="website"
        ogImage="https://mobyflow.vn/images/og-image.jpg"
      />

      {/* Thanh tiến trình cuộn */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Trang Giới Thiệu: Landing Statement Hero Section (Phong cách Dabilux.com: Dark mode, Letter-Rise, Particles & Glow) */}
        <StatementHeroSection onOpenTrial={handleOpenTrial} />

        {/* Dải Marquee phong cách viền sáng chuyển tiếp */}
        <MarqueeBand variant="outline" />

        {/* 2. Trang Nỗi Đau: 6 Nỗi Đau Của Các Shop Mẹ & Bé + Bảng So Sánh Sự Khác Biệt */}
        <PainPointsSection />

        {/* Dải marquee điểm nhấn chuyển tiếp sang Giải pháp */}
        <MarqueeBand />

        {/* 3. Trang Giải Pháp: Tự Động Hóa Chăm Sóc Chu Kỳ Sữa Bỉm Qua Zalo ZNS (Gộp 3 Chức Năng Chủ Đạo + Demo Điện Thoại) */}
        <HeroSection onOpenTrial={handleOpenTrial} />

        {/* 4. Trang Quy Trình: Quy Trình Chăm Sóc Khép Kín 4 Bước */}
        <WorkflowSteps />

        {/* 5. Trực Quan Hóa Giao Diện Thực Tế MobyFlow */}
        <ProductShowcase onOpenTrial={handleOpenTrial} />

        {/* 7. Con Số Thực Tế & Chia Sẻ Từ Chủ Shop Mẹ Bé */}
        <StatsAndTestimonials />

        {/* 8. Bảng Giá Gói Dịch Vụ Cho Cửa Hàng & Chuỗi Mẹ Bé */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 9. Câu Hỏi Thường Gặp (FAQ) */}
        <FaqSection />

        {/* 10. Banner Kêu Gọi Hành Động (CTA) */}
        <MarqueeBand variant="outline" reverse />
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* Mega Footer */}
      <MegaFooter />

      {/* Điểm chạm nổi: Zalo / Hotline / Dùng thử + thanh CTA mobile */}
      <FloatingContact onOpenTrial={handleOpenTrial} />
      <MobileStickyCta onOpenTrial={handleOpenTrial} />

      {/* Free Trial Registration Modal */}
      <TrialModal
        open={trialModalOpen}
        selectedPlan={selectedPlan}
        onCancel={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
