import React from 'react';
import {
  Bars,
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/discussion' activeStyle>
            Discussion
          </NavLink>
          <NavLink to='/goal' activeStyle>
            Goals
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar