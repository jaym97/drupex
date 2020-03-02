import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'
import Hero from '../../components/hero/hero.component'

import './patients.styles.scss'

const imgPathContext = require.context('../../assets/hero-images/')

const PatientsPage = () => (
    <div className="patients">
        <Hero imageUrl={imgPathContext('./patients-hero.jpg')} page="patients">
            <h1></h1>
            <div className="controls">
                <CustomButton primary><Link to="patient-prescriptions">My Prescripitons</Link></CustomButton>
                <CustomButton primary><Link to="prescription-request">Make a request</Link></CustomButton>
            </div>
        </Hero>


    </div>
)

export default PatientsPage;