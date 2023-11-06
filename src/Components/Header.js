import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div>

            <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary">
                <Container fluid>
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink} className='text-black'><i class="fa-solid fa-list"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Home</Dropdown.Item>
                            <Dropdown.Item>Applied jobs</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
<Link to='/'>
                        <Navbar.Brand className='mt-1 p-2 text-white' href="#"><h1><b>J</b>ob <b>H</b>unt</h1></Navbar.Brand>
    
</Link>                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">

                            <Button className='btn btn-dark rounded shade'>START APPLYING</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;