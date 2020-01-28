// Package import(s)
import React from 'react'

// Style import(s)
import './hamburger-menu.styles.scss'

const HamburgerMenu = () => (
    <button className="hamburger-menu">
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />

        <span className="visually-hidden">Hamburger menu. Click here to navigate the site</span>
    </button>
)

export default HamburgerMenu