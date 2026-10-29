import React from 'react';
import { Layout, Menu, Button, Space, Avatar, Dropdown } from 'antd';
import { UserOutlined, BellOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header: AntHeader } = Layout;

const Header = ({ onOpenProfile }) => {
  const router = useRouter();

  const menuItems = [
    {
      key: '/dashboard',
      label: (
        <Link id="nav-link-dashboard" href="/dashboard" title="Bảng điều khiển quản trị">
          Bảng điều khiển
        </Link>
      ),
    },
    {
      key: '/',
      label: (
        <Link id="nav-link-home" href="/" title="Trang giới thiệu tính năng">
          Trang giới thiệu
        </Link>
      ),
    },
    {
      key: '/settings',
      label: (
        <Link id="nav-link-settings" href="/settings" title="Cài đặt hệ thống">
          Cài đặt
        </Link>
      ),
    },
  ];

  const profileMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Thông tin cá nhân',
      onClick: onOpenProfile,
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Cài đặt hệ thống',
      onClick: () => router.push('/settings'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Đăng xuất',
      danger: true,
    },
  ];

  return (
    <AntHeader
      id="site-header"
      component="header"
      className="flex items-center justify-between px-6 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 sticky top-0 z-50 h-16"
    >
      <div className="flex items-center space-x-6">
        <Link
          id="link-brand-home"
          href="/"
          className="flex items-center text-decoration-none group py-1"
          title="Trang chủ MOBYFLOW"
        >
          <img
            src="/images/logo mobyflow2-01.png"
            alt="MOBYFLOW - Mom Baby Flow"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>
        <nav id="main-navigation" aria-label="Điều hướng chính" className="hidden sm:block">
          <Menu
            mode="horizontal"
            selectedKeys={[router.pathname]}
            items={menuItems}
            className="border-b-0 min-w-[200px] font-medium"
          />
        </nav>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          id="btn-header-notifications"
          type="text"
          shape="circle"
          aria-label="Xem thông báo"
          title="Thông báo mới (3)"
          icon={<BellOutlined className="text-gray-600 text-base" />}
          className="hover:bg-gray-100"
        />
        <Dropdown menu={{ items: profileMenuItems }} placement="bottomRight" arrow>
          <div
            id="btn-user-profile-menu"
            role="button"
            tabIndex={0}
            aria-label="Tài khoản người dùng"
            className="flex items-center space-x-2 cursor-pointer select-none px-2 py-1 rounded-lg hover:bg-gray-50 transition"
          >
            <Avatar icon={<UserOutlined />} className="bg-gradient-to-tr from-[#139091] to-teal-700" />
            <span className="font-medium text-sm text-gray-700 hidden sm:inline">Admin MobyFlow</span>
          </div>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
