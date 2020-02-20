// Package import(s)
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Component import(s)
import Backdrop from './components/backdrop/backdrop.component'
import Drawer from './components/drawer/drawer.component'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import MobileHeader from './components/mobile-header/mobile-header.component'

// Page import(s)
import DoctorsPage from './pages/doctors/doctors.page'
import HomePage from './pages/home/home.page'
import PatientsPage from './pages/patients/patients.page'
import SignInSide from './auth/login/login.page'
import SignUpPage from './auth/sign-up/sign-up.auth'

// Style import(s)
import './App.css';

class App extends React.Component {
  state = {
    drawerIsOpen: false
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
        {/* <Header /> */}
        <MobileHeader hamburgerClickHandler={this.toggleDrawer} />
        <Drawer isOpen={drawerIsOpen} toggleDrawer={this.toggleDrawer} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={SignInSide} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/doctors" component={DoctorsPage} />
          <Route path="/patients" component={PatientsPage} />
        </Switch>
  
        <Footer />
      </div>
    )
  }
}

export default App;
