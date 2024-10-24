import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const DownloadPopup: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const handleDownload = () => {
    const fileUrl =
      'https://raw.githubusercontent.com/ycrao573/ycrao573.github.io/master/src/assets/Rao_Yuchen_Resume.pdf';
    window.open(fileUrl, '_blank');
  };

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    // Handle download logic here
    setLoading(true);

    // Simulate download process
    setTimeout(() => {
      setLoading(false);
      handleDownload();
      onClose();
    }, 2000);
  };

  return (
    <Modal
      title="Please enter your email 📧 for resume download access 🔒*"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Come on, be serious please!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 12 }}>
          <Button
            type="primary"
            className="gradient-btn"
            htmlType="submit"
            loading={loading}
          >
            Download
          </Button>
        </Form.Item>
      </Form>
      <p style={{ fontSize: 11 }}>
        * To ensure I'm connecting with genuine visitors, kindly provide your
        email address below for verification. Your information will be kept
        private and never shared. Thank you for your understanding and support!
      </p>
    </Modal>
  );
};

export default DownloadPopup;
