import React from 'react';
import ReactDOM from 'react-dom';
import { BackDrop } from './styled';
import Card from '../card';
const body = document.querySelector('body');

function Dialog({ children, open, onClose }) {
  return ReactDOM.createPortal(
    <>
      {open ? (
        <BackDrop>
          <Card>{children}</Card>
        </BackDrop>
      ) : null}
    </>,
    body,
  );
}

export default Dialog;
