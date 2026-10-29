import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import PageTitle from '@/components/PageTitle';
import SEO from '@/components/SEO';
import LifecycleMilestones from '@/components/LifecycleMilestones';
import UserTable from '@/features/users/UserTable';
import { Row, Col, Card, Statistic, Button, Alert, Space } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  RiseOutlined,
  PlusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const initialUsers = [
    { id: '1', name: 'Nguyễn Văn An', email: 'an.nguyen@example.com', role: 'admin', status: 'active' },
    { id: '2', name: 'Trần Thị Bình', email: 'binh.tran@example.com', role: 'user', status: 'active' },
    { id: '3', name: 'Lê Hoàng Cường', email: 'cuong.le@example.com', role: 'user', status: 'inactive' },
    { id: '4', name: 'Phạm Minh Đức', email: 'duc.pham@example.com', role: 'user', status: 'active' },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <MainLayout>
      <SEO
        title="Bảng Điều Khiển Quản Trị Bán Hàng"
        description="Hệ thống quản lý bán hàng MobyFlow: giám sát doanh thu, đơn hàng trực tiếp, quản trị khách hàng và tiến trình vận hành kinh doanh đa kênh."
        keywords="quản lý bán hàng mobyflow, dashboard mern stack, quản lý khách hàng, thống kê doanh thu, nextjs ecommerce admin"
        canonical="https://mobyflow.vn/dashboard"
      />

      <PageTitle
        headingId="dashboard-main-heading"
        title="Bảng điều khiển - MOBYFLOW"
        subtitle="Hệ thống quản trị bán hàng MobyFlow xây dựng trên nền tảng MERN Stack & Next.js"
        extra={
          <Space>
            <Button
              id="btn-refresh-dashboard"
              icon={<ReloadOutlined />}
              onClick={handleRefresh}
              aria-label="Làm mới dữ liệu thống kê"
            >
              Làm mới
            </Button>
            <Button
              id="btn-create-new-record"
              type="primary"
              icon={<PlusOutlined />}
              aria-label="Thêm mới bản ghi hoặc đơn hàng"
            >
              Thêm mới
            </Button>
          </Space>
        }
      />

      <Alert
        id="alert-system-ready"
        message="Hệ thống đã sẵn sàng!"
        description="Cấu trúc dự án MERN Stack đã được thiết lập thành công với Next.js (Client), Express/Node.js (Server), MongoDB và giao diện Ant Design tối ưu chuẩn SEO."
        type="success"
        showIcon
        closable
        className="mb-6 rounded-xl border-green-200 shadow-xs"
      />

      {/* Statistics Section with Semantic Tag and Landmark */}
      <section aria-labelledby="heading-business-metrics" className="mb-6">
        <h2 id="heading-business-metrics" className="sr-only">
          Chỉ số hiệu quả kinh doanh hôm nay
        </h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card
              bordered={false}
              className="shadow-xs rounded-xl hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <Statistic
                title={<span className="text-gray-500 font-medium">Tổng người dùng</span>}
                value={1250}
                prefix={<UserOutlined className="text-blue-500 mr-2" aria-hidden="true" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              bordered={false}
              className="shadow-xs rounded-xl hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <Statistic
                title={<span className="text-gray-500 font-medium">Đơn hàng mới</span>}
                value={342}
                prefix={<ShoppingCartOutlined className="text-emerald-500 mr-2" aria-hidden="true" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              bordered={false}
              className="shadow-xs rounded-xl hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <Statistic
                title={<span className="text-gray-500 font-medium">Doanh thu hôm nay</span>}
                value={25800000}
                suffix="₫"
                prefix={<DollarOutlined className="text-amber-500 mr-2" aria-hidden="true" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card
              bordered={false}
              className="shadow-xs rounded-xl hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <Statistic
                title={<span className="text-gray-500 font-medium">Tăng trưởng</span>}
                value={18.2}
                suffix="%"
                prefix={<RiseOutlined className="text-indigo-500 mr-2" aria-hidden="true" />}
              />
            </Card>
          </Col>
        </Row>
      </section>

      {/* Main Content: Table and Milestones */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <section
            id="section-recent-users"
            aria-labelledby="heading-recent-users"
            className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="heading-recent-users" className="text-lg font-bold text-gray-800 m-0">
                Danh sách người dùng gần đây
              </h2>
            </div>
            <UserTable data={initialUsers} loading={loading} />
          </section>
        </Col>
        <Col xs={24} lg={8}>
          <aside aria-labelledby="heading-milestones">
            <LifecycleMilestones />
          </aside>
        </Col>
      </Row>
    </MainLayout>
  );
}
