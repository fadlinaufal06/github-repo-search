import React, { Component } from 'react'
import {Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FaGithub, FaSearch } from "react-icons/fa";
import "./NavbarComp.css"
import { useState } from "react";


import Home from './Home';
import Contact from './Contact';
import About from './About'
import Searchresult from './Searchresult';



function NavbarComp() {
    const [text, setText] = useState("");
  
    const searchButton = {
      display: "flex",
      "flex-direction": "row",
      "background-color": "inherit",
      color: "inherit",
      "padding-bottom": "0.5%",
      "padding-top": "0,5%", 
      width: "100%",
      height: "2%",
    };
    const [inputValue, setInputValue] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [repos, setRepos] = React.useState([]);

    React.useEffect(() => {
        if (!inputValue) {
        return;
    }

    setIsLoading(true);

    // make API calls
    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);

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