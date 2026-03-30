import React, { useState } from 'react';
import { useI18n } from '@/locale';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DownloadPopup: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleDownload = () => {
    const fileUrl =
      'https://raw.githubusercontent.com/ycrao573/ycrao573.github.io/master/src/assets/Rao_Yuchen_Resume.pdf';
    window.open(fileUrl, '_blank');
  };

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextError = /\S+@\S+\.\S+/.test(email) ? '' : t('popup.email.message');
    setEmailError(nextError);
    if (nextError) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleDownload();
      onClose();
      setEmail('');
    }, 2000);
  };

  return (
    <Dialog open={visible} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('popup.title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t('popup.email.placeholder')}
            type="email"
          />
          {emailError ? <p className="text-xs text-destructive">{emailError}</p> : null}
          <Button type="submit" disabled={loading}>
            {t('popup.download')}
          </Button>
        </form>
        <DialogDescription className="text-[11px]">{t('popup.disclaimer')}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadPopup;
