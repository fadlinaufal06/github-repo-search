import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router
} from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./NavbarComp.css"
import Searchresult from './Searchresult';


function NavbarComp() {
    
return (
        <Router>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="md">
                    <Navbar.Brand className='navbar-left' href="https://github.com/">
                        <FaGithub className="github-icon" size={50} />
                    </Navbar.Brand>
                    <Nav
                        className="navbar-content"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="https://github.com/team" className="link-text">Team</Nav.Link>
                        <Nav.Link href="https://github.com/enterprise" className='link-text'>Enterprise</Nav.Link>
                        <Nav.Link href="https://github.com/marketplace"className='link-text'>Marketplace</Nav.Link>
                        <Nav.Link href="https://github.com/explore"className='link-text'>Explore</Nav.Link>
                    </Nav>
                </Navbar>
                
            </div>
            <div>
                <Searchresult justify-content-center/>
            </div>
                
        </Router>
        
    )      
    }
export default NavbarComp; 