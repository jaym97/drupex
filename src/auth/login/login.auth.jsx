import React from 'react'

import CustomButton from '../../components/custom-button/custom-button.component'
import FormInput from '../../components/form-input/form-input.component'

import './login.styles.scss'
import Hero from '../../components/hero/hero.component'

const imgPathContext = require.context('../../assets/hero-images/')

class LoginPage extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="login">
                <Hero imageUrl={imgPathContext('./login-hero.jpg')} page="login" />
                <div>
                    <h1>Log in</h1>
                    <form >
                        <FormInput
                            name="username"
                            label="username or email"
                            type="email"
                            value={this.state.username}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            name="password"
                            label="password"
                            type="password"
                            value={this.state.password}
                            handleChange={this.handleChange}
                            required
                        />

                        <CustomButton primary type="submit">Log In</CustomButton>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;