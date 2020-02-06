// Package import(s)
import { Link } from 'react-router-dom'
import React from 'react'

// Component import(s)
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'


// Icon import(s)
import LogoIcon from '../../assets/svg-components/logo.icon'

// Style import(s)
import './mobile-header.styles.scss'

const MobileHeader = () => (
    <nav className="mobile-header">
        <Link to="/">
            <LogoIcon />
        </Link>

        <div className="spacer" />

        <ul>
            <li><Link className="nav-links" to="/login">Sign In</Link></li>
            <li><HamburgerMenu /></li>
        </ul>
    </nav>
)

export default MobileHeader;