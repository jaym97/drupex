import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import Backdrop from '../../components/backdrop/backdrop.component'
import Dashboard from '../../components/dashboard/dashboard.component'

import './doctors.styles.scss'

const DoctorsPage = () => {

    return (
        <div className="doctors">
            <Dashboard />
        </div>
    )
}
export default DoctorsPage;