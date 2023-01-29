import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/tasklist" activeStyle>
            Task List
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/logout" activeStyle>
            Logout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

