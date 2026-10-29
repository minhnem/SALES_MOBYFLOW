import React, { useState } from 'react';
import { Modal, Form, Input, Button, Avatar, message, Space, Divider } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const ProfileModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Cập nhật thông tin thành công!');
      onCancel();
    }, 600);
  };

  return (
    <Modal
      title="Thông tin cá nhân"
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnHidden
    >
      <div className="flex flex-col items-center mb-6 pt-2">
        <Avatar size={72} icon={<UserOutlined />} className="bg-blue-500 mb-3" />
        <h3 className="font-semibold text-lg text-gray-800 m-0">Admin MobyFlow</h3>
        <span className="text-gray-400 text-sm">Quản trị viên hệ thống</span>
      </div>

      <Divider className="my-4" />

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          name: 'Admin MobyFlow',
          email: 'admin@mobyflow.vn',
          phone: '0901234567',
        }}
        onFinish={handleFinish}
      >
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
        >
          <Input id="input-profile-name" prefix={<UserOutlined className="text-gray-400" />} />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Vui lòng nhập email' },
            { type: 'email', message: 'Email không hợp lệ' },
          ]}
        >
          <Input id="input-profile-email" prefix={<MailOutlined className="text-gray-400" />} />
        </Form.Item>

        <Form.Item name="phone" label="Số điện thoại">
          <Input id="input-profile-phone" prefix={<PhoneOutlined className="text-gray-400" />} />
        </Form.Item>

        <div className="flex justify-end space-x-2 mt-6">
          <Button id="btn-cancel-profile" onClick={onCancel}>
            Hủy
          </Button>
          <Button id="btn-save-profile" type="primary" htmlType="submit" loading={loading}>
            Lưu thay đổi
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ProfileModal;
