import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileModal from '@/components/ProfileModal';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <Layout className="min-h-screen flex flex-col bg-slate-50">
      {/* Skip to Content Link for Accessibility & SEO Screen Readers */}
      <a
        id="link-skip-to-content"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#139091] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-hidden"
      >
        Chuyển đến nội dung chính
      </a>

      <Header onOpenProfile={() => setProfileModalOpen(true)} />
      
      <Content
        id="main-content"
        component="main"
        role="main"
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </Content>

      <Footer />
      <ProfileModal
        open={profileModalOpen}
        onCancel={() => setProfileModalOpen(false)}
      />
    </Layout>
  );
};

export default MainLayout;
