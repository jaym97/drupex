// Package import(s)
import React from 'react'

// Style import(s)
import './hamburger-menu.styles.scss'

const HamburgerMenu = ({ clickHandler }) => (
    <button className="hamburger-menu" onClick={clickHandler}>
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />

        <span className="visually-hidden">Open the site's navigation links.</span>
    </button>
)

export default HamburgerMenu