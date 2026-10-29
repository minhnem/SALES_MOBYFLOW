import React from 'react';
import { Card, Form, Switch, Input, Button, Divider, message } from 'antd';

const SettingsSection = () => {
  const [form] = Form.useForm();

  const onSave = () => {
    message.success('Đã lưu cài đặt cấu hình thành công!');
  };

  return (
    <Card
      title={
        <h2 id="heading-settings-section" className="text-base font-bold text-gray-800 m-0">
          Cấu hình vận hành hệ thống
        </h2>
      }
      className="shadow-xs rounded-2xl border border-gray-100"
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          siteName: 'MOBYFLOW STORE',
          notificationEnabled: true,
          autoSync: true,
        }}
        onFinish={onSave}
      >
        <Form.Item
          label={<span className="font-medium text-gray-700">Tên website / Cửa hàng</span>}
          name="siteName"
        >
          <Input id="input-setting-site-name" placeholder="Nhập tên website / thương hiệu" size="large" />
        </Form.Item>

        <Form.Item
          label={<span className="font-medium text-gray-700">Thông báo Email</span>}
          name="notificationEnabled"
          valuePropName="checked"
        >
          <Switch id="switch-setting-notifications" aria-label="Bật tắt thông báo qua email" />
        </Form.Item>

        <Form.Item
          label={<span className="font-medium text-gray-700">Tự động đồng bộ dữ liệu</span>}
          name="autoSync"
          valuePropName="checked"
        >
          <Switch id="switch-setting-auto-sync" aria-label="Bật tắt tự động đồng bộ dữ liệu" />
        </Form.Item>

        <Divider className="my-5" />

        <Button id="btn-save-settings" type="primary" htmlType="submit" size="large" className="font-medium">
          Lưu cấu hình
        </Button>
      </Form>
    </Card>
  );
};

export default SettingsSection;
