import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

import Portal from './portal';

const Modal = ({
  title, isOpen, onCancel, children
}) => {
  return (
    <>
      {isOpen && <Portal>
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
              <button onClick={onCancel}>Cancel</button>
            </div>
            <div
              className="modalBody"
              style={{
                width: '660px',
                height: '500px'
              }}
            >
              {children}
            </div>
            <div className="modalFooter">
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