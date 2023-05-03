import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { AuthContext } from "../../../providers/AuthProviders";

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log(user)


  const handleLogout = ()=>{

  }

  
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="lite" variant="lite">
        <Navbar.Brand href="#home">
          <img src="/logo.png" height="60px" width="50px" alt="" />{" "}
          <span style={{ fontSize: "30px", fontWeight: "500" }}>Chef Home</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto n_link">
            <NavLink to="/home"  className={({ isActive }) =>
                      isActive
                        ? "active"                        
                        : "default"
                    }>Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Nav>
          <Nav>
            {
              user && <img src={user.photoURL} title={user ?.displayName}/>
            }
            {/* <span>{user.displayName} */}
            {
              user ? <Button variant="outline-success" onClick={handleLogout}>Logout</Button>: <Link to="/login"><Button variant="outline-success">Login</Button></Link>
            }
            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
