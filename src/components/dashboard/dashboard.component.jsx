import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DashboardChart from '../dashboard-chart/dashboard-chart.component'
import ImageUpload from '../image-upload/image-upload.component'

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
                           <li><Link to="/prescription-requests">Prescription Requests</Link></li>
                           <li><Link to="/edit-profile">Edit Profile</Link></li>
                           <li><Link to="/manage-account">Manage Account</Link></li>
                           <li><Link to="/manage-account">Handled Requests</Link></li>
                       </ul>
                   </nav>
               </div>
               <div className="dashboard-content">
                   <div className="dashboard-chart">
                       <canvas id="requests" aria-label="Handled and pending patient requests" role="img"></canvas>
                   </div>
               </div>
            </div>
        )
    }
}

export default Dashboard;