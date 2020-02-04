import React from 'react';

import './hero.styles.scss';

const Hero = ({ imageUrl, children, page }) => (
    <div 
        style={{backgroundImage: `linear-gradient(89deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.6)), url(${imageUrl})`}} 
        className="hero" 
        id={page}
    >
        {children}
    </div>
)

export default Hero;