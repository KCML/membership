import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '../misc/logo512.png';

import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler,} from 'reactstrap';

const TopNavBar = () => {
    return(
        <Navbar color="light" light expand="md" fixed="top">
            <NavbarBrand tag={Link} to="/">{Logo}</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/Register">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default TopNavBar;