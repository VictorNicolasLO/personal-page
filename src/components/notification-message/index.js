import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from './styled';
import { useThemeProvider } from '../../providers/theme.provider';

function NotificationMessage({ message, onClose, open, closeTime }) {
  const [opacity, setOpacity] = useState(1);

  const {
    color: { primary },
  } = useThemeProvider();
  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setOpacity(0);
      }, closeTime * 1000 - 200);
      setTimeout(() => {
        onClose();
        setOpacity(0);
      }, closeTime * 1000);
    }
  }, [open, onClose, closeTime]);

  return ReactDOM.createPortal(
    <NotificationContainer
      background={primary}
      style={{ display: !open ? 'none' : 'flex', opacity }}>
      <div>{message}</div>
    </NotificationContainer>,
    document.querySelector('body'),
  );
}

export default NotificationMessage;
