import React from 'react'
import { Link } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


import './login.styles.scss'


class LoginPage extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        // awaiting user authentication and catching any errors if call fails
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({ email: '', password: '' });
        } catch (error){
            console.log("user failed to sign in", error.message);
        }

    }

    render() {
        return (
            <div className="login">
                <div className="login-wrapper">
                    <h1>Log in</h1>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="Email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            type="email"
                            required
                        />
                        <FormInput
                            label="Password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            handleChange={this.handleChange}
                            type="password"
                            required
                        />

                        <div className="login-controls">
                            <CustomButton primary>login</CustomButton>
                            <CustomButton onClick={signInWithGoogle} googleSignIn>Sign in with Google</CustomButton>
                        </div>

                        <Link to="/signup">Create an Account</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;