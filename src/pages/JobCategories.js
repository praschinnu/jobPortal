import React from 'react'
import { Col, Row } from 'react-bootstrap'
import JobSection from './JobSection'




function JobCategories() {


    return (
        <div>
            <Row>
                <h1 className='text-center p-3 mt-3 text-primary'>Job Categories List</h1>
                <p className='text-center'> Explore thousands of job opportunities with all the information you need.Its your future</p>

                <Col lg={3} md={6} sm={12} xs={12}>
                    <div id='a1' className='rounded p-2 mt-3'>
                    <img id='a2' className='rounded' src="https://img.freepik.com/free-vector/illustration-calculator-machine_53876-5566.jpg?w=740&t=st=1681135895~exp=1681136495~hmac=9b4b3931ac77d9e8850db58e8f4205a1b5ed06a516c71969c050f992e6603296"
 alt="" />

                        <h5>Account & Finance</h5>
                        <p>300+ jobs Available</p>

                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <div id='a1' className='rounded p-2 mt-3'>
                        <img id='a2' className='rounded ' src="https://img.freepik.com/free-vector/illustration-light-bulb-icon_53876-5597.jpg?w=740&t=st=1681135862~exp=1681136462~hmac=2dff853e6ca160d9427b939dd5d63b914df231c1f989d39724247c098051b265"
 alt="" />

                        <h5 >Creative design</h5>
                        <p >100+ jobs Available</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} xs={12}>
                    <div id='a1' className='rounded p-2 mt-3'>

                        <img id='a2' className=' rounded' src="https://img.freepik.com/free-vector/illustration-loudspeaker-icon_53876-5840.jpg?w=740&t=st=1681136005~exp=1681136605~hmac=038b124dcc8e86797334f6aa3859130333e1fa86188ee41a7f99fd31d87fdd03"
 alt="" />
                        <h5>Marketing & Sales</h5>
                        <p>150+ jobs Available</p>
                    </div>

                </Col>
                <Col>
                    <div id='a1' className='rounded p-2 mt-3'>
                        <img id='a2' className='rounded' src="https://img.freepik.com/free-vector/illustration-circuit_53876-5583.jpg?w=740&t=st=1681135555~exp=1681136155~hmac=e355c2f1d9abdb72e5990f777254b8b3bd11b48b6320673c6789c7b70c8de831"
 alt="" />
                        <h5>Engineering Job</h5>
                        <p>220+ jobs Available</p>
                    </div>
                </Col>
            </Row>
           <Row>
            <JobSection></JobSection>
           </Row>
        </div>
    )
}

export default JobCategories