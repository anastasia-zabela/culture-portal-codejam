import React from 'react';
import PropTypes from 'prop-types';

import modalStyles from './modal.module.scss';
import Portal from './portal';

const Modal = ({
  title, isOpen, onCancel, children
}) => {
  return (
    <>
      {isOpen && <Portal>
        <div className={modalStyles.modalOverlay}>
          <div className={modalStyles.modalWindow}>
            <div className={modalStyles.modalHeader}>
              <div className={modalStyles.modalTitle}>{title}</div>
              <button onClick={onCancel}>Cancel</button>
            </div>
            <div
              className={modalStyles.modalBody}
              >
              {children}
            </div>
          </div>
        </div>
      </Portal>}
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
}

Modal.defaultProps = {
  title: 'Youtube',
  isOpen: false,
  onCancel: () => { },
}

export default Modal