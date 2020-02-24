import React from 'react'

import './doctors.styles.scss'

const DoctorsPage = () => {
    const stu = document.querySelector("#dashboard-wrapper")
    // const stuff = stu.querySelectorAll('nav > ul > li')
    console.log(stu)

    return (
        <div className="doctors">
            <div className="dashboard-wrapper">
                <nav>
                    <ul>
                        <li>Bread</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>

            <div className="dashboard-display"></div>
        </div>
    )
}
export default DoctorsPage;