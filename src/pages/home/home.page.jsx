// Package import(s)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Component import(s)
import CustomButton from '../../components/custom-button/custom-button.component'
import Hero from '../../components/hero/hero.component'

// Icon imports
import AllergiesIcon from '../../assets/svg-components/allergies.icon'
import ConfirmedIcon from '../../assets/svg-components/confirmed.icon'
import DrugIcon from '../../assets/svg-components/drug.icon'
import MedicalHistoryIcon from '../../assets/svg-components/medical-history.icon'
import PatientIcon from '../../assets/svg-components/patient.icon'
import ReceiveFileIcon from '../../assets/svg-components/receive-file.icon'
import TypeTextIcon from '../../assets/svg-components/type-text.icon'
import UserIcon from '../../assets/svg-components/user.icon'
import VitalSignsIcon from '../../assets/svg-components/vital-signs.icon'

import { selectCurrentUser } from '../../redux/user/user.selectors';

// Style import(s)
import './home.styles.scss'

const imagePath = require.context('../../assets/hero-images/')

const HomePage = ({ currentUser }) => (
    <div className="home-page">
        <Hero imageUrl={imagePath("./home-hero.jpg")} page="home">
            <div className="hero-text">
                <h1>Minimize prescription errors</h1>
            </div>
            <CustomButton primary><Link to={currentUser ? currentUser.role == 'patient' ? '/patients' : '/doctors' : '/login'}>Get Started</Link></CustomButton>
        </Hero>

        <main>
            <section className="description-container">
                <div className="description-wrapper">
                    <article>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus rerum fugit quis perferendis beatae, voluptates atque, laborum eius esse ex placeat? Molestias nihil quisquam, iure numquam corrupti itaque cum?</p>
                    </article>

                    <article>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus rerum fugit quis perferendis beatae, voluptates atque, laborum eius esse ex placeat? Molestias nihil quisquam, iure numquam corrupti itaque cum?</p>
                    </article>

                    <article>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus rerum fugit quis perferendis beatae, voluptates atque, laborum eius esse ex placeat? Molestias nihil quisquam, iure numquam corrupti itaque cum?</p>
                    </article>
                </div>
            </section>

            <section className="steps-container">
                <Hero imageUrl={imagePath('./steps-hero.png')} page="steps">
                    <h2>Get a prescription quickly in four(4) simple steps</h2>

                    <div className="steps-wrapper">
                        <div className="step">
                           <UserIcon />
                           <span>Login, or create an account</span>
                           <CustomButton primary><Link to="/login">Login</Link></CustomButton> 
                        </div>

                        <div className="step">
                           <TypeTextIcon />
                           <span>Describe your ailment and submit the request</span> 
                        </div>

                        <div className="step">
                           <ConfirmedIcon />
                           <span>Confirm your request</span> 
                        </div>

                        <div className="step">
                           <ReceiveFileIcon />
                           <span>Get a reviewed prescription from a doctor advised by our system</span> 
                        </div>

                    </div>
                </Hero>
            </section>

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
        </main>
    </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(HomePage);