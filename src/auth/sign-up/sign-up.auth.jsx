import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [state, setRole] = useState({
    doctor: false,
    patient: false
  })

  const initialState = {
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    passwordConfirmation: '',
    email: ''
  }

  const [{username, firstname, lastname, password, passwordConfirmation, email}, setState] = useState(initialState)

  const emptyUserState = () => {
    setState({ ...initialState });
  }

  const handleChange = name => event => {
    setRole({ ...state, [name]: event.target.checked });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const { doctor, patient } = state;

  const error = [doctor, patient].filter(v => v).length !== 1;

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== passwordConfirmation){
      alert("passwords don't match");
      return
    }

    const role = doctor ? 'doctor' : 'patient'

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { username, firstname, lastname, role });

      emptyUserState()
      
    } catch(error) {
         console.log("the user was not created successfully", error.message);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                value={firstname}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastname}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoComplete="username"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select your role</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={doctor} onChange={handleChange('doctor')} value="doctor" />}
                  label="Doctor"
                />
                <FormControlLabel
                  control={<Checkbox checked={patient} onChange={handleChange('patient')} value="patient" />}
                  label="Patient"
                />
              </FormGroup>
              <FormHelperText>You can only choose one</FormHelperText>
            </FormControl>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                value={passwordConfirmation}
                label="Confirm Password"
                type="password"
                id="passwordConfirmation"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}