import React from 'react'

import FormInput from '../../components/form-input/form-input.component'

import './prescription-request.styles.scss'

const PrescriptionRequest = () => {
  return (
    <div className="prescription-request">
      <form>
            <FormInput
              name="stuff"
              label="Ailment"
            />
      </form>
    </div>
  )
}

export default PrescriptionRequest
