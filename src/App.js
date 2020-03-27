// Package import(s)
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Component import(s)
import Backdrop from './components/backdrop/backdrop.component'
import Drawer from './components/drawer/drawer.component'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import MobileHeader from './components/mobile-header/mobile-header.component'

// Page import(s)
import DoctorsPage from './pages/doctors/doctors.page'
import HomePage from './pages/home/home.page'
import LoginPage from './auth/login/login.auth'
import PatientsPage from './pages/patients/patients.page'
import PatientPrescriptions from './pages/patient-prescriptions/patient-prescriptions.page'
import PrescriptionRequest from './pages/prescription-request/prescription-request.page'
import SignUpPage from './auth/sign-up/sign-up.auth'

// Firebase method import
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Selectors and actions imports
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// Style import(s)
import './App.css';

class App extends React.Component {
  state = {
    drawerIsOpen: false
  }

  unsubscribeFromAuth = null;

  /* Destructuring setCurrentUser action from the props and setting up a subscription to listen
     for firebase database changes when users get authenticated by signing in and out and creating
     new accounts. The onAuthStateChanged method combined with async ... await creates
     an observer that is always listening for these changes */
  componentDidMount() {
    const { setCurrentUser } = this.props;
  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
  
      setCurrentUser(userAuth);
    });
  }

  toggleDrawer = () => {
    this.setState(({ drawerIsOpen }) => {
      return {drawerIsOpen: !drawerIsOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({drawerIsOpen: false})
  }

  render() {
    let backdrop;
    const { drawerIsOpen } = this.state

    if(drawerIsOpen){
      backdrop = <Backdrop clickHandler={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Header />
        <MobileHeader hamburgerClickHandler={this.toggleDrawer} />
        <Drawer isOpen={drawerIsOpen} toggleDrawer={this.toggleDrawer} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* redirect user back to the homepage if login or signup route is visited
              and user is already signed in */}
          <Route 
            exact 
            path='/login' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginPage />)} 
          />
          <Route 
            exact 
            path='/signup' 
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpPage />)} 
          />

          <Route path="/doctors" render={() =>this.props.currentUser ? this.props.currentUser.role == 'patient' ? <Redirect to='/patients' />: (<DoctorsPage />) : (<LoginPage />)} />
          <Route path="/patients" render={() =>this.props.currentUser ? this.props.currentUser.role == 'doctor' ? <Redirect to='/doctors' />: (<PatientsPage />) : (<LoginPage />)} />
          <Route path="/prescription-request" component={PrescriptionRequest} />
          <Route path="/patient-prescriptions" component={PatientPrescriptions} />
        </Switch>
  
        <Footer />
      </div>
    )
  }
}

// Connecting the current user state the App component with a selector so only the
// part of the state the App component uses gets updated
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// Dispatching setCurrentUser action and connecting it to the App component
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
