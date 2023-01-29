import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import { getUser } from '../../Utils/Common';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          {getUser() && (
	    <div>
            <NavLink to="/tasklist" activeStyle>
              Task List
            </NavLink>
            <NavLink to="/logout" activeStyle>
              Logout
            </NavLink>
	    </div>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

