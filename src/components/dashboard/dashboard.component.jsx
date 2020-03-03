import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './dashboard.styles.scss'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
               <div className="dashboard-panel">
                   <nav>
                       <ul>
                           <li><Link to="/prescription-requests">Prescription Requests</Link></li>
                           <li><Link to="/edit-profile">Edit Profile</Link></li>
                           <li><Link to="/manage-account">Manage Account</Link></li>
                           <li><Link to="/manage-account">Handled Requests</Link></li>
                       </ul>
                   </nav>
               </div>
               <div className="dashboard-content">
                   {/* <DashboardDetails /> */}
               </div>
            </div>
        )
    }
}

export default Dashboard;