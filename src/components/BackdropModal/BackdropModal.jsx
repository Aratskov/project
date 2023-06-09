import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './BackdropModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const BackdropModal = ({ children, closeModal }) => {
  const handleClose = useCallback(
    event => {
      if (event.target === event.currentTarget || event.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <div className={s.wrap}>
      <div className={s.backdrop} onClick={handleClose}>
      {children}
    </div>
    </div>,
    modalRoot
  );
};

export default BackdropModal;
