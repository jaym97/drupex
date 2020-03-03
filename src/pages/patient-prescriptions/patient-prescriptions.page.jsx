import React from 'react'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

import Hero from '../../components/hero/hero.component'

import './patient-prescriptions.styles.scss'

const imgPathContext = require.context('../../assets/hero-images/')

const PatientPrescriptions = () => (
    <div className="patient-prescriptions">
        <Hero imageUrl={imgPathContext('./patient-prescriptions.jpg')} page="patient-prescriptions">
            <table className="minimalistBlack">
                <thead>
                    <tr>
                        <th>Suspected Ailment</th>
                        <th>Symptoms and Remarks</th>
                        <th>Edit Request</th>
                        <th>Delete Request</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Corona virus</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore repudiandae aspernatur velit sit recusandae nobis! Autem temporibus assumenda quas nihil, earum molestias fugit accusantium enim doloribus dignissimos delectus sapiente!</td>
                        <td><EditRoundedIcon /></td>
                        <td><DeleteForeverRoundedIcon /></td>
                    </tr>

                    <tr>
                        <td>Sars</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia velit quasi ut pariatur vero, aspernatur nemo, maxime voluptatem sunt adipisci aliquam ad sint voluptatum deserunt debitis molestias distinctio culpa.</td>
                        <td><EditRoundedIcon /></td>
                        <td><DeleteForeverRoundedIcon /></td>
                    </tr>
                </tbody>
            </table>
        </Hero>
    </div>
)

export default PatientPrescriptions