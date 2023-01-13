import { React } from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    const navLinkMenuStyle = ({ isActive }) => ({

        color: isActive ? 'white' : 'black',
        backgroundColor: isActive ? 'red' : 'aliceblue',
    })
    return (
        <Navbar className='Nav_header' bg="light" expand="lg">
            <Container>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <><NavLink to={'/'} className="nav-link nav__header" style={navLinkMenuStyle}>Home</NavLink></>
                        <><NavLink to={'/about'} className="nav-link nav__header" style={navLinkMenuStyle}>About</NavLink></>
                        <NavLink to={'/users'} className="nav-link dropdown-toggle nav__header" style={navLinkMenuStyle}>Users</NavLink>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item href="users">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
