import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'
import Modal from '../../components/modal/modal.component'

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { updatePrescriptionRequestList } from '../../firebase/firebase.utils'

import './prescription-request.styles.scss'

class PrescriptionRequest extends React.Component {
	state = {
		ailment: '',
		symptoms: '',
		comments: '',
		modalIsopen: false
	}

	handleInputChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	handleSubmit = event => {
		event.preventDefault()

		const stuff = {
				ailment: this.state.ailment,
				symptoms: this.state.symptoms,
				comments: this.state.comments
			};

		const processIsComplete = () => updatePrescriptionRequestList(this.props.currentUser, stuff)

		processIsComplete()
		.then(resolved => {
				resolved ? this.setState({ modalIsopen: true }) : this.setState({ modalIsopen: false })
			}
		)
	}

	render() {
		return (
			<div className="prescription-request">
				<main>
					<h1>Tell us about your ailment</h1>

					<form onSubmit={this.handleSubmit}>
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
							required
						/>

						<FormInput
							name="comments"
							label="Remarks"
							value={this.state.comments}
							onChange={this.handleInputChange}
							required
						/>

						<CustomButton primary type="submit">submit</CustomButton>
					</form>
				</main>

				<Modal isOpen={this.state.modalIsopen} />
			</div>
    	)
  }
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(PrescriptionRequest)
