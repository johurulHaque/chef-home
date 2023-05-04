import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { user, allSignOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    allSignOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="lite" variant="lite">
        <Navbar.Brand href="/home">
          <img src="/logo.png" height="60px" width="50px" alt="" />{" "}
          <span className="site_name">Chef Home</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto n_link">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Nav>
          <Nav>
            {/* {user && <img src={user?.photoURL} title={user?.displayName} />} */}
            {user && (
              <Image
                src={user?.photoURL}
                roundedCircle
                style={{ width: "40px" }}
                title={user?.displayName}
              />
            )}
            {/* <span>{user.displayName} */}
            {user ? (
              <Button variant="outline-info" onClick={handleLogout}>
               Logout <FaSignOutAlt /> 
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline-info">
                  <FaSignInAlt /> Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
