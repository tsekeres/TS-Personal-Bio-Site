import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const authenticated = () => (
    <>
      <NavItem>
        <Link className='nav-link' to='/projects-update'>
          Update Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/technologies-update'>
          Update Technologies
        </Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/home">Tad Sekeres | Software Developer</NavbarBrand>
        <NavItem>
          <Link className="nav-link" to="/about">
            About Me
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/technologies">
            Technologies
          </Link>
        </NavItem>
        <Nav className="mr-auto" navbar>
          {admin && authenticated()}
          {admin !== null && (
            <NavItem>
              {admin ? (
                <Button color="danger" onClick={signOutUser}>
                  Sign Out
                </Button>
              ) : (
                <Button color="info" onClick={signInUser}>
                  Admin?
                </Button>
              )}
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
};

export default NavBar;
