import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './modal.styles.scss'

const Modal = ({ isOpen, handleClose, children }) => {
  const showHideClassName = isOpen ? "modal visible-display" : "modal"
  console.log(isOpen, 5)
  return (
    <div className={showHideClassName}>
      <div className="modal-main_header"><CustomButton primary onClick={handleClose}>&times;</CustomButton></div>
        {children}
    </div>
  )
}

export default Modal
