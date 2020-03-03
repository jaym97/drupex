import React from 'react'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import './prescription-request.styles.scss'

const PrescriptionRequest = () => {
  return (
    <div className="prescription-request">
      <main>
        <h1>Tell us about your ailment</h1>
        <form>
          <FormInput
            name="stuff"
            label="Ailment"
          />
          <FormInput
            name="stuff"
            label="Ailment"
          />
          <FormInput
            name="stuff"
            label="Ailment"
          />
          <FormInput
            name="stuff"
            label="Ailment"
          />
          <FormInput
            name="stuff"
            label="Ailment"
          />
          <CustomButton primary>submit</CustomButton>
        </form>
      </main>
    </div>
  )
}

export default PrescriptionRequest
