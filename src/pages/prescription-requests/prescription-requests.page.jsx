import React, { Component } from 'react'

import Modal from '../../components/modal/modal.component'

import './prescription-requests.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component';

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
    return (
    <div className="prescription-requests">
        <table className="minimalistBlack">
            <thead>
                <tr>
                    <th>head1</th>
                    <th>head2</th>
                    <th>head3</th>
                    <th>head4</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>cell1_1</td>
                    <td>cell2_1</td>
                    <td>cell3_1</td>
                    <td>
                        <Modal isOpen={this.state.modalIsOpen} handleClose={this.hideModal}>
                            <p>Modal</p>
                            <p>Data</p>
                        </Modal>
                        <CustomButton primary onClick={this.showModal}>Handle Request</CustomButton>
                    </td>
                </tr>

                <tr>
                    <td>cell1_2</td>
                    <td>cell2_2</td>
                    <td>cell3_2</td>
                    <td>cell4_2</td>
                </tr>

                <tr>
                    <td>cell1_3</td>
                    <td>cell2_3</td>
                    <td>cell3_3</td>
                    <td>cell4_3</td>
                </tr>

                <tr>
                    <td>cell1_4</td>
                    <td>cell2_4</td>
                    <td>cell3_4</td>
                    <td>cell4_4</td>
                </tr>

                <tr>
                    <td>cell1_5</td>
                    <td>cell2_5</td>
                    <td>cell3_5</td>
                    <td>cell4_5</td>
                </tr>
            </tbody>
        </table>
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
