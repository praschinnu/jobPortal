import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





function JobSection({job}) {
        return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            {/* featured job card */}
            <div className='p-4'>

                <Card style={{ width: '400px',height:'350px' }} >
                    <Card.Img variant="top" style={{width:'200px',marginLeft:'100px'}} src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" />
                    <Card.Body>
                        <Card.Title>Sr.Software Engineer</Card.Title>
                        <Card.Text>
                            <p>Goole LLC</p>
                        </Card.Text>
                        <Card.Text>
                            <p><i class="fa-solid fa-location-dot"></i>
 New York,NY</p>
                        </Card.Text>
                        <Card.Text>
                            <p> <i class="fa-solid fa-dollar-sign"></i>
Salary: $90,000-$120,000</p>
                        </Card.Text>
                        

                        
                        <Link to='/details'> <Button className=' custom-btn mt-6' variant="primary">VIEW DETAILS</Button></Link>
                    </Card.Body>
                </Card>



            </div>
        </div>
    )
}

export default JobSection