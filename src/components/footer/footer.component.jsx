// Package import(s)
import React from 'react'
import { Link } from 'react-router-dom'

// Icon import(s)
import FacebookIcon from '../../assets/svg-components/facebook.icon'
import LinkedInIcon from '../../assets/svg-components/linkedin.icon'
import TwitterIcon from '../../assets/svg-components/twitter.icon'

// Style import(s)
import './footer.styles.scss'

const Footer = () => (
    <footer>
        <div className="main-links">
            <div className="column">
                <Link to="/about-us">About us</Link>
                <Link to="/think-tank">How it works</Link>
                <Link to="/patients">Get a prescription</Link>
                <Link to="/prescription-requests">Make a prescription</Link>
            </div>

            <div className="column">
                <Link to="/contact-us">Contact us</Link>
                <Link to="/help">FAQ & Help</Link>
            </div>
        </div>

        <div className="other-links">
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank">
                    <FacebookIcon id="click here to go to our (non-existent :D) facebook page" />
                </a>
                <a href="https://www.linkedin.com/in/jason-omemu" target="_blank">
                    <LinkedInIcon id="click here to reach out on LinkedIn" />
                </a>
                <a href="https://www.linkedin.com/in/jason-omemu" target="_blank">
                    <TwitterIcon id="click here to reach out on Twitter" />
                </a>
            </div>
            <div className="other-details">
                <Link to="/icon-credits">Icon credits</Link>
            </div>
        </div>
    </footer>
)

export default Footer;