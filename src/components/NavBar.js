import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
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
    </>
  );

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/home'>Tad Sekeres</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            {admin && authenticated()}
            {admin !== null && <>
                <NavItem>
                  <Link className="nav-link" to="/projects-update">
                    Update Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/technologies-update">
                    Update Technologies
                  </Link>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
};

export default NavBar;
