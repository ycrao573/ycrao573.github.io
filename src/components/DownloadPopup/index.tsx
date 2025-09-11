import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { useI18n } from '@/locale';

const DownloadPopup: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const { t } = useI18n();
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
      title={t('popup.title')}
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
              message: t('popup.email.message'),
            },
          ]}
        >
          <Input placeholder={t('popup.email.placeholder')} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 12 }}>
          <Button
            type="primary"
            className="gradient-btn"
            htmlType="submit"
            loading={loading}
          >
            {t('popup.download')}
          </Button>
        </Form.Item>
      </Form>
      <p style={{ fontSize: 11 }}>{t('popup.disclaimer')}</p>
    </Modal>
  );
};

export default DownloadPopup;
