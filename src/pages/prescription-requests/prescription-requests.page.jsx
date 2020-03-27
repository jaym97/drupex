import React, { Component } from 'react'

import CustomButton from '../../components/custom-button/custom-button.component';
import Hero from '../../components/hero/hero.component'
import Modal from '../../components/modal/modal.component'

import './prescription-requests.styles.scss'

class PrescriptionRequests extends Component {
    state = { modalIsOpen: false }

    showModal = () => {
        this.setState({ modalIsOpen: true });
    };
    
    hideModal = () => {
        console.log(this.state.modalIsOpen)
        this.setState({ modalIsOpen: false });
    };


    render() {
        const imgPathContext = require.context('../../assets/hero-images/')

        return (
        <div id="prescription-requests" className="prescription-requests">
            <Hero imageUrl={imgPathContext('./login-hero.jpg')} page="prescription-requests">
            <table className="minimalistBlack">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Suspected Ailment</th>
                    <th>Symptoms</th>
                    <th>Handle Request</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Agnes Amaka</td>
                    <td>Covid-19</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere dolorem eius harum unde veniam aspernatur.</td>
                    <td>
                        <Modal isOpen={this.state.modalIsOpen} handleClose={this.hideModal}>
                            <p>Modal</p>
                            <p>Data</p>
                        </Modal>
                        <CustomButton primary onClick={this.showModal}>View</CustomButton>
                    </td>
                </tr>

                <tr>
                    <td>Agnes Amaka</td>
                    <td>Covid-19</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere dolorem eius harum unde veniam aspernatur.</td>
                    <td>
                        <Modal isOpen={this.state.modalIsOpen} handleClose={this.hideModal}>
                            <p>Modal</p>
                            <p>Data</p>
                        </Modal>
                        <CustomButton primary onClick={this.showModal}>View</CustomButton>
                    </td>
                </tr>

                <tr>
                    <td>Agnes Amaka</td>
                    <td>Covid-19</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere dolorem eius harum unde veniam aspernatur.</td>
                    <td>
                        <Modal isOpen={this.state.modalIsOpen} handleClose={this.hideModal}>
                            <p>Modal</p>
                            <p>Data</p>
                        </Modal>
                        <CustomButton primary onClick={this.showModal}>View</CustomButton>
                    </td>
                </tr>

                <tr>
                    <td>Agnes Amaka</td>
                    <td>Covid-19</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam facere dolorem eius harum unde veniam aspernatur.</td>
                    <td>
                        <Modal isOpen={this.state.modalIsOpen} handleClose={this.hideModal}>
                            <p>Modal</p>
                            <p>Data</p>
                        </Modal>
                        <CustomButton primary onClick={this.showModal}>View</CustomButton>
                    </td>
                </tr>
            </tbody>
        </table>
            </Hero>
        </div>
    )
  }
}

export default PrescriptionRequests;

// table-like structure with requests and two actions (make prescription and get suggestion)
// each request opens up into a modal
// both actions afforementioned also open up request details 

// request page is majorly a form with "send request" and "cancel" actions
// after request is made "edit" and "delete" actions are available as only one request can be made per patient
