// Package import(s)
import React from 'react'
import { Link } from 'react-router-dom'

// Component import(s)
import CustomButton from '../../components/custom-button/custom-button.component'
import Hero from '../../components/hero/hero.component'

// Icon imports
import AllergiesIcon from '../../assets/svg-components/allergies.icon'
import DrugIcon from '../../assets/svg-components/drug.icon'
import PatientIcon from '../../assets/svg-components/patient.icon'
import UserIcon from '../../assets/svg-components/user.icon'
import VitalSignsIcon from '../../assets/svg-components/vital-signs.icon'

// Style import(s)
import './home.styles.scss'
import MedicalHistoryIcon from '../../assets/svg-components/medical-history.icon'

const imagePath = require.context('../../assets/hero-images/')

const HomePage = () => (
    <div className="home-page">
        <Hero imageUrl={imagePath("./home-hero.jpg")} page="home">
            <div className="hero-text">
                <h1>Minimize prescription errors</h1>
            </div>
            <CustomButton primary>Get Started</CustomButton>
        </Hero>

        <main>
        <section className="features-container">
                <h2>
                    Drupex uses machine learning to ensure safe prescriptions
                </h2>

                <p>The system ascertains just what to prescribe using metrics including these:</p>

                <article className="features-wrapper">
                    <div className="feature">
                        <PatientIcon id="patient icon" />
                        <span>Current ailment</span>
                    </div>
                    <div className="feature">
                        <VitalSignsIcon />
                        <span>Vital signs</span>
                    </div>
                    <div className="feature">
                        <DrugIcon id="drug icon" />
                        <span>Current medications</span>
                    </div>
                    <div className="feature">
                        <MedicalHistoryIcon id="medical history of patient" />
                        <span>Medical history</span>
                    </div>
                    <div className="feature">
                        <AllergiesIcon />
                        <span>Allergies</span>
                    </div>
                </article>
            </section>

            <section className="steps-container">
                <h2>Get a prescription quickly in four(4) simple steps</h2>

                <Hero imageUrl={imagePath('./steps-hero.png')} page="steps">
                    <div className="steps-wrapper">
                        <div className="step">
                           <UserIcon />
                           <span>Sign up or login if you already have an account with us</span>
                           <CustomButton primary><Link to="/signup">Sign up</Link></CustomButton> 
                        </div>

                        <div className="step">
                           <UserIcon />
                           <span>Describe your ailment</span> 
                        </div>

                        <div className="step">
                           <UserIcon />
                           <span>Get a prescription and see possible alternatives based on certain situations </span> 
                        </div>

                        <div className="step">
                           <UserIcon />
                           <span>Confirm your subscription</span> 
                        </div>
                    </div>
                </Hero>
            </section>
        </main>
    </div>
)

export default HomePage;