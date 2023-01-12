import { React } from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    const navLinkMenuStyle = ({ isActive }) => ({

        color: isActive ? 'white' : 'black',
        backgroundColor: isActive ? 'red' : 'white',
    })
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <><NavLink to={'/'} className="nav-link" style={navLinkMenuStyle}>Home</NavLink></>
                        <><NavLink to={'/about'} className="nav-link" style={navLinkMenuStyle}>About</NavLink></>
                        <NavLink to={'/users'} className="nav-link dropdown-toggle" style={navLinkMenuStyle}>Users</NavLink>
                        <NavDropdown title="Users" id="basic-nav-dropdown">
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
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <NavLink to={'/'} className="nav-link" style={navLinkMenuStyle}>Home</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink to={'/about'} className="nav-link" style={navLinkMenuStyle}>About</NavLink>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <NavLink to={'/users'} className="nav-link dropdown-toggle" style={navLinkMenuStyle}>Users</NavLink>
        //                     <ul className="dropdown-menu">
        //                         <li><NavLink className="dropdown-item" >Action</NavLink></li>
        //                         <li><NavLink className="dropdown-item" >Another action</NavLink></li>
        //                         <li><NavLink className="dropdown-item" >Something else here</NavLink></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink to={'/contact'} className="nav-link" style={navLinkMenuStyle}>Contact</NavLink>
        //                 </li>
        //             </ul>
        //             <form className="d-flex" role="search">
        //                 <input
        //                     className="form-control me-2"
        //                     type="search"
        //                     placeholder="Ô tìm kiếm"
        //                     aria-label="Search"
        //                 />
        //                 <button className="btn btn-outline-success" type="submit">
        //                     Search
        //                 </button>
        //             </form>

        //         </div>
        //     </div>
        // </nav>
    )
}
