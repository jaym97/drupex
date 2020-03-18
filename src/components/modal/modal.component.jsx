import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './modal.styles.scss'

const Modal = ({ isOpen, handleClose, children }) => {
  const showHideClassName = isOpen ? "modal visible-display" : "modal display-none"
  console.log(isOpen, 5)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-main_header"><CustomButton primary onClick={handleClose}>&times;</CustomButton></div>
        {children}
      </section>
    </div>
  )
}

export default Modal
