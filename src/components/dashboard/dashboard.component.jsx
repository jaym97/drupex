import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import DashboardChart from '../dashboard-chart/dashboard-chart.component'
import ImageUpload from '../image-upload/image-upload.component'

import PrescriptionRequests from '../../pages/prescription-requests/prescription-requests.page'

import CogsIcon from '../../assets/svg-components/cogs.icon'
import ConfirmedIcon from '../../assets/svg-components/confirmed.icon'
import DashboardIcon from '../../assets/svg-components/dashboard.icon'
import EditProfileIcon from '../../assets/svg-components/edit-profile.icon'
import MultipleMailIcon from '../../assets/svg-components/multiple-mail.icon'

import './dashboard.styles.scss'

class Dashboard extends Component {
    state = {

    }

    render() {
        
        return (
            <div className="dashboard-wrapper">
               <div className="dashboard-panel">
                   <nav>
                       <ul>
                            <li id="profile-img"><ImageUpload /></li>
                            <li>
                                <DashboardIcon />
                                <Link to="/doctors">Dashboard</Link>
                            </li>
                            <li>
                                <MultipleMailIcon id="unread" title="Check your assigned prescription request" />
                                <Link to="/doctors/prescription-requests">Prescription Requests</Link>
                            </li>
                            <li>
                                <EditProfileIcon />
                                <Link to="/edit-profile">Edit Profile</Link>
                            </li>
                            <li>
                                <CogsIcon />
                                <Link to="/manage-account">Manage Your Account</Link>
                            </li>
                            <li>
                                <ConfirmedIcon />
                                <Link to="/manage-account">Handled Requests</Link>
                            </li>
                       </ul>
                   </nav>
               </div>
               <div className="dashboard-content">
                   <Switch>
                       <Route path="/doctors/prescription-requests" component={PrescriptionRequests} />
                   </Switch>
               </div>
            </div>
        )
    }
}

export default Dashboard;