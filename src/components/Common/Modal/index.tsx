import React from 'react';
import './styles.scss';

import { ModalProps } from './interface';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='overlay' data-testid="modal-overlay" onClick={onClose}>
      <div className='modal' data-testid="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className='closeButton' onClick={onClose}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;