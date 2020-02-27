import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';


import './login.styles.scss'


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
                <div className="login-wrapper">
                    <h1>Log in</h1>
                    <form >
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                required
                                id="username"
                                label="Username"
                                name="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                type="password"
                            />
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{backgroundColor: '#e5446d', width: '50%', marginLeft: 'auto'}}
                        >
                            Login
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;