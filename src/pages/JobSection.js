import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function JobSection() {
    const [company, setCompany] = useState([])
   
    



    //function api call
    const getAllCompany = async () => {
        const result = await axios.get('/company.json')
        setCompany(result.data.company);
    }
    useEffect(() => {
        getAllCompany()
    }, [])
    console.log(company);

    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4 text-primary'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            {/* featured job card */}
            
                <Row>
                {
                    
                    company.length > 0 ? company.map(i => (
                        
                           <Col xs={12} lg={6} md={12}>
                                <Card style={{ width: '400px', height: '350px' }}
                                 className='rounded text-primary mt-3' >
                                    <Card.Img variant="top" style={{ width: '200px', marginLeft: '100px' }}
                                     src={i.company_logo} />
                                    <Card.Body>
                                        <Card.Title >{i.job_title}</Card.Title>
                                        <Card.Text className='text-start'>
                                            <p>{i.company_name}</p>
                                        </Card.Text>
                                        <Card.Text className='text-start'>
                                            <p><i class="fa-solid fa-location-dot"></i>
                                                {i.location}</p>
                                        </Card.Text>
                                        <Card.Text className='text-start'>
                                            <p> <i class="fa-solid fa-dollar-sign"></i>
                                              salary:{i.salary}</p>
                                        </Card.Text>
    
    
    
                                        <Link to={`/details/${i.id}`} style={{textDecoration:'none'}}> 
                                        <Button  className=' custom-btn mt-6' variant="primary">VIEW DETAILS
                                        </Button>
                                        
                                        </Link>


                                    </Card.Body>
                                </Card>
                           </Col>
                        
                    )) : <h1>no data presnt</h1>
                }
                



            </Row>
        </div>
    )
}

export default JobSection