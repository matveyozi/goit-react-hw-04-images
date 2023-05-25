import { useEffect } from 'react';
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent } from './Modal.styled'

const modal = document.querySelector('#modal');

export const Modal = ( { onCloseModal, showPicture} ) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

    return createPortal(
        <div>
      <ModalBackdrop onClick={handleClickBackdrop}>
        <ModalContent>
          <img src={showPicture} alt='' />
        </ModalContent>
      </ModalBackdrop>
      </div>,
      modal
    );
  }

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  showPicture: PropTypes.string.isRequired,
};





