import React, { useState } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import PainPointsSection from '@/components/landing/PainPointsSection';
// import AiEcosystem from '@/components/landing/AiEcosystem';
// import ChannelIntegration from '@/components/landing/ChannelIntegration';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import WorkflowSteps from '@/components/landing/WorkflowSteps';
import ProductShowcase from '@/components/landing/ProductShowcase';
import StatsAndTestimonials from '@/components/landing/StatsAndTestimonials';
import PricingSection from '@/components/landing/PricingSection';
import FaqSection from '@/components/landing/FaqSection';
import CtaBanner from '@/components/landing/CtaBanner';
import MegaFooter from '@/components/landing/MegaFooter';
import TrialModal from '@/components/landing/TrialModal';

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

      {/* Navigation Header */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section with Simulated Zalo ZNS & KiotViet Auto Cycle Mockup */}
        <HeroSection onOpenTrial={handleOpenTrial} />

        {/* 2. Nỗi Đau Của Các Shop Mẹ & Bé (Pain Points & Comparison) */}
        <PainPointsSection />

        {/* ========================================================================= */}
        {/* [TẠM COMMENT THEO PHƯƠNG ÁN 1 TINH GỌN ĐỂ TRÌNH SẾP DUYỆT]                */}
        {/* Tạm ẩn 2 khối bên dưới để tránh trùng lặp tính năng, giảm 45% độ dài trang */}
        {/* ========================================================================= */}
        {/* <AiEcosystem /> */}
        {/* <ChannelIntegration /> */}

        {/* 3. Hệ Thống Tính Năng Đã Hoàn Thiện 100% Theo Báo Cáo */}
        <FeaturesGrid />

        {/* 6. Quy Trình Chăm Sóc Khép Kín 4 Bước */}
        <WorkflowSteps />

        {/* 7. Trực Quan Hóa Giao Diện Thực Tế MobyFlow */}
        <ProductShowcase onOpenTrial={handleOpenTrial} />

        {/* 8. Con Số Thực Tế & Chia Sẻ Từ Chủ Shop Mẹ Bé */}
        <StatsAndTestimonials />

        {/* 9. Bảng Giá Gói Dịch Vụ Cho Cửa Hàng & Chuỗi Mẹ Bé */}
        <PricingSection onOpenTrial={handleOpenTrial} />

        {/* 10. Câu Hỏi Thường Gặp (FAQ) */}
        <FaqSection />

        {/* 11. Banner Kêu Gọi Hành Động (CTA) */}
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>

      {/* Mega Footer */}
      <MegaFooter />

      {/* Free Trial Registration Modal */}
      <TrialModal
        open={trialModalOpen}
        selectedPlan={selectedPlan}
        onCancel={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
