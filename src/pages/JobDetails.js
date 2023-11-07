import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function JobDetails() {

  const notify = () => toast.success('Applied Sucessfully', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const [allCompanys, setCompanys] = useState([])

  const param = useParams()
  // const id=param.id
  var { id } = param  //destructuring

  const getAllCom = async () => {
    const result = await axios.get('/company.json')
    setCompanys(result.data.company);
  }

  useEffect(() => {
    getAllCom()

  }, [])

  // console.log(id);
  // console.log(allCompanys);


  //find single rest
  const singleCom = allCompanys.find(i => i.id == id)
  console.log(singleCom);



  return (
    <div>
      <h1 className='text-center p-3 text-primary'>Google LLC- Job Details</h1>


      {
        singleCom ?
          <Row>
            <Col lg={6} sm={12} xs={12} md={6}>
              <h3 className='text-primary p-3'>Job Description:</h3>
              <p className='p-3'> {singleCom.job_description}</p>
              <h3 className='text-primary p-3'>Job Responsibility : </h3>
              <p className='p-3'>{singleCom.job_responsibility}</p>
              <h3 className='text-primary p-3'>Educations Requirements:</h3>
              <p className='p-3'>{singleCom.educational_requirements}</p>
              <h3 className='text-primary p-3'>Experience:</h3>
              <p className='p-3'>{singleCom.experiences}</p>
            </Col>

            <Col lg={6} sm={12} xs={12} md={6}>
            <Card style={{width:'300px',marginLeft:'200px'}} >

            <Card.Header className='text-primary'><b>Job Details</b></Card.Header>

            <Card.Body>
              <Card.Title><b className='text-primary'>Salary:</b> 
              <p>{singleCom.salary}</p></Card.Title>

              <Card.Title> <b className='text-primary'>Job Titile:</b>
               <p>{singleCom.job_title}</p> </Card.Title> 

              
              <Card.Header className='text-primary'><b>Contact Information</b></Card.Header>
              <Card.Text>
                <b>Phone:</b><p>{singleCom.contact_information?.phone}</p>
              </Card.Text>
              <Card.Text>
                <b>Email:</b><p>{singleCom.contact_information?.email}</p>
              </Card.Text>
              <Card.Text>
                <b>Address:</b><p>{singleCom.location}</p>
              </Card.Text>


              <Button onClick={notify} className='btn btn-primary text-end' >APPLY NOW </Button>
              <ToastContainer />

              
            </Card.Body>
          </Card>


            </Col>

          </Row>
          :
          <Row>
            <h1>no data</h1>
          </Row>
      }
    </div>
  )
}

export default JobDetails