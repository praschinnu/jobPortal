import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobCategories from './JobCategories'



function LandingPage() {
    return (
        <div>

            <Container>
                <Row className='mt-5'>
                    <Col lg={6} md={12} xs={12} sm={12}>
                        <div className='mt-4'>
                            <h1> <span>O</span>ne <span>S</span>tep <br /> <span>C</span>loser <span>T</span>o<span> Y</span>our 
                                <br /><span>Dream Job</span></h1>
                            <p className='fs-6 mt-3'> Explore thousand of job opportunities with all the information you need. Its your future. Come find it . Manage all your job applications from start to finish.Providing a platform for employers to post job listings and reach a wider pool of job applicants. Improving the efficiency and speed of the job search and recruitment process.</p>
<button className='btn btn-primary rounded'>GET STARTED</button>
                        </div>
                    </Col>

                    <Col lg={6} md={12} xs={12} sm={12}>
                    <img className='w-100' style={{height:'350px'}} src="https://i.postimg.cc/pTjNjgsx/Pngtree-recruiting-looking-for-cattle-to-4544105.png" alt="" />

                    </Col>
                </Row>

                <Row>
                    <JobCategories></JobCategories>
                </Row>
            </Container>

        </div>
    )
}

export default LandingPage