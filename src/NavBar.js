import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <Container className='d-flex justify-content-center'>
            <Navbar >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id='nav-buttons'>
                            <LinkContainer to='/'>
                                <Nav.Link>about</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/blog'>
                                <Nav.Link>blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cv'>
                                <Nav.Link>cv</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/projects'>
                                <Nav.Link>projects</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavBar;