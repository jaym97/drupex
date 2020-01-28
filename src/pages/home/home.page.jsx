// Package import(s)
import React from 'react'

// Component import(s)
// import CustomButton from '../../components/custom-button/custom-button.component'
import Hero from '../../components/hero/hero.component'

// Style import(s)
import './home.styles.scss'

const imagePath = require.context('../../assets/hero-images/')

const HomePage = () => (
    <div className="home-page">
        <Hero imageUrl={imagePath("./home-hero.jpg")} altDescription="Hero image of a doctor holding something" page="home" />

        <section className="features-section">
            <h1>Lorem Ipsum</h1>

            <article className="features-wrapper">
                <div className="feature">
                    {/* SvgIcon */}
                    <span>description</span>
                </div>
                <div className="feature">
                    {/* SvgIcon */}
                    <span>description</span>
                </div>
                <div className="feature">
                    {/* SvgIcon */}
                    <span>description</span>
                </div>
                <div className="feature">
                    {/* SvgIcon */}
                    <span>description</span>
                </div>
                <div className="feature">
                    {/* SvgIcon */}
                    <span>description</span>
                </div>
            </article>
        </section>
    </div>
)

export default HomePage;