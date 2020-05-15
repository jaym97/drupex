import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import PadlockIcon from '../../assets/svg-components/padlock.icon'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss'

export default class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
		passwordConfirmation: '',
		patient: false,
		doctor: true,
		role: '',
		passwordsAreMatched: true
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleRadioButtonChange = event => {
		const { name, checked, id } = event.target
		
		if (id === "doctor" && checked){
			this.setState({ [name]: id })
		}

		if (id === "patient" && checked){
			this.setState({ [name]: id })
		}		
	}
	
    handleSubmit = async event => {
        event.preventDefault()

        const { firstname, lastname, username, email, password, passwordConfirmation, role } = this.state

        if (password !== passwordConfirmation){
			this.setState({ passwordsAreMatched: false })
			return
		}
		
		console.log(`role: ${role}`)

        try {
      		const { user } = await auth.createUserWithEmailAndPassword(email, password)

      		createUserProfileDocument(user, { username, firstname, lastname, role })
    	} catch(error) {
         	console.log("the user was not created successfully", error.message)
    	}
    }  
    
    render() {
		const { firstname, lastname, username, email, password, passwordConfirmation } = this.state

        return (
            <div className="signup-container">
				<div className="signup-form-container">
					<div className="icon-wrapper">
						<PadlockIcon id="signup-icon" title="Lock" />
					</div>

					<h1 id="signup-title">Sign Up</h1>

					<form id="signup-form" onSubmit={this.handleSubmit}>
						<div className="group">
							<FormInput
								id="firstname"
								name="firstname"
								label="First Name"
								value={firstname}
								onChange={this.handleInputChange}
								required
							/>

							<FormInput
								id="lastname"
								name="lastname"
								label="Last Name"
								value={lastname}
								onChange={this.handleInputChange}
								required
							/>
						</div>

						<FormInput
							id="username"
							name="username"
							label="Username"
							value={username}
							onChange={this.handleInputChange}
							required
						/>

						<FormInput
							id="email"
							name="email"
							label="Email"
							value={email}
							onChange={this.handleInputChange}
							type="email"
							required
						/>

						<div className="radio-group">
							<span id="radio-title">Select as appropriate</span>

							<div className="radio-container">
								<input onChange={this.handleRadioButtonChange} name="role" type="radio" id="doctor" />
								<label htmlFor="doctor">Doctor</label>
							</div>

							<div className="radio-container">
								<input onChange={this.handleRadioButtonChange} name="role" type="radio" id="patient" />
								<label htmlFor="patient">Patient</label>
							</div>
						</div>

						<div className="group">
							<FormInput
								id="password"
								name="password"
								label="Password"
								value={password}
								onChange={this.handleInputChange}
								type="password"
								required
							/>

							<FormInput
								id="passwordConfirmation"
								name="passwordConfirmation"
								label="Confirm Password"
								value={passwordConfirmation}
								onChange={this.handleInputChange}
								type="password"
								required
							/>
						</div>

						<div id="control-container">
							<CustomButton primary type="submit">submit</CustomButton>

							<Link to="/login">Already have an account? Sign in</Link>
						</div>
					</form>
				</div>
            </div>
        )
    }
}
