import React from 'react'
import { Col, Row } from 'react-bootstrap'



function JobCategories() {


    return (
        <div>
            <Row>
                <h1 className='text-center p-3 mt-3 text-primary'>Job Categories List</h1>
                <p className='text-center'> Explore thousands of job opportunities with all the information you need.Its your future</p>

                <Col>
                    <div id='a1' className='rounded p-2'>
                        <h5>Account & Finance</h5>
                        <p>300+ jobs Available</p>
                        <div className='text-center'><i class="fa-sharp fa-solid fa-calculator"></i></div>

                    </div>
                </Col>
                <Col>
                    <div id='a1' className='rounded'>

                        <h5>Creative design</h5>
                        <p>100+ jobs Available</p>
                    </div>
                </Col>
                <Col>
                    <div id='a1' className='rounded'>
                        <img src="" alt="" />
                        <h5>Marketing & Sales</h5>
                        <p>150+ jobs Available</p>
                    </div>

                </Col>
                <Col>
                    <div id='a1' className='rounded'>
                        <img src="" alt="" />
                        <h5>Engineering Job</h5>
                        <p>220+ jobs Available</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default JobCategories