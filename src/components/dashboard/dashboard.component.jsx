import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import DashboardChart from '../dashboard-chart/dashboard-chart.component'
import ImageUpload from '../image-upload/image-upload.component'

import './dashboard.styles.scss'
import PrescriptionRequests from '../../pages/prescription-requests/prescription-requests.page'

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
                           <li><Link to="/doctors/prescription-requests">Prescription Requests</Link></li>
                           <li><Link to="/edit-profile">Edit Profile</Link></li>
                           <li><Link to="/manage-account">Manage Account</Link></li>
                           <li><Link to="/manage-account">Handled Requests</Link></li>
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