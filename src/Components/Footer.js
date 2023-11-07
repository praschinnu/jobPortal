import React from 'react'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (



    <div className=''>
              <Row className='mt-2 p-2 bg-black'>
        <Col lg={3} md={6} sm={12} xs={12}>
        <b className='text-primary'> Job Hunt</b>
          <i>
            <p className='text-white'>  There are many variations of passages of lorem ipsum, but the majority have suffered alteration in some form</p>
          </i>

        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <u className='text-primary'> Helpfull Links</u><br />
          <a style={{ textDecoration: 'none', color: 'white' }} href="">Contact</a><br />
          <a style={{ textDecoration: 'none', color: 'white' }} href="">FAQs</a><br />
          <a style={{ textDecoration: 'none', color: 'white' }} href="">Live Chat</a><br />

        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <p className='text-primary'>Services</p>
          <p className='text-white'>Company Reviews</p>
          <p className='text-white'>Accounts Reviews</p>
          <p className='text-white'>HR Cousulting</p>
          <p className='text-white'>SEO Optimisation</p>

        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <b className='text-primary'>Contact Us</b>
<input type="text" className='form-control-primary w-75 ' placeholder='enter email' />
          <button className='btn btn-dark mt-2 w-75'>send</button> <br />
          <i class="fa-brands fa-instagram text-white fa-2x mt-3 ms-3" ></i>
          <i class="fa-brands fa-facebook text-white fa-2x mt-3 ms-4" ></i>
          <i class="fa-brands fa-twitter text-white fa-2x mt-3 ms-4" ></i>
          <i class="fa-brands fa-github text-white fa-2x mt-3 ms-4" ></i>
        </Col>
        <p className='text-center text-info'>@2023. job hunt.All rights reserved</p>
      </Row>
    

    </div>
  )
}

export default Footer