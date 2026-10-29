import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  ShopOutlined,
  ThunderboltOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

const TrialModal = ({ open, onCancel, selectedPlan }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    const payload = {
      fullName: values.fullName || '',
      phone: values.phone || '',
      shopName: values.shopName || '',
      plan: selectedPlan || 'Gói Dùng Thử 14 Ngày',
      createdAt: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    };

    try {
      if (googleSheetUrl && googleSheetUrl.startsWith('http')) {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, val]) => {
          formData.append(key, val);
        });

        // Gửi tới Google Apps Script Web App (chế độ no-cors)
        await fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        });
      } else {
        console.log('📌 [MOBYFLOW LEAD DATA]', payload);
      }

      setSubmitted(true);
      message.success('Đăng ký nhận tư vấn thành công! MobyFlow sẽ liên hệ bạn ngay.');
    } catch (err) {
      console.error('Lỗi khi gửi dữ liệu:', err);
      // Vẫn ghi nhận cho khách hàng để không gây gián đoạn trải nghiệm
      setSubmitted(true);
      message.success('Đăng ký thành công! MobyFlow đã ghi nhận thông tin.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      destroyOnHidden
      centered
      width={500}
      className="[&_.ant-modal-content]:rounded-3xl [&_.ant-modal-content]:p-7"
    >
      {!submitted ? (
        <div>
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#139091] to-teal-700 text-white flex items-center justify-center text-xl mx-auto mb-3 shadow-md shadow-teal-600/25">
              <ThunderboltOutlined />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">
              {selectedPlan ? `Đăng ký tư vấn: ${selectedPlan}` : 'Trải nghiệm 14 ngày miễn phí MobyFlow'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 mb-0">
              Tự động hóa chăm sóc chu kỳ bỉm sữa & kết nối KiotViet cho Shop Mẹ & Bé
            </p>
          </div>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="fullName"
              label={<span className="font-medium text-xs sm:text-sm text-gray-700">Họ và tên của bạn</span>}
              rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
            >
              <Input
                id="input-trial-name"
                size="large"
                placeholder="Ví dụ: Chị Lan Hương"
                prefix={<UserOutlined className="text-gray-400" />}
                className="rounded-xl"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label={<span className="font-medium text-xs sm:text-sm text-gray-700">Số điện thoại / Zalo nhận tài khoản</span>}
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
                { pattern: /^[0-9]{9,11}$/, message: 'Số điện thoại không hợp lệ' },
              ]}
            >
              <Input
                id="input-trial-phone"
                size="large"
                placeholder="Ví dụ: 0912 345 678"
                prefix={<PhoneOutlined className="text-gray-400" />}
                className="rounded-xl"
              />
            </Form.Item>

            <Form.Item
              name="shopName"
              label={<span className="font-medium text-xs sm:text-sm text-gray-700">Tên Cửa hàng / Chuỗi Mẹ & Bé</span>}
              rules={[{ required: true, message: 'Vui lòng nhập tên cửa hàng' }]}
            >
              <Input
                id="input-trial-shop"
                size="large"
                placeholder="Ví dụ: Shop Mẹ & Bé BabyMom"
                prefix={<ShopOutlined className="text-gray-400" />}
                className="rounded-xl"
              />
            </Form.Item>

            <Button
              id="btn-submit-trial-modal"
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full h-12 text-sm sm:text-base font-bold bg-gradient-to-r from-[#139091] to-teal-700 hover:from-teal-700 hover:to-[#0f766e] border-0 rounded-2xl shadow-lg shadow-teal-600/25 mt-2 text-white"
            >
              {selectedPlan && selectedPlan !== 'Gói Dùng Thử 14 Ngày'
                ? 'Gửi thông tin đăng ký tư vấn'
                : 'Đăng ký dùng thử 14 ngày miễn phí'}
            </Button>

            <div className="text-center mt-3 text-xs text-gray-500 font-medium">
              ✓ Hỗ trợ kết nối KiotViet & Zalo OA 1 - 1 miễn phí • Tư vấn nhanh chóng
            </div>
          </Form>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 text-3xl flex items-center justify-center mx-auto mb-4 border-2 border-emerald-200">
            <CheckCircleFilled />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Đăng ký thành công!</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
            Hệ thống MobyFlow đã nhận được thông tin đăng ký của bạn. Chúng tôi sẽ liên hệ qua Số điện thoại / Zalo
            trong ít phút để tư vấn chi tiết và cấp tài khoản dùng thử 14 ngày cho cửa hàng của bạn.
          </p>
          <Button
            type="primary"
            size="large"
            onClick={handleClose}
            className="h-11 px-8 rounded-xl font-semibold bg-[#139091] hover:bg-teal-700 border-0 text-white"
          >
            Đã hiểu & Đóng
          </Button>
        </div>
      )}
    </Modal>
  );
};

export default TrialModal;
