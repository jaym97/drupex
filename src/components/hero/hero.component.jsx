import React from 'react';

import './hero.styles.scss';

const Hero = ({ imageUrl, altDescription, page }) => (
    <div className="hero" id={page}>
        <div className="hero-img" style={{backgroundImage: `linear-gradient(89deg, rgba(0,0,0,0.4), rgba(0,0,0,0.3)) url(${imageUrl})`}} title={altDescription} />
    </div>
)

export default Hero;