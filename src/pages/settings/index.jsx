import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import PageTitle from '@/components/PageTitle';
import SEO from '@/components/SEO';
import SettingsSection from '@/components/settings/SettingsSection';
import { Row, Col } from 'antd';

export default function SettingsPage() {
  const breadcrumbItems = [
    { title: 'Trang chủ', href: '/' },
    { title: 'Cài đặt hệ thống' },
  ];

  return (
    <MainLayout>
      <SEO
        title="Cài Đặt Hệ Thống & Cấu Hình Cửa Hàng"
        description="Thiết lập tham số hoạt động, quản lý email thông báo và tùy chọn đồng bộ dữ liệu cho hệ thống bán hàng MobyFlow."
        keywords="cài đặt mobyflow, cấu hình cửa hàng, thiết lập hệ thống mern stack"
        canonical="https://mobyflow.vn/settings"
      />
      <PageTitle
        headingId="settings-main-heading"
        title="Cài đặt hệ thống"
        subtitle="Quản lý cấu hình chung cho dự án PROJECT_WEB_BAN_MOBYFLOW"
        breadcrumbItems={breadcrumbItems}
      />
      <section aria-labelledby="settings-main-heading">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={18} lg={14}>
            <SettingsSection />
          </Col>
        </Row>
      </section>
    </MainLayout>
  );
}
