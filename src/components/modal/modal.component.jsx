import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './modal.styles.scss'

const Modal = ({ isOpen, handleClose, children }) => {
    const showHideClassName = isOpen ? "modal visible-display" : "modal display-none";
    console.log(isOpen,3)
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          {children}
          <CustomButton primary onClick={handleClose}>close</CustomButton>
      </section>
    </div>
  )
}

export default Modal
