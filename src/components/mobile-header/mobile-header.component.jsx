// Package import(s)
import { Link } from 'react-router-dom'
import React from 'react'

// Component import(s)
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component'

// Icon import(s)
import LogoIcon from '../../assets/svg-components/logo.icon'
import UserIcon from '../../assets/svg-components/user.icon'
import SearchIcon from '../../assets/svg-components/search.icon'

// Style import(s)
import './mobile-header.styles.scss'

const MobileHeader = ({ hamburgerClickHandler }) => {
    return (
        <nav className="mobile-header">
            <HamburgerMenu clickHandler={hamburgerClickHandler} />

            <Link to="/">
                <LogoIcon />
                <span className="logo-text">Drupex</span>
            </Link>

            <div className="spacer" />

            <ul>
                <li><SearchIcon id="Click here to search for what you need to find" /></li>
                <li><UserIcon id="Click here to manage your account and sign in or out" /></li>
            </ul>
        </nav>
    )
}

export default MobileHeader;