import React from 'react';
import { Card, Timeline, Tag } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const LifecycleMilestones = ({ milestones = [] }) => {
  const defaultMilestones = [
    {
      title: 'Khởi tạo dự án',
      description: 'Cấu hình Next.js, Express server, Ant Design & Redux',
      status: 'finish',
      time: 'Giai đoạn 1',
    },
    {
      title: 'Xây dựng API Backend & Database',
      description: 'Thiết kế MongoDB Schema, RESTful APIs, JWT Auth',
      status: 'process',
      time: 'Giai đoạn 2',
    },
    {
      title: 'Phát triển Giao diện Client',
      description: 'Tích hợp Components Ant Design, Quản lý State với Redux Toolkit',
      status: 'process',
      time: 'Giai đoạn 3',
    },
    {
      title: 'Triển khai & Kiểm thử',
      description: 'CI/CD, kiểm thử toàn diện, tối ưu hiệu năng',
      status: 'wait',
      time: 'Giai đoạn 4',
    },
  ];

  const data = milestones.length > 0 ? milestones : defaultMilestones;

  const items = data.map((item) => {
    let color = 'gray';
    let dot = null;

    if (item.status === 'finish') {
      color = 'green';
      dot = <CheckCircleOutlined className="text-base" />;
    } else if (item.status === 'process') {
      color = 'blue';
      dot = <SyncOutlined spin className="text-base" />;
    } else {
      dot = <ClockCircleOutlined className="text-base" />;
    }

    return {
      color,
      dot,
      children: (
        <div className="pb-2">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-800">{item.title}</span>
            <Tag color={color}>{item.time}</Tag>
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-0">{item.description}</p>
        </div>
      ),
    };
  });

  return (
    <Card
      title={
        <h2 id="heading-milestones" className="text-base font-bold text-gray-800 m-0">
          Tiến trình phát triển (Milestones)
        </h2>
      }
      className="shadow-xs rounded-2xl border border-gray-100"
    >
      <Timeline items={items} />
    </Card>
  );
};

export default LifecycleMilestones;
