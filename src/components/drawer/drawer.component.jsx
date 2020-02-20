import React from 'react'
import { Link } from 'react-router-dom'

import CogsIcon from '../../assets/svg-components/cogs.icon'
import DoctorIcon from '../../assets/svg-components/doctor.icon'
import HomeIcon from '../../assets/svg-components/home.icon'
import PatientIcon from '../../assets/svg-components/patient.icon'
import ReceiveFileIcon from '../../assets/svg-components/receive-file.icon'
import WritePrescriptionIcon from '../../assets/svg-components/write-precsription.icon'

import './drawer.styles.scss'

const Drawer = ({ isOpen, toggleDrawer }) => {
    const localImagePath = require.context('../../assets/svg-components/', true)

    return (
        <nav className={`drawer ${isOpen ? 'open' : ''}`}>    
            <div className="logo-wrapper">
                <img src={localImagePath('./logo.png')} alt="Drupex" />
            </div>

            <ul className="main-menu-items">
                <li onClick={toggleDrawer}>
                    <Link to="/">
                        <HomeIcon id="Click to go to the homepage" />
                        <span>Home</span>
                    </Link>
                </li>

                <li onClick={toggleDrawer}>
                    <Link to="/doctors">
                        <DoctorIcon id="Click to go the doctors page" />
                        <span>Doctors</span>
                    </Link>
                </li>

                <li onClick={toggleDrawer}>
                    <Link to="/patients">
                        <PatientIcon id="Click here to go to the patients page" />
                        <span>Patients</span>
                    </Link>
                </li>
            </ul>

            <ul className="other-menu-items">
                <li onClick={toggleDrawer}>
                    <Link to="/login">
                        <CogsIcon id="Click here to find out how our website works" />
                        <span>How it works</span>
                    </Link>
                </li>

                <li onClick={toggleDrawer}>
                    <Link to="/login">
                        <WritePrescriptionIcon id="Click here to find out how our website works" />
                        <span>Make a prescription</span>
                    </Link>
                </li>
                <li onClick={toggleDrawer}>
                    <Link to="/login">
                        <ReceiveFileIcon id="Click here to find out how our website works" />
                        <span>Get a precsription</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Drawer;