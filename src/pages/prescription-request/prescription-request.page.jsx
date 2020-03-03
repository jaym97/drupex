import React from 'react'
import { Redirect } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import './prescription-request.styles.scss'

class PrescriptionRequest extends React.Component {
  state = {
    ailment: '',
    symptoms: '',
    comments: ''
  }

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="prescription-request">
        <main>
          <h1>Tell us about your ailment</h1>
          <form onSubmit={() => <Redirect to="/patients" />}>
            <FormInput
              name="ailment"
              label="Suspected Ailment... type 'none' if you're not sure what the problem is"
              value={this.state.ailment}
              onChange={this.handleInputChange}
            />
            <FormInput
              name="symptoms"
              label="Symptoms"
              value={this.state.symptoms}
              onChange={this.handleInputChange}
            />
            <FormInput
              name="comments"
              label="Remarks"
              value={this.state.comments}
              onChange={this.handleInputChange}
            />
            <CustomButton primary>submit</CustomButton>
          </form>
        </main>
      </div>
    )
  }
}

export default PrescriptionRequest
