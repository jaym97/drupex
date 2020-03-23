import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, primary, secondary, transparent, googleSignIn, ...otherProps }) => {
    let listOfClasses = [];

    if (primary){
        listOfClasses.push('primary')
    }

    if (secondary){
        listOfClasses.push('secondary')
    }

    if (transparent){
        listOfClasses.push('transparent')
    }

    if (googleSignIn){
        listOfClasses.push('google-sign-in')
    }

    return (
        
        <button className={`custom-button ${listOfClasses.join(' ')}`} {...otherProps}>{children}</button>
    )
}

export default CustomButton;