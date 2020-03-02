import React from 'react'

import Hero from '../../components/hero/hero.component'

import './patient-prescriptions.styles.scss'

const imgPathContext = require.context('../../assets/hero-images/')

const PatientPrescriptions = () => (
    <div className="patient-prescriptions">
        <Hero imageUrl={imgPathContext('./patient-prescriptions.jpg')} page="patient-prescriptions">
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
                        <td>cell3_1</td>
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
        </Hero>
    </div>
)

export default PatientPrescriptions