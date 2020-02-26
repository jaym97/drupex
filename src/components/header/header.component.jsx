// Package import(s)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

// Component imports


// Icon import(s)
import LogoIcon from '../../assets/svg-components/logo.icon'

// Selector import(s)
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Style import(s)
import './header.styles.scss'

const Header = ({ currentUser }) => (
    <header className="header">
        <Link to="/">
            <LogoIcon />
            <span className="logo-text">Drupex</span>
        </Link>

        <div className="spacer" />

        <nav className="nav-links">
            <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/doctors">Doctors</Link></li>

                <li><Link to="/patients">Patients</Link></li>

                <li><Link to="/contact-us">Contact Us</Link></li>
                
                {/* checking currentUser state and populating the login button's text accordingly */}
                {
                    currentUser ?
                    <li><Link to="/" onClick={() => auth.signOut()}>Sign Out</Link></li> :
                    <li><Link to="/login">Login</Link></li>
                }
            </ul>
        </nav>
    </header>
)

// updating state using a user and cart selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);