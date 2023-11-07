import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>

            <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary">
                <Container fluid>

                    <Link to='/'>
                        <Navbar.Brand className='mt-1 p-2 text-white' href="#"><h1><b>J</b>ob <b>H</b>unt</h1></Navbar.Brand>

                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Link to={'/'}>
                            <Button className='btn btn-dark rounded'>START APPLYING</Button>

                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;