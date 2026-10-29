import React from 'react';
import { Table, Tag, Space, Button, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';

const UserTable = ({ data = [], loading = false }) => {
  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Space>
          <UserOutlined className="text-blue-500" />
          <span className="font-medium text-gray-800">{text}</span>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <Tag color={role === 'admin' ? 'volcano' : 'geekblue'}>
          {role?.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'default'}>
          {status === 'active' ? 'Hoạt động' : 'Tạm khóa'}
        </Tag>
      ),
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => {
        const recordId = record._id || record.id || record.email;
        return (
          <Space size="small">
            <Tooltip title="Chỉnh sửa thông tin">
              <Button
                id={`btn-edit-user-${recordId}`}
                type="text"
                shape="circle"
                aria-label={`Chỉnh sửa thông tin cho ${record.name}`}
                icon={<EditOutlined className="text-blue-500" />}
              />
            </Tooltip>
            <Tooltip title="Xóa người dùng">
              <Button
                id={`btn-delete-user-${recordId}`}
                type="text"
                shape="circle"
                danger
                aria-label={`Xóa tài khoản ${record.name}`}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      id="table-users-list"
      columns={columns}
      dataSource={data}
      rowKey={(record) => record._id || record.id || record.email}
      loading={loading}
      pagination={{ pageSize: 5 }}
      className="shadow-xs rounded-xl overflow-hidden border border-gray-100"
    />
  );
};

export default UserTable;
