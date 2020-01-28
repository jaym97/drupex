import React from 'react';

import './hero.styles.scss';

const Hero = ({ imageUrl, altDescription, page }) => (
    <div className="hero" id={page}>
        <img src={imageUrl} alt={altDescription} />
        <div className="overlay" />
    </div>
)

export default Hero;