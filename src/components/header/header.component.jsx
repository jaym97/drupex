// Package import(s)
import React from 'react'
import { Link } from 'react-router-dom'

// Component imports


// Icon import(s)
import LogoIcon from '../../assets/svg-components/logo.icon'

// Style import(s)
import './header.styles.scss'

const Header = () => (
    <header className="header">
        <Link to="/">
            <LogoIcon />
            <span className="logo-text">Drupex</span>
        </Link>

        <div className="spacer" />

        <nav className="nav-links">
            <ul>
                <li>
                    <Link to="/doctors">Doctors</Link>
                </li>

                <li><Link to="/doctors">Doctors</Link></li>

                <li><Link to="/doctors">Doctors</Link></li>

                <li><Link to="/doctors">Doctors</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;