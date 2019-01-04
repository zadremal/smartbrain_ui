import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "./Styled";

const Navigation = props => {
  return (
    <Nav>
      {props.isUserAuthenticated && (
        <NavItem>
          <Link onClick={props.onSingOut} to="/singin">
            sing out
          </Link>
        </NavItem>
      )}
      {!props.isUserAuthenticated && (
        <NavItem>
          <Link to="/singin">sing in </Link>
        </NavItem>
      )}
      {!props.isUserAuthenticated && (
        <NavItem>
          <Link to="/register">register</Link>
        </NavItem>
      )}
    </Nav>
  );
};

export default Navigation;
